var conditions = [
    {
        "scenario": 1,
        "description": "In the small town where Alex lives, fishing is a very popular hobby, and the large majority of people use worms as bait when fishing. One day, you notice that Alex is using gummy candies instead of worms as bait. You also notice that Alex is catching a good amount of fish today.",
        "ph": "You recently read in a fishing blog post that Alex is known in the town for being excellent at fishing.",
        "pl": "You recently read in a fishing blog post that Alex is known in the town for being decent, but not excellent, at fishing.",
        "oh": "You recently read in a fishing blog post that gummy candies make for very effective bait.",
        "ol": "You recently read in a fishing blog post that gummy candies do not make for very effective bait.",
        "name": "Alex",
        "person_action": "getting fish to bite",
        "object_quality": "are gummy candies at getting fish to bite",
        "subjunctive_action": "were going fishing",
        "person_selection": "want Alex as your fishing partner",
        "object_selection": "want to use gummy candies as bait",
        "person_contrib": "fishing",
        "object_contrib": "The bait Alex was using"
    },
    {
        "scenario": 2,
        "description": "One day, a group of your friends decides to try go-karting together. During the safety briefing, an employee tells you that a key part of driving fast is ensuring that your tires have a good grip on the track. While your group waits to race, you overhear two employees talking about how only some of the karts have new tires, while others will need theirs replaced soon. Once your group starts racing, one friend in particular, Sam, comes out as the clear winner, outpacing your other friends by several seconds on each lap.",
        "ph": "From trying out other activities together, you know that Sam is usually fast to pick up new skills.",
        "pl": "From trying out other activities together, you know that Sam is usually slow to pick up new skills.",
        "oh": "As you were getting into your go-karts, you noticed that the tires on Sam's kart looked fairly new.",
        "ol": "As you were getting into your go-karts, you noticed that the tires on Sam's kart looked fairly old.",
        "name": "Sam",
        "person_action": "making sure his tires have a good grip on the track",
        "object_quality": "are the tires on Sam's kart at maintaining a good grip on the track",
        "subjunctive_action": "were racing in teams",
        "person_selection": "want Sam on your team",
        "object_selection": "want to use the kart Sam was using",
        "person_contrib": "driving",
        "object_contrib": "The tires on Sam's kart"
    },
    {
        "scenario": 3,
        "description": "Logan is a journalist at a prestigious new outlet. Despite being very popular and having a dedicated following, Logan recently published a story under a pseudonym. Though it did not have Logan's name attached to it, the story was read by many people and shared widely on social media.",
        "ph": "You have heard from others who work at the news outlet that Logan is an exceptionally good writer.",
        "pl": "You have heard from others who work at the news outlet that Logan is a good, but not excellent, writer.",
        "oh": "You have heard from others who work at the news outlet that people seem to be very interested in the topic Logan wrote about.",
        "ol": "You have heard from others who work at the news outlet that people seem not to be very interested in the topic Logan wrote about.",
        "name": "Logan",
        "person_action": "writing articles that capture people's interest",
        "object_quality": "is the topic covered in Logan's article at capturing people's interest",
        "subjunctive_action": "were writing a blog post and wanted it to become very popular",
        "person_selection": "want to co-write with Logan",
        "object_selection": "want to write about the same topic Logan did",
        "person_contrib": "writing",
        "object_contrib": "The topic Logan was writing on"
    },
    {
        "scenario": 4,
        "description": "Avery maintains a plot in a community garden. Most people in the garden use fertilizers and pesticides to take care of their plants, but Avery chooses to use organic compost and natural pest repellents. Avery's plants are very strong and healthy.",
        "ph": "A friend of yours who likes to garden says that Avery is very good at keeping plants healthy.",
        "pl": "A friend of yours who likes to garden says that Avery is not very good at keeping plants healthy.",
        "oh": "A friend of yours who likes to garden says that organic compost and natural pest repellents are very good at keeping plants healthy.",
        "ol": "A friend of yours who likes to garden says that organic compost and natural pest repellents are not very good for keeping plants healthy.",
        "name": "Avery",
        "person_action": "keeping plants healthy",
        "object_quality": "are organic compost and natural pest repellents at keeping plants healthy",
        "subjunctive_action": "wanted to grow healthy plants",
        "person_selection": "want help from Avery",
        "object_selection": "want to use organic compost and natural pest repellents",
        "person_contrib": "gardening",
        "object_contrib": "The compost and pest repellents Avery was using"
    },
    {
        "scenario": 5,
        "description": "Rowan is learning to make tomato sauce. The online recipe recommends buying canned tomatoes from the store because the taste of home grown tomatoes can be very good or very bad depending on the kind of soil the tomatoes are being grown in. Despite this, Rowan chooses to use home grown tomatoes. When Rowan makes the tomato sauce for dinner with friends, they think it is absolutely delicious.",
        "ph": "Rowan has a natural talent for cooking and tends to make great food.",
        "pl": "Rowan is not very talented at cooking and tends to make food that's just okay.",
        "oh": "The soil in the town where Rowan lives is known to produce tomatoes that taste great.",
        "ol": "The soil in the town where Rowan lives is known to produce tomatoes that taste just okay.",
        "name": "Rowan",
        "person_action": "making tomato sauce",
        "object_quality": "are Rowan's home grown tomatoes for making tomato sauce",
        "subjunctive_action": "wanted to make tomato sauce",
        "person_selection": "want help from Rowan",
        "object_selection": "want to use Rowan's home grown tomatoes",
        "person_contrib": "cooking",
        "object_contrib": "The tomatoes Rowan was using"
    },
    {
        "scenario": 6,
        "description": "Jamie is a photographer. While most photographers use high-end DSLR cameras with expensive lenses, Jamie prefers to use an older film camera without any accessories. Jamie's photos are frequently featured in galleries and magazines.",
        "ph": "A photographer friend of yours says that Jamie has a natural talent for photography and an exceptional eye for composition and lighting.",
        "pl": "A photographer friend of yours says that Jamie is decent at photography but does not have a very good eye for composition and lighting.",
        "oh": "A photographer friend of yours says that film cameras capture uniquely rich tones and detail, giving photos a timeless quality.",
        "ol": "A photographer friend of yours says that film cameras are limited by the technology of their time and do not capture very rich tones or detail by modern standards.",
        "name": "Jamie",
        "person_action": "taking artistic photos",
        "object_quality": "are film cameras at taking artistic photos",
        "subjunctive_action": "were working on a photography project",
        "person_selection": "want to work with Jamie",
        "object_selection": "want to use a film camera",
        "person_contrib": "photography",
        "object_contrib": "The camera Jamie was using"
    },
    {
        "scenario": 7,
        "description": "Dakota's group of friends likes to play racing games. While everyone usually uses modern wireless controllers, one day Dakota decides to use an older wired controller and wins every race that the group plays.",
        "ph": "Dakota is by far the best at racing games among the group of friends.",
        "pl": "Dakota is decent at racing games, but not the best among the group of friends.",
        "oh": "Wired controllers are known to be very good for racing games.",
        "ol": "Wired controllers are known not to be very good for racing games.",
        "name": "Dakota",
        "person_action": "racing games",
        "object_quality": "are wired controllers for racing games",
        "subjunctive_action": "were playing a racing game in teams",
        "person_selection": "want Dakota on your team",
        "object_selection": "want to use a wired controller",
        "person_contrib": "racing game",
        "object_contrib": "The controller Dakota was using"
    },
    {
        "scenario": 8,
        "description": "Morgan's group of friends likes to play table tennis together. While most people use paddles with hard rubber on the outside, Morgan chooses to play using a paddle with softer rubber. Morgan wins almost all the time.",
        "ph": "People in the friend group say that Morgan is very good at table tennis.",
        "pl": "People in the friend group say that Morgan is not very good at table tennis.",
        "oh": "People in the friend group say that paddles with soft rubber are very good for table tennis.",
        "ol": "People in the friend group say that paddles with soft rubber are not very good for table tennis.",
        "name": "Morgan",
        "person_action": "playing table tennis",
        "object_quality": "are soft rubber paddles for playing table tennis",
        "subjunctive_action": "were playing on a table tennis team",
        "person_selection": "want Morgan on your team",
        "object_selection": "want to use a soft rubber paddle",
        "person_contrib": "table tennis",
        "object_contrib": "The paddle Morgan was using"
    }
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

var info_array = ["ph", "ph", "pl", "pl", "oh", "oh", "ol", "ol"]

shuffleArray(info_array)

// UNEVEN RANDOMIZATION ------ ASK IF GOOD TO REMOVE 2 SCENARIOS SO WE HAVE AN EVEN 16
for (let i = 0; i < conditions.length; i++) {
    let trial = conditions[i]
    trial.info = info_array[i]
}