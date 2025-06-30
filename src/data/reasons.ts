export interface LoveReason {
  id: number;
  text: string;
  emoji?: string;
  image?: string;
  description?: string;
}

export const loveReasons: LoveReason[] = [
  {
    id: 1,
    text: "You lit up my life when you walked into it",
    emoji: "✨",
    description: "Your presence brought me the feelings I never knew I was missing"
  },
  {
    id: 2,
    text: "This beauty could end wars",
    emoji: "😊",
    image: "/assets/hajra/Hajra.jpeg",
    description: "Your pretty face has the power to brighten up my days"
  },
  {
    id: 3,
    text: "You presence makes me feel alive",
    emoji: "🕊️",
    description: "You filled my lifeless life with your pretty colors"
  },
  {
    id: 4,
    text: "Your smile is the prettiest I've ever seen",
    emoji: "✨",
    image: "/assets/hajra/smile1.jpeg",
    description: "Even the simplest moments become magical with your smile"
  },
  {
    id: 5,
    text: "You understand me like no one else",
    emoji: "💝",
    description: "You see through my walls and love me completely"
  },
  {
    id: 6,
    text: "I found my best friend in you",
    emoji: "💕",
    image: "/assets/hajra/together.jpeg",
    description: "I can talk with you about anything and everything"
  },
  {
    id: 7,
    text: "You inspire me to be better every day",
    emoji: "🌟",
    description: "Your love motivates me to be a better person"
  },
  {
    id: 8,
    text: "With you by my side, I can face anything",
    emoji: "💪",
    image: "/assets/hajra/strength.jpeg",
    description: "Your love gives me the strength to face anything and everything"
  }
]; 