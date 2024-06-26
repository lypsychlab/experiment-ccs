const consent_html = `
    <p style="text-align:left;">
        You are being asked to participate in a research study. 
        You were selected to participate in this project because you are an adult over age 18. 
        This study is sponsored by Boston College and the John Templeton Foundation.
    </p>
    <p style="text-align: left;">
        The purpose of this study is to understand how we interpret information. 
        This study will be conducted through this online survey. 
        The survey should take you about <span style="font-weight: bold;">[TIME]</span> to complete. 
        There are no direct benefits to you, 
        but you may feel gratified knowing that you helped further the scholarly work in this research area, 
        and you will be compensated <span style="font-weight: bold;">[MONEY]</span> for your participation. 
        There are no costs to you associated with your participation.
    </p>
    <p style="text-align: left;">
        The researchers do not believe participation would entail any risks or discomforts beyond those ordinarily encountered in everyday life.
    </p>
    <p style="text-align: left;">
        This Principal Investigator, Dr. Liane Young, will exert all reasonable efforts to keep your responses and your identity confidential. 
        We will not maintain within our research data any information that uniquely identifies you, such as your name, location, or Internet Protocol (IP) address. 
        In any report we publish, we will not include any information that will make it possible to identify a participant. 
        Data collected from the experiment will be coded to remove your name and any other personal identifiers. 
        All records will be secured in a locked cabinet in our lab. 
        The Institutional Review Board at Boston College and internal Boston College auditors may review the research records. 
        State or federal laws or court orders may also require that information from research study records be released. 
        Otherwise, the researchers will not release to others any information that could indicate your identity unless you give your permission, 
        or unless the researchers become legally required to do so.
    </p>
    <p style="text-align: left;">
        Although the survey will not prompt you directly to identify yourself by name, email address or the like, 
        the survey will include several items that would prompt you to provide certain demographic information, 
        such as your age, gender, ethnicity, education level and the like. 
        In combination, responses to such questions could suggest your identity. 
        Regardless, please know that the researchers will make no purposeful effort to discern your identity based on such information. 
        Additionally, please note that you may opt to leave any such questions blank.
    </p>
    <p style="text-align: left;">
        Your participation is voluntary. If you choose not to participate it will not affect your relations with Boston College. 
        Some questions on the survey, such as comprehension questions, may be required in order to complete the survey and receive compensation. 
        However, you may still choose to end your participation in the study at any time. 
        If you have questions or concerns concerning this research you may contact the Principal Investigator at 
        <a href="tel:16175520240">+1 (617) 552-0240</a> or <a href="mailto:liane.young@bc.edu">liane.young@bc.edu</a>. 
        If you have questions about your rights as a research participant, you may contact the Office for Research Protections, Boston College, at 
        <a href="tel:16175524778">+1 (617) 552-4778</a> or <a href="mailto:irb@bc.edu">irb@bc.edu</a>.
    </p>
    <p style="text-align: left;">
        If you agree to the statements above and agree to participate in this study, please select the "Consent given" button below to continue.
    </p>
`

const instructions_page1 = `
    <p style="text-align: left;">
        In this survey, you will read a series of short scenarios involving fictional people. 
        After reading each scenario, you will learn a small piece of information about the person or things involved.
        Then, you will be asked a few questions about the scenario and the person that you read about.
        <br>
        <br>
        There are 8 scenarios. The first scenario will be presented as soon as you click the button below. 
        Then, the scenarios will follow one another until you have seen all 8. 
        After you have seen all the scenarios, there will be a short demographics survey.
    </p>
`

function scenario_description(description, info) {
    let scenario_text = `
        <div style="text-align: left;">
            ${description}
            <br>
            <br>
            ${info}
        </div>
        <br>
        <hr>
    `

    return scenario_text
}

