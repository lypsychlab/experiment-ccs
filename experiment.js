///// SETUP /////

// initialize jsPsych
const jsPsych = initJsPsych({})

// data pipe variables
const subject_id = jsPsych.randomization.randomID(10)

var scenario_counter = 0

///// TRIALS /////

// consent form
const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_html,
    choices: ["Consent not given", "Consent given"],
    button_html: [
        `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=C5JBVTVB', '_blank')">%choice%</button>`,
        `<button class="jspsych-btn">%choice%</button>`
    ],
    on_finish: function(data) {
        // if no consent, send back to prolific with no consent code
        if (data.response == 0) {
            document.getElementById("jspsych-content").style.margin = "auto"

            jsPsych.endExperiment(
                "You chose not to consent to participate.<br>If you were not automatically directed back to Prolific, please go back and enter the completion code C5JBVTVB"
            )
        }
    },
    data: {
        type_of_trial: "consent",
        subject_id: subject_id
    }
}

// prolific id, instructions
const prolific_id = {
    type: jsPsychSurveyText,
    questions: [
        {
            prompt: "Please copy and paste your Prolific ID here.",
            name: "prolific_id",
            required: true
        }
    ],
    data: {
        type_of_trial: "prolific",
        subject_id: subject_id
    },
    on_load: function() {
        document.getElementById("jspsych-content").style.margin = "auto"
    },
    on_finish: function(data) {
        document.getElementById("jspsych-content").style.margin = "50px auto"

        data.prolific_id = data.response["prolific_id"]
    }
}

const instructions = {
    type: jsPsychInstructions,
    pages: function() {
        var instructions_pages = []

        instructions_pages.push(
            instructions_page1
        )

        return instructions_pages
    },
    allow_keys: false,
    show_clickable_nav: true,
    data: {
        type_of_trial: "instructions",
        subject_id: subject_id
    }
}

// attention check
const attention = {
    type: jsPsychSurveyHtmlForm,
    html: attention_question,
    on_load: function() {
        scenario_counter += 1

        if (scenario_counter != 4) {
            jsPsych.finishTrial()
        }
    },
    on_finish: function(data) {
        if (data.response) {
            data.response = data.response.attention_check
        }
    },
    data: {
        type_of_trial: "attention",
        subject_id: subject_id
    }
}

// scenarios
const scenario = {
    type: jsPsychSurveyHtmlForm,
    preamble: function() {
        return scenario_description(jsPsych.timelineVariable("description"), jsPsych.timelineVariable(jsPsych.timelineVariable("info")))
    },
    html: function() {
        return scenario_questions(
            jsPsych.timelineVariable("name"),
            jsPsych.timelineVariable("person_action"),
            jsPsych.timelineVariable("object_quality"),
            jsPsych.timelineVariable("subjunctive_action"),
            jsPsych.timelineVariable("person_selection"),
            jsPsych.timelineVariable("object_selection"),
            jsPsych.timelineVariable("person_contrib"),
            jsPsych.timelineVariable("object_contrib")
        )
    },
    data: {
        type_of_trial: "scenario",
        subject_id: subject_id,
        info_type: jsPsych.timelineVariable("info"),
        scenario: jsPsych.timelineVariable("scenario")
    },
    on_finish: function(data) {
        data.person_good = data.response.person_good
        data.object_good = data.response.object_good
        data.person_selection = data.response.person_selection
        data.object_selection = data.response.object_selection
        data.person_contrib = data.response.person_contrib
        data.object_contrib = data.response.object_contrib
    }
}

const scenario_timeline = {
    timeline: [scenario, attention],
    timeline_variables: conditions,
    randomize_order: true
}

// demographics, debrief

const demographics = {
    type: jsPsychSurveyHtmlForm,
    preamble: "The following questions are optional, but should be answered thruthfully.",
    html: function() {
        return demographics_questions
    },
    data: {
        type_of_trial: "demographics",
        subject_id: subject_id
    },
    on_finish: function(data) {
        // populate data
        data.age = data.response.age

        data.gender = data.response.gender
        if (data.response.unlisted_gender != "") {
            data.gender = data.response.unlisted_gender
        }

        let re_keys = Object.keys(data.response).filter(key => data.response[key] === "on")
        if (data.response.other_race_ethnicity_text != "") {
            re_keys.push(data.response.other_race_ethnicity_text)
        }
        data.race_ethnicity = re_keys

        data.income = data.response.income
        data.education = data.response.education
        data.ses = data.response.ses

        data.party = data.response.party
        if (data.response.other_party_text != "") {
            data.party = data.response.other_party_text
        }

        data.politics = data.response.politics
        data.religiosity = data.response.religiosity
    }
}

const debrief_to_prolific = {
    type: jsPsychHtmlButtonResponse,
    stimulus: debrief_html,
    choices: ["Back to Prolific"],
    button_html: `<button class="jspsych-btn" onclick="window.open('https://app.prolific.com/submissions/complete?cc=CWUP9JJ2', '_blank')">%choice%</button>`,
    on_finish: function() {
        document.getElementById("jspsych-content").style.margin = "auto"

        jsPsych.endExperiment(
            "Thank you for your participation!.<br>Your completion code is CWUP9JJ2"
        )
    },
    data: {
        type_of_trial: "back_to_prolific",
        subject_id: subject_id
    }
}

// data pipe
const save_data_all_trials = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "aox54d6qq4gB",
    filename: `${subject_id}_all_trials.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}

const save_data_final = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "aox54d6qq4gB",
    filename: `${subject_id}_final.csv`,
    data_string: () => jsPsych.data.get().csv(),
    data: {
        type_of_trial: "data_pipe",
        subject_id: subject_id
    }
}


///// COMPILE AND RUN /////
var experiment = []

experiment.push(
    consent,
    prolific_id,
    instructions,
    scenario_timeline,
    save_data_all_trials,
    demographics,
    save_data_final,
    debrief_to_prolific
)

jsPsych.run(experiment)