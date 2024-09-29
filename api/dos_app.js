const express = require('express');
const cors = require('cors');
const ServerlessHttp = require('serverless-http');
const app = express();
app.use(cors());

//Deck of Sixty API
//Version 1.1

const cards = [
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Ace of Crowns",
    "represents": "External view of oneself",
    "astral": "Victory, public recognition, confidence",
    "umbral": "Egotism, disrepute"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Two of Crowns",
    "represents": "Challenges faced",
    "astral": "Challenge, competition, perseverance",
    "umbral": "Overwhelmed, giving up"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Three of Crowns",
    "represents": "Response to challenges",
    "astral": "Courage, persistence, resilience",
    "umbral": "Defensive, destructive, paranoid"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Four of Crowns",
    "represents": "The horizon",
    "astral": "Isolation, restriction",
    "umbral": "Release, open to new perspectives"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Five of Crowns",
    "represents": "Emotional state",
    "astral": "Depression, anxiety",
    "umbral": "Hopelessness, torment"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Six of Crowns",
    "represents": "Outcomes of trials",
    "astral": "Hard-work paying off; passion and confidence; big wins",
    "umbral": "Lack of self-confidence; too many burdens; setbacks, bad luck"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Knave of Crowns",
    "represents": "How to act",
    "astral": "Lack of motivation; restlessness; disappointment",
    "umbral": "Bide one's time; self-reflect"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Lord of Crowns",
    "represents": "Personality and behaviors",
    "astral": "Opinionated, passionate",
    "umbral": "Lusty, avoiding responsibility"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "Lady of Crowns",
    "represents": "Personality and behaviors",
    "astral": "Energetic, curious",
    "umbral": "Broken promises, all talk and no action"
  },
  {
    "suit": "Crowns",
    "faculty": "Domination",
    "class": "Nobility",
    "element": "Lightning",
    "name": "The Spire",
    "represents": "Construction",
    "astral": "Completion, integration, acoomplishments; sudden changes, upheaval, or disaster looms and the adventurer should take caution; the emergence of a stubborn figure who will humble, frighten, or make them insecure at first, but time will reveal they are a helping force in their journey",
    "umbral": "Destruction is necessary in creation; difficult change or transformation; do not be afraid to take risks, enure hardships to grow; the emergence of a figure who will trigger drastic change that the adventurer will not be prepared for; impending doom on the horizon"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Ace of Cups",
    "represents": "Connection to the world",
    "astral": "Compassion, creativity; new beginnings, gowth",
    "umbral": "Blocked emotions, detatchment; heartbreak"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Two of Cups",
    "represents": "Unions and partnerships",
    "astral": "New relationships; harmony, peace",
    "umbral": "Deteriorating relations; troubling interactions; possible deceit"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Three of Cups",
    "represents": "Balance of strength, justice, temperance",
    "astral": "Abundance, revelry, celebration",
    "umbral": "Overindulgence; poor communication; misunderstandings"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Four of Cups",
    "represents":"Options, thoughtfulness",
    "astral": "Reflection; being too reserved or passive",
    "umbral": "Dissatisfaction, boredom, ennui"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Five of Cups",
    "represents":"Loss, departure",
    "astral": "Loss, regret, disappointment",
    "umbral": "Emminent recovery, acceptance; good time to start something new"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Six of Cups",
    "represents":"Youthful reverie",
    "astral": "Relaxation, creativity; a good time to start something new creatively",
    "umbral": "Immaturity, irresponsibility, avoidance"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Knave of Cups",
    "represents":"Assessments",
    "astral": "Wisdom, networking, learning; finding your path",
    "umbral": "Manipulation, jealousy, drama; disappointment, stuck"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Lord of Cups",
    "represents":"Dignity, structure, order",
    "astral": "Generousity, kindness, commitment",
    "umbral": "Destructive, volatility, controlling behaviors"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "Lady of Cups",
    "represents":"Love, kindness",
    "astral": "Positive influence, calmness, intuitive; self-care",
    "umbral": "Insecurity, obstinant, dependant"
  },
  {
    "suit": "Cups",
    "faculty": "Emotion",
    "class": "Clergy",
    "element": "Water",
    "name": "The Ewer",
    "represents":"Knowledge",
    "astral": "Wisdom, understanding; peace, serenity; knowledge, reflection; spiritual enlightenment, inner illumination, connection to the subconscious; pay attention to thots, emotions, and dreams; promoting intuition",
    "umbral": "Lack of focus; inability to meditate or reflect; encourage reflection on the inner self and reconnect with their humanity"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Ace of Rings",
    "represents": "New beginnings",
    "astral": "Manifistation, opportunity, prosperity",
    "umbral": "Lack of planning, lack of foresight"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Two of Rings",
    "represents": "Looming choices, distractions",
    "astral": "Adaptability, efficient time management; keep the balance",
    "umbral": "Disorganization, financial disarray; spreading resources too thin"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Three of Rings",
    "represents": "Reward is a reflection of effort",
    "astral": "Teamwork, collaboration",
    "umbral": "Inability to work with others; too narrowly focused"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Four of Rings",
    "represents":"Manifestation",
    "astral": "Control, stability, security",
    "umbral": "Greed, materialism; a time to give more and receive less"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Five of Rings",
    "represents":"Changing situations",
    "astral": "Isolation, insecurity; lack of material wealth and wellness",
    "umbral": "Recovery from financial loss; spiritual recovery"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Six of Rings",
    "represents":"Good beginnings",
    "astral": "Viewing the greater picture, careful planning brings good outcomes",
    "umbral": "Unwillingness to learn/adapt; lack of ambition/initiative"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Knave of Rings",
    "represents":"Mastery of rewards and possessions",
    "astral": "Hard work; patience; persistence",
    "umbral": "Delays; more planning is needed; obstructions to goals"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Lord of Rings",
    "represents":"Ultimate provider",
    "astral": "Discipline, abundance, control; entitled, ambitious",
    "umbral": "Authoritative, stubborn, domineering; greedy, untrustworthy"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "Lady of Rings",
    "represents":"Great tidings ahead",
    "astral": "Practical, maternal; hands-on approach",
    "umbral": "Imbalance in commitments; greedy, self-serving, unsuccessful"
  },
  {
    "suit": "Rings",
    "faculty": "Possession",
    "class": "Merchants",
    "element": "Earth",
    "name": "The Bole",
    "represents":"Harvest",
    "astral": "Abundance, blessings, protection; good fortune; the emergence of a figure that will bring good luck and good fortune",
    "umbral": "Losing focus of the main objective; reassess the situation and look at the bigger picture; strategize to accomplish goals; the emergence of a figure who is stressed, anxious, or stubborn and in need of help"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Ace of Swords",
    "represents": "New ideas or new plans",
    "astral": "Mental clarity, revelation",
    "umbral": "Confusion, chaos"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Two of Swords",
    "represents": "Choices",
    "astral": "Indecision, stalemate, emotionally blocked; biased opinions; broaden your perspective",
    "umbral": "Information and emotional overload; act with caution and proper planning; stagnance"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Three of Swords",
    "represents": "Where intellect meets passion",
    "astral": "Heartbreak, grief, rejection; pain for the purpose of growth",
    "umbral": "Optimism, relief from pain, forgiveness; healing; reconcilliation"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Four of Swords",
    "represents":"Rest",
    "astral": "Contemplation, passive, relaxation",
    "umbral": "Lazy, restlessness; burnt out"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Five of Swords",
    "represents":"Surrender, defeat, loss",
    "astral": "Loss, defeat, betrayal; discord; doubts, fears, or bad habits",
    "umbral": "Open to change; seek compromise"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Six of Swords",
    "represents":"Stay on your toes",
    "astral": "High energy; cautious curiousity",
    "umbral": "Dread of incoming troubles; preparedness"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Knave of Swords",
    "represents":"Hunter or prey",
    "astral": "Hunter, time to strike; forward momentum; green light",
    "umbral": "Overconfidence, insensitive, egotistical"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Lord of Swords",
    "represents":"Analytical, clear communication",
    "astral": "Generosity, happiness; impersonal; calculating",
    "umbral": "Volatility, immaturity; loss of self-control; dysfunction; sadistic"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "Lady of Swords",
    "represents":"Sharp-mind, self-awareness",
    "astral": "Perceptive, independent; inquisitive",
    "umbral": "Cold-hearted, over-emotional; haughty"
  },
  {
    "suit": "Swords",
    "faculty": "Cognition",
    "class": "Military",
    "element": "Wind",
    "name": "The Arrow",
    "represents":"The Journey",
    "astral": "Grand new journeys await; overcoming obstacles or challenges; determination and strength in the face of adversity will lead to grand reward and satisfaction; the emergence of a figure who will assist in embarking on a grand journey, either travel or spiritual",
    "umbral": "Struggling with control; opposing forces driving their course, left to the mercy of fate; become more disciplined and focused; possible jealous figure manipulating circumstances against the adventurer's favor; the emergence of a figure who is lost and in desperate need for stability and discipline"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Ace of Staves",
    "represents": "Creativity, new beginnings, motivation, also: birth",
    "astral": "New ventures. Beware of impatience or becoming overwhelmed",
    "umbral": "Delays, lack of motivation"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Two of Staves",
    "represents": "New experiences, new opportunities, possible distractions",
    "astral": "Decisive choices; a good time to be adventurous",
    "umbral": "Delays due to fear of the unknown"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Three of Staves",
    "represents": "Expansion; something new",
    "astral": "Concentration and focus bring rewards; growth and expansion",
    "umbral": "Distance and divide; long-term goals going unfulfilled or challenged"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Four of Staves",
    "represents":"Happiness, contentment",
    "astral": "Celebration, harmony, joy",
    "umbral": "Instability, disconnection, neglect"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Five of Staves",
    "represents":"Struggle, conflict",
    "astral": "Disagreement, conflict, commotion, lack of cooperation",
    "umbral": "Diversity, cooperation, harmony"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Six of Staves",
    "represents":"Youthful energy; sometimes poor judgement",
    "astral": "Freshness, energy, forward momentum; time for fun/adventure",
    "umbral": "Indecisiveness, impatience, aimlessness"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Knave of Staves",
    "represents":"Righteousness; sometimes nagging",
    "astral": "Sponteneity; take risks with caution",
    "umbral": "Out of control, foolhardy, impulsiveness"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Lord of Staves",
    "represents":"Strong, powerful, experienced",
    "astral": "Leadership, role model, entrepreneur",
    "umbral": "Impulsive, hasty; lack of dependability and trust"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "Lady of Staves",
    "represents":"Confidence",
    "astral": "Fearlessness, exuberance, warmth; guided by Azyma",
    "umbral": "Aggressive, demanding, bratty; unwilling to listen"
  },
  {
    "suit": "Staves",
    "faculty": "Volition",
    "class": "Smallfolk",
    "element": "Fire",
    "name": "The Balance",
    "represents":"Strength",
    "astral": "Take the good with the bad; the emergence of a figure who helps increase the adventurer's control, organization, or aids in balancing his/her life",
    "umbral": "Warning of caution; consider consequences of ones actions; the emergence of a strong spiritual figure or possibly a merchant who will drastically change the adventurer's sprituality or wealth; be open to change"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Ace of Irons",
    "represents": "Carnality",
    "astral": "Love, sexuality",
    "umbral": "Pent up lust, cold hatred"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Two of Irons",
    "represents": "Relationships",
    "astral": "Partnership, attraction, relationships",
    "umbral": "Break-up, lack of harmony"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Three of Irons",
    "represents": "The mind's eye",
    "astral": "Fantasy, illusion, imagination",
    "umbral": "Temptation, appearance versus reality"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Four of Irons",
    "represents":"State of mind",
    "astral": "Escapism, abandonment, withdrawal",
    "umbral": "Hopelessness, drifting spirits"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Five of Irons",
    "represents":"Faith",
    "astral": "Strength, faith, courage",
    "umbral": "Weakness, agnostic, despair"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Six of Irons",
    "represents":"Feeling low, struggle to a better state",
    "astral": "Transgressions put behind you; pain is still evident; go with the flow to a more positive outcome",
    "umbral": "Trapped; reflect upon what brought about current circumstances"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Knave of Irons",
    "represents":"Ominous clouds on the horizon",
    "astral": "Depression, fear, anxiety; overwhelmed; mental exhaustion; light at the end of a long tunnel",
    "umbral": "The only way out is through; bear the emotions; quell inner doubts"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Lord of Irons",
    "represents":"Charisma",
    "astral": "Romantic, suave, intrepid",
    "umbral": "Unfaithful, unsophisticated, rude"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "Lady of Irons",
    "represents":"Expectations",
    "astral": "Charming, compassionate, merciful",
    "umbral": "Unrealistic, jealous"
  },
  {
    "suit": "Irons",
    "faculty": "Contrition",
    "class": "Prisoners",
    "element": "Ice",
    "name": "The Spear",
    "represents":"Righteous Justice",
    "astral": "Strength, confidence, trust, love; working in harmony; confide or trust in others; strong sexual or physical attraction that goes beyond instant gratificatiand lust; a strong sense of faith; making choices that shake morality or challenge values",
    "umbral": "Tremendous rifts between the adventurer and someone important in their life; weakness and obstinacy; seek out inner strength and tap into one's compassion and mercy; come to terms with negative emotions to conquer them and move on to happier times; the end of a relationship, or ons-sided feelings leading to disappointment and insecurity"
  }
]

app.get('/api/cards', (req, res) =>  {
  res.json({ cards });
});

module.exports = app;
module.exports.handler = ServerlessHttp(app);

//For testing locally
app.listen(3000, () => {
  console.log(`API running on http://localhost:3000`);
})