function scenario_questions(name, person_action, object_quality, subjunctive_action, person_selection, object_selection, person_contrib, object_contrib) {
    let q_person_good = `
        How good is ${name} at ${person_action}?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_0">1<br>very bad</label>
                <br>
                <input name="person_good" type="radio" value="0" id="person_good_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_1">2</label>
                <br>
                <input name="person_good" type="radio" value="1" id="person_good_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_2">3</label>
                <br>
                <input name="person_good" type="radio" value="2" id="person_good_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_3">4</label>
                <br>
                <input name="person_good" type="radio" value="3" id="person_good_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_4">5</label>
                <br>
                <input name="person_good" type="radio" value="4" id="person_good_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_5">6</label>
                <br>
                <input name="person_good" type="radio" value="5" id="person_good_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="person_good_6">7<br>very good</label>
                <br>
                <input name="person_good" type="radio" value="6" id="person_good_6" />
            </div>
        </div>
        <br>
    `

    let q_object_good = `
        How good ${object_quality}?
        <br>
        <div class="hlikert-container">
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_0">1<br>very bad</label>
                <br>
                <input name="object_good" type="radio" value="0" id="object_good_0" required />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_1">2</label>
                <br>
                <input name="object_good" type="radio" value="1" id="object_good_1" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_2">3</label>
                <br>
                <input name="object_good" type="radio" value="2" id="object_good_2" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_3">4</label>
                <br>
                <input name="object_good" type="radio" value="3" id="object_good_3" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_4">5</label>
                <br>
                <input name="object_good" type="radio" value="4" id="object_good_4" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_5">6</label>
                <br>
                <input name="object_good" type="radio" value="5" id="object_good_5" />
            </div>
            <div class="hlikert">
                <label class="hlikert-label" for="object_good_6">7<br>very good</label>
                <br>
                <input name="object_good" type="radio" value="6" id="object_good_6" />
            </div>
        </div>
        <br>
    `

    let q_person_selection = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">${person_selection}?</div>
            <label class="mtable-statement-point" for="person_selection_0">
                <input name="person_selection" type="radio" value="0" id="person_selection_0" required />
            </label>
            <label class="mtable-statement-point" for="person_selection_1">
                <input name="person_selection" type="radio" value="1" id="person_selection_1" />
            </label>
            <label class="mtable-statement-point" for="person_selection_2">
                <input name="person_selection" type="radio" value="2" id="person_selection_2" />
            </label>
            <label class="mtable-statement-point" for="person_selection_3">
                <input name="person_selection" type="radio" value="3" id="person_selection_3" />
            </label>
            <label class="mtable-statement-point" for="person_selection_4">
                <input name="person_selection" type="radio" value="4" id="person_selection_4" />
            </label>
            <label class="mtable-statement-point" for="person_selection_5">
                <input name="person_selection" type="radio" value="5" id="person_selection_5" />
            </label>
            <label class="mtable-statement-point" for="person_selection_6">
                <input name="person_selection" type="radio" value="6" id="person_selection_6" />
            </label>
        </div>
    `

    let q_object_selection = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">${object_selection}?</div>
            <label class="mtable-statement-point" for="object_selection_0">
                <input name="object_selection" type="radio" value="0" id="object_selection_0" required />
            </label>
            <label class="mtable-statement-point" for="object_selection_1">
                <input name="object_selection" type="radio" value="1" id="object_selection_1" />
            </label>
            <label class="mtable-statement-point" for="object_selection_2">
                <input name="object_selection" type="radio" value="2" id="object_selection_2" />
            </label>
            <label class="mtable-statement-point" for="object_selection_3">
                <input name="object_selection" type="radio" value="3" id="object_selection_3" />
            </label>
            <label class="mtable-statement-point" for="object_selection_4">
                <input name="object_selection" type="radio" value="4" id="object_selection_4" />
            </label>
            <label class="mtable-statement-point" for="object_selection_5">
                <input name="object_selection" type="radio" value="5" id="object_selection_5" />
            </label>
            <label class="mtable-statement-point" for="object_selection_6">
                <input name="object_selection" type="radio" value="6" id="object_selection_6" />
            </label>
        </div>
    `

    let selection_array = [q_person_selection, q_object_selection]

    shuffleArray(selection_array)

    let q_selection = `
        If you ${subjunctive_action}, how likely would you be to. . . 
        <br>
        <div class="mtable-container">
            <div class="mtable-scale-container">
                <div class="mtable-scale-spacer"></div>
                <div class="mtable-scale-point">1<br>not likely at all</div>
                <div class="mtable-scale-point">2</div>
                <div class="mtable-scale-point">3</div>
                <div class="mtable-scale-point">4</div>
                <div class="mtable-scale-point">5</div>
                <div class="mtable-scale-point">6</div>
                <div class="mtable-scale-point">7<br>very likely</div>
            </div>
            ${selection_array[0]}
            ${selection_array[1]}
        </div>
        <br>
    `

    let q_person_contrib = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">${name}'s ${person_contrib} skills</div>
            <label class="mtable-statement-point" for="person_contrib_0">
                <input name="person_contrib" type="radio" value="0" id="person_contrib_0" required />
            </label>
            <label class="mtable-statement-point" for="person_contrib_1">
                <input name="person_contrib" type="radio" value="1" id="person_contrib_1" />
            </label>
            <label class="mtable-statement-point" for="person_contrib_2">
                <input name="person_contrib" type="radio" value="2" id="person_contrib_2" />
            </label>
            <label class="mtable-statement-point" for="person_contrib_3">
                <input name="person_contrib" type="radio" value="3" id="person_contrib_3" />
            </label>
            <label class="mtable-statement-point" for="person_contrib_4">
                <input name="person_contrib" type="radio" value="4" id="person_contrib_4" />
            </label>
            <label class="mtable-statement-point" for="person_contrib_5">
                <input name="person_contrib" type="radio" value="5" id="person_contrib_5" />
            </label>
            <label class="mtable-statement-point" for="person_contrib_6">
                <input name="person_contrib" type="radio" value="6" id="person_contrib_6" />
            </label>
        </div>
    `

    let q_object_contrib = `
        <div class="mtable-statement-container">
            <div class="mtable-statement-text">${object_contrib}</div>
            <label class="mtable-statement-point" for="object_contrib_0">
                <input name="object_contrib" type="radio" value="0" id="object_contrib_0" required />
            </label>
            <label class="mtable-statement-point" for="object_contrib_1">
                <input name="object_contrib" type="radio" value="1" id="object_contrib_1" />
            </label>
            <label class="mtable-statement-point" for="object_contrib_2">
                <input name="object_contrib" type="radio" value="2" id="object_contrib_2" />
            </label>
            <label class="mtable-statement-point" for="object_contrib_3">
                <input name="object_contrib" type="radio" value="3" id="object_contrib_3" />
            </label>
            <label class="mtable-statement-point" for="object_contrib_4">
                <input name="object_contrib" type="radio" value="4" id="object_contrib_4" />
            </label>
            <label class="mtable-statement-point" for="object_contrib_5">
                <input name="object_contrib" type="radio" value="5" id="object_contrib_5" />
            </label>
            <label class="mtable-statement-point" for="object_contrib_6">
                <input name="object_contrib" type="radio" value="6" id="object_contrib_6" />
            </label>
        </div>
    `

    let contrib_array = [q_person_contrib, q_object_contrib]

    shuffleArray(contrib_array)

    let q_contrib = `
        How much did the following contribute to ${name}'s success? 
        <br>
        <div class="mtable-container">
            <div class="mtable-scale-container">
                <div class="mtable-scale-spacer"></div>
                <div class="mtable-scale-point">1<br>not at all</div>
                <div class="mtable-scale-point">2</div>
                <div class="mtable-scale-point">3</div>
                <div class="mtable-scale-point">4</div>
                <div class="mtable-scale-point">5</div>
                <div class="mtable-scale-point">6</div>
                <div class="mtable-scale-point">7<br>very much</div>
            </div>
            ${contrib_array[0]}
            ${contrib_array[1]}
        </div>
        <br>
    `

    let questions_array = [q_person_good, q_object_good, q_selection, q_contrib]

    shuffleArray(questions_array)

    let all_questions = `
        <div class="prevent-select" style="text-align: left;">
            <br>
            ${questions_array[0]}
            ${questions_array[1]}
            ${questions_array[2]}
            ${questions_array[3]}
        </div>
    `

    return all_questions
}

const demographics_questions = `
    <div style="text-align: left; max-width: 800px">
        <br>
        What is your age in years?
        <br>
        <input name="age" type="number" />
        <br>
        <br>
        With which gender do you identify?
        <div>
            <input name="gender" type="radio" value="man" id="man" />
            <label for="man">Man</label>
        </div>
        <div>
            <input name="gender" type="radio" value="woman" id="woman" />
            <label for="woman">Woman</label>
        </div>
        <div>
            <input name="gender" type="radio" value="nonbinary" id="nonbinary" />
            <label for="nonbinary">Nonbinary person</label>
        </div>
        <div>
            <input name="gender" type="radio" value="not_listed" id="not_listed" />
            <label for="not_listed">An identity not listed</label>
            <input name="unlisted_gender" type="text" />
        </div>
        <div>
            <input name="gender" type="radio" value="not_disclose_gender" id="not_disclose_gender" />
            <label for="not_disclose_gender">Prefer not to disclose</label>
        </div>
        <br>
        Please indicate how you identify yourself (Choose all that apply).
        <div>
            <input name="black_african_american" id="black_african_american" type="checkbox" />
            <label for="black_african_american">Black or African American</label>
        </div>
        <div>
            <input name="east_asian" id="east_asian" type="checkbox" />
            <label for="east_asian">East Asian</label>
        </div>
        <div>
            <input name="hispanic_latinx" id="hispanic_latinx" type="checkbox" />
            <label for="hispanic_latinx">Hispanic or Latina/o/x/e</label>
        </div>
        <div>
            <input name="ind_amer_amer_indian_alaska" id="ind_amer_amer_indian_alaska" type="checkbox" />
            <label for="ind_amer_amer_indian_alaska">Indigenous American, American Indian, or Alaska Native</label>
        </div>
        <div>
            <input name="middle_eastern_north_african" id="middle_eastern_north_african" type="checkbox" />
            <label for="middle_eastern_north_african">Middle Eastern or North African</label>
        </div>
        <div>
            <input name="native_hawaiian_pacific_islander" id="native_hawaiian_pacific_islander" type="checkbox" />
            <label for="native_hawaiian_pacific_islander">Native Hawaiian or other Pacific Islander</label>
        </div>
        <div>
            <input name="south_asian" id="south_asian" type="checkbox" />
            <label for="south_asian">South Asian</label>
        </div>
        <div>
            <input name="southeast_asian" id="southeast_asian" type="checkbox" />
            <label for="southeast_asian">Southeast Asian</label>
        </div>
        <div>
            <input name="white" id="white" type="checkbox" />
            <label for="white">White</label>
        </div>
        <div>
            <input name="other_race_ethnicity" id="other_race_ethnicity" type="checkbox" />
            <label for="other_race_ethnicity">Other</label>
            <input name="other_race_ethnicity_text" type="text" />
        </div>
        <div>
            <input name="not_disclose_race_ethnicity" id="not_disclose_race_ethnicity" type="checkbox" />
            <label for="not_disclose_race_ethnicity">Prefer not to disclose</label>
        </div>
        <br>
        What is your household income per year?
        <div>
            <input name="income" type="radio" id="00000" value="00000" />
            <label for="00000">< $10,000</label>
        </div>
        <div>
            <input name="income" type="radio" id="10000" value="10000" />
            <label for="10000">$10,000 to $19,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="20000" value="20000" />
            <label for="20000">$20,000 to $29,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="30000" value="30000" />
            <label for="30000">$30,000 to $39,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="40000" value="40000" />
            <label for="40000">$40,000 to $49,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="50000" value="50000" />
            <label for="50000">$50,000 to $59,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="60000" value="60000" />
            <label for="60000">$60,000 to $69,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="70000" value="70000" />
            <label for="70000">$70,000 to $79,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="80000" value="80000" />
            <label for="80000">$80,000 to $89,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="90000" value="90000" />
            <label for="90000">$90,000 to $99,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="100000" value="100000" />
            <label for="100000">$100,000 to $109,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="110000" value="110000" />
            <label for="110000">$110,000 to $119,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="120000" value="120000" />
            <label for="120000">$120,000 to $129,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="130000" value="130000" />
            <label for="130000">$130,000 to $139,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="140000" value="140000" />
            <label for="140000">$140,000 to $149,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="150000" value="150000" />
            <label for="150000">$150,000 to $159,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="160000" value="160000" />
            <label for="160000">$160,000 to $169,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="170000" value="170000" />
            <label for="170000">$170,000 to $179,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="180000" value="180000" />
            <label for="180000">$180,000 to $189,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="190000" value="190000" />
            <label for="190000">$190,000 to $199,999</label>
        </div>
        <div>
            <input name="income" type="radio" id="200000" value="200000" />
            <label for="200000">> $200,000</label>
        </div>
        <br>
        What is the highest level of education you have received? (If you're currently enrolled in school, please indicate the highest degree you have received.)
        <div>
            <input name="education" type="radio" id="less_hs" value="0" />
            <label for="less_hs">Less than a high school diploma</label>
        </div>
        <div>
            <input name="education" type="radio" id="hs" value="1" />
            <label for="hs">High school degree or equivalent (e.g., GED)</label>
        </div>
        <div>
            <input name="education" type="radio" id="some_college" value="2" />
            <label for="some_college">Some college, no degree</label>
        </div>
        <div>
            <input name="education" type="radio" id="assoc" value="3" />
            <label for="assoc">Associate Degree (e.g., AA, AS)</label>
        </div>
        <div>
            <input name="education" type="radio" id="bachelor" value="4" />
            <label for="bachelor">Bachelor's Degree (e.g., BA, BS)</label>
        </div>
        <div>
            <input name="education" type="radio" id="post_grad" value="5" />
            <label for="post_grad">Postgraduate Degree (e.g., Master's Degree, Professional Degree, Doctorate Degree)</label>
        </div>
        <br>
        Think of this ladder as representing where people stand in the United States. 
        At the top of the ladder are the people who have the most money, most education, and most respected jobs. 
        At the bottom are the people who have the least money, least education, and least respected jobs/ no job. 
        The higher up you are on this ladder, the closer you are to the people at the very top. 
        The lower you are, the closer you are to the people at the very bottom.
        <img src="Macarthur_subjective_SES" alt="Socio-economic ladder">
        <br>
        Please indicate below where you would place yourself on this ladder.
        <div>
            <input name="ses" type="radio" id="1" value="1" />
            <label for="1">1 (bottom rung)</label>
        </div>
        <div>
            <input name="ses" type="radio" id="2" value="2" />
            <label for="2">2</label>
        </div>
        <div>
            <input name="ses" type="radio" id="3" value="3" />
            <label for="3">3</label>
        </div>
        <div>
            <input name="ses" type="radio" id="4" value="4" />
            <label for="4">4</label>
        </div>
        <div>
            <input name="ses" type="radio" id="5" value="5" />
            <label for="5">5</label>
        </div>
        <div>
            <input name="ses" type="radio" id="6" value="6" />
            <label for="6">6</label>
        </div>
        <div>
            <input name="ses" type="radio" id="7" value="7" />
            <label for="7">7</label>
        </div>
        <div>
            <input name="ses" type="radio" id="8" value="8" />
            <label for="8">8</label>
        </div>
        <div>
            <input name="ses" type="radio" id="9" value="9" />
            <label for="9">9</label>
        </div>
        <div>
            <input name="ses" type="radio" id="10" value="10" />
            <label for="10">10 (top rung)</label>
        </div>
        <br>
        In politics today, do you consider yourself a:
        <div>
            <input name="party" type="radio" id="rep" value="rep" />
            <label for="rep">Republican</label>
        </div>
        <div>
            <input name="party" type="radio" id="dem" value="dem" />
            <label for="dem">Democrat</label>
        </div>
        <div>
            <input name="party" type="radio" id="ind" value="ind" />
            <label for="ind">Independent</label>
        </div>
        <div>
            <input name="party" type="radio" id="other_party" value="other_party" />
            <label for="other_party">Something else</label>
            <input name="other_party_text" type="text" />
        </div>
        <br>
        Politically, how liberal or conservative are you?
        <div>
            <input name="politics" type="radio" id="vlib" value="0" />
            <label for="vlib">Very liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="lib" value="1" />
            <label for="lib">Liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="slib" value="2" />
            <label for="slib">Somewhat liberal</label>
        </div>
        <div>
            <input name="politics" type="radio" id="mod" value="3" />
            <label for="mod">Moderate</label>
        </div>
        <div>
            <input name="politics" type="radio" id="scon" value="4" />
            <label for="scon">Somewhat conservative</label>
        </div>
        <div>
            <input name="politics" type="radio" id="con" value="5" />
            <label for="con">Conservative</label>
        </div>
        <div>
            <input name="politics" type="radio" id="vcon" value="6" />
            <label for="vcon">Very conservative</label>
        </div>
        <br>
        To what extent do you consider yourself to be religious?
        <div>
            <input name="religiosity" type="radio" id="nonrel" value="0" />
            <label for="nonrel">Not at all religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="srel" value="1" />
            <label for="srel">Slightly religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="mrel" value="2" />
            <label for="mrel">Moderately religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="vrel" value="3" />
            <label for="vrel">Very religious</label>
        </div>
        <div>
            <input name="religiosity" type="radio" id="unknown_rel" value="4" />
            <label for="unknown_rel">Don't know</label>
        </div>
        <br>
    </div>
`

const debrief_html = `
<div style="text-align: left;">
    <strong>What was this study about?</strong>
    <br>
    In this study, we were trying to better understand how people make inferences about success when given information about the objects vs. the people involved.
    <br>
    <br>
    <strong>Why does it matter?</strong>
    <br>
    Your participation helps us answer research questions, which in turn has implications for public figures, policy, and law.
    We are committed to sharing our research findings in ways that are accessible and relevant to the public.
    <br>
    <br>    
    <strong>How to contact us:</strong>
    <br>
    Feel free to visit our <a href="https://moralitylab.bc.edu/" target="_blank">website</a> to learn more about our research.
    If you have any concerns or questions about the study you just completed, please reach out to the lab at lypsychlab@gmail.com.
    <br>
    <br>
    <strong>To learn more about your rights as a research participant:</strong>
    <br>
    If you have any concerns about research-related ethics or harm, or would like to learn more about the ethical constraints under which this study was conducted, 
    please contact the Boston College Office for Research Protections at irb@bc.edu or 617-552-4778.
    <br>
    <br>
    <strong>Completion Code:</strong>
    <br>
    Thank you for participating in this study. Your response has been recorded.
    <br>
    <br>
    If the button below does not automatically enter your completion code, please copy and paste this code into Prolific: CWUP9JJ2
    <br>
    <br>
</div>
`