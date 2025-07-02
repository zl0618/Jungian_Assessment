// English Question Bank for Jungian Cognitive Function Assessment

const questionsEN = [
    // EXTRAVERTED THINKING (Te) – Questions 1-10
    { id: "Te_1", text: "I like to organize things so they work better.", function: "Te" },
    { id: "Te_2", text: "I make decisions based on facts everyone can see.", function: "Te" },
    { id: "Te_3", text: "I prefer clear rules and systems to guide what I do.", function: "Te" },
    { id: "Te_4", text: "I enjoy fixing problems in practical ways.", function: "Te" },
    { id: "Te_5", text: "I want results that can be measured.", function: "Te" },
    { id: "Te_6", text: "I like to plan ahead and set goals.", function: "Te" },
    { id: "Te_7", text: "I feel good when things run smoothly and efficiently.", function: "Te" },
    { id: "Te_8", text: "I often suggest improvements to make things work better.", function: "Te" },
    { id: "Te_9", text: "I trust information that is proven and objective.", function: "Te" },
    { id: "Te_10", text: "I like to be in control of projects or tasks.", function: "Te" },

    // INTROVERTED THINKING (Ti) – Questions 11-20
    { id: "Ti_1", text: "I often think deeply about how things work inside.", function: "Ti" },
    { id: "Ti_2", text: "I care about whether ideas make sense to me.", function: "Ti" },
    { id: "Ti_3", text: "I like to figure out my own way of understanding things.", function: "Ti" },
    { id: "Ti_4", text: "I question things quietly in my mind.", function: "Ti" },
    { id: "Ti_5", text: "I want my ideas to be clear and logical, even if others don't get them.", function: "Ti" },
    { id: "Ti_6", text: "I enjoy solving puzzles or problems on my own.", function: "Ti" },
    { id: "Ti_7", text: "I often notice inconsistencies in what people say.", function: "Ti" },
    { id: "Ti_8", text: "I have high standards for what I believe is true, even if I can't explain them well.", function: "Ti" },
    { id: "Ti_9", text: "I like to analyze things until I really understand them.", function: "Ti" },
    { id: "Ti_10", text: "I prefer to work things out in my head before talking.", function: "Ti" },

    // EXTRAVERTED FEELING (Fe) – Questions 21-30
    { id: "Fe_1", text: "I care about how everyone around me feels.", function: "Fe" },
    { id: "Fe_2", text: "I want people to get along and be happy together.", function: "Fe" },
    { id: "Fe_3", text: "I often adjust what I say to avoid hurting others.", function: "Fe" },
    { id: "Fe_4", text: "I notice when someone is uncomfortable in a group.", function: "Fe" },
    { id: "Fe_5", text: "I like to help people feel included.", function: "Fe" },
    { id: "Fe_6", text: "I try to meet others' needs before my own.", function: "Fe" },
    { id: "Fe_7", text: "I feel uneasy when there is conflict between people.", function: "Fe" },
    { id: "Fe_8", text: "I often encourage others and boost their confidence.", function: "Fe" },
    { id: "Fe_9", text: "I want to create harmony wherever I go.", function: "Fe" },
    { id: "Fe_10", text: "I am sensitive to changes in the mood of a group.", function: "Fe" },

    // INTROVERTED FEELING (Fi) – Questions 31-40
    { id: "Fi_1", text: "I make choices based on what feels right to me inside.", function: "Fi" },
    { id: "Fi_2", text: "I have strong personal values that are hard to explain.", function: "Fi" },
    { id: "Fi_3", text: "I need time alone to understand my feelings.", function: "Fi" },
    { id: "Fi_4", text: "I prefer to act in ways that match my true self.", function: "Fi" },
    { id: "Fi_5", text: "I care deeply about a few close people.", function: "Fi" },
    { id: "Fi_6", text: "I keep my feelings private unless I trust someone.", function: "Fi" },
    { id: "Fi_7", text: "I feel uncomfortable pretending to be someone I'm not.", function: "Fi" },
    { id: "Fi_8", text: "I am loyal to my beliefs even if others disagree.", function: "Fi" },
    { id: "Fi_9", text: "I notice when something goes against my inner values.", function: "Fi" },
    { id: "Fi_10", text: "I want my actions to be true to who I am.", function: "Fi" },

    // EXTRAVERTED SENSING (Se) – Questions 41-50
    { id: "Se_1", text: "I notice what's happening around me right away.", function: "Se" },
    { id: "Se_2", text: "I like to experience new sights, sounds, and tastes.", function: "Se" },
    { id: "Se_3", text: "I am quick to react to changes in my environment.", function: "Se" },
    { id: "Se_4", text: "I enjoy activities that are hands-on and physical.", function: "Se" },
    { id: "Se_5", text: "I trust what I see and hear directly.", function: "Se" },
    { id: "Se_6", text: "I like to live in the moment.", function: "Se" },
    { id: "Se_7", text: "I am drawn to excitement and action.", function: "Se" },
    { id: "Se_8", text: "I often notice details others miss.", function: "Se" },
    { id: "Se_9", text: "I like to try new things just for the experience.", function: "Se" },
    { id: "Se_10", text: "I feel best when I'm fully engaged with the world.", function: "Se" },

    // INTROVERTED SENSING (Si) – Questions 51-60
    { id: "Si_1", text: "I compare new experiences to memories from my past.", function: "Si" },
    { id: "Si_2", text: "I remember details about things that matter to me.", function: "Si" },
    { id: "Si_3", text: "My past experiences affect how I see things now.", function: "Si" },
    { id: "Si_4", text: "I like routines that make me feel comfortable.", function: "Si" },
    { id: "Si_5", text: "I notice when something feels different from what I'm used to.", function: "Si" },
    { id: "Si_6", text: "I am sensitive to changes in my body or surroundings.", function: "Si" },
    { id: "Si_7", text: "I prefer familiar places and activities.", function: "Si" },
    { id: "Si_8", text: "I have strong likes and dislikes for certain foods, smells, or sounds.", function: "Si" },
    { id: "Si_9", text: "I often think about how things used to be.", function: "Si" },
    { id: "Si_10", text: "Some experiences feel timeless and stay with me for years.", function: "Si" },

    // EXTRAVERTED INTUITION (Ne) – Questions 61-70
    { id: "Ne_1", text: "I see lots of possibilities in every situation.", function: "Ne" },
    { id: "Ne_2", text: "I get excited by new ideas and opportunities.", function: "Ne" },
    { id: "Ne_3", text: "I often connect things that seem unrelated.", function: "Ne" },
    { id: "Ne_4", text: "I enjoy brainstorming and coming up with creative solutions.", function: "Ne" },
    { id: "Ne_5", text: "I like to imagine how things could be different.", function: "Ne" },
    { id: "Ne_6", text: "I am open to change and new experiences.", function: "Ne" },
    { id: "Ne_7", text: "I enjoy exploring new topics and interests.", function: "Ne" },
    { id: "Ne_8", text: "I often have many ideas at once.", function: "Ne" },
    { id: "Ne_9", text: "I like to inspire others with new ways of thinking.", function: "Ne" },
    { id: "Ne_10", text: "I feel energized by thinking about the future.", function: "Ne" },

    // INTROVERTED INTUITION (Ni) – Questions 71-80
    { id: "Ni_1", text: "I often have sudden insights or \"aha\" moments.", function: "Ni" },
    { id: "Ni_2", text: "I think about the deeper meaning behind things.", function: "Ni" },
    { id: "Ni_3", text: "I trust my gut feelings about what will happen.", function: "Ni" },
    { id: "Ni_4", text: "I focus on one main idea or vision at a time.", function: "Ni" },
    { id: "Ni_5", text: "I like to find the hidden patterns in life.", function: "Ni" },
    { id: "Ni_6", text: "I am drawn to symbols, dreams, or stories with deeper meaning.", function: "Ni" },
    { id: "Ni_7", text: "Sometimes, I feel driven by strong inner images or visions.", function: "Ni" },
    { id: "Ni_8", text: "I find it hard to explain my insights to others.", function: "Ni" },
    { id: "Ni_9", text: "I often sense what's coming before it happens.", function: "Ni" },
    { id: "Ni_10", text: "My imagination feels more real than the outside world at times.", function: "Ni" }
];

// Function to get all English questions
function getEnglishQuestions() {
    return questionsEN;
}

// Fallback function for compatibility
function getAllQuestions(lang) {
    if (lang === 'en') {
        return getEnglishQuestions();
    }
    // Return English as fallback
    return getEnglishQuestions();
}

// Global export for direct access
if (typeof window !== 'undefined') {
    window.questionsEN = questionsEN;
    window.getEnglishQuestions = getEnglishQuestions;
}
