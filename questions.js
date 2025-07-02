// Jungian Cognitive Function Assessment Questions
const cognitiveFunctions = {
    'Te': {
        name: 'Extraverted Thinking (Te)',
        description: 'Questions 1-10',
        questions: [
            "I like to organize things so they work better.",
            "I make decisions based on facts everyone can see.",
            "I prefer clear rules and systems to guide what I do.",
            "I enjoy fixing problems in practical ways.",
            "I want results that can be measured.",
            "I like to plan ahead and set goals.",
            "I feel good when things run smoothly and efficiently.",
            "I often suggest improvements to make things work better.",
            "I trust information that is proven and objective.",
            "I like to be in control of projects or tasks."
        ]
    },
    'Ti': {
        name: 'Introverted Thinking (Ti)',
        description: 'Questions 11-20',
        questions: [
            "I often think deeply about how things work inside.",
            "I care about whether ideas make sense to me.",
            "I like to figure out my own way of understanding things.",
            "I question things quietly in my mind.",
            "I want my ideas to be clear and logical, even if others don't get them.",
            "I enjoy solving puzzles or problems on my own.",
            "I often notice inconsistencies in what people say.",
            "I have high standards for what I believe is true, even if I can't explain them well.",
            "I like to analyze things until I really understand them.",
            "I prefer to work things out in my head before talking."
        ]
    },
    'Fe': {
        name: 'Extraverted Feeling (Fe)',
        description: 'Questions 21-30',
        questions: [
            "I care about how everyone around me feels.",
            "I want people to get along and be happy together.",
            "I often adjust what I say to avoid hurting others.",
            "I notice when someone is uncomfortable in a group.",
            "I like to help people feel included.",
            "I try to meet others' needs before my own.",
            "I feel uneasy when there is conflict between people.",
            "I often encourage others and boost their confidence.",
            "I want to create harmony wherever I go.",
            "I am sensitive to changes in the mood of a group."
        ]
    },
    'Fi': {
        name: 'Introverted Feeling (Fi)',
        description: 'Questions 31-40',
        questions: [
            "I make choices based on what feels right to me inside.",
            "I have strong personal values that are hard to explain.",
            "I need time alone to understand my feelings.",
            "I prefer to act in ways that match my true self.",
            "I care deeply about a few close people.",
            "I keep my feelings private unless I trust someone.",
            "I feel uncomfortable pretending to be someone I'm not.",
            "I am loyal to my beliefs even if others disagree.",
            "I notice when something goes against my inner values.",
            "I want my actions to be true to who I am."
        ]
    },
    'Se': {
        name: 'Extraverted Sensation (Se)',
        description: 'Questions 41-50',
        questions: [
            "I notice what's happening around me right away.",
            "I like to experience new sights, sounds, and tastes.",
            "I am quick to react to changes in my environment.",
            "I enjoy activities that are hands-on and physical.",
            "I trust what I see and hear directly.",
            "I like to live in the moment.",
            "I am drawn to excitement and action.",
            "I often notice details others miss.",
            "I like to try new things just for the experience.",
            "I feel best when I'm fully engaged with the world."
        ]
    },
    'Si': {
        name: 'Introverted Sensation (Si)',
        description: 'Questions 51-60',
        questions: [
            "I compare new experiences to memories from my past.",
            "I remember details about things that matter to me.",
            "My past experiences affect how I see things now.",
            "I like routines that make me feel comfortable.",
            "I notice when something feels different from what I'm used to.",
            "I am sensitive to changes in my body or surroundings.",
            "I prefer familiar places and activities.",
            "I have strong likes and dislikes for certain foods, smells, or sounds.",
            "I often think about how things used to be.",
            "Some experiences feel timeless and stay with me for years."
        ]
    },
    'Ne': {
        name: 'Extraverted Intuition (Ne)',
        description: 'Questions 61-70',
        questions: [
            "I see lots of possibilities in every situation.",
            "I get excited by new ideas and opportunities.",
            "I often connect things that seem unrelated.",
            "I enjoy brainstorming and coming up with creative solutions.",
            "I like to imagine how things could be different.",
            "I am open to change and new experiences.",
            "I enjoy exploring new topics and interests.",
            "I often have many ideas at once.",
            "I like to inspire others with new ways of thinking.",
            "I feel energized by thinking about the future."
        ]
    },
    'Ni': {
        name: 'Introverted Intuition (Ni)',
        description: 'Questions 71-80',
        questions: [
            "I often have sudden insights or \"aha\" moments.",
            "I think about the deeper meaning behind things.",
            "I trust my gut feelings about what will happen.",
            "I focus on one main idea or vision at a time.",
            "I like to find the hidden patterns in life.",
            "I am drawn to symbols, dreams, or stories with deeper meaning.",
            "Sometimes, I feel driven by strong inner images or visions.",
            "I find it hard to explain my insights to others.",
            "I often sense what's coming before it happens.",
            "My imagination feels more real than the outside world at times."
        ]
    }
};

