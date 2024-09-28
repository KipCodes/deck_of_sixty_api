const express = require('express');
const app = express();

export default function handler(req, res) {
  if (req.method === 'GET') {

    const cards = [
      {
        name: "Deck of Sixty",
        version: "1.0",
        "deck": {
            "suits": [
              {
                "name": "Crowns",
                "faculty": "Domination",
                "class": "Nobility",
                "element": "Lightning",
                "cards": [
                  {
                    "name": "Ace of Crowns",
                    "represents": "External view of oneself",
                    "astral": "Victory, public recognition, confidence",
                    "umbral": "Egotism, disrepute"
                  },
                  {
                    "name": "Two of Crowns",
                    "represents": "Challenges faced",
                    "astral": "Challenge, competition, perseverance",
                    "umbral": "Overwhelmed, giving up"
                  },
                  {
                    "name": "Three of Crowns",
                    "represents": "Response to challenges",
                    "astral": "Courage, persistence, resilience",
                    "umbral": "Defensive, destructive, paranoid"
                  },
                  {
                    "name": "Four of Crowns",
                    "represents": "The horizon",
                    "astral": "Isolation, restriction",
                    "umbral": "Release, open to new perspectives"
                  },
                  {
                    "name": "Five of Crowns",
                    "represents": "Emotional state",
                    "astral": "Depression, anxiety",
                    "umbral": "Hopelessness, torment"
                  },
                  {
                    "name": "Six of Crowns",
                    "represents": "Outcomes of trials",
                    "astral": "Hard-work paying off; passion and confidence; big wins",
                    "umbral": "Lack of self-confidence; too many burdens; setbacks, bad luck"
                  },
                  {
                    "name": "Knave of Crowns",
                    "represents": "How to act",
                    "astral": "Lack of motivation; restlessness; disappointment",
                    "umbral": "Bide one's time; self-reflect"
                  },
                  {
                    "name": "Lord of Crowns",
                    "represents": "Personality and behaviors",
                    "astral": "Opinionated, passionate",
                    "umbral": "Lusty, avoiding responsibility"
                  },
                  {
                    "name": "Lady of Crowns",
                    "represents": "Personality and behaviors",
                    "astral": "Energetic, curious",
                    "umbral": "Broken promises, all talk and no action"
                  },
                  {
                    "name": "The Spire",
                    "represents": "Construction",
                    "astral": "Completion, integration, acoomplishments; sudden changes, upheaval, or disaster looms and the adventurer should take caution; the emergence of a stubborn figure who will humble, frighten, or make them insecure at first, but time will reveal they are a helping force in their journey",
                    "umbral": "Destruction is necessary in creation; difficult change or transformation; do not be afraid to take risks, enure hardships to grow; the emergence of a figure who will trigger drastic change that the adventurer will not be prepared for; impending doom on the horizon"
                  }
                ]
              },
              {
                "name": "Cups",
                "faculty": "Emotion",
                "class": "Clergy",
                "element": "Water",
                "cards": [
                  {
                    "name": "Ace of Cups",
                    "represents": "Connection to the world",
                    "astral": "Compassion, creativity; new beginnings, gowth",
                    "umbral": "Blocked emotions, detatchment; heartbreak"
                  },
                  {
                    "name": "Two of Cups",
                    "represents": "Unions and partnerships",
                    "astral": "New relationships; harmony, peace",
                    "umbral": "Deteriorating relations; troubling interactions; possible deceit"
                  },
                  {
                    "name": "Three of Cups",
                    "represents": "Balance of strength, justice, temperance",
                    "astral": "Abundance, revelry, celebration",
                    "umbral": "Overindulgence; poor communication; misunderstandings"
                  },
                  {
                    "name": "Four of Cups",
                    "represents":"Options, thoughtfulness",
                    "astral": "Reflection; being too reserved or passive",
                    "umbral": "Dissatisfaction, boredom, ennui"
                  },
                  {
                    "name": "Five of Cups",
                    "represents":"Loss, departure",
                    "astral": "Loss, regret, disappointment",
                    "umbral": "Emminent recovery, acceptance; good time to start something new"
                  },
                  {
                    "name": "Six of Cups",
                    "represents":"Youthful reverie",
                    "astral": "Relaxation, creativity; a good time to start something new creatively",
                    "umbral": "Immaturity, irresponsibility, avoidance"
                  },
                  {
                    "name": "Knave of Cups",
                    "represents":"Assessments",
                    "astral": "Wisdom, networking, learning; finding your path",
                    "umbral": "Manipulation, jealousy, drama; disappointment, stuck"
                  },
                  {
                    "name": "Lord of Cups",
                    "represents":"Dignity, structure, order",
                    "astral": "Generousity, kindness, commitment",
                    "umbral": "Destructive, volatility, controlling behaviors"
                  },
                  {
                    "name": "Lady of Cups",
                    "represents":"Love, kindness",
                    "astral": "Positive influence, calmness, intuitive; self-care",
                    "umbral": "Insecurity, obstinant, dependant"
                  },
                  {
                    "name": "The Ewer",
                    "represents":"Knowledge",
                    "astral": "Wisdom, understanding; peace, serenity; knowledge, reflection; spiritual enlightenment, inner illumination, connection to the subconscious; pay attention to thoughts, emotions, and dreams; promoting intuition",
                    "umbral": "Lack of focus; inability to meditate or reflect; encourage reflection on the inner self and reconnect with their humanity"
                  }
                ]
              },
              {
                "name": "Rings",
                "faculty": "Possession",
                "class": "Merchants",
                "element": "Earth",
                "cards": [
                  {
                    "name": "Ace of Rings",
                    "represents": "New beginnings",
                    "astral": "Manifistation, opportunity, prosperity",
                    "umbral": "Lack of planning, lack of foresight"
                  },
                  {
                    "name": "Two of Rings",
                    "represents": "Looming choices, distractions",
                    "astral": "Adaptability, efficient time management; keep the balance",
                    "umbral": "Disorganization, financial disarray; spreading resources too thin"
                  },
                  {
                    "name": "Three of Rings",
                    "represents": "Reward is a reflection of effort",
                    "astral": "Teamwork, collaboration",
                    "umbral": "Inability to work with others; too narrowly focused"
                  },
                  {
                    "name": "Four of Rings",
                    "represents":"Manifestation",
                    "astral": "Control, stability, security",
                    "umbral": "Greed, materialism; a time to give more and receive less"
                  },
                  {
                    "name": "Five of Rings",
                    "represents":"Changing situations",
                    "astral": "Isolation, insecurity; lack of material wealth and wellness",
                    "umbral": "Recovery from financial loss; spiritual recovery"
                  },
                  {
                    "name": "Six of Rings",
                    "represents":"Good beginnings",
                    "astral": "Viewing the greater picture, careful planning brings good outcomes",
                    "umbral": "Unwillingness to learn/adapt; lack of ambition/initiative"
                  },
                  {
                    "name": "Knave of Rings",
                    "represents":"Mastery of rewards and possessions",
                    "astral": "Hard work; patience; persistence",
                    "umbral": "Delays; more planning is needed; obstructions to goals"
                  },
                  {
                    "name": "Lord of Rings",
                    "represents":"Ultimate provider",
                    "astral": "Discipline, abundance, control; entitled, ambitious",
                    "umbral": "Authoritative, stubborn, domineering; greedy, untrustworthy"
                  },
                  {
                    "name": "Lady of Rings",
                    "represents":"Great tidings ahead",
                    "astral": "Practical, maternal; hands-on approach",
                    "umbral": "Imbalance in commitments; greedy, self-serving, unsuccessful"
                  },
                  {
                    "name": "The Bole",
                    "represents":"Harvest",
                    "astral": "Abundance, blessings, protection; good fortune; the emergence of a figure that will bring good luck and good fortune",
                    "umbral": "Losing focus of the main objective; reassess the situation and look at the bigger picture; strategize to accomplish goals; the emergence of a figure who is stressed, anxious, or stubborn and in need of help"
                  }
                ]
              },
              {
                "name": "Swords",
                "faculty": "Cognition",
                "class": "Military",
                "element": "Wind",
                "cards": [
                  {
                    "name": "Ace of Swords",
                    "represents": "New ideas or new plans",
                    "astral": "Mental clarity, revelation",
                    "umbral": "Confusion, chaos"
                  },
                  {
                    "name": "Two of Swords",
                    "represents": "Choices",
                    "astral": "Indecision, stalemate, emotionally blocked; biased opinions; broaden your perspective",
                    "umbral": "Information and emotional overload; act with caution and proper planning; stagnance"
                  },
                  {
                    "name": "Three of Swords",
                    "represents": "Where intellect meets passion",
                    "astral": "Heartbreak, grief, rejection; pain for the purpose of growth",
                    "umbral": "Optimism, relief from pain, forgiveness; healing; reconcilliation"
                  },
                  {
                    "name": "Four of Swords",
                    "represents":"Rest",
                    "astral": "Contemplation, passive, relaxation",
                    "umbral": "Lazy, restlessness; burnt out"
                  },
                  {
                    "name": "Five of Swords",
                    "represents":"Surrender, defeat, loss",
                    "astral": "Loss, defeat, betrayal; discord; doubts, fears, or bad habits",
                    "umbral": "Open to change; seek compromise"
                  },
                  {
                    "name": "Six of Swords",
                    "represents":"Stay on your toes",
                    "astral": "High energy; cautious curiousity",
                    "umbral": "Dread of incoming troubles; preparedness"
                  },
                  {
                    "name": "Knave of Swords",
                    "represents":"Hunter or prey",
                    "astral": "Hunter, time to strike; forward momentum; green light",
                    "umbral": "Overconfidence, insensitive, egotistical"
                  },
                  {
                    "name": "Lord of Swords",
                    "represents":"Analytical, clear communication",
                    "astral": "Generosity, happiness; impersonal; calculating",
                    "umbral": "Volatility, immaturity; loss of self-control; dysfunction; sadistic"
                  },
                  {
                    "name": "Lady of Swords",
                    "represents":"Sharp-mind, self-awareness",
                    "astral": "Perceptive, independent; inquisitive",
                    "umbral": "Cold-hearted, over-emotional; haughty"
                  },
                  {
                    "name": "The Arrow",
                    "represents":"The Journey",
                    "astral": "Grand new journeys await; overcoming obstacles or challenges; determination and strength in the face of adversity will lead to grand reward and satisfaction; the emergence of a figure who will assist in embarking on a grand journey, either travel or spiritual",
                    "umbral": "Struggling with control; opposing forces driving their course, left to the mercy of fate; become more disciplined and focused; possible jealous figure manipulating circumstances against the adventurer's favor; the emergence of a figure who is lost and in desperate need for stability and discipline"
                  }
                ]
              },
              {
                "name": "Staves",
                "faculty": "Volition",
                "class": "Smallfolk",
                "element": "Fire",
                "cards": [
                  {
                    "name": "Ace of Staves",
                    "represents": "Creativity, new beginnings, motivation, also: birth",
                    "astral": "New ventures. Beware of impatience or becoming overwhelmed",
                    "umbral": "Delays, lack of motivation"
                  },
                  {
                    "name": "Two of Staves",
                    "represents": "New experiences, new opportunities, possible distractions",
                    "astral": "Decisive choices; a good time to be adventurous",
                    "umbral": "Delays due to fear of the unknown"
                  },
                  {
                    "name": "Three of Staves",
                    "represents": "Expansion; something new",
                    "astral": "Concentration and focus bring rewards; growth and expansion",
                    "umbral": "Distance and divide; long-term goals going unfulfilled or challenged"
                  },
                  {
                    "name": "Four of Staves",
                    "represents":"Happiness, contentment",
                    "astral": "Celebration, harmony, joy",
                    "umbral": "Instability, disconnection, neglect"
                  },
                  {
                    "name": "Five of Staves",
                    "represents":"Struggle, conflict",
                    "astral": "Disagreement, conflict, commotion, lack of cooperation",
                    "umbral": "Diversity, cooperation, harmony"
                  },
                  {
                    "name": "Six of Staves",
                    "represents":"Youthful energy; sometimes poor judgement",
                    "astral": "Freshness, energy, forward momentum; time for fun/adventure",
                    "umbral": "Indecisiveness, impatience, aimlessness"
                  },
                  {
                    "name": "Knave of Staves",
                    "represents":"Righteousness; sometimes nagging",
                    "astral": "Sponteneity; take risks with caution",
                    "umbral": "Out of control, foolhardy, impulsiveness"
                  },
                  {
                    "name": "Lord of Staves",
                    "represents":"Strong, powerful, experienced",
                    "astral": "Leadership, role model, entrepreneur",
                    "umbral": "Impulsive, hasty; lack of dependability and trust"
                  },
                  {
                    "name": "Lady of Staves",
                    "represents":"Confidence",
                    "astral": "Fearlessness, exuberance, warmth; guided by Azyma",
                    "umbral": "Aggressive, demanding, bratty; unwilling to listen"
                  },
                  {
                    "name": "The Balance",
                    "represents":"Strength",
                    "astral": "Take the good with the bad; the emergence of a figure who helps increase the adventurer's control, organization, or aids in balancing his/her life",
                    "umbral": "Warning of caution; consider consequences of ones actions; the emergence of a strong spiritual figure or possibly a merchant who will drastically change the adventurer's sprituality or wealth; be open to change"
                  }
                ]
              },
              {
                "name": "Irons",
                "faculty": "Contrition",
                "class": "Prisoners",
                "element": "Ice",
                "cards": [
                  {
                    "name": "Ace of Irons",
                    "represents": "Carnality",
                    "astral": "Love, sexuality",
                    "umbral": "Pent up lust, cold hatred"
                  },
                  {
                    "name": "Two of Irons",
                    "represents": "Relationships",
                    "astral": "Partnership, attraction, relationships",
                    "umbral": "Break-up, lack of harmony"
                  },
                  {
                    "name": "Three of Irons",
                    "represents": "The mind's eye",
                    "astral": "Fantasy, illusion, imagination",
                    "umbral": "Temptation, appearance versus reality"
                  },
                  {
                    "name": "Four of Irons",
                    "represents":"State of mind",
                    "astral": "Escapism, abandonment, withdrawal",
                    "umbral": "Hopelessness, drifting spirits"
                  },
                  {
                    "name": "Five of Irons",
                    "represents":"Faith",
                    "astral": "Strength, faith, courage",
                    "umbral": "Weakness, agnostic, despair"
                  },
                  {
                    "name": "Six of Irons",
                    "represents":"Feeling low, struggle to a better state",
                    "astral": "Transgressions put behind you; pain is still evident; go with the flow to a more positive outcome",
                    "umbral": "Trapped; reflect upon what brought about current circumstances"
                  },
                  {
                    "name": "Knave of Irons",
                    "represents":"Ominous clouds on the horizon",
                    "astral": "Depression, fear, anxiety; overwhelmed; mental exhaustion; light at the end of a long tunnel",
                    "umbral": "The only way out is through; bear the emotions; quell inner doubts"
                  },
                  {
                    "name": "Lord of Irons",
                    "represents":"Charisma",
                    "astral": "Romantic, suave, intrepid",
                    "umbral": "Unfaithful, unsophisticated, rude"
                  },
                  {
                    "name": "Lady of Irons",
                    "represents":"Expectations",
                    "astral": "Charming, compassionate, merciful",
                    "umbral": "Unrealistic, jealous"
                  },
                  {
                    "name": "The Spear",
                    "represents":"Righteous Justice",
                    "astral": "Strength, confidence, trust, love; working in harmony; confide or trust in others; strong sexual or physical attraction that goes beyond instant gratification and lust; a strong sense of faith; making choices that shake morality or challenge values",
                    "umbral": "Tremendous rifts between the adventurer and someone important in their life; weakness and obstinacy; seek out inner strength and tap into one's compassion and mercy; come to terms with negative emotions to conquer them and move on to happier times; the end of a relationship, or ons-sided feelings leading to disappointment and insecurity"
                  }
                ]
              },
            ]
        }
    }];
    res.status(200).json({cards});
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`)
  };
}