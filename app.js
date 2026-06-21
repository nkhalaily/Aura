// Expanded Exercise Database with Biomechanical Details
const EXERCISE_POOL = {
  // Chest
  bench_press: {
    id: "bench_press",
    name: "Flat Barbell Bench Press",
    category: "chest",
    muscles: ["Chest", "Front Delts", "Triceps"],
    type: "compound",
    defaultSets: 4,
    defaultReps: 8,
    defaultWeight: 135,
    setup: "Lie flat on the bench with feet pressed firmly into the floor. Grip the barbell slightly wider than shoulder-width. Retract and depress your shoulder blades into the bench to create a stable arch.",
    execution: "Unrack the barbell. Lower it slowly in a slight diagonal arc to your mid-chest while keeping your elbows tucked at a 45-degree angle. Press the bar back up to extension by driving through your legs.",
    mistakes: ["Flaring elbows out to 90 degrees (places extreme rotational load on rotator cuffs)", "Bouncing the bar off the sternum to gain momentum", "Lifting hips off the bench (distorts spinal alignment)"],
    cues: ["Pin your shoulder blades back", "Spread the bar apart with your hands", "Drive your feet through the floor"]
  },
  incline_db_press: {
    id: "incline_db_press",
    name: "Incline Dumbbell Press",
    category: "chest",
    muscles: ["Upper Chest", "Front Delts", "Triceps"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 40,
    setup: "Set an incline bench to 30-45 degrees. Sit back with a dumbbell in each hand resting on your thighs. Kick the dumbbells up to shoulder level one at a time.",
    execution: "Retract shoulders. Press the dumbbells straight up above your chest, bringing them slightly closer together at the top. Lower them under control until they are level with your upper chest.",
    mistakes: ["Bench angle too steep (>45 degrees shifts load to front delts)", "Clashing dumbbells together at the top (disrupts mechanical tension)", "Shortening range of motion at the bottom"],
    cues: ["Keep elbows directly under wrists", "Press vertically, don't let weights drift back", "Squeeze chest at the top"]
  },
  push_ups: {
    id: "push_ups",
    name: "Deficit Push-Ups",
    category: "chest",
    muscles: ["Chest", "Front Delts", "Triceps", "Core"],
    type: "bodyweight",
    defaultSets: 3,
    defaultReps: 15,
    defaultWeight: 0,
    setup: "Place hands on small deficit blocks or dumbbells, slightly wider than shoulder-width. Extend legs back, keeping feet together. Brace core to create a straight line from head to heels.",
    execution: "Lower your body by bending your elbows at a 45-degree angle until your chest passes the level of your hands. Press through your palms to return to the top, fully locking out.",
    mistakes: ["Sagging hips (reflects weak core engagement)", "Craning the neck forward to touch the floor", "Flaring elbows"],
    cues: ["Squeeze glutes and abs", "Push the floor away", "Keep body like a solid plank"]
  },

  // Back
  pull_ups: {
    id: "pull_ups",
    name: "Wide-Grip Pull-Ups",
    category: "back",
    muscles: ["Lats", "Rhomboids", "Rear Delts", "Biceps"],
    type: "bodyweight",
    defaultSets: 3,
    defaultReps: 8,
    defaultWeight: 0,
    setup: "Hang from a pull-up bar with a pronated grip (palms facing forward), wider than shoulder-width. Hang in a deadhang with shoulders relaxed.",
    execution: "Depress your shoulders first, then pull your chest to the bar by driving your elbows down toward your ribs. Hold briefly at the top before slowly lowering to a full deadhang.",
    mistakes: ["Kipping or swinging legs to gain momentum", "Failing to go to full extension at the bottom", "Reaching with the chin instead of lead chest"],
    cues: ["Drive elbows to back pockets", "Lead with the chest", "Control the descent (3s count)"]
  },
  barbell_row: {
    id: "barbell_row",
    name: "Barbell Bent-Over Row",
    category: "back",
    muscles: ["Lats", "Rhomboids", "Lower Back", "Biceps"],
    type: "compound",
    defaultSets: 4,
    defaultReps: 8,
    defaultWeight: 95,
    setup: "Stand with feet shoulder-width apart. Hinge forward at your hips at roughly 45 degrees, keeping your spine completely neutral. Grip the barbell with an overhand grip.",
    execution: "Pull the barbell toward your lower ribs/navel, squeezing your shoulder blades together at the top. Lower the bar with control until arms are fully extended.",
    mistakes: ["Shrugging shoulders upward (uses upper traps instead of lats)", "Rounding the lower back (creates high lumbar shear)", "Using leg drive/bouncing hips"],
    cues: ["Pull through your elbows", "Keep torso rigid", "Pinch shoulder blades at the peak"]
  },
  lat_pulldown: {
    id: "lat_pulldown",
    name: "Wide Grip Lat Pulldown",
    category: "back",
    muscles: ["Lats", "Teres Major", "Rhomboids", "Biceps"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 90,
    setup: "Adjust the thigh pad so your knees are locked in. Grip the pulldown attachment wider than shoulder-width, palms facing away. Sit down and lean back slightly (10-15 degrees).",
    execution: "Pull the bar down toward your upper chest by drawing your elbows down and back. Squeeze your lats at the bottom, then slowly return the bar to the start position.",
    mistakes: ["Pulling the bar behind the neck (causes shoulder impingement)", "Leaning back excessively to use bodyweight", "Letting the stack crash at the top"],
    cues: ["Pull with elbows, not hands", "Keep chest open", "Slowly resist on the way up"]
  },

  // Legs
  back_squat: {
    id: "back_squat",
    name: "Barbell Back Squat",
    category: "legs",
    muscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    type: "compound",
    defaultSets: 4,
    defaultReps: 6,
    defaultWeight: 135,
    setup: "Rest the bar on your upper traps. Unrack it, take two steps back, and set feet shoulder-width apart with toes flared 15-30 degrees. Brace core using the Valsalva maneuver.",
    execution: "Initiate by hinging your hips back and bending your knees. Squat down until your thighs are at or below parallel. Drive through your mid-foot to stand back up, keeping chest tall.",
    mistakes: ["Knees collapsing inward (valgus collapse)", "Heels rising off the floor", "Rounding upper/lower back ('butt wink')"],
    cues: ["Push knees outward", "Screw feet into the floor", "Brace your stomach like you are getting punched"]
  },
  romanian_deadlift: {
    id: "romanian_deadlift",
    name: "Romanian Deadlift (RDL)",
    category: "legs",
    muscles: ["Hamstrings", "Glutes", "Lower Back"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 115,
    setup: "Stand tall holding a barbell with a shoulder-width grip. Place feet hip-width apart. Soften your knees slightly.",
    execution: "Push your hips straight back as far as possible, letting the bar slide down your thighs. Keep spine neutral. Lower until you feel a deep stretch in your hamstrings, then squeeze glutes to stand.",
    mistakes: ["Rounding the spine to reach lower (load shifts from hamstrings to spine)", "Bending knees too much (turns movement into a squat)", "Letting the barbell drift away from legs"],
    cues: ["Push wall behind you with your hips", "Keep bar scraped against shins", "Stand up by squeezing your glutes"]
  },
  id_hip_thrust: {
    id: "id_hip_thrust",
    name: "Barbell Hip Thrust",
    category: "legs",
    muscles: ["Glutes", "Hamstrings"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 135,
    setup: "Sit on the floor with your upper back resting against a sturdy bench. Roll a loaded barbell over your hips. Place feet flat on the floor, hip-width apart.",
    execution: "Drive through your heels, extending your hips upward until your torso is parallel to the floor. Keep your chin tucked. Pause and squeeze glutes for 1s, then lower slowly.",
    mistakes: ["Arching the lower back instead of hinging hips", "Looking upward (causes lumbar hyperextension)", "Heels lifting off the ground"],
    cues: ["Keep chin tucked", "Drive through heels", "Ribcage down, squeeze glutes"]
  },

  // Shoulders
  overhead_press: {
    id: "overhead_press",
    name: "Overhead Barbell Press",
    category: "shoulders",
    muscles: ["Front Delts", "Lateral Delts", "Triceps", "Core"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 8,
    defaultWeight: 75,
    setup: "Clean the bar to shoulder level or unrack from a stand. Set hands just outside shoulder-width. Stand tall, squeeze glutes and brace your core.",
    execution: "Press the bar vertically in a straight path, tilting your head back slightly to clear your chin. Once the bar clears, bring your head forward and lock out overhead.",
    mistakes: ["Leaning back excessively (overloads lumbar spine)", "Failing to lock out elbows at peak extension", "Elbows flaring too far outward during start"],
    cues: ["Squeeze glutes tight", "Push head through the window at the top", "Keep forearms vertical"]
  },
  lateral_raise: {
    id: "lateral_raise",
    name: "Dumbbell Lateral Raise",
    category: "shoulders",
    muscles: ["Lateral Delts", "Upper Traps"],
    type: "auxiliary",
    defaultSets: 4,
    defaultReps: 15,
    defaultWeight: 15,
    setup: "Stand with feet shoulder-width apart, holding dumbbells at your sides. Hinge forward a micro-fraction to align lateral delts.",
    execution: "Raise dumbbells outward and upward in a wide arc, maintaining a soft bend in the elbows. Stop when hands are parallel to the floor. Lower under control.",
    mistakes: ["Using momentum or body-swinging", "Leading with the hands instead of the elbows", "Raising dumbbells above shoulder line"],
    cues: ["Lead with elbows", "Throw weights out to the side walls", "Pour a pitcher of water at the top"]
  },

  // Arms
  bicep_curl: {
    id: "bicep_curl",
    name: "Dumbbell Alternate Bicep Curl",
    category: "arms",
    muscles: ["Biceps", "Brachialis"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 25,
    setup: "Stand tall holding dumbbells at your sides, palms facing in (neutral grip). Keep shoulder blades back.",
    execution: "Curl one dumbbell up. As it passes your thigh, rotate your wrist (supinate) so your palm faces up. Squeeze bicep at peak. Lower slowly and repeat on other arm.",
    mistakes: ["Swinging elbows forward (uses front delts instead of biceps)", "Leaning back to swing weight up", "Dropping the weight too fast"],
    cues: ["Pin elbows to sides", "Supinate wrist hard at the top", "Control the lowering phase"]
  },
  tricep_pushdown: {
    id: "tricep_pushdown",
    name: "Triceps Cable Rope Pushdown",
    category: "arms",
    muscles: ["Triceps"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 45,
    setup: "Face a cable pulley with a rope attachment. Grip rope with thumbs up. Step back slightly and hinge forward at hips 10 degrees. Pin elbows to ribs.",
    execution: "Push the rope straight down to lockout. At the bottom, flare your hands apart to isolate outer tricep heads. Return slowly until hands are at chest height.",
    mistakes: ["Allowing elbows to drift forward/backward", "Shrugging shoulders to press weight down", "Failing to flare hands at bottom"],
    cues: ["Keep elbows locked in space", "Squeeze triceps at lockout", "Let arms flex past 90 degrees at top"]
  },

  // Core
  plank: {
    id: "plank",
    name: "Hardstyle Forearm Plank",
    category: "core",
    muscles: ["Rectus Abdominis", "Obliques", "Transverse Abdominis"],
    type: "bodyweight",
    defaultSets: 3,
    defaultReps: 60, // seconds
    defaultWeight: 0,
    setup: "Place elbows directly under shoulders on the floor. Extend legs back, feet together. Elevate onto toes, keeping head neutral.",
    execution: "Actively pull your elbows toward your toes and squeeze your glutes as hard as possible. This triggers maximal isometric tension in the anterior abdominal wall.",
    mistakes: ["Sagging hips down toward the floor", "Piking hips up toward the ceiling", "Holding breath"],
    cues: ["Squeeze glutes and quads", "Pull elbows toward toes", "Breathe shallow, brace deep"]
  },
  leg_raises: {
    id: "leg_raises",
    name: "Hanging Knee/Leg Raises",
    category: "core",
    muscles: ["Lower Abs", "Hip Flexors"],
    type: "bodyweight",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 0,
    setup: "Hang from a pull-up bar with a shoulder-width grip. Stabilize torso to prevent swinging.",
    execution: "Contract lower abs to raise your knees to chest level (or toes to bar for advanced progression). Avoid using momentum. Lower legs slowly to starting position.",
    mistakes: ["Swinging backward and forward", "Using hip flexors entirely instead of curling pelvis", "Dropping legs quickly"],
    cues: ["Roll pelvis up toward ribs", "Lower slowly (3s count)", "Exhale on contraction"]
  },
  dumbbell_shoulder_press: {
    id: "dumbbell_shoulder_press",
    name: "Seated Dumbbell Shoulder Press",
    category: "shoulders",
    muscles: ["Front Delts", "Lateral Delts", "Triceps"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 35,
    setup: "Sit upright on a bench with back support. Hold dumbbells at shoulder level with a pronated grip (palms facing forward).",
    execution: "Press the weights vertically overhead until arms are extended but not locked out. Lower under control until the dumbbells are level with your ears.",
    mistakes: ["Arching the lower back excessively off the bench", "Clashing dumbbells at the peak", "Flaring elbows too far back"],
    cues: ["Keep core braced", "Press straight up", "Control descent"]
  },
  rear_delt_fly: {
    id: "rear_delt_fly",
    name: "Dumbbell Rear Delt Fly",
    category: "shoulders",
    muscles: ["Rear Delts", "Rhomboids", "Traps"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 15,
    defaultWeight: 12,
    setup: "Stand with feet shoulder-width apart, dumbbells in hand. Hinge forward at your hips until your torso is almost parallel to the floor.",
    execution: "Raise dumbbells out to the sides with a slight bend in your elbows, squeezing your rear deltoids at the top. Lower the weights with control.",
    mistakes: ["Using momentum or swinging the body", "Rounding the spine during the lift", "Using upper traps instead of rear delts"],
    cues: ["Lead with the elbows", "Squeeze shoulder blades at peak", "Keep head neutral"]
  },
  hammer_curl: {
    id: "hammer_curl",
    name: "Dumbbell Hammer Curl",
    category: "arms",
    muscles: ["Brachialis", "Brachioradialis", "Biceps"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 25,
    setup: "Stand tall holding dumbbells at your sides, palms facing in (neutral grip) throughout the movement.",
    execution: "Curl the weights up while maintaining the neutral grip. Squeeze the forearm and brachialis at the top, then lower under control.",
    mistakes: ["Swinging the elbows forward", "Using hip momentum to swing the weights", "Not fully extending the arms at the bottom"],
    cues: ["Keep elbows pinned to sides", "Maintain neutral thumbs-up grip", "Control descent"]
  },
  overhead_tricep_extension: {
    id: "overhead_tricep_extension",
    name: "Overhead Dumbbell Triceps Extension",
    category: "arms",
    muscles: ["Triceps (Long Head)"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 30,
    setup: "Sit or stand tall. Hold one dumbbell with both hands overhead, cupping the upper plate with your palms.",
    execution: "Lower the weight slowly behind your head by bending at the elbows. Press the weight back up to full extension by contracting the triceps.",
    mistakes: ["Flaring elbows excessively outward", "Arching lower back under load", "Lowering weight too fast"],
    cues: ["Keep elbows close to head", "Brace your core", "Extend straight up"]
  },
  russian_twist: {
    id: "russian_twist",
    name: "Weighted Russian Twists",
    category: "core",
    muscles: ["Obliques", "Rectus Abdominis", "Transverse Abdominis"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 20,
    defaultWeight: 15,
    setup: "Sit on the floor, bend your knees, and lift your feet slightly off the ground. Hold a dumbbell or plate with both hands near your chest.",
    execution: "Twist your torso to the right, tapping the weight on the floor, then rotate to the left and tap the floor. Maintain a braced core.",
    mistakes: ["Rounding the back excessively", "Moving only the arms instead of twisting the torso", "Rushing the reps without control"],
    cues: ["Follow the weight with your eyes", "Keep spine tall", "Brace your abs"]
  },
  ab_wheel_rollout: {
    id: "ab_wheel_rollout",
    name: "Ab Wheel Rollout",
    category: "core",
    muscles: ["Rectus Abdominis", "Transverse Abdominis", "Lats"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 0,
    setup: "Kneel on a pad. Place the ab wheel on the floor directly under your shoulders, holding the handles.",
    execution: "Roll the wheel forward, extending your body into a straight line without letting your hips sag. Pull yourself back to start using your abs.",
    mistakes: ["Arching the lower back (hyperextension)", "Initiating the return with your hips rather than abs", "Shortening range of motion"],
    cues: ["Keep posterior pelvic tilt", "Tuck chin", "Pull back with abs"]
  },
  dumbbell_chest_fly: {
    id: "dumbbell_chest_fly",
    name: "Flat Dumbbell Chest Fly",
    category: "chest",
    muscles: ["Chest", "Front Delts"],
    type: "auxiliary",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 25,
    setup: "Lie flat on a bench holding dumbbells above your chest with palms facing each other. Maintain a slight bend in your elbows.",
    execution: "Lower the weights out to your sides in a wide arc until you feel a stretch in your chest. Squeeze your chest to return to starting position.",
    mistakes: ["Bending elbows too much (turning it into a press)", "Lowering weights too far (hyper-extending shoulder joints)", "Clashing dumbbells at the top"],
    cues: ["Hug a wide tree", "Keep elbow angle constant", "Squeeze chest at the top"]
  },
  single_arm_db_row: {
    id: "single_arm_db_row",
    name: "Single-Arm Dumbbell Row",
    category: "back",
    muscles: ["Lats", "Rhomboids", "Rear Delts", "Biceps"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 45,
    setup: "Place one knee and hand on a flat bench. Keep your back flat and parallel to the floor, holding a dumbbell in the other hand.",
    execution: "Row the dumbbell up to your hip by drawing your elbow back and up. Lower the weight slowly to full extension.",
    mistakes: ["Rounding the spine under load", "Rotating the torso to lift weight", "Jerking the weight using momentum"],
    cues: ["Pull elbow to hip", "Keep shoulder blades square", "Control the drop"]
  },
  goblet_squat: {
    id: "goblet_squat",
    name: "Dumbbell Goblet Squat",
    category: "legs",
    muscles: ["Quadriceps", "Glutes", "Core"],
    type: "compound",
    defaultSets: 3,
    defaultReps: 12,
    defaultWeight: 40,
    setup: "Stand with feet shoulder-width apart. Hold a dumbbell vertically by one end against your chest, keeping elbows tucked in.",
    execution: "Sit back and lower into a squat until thighs are parallel to the floor. Keep torso upright. Drive through heels to stand.",
    mistakes: ["Letting knees collapse inward", "Lifting heels off the ground", "Torso collapsing forward"],
    cues: ["Keep dumbbell glued to chest", "Push knees out", "Keep chest tall"]
  }
};

const CATEGORY_MAP = {
  chest: ["bench_press", "incline_db_press", "push_ups", "dumbbell_chest_fly"],
  back: ["pull_ups", "barbell_row", "lat_pulldown", "single_arm_db_row"],
  legs: ["back_squat", "romanian_deadlift", "id_hip_thrust", "goblet_squat"],
  shoulders: ["overhead_press", "lateral_raise", "dumbbell_shoulder_press", "rear_delt_fly"],
  arms: ["bicep_curl", "tricep_pushdown", "hammer_curl", "overhead_tricep_extension"],
  core: ["plank", "leg_raises", "russian_twist", "ab_wheel_rollout"],
  fullbody: ["back_squat", "bench_press", "barbell_row", "overhead_press", "romanian_deadlift"]
};

// Initial state
let currentActiveWorkout = null;

// DOM references
const workoutCardContainer = document.getElementById("workout-card-container");
const workoutTitleEl = document.getElementById("workout-title");
const workoutFocusEl = document.getElementById("workout-focus");
const workoutDiffEl = document.getElementById("workout-difficulty");
const workoutDurationEl = document.getElementById("workout-duration");
const workoutCaloriesEl = document.getElementById("workout-calories");
const workoutMusclesContainer = document.getElementById("workout-muscles");
const exercisesContainer = document.getElementById("exercises-container");
const notThisWorkoutBtn = document.getElementById("not-this-workout-btn");
const rotateIcon = document.getElementById("rotate-icon");

// Chatbot DOM references
const chatInput = document.getElementById("chat-message-input");
const sendMsgBtn = document.getElementById("send-msg-btn");
const chatMessagesLog = document.getElementById("chat-messages");

// Compare & Rate DOM references
const customPlanInput = document.getElementById("custom-workout-input");
const compareBtn = document.getElementById("compare-btn");
const analysisResultsPanel = document.getElementById("analysis-results");
const analysisContent = document.getElementById("analysis-content");

// Modals DOM references
const formModal = document.getElementById("form-guide-modal");
const formModalClose = document.getElementById("modal-close-btn");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalSetup = document.getElementById("modal-setup-steps");
const modalExecution = document.getElementById("modal-execution-steps");
const modalMistakes = document.getElementById("modal-mistakes");
const modalCues = document.getElementById("modal-cues");
const videoPlayerFrame = document.getElementById("video-player-frame");
const videoPlayBtn = document.getElementById("video-play-btn");
const videoProgressBar = document.getElementById("video-progress");
const videoProgressContainer = document.getElementById("video-progress-container");
const tabVideo = document.getElementById("tab-video");
const tabText = document.getElementById("tab-text");
const paneVideo = document.getElementById("pane-video");
const paneText = document.getElementById("pane-text");

// Score Modal DOM references
const scoreModal = document.getElementById("score-modal");
const scoreModalClose = document.getElementById("score-modal-close");
const scoreText = document.getElementById("score-percentage");
const scoreCircle = document.getElementById("score-circle-bar");
const scoreFeedbackContent = document.getElementById("score-feedback-content");

// Default workouts mapping - Updated to include Core to meet growth criteria
// Established online workout programs database
const PROGRAMS = {
  "reddit-ppl": [
    {
      id: "ppl-pull",
      title: "Reddit PPL // Pull Day",
      type: "pull",
      focus: "Back, Rear Delts & Biceps (Reddit Linear Progression PPL)",
      difficulty: "Intermediate",
      duration: 65,
      calories: "380 - 450",
      muscles: ["Back", "Arms", "Core"],
      exercises: [
        { name: "Wide-Grip Pull-Ups", sets: 3, reps: 8, weight: 0, notes: "Drive elbows to back pockets", id: "pull_ups" },
        { name: "Barbell Bent-Over Row", sets: 4, reps: 8, weight: 95, notes: "Pull through your elbows", id: "barbell_row" },
        { name: "Wide Grip Lat Pulldown", sets: 3, reps: 12, weight: 90, notes: "Pull with elbows, not hands", id: "lat_pulldown" },
        { name: "Single-Arm Dumbbell Row", sets: 3, reps: 10, weight: 45, notes: "Pull elbow to hip", id: "single_arm_db_row" },
        { name: "Dumbbell Alternate Bicep Curl", sets: 3, reps: 12, weight: 25, notes: "Pin elbows to sides", id: "bicep_curl" },
        { name: "Dumbbell Hammer Curl", sets: 3, reps: 12, weight: 25, notes: "Keep elbows pinned to sides", id: "hammer_curl" },
        { name: "Hanging Knee/Leg Raises", sets: 3, reps: 12, weight: 0, notes: "Lower slowly (3s count)", id: "leg_raises" }
      ]
    },
    {
      id: "ppl-push",
      title: "Reddit PPL // Push Day",
      type: "push",
      focus: "Chest, Shoulders & Triceps (Reddit Linear Progression PPL)",
      difficulty: "Intermediate",
      duration: 65,
      calories: "400 - 480",
      muscles: ["Chest", "Shoulders", "Arms", "Core"],
      exercises: [
        { name: "Flat Barbell Bench Press", sets: 4, reps: 8, weight: 135, notes: "Pin your shoulder blades back", id: "bench_press" },
        { name: "Overhead Barbell Press", sets: 3, reps: 8, weight: 75, notes: "Squeeze glutes tight", id: "overhead_press" },
        { name: "Incline Dumbbell Press", sets: 3, reps: 10, weight: 40, notes: "Press vertically", id: "incline_db_press" },
        { name: "Dumbbell Lateral Raise", sets: 4, reps: 15, weight: 15, notes: "Lead with elbows", id: "lateral_raise" },
        { name: "Triceps Cable Rope Pushdown", sets: 3, reps: 12, weight: 45, notes: "Squeeze triceps at lockout", id: "tricep_pushdown" },
        { name: "Hardstyle Forearm Plank", sets: 3, reps: 60, weight: 0, notes: "Squeeze glutes and quads", id: "plank" }
      ]
    },
    {
      id: "ppl-legs",
      title: "Reddit PPL // Legs Day",
      type: "legs",
      focus: "Squat & Posterior Chain (Reddit Linear Progression PPL)",
      difficulty: "Advanced",
      duration: 70,
      calories: "480 - 580",
      muscles: ["Legs", "Core"],
      exercises: [
        { name: "Barbell Back Squat", sets: 4, reps: 6, weight: 135, notes: "Push knees outward", id: "back_squat" },
        { name: "Romanian Deadlift (RDL)", sets: 3, reps: 10, weight: 115, notes: "Push wall behind you with your hips", id: "romanian_deadlift" },
        { name: "Barbell Hip Thrust", sets: 3, reps: 12, weight: 135, notes: "Keep chin tucked", id: "id_hip_thrust" },
        { name: "Dumbbell Goblet Squat", sets: 3, reps: 12, weight: 40, notes: "Keep dumbbell glued to chest", id: "goblet_squat" },
        { name: "Hardstyle Forearm Plank", sets: 3, reps: 60, weight: 0, notes: "Squeeze glutes and quads", id: "plank" }
      ]
    }
  ],
  "phul": [
    {
      id: "phul-upper-power",
      title: "PHUL // Upper Power Day",
      type: "push",
      focus: "Upper Body Power Split (PHUL)",
      difficulty: "Advanced",
      duration: 70,
      calories: "450 - 520",
      muscles: ["Chest", "Back", "Shoulders", "Arms", "Core"],
      exercises: [
        { name: "Flat Barbell Bench Press", sets: 4, reps: 5, weight: 135, notes: "Pin your shoulder blades back", id: "bench_press" },
        { name: "Barbell Bent-Over Row", sets: 4, reps: 5, weight: 95, notes: "Pull through your elbows", id: "barbell_row" },
        { name: "Incline Dumbbell Press", sets: 3, reps: 6, weight: 40, notes: "Press vertically", id: "incline_db_press" },
        { name: "Wide Grip Lat Pulldown", sets: 3, reps: 8, weight: 90, notes: "Pull with elbows, not hands", id: "lat_pulldown" },
        { name: "Overhead Barbell Press", sets: 3, reps: 6, weight: 75, notes: "Squeeze glutes tight", id: "overhead_press" },
        { name: "Dumbbell Alternate Bicep Curl", sets: 3, reps: 8, weight: 25, notes: "Pin elbows to sides", id: "bicep_curl" },
        { name: "Triceps Cable Rope Pushdown", sets: 3, reps: 8, weight: 45, notes: "Squeeze triceps at lockout", id: "tricep_pushdown" },
        { name: "Hardstyle Forearm Plank", sets: 3, reps: 60, weight: 0, notes: "Squeeze glutes and quads", id: "plank" }
      ]
    },
    {
      id: "phul-lower-power",
      title: "PHUL // Lower Power Day",
      type: "legs",
      focus: "Lower Body Power Split (PHUL)",
      difficulty: "Advanced",
      duration: 75,
      calories: "500 - 600",
      muscles: ["Legs", "Core"],
      exercises: [
        { name: "Barbell Back Squat", sets: 4, reps: 5, weight: 135, notes: "Push knees outward", id: "back_squat" },
        { name: "Romanian Deadlift (RDL)", sets: 4, reps: 5, weight: 115, notes: "Push wall behind you with your hips", id: "romanian_deadlift" },
        { name: "Dumbbell Goblet Squat", sets: 3, reps: 10, weight: 40, notes: "Keep dumbbell glued to chest", id: "goblet_squat" },
        { name: "Barbell Hip Thrust", sets: 3, reps: 10, weight: 135, notes: "Keep chin tucked", id: "id_hip_thrust" },
        { name: "Hanging Knee/Leg Raises", sets: 3, reps: 12, weight: 0, notes: "Lower slowly (3s count)", id: "leg_raises" }
      ]
    },
    {
      id: "phul-upper-hyper",
      title: "PHUL // Upper Hypertrophy",
      type: "push",
      focus: "Upper Body Hypertrophy (PHUL)",
      difficulty: "Intermediate",
      duration: 65,
      calories: "400 - 480",
      muscles: ["Chest", "Back", "Shoulders", "Arms", "Core"],
      exercises: [
        { name: "Incline Dumbbell Press", sets: 4, reps: 10, weight: 40, notes: "Press vertically", id: "incline_db_press" },
        { name: "Flat Dumbbell Chest Fly", sets: 3, reps: 12, weight: 25, notes: "Squeeze chest at the top", id: "dumbbell_chest_fly" },
        { name: "Single-Arm Dumbbell Row", sets: 4, reps: 10, weight: 45, notes: "Pull elbow to hip", id: "single_arm_db_row" },
        { name: "Wide Grip Lat Pulldown", sets: 3, reps: 12, weight: 90, notes: "Pull with elbows, not hands", id: "lat_pulldown" },
        { name: "Dumbbell Lateral Raise", sets: 3, reps: 12, weight: 15, notes: "Lead with elbows", id: "lateral_raise" },
        { name: "Dumbbell Hammer Curl", sets: 3, reps: 12, weight: 25, notes: "Keep elbows pinned to sides", id: "hammer_curl" },
        { name: "Overhead Dumbbell Triceps Extension", sets: 3, reps: 12, weight: 30, notes: "Keep elbows close to head", id: "overhead_tricep_extension" },
        { name: "Hardstyle Forearm Plank", sets: 3, reps: 60, weight: 0, notes: "Squeeze glutes and quads", id: "plank" }
      ]
    },
    {
      id: "phul-lower-hyper",
      title: "PHUL // Lower Hypertrophy",
      type: "legs",
      focus: "Lower Body Hypertrophy (PHUL)",
      difficulty: "Intermediate",
      duration: 70,
      calories: "450 - 550",
      muscles: ["Legs", "Core"],
      exercises: [
        { name: "Dumbbell Goblet Squat", sets: 4, reps: 12, weight: 40, notes: "Keep dumbbell glued to chest", id: "goblet_squat" },
        { name: "Romanian Deadlift (RDL)", sets: 3, reps: 12, weight: 115, notes: "Push wall behind you with your hips", id: "romanian_deadlift" },
        { name: "Barbell Hip Thrust", sets: 3, reps: 12, weight: 135, notes: "Keep chin tucked", id: "id_hip_thrust" },
        { name: "Weighted Russian Twists", sets: 3, reps: 20, weight: 15, notes: "Keep spine tall, twist torso", id: "russian_twist" }
      ]
    }
  ],
  "arnold-split": [
    {
      id: "arnold-chest-back",
      title: "Arnold Split // Chest & Back",
      type: "push",
      focus: "Antagonist Chest & Back Hypertrophy Split",
      difficulty: "Advanced",
      duration: 75,
      calories: "450 - 550",
      muscles: ["Chest", "Back", "Core"],
      exercises: [
        { name: "Flat Barbell Bench Press", sets: 4, reps: 8, weight: 135, notes: "Pin your shoulder blades back", id: "bench_press" },
        { name: "Wide-Grip Pull-Ups", sets: 4, reps: 8, weight: 0, notes: "Drive elbows to back pockets", id: "pull_ups" },
        { name: "Incline Dumbbell Press", sets: 3, reps: 10, weight: 40, notes: "Press vertically", id: "incline_db_press" },
        { name: "Barbell Bent-Over Row", sets: 3, reps: 10, weight: 95, notes: "Pull through your elbows", id: "barbell_row" },
        { name: "Flat Dumbbell Chest Fly", sets: 3, reps: 12, weight: 25, notes: "Squeeze chest at the top", id: "dumbbell_chest_fly" },
        { name: "Single-Arm Dumbbell Row", sets: 3, reps: 12, weight: 45, notes: "Pull elbow to hip", id: "single_arm_db_row" },
        { name: "Hardstyle Forearm Plank", sets: 3, reps: 60, weight: 0, notes: "Squeeze glutes and quads", id: "plank" }
      ]
    },
    {
      id: "arnold-shoulders-arms",
      title: "Arnold Split // Shoulders & Arms",
      type: "push",
      focus: "Deltoid Cap, Biceps & Triceps Split",
      difficulty: "Intermediate",
      duration: 70,
      calories: "400 - 480",
      muscles: ["Shoulders", "Arms", "Core"],
      exercises: [
        { name: "Seated Dumbbell Shoulder Press", sets: 4, reps: 10, weight: 35, notes: "Press straight up", id: "dumbbell_shoulder_press" },
        { name: "Dumbbell Lateral Raise", sets: 4, reps: 12, weight: 15, notes: "Lead with elbows", id: "lateral_raise" },
        { name: "Dumbbell Rear Delt Fly", sets: 3, reps: 15, weight: 12, notes: "Lead with the elbows", id: "rear_delt_fly" },
        { name: "Dumbbell Alternate Bicep Curl", sets: 3, reps: 12, weight: 25, notes: "Pin elbows to sides", id: "bicep_curl" },
        { name: "Triceps Cable Rope Pushdown", sets: 3, reps: 12, weight: 45, notes: "Squeeze triceps at lockout", id: "tricep_pushdown" },
        { name: "Dumbbell Hammer Curl", sets: 3, reps: 12, weight: 25, notes: "Keep elbows pinned to sides", id: "hammer_curl" },
        { name: "Overhead Dumbbell Triceps Extension", sets: 3, reps: 12, weight: 30, notes: "Keep elbows close to head", id: "overhead_tricep_extension" },
        { name: "Hanging Knee/Leg Raises", sets: 3, reps: 12, weight: 0, notes: "Lower slowly (3s count)", id: "leg_raises" }
      ]
    },
    {
      id: "arnold-legs",
      title: "Arnold Split // Legs Day",
      type: "legs",
      focus: "Quadriceps & Posterior Chain Strength",
      difficulty: "Advanced",
      duration: 70,
      calories: "480 - 580",
      muscles: ["Legs", "Core"],
      exercises: [
        { name: "Barbell Back Squat", sets: 4, reps: 8, weight: 135, notes: "Push knees outward", id: "back_squat" },
        { name: "Romanian Deadlift (RDL)", sets: 3, reps: 10, weight: 115, notes: "Push wall behind you with your hips", id: "romanian_deadlift" },
        { name: "Dumbbell Goblet Squat", sets: 3, reps: 12, weight: 40, notes: "Keep dumbbell glued to chest", id: "goblet_squat" },
        { name: "Barbell Hip Thrust", sets: 3, reps: 12, weight: 135, notes: "Keep chin tucked", id: "id_hip_thrust" },
        { name: "Weighted Russian Twists", sets: 3, reps: 20, weight: 15, notes: "Keep spine tall, twist torso", id: "russian_twist" }
      ]
    }
  ],
  "stronglifts": [
    {
      id: "sl-a",
      title: "StrongLifts 5x5 // Workout A",
      type: "fullbody",
      focus: "Squat, Bench, Row Power Progression",
      difficulty: "Advanced",
      duration: 60,
      calories: "450 - 520",
      muscles: ["Legs", "Chest", "Back", "Core"],
      exercises: [
        { name: "Barbell Back Squat", sets: 5, reps: 5, weight: 135, notes: "Push knees outward", id: "back_squat" },
        { name: "Flat Barbell Bench Press", sets: 5, reps: 5, weight: 135, notes: "Pin your shoulder blades back", id: "bench_press" },
        { name: "Barbell Bent-Over Row", sets: 5, reps: 5, weight: 95, notes: "Pull through your elbows", id: "barbell_row" },
        { name: "Hardstyle Forearm Plank", sets: 3, reps: 60, weight: 0, notes: "Squeeze glutes and quads", id: "plank" }
      ]
    },
    {
      id: "sl-b",
      title: "StrongLifts 5x5 // Workout B",
      type: "fullbody",
      focus: "Squat, Press, Deadlift Strength",
      difficulty: "Advanced",
      duration: 60,
      calories: "480 - 550",
      muscles: ["Legs", "Shoulders", "Core"],
      exercises: [
        { name: "Barbell Back Squat", sets: 5, reps: 5, weight: 135, notes: "Push knees outward", id: "back_squat" },
        { name: "Overhead Barbell Press", sets: 5, reps: 5, weight: 75, notes: "Squeeze glutes tight", id: "overhead_press" },
        { name: "Romanian Deadlift (RDL)", sets: 3, reps: 5, weight: 115, notes: "Push wall behind you with your hips", id: "romanian_deadlift" },
        { name: "Hanging Knee/Leg Raises", sets: 3, reps: 12, weight: 0, notes: "Lower slowly (3s count)", id: "leg_raises" }
      ]
    }
  ]
};

let activeProgramKey = "reddit-ppl";
let activeRoutineIndex = 0;
let activeHeatmapTimeframe = "week";
let activeHistoryTimeframe = "all";

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  // Load active program selection from localStorage if saved
  const savedProgram = localStorage.getItem("activeProgramKey");
  if (savedProgram && PROGRAMS[savedProgram]) {
    activeProgramKey = savedProgram;
    const selector = document.getElementById("program-selector");
    if (selector) selector.value = activeProgramKey;
  }
  
  currentActiveWorkout = JSON.parse(JSON.stringify(PROGRAMS[activeProgramKey][activeRoutineIndex]));
  renderWorkoutCard(currentActiveWorkout);
  
  const selector = document.getElementById("program-selector");
  if (selector) {
    selector.addEventListener("change", (e) => {
      activeProgramKey = e.target.value;
      localStorage.setItem("activeProgramKey", activeProgramKey);
      activeRoutineIndex = 0;
      currentActiveWorkout = JSON.parse(JSON.stringify(PROGRAMS[activeProgramKey][activeRoutineIndex]));
      renderWorkoutCard(currentActiveWorkout);
    });
  }

  notThisWorkoutBtn.addEventListener("click", rotateWorkout);
  compareBtn.addEventListener("click", handlePlanComparison);
  sendMsgBtn.addEventListener("click", handleChatInput);
  
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleChatInput();
  });
  
  formModalClose.addEventListener("click", closeFormModal);
  scoreModalClose.addEventListener("click", closeScoreModal);
  
  tabVideo.addEventListener("click", () => switchFormModalTab("video"));
  tabText.addEventListener("click", () => switchFormModalTab("text"));
  videoPlayBtn.addEventListener("click", toggleMockVideo);
  
  document.querySelectorAll(".quick-input-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      customPlanInput.value = tag.getAttribute("data-text");
      customPlanInput.focus();
    });
  });

  setupSidebarTabs();

  updateHeatmapUI();
  renderHistoryUI();

  const navDashboard = document.getElementById("nav-dashboard");
  const navHistory = document.getElementById("nav-history");
  if (navDashboard) navDashboard.addEventListener("click", switchToDashboardView);
  if (navHistory) navHistory.addEventListener("click", switchToHistoryView);

  setupHeatmapTimeframeListeners();
  setupHistoryTimeframeListeners();

  renderDetailedHistoryUI();
});

// Sidebar Tab selection (Heatmap vs History Log)
function setupSidebarTabs() {
  const tabHeatmap = document.getElementById("tab-sidebar-heatmap");
  const tabHistory = document.getElementById("tab-sidebar-history");
  const paneHeatmap = document.getElementById("pane-sidebar-heatmap");
  const paneHistory = document.getElementById("pane-sidebar-history");
  
  if (!tabHeatmap || !tabHistory) return;
  
  tabHeatmap.addEventListener("click", () => {
    tabHeatmap.className = "flex-1 py-3 text-xs font-black uppercase tracking-wider border-b-2 border-cyan-400 text-cyan-400 bg-cyan-950/20 transition cursor-pointer";
    tabHistory.className = "flex-1 py-3 text-xs font-black uppercase tracking-wider border-b-2 border-transparent text-slate-400 hover:text-white transition cursor-pointer";
    
    paneHeatmap.classList.remove("hidden");
    paneHistory.classList.add("hidden");
  });
  
  tabHistory.addEventListener("click", () => {
    tabHistory.className = "flex-1 py-3 text-xs font-black uppercase tracking-wider border-b-2 border-cyan-400 text-cyan-400 bg-cyan-950/20 transition cursor-pointer";
    tabHeatmap.className = "flex-1 py-3 text-xs font-black uppercase tracking-wider border-b-2 border-transparent text-slate-400 hover:text-white transition cursor-pointer";
    
    paneHistory.classList.remove("hidden");
    paneHeatmap.classList.add("hidden");
    renderHistoryUI();
  });
}

// Map custom splits to closest standard split for comparison evaluations
function getStandardType(type) {
  if (["chest", "shoulders", "push"].includes(type)) return "push";
  if (["back", "arms", "pull"].includes(type)) return "pull";
  if (["legs"].includes(type)) return "legs";
  if (["fullbody"].includes(type)) return "fullbody";
  return "push"; 
}

// Render exercise elements with progressive overload checking
function renderWorkoutCard(workout) {
  applyProgressiveOverload(workout);
  
  workoutCardContainer.classList.add("opacity-0", "translate-y-2");
  
  setTimeout(() => {
    workoutTitleEl.textContent = workout.title;
    workoutFocusEl.textContent = workout.focus;
    workoutDiffEl.textContent = workout.difficulty;
    workoutDurationEl.textContent = `${workout.duration} Min`;
    workoutCaloriesEl.textContent = `${workout.calories} kcal`;
    
    const banner = document.getElementById("progression-banner");
    const hasProgression = workout.exercises.some(ex => ex.progression);
    
    if (hasProgression) {
      banner.innerHTML = `
        <div class="px-4 py-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs text-emerald-400 font-bold animate-fade-in-up">
          <i data-lucide="trending-up" class="w-4 h-4 animate-bounce"></i>
          <span>AURA Progression Active: Target weight/reps auto-scaled based on your history to prevent plateauing!</span>
        </div>
      `;
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
      banner.innerHTML = "";
    }
    
    workoutMusclesContainer.innerHTML = "";
    workout.muscles.forEach(m => {
      const tag = document.createElement("span");
      tag.className = "px-2.5 py-1 text-xs font-semibold tracking-wide rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-400";
      tag.textContent = m;
      workoutMusclesContainer.appendChild(tag);
    });
    
    exercisesContainer.innerHTML = "";
    workout.exercises.forEach((ex, idx) => {
      const row = document.createElement("div");
      row.className = "p-4 rounded-2xl border border-white/10 bg-slate-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up";
      row.style.animationDelay = `${idx * 50}ms`;
      
      let badgeHtml = "";
      if (ex.progression) {
        const text = ex.progression.type === "weight" ? `+${ex.progression.amount} lbs` : `+${ex.progression.amount} reps`;
        badgeHtml = `<span class="px-2 py-0.5 text-[9px] font-black rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400 uppercase flex items-center gap-1"><i data-lucide="trending-up" class="w-3 h-3"></i> overload ${text}</span>`;
      }
      
      row.innerHTML = `
        <div class="flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <div class="flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center text-xs font-bold text-cyan-400 border border-cyan-800/30">${idx + 1}</span>
              <button 
                onclick="deleteSingleExercise(${idx})" 
                class="w-6 h-6 rounded-full bg-rose-950/80 border border-rose-800/30 hover:border-rose-500 text-rose-400 flex items-center justify-center cursor-pointer transition"
                title="Delete this exercise"
              >
                <i data-lucide="minus" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            <input 
              type="text" 
              id="input-name-${idx}"
              class="bg-transparent text-white font-bold text-sm md:text-base border-b border-transparent hover:border-white/20 focus:border-cyan-400 focus:outline-none transition-all px-1 py-0.5 rounded w-full sm:w-auto flex-1 max-w-[280px]"
              value="${ex.name}" 
              oninput="handleExerciseNameInput(${idx}, this.value)"
              aria-label="Edit exercise name"
              placeholder="Enter exercise name..."
            >
            ${badgeHtml}
          </div>
          <p class="text-[10px] text-slate-400 mt-1 pl-8 flex items-center gap-1.5">
            <i data-lucide="target" class="w-3.5 h-3.5 text-cyan-400"></i>
            <span>Target: <strong class="text-cyan-300 font-semibold" id="detected-text-${idx}">${detectMusclesString(ex.id, ex.name)}</strong></span>
          </p>
          <p class="text-xs text-slate-400 mt-1 pl-8 flex items-center gap-1">
            <span class="text-cyan-400 font-semibold">Tip:</span> <span id="exercise-tip-text-${idx}">${ex.notes}</span>
          </p>
          <div class="mt-2 pl-8 flex gap-2 flex-wrap">
            <button 
              id="guide-btn-${idx}"
              onclick="showFormGuide('${ex.id}')"
              class="text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer bg-cyan-950/40 hover:bg-cyan-900/40 px-2.5 py-1 rounded border border-cyan-800/20"
            >
              <i data-lucide="info" class="w-3 h-3"></i> Biomechanical Guide
            </button>
            <button 
              onclick="swapSingleExercise(${idx})"
              class="text-[10px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer bg-emerald-950/40 hover:bg-emerald-900/40 px-2.5 py-1 rounded border border-cyan-800/20"
            >
              <i data-lucide="shuffle" class="w-3 h-3"></i> Swap Exercise
            </button>
          </div>
        </div>
        
        <div class="flex items-center gap-2.5 sm:gap-3 pl-8 md:pl-0">
          <div class="flex flex-col items-center">
            <span class="text-[9px] uppercase tracking-wide text-slate-500 font-bold mb-1">Sets</span>
            <input 
              type="number" 
              id="input-sets-${idx}"
              class="w-14 h-11 md:w-12 md:h-9 rounded-lg text-center numeric-input font-black text-sm md:text-xs" 
              value="${ex.sets}" 
              min="1" max="10"
              aria-label="${ex.name} sets"
            >
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[9px] uppercase tracking-wide text-slate-500 font-bold mb-1">Reps</span>
            <input 
              type="number" 
              id="input-reps-${idx}"
              class="w-14 h-11 md:w-12 md:h-9 rounded-lg text-center numeric-input font-black text-sm md:text-xs" 
              value="${ex.reps}" 
              min="1" max="100"
              aria-label="${ex.name} reps"
            >
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[9px] uppercase tracking-wide text-slate-500 font-bold mb-1">Weight (lbs)</span>
            <input 
              type="number" 
              id="input-weight-${idx}"
              class="w-20 h-11 md:w-16 md:h-9 rounded-lg text-center numeric-input font-black text-sm md:text-xs" 
              value="${ex.weight}" 
              min="0" max="1000"
              aria-label="${ex.name} weight"
            >
          </div>
        </div>
      `;
      exercisesContainer.appendChild(row);
    });
    
    // Render the Add Exercise (+) button row
    const addBtnRow = document.createElement("div");
    addBtnRow.className = "flex justify-center pt-2 pb-4";
    addBtnRow.innerHTML = `
      <button 
        onclick="addCustomExercise()"
        class="w-10 h-10 rounded-full bg-[#080c12]/80 hover:bg-cyan-950 border border-cyan-800/30 hover:border-cyan-400 text-cyan-400 flex items-center justify-center cursor-pointer transition shadow-lg shadow-cyan-400/5"
        title="Add new exercise row"
      >
        <i data-lucide="plus" class="w-5 h-5"></i>
      </button>
    `;
    exercisesContainer.appendChild(addBtnRow);
    
    const logBtnRow = document.createElement("div");
    logBtnRow.className = "pt-4 border-t border-white/10 mt-6";
    logBtnRow.innerHTML = `
      <button 
        onclick="logAndCompleteWorkout()"
        id="complete-workout-btn"
        class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-sm tracking-wider shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer transition btn-glow-emerald"
      >
        <i data-lucide="check-circle" class="w-5 h-5"></i>
        LOG & COMPLETE WORKOUT
      </button>
    `;
    exercisesContainer.appendChild(logBtnRow);
    
    lucide.createIcons();
    workoutCardContainer.classList.remove("opacity-0", "translate-y-2");
  }, 150);
}

// Swap a single exercise in the current active routine with a random same-muscle alternative
function swapSingleExercise(index) {
  syncCurrentInputValues();
  const currentEx = currentActiveWorkout.exercises[index];
  const poolItem = EXERCISE_POOL[currentEx.id];
  if (!poolItem) {
    alert("This exercise cannot be swapped.");
    return;
  }
  
  const category = poolItem.category;
  const candidatesKeys = CATEGORY_MAP[category];
  
  // Filter out the current exercise AND any exercise already in the workout to prevent duplicates
  const activeIds = currentActiveWorkout.exercises.map(ex => ex.id);
  let alternatives = candidatesKeys.filter(key => key !== currentEx.id && !activeIds.includes(key));
  
  // Fallback if all other category exercises are already in the workout
  if (alternatives.length === 0) {
    alternatives = candidatesKeys.filter(key => key !== currentEx.id);
  }
  
  if (alternatives.length === 0) {
    alert("No biomechanical alternatives available for this category.");
    return;
  }
  
  const randKey = alternatives[Math.floor(Math.random() * alternatives.length)];
  const newEx = EXERCISE_POOL[randKey];
  
  currentActiveWorkout.exercises[index] = {
    name: newEx.name,
    sets: newEx.defaultSets,
    reps: newEx.defaultReps,
    weight: newEx.defaultWeight,
    notes: newEx.cues[0],
    id: newEx.id
  };
  
  renderWorkoutCard(currentActiveWorkout);
}

// Progressive Overload Engine: Auto-scales weight (+5 lbs / +2 lbs) or reps (+1) based on history
function applyProgressiveOverload(workout) {
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  if (history.length === 0) return;
  
  workout.exercises.forEach(ex => {
    let lastLog = null;
    for (let i = history.length - 1; i >= 0; i--) {
      const loggedEx = history[i].exercises.find(e => e.id === ex.id);
      if (loggedEx) {
        lastLog = loggedEx;
        break;
      }
    }
    
    if (lastLog) {
      const poolDetails = EXERCISE_POOL[ex.id];
      const exType = poolDetails ? poolDetails.type : "compound";
      
      if (lastLog.weight > 0) {
        let increment = 5; 
        if (exType === "auxiliary") {
          increment = 2; 
        }
        
        const prevWeight = lastLog.weight;
        const newWeight = prevWeight + increment;
        
        ex.weight = newWeight;
        ex.sets = lastLog.sets;
        ex.reps = lastLog.reps;
        
        ex.progression = {
          type: "weight",
          amount: increment,
          prev: prevWeight
        };
      } else {
        let increment = 1; 
        if (ex.id === "plank") {
          increment = 5; 
        }
        
        const prevReps = lastLog.reps;
        const newReps = prevReps + increment;
        
        ex.reps = newReps;
        ex.sets = lastLog.sets;
        ex.weight = 0;
        
        ex.progression = {
          type: "reps",
          amount: increment,
          prev: prevReps
        };
      }
    }
  });
}

// Rotate through standard routines
function rotateWorkout() {
  rotateIcon.classList.add("animate-spin-once");
  notThisWorkoutBtn.disabled = true;
  
  const routines = PROGRAMS[activeProgramKey];
  activeRoutineIndex = (activeRoutineIndex + 1) % routines.length;
  currentActiveWorkout = JSON.parse(JSON.stringify(routines[activeRoutineIndex]));
  renderWorkoutCard(currentActiveWorkout);
  
  setTimeout(() => {
    rotateIcon.classList.remove("animate-spin-once");
    notThisWorkoutBtn.disabled = false;
  }, 600);
}

// Open exercise form guide modal
function showFormGuide(exerciseId) {
  let ex = EXERCISE_POOL[exerciseId];
  if (!ex) {
    if (exerciseId && exerciseId.startsWith("custom-")) {
      const cat = exerciseId.split("-")[1];
      ex = {
        name: "Custom " + cat.charAt(0).toUpperCase() + cat.slice(1) + " Exercise",
        category: cat,
        setup: "Set up with a stable posture and balanced base. Brace your core and lock your shoulders.",
        execution: "Perform the movement through a full, controlled range of motion. Maintain an active mind-muscle connection.",
        mistakes: ["Using excessive momentum or body swinging", "Restricting range of motion at bottom/lockout"],
        cues: ["Focus on a slow, controlled eccentric contraction (2-3s)", "Keep your joints aligned and midline fully braced"]
      };
    } else {
      return;
    }
  }
  
  modalTitle.textContent = ex.name;
  modalCategory.textContent = `${ex.category.toUpperCase()} // Biomechanics`;
  
  modalSetup.innerHTML = ex.setup.split('. ').map(s => s.trim() ? `<li>${s.trim()}.</li>` : '').join('');
  modalExecution.innerHTML = ex.execution.split('. ').map(s => s.trim() ? `<li>${s.trim()}.</li>` : '').join('');
  
  modalMistakes.innerHTML = ex.mistakes.map(m => `
    <li class="flex items-start gap-2.5 text-xs text-slate-300">
      <span class="mt-0.5 text-rose-500 font-bold">⚠</span>
      <span>${m}</span>
    </li>
  `).join('');
  
  modalCues.innerHTML = ex.cues.map(c => `
    <li class="flex items-start gap-2.5 text-xs text-slate-300">
      <span class="mt-0.5 text-cyan-400 font-semibold">✦</span>
      <span>${c}</span>
    </li>
  `).join('');
  
  setupBiomechCanvas(ex.id);
  switchFormModalTab("text");
  
  formModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Close form modal
function closeFormModal() {
  formModal.classList.add("hidden");
  document.body.style.overflow = "";
  stopMockVideo();
}

// Toggle tab panes inside guide modal
function switchFormModalTab(tab) {
  if (tab === "video") {
    tabVideo.classList.add("border-cyan-400", "text-cyan-400", "bg-cyan-950/20");
    tabVideo.classList.remove("border-transparent", "text-slate-400");
    tabText.classList.add("border-transparent", "text-slate-400");
    tabText.classList.remove("border-cyan-400", "text-cyan-400", "bg-cyan-950/20");
    
    paneVideo.classList.remove("hidden");
    paneText.classList.add("hidden");
  } else {
    tabText.classList.add("border-cyan-400", "text-cyan-400", "bg-cyan-950/20");
    tabText.classList.remove("border-transparent", "text-slate-400");
    tabVideo.classList.add("border-transparent", "text-slate-400");
    tabVideo.classList.remove("border-cyan-400", "text-cyan-400", "bg-cyan-950/20");
    
    paneText.classList.remove("hidden");
    paneVideo.classList.add("hidden");
  }
}

// Draw a stylized biomechanical graphic loop using canvas
let biomechCanvasInterval = null;
function setupBiomechCanvas(exId) {
  const canvas = document.getElementById("biomech-canvas");
  const ctx = canvas.getContext("2d");
  let frame = 0;
  
  if (biomechCanvasInterval) clearInterval(biomechCanvasInterval);
  
  biomechCanvasInterval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "rgba(0, 242, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 15) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 15) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
    
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    
    const progress = (frame % 60) / 60;
    const sinFactor = Math.sin(progress * Math.PI * 2); 
    
    let head = { x: 150, y: 50 };
    let neck = { x: 150, y: 70 };
    let pelvis = { x: 150, y: 130 };
    let leftHand = { x: 100, y: 100 };
    let rightHand = { x: 200, y: 100 };
    let leftFoot = { x: 110, y: 220 };
    let rightFoot = { x: 190, y: 220 };
    
    if (exId === "bench_press") {
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.beginPath(); ctx.moveTo(50, 160); ctx.lineTo(250, 160); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(90, 160); ctx.lineTo(90, 220); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(210, 160); ctx.lineTo(210, 220); ctx.stroke();
      
      head = { x: 80, y: 140 };
      neck = { x: 100, y: 140 };
      pelvis = { x: 180, y: 140 };
      
      const barY = 90 + (sinFactor + 1) * 20; 
      
      leftHand = { x: 140, y: barY };
      rightHand = { x: 140, y: barY };
      
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath(); ctx.moveTo(head.x, head.y); ctx.lineTo(pelvis.x, pelvis.y); ctx.stroke();
      
      ctx.strokeStyle = "rgba(0, 242, 255, 0.8)";
      ctx.beginPath(); ctx.moveTo(neck.x, neck.y); ctx.lineTo(120, 120 + (sinFactor+1)*8); ctx.lineTo(140, barY); ctx.stroke();
      
      ctx.strokeStyle = "#e2e8f0";
      ctx.beginPath(); ctx.moveTo(pelvis.x, pelvis.y); ctx.lineTo(195, 170); ctx.lineTo(200, 220); ctx.stroke();
      
      ctx.strokeStyle = "#ff0055";
      ctx.lineWidth = 6;
      ctx.beginPath(); ctx.moveTo(140, barY - 40); ctx.lineTo(140, barY + 40); ctx.stroke();
      ctx.fillStyle = "#ff0055";
      ctx.fillRect(135, barY - 45, 10, 10);
      ctx.fillRect(135, barY + 35, 10, 10);
    } 
    
    else if (exId === "back_squat") {
      const squatFactor = (sinFactor + 1) / 2; 
      
      pelvis = { x: 150, y: 110 + squatFactor * 50 };
      neck = { x: 150 + squatFactor * 15, y: 65 + squatFactor * 40 };
      head = { x: 150 + squatFactor * 17, y: 45 + squatFactor * 40 };
      
      const kneeX = 120 - squatFactor * 10;
      const kneeY = 160 + squatFactor * 15;
      
      ctx.strokeStyle = "rgba(0, 255, 136, 0.8)";
      ctx.beginPath(); ctx.moveTo(pelvis.x, pelvis.y); ctx.lineTo(kneeX, kneeY); ctx.lineTo(120, 220); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pelvis.x, pelvis.y); ctx.lineTo(180 + squatFactor * 10, kneeY); ctx.lineTo(180, 220); ctx.stroke();
      
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath(); ctx.moveTo(neck.x, neck.y); ctx.lineTo(pelvis.x, pelvis.y); ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(head.x, head.y, 10, 0, Math.PI*2); ctx.fill();
      
      ctx.strokeStyle = "#ffaa00";
      ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(neck.x - 30, neck.y + 5); ctx.lineTo(neck.x + 30, neck.y + 5); ctx.stroke();
    } 
    
    else {
      const yOsc = sinFactor * 20;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath(); ctx.moveTo(150, 80 + yOsc); ctx.lineTo(150, 150 + yOsc/2); ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(150, 60 + yOsc, 10, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = "rgba(0, 242, 255, 0.6)";
      ctx.beginPath(); ctx.moveTo(150, 90 + yOsc); ctx.lineTo(110, 110); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(150, 90 + yOsc); ctx.lineTo(190, 110); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(150, 150 + yOsc/2); ctx.lineTo(130, 210); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(150, 150 + yOsc/2); ctx.lineTo(170, 210); ctx.stroke();
    }
    
    ctx.fillStyle = "#00f2ff";
    ctx.beginPath(); ctx.arc(pelvis.x, pelvis.y, 4, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(neck.x, neck.y, 4, 0, Math.PI*2); ctx.fill();
    
    frame++;
  }, 1000/30);
}

// Media player controls simulation
let videoInterval = null;
let isVideoPlaying = false;
function toggleMockVideo() {
  if (isVideoPlaying) {
    stopMockVideo();
  } else {
    isVideoPlaying = true;
    videoPlayBtn.innerHTML = `<i data-lucide="pause" class="w-5 h-5 text-slate-950"></i>`;
    lucide.createIcons();
    
    let progress = 0;
    videoInterval = setInterval(() => {
      progress = (progress + 2) % 100;
      videoProgressBar.style.width = `${progress}%`;
    }, 100);
  }
}

function stopMockVideo() {
  isVideoPlaying = false;
  videoPlayBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5 text-slate-950"></i>`;
  lucide.createIcons();
  if (videoInterval) {
    clearInterval(videoInterval);
    videoInterval = null;
  }
}

// Log & complete workout, calculations and scoring out of 100%
function logAndCompleteWorkout() {
  const loggedExercises = [];
  let totalLoggedSets = 0;
  let totalPlannedSets = 0;
  let totalLoggedVolume = 0;
  let totalPlannedVolume = 0;
  
  currentActiveWorkout.exercises.forEach((ex, idx) => {
    const inputSets = parseInt(document.getElementById(`input-sets-${idx}`).value) || 0;
    const inputReps = parseInt(document.getElementById(`input-reps-${idx}`).value) || 0;
    const inputWeight = parseInt(document.getElementById(`input-weight-${idx}`).value) || 0;
    
    totalLoggedSets += inputSets;
    totalPlannedSets += ex.sets;
    
    totalLoggedVolume += (inputSets * inputReps * (inputWeight || 1));
    totalPlannedVolume += (ex.sets * ex.reps * (ex.weight || 1));
    
    loggedExercises.push({
      id: ex.id,
      sets: inputSets,
      reps: inputReps,
      weight: inputWeight,
      name: ex.name
    });
  });
  
  let score = 75;
  const strengths = [];
  const improvements = [];
  
  if (totalLoggedVolume >= totalPlannedVolume) {
    score += 12;
    strengths.push(`Excellent strength progression. Logged cumulative training load: ${totalLoggedVolume.toLocaleString()} lbs (Exceeded planned load).`);
  } else {
    score -= 8;
    improvements.push("Cumulative workload fell below target guidelines. Try slowly elevating weight on compound sets.");
  }
  
  if (totalLoggedSets >= 12 && totalLoggedSets <= 24) {
    score += 10;
    strengths.push(`Ideal fatigue ceiling. Logged ${totalLoggedSets} working sets, perfect metabolic load for myofibrillar protein synthesis.`);
  } else if (totalLoggedSets < 12) {
    score -= 15;
    improvements.push(`Low set density (${totalLoggedSets} sets). Below local threshold for optimal hypertrophic stimulation.`);
  } else {
    score -= 5;
    improvements.push(`High set volume (${totalLoggedSets} sets). Exceeding local guidelines, monitor central nervous system recovery.`);
  }
  
  let weightAltered = false;
  loggedExercises.forEach((le, idx) => {
    const orig = currentActiveWorkout.exercises[idx];
    if (le.weight !== orig.weight) weightAltered = true;
  });
  
  if (weightAltered) {
    score += 5;
    strengths.push("Active adaptation: Custom weight parameter modifications detected (reflects auto-regulation).");
  }
  
  score = Math.min(100, Math.max(30, score));
  
  const muscleTracker = JSON.parse(localStorage.getItem("muscleTracker") || "{}");
  
  loggedExercises.forEach(le => {
    const poolItem = EXERCISE_POOL[le.id];
    if (poolItem) {
      const cat = poolItem.category;
      muscleTracker[cat] = (muscleTracker[cat] || 0) + le.sets;
    } else {
      const detected = detectCategoryAndMuscles(le.name);
      muscleTracker[detected.category] = (muscleTracker[detected.category] || 0) + le.sets;
    }
  });
  localStorage.setItem("muscleTracker", JSON.stringify(muscleTracker));
  
  const workoutHistory = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  workoutHistory.push({
    timestamp: Date.now(),
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    title: currentActiveWorkout.title,
    score: score,
    exercises: loggedExercises
  });
  localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));
  
  showScoreModal(score, strengths, improvements);
  
  updateHeatmapUI();
  renderHistoryUI();
  renderDetailedHistoryUI();
}

// Open score outcome modal
function showScoreModal(score, strengths, improvements) {
  scoreText.textContent = `${score}%`;
  
  const circumference = 326.7;
  const offset = circumference - (score / 100) * circumference;
  scoreCircle.style.strokeDasharray = `${circumference}`;
  scoreCircle.style.strokeDashoffset = `${offset}`;
  
  let html = `
    <div class="space-y-4">
      <div>
        <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Logged Strengths</h5>
        <ul class="space-y-2 pl-1">
          ${strengths.map(s => `
            <li class="flex items-start gap-2.5 text-xs text-slate-200">
              <span class="mt-0.5 text-emerald-400 font-bold">✓</span>
              <span>${s}</span>
            </li>
          `).join('')}
        </ul>
      </div>
  `;
  
  if (improvements.length > 0) {
    html += `
      <div class="pt-2">
        <h5 class="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Areas for Optimization</h5>
        <ul class="space-y-2 pl-1">
          ${improvements.map(i => `
            <li class="flex items-start gap-2.5 text-xs text-slate-300">
              <span class="mt-0.5 text-cyan-400 font-semibold">✦</span>
              <span>${i}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
  
  html += `</div>`;
  scoreFeedbackContent.innerHTML = html;
  
  scoreModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeScoreModal() {
  scoreModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// Update SVG human body heatmap based on local sets history log filtered by active timeframe
function updateHeatmapUI() {
  const muscleTracker = getFilteredSets(activeHeatmapTimeframe);
  const targets = ["chest", "back", "shoulders", "arms", "core", "legs"];
  
  targets.forEach(t => {
    const el = document.getElementById(`muscle-${t}`);
    const elBack = document.getElementById(`muscle-${t}-back`);
    
    if (el) {
      const sets = muscleTracker[t] || 0;
      let color = "#1e293b";
      
      if (sets > 0 && sets <= 5) {
        color = "#00bcd4";
      } else if (sets > 5 && sets <= 12) {
        color = "#a855f7";
      } else if (sets > 12) {
        color = "#ff0055";
      }
      
      el.style.fill = color;
      if (elBack) elBack.style.fill = color;
      
      const label = document.getElementById(`label-${t}`);
      if (label) label.textContent = `${sets} sets`;
    }
  });
}

// Render history logs list into UI timeline
function renderHistoryUI() {
  const historyContainer = document.getElementById("pane-sidebar-history");
  if (!historyContainer) return;
  
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  
  if (history.length === 0) {
    historyContainer.innerHTML = `
      <div class="py-8 text-center text-xs text-slate-500">
        <i data-lucide="history" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
        <span>No workouts logged yet. Complete a recommended routine to start history.</span>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  let html = `
    <div class="mb-3">
      <button 
        onclick="switchToHistoryView()" 
        class="w-full py-2 px-3 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 hover:text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
      >
        Open Full Reports <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
    <div class="space-y-4 max-h-[380px] overflow-y-auto pr-1">
  `;
  
  history.slice().reverse().forEach((log, idx) => {
    html += `
      <div class="p-3.5 rounded-2xl border border-white/5 bg-slate-950/40 relative">
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] text-slate-400 font-bold">${log.date}</span>
          <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-black border border-emerald-500/20">
            Score: ${log.score}%
          </span>
        </div>
        
        <h4 class="text-xs font-black text-white mb-2 tracking-tight">${log.title}</h4>
        
        <ul class="space-y-1.5 border-t border-white/5 pt-2">
    `;
    
    log.exercises.forEach(ex => {
      const wtText = ex.weight > 0 ? `@ ${ex.weight} lbs` : "(Bodyweight)";
      html += `
        <li class="text-[10px] text-slate-300 flex justify-between items-center">
          <span>• ${ex.name}</span>
          <span class="font-bold text-slate-400">${ex.sets}s × ${ex.reps}r ${wtText}</span>
        </li>
      `;
    });
    
    html += `
        </ul>
      </div>
    `;
  });
  
  html += `</div>`;
  historyContainer.innerHTML = html;
  lucide.createIcons();
}

// Switch view to detailed history log page
function switchToHistoryView() {
  const navDashboard = document.getElementById("nav-dashboard");
  const navHistory = document.getElementById("nav-history");
  const viewDashboard = document.getElementById("view-dashboard");
  const viewHistory = document.getElementById("view-history");
  
  if (!navDashboard || !navHistory || !viewDashboard || !viewHistory) return;
  
  // Set classes for active History tab
  navHistory.className = "px-3.5 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg transition cursor-pointer text-cyan-400 bg-cyan-950/40 border border-cyan-800/20";
  navDashboard.className = "px-3.5 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg transition cursor-pointer text-slate-400 hover:text-white border border-transparent";
  
  // Toggle views
  viewDashboard.classList.add("hidden");
  viewHistory.classList.remove("hidden");
  
  // Render full history analytics
  renderDetailedHistoryUI();
}

// Switch view back to main training dashboard
function switchToDashboardView() {
  const navDashboard = document.getElementById("nav-dashboard");
  const navHistory = document.getElementById("nav-history");
  const viewDashboard = document.getElementById("view-dashboard");
  const viewHistory = document.getElementById("view-history");
  
  if (!navDashboard || !navHistory || !viewDashboard || !viewHistory) return;
  
  // Set classes for active Dashboard tab
  navDashboard.className = "px-3.5 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg transition cursor-pointer text-cyan-400 bg-cyan-950/40 border border-cyan-800/20";
  navHistory.className = "px-3.5 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-lg transition cursor-pointer text-slate-400 hover:text-white border border-transparent";
  
  // Toggle views
  viewHistory.classList.add("hidden");
  viewDashboard.classList.remove("hidden");
}

// Reset localStorage logs from sidebar trigger
function resetMuscleLog() {
  resetHistory();
}

// Clear all logged workouts, muscle sets, charts, and reset UIs
function resetHistory() {
  if (confirm("Are you sure you want to clear your entire workout history log? This will reset all progression charts and statistics.")) {
    localStorage.removeItem("muscleTracker");
    localStorage.removeItem("workoutHistory");
    updateHeatmapUI();
    renderHistoryUI();
    renderDetailedHistoryUI();
  }
}

// Render detailed in-depth history log analytics view
function renderDetailedHistoryUI() {
  const statsTotalWorkouts = document.getElementById("stats-total-workouts");
  const statsTotalVolume = document.getElementById("stats-total-volume");
  const statsAvgScore = document.getElementById("stats-avg-score");
  const statsFavMuscle = document.getElementById("stats-fav-muscle");
  
  const chartVolumeContainer = document.getElementById("chart-volume-container");
  const chartDistributionContainer = document.getElementById("chart-distribution-container");
  const historyDetailCards = document.getElementById("history-detail-cards");
  
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  
  // Calculate start of timeframe cutoff
  let cutoff = 0;
  const now = new Date();
  if (activeHistoryTimeframe === "week") {
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const start = new Date(now.setDate(diff));
    start.setHours(0, 0, 0, 0);
    cutoff = start.getTime();
  } else if (activeHistoryTimeframe === "month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
    cutoff = start.getTime();
  } else if (activeHistoryTimeframe === "year") {
    const start = new Date(now.getFullYear(), 0, 1);
    start.setHours(0, 0, 0, 0);
    cutoff = start.getTime();
  } else {
    cutoff = 0;
  }
  
  // Filter history logs based on timeframe
  const filteredHistory = history.filter(log => {
    let logTime = log.timestamp;
    if (!logTime) {
      logTime = new Date(log.date).getTime() || 0;
    }
    return logTime >= cutoff;
  });
  
  // Calculate dynamic sets tracker for the active timeframe
  const activeMuscleTracker = { chest: 0, back: 0, shoulders: 0, arms: 0, core: 0, legs: 0 };
  filteredHistory.forEach(log => {
    log.exercises.forEach(ex => {
      const poolItem = EXERCISE_POOL[ex.id];
      const cat = poolItem ? poolItem.category : detectCategoryAndMuscles(ex.name).category;
      if (activeMuscleTracker[cat] !== undefined) {
        activeMuscleTracker[cat] += ex.sets;
      }
    });
  });
  
  // Calculate total workouts in timeframe
  if (statsTotalWorkouts) {
    statsTotalWorkouts.textContent = filteredHistory.length;
  }
  
  // Calculate total volume in timeframe
  let totalVolume = 0;
  filteredHistory.forEach(log => {
    log.exercises.forEach(ex => {
      totalVolume += ex.sets * ex.reps * (ex.weight || 1);
    });
  });
  if (statsTotalVolume) {
    statsTotalVolume.textContent = `${totalVolume.toLocaleString()} lbs`;
  }
  
  // Calculate average coherence score in timeframe
  let avgScore = 0;
  if (filteredHistory.length > 0) {
    const totalScore = filteredHistory.reduce((sum, log) => sum + (log.score || 0), 0);
    avgScore = Math.round(totalScore / filteredHistory.length);
  }
  if (statsAvgScore) {
    statsAvgScore.textContent = `${avgScore}%`;
  }
  
  // Calculate favorite muscle in timeframe (most sets completed)
  let maxSets = 0;
  let favMuscleKey = "";
  const categories = ["chest", "back", "shoulders", "arms", "core", "legs"];
  categories.forEach(cat => {
    const sets = activeMuscleTracker[cat] || 0;
    if (sets > maxSets) {
      maxSets = sets;
      favMuscleKey = cat;
    }
  });
  
  const muscleLabels = {
    chest: "Chest",
    back: "Back",
    shoulders: "Shoulders",
    arms: "Arms",
    core: "Core",
    legs: "Legs"
  };
  
  if (statsFavMuscle) {
    statsFavMuscle.textContent = favMuscleKey ? muscleLabels[favMuscleKey] : "None";
  }
  
  // Render volume progression chart
  if (chartVolumeContainer) {
    if (filteredHistory.length === 0) {
      chartVolumeContainer.innerHTML = `
        <div class="w-full h-full flex flex-col items-center justify-center text-xs text-slate-500">
          <i data-lucide="trending-up" class="w-8 h-8 mb-2 opacity-50 text-cyan-400"></i>
          <span>No workouts logged during this timeframe. Progression chart will appear here.</span>
        </div>
      `;
    } else {
      // Last 10 sessions within timeframe for progression comparison
      const recentLogs = filteredHistory.slice(-10);
      let maxRecentVolume = 0;
      const recentVolumes = recentLogs.map(log => {
        const vol = log.exercises.reduce((sum, ex) => sum + (ex.sets * ex.reps * (ex.weight || 1)), 0);
        if (vol > maxRecentVolume) maxRecentVolume = vol;
        return vol;
      });
      
      const maxVolScale = maxRecentVolume || 1;
      
      let chartHtml = "";
      recentLogs.forEach((log, idx) => {
        const volume = recentVolumes[idx];
        const heightPercent = Math.max(8, (volume / maxVolScale) * 100);
        chartHtml += `
          <div class="group relative flex flex-col items-center justify-end h-full w-full max-w-[45px] min-w-[20px]">
            <!-- Tooltip -->
            <div class="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center bg-[#080c12]/95 border border-cyan-500/30 text-white p-2.5 rounded-xl text-[10px] pointer-events-none z-20 w-36 text-center shadow-xl shadow-cyan-500/20">
              <span class="font-black text-cyan-400 block truncate w-full">${log.title}</span>
              <span class="text-emerald-400 font-mono font-bold mt-0.5">${volume.toLocaleString()} lbs</span>
              <span class="text-[9px] text-slate-400 font-mono">${log.date}</span>
            </div>
            <!-- Bar -->
            <div 
              class="w-full rounded-t-lg bg-gradient-to-t from-cyan-600 to-emerald-400 opacity-80 hover:opacity-100 transition-all duration-300 shadow-lg shadow-cyan-400/5 cursor-pointer volume-bar-glow"
              style="height: ${heightPercent}%"
            ></div>
            <!-- Date label -->
            <span class="text-[9px] text-slate-400 mt-2 font-semibold truncate max-w-[40px]">${log.date.split(',')[0]}</span>
          </div>
        `;
      });
      chartVolumeContainer.innerHTML = chartHtml;
    }
  }
  
  // Render muscle load distribution progress bars
  if (chartDistributionContainer) {
    let maxCategorySets = 0;
    categories.forEach(cat => {
      const sets = activeMuscleTracker[cat] || 0;
      if (sets > maxCategorySets) maxCategorySets = sets;
    });
    const maxSetScale = maxCategorySets || 1;
    
    const gradients = {
      chest: "from-cyan-500 to-blue-500 shadow-cyan-500/20",
      back: "from-emerald-500 to-teal-500 shadow-emerald-500/20",
      shoulders: "from-purple-500 to-indigo-500 shadow-purple-500/20",
      arms: "from-pink-500 to-rose-500 shadow-pink-500/20",
      core: "from-amber-500 to-orange-500 shadow-amber-500/20",
      legs: "from-indigo-500 to-cyan-500 shadow-indigo-500/20"
    };
    
    let distHtml = "";
    categories.forEach(cat => {
      const sets = activeMuscleTracker[cat] || 0;
      const widthPercent = (sets / maxSetScale) * 100;
      distHtml += `
        <div class="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-b-0">
          <span class="w-16 text-[10px] font-black text-slate-300 uppercase tracking-wider">${muscleLabels[cat]}</span>
          <div class="flex-1 h-3 bg-black/60 rounded-full border border-white/5 overflow-hidden relative shadow-inner">
            <div 
              class="h-full bg-gradient-to-r ${gradients[cat]} rounded-full transition-all duration-500"
              style="width: ${widthPercent}%"
            ></div>
          </div>
          <span class="w-12 text-right text-[10px] font-mono font-black text-cyan-400">${sets} sets</span>
        </div>
      `;
    });
    chartDistributionContainer.innerHTML = distHtml;
  }
  
  // Render detailed historic cards
  if (historyDetailCards) {
    if (filteredHistory.length === 0) {
      historyDetailCards.innerHTML = `
        <div class="py-12 text-center text-xs text-slate-500 border border-dashed border-white/10 rounded-2xl">
          <i data-lucide="layers" class="w-8 h-8 mx-auto mb-2 opacity-50 text-cyan-400"></i>
          <span>No workout logs available for this timeframe.</span>
        </div>
      `;
    } else {
      let cardsHtml = "";
      filteredHistory.slice().reverse().forEach(log => {
        let tableRowsHtml = "";
        log.exercises.forEach(ex => {
          const volume = ex.sets * ex.reps * (ex.weight || 1);
          const wtText = ex.weight > 0 ? `${ex.weight} lbs` : "Bodyweight";
          
          let statusText = "✓ MATCH";
          let statusClass = "text-cyan-400 bg-cyan-950/40 border-cyan-800/30";
          
          const ref = EXERCISE_POOL[ex.id];
          if (ref) {
            const plannedWeight = ref.defaultWeight;
            const plannedReps = ref.defaultReps;
            if (ex.weight > plannedWeight || (ex.weight === plannedWeight && ex.reps > plannedReps)) {
              statusText = "▲ OVERLOAD";
              statusClass = "text-emerald-400 bg-emerald-950/40 border-emerald-800/30";
            } else if (ex.weight < plannedWeight || ex.reps < plannedReps) {
              statusText = "▼ DELOAD";
              statusClass = "text-slate-400 bg-slate-950/40 border-slate-800/30";
            }
          } else {
            statusText = "✓ RECORDED";
            statusClass = "text-cyan-400 bg-cyan-950/40 border-cyan-800/30";
          }
          
          tableRowsHtml += `
            <tr class="hover:bg-white/5 transition-colors">
              <td class="py-2.5 pr-4 font-bold text-white text-[11px]">${ex.name}</td>
              <td class="py-2.5 px-4 text-center font-mono font-semibold text-slate-300">${ex.sets}</td>
              <td class="py-2.5 px-4 text-center font-mono font-semibold text-slate-300">${ex.reps}</td>
              <td class="py-2.5 px-4 text-center font-mono font-semibold text-slate-300">${wtText}</td>
              <td class="py-2.5 px-4 text-right font-mono font-black text-emerald-400">${volume.toLocaleString()} lbs</td>
              <td class="py-2.5 pl-4 text-right">
                <span class="inline-block text-[8px] font-black px-2 py-0.5 rounded border ${statusClass}">
                  ${statusText}
                </span>
              </td>
            </tr>
          `;
        });
        
        cardsHtml += `
          <div class="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 bg-slate-900/20 relative overflow-hidden space-y-4 animate-fade-in-up history-card-shadow">
            <div class="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span class="text-[9px] uppercase font-bold text-slate-500 tracking-wider font-mono">${log.date}</span>
                <h4 class="text-base sm:text-lg font-black text-white tracking-tight">${log.title}</h4>
              </div>
              <div>
                <span class="px-2.5 py-1 text-[10px] font-black rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                  Coherence: ${log.score}%
                </span>
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="border-b border-white/10 text-slate-500 uppercase tracking-wider text-[9px] font-black">
                    <th class="py-2.5 pr-4">Exercise</th>
                    <th class="py-2.5 px-4 text-center">Sets</th>
                    <th class="py-2.5 px-4 text-center">Reps</th>
                    <th class="py-2.5 px-4 text-center">Weight</th>
                    <th class="py-2.5 px-4 text-right">Load Volume</th>
                    <th class="py-2.5 pl-4 text-right">Target Match</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5">
                  ${tableRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      });
      historyDetailCards.innerHTML = cardsHtml;
    }
  }
  
  lucide.createIcons();
}

// Chat Messages Controller - Unified Chatbot (Workout generation & Science QA)
function appendChatMessage(sender, text) {
  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${sender === "user" ? "message-user" : "message-aura"} animate-fade-in-up`;
  
  let formattedText = text
    .replace(/\n/g, "<br>")
    .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
    .replace(/- (.*?)(<br>|$)/g, "• $1$2");
    
  bubble.innerHTML = formattedText;
  chatMessagesLog.appendChild(bubble);
  
  chatMessagesLog.scrollTop = chatMessagesLog.scrollHeight;
}

function handleChatInput() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  
  appendChatMessage("user", msg);
  chatInput.value = "";
  
  const typingBubble = document.createElement("div");
  typingBubble.className = "message-bubble message-aura text-slate-500 italic flex items-center gap-1.5 animate-pulse";
  typingBubble.id = "aura-typing";
  typingBubble.innerHTML = `<i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> AURA is synthesizing...`;
  chatMessagesLog.appendChild(typingBubble);
  chatMessagesLog.scrollTop = chatMessagesLog.scrollHeight;
  lucide.createIcons();
  
  setTimeout(() => {
    const el = document.getElementById("aura-typing");
    if (el) el.remove();
    
// Core science & workout generation router
function processChatBotQuery(query) {
  const q = query.toLowerCase();
  
  // 1. ADD / SUGGEST SINGLE EXERCISE intent
  const isAddReq = q.includes("add") || q.includes("suggest") || q.includes("recommend") || q.includes("whats a good") || q.includes("what's a good") || q.includes("what exercise") || q.includes("exercise to add") || q.includes("workout to do") || q.includes("put in") || q.includes("include") || q.includes("good exercise") || q.includes("some exercise");
  
  if (isAddReq) {
    if (q.includes("ab") || q.includes("core") || q.includes("stomach") || q.includes("midsection") || q.includes("plank")) {
      return `Here are the top science-based selections for your **Core & Abs** stabilizer groups:\n` +
             `- **Hanging Knee/Leg Raises**: Incredible lower ab contraction. Focus on avoiding swinging. Aim for 3 sets of 12-15 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Hanging Knee/Leg Raises')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Hanging Leg Raises</button>\n\n` +
             `- **RKC Plank**: An ultra-tension plank variant. Squeeze your glutes, core, and thighs as hard as possible for 30s.\n` +
             `<button onclick="addCustomExerciseWithName('RKC Plank')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add RKC Plank</button>`;
    }
    
    if (q.includes("bicep") || q.includes("arm") || q.includes("tricep") || q.includes("curl") || q.includes("pump")) {
      const isTricep = q.includes("tricep");
      if (isTricep) {
        return `For **Triceps hypertrophy** (which make up 2/3 of arm size), focus on vertical elbow extension vectors:\n` +
               `- **Cable Tricep Pushdowns**: Great for lateral head sweep and isolation. Aim for 3 sets of 10-12 reps.\n` +
               `<button onclick="addCustomExerciseWithName('Cable Tricep Pushdowns')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Cable Pushdowns</button>\n\n` +
               `- **Overhead Dumbbell Extension**: Maximizes long-head stretch under tension. Aim for 3 sets of 10 reps.\n` +
               `<button onclick="addCustomExerciseWithName('Overhead Dumbbell Extension')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Overhead DB Extension</button>`;
      } else {
        return `For **Biceps isolation and forearm width**, focus on structural curls:\n` +
               `- **Barbell Bicep Curl**: Core progressive overload curl. Great for inner/outer biceps brachii thickness. Aim for 3 sets of 8-10 reps.\n` +
               `<button onclick="addCustomExerciseWithName('Barbell Bicep Curl')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Barbell Curls</button>\n\n` +
               `- **Hammer Curls**: Highly effective for brachialis and forearm thickness. Aim for 3 sets of 10-12 reps.\n` +
               `<button onclick="addCustomExerciseWithName('Hammer Curls')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Hammer Curls</button>`;
      }
    }
    
    if (q.includes("chest") || q.includes("bench") || q.includes("pushup") || q.includes("pec")) {
      return `For horizontal pressing and **Chest hypertrophy** development:\n` +
             `- **Flat Barbell Bench Press**: Core compound movement. Great for overall pectoralis loading. Aim for 4 sets of 8 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Flat Barbell Bench Press')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Bench Press</button>\n\n` +
             `- **Incline Dumbbell Press**: Direct focus on the clavicular (upper) chest fibers. Aim for 3 sets of 10 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Incline Dumbbell Press')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Incline DB Press</button>`;
    }
    
    if (q.includes("back") || q.includes("lat") || q.includes("row") || q.includes("pullup") || q.includes("pull up")) {
      return `For **Back width and thickness** via vertical and horizontal pulling vectors:\n` +
             `- **Wide-Grip Pull-Ups**: King of lat expansion and outer sweep. Aim for 3 sets of 8 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Wide-Grip Pull-Ups')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Wide-Grip Pull-Ups</button>\n\n` +
             `- **Barbell Bent-Over Row**: Superb mid-back and spinal erector loader. Aim for 4 sets of 8 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Barbell Bent-Over Row')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Barbell Rows</button>`;
    }
    
    if (q.includes("shoulder") || q.includes("press") || q.includes("delt")) {
      return `For **Shoulder strength and lateral delt width** (creating a V-taper):\n` +
             `- **Overhead Barbell Press**: Core vertical compound shoulder strength builder. Aim for 4 sets of 6 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Overhead Barbell Press')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Overhead Press</button>\n\n` +
             `- **Dumbbell Lateral Raises**: Isolated lateral delt loading. Keep tension constant. Aim for 3 sets of 12-15 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Dumbbell Lateral Raises')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Lateral Raises</button>`;
    }
    
    if (q.includes("leg") || q.includes("squat") || q.includes("glute") || q.includes("deadlift") || q.includes("hamstring") || q.includes("quad")) {
      return `For **Lower Body strength** and posterior chain mechanical tension:\n` +
             `- **Barbell Back Squat**: The baseline quad and glute compound lift. Aim for 4 sets of 6 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Barbell Back Squat')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Back Squats</button>\n\n` +
             `- **Romanian Deadlift (RDL)**: Exceptional hamstrings and glutes stretch under load. Aim for 3 sets of 8-10 reps.\n` +
             `<button onclick="addCustomExerciseWithName('Romanian Deadlift (RDL)')" class="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3 py-1.5 rounded-lg cursor-pointer transition shadow-md shadow-cyan-400/20">+ Add Romanian Deadlift</button>`;
    }
    
    return `What muscle group would you like to target? You can ask me things like:\n` +
           `- *"What's a good ab exercise to add?"*\n` +
           `- *"Recommend a bicep workout to add in"* \n` +
           `- *"Suggest a chest exercise to put in"*`;
  }
  
  // 2. REPS & SETS GUIDANCE intent
  const isRepsReq = q.includes("rep") || q.includes("set") || q.includes("how many") || q.includes("range") || q.includes("count");
  if (isRepsReq) {
    return `**Sets & Reps Selection Guide**:\n\n` +
           `Optimal training volume and rep ranges are dictated by your primary target stimulus:\n` +
           `- **Hypertrophy (Muscle Growth)**: **3 to 4 sets** of **8 to 12 reps** per set. Keep the weight at ~70-80% of your 1-Rep Max. Squeeze hard and leave 1-2 reps in reserve (RPE 8-9).\n` +
           `- **Strength (Max Power)**: **4 to 5 sets** of **1 to 5 reps** with heavy loads (~85%+ 1RM) and 3-5 minute rest intervals.\n` +
           `- **Endurance / Muscle Tone**: **2 to 3 sets** of **15 to 20 reps** with shorter rest periods.\n\n` +
           `*Mid-Workout Advice*: For the exercises currently loaded on your card, aim for **3 sets of 8-10 reps**. If you successfully hit 10 reps on all sets, increase the weight next time!`;
  }
  
  // 3. WEIGHT SELECTION GUIDANCE intent
  const isWeightReq = q.includes("weight") || q.includes("heavy") || q.includes("load") || q.includes("how much") || q.includes("lbs") || q.includes("choose") || q.includes("limit");
  if (isWeightReq) {
    return `**Weight Selection & Auto-Regulation**:\n\n` +
           `To trigger mechanical hypertrophy, choose a working weight that satisfies these criteria:\n` +
           `1. **RPE Scale (Rate of Perceived Exertion)**: Aim for **RPE 8 to 9** on your working sets. This means by the end of your set (e.g. rep 10), you should feel like you could only perform 1 or 2 more reps with perfect form before complete muscular collapse.\n` +
           `2. **Eccentric Control**: Choose a weight where you can maintain a **2-3 second lowering phase** under full control. If the weight drops rapidly or you have to swing your hips to lift it, it is too heavy!\n` +
           `3. **Safe Target**: If you are trying a compound movement for the first time, err on the side of caution. Focus on joint tracking, lock your core, and scale up by 5 lbs sequentially.`;
  }
  
  // 4. FULL WORKOUT GENERATION ROUTE
  const isGenerationReq = (q.includes("generate") || q.includes("build") || q.includes("create") || q.includes("make a new") || q.includes("recommend a new")) && (q.includes("routine") || q.includes("workout") || q.includes("split") || q.includes("program") || q.includes("plan"));
  
  if (isGenerationReq) {
    let category = null;
    let categoryTitle = "";
    let redirectedFromCardio = false;
    
    if (q.includes("chest") || q.includes("bench")) { category = "chest"; categoryTitle = "Chest Focus"; }
    else if (q.includes("back") || q.includes("pullup") || q.includes("row")) { category = "back"; categoryTitle = "Posterior Pull"; }
    else if (q.includes("leg") || q.includes("squat") || q.includes("glute") || q.includes("deadlift")) { category = "legs"; categoryTitle = "Lower Body Target"; }
    else if (q.includes("shoulder") || q.includes("press")) { category = "shoulders"; categoryTitle = "Shoulders Split"; }
    else if (q.includes("arm") || q.includes("bicep") || q.includes("tricep") || q.includes("curl")) { category = "arms"; categoryTitle = "Arms Pump Split"; }
    else if (q.includes("core") || q.includes("abs") || q.includes("plank")) { category = "core"; categoryTitle = "Core Stabilization"; }
    else if (q.includes("cardio") || q.includes("hiit") || q.includes("run") || q.includes("burpee") || q.includes("recovery") || q.includes("yoga")) { 
      category = "core"; 
      categoryTitle = "Core & Stabilizers"; 
      redirectedFromCardio = true;
    }
    
    if (!category) {
      category = "fullbody";
      categoryTitle = "Full Body Balanced";
    }
    
    let num = 4;
    const matchNum = q.match(/\b(1|2|3|4|5|6|one|two|three|four|five|six)\b/);
    if (matchNum) {
      const mapping = { "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6 };
      num = mapping[matchNum[0]] || 4;
    }
    
    const candidatesKeys = CATEGORY_MAP[category];
    const selectedPool = [];
    const count = Math.min(num, candidatesKeys.length);
    
    for (let i = 0; i < count; i++) {
      const key = candidatesKeys[i];
      selectedPool.push(EXERCISE_POOL[key]);
    }
    
    if (category !== "core") {
      selectedPool.push(EXERCISE_POOL["plank"]);
    }
    
    const generatedWorkout = {
      id: `custom-${category}`,
      title: `Custom AI ${categoryTitle}`,
      type: category,
      focus: `AI Dynamic Generation (${categoryTitle} split)`,
      difficulty: "Custom",
      duration: selectedPool.length * 11,
      calories: `${selectedPool.length * 70} - ${selectedPool.length * 85}`,
      muscles: [category.charAt(0).toUpperCase() + category.slice(1)],
      exercises: selectedPool.map(ex => ({
        name: ex.name,
        sets: ex.defaultSets,
        reps: ex.defaultReps,
        weight: ex.defaultWeight,
        notes: ex.cues[0],
        id: ex.id
      }))
    };
    
    currentActiveWorkout = generatedWorkout;
    renderWorkoutCard(currentActiveWorkout);
    
    let responseText = "";
    if (redirectedFromCardio) {
      responseText += `⚠️ **Cardio/Recovery Redirect**: Since AURA is focused strictly on weight training for building muscle tissue, I have redirected your request to a **Core & Stabilizers** weight-training split:\n\n`;
    } else {
      responseText += `I've custom-built a **${categoryTitle}** routine for you with ${selectedPool.length} exercises: \n`;
    }
    responseText += selectedPool.map(e => `- ${e.name}`).join("\n") + 
                    `\n\nI have auto-loaded this routine into your recommended workout panel on the left (with default targets and weights prefilled). Since we are tracking your history, progressive overload adaptations were evaluated!`;
    return responseText;
  }
  
  // 5. SPECIFIC LIFT GUIDANCE
  if (q.includes("squat")) {
    return `**Squats Science & Form Guide**:\n` +
           `- *Target*: Primary quadriceps and glute stimulus, secondary hamstring and spinal erector reinforcement.\n` +
           `- *Form Cues*: Keep your chest upright, hinge hips back, and push knees outward. Screw feet into the floor.\n` +
           `- *Safety Tip*: Ensure thighs reach parallel to ground to activate glutes and load knees evenly. Keep core tight to prevent spinal shear.`;
  }
  if (q.includes("bench press") || q.includes("benchpress") || (q.includes("bench") && q.includes("press"))) {
    return `**Bench Press Science & Form Guide**:\n` +
           `- *Target*: Pectoralis major, anterior deltoid head, and triceps brachii.\n` +
           `- *Form Cues*: Pin your shoulders back and down into the bench. Keep your elbows tucked at a 45-degree angle.\n` +
           `- *Safety Tip*: Maintain leg drive by pressing feet into the floor. Lower the bar in a slight diagonal arc to the lower chest, not the throat.`;
  }
  if (q.includes("deadlift")) {
    return `**Deadlift Science & Form Guide**:\n` +
           `- *Target*: Entire posterior chain (glutes, hamstrings, spinal erectors, lats, traps).\n` +
           `- *Form Cues*: Hinge at your hips, scrape the barbell against your shins, and brace lats.\n` +
           `- *Safety Tip*: Keep your lower back completely flat. Do not round your lumbar spine under load. Drive through your feet rather than pulling with your arms.`;
  }
  if (q.includes("pullup") || q.includes("pull up") || q.includes("pull-up")) {
    return `**Pull-Ups Science & Form Guide**:\n` +
           `- *Target*: Latissimus dorsi (width), rhomboids, rear delts, and biceps brachii.\n` +
           `- *Form Cues*: Lead with your chest, drive your elbows down towards your pockets, and start every rep from a deadhang.\n` +
           `- *Safety Tip*: Control the lowering phase. Avoid swinging or kipping legs to preserve mechanical tension on the back muscles.`;
  }
  
  // 6. HEALTH / REST / BREATHING / SORENESS / HYPERTROPHY general lookups
  if (q.includes("pain") || q.includes("hurt") || q.includes("injur") || q.includes("tweak")) {
    return `⚠️ **Critical Biomechanical Warning**: \n` +
           `If you experience sharp, localized, or shooting pain in joints during any movement, **STOP IMMEDIATELY**.\n` +
           `- *Pain vs. DOMS*: Dull soreness in muscle tissue (DOMS) is normal. Sharp joint pinching or popping is a warning sign of structural overload.\n` +
           `- *Action Plan*: Lower the working weight, focus on active mobility, or swap the movement for a pain-free alternative. Never lift through joint pain.`;
  }
  if (q.includes("rest") || q.includes("break")) {
    return `According to sports science, rest periods correspond directly to your target stimulus:\n` +
           `- *Strength (1-5 reps)*: Rest 3-5 minutes. Allows complete regeneration of muscle ATP and phosphocreatine stores.\n` +
           `- *Hypertrophy (6-12 reps)*: Rest 1-2 minutes. Yields optimal balance of mechanical tension and metabolic stress.\n` +
           `- *Endurance (15+ reps)*: Rest 30-60 seconds.\n\n` +
           `For your active workout, I advise aiming for **90 seconds** between primary sets to support muscle hypertrophy.`;
  }
  if (q.includes("breath") || q.includes("breathe") || q.includes("inhale") || q.includes("exhale")) {
    return `For heavy load compound movements, you should employ the **Valsalva Maneuver**:\n` +
           `1. *Setup*: Inhale deeply (belly-breath) to 80% capacity before starting the rep.\n` +
           `2. *Brace*: Hold breath and tighten your core muscles as if bracing for a punch.\n` +
           `3. *Execution*: Lower the weight, and press/lift past the 'sticking point'.\n` +
           `4. *Release*: Exhale near the peak lockout, then reset.`;
  }
  if (q.includes("sore") || q.includes("doms") || q.includes("stiff") || q.includes("recovery")) {
    return `Muscle soreness (DOMS) typically peaks 24-48 hours post-workout due to structural micro-damage to muscle fibers.\n\n` +
           `*Recommendation*: If it is standard soreness, focus on active recovery, light walking, and high protein intake. If you experience joint discomfort, stop the movement immediately!`;
  }
  if (q.includes("hypertrophy") || q.includes("growth") || q.includes("muscle")) {
    return `Muscle hypertrophy occurs via three primary physiological triggers:\n` +
           `1. **Mechanical Tension**: Created by lifting heavy weights through a range of motion. This is the single most critical driver.\n` +
           `2. **Muscle Damage**: Localized structural micro-damage, heavily stimulated by slow, controlled eccentrics.\n3. **Metabolic Stress**: The accumulation of metabolites (the 'pump' sensation).\n\n` +
           `For today's split, focus on a **3-second eccentric phase** on every exercise to maximize tension.`;
  }
  if (q.includes("warm") || q.includes("stretching") || q.includes("stretch")) {
    return `Prior to heavy lifting, prioritize a **Dynamic Warm-Up** rather than static stretching:\n` +
           `- *Why*: Static stretching relaxes muscle fibers, temporarily decreasing force production capacity by up to 10%.\n` +
           `- *What to do*: Perform 5-10 minutes of dynamic work: arm circles, leg swings, hip hinges, and 1-2 light warm-up sets of your first exercise.`;
  }
  
  // FALLBACK ADVICE
  return `I am AURA, your biomechanical AI co-pilot. I can answer questions about your workout mid-session! Try asking:\n\n` +
         `- *"What's a good bicep workout to add in?"*\n` +
         `- *"What's a good ab exercise to add?"*\n` +
         `- *"How many reps should I do for this exercise?"*\n` +
         `- *"What weight should I use?"*\n` +
         `- *"How long should I rest between sets?"*`;
}

// Simulated AI Plan Comparison Logic
function handlePlanComparison() {
  const customPlanText = customPlanInput.value.trim();
  
  if (!customPlanText) {
    alert("Please enter a custom workout plan first.");
    return;
  }
  
  const lowerText = customPlanText.toLowerCase();
  const isPrompt = lowerText.includes("how") || lowerText.includes("what") || lowerText.includes("why") || lowerText.includes("give me") || lowerText.includes("pick") || lowerText.includes("generate");
  
  if (isPrompt) {
    analysisResultsPanel.classList.remove("hidden");
    analysisResultsPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    analysisContent.innerHTML = `
      <div class="animate-fade-in-up space-y-3">
        <div class="flex items-start gap-2.5 text-xs text-amber-400 bg-amber-950/40 border border-amber-800/30 p-3.5 rounded-xl">
          <span class="font-bold">💡 Tip:</span>
          <span>It looks like you entered a question or generation prompt in the **Plan Analyzer**. 
          <br><br>
          To get an AI rating, enter what you are planning to do instead (e.g. <em>"I want to do 3 miles running and 4 sets of pullups"</em>). If you want to ask questions or generate a split, use the **AURA AI Assistant** chat window above!</span>
        </div>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  analysisResultsPanel.classList.remove("hidden");
  analysisResultsPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  
  analysisContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-cyan-950 flex items-center justify-center border border-cyan-800/30 text-cyan-400 animate-pulse">
          <i data-lucide="brain" class="w-5 h-5"></i>
        </div>
        <div>
          <h4 class="font-semibold text-gray-100 text-sm animate-pulse">AURA Intelligence Layer Synthesizing...</h4>
          <p class="text-xs text-gray-500">Evaluating muscle group split, kinetic balance, and volume density</p>
        </div>
      </div>
      
      <div class="space-y-2 pt-2">
        <div class="h-4 w-1/3 rounded bg-white/5 shimmer"></div>
        <div class="h-3 w-full rounded bg-white/5 shimmer"></div>
        <div class="h-3 w-5/6 rounded bg-white/5 shimmer"></div>
        <div class="h-3 w-4/5 rounded bg-white/5 shimmer"></div>
      </div>
    </div>
  `;
  lucide.createIcons();
  
  setTimeout(() => {
    const analysis = analyzePlan(customPlanText, currentActiveWorkout);
    renderAnalysis(analysis);
  }, 1200);
}

// Logic to evaluate custom text vs active recommendation
function analyzePlan(input, original) {
  const text = input.toLowerCase();
  
  const hasCardio = /\b(run|jog|sprint|cardio|treadmill|elliptical|cycling|bike|swim|walk|hike|hiit|endurance|aerobic)\b/.test(text);
  const hasPull = /\b(pullup|pull-up|chinup|chin-up|row|deadlift|bicep|curl|lat pulldown|back|trap|lats|rear delt)\b/.test(text);
  const hasPush = /\b(bench|pushup|push-up|press|dip|tricep|chest|shoulder|lateral raise|military press|pec)\b/.test(text);
  const hasLegs = /\b(squat|lunge|leg press|calf|calves|hamstring|quad|leg extension|glute|rdl|hip thrust)\b/.test(text);
  const hasCore = /\b(abs|plank|situp|sit-up|crunch|hanging knee|core|obliques|leg raise|russian twist)\b/.test(text);
  const hasRecovery = /\b(yoga|stretch|recover|mobility|foam roll|rest|meditate|massage)\b/.test(text);
  
  const exercisesList = input.split(/[,\n•;]|\band\b/).map(s => s.trim()).filter(s => s.length > 4);
  const estimatedExercises = Math.max(1, exercisesList.length);
  
  const origType = getStandardType(original.type);
  
  let rating = 3;
  let strengths = [];
  let warnings = [];
  let tips = [];
  let volumeMatch = "Balanced";
  let muscleCoverage = "General Focus";
  
  if (input.length < 15) {
    rating = 2;
    strengths.push("Stated a basic intent.");
    warnings.push("Extremely short entry. The AI layer needs more specific exercises, sets, or reps to conduct a high-fidelity biomechanical assessment.");
    tips.push("Try details like: '4 sets of 5 back squats, 4 sets of 5 bench press, and 3 sets of planks'.");
    return { rating, strengths, warnings, tips, volumeMatch: "Low Detail", muscleCoverage: "Undetermined" };
  }
  
  if (estimatedExercises > 8) {
    volumeMatch = "High (Overtraining Risk)";
    rating = 3;
    warnings.push("High exercise volume. Planning 9+ distinct movements in a single session can trigger early CNS fatigue, excessive muscle damage, and diminishing returns (junk volume).");
    tips.push("Trim the session down to 5-7 focused exercises, prioritizing heavy compound lifts first, followed by key isolations.");
  } else if (estimatedExercises <= 2) {
    volumeMatch = "Low Volume";
    rating = 3;
    strengths.push("Low joint fatigue impact, making it easy to recover from.");
    warnings.push("Sub-optimal training stimulus. Only 1 or 2 exercises may not provide enough mechanical tension or metabolic stress.");
    tips.push("Add at least 1 compound exercise and 1 core stabilizing movement to round out the session.");
  } else {
    volumeMatch = "Optimal Volume";
    rating = 5;
    strengths.push(`Excellent volume composition. Incorporating ${estimatedExercises} distinct movements allows for target muscle exhaustion without excessive local inflammation.`);
  }
  
  if (!hasCore) {
    warnings.push("No core stabilization included. Skipping midline reinforcement (planks, hanging knee raises) misses an opportunity to improve pelvic control.");
    tips.push("Incorporate 2-3 sets of an anti-rotational or stabilizing core movement (e.g., plank taps).");
    if (rating > 3) rating--;
  } else {
    strengths.push("Midline (core) integration included, promoting pelvic and spinal stability.");
  }

  if (hasCardio) {
    warnings.push("Cardio or conditioning work detected. While great for cardiovascular health, cardio does not provide the high mechanical tension or metabolic stress required for myofibrillar hypertrophy.");
    tips.push("Limit cardio sessions to separate days or perform them post-lifting to avoid interfering with muscle building and strength adaptation.");
    if (rating > 2) rating--;
  }
  if (hasRecovery) {
    warnings.push("Active recovery/mobility work detected. Mobility flows are helpful, but do not contribute to muscle hypertrophy.");
    tips.push("Perform active recovery and stretching on dedicated rest days instead of using them to replace a scheduled weight training session.");
    if (rating > 2) rating--;
  }
  
  if (origType === "push") {
    if (hasPush) {
      muscleCoverage = "Chest, Shoulders & Triceps Focus";
      rating = Math.max(rating, 4);
      strengths.push("Good mechanical substitution. Your plan aligns with the recommended Push split, targeting the anterior chain.");
    } else {
      rating = Math.min(rating, 3);
      muscleCoverage = "Split Deviation";
      warnings.push("Deviates completely from Push Day. Swapping presses for pull or leg patterns changes your weekly split structure.");
      tips.push("If substituting due to joint discomfort, swap barbell presses for neutral grip dumbbell presses instead of skipping the pattern entirely.");
    }
  } 
  
  else if (origType === "pull") {
    if (hasPull) {
      muscleCoverage = "Back, Biceps & Posterior Chain Focus";
      rating = Math.max(rating, 4);
      strengths.push("Solid grip and pull alignment. You preserved pull-ups, rows, or biceps work, which target the posterior chain.");
    } else {
      rating = Math.min(rating, 3);
      muscleCoverage = "Split Deviation";
      warnings.push("Posterior chain omission. You swapped out pull exercises, which can lead to muscular imbalances if your back isn't trained proportionally to your chest.");
      tips.push("Keep pullups or rows in the custom plan to retain basic pulling strength.");
    }
  } 
  
  else if (origType === "legs") {
    if (hasLegs) {
      muscleCoverage = "Lower Body Focus";
      rating = Math.max(rating, 4);
      strengths.push("Lower-body kinetic chain stimulation. Squats or RDLs engage large muscle groups.");
    } else {
      rating = Math.min(rating, 3);
      muscleCoverage = "Split Omission";
      warnings.push("Lower body skip (Skipping Legs). Swapping legs day for an upper body session is a common training balance error.");
      tips.push("Even a simple lower body movement (like dumbbell goblet squats or RDLs) is better than completely ignoring the lower body.");
    }
  }

  else if (origType === "fullbody") {
    const hasCompounds = /\b(squat|bench|deadlift|row|press)\b/.test(text);
    if (hasCompounds) {
      muscleCoverage = "Full Body Compound Focus";
      rating = Math.max(rating, 4);
      strengths.push("Excellent compound structure. Your plan incorporates primary compound lifts (squats, bench, deadlifts, rows, or presses) to stimulate systemic muscle growth.");
    } else {
      rating = Math.min(rating, 3);
      muscleCoverage = "Missing Compound Lifts";
      warnings.push("Lack of primary compound lifts. For building muscle tissue, you should center your full-body routine around major compound weight training movements rather than isolated or light accessories.");
      tips.push("Incorporate squats, bench press, deadlifts, rows, or overhead presses into your routine to maximize mechanical tension.");
    }
  }

  rating = Math.min(5, Math.max(1, rating));

  return {
    rating,
    strengths,
    warnings,
    tips,
    volumeMatch,
    muscleCoverage
  };
}

// Render plan comparison results to UI
function renderAnalysis(analysis) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    starsHtml += `<span class="star ${i <= analysis.rating ? 'filled' : ''}">★</span>`;
  }
  
  const strengthsList = analysis.strengths.map(s => `
    <li class="flex items-start gap-2.5 text-xs text-slate-200">
      <span class="mt-0.5 text-emerald-400 font-bold">✓</span>
      <span>${s}</span>
    </li>
  `).join("");
  
  const warningsList = analysis.warnings.map(w => `
    <li class="flex items-start gap-2.5 text-xs text-slate-300">
      <span class="mt-0.5 text-rose-500 font-bold">⚠</span>
      <span>${w}</span>
    </li>
  `).join("");
  
  const tipsList = analysis.tips.map(t => `
    <li class="flex items-start gap-2.5 text-xs text-slate-300">
      <span class="mt-0.5 text-cyan-400 font-semibold">✦</span>
      <span>${t}</span>
    </li>
  `).join("");
  
  let volumeColor = "text-emerald-400 bg-emerald-950/40 border-emerald-800/30";
  if (analysis.volumeMatch.includes("High")) {
    volumeColor = "text-rose-400 bg-rose-950/40 border-rose-800/30";
  } else if (analysis.volumeMatch.includes("Low")) {
    volumeColor = "text-amber-400 bg-amber-950/40 border-amber-800/30";
  }

  analysisContent.innerHTML = `
    <div class="animate-fade-in-up space-y-5">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center border border-cyan-800/40 text-cyan-400">
            <i data-lucide="shield-check" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="font-bold text-white text-sm uppercase tracking-wider">AURA Analysis Verdict</h4>
            <p class="text-xs text-slate-400">Split coherence & volume report</p>
          </div>
        </div>
        
        <div class="flex flex-col items-start md:items-end gap-1">
          <div class="star-rating text-xl">${starsHtml}</div>
          <span class="text-[9px] uppercase font-black tracking-wider text-amber-400">Plan rating: ${analysis.rating} / 5</span>
        </div>
      </div>
      
      <!-- Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="px-4 py-3 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col justify-between">
          <span class="text-[9px] uppercase font-bold text-slate-500">Volume Coherence</span>
          <span class="text-xs font-semibold mt-1 px-2.5 py-0.5 rounded-full border inline-block w-fit ${volumeColor}">
            ${analysis.volumeMatch}
          </span>
        </div>
        <div class="px-4 py-3 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col justify-between">
          <span class="text-[9px] uppercase font-bold text-slate-500">Kinetic Split Target</span>
          <span class="text-xs font-semibold mt-1 text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-0.5 rounded-full inline-block w-fit">
            ${analysis.muscleCoverage}
          </span>
        </div>
      </div>

      <!-- Lists -->
      <div class="space-y-4 pt-1">
        ${analysis.strengths.length > 0 ? `
          <div class="space-y-1.5">
            <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Biomechanical Strengths</span>
            </h5>
            <ul class="space-y-2 pl-1">${strengthsList}</ul>
          </div>
        ` : ''}

        ${analysis.warnings.length > 0 ? `
          <div class="space-y-1.5 pt-1">
            <h5 class="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Potential Red Flags</span>
            </h5>
            <ul class="space-y-2 pl-1">${warningsList}</ul>
          </div>
        ` : ''}

        ${analysis.tips.length > 0 ? `
          <div class="space-y-1.5 pt-1">
            <h5 class="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Adjustment Recommendations</span>
            </h5>
            <ul class="space-y-2 pl-1">${tipsList}</ul>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  lucide.createIcons();
}

// Real-time custom exercise name text parser and AI target detection
function detectCategoryAndMuscles(name) {
  const n = name.toLowerCase();
  
  // Try to find an exact or substring match in EXERCISE_POOL first
  for (const key in EXERCISE_POOL) {
    const ex = EXERCISE_POOL[key];
    if (n === ex.name.toLowerCase() || n === ex.id.replace(/_/g, " ")) {
      return {
        category: ex.category,
        muscles: ex.muscles,
        id: ex.id,
        matched: true
      };
    }
  }
  
  // Custom keyword heuristics
  let category = "core";
  let muscles = ["Core"];
  
  if (n.includes("bench") || n.includes("chest") || n.includes("pec") || n.includes("pushup") || n.includes("push-up") || n.includes("fly")) {
    category = "chest";
    muscles = ["Chest", "Front Delts"];
    if (n.includes("press") || n.includes("pushup") || n.includes("push-up")) muscles.push("Triceps");
  } else if (n.includes("row") || n.includes("pullup") || n.includes("pull-up") || n.includes("chinup") || n.includes("chin-up") || n.includes("lat") || n.includes("deadlift") || n.includes("shrug") || n.includes("back")) {
    category = "back";
    muscles = ["Back", "Rear Delts"];
    if (n.includes("pull") || n.includes("chin") || n.includes("row") || n.includes("curl")) muscles.push("Biceps");
    if (n.includes("deadlift") || n.includes("row")) muscles.push("Lower Back");
  } else if (n.includes("squat") || n.includes("leg") || n.includes("quad") || n.includes("hamstring") || n.includes("calf") || n.includes("calves") || n.includes("lunge") || n.includes("glute") || n.includes("thrust") || n.includes("rdl")) {
    category = "legs";
    muscles = ["Legs"];
    if (n.includes("squat") || n.includes("lunge") || n.includes("press") || n.includes("quad")) muscles.push("Quadriceps");
    if (n.includes("deadlift") || n.includes("rdl") || n.includes("hamstring") || n.includes("thrust") || n.includes("bridge")) muscles.push("Glutes", "Hamstrings");
    if (n.includes("calf") || n.includes("calves")) muscles.push("Calves");
  } else if (n.includes("shoulder") || n.includes("press") && (n.includes("overhead") || n.includes("military") || n.includes("shoulder")) || n.includes("lateral") || n.includes("raise") || n.includes("delt")) {
    category = "shoulders";
    muscles = ["Shoulders"];
    if (n.includes("lateral") || n.includes("raise")) muscles.push("Lateral Delts");
    else if (n.includes("rear") || n.includes("fly")) muscles.push("Rear Delts");
    else muscles.push("Front Delts", "Triceps");
  } else if (n.includes("curl") || n.includes("bicep") || n.includes("tricep") || n.includes("pushdown") || n.includes("arm") || n.includes("extension") && n.includes("tricep")) {
    category = "arms";
    if (n.includes("curl") || n.includes("bicep")) {
      muscles = ["Biceps", "Forearms"];
    } else if (n.includes("tricep") || n.includes("pushdown") || n.includes("extension")) {
      muscles = ["Triceps"];
    } else {
      muscles = ["Biceps", "Triceps", "Forearms"];
    }
  } else if (n.includes("plank") || n.includes("abs") || n.includes("situp") || n.includes("sit-up") || n.includes("crunch") || n.includes("twist") || n.includes("core") || n.includes("oblique") || n.includes("rollout") || n.includes("raise") && n.includes("leg")) {
    category = "core";
    muscles = ["Core"];
    if (n.includes("twist") || n.includes("oblique")) muscles.push("Obliques");
    else muscles.push("Rectus Abdominis");
  }
  
  return {
    category,
    muscles,
    id: "custom-" + category,
    matched: false
  };
}

function detectMusclesString(id, name) {
  const detected = detectCategoryAndMuscles(name);
  return detected.muscles.join(", ");
}

function handleExerciseNameInput(idx, value) {
  const cleanValue = value.trim();
  currentActiveWorkout.exercises[idx].name = cleanValue;
  
  const detected = detectCategoryAndMuscles(cleanValue);
  currentActiveWorkout.exercises[idx].id = detected.id;
  
  const labelEl = document.getElementById(`detected-text-${idx}`);
  if (labelEl) {
    labelEl.textContent = detected.muscles.join(", ");
  }
  
  const tipEl = document.getElementById(`exercise-tip-text-${idx}`);
  if (tipEl) {
    if (detected.matched) {
      const ex = EXERCISE_POOL[detected.id];
      tipEl.textContent = ex.cues[0];
      currentActiveWorkout.exercises[idx].notes = ex.cues[0];
    } else {
      tipEl.textContent = "Focus on controlled eccentric contraction.";
      currentActiveWorkout.exercises[idx].notes = "Focus on controlled eccentric contraction.";
    }
  }
  
  const guideBtn = document.getElementById(`guide-btn-${idx}`);
  if (guideBtn) {
    guideBtn.setAttribute("onclick", `showFormGuide('${detected.id}')`);
  }
}

// Compute active sets load dynamically based on active timeframe
function getFilteredSets(timeframe) {
  const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
  const muscleSets = { chest: 0, back: 0, shoulders: 0, arms: 0, core: 0, legs: 0 };
  
  let cutoff = 0;
  const now = new Date();
  
  if (timeframe === "week") {
    // Start of current week (Monday)
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const start = new Date(now.setDate(diff));
    start.setHours(0, 0, 0, 0);
    cutoff = start.getTime();
  } else if (timeframe === "month") {
    // Start of current month
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    start.setHours(0, 0, 0, 0);
    cutoff = start.getTime();
  } else if (timeframe === "year") {
    // Start of current year
    const start = new Date(now.getFullYear(), 0, 1);
    start.setHours(0, 0, 0, 0);
    cutoff = start.getTime();
  } else {
    // Lifetime / All-time
    cutoff = 0;
  }
  
  history.forEach(log => {
    let logTime = log.timestamp;
    if (!logTime) {
      logTime = new Date(log.date).getTime() || 0;
    }
    
    if (logTime >= cutoff) {
      log.exercises.forEach(ex => {
        const poolItem = EXERCISE_POOL[ex.id];
        let cat = "";
        if (poolItem) {
          cat = poolItem.category;
        } else {
          cat = detectCategoryAndMuscles(ex.name).category;
        }
        if (muscleSets[cat] !== undefined) {
          muscleSets[cat] += ex.sets;
        }
      });
    }
  });
  
  return muscleSets;
}

// Set up Heatmap timeframe selector button click events
function setupHeatmapTimeframeListeners() {
  const weekBtn = document.getElementById("heatmap-time-week");
  const monthBtn = document.getElementById("heatmap-time-month");
  const yearBtn = document.getElementById("heatmap-time-year");
  
  if (!weekBtn || !monthBtn || !yearBtn) return;
  
  const updateButtons = (activeBtn) => {
    [weekBtn, monthBtn, yearBtn].forEach(btn => {
      if (btn === activeBtn) {
        btn.className = "flex-1 py-1 text-[9px] font-black uppercase tracking-wider rounded-lg text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 cursor-pointer";
      } else {
        btn.className = "flex-1 py-1 text-[9px] font-black uppercase tracking-wider rounded-lg text-slate-400 hover:text-white cursor-pointer";
      }
    });
  };
  
  weekBtn.addEventListener("click", () => {
    activeHeatmapTimeframe = "week";
    updateButtons(weekBtn);
    updateHeatmapUI();
  });
  monthBtn.addEventListener("click", () => {
    activeHeatmapTimeframe = "month";
    updateButtons(monthBtn);
    updateHeatmapUI();
  });
  yearBtn.addEventListener("click", () => {
    activeHeatmapTimeframe = "year";
    updateButtons(yearBtn);
    updateHeatmapUI();
  });
}

// Set up Detailed History timeframe selector button click events
function setupHistoryTimeframeListeners() {
  const weekBtn = document.getElementById("history-time-week");
  const monthBtn = document.getElementById("history-time-month");
  const yearBtn = document.getElementById("history-time-year");
  const allBtn = document.getElementById("history-time-all");
  
  if (!weekBtn || !monthBtn || !yearBtn || !allBtn) return;
  
  const updateButtons = (activeBtn) => {
    [weekBtn, monthBtn, yearBtn, allBtn].forEach(btn => {
      if (btn === activeBtn) {
        btn.className = "px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg text-cyan-400 bg-cyan-950/40 border border-cyan-800/20 cursor-pointer";
      } else {
        btn.className = "px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg text-slate-400 hover:text-white cursor-pointer";
      }
    });
  };
  
  weekBtn.addEventListener("click", () => {
    activeHistoryTimeframe = "week";
    updateButtons(weekBtn);
    renderDetailedHistoryUI();
  });
  monthBtn.addEventListener("click", () => {
    activeHistoryTimeframe = "month";
    updateButtons(monthBtn);
    renderDetailedHistoryUI();
  });
  yearBtn.addEventListener("click", () => {
    activeHistoryTimeframe = "year";
    updateButtons(yearBtn);
    renderDetailedHistoryUI();
  });
  allBtn.addEventListener("click", () => {
    activeHistoryTimeframe = "all";
    updateButtons(allBtn);
    renderDetailedHistoryUI();
  });
}

// Sync current workout list inputs with active workout object state
function syncCurrentInputValues() {
  if (!currentActiveWorkout || !currentActiveWorkout.exercises) return;
  
  currentActiveWorkout.exercises.forEach((ex, idx) => {
    const nameInput = document.getElementById(`input-name-${idx}`);
    const setsInput = document.getElementById(`input-sets-${idx}`);
    const repsInput = document.getElementById(`input-reps-${idx}`);
    const weightInput = document.getElementById(`input-weight-${idx}`);
    
    if (nameInput) ex.name = nameInput.value;
    if (setsInput) ex.sets = parseInt(setsInput.value) || ex.sets;
    if (repsInput) ex.reps = parseInt(repsInput.value) || ex.reps;
    if (weightInput) ex.weight = parseInt(weightInput.value) || ex.weight;
  });
}

// Delete an exercise from the active workout card list
function deleteSingleExercise(idx) {
  syncCurrentInputValues();
  
  if (currentActiveWorkout.exercises.length <= 1) {
    alert("Your workout routine must have at least one exercise.");
    return;
  }
  
  currentActiveWorkout.exercises.splice(idx, 1);
  renderWorkoutCard(currentActiveWorkout);
}

// Add a custom exercise row to the active workout card list
function addCustomExercise() {
  syncCurrentInputValues();
  
  currentActiveWorkout.exercises.push({
    id: "custom_ex_" + Date.now(),
    name: "New Exercise",
    sets: 3,
    reps: 10,
    weight: 0,
    notes: "Focus on slow controlled form.",
    category: "fullbody"
  });
  
  renderWorkoutCard(currentActiveWorkout);
}

// Add a custom named exercise directly from AURA AI Chat bubbles
function addCustomExerciseWithName(name, category = "fullbody") {
  syncCurrentInputValues();
  
  let id = "custom_ex_" + Date.now();
  let sets = 3;
  let reps = 10;
  let weight = 0;
  let notes = "Focus on slow controlled form.";
  
  // Find matching exercise parameters in EXERCISE_POOL if available
  const matchingKey = Object.keys(EXERCISE_POOL).find(key => 
    EXERCISE_POOL[key].name.toLowerCase() === name.toLowerCase()
  );
  
  if (matchingKey) {
    const ex = EXERCISE_POOL[matchingKey];
    id = ex.id;
    sets = ex.defaultSets;
    reps = ex.defaultReps;
    weight = ex.defaultWeight;
    notes = ex.cues[0];
    category = ex.category;
  }
  
  currentActiveWorkout.exercises.push({
    id,
    name,
    sets,
    reps,
    weight,
    notes,
    category
  });
  
  renderWorkoutCard(currentActiveWorkout);
  appendChatMessage("aura", `✅ **Added ${name}** to your active sets list!`);
}
