// Jungian Cognitive Function Assessment Questions
const cognitiveFunctions = {
    'Te': {
        name: 'Extraverted Thinking (Te)',
        description: 'Questions 1-10',
        questions: [
            "I naturally organize external systems according to logical principles that others can verify.",
            "My thinking gains energy when I can apply established frameworks to improve real-world efficiency.",
            "I prefer to make decisions using objective data that exists independently of personal opinion.",
            "I feel most intellectually satisfied when my logical analysis produces measurable external results.",
            "I tend to evaluate ideas primarily by their practical applicability to concrete situations.",
            "I'm drawn to creating systematic approaches that can be universally implemented.",
            "I focus on establishing cause-and-effect relationships that can be observed in the external world.",
            "I prefer working with concrete, demonstrable facts rather than abstract theoretical speculation.",
            "I measure the value of thinking by how well it corresponds with objective reality.",
            "I feel energized when I can translate logical principles into efficient external action."
        ]
    },
    'Ti': {
        name: 'Introverted Thinking (Ti)',
        description: 'Questions 11-20',
        questions: [
            "I'm primarily concerned with developing my own internal logical framework, even if it's hard to explain to others.",
            "I often find myself silently questioning accepted ideas, following an inner logical process that others rarely see.",
            "I prefer to develop theories from internal hunches rather than external data, though I may struggle to justify this to others.",
            "My thinking begins with subjective insights and returns to refine my internal understanding.",
            "I formulate questions and create theories that emerge from my own inner logical development.",
            "I find it difficult to express my thought processes because they follow my own internal logical sequence.",
            "I'm more interested in the subjective logical relationships between ideas than their external applications.",
            "I tend to be skeptical of popular ideas simply because they're generally accepted, preferring my own silent standards.",
            "I often have clear internal convictions about logical truth that I can't easily communicate to others.",
            "I feel most satisfied when I achieve internally consistent understanding, regardless of external validation."
        ]
    },
    'Fe': {
        name: 'Extraverted Feeling (Fe)',
        description: 'Questions 21-30',
        questions: [
            "I naturally attune to and respond to the emotional atmosphere of groups around me.",
            "I feel energized when I can create harmony and positive emotional connections between people.",
            "I tend to make decisions based on what will benefit the collective wellbeing of those involved.",
            "I find myself naturally aware of others' emotional needs and adjusting my behavior accordingly.",
            "I prefer to follow generally accepted values and social standards in interpersonal situations.",
            "I feel uncomfortable when there is emotional tension or discord in my environment.",
            "I tend to express emotions in ways that are appropriate to the social context I'm in.",
            "I'm motivated by contributing to shared emotional experiences and collective harmony.",
            "I naturally adapt my communication style to connect with different types of people.",
            "I feel most fulfilled when I can help others feel emotionally valued and supported."
        ]
    },
    'Fi': {
        name: 'Introverted Feeling (Fi)',
        description: 'Questions 31-40',
        questions: [
            "I make decisions based on deeply held personal values that I find difficult to explain or justify to others.",
            "I tend to have intense inner emotional reactions that remain largely invisible to the outside world.",
            "I maintain my personal authenticity even when it conflicts with external expectations or social pressure.",
            "I feel energized when my actions align perfectly with my individual conscience and inner moral standards.",
            "I form deep, selective emotional connections while maintaining silent inner criteria for relationships.",
            "I find it nearly impossible to explain my value judgments because they feel self-evidently right to me.",
            "I'm primarily concerned with maintaining inner emotional harmony according to my personal moral compass.",
            "I tend to be highly selective about who I allow into my inner emotional world.",
            "I prefer to process my feelings privately before expressing them, if I express them at all.",
            "I feel most satisfied when my outer actions perfectly reflect my inner values, even if others don't understand."
        ]
    },
    'Se': {
        name: 'Extraverted Sensation (Se)',
        description: 'Questions 41-50',
        questions: [
            "I'm naturally drawn to rich, immediate sensory experiences in my present environment.",
            "I feel most alive when I'm actively engaged with concrete reality in real-time.",
            "I tend to notice and respond quickly to changes and opportunities in my physical surroundings.",
            "I'm energized by hands-on, interactive experiences with tangible objects and situations.",
            "I prefer to learn through direct sensory experience rather than theoretical instruction.",
            "I find myself naturally aware of aesthetic details like colors, textures, and spatial arrangements.",
            "I tend to trust information that comes through my direct, immediate sensory observation.",
            "I'm motivated by opportunities to have new and varied physical experiences.",
            "I naturally adapt my behavior to match the immediate concrete demands of the situation.",
            "I feel most satisfied when I can fully engage my senses in present-moment activities."
        ]
    },
    'Si': {
        name: 'Introverted Sensation (Si)',
        description: 'Questions 51-60',
        questions: [
            "I tend to compare new experiences with my internal catalog of past sensory memories, each uniquely colored by my subjective response.",
            "I'm naturally aware of subtle changes in my internal bodily sensations and their unique subjective quality.",
            "My past experiences seem to possess a timeless quality that continuously colors and influences my present perception.",
            "I focus more on my subjective response to stimuli than the objective qualities of the stimuli themselves.",
            "I tend to notice discrepancies between my inner sense of how things should feel and external reality.",
            "I'm energized by preserving and maintaining the subjective quality of meaningful sensory experiences.",
            "I prefer to process sensory information slowly, allowing my unique internal response to fully develop.",
            "I have strong preferences for specific sensory experiences based on their personal, subjective meaning to me.",
            "My sensory perceptions are heavily influenced by my internal subjective state rather than objective properties.",
            "Current experiences often seem to exist in a mythological world where objects carry deeper, more personal significance than their surface reality."
        ]
    },
    'Ne': {
        name: 'Extraverted Intuition (Ne)',
        description: 'Questions 61-70',
        questions: [
            "I naturally see multiple possibilities and potential outcomes emerging from any external situation.",
            "I feel energized when I can explore new connections between different ideas and external concepts.",
            "I tend to focus on what could emerge or develop from current external circumstances.",
            "I'm drawn to brainstorming and generating creative alternatives in collaboration with others.",
            "I prefer to keep my options open rather than commit to a single predetermined external path.",
            "I find myself naturally seeing patterns and relationships in the external world that others might miss.",
            "I'm motivated by the potential for innovation and change in external systems and situations.",
            "I tend to become excited about new external possibilities but may struggle with practical follow-through.",
            "I naturally encourage others to consider alternative perspectives and unexplored external options.",
            "I feel most satisfied when I can inspire others to see new possibilities and potentials in their environment."
        ]
    },
    'Ni': {
        name: 'Introverted Intuition (Ni)',
        description: 'Questions 71-80',
        questions: [
            "I tend to receive sudden insights about archetypal patterns and symbolic meanings underlying experiences.",
            "I'm naturally drawn to understanding the universal, symbolic elements that govern life and human experience.",
            "I find myself having inner visions or clear symbolic images of how deeper patterns will unfold.",
            "I prefer to focus deeply on developing one central archetypal insight rather than exploring many surface options.",
            "I tend to synthesize complex information into unified, symbolic understandings that feel timeless and universal.",
            "I'm energized by pursuing a single, meaningful direction that feels connected to archetypal or eternal patterns.",
            "I feel compulsively driven by inner images and visions that demand to be understood and expressed.",
            "I find it difficult to explain my insights because they come as complete, symbolic wholes rather than logical sequences.",
            "I tend to be future-focused, sensing archetypal patterns that will emerge from current unconscious processes.",
            "These inner archetypal visions sometimes feel so compelling that they become more real to me than external circumstances."
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