// Get all questions in a flat array with metadata
function getAllQuestions() {
    const questions = [];
    let questionNumber = 1;
    
    Object.keys(cognitiveFunctions).forEach(functionKey => {
        const func = cognitiveFunctions[functionKey];
        func.questions.forEach((question, index) => {
            questions.push({
                number: questionNumber,
                functionKey: functionKey,
                functionName: func.name,
                functionDescription: func.description,
                text: question,
                localNumber: index + 1
            });
            questionNumber++;
        });
    });
    
    return questions;
}

// Function descriptions for results
const functionDescriptions = {
    'Te': {
        fullName: 'Extraverted Thinking',
        description: 'Organizes the external world according to logical principles. Focuses on efficiency, systematic approaches, and objective criteria for decision-making.',
        strengths: ['Systematic organization', 'Objective analysis', 'Practical efficiency', 'Clear communication'],
        challenges: ['May overlook personal values', 'Can appear impersonal', 'May rush to closure']
    },
    'Ti': {
        fullName: 'Introverted Thinking',
        description: 'Develops internal logical frameworks and seeks internal consistency. Values precision and independent thinking.',
        strengths: ['Deep analysis', 'Independent thinking', 'Precise understanding', 'Logical consistency'],
        challenges: ['Difficulty explaining thoughts', 'May procrastinate on decisions', 'Can be overly critical']
    },
    'Fe': {
        fullName: 'Extraverted Feeling',
        description: 'Attunes to group harmony and collective emotional needs. Seeks to create positive interpersonal connections.',
        strengths: ['Social harmony', 'Empathetic understanding', 'Group facilitation', 'Emotional support'],
        challenges: ['May neglect own needs', 'Overly sensitive to criticism', 'Can be manipulated']
    },
    'Fi': {
        fullName: 'Introverted Feeling',
        description: 'Makes decisions based on personal values and maintains individual authenticity. Deeply committed to personal beliefs.',
        strengths: ['Authentic self-expression', 'Strong values', 'Deep empathy', 'Individual integrity'],
        challenges: ['Difficulty explaining values', 'May appear inflexible', 'Can be overly idealistic']
    },
    'Se': {
        fullName: 'Extraverted Sensation',
        description: 'Engages fully with immediate sensory experience. Adapts quickly to present circumstances and opportunities.',
        strengths: ['Present-moment awareness', 'Adaptability', 'Practical action', 'Aesthetic appreciation'],
        challenges: ['May lack long-term planning', 'Can be impulsive', 'Difficulty with abstract concepts']
    },
    'Si': {
        fullName: 'Introverted Sensation',
        description: 'Compares present experiences with past memories. Values tradition and maintains personal standards.',
        strengths: ['Attention to detail', 'Reliable memory', 'Traditional wisdom', 'Quality focus'],
        challenges: ['Resistance to change', 'May dwell on past', 'Can be overly cautious']
    },
    'Ne': {
        fullName: 'Extraverted Intuition',
        description: 'Sees possibilities and connections in the external world. Generates creative alternatives and inspires innovation.',
        strengths: ['Creative thinking', 'Brainstorming', 'Seeing possibilities', 'Inspiring others'],
        challenges: ['Difficulty with follow-through', 'May lack focus', 'Can neglect details']
    },
    'Ni': {
        fullName: 'Introverted Intuition',
        description: 'Synthesizes information into unified insights and archetypal understandings. Focuses on future implications.',
        strengths: ['Deep insights', 'Future vision', 'Symbolic thinking', 'Pattern recognition'],
        challenges: ['Difficulty explaining insights', 'May seem impractical', 'Can be overly abstract']
    }
};

// Psychological type combinations and their descriptions
const psychologicalTypes = {
    'Te-Ni': { name: 'ENTJ', description: 'The Executive - Natural leader who organizes systems and people toward long-term goals.' },
    'Te-Si': { name: 'ESTJ', description: 'The Supervisor - Practical organizer who values tradition and systematic approaches.' },
    'Ti-Ne': { name: 'ENTP', description: 'The Inventor - Creative thinker who explores possibilities through logical analysis.' },
    'Ti-Se': { name: 'ESTP', description: 'The Entrepreneur - Adaptable problem-solver who thrives in dynamic environments.' },
    'Ti-Ni': { name: 'INTP', description: 'The Thinker - Independent theorist who develops complex internal models.' },
    'Ti-Si': { name: 'ISTP', description: 'The Craftsperson - Practical analyst who masters tools and techniques.' },
    'Fe-Ni': { name: 'ENFJ', description: 'The Teacher - Inspiring guide who helps others achieve their potential.' },
    'Fe-Si': { name: 'ESFJ', description: 'The Provider - Caring supporter who maintains group harmony and traditions.' },
    'Fe-Ne': { name: 'ENFP', description: 'The Champion - Enthusiastic inspirer who sees potential in people and ideas.' },
    'Fe-Se': { name: 'ESFP', description: 'The Performer - Warm entertainer who brings joy and spontaneity to others.' },
    'Fi-Ne': { name: 'ENFP', description: 'The Champion - Authentic idealist who pursues meaningful possibilities.' },
    'Fi-Se': { name: 'ESFP', description: 'The Performer - Genuine free spirit who lives according to personal values.' },
    'Fi-Ni': { name: 'INFP', description: 'The Healer - Deeply principled idealist who seeks authenticity and meaning.' },
    'Fi-Si': { name: 'ISFP', description: 'The Composer - Gentle artist who expresses values through personal creativity.' },
    'Ni-Te': { name: 'INTJ', description: 'The Architect - Strategic visionary who implements long-term plans.' },
    'Ni-Fe': { name: 'INFJ', description: 'The Advocate - Insightful idealist who works toward human potential.' },
    'Ne-Ti': { name: 'ENTP', description: 'The Inventor - Innovative explorer who questions and theorizes.' },
    'Ne-Fi': { name: 'ENFP', description: 'The Champion - Passionate explorer of human potential and possibilities.' },
    'Si-Te': { name: 'ISTJ', description: 'The Inspector - Methodical implementer who values order and responsibility.' },
    'Si-Fe': { name: 'ISFJ', description: 'The Protector - Devoted caregiver who preserves harmony and tradition.' },
    'Se-Ti': { name: 'ESTP', description: 'The Entrepreneur - Energetic pragmatist who adapts to immediate challenges.' },
    'Se-Fi': { name: 'ESFP', description: 'The Performer - Spontaneous people-person who celebrates life and values.' }
};

// Export for use in main assessment script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cognitiveFunctions, getAllQuestions, functionDescriptions, psychologicalTypes };
}
