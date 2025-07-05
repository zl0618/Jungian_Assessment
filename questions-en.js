// English Question Bank for Jungian Cognitive Function Assessment

const questionsEN = [
    // EXTRAVERTED THINKING (Te) – Questions 1-10
    { id: "Te_1", text: "I naturally synthesize information from different sources to create new frameworks or systems.", function: "Te" },
    { id: "Te_2", text: "When I analyze something, I'm already thinking about how to reconstruct it better or combine it with other elements.", function: "Te" },
    { id: "Te_3", text: "I feel compelled to replace ineffective methods with better ones, even if the old ones are working adequately.", function: "Te" },
    { id: "Te_4", text: "My thinking naturally progresses forward - I rarely dwell on past ideas without advancing them further.", function: "Te" },
    { id: "Te_5", text: "I trust conclusions that can be verified through external, objective evidence more than personal insights.", function: "Te" },
    { id: "Te_6", text: "I sometimes become so convinced of my logical framework that I dismiss other viewpoints as simply wrong.", function: "Te" },
    { id: "Te_7", text: "I can become impatient or dismissive when others don't follow what seems like obvious logical steps to me.", function: "Te" },
    { id: "Te_8", text: "I tend to reduce complex human situations to logical formulas, even when they don't quite fit", function: "Te" },
    { id: "Te_9", text: "I sometimes push my organizational systems on others, even when they haven't asked for them.", function: "Te" },
    { id: "Te_10", text: "I feel frustrated when subjective factors (feelings, personal values) interfere with what I see as the most efficient solution.", function: "Te" },

    // INTROVERTED THINKING (Ti) – Questions 11-20
    { id: "Ti_1", text: "I feel frustrated when subjective factors (feelings, personal values) interfere with what I see as the most efficient solution.", function: "Ti" },
    { id: "Ti_2", text: "I often find myself creating theoretical frameworks even when I don't have enough facts to support them.", function: "Ti" },
    { id: "Ti_3", text: "When I encounter new information, I immediately try to fit it into my internal logical system rather than accepting it as presented.", function: "Ti" },
    { id: "Ti_4", text: "I prefer to work out problems in my head until I have a complete understanding, even if it takes much longer than practical methods.", function: "Ti" },
    { id: "Ti_5", text: "I trust my own logical reasoning more than expert opinions or established methods, even when I can't fully explain why.", function: "Ti" },
    { id: "Ti_6", text: "I often complicate simple problems by considering every possible angle and qualification until the original point gets lost.", function: "Ti" },
    { id: "Ti_7", text: "I find it frustrating when people want practical applications before I've fully developed my theoretical understanding.", function: "Ti" },
    { id: "Ti_8", text: "I sometimes dismiss external facts that don't fit my internal logical model, even when those facts are well-established.", function: "Ti" },
    { id: "Ti_9", text: "I struggle to explain my ideas to others in ways they can understand, even when the logic is crystal clear to me.", function: "Ti" },
    { id: "Ti_10", text: "I can become defensive or dismissive when people question my reasoning, especially if they're focused on practical concerns rather than logical consistency.", function: "Ti" },

    // EXTRAVERTED FEELING (Fe) – Questions 21-30
    { id: "Fe_1", text: "I naturally adjust my emotional expressions to fit the mood and expectations of the group, even if it means setting aside my own feelings.", function: "Fe" },
    { id: "Fe_2", text: "I feel energized when I help create harmony and positive connections among people.", function: "Fe" },
    { id: "Fe_3", text: "I am drawn to participate in social or cultural activities that support shared values and bring people together.", function: "Fe" },
    { id: "Fe_4", text: "I often sense what others need emotionally and try to provide it, even before they ask.", function: "Fe" },
    { id: "Fe_5", text: "I value traditions and social norms because they help maintain a sense of belonging and order.", function: "Fe" },
    { id: "Fe_6", text: "Sometimes I find it hard to express my own personal feelings when they might disrupt group harmony.", function: "Fe" },
    { id: "Fe_7", text: "I may change my emotional stance depending on the people or situation, which can sometimes feel inconsistent.", function: "Fe" },
    { id: "Fe_8", text: "I occasionally question whether my feelings are truly my own or shaped by those around me.", function: "Fe" },
    { id: "Fe_9", text: "I feel uneasy or unsettled when there is conflict or disharmony in my environment.", function: "Fe" },
    { id: "Fe_10", text: "I sometimes avoid logical or critical thoughts if they might upset the emotional balance of a group.", function: "Fe" },

    // INTROVERTED FEELING (Fi) – Questions 31-40
    { id: "Fi_1", text: "I make choices based on my own inner values, even if they differ from what others expect.", function: "Fi" },
    { id: "Fi_2", text: "I strive to act in ways that feel authentic and true to myself, regardless of outside pressures.", function: "Fi" },
    { id: "Fi_3", text: "I notice when something around me goes against my personal sense of right and wrong, even if I don’t say anything.", function: "Fi" },
    { id: "Fi_4", text: "I feel a deep loyalty to a few people or causes that matter most to me.", function: "Fi" },
    { id: "Fi_5", text: "I prefer to understand and process my feelings privately before sharing them, if I share them at all.", function: "Fi" },
    { id: "Fi_6", text: "Sometimes I struggle to explain my deepest feelings or values to others, even though they are clear to me inside.", function: "Fi" },
    { id: "Fi_7", text: "I may feel misunderstood when others don’t seem to appreciate what’s important to me.", function: "Fi" },
    { id: "Fi_8", text: "I can be uncomfortable pretending to care about things that don’t truly matter to me.", function: "Fi" },
    { id: "Fi_9", text: "I sometimes hold onto my beliefs or feelings even when it’s hard to explain them logically.", function: "Fi" },
    { id: "Fi_10", text: "I may withdraw or become quiet in groups if I feel my values or feelings aren’t respected.", function: "Fi" },

    // EXTRAVERTED SENSING (Se) – Questions 41-50
    { id: "Se_1", text: "I feel most alive when I am fully engaged with the sights, sounds, and sensations of the present moment.", function: "Se" },
    { id: "Se_2", text: "I am quick to notice changes or details in my environment that others often miss.", function: "Se" },
    { id: "Se_3", text: "I enjoy seeking out new experiences, especially those that are vivid, exciting, or physically stimulating.", function: "Se" },
    { id: "Se_4", text: "I trust what I can see, hear, touch, or measure directly more than abstract ideas or theories.", function: "Se" },
    { id: "Se_5", text: "I often act spontaneously, responding to what’s happening around me rather than making detailed plans.", function: "Se" },
    { id: "Se_6", text: "I sometimes find it difficult to focus on long-term plans or abstract possibilities if they don’t have a clear, immediate impact.", function: "Se" },
    { id: "Se_7", text: "I may become restless or bored if I am not actively engaged with the world around me.", function: "Se" },
    { id: "Se_8", text: "I can overlook potential consequences if I am caught up in the excitement of the moment.", function: "Se" },
    { id: "Se_9", text: "I sometimes prioritize immediate enjoyment or comfort over rules, traditions, or long-term goals.", function: "Se" },
    { id: "Se_10", text: "I may dismiss or ignore things that can’t be directly sensed or experienced, even if others see them as important.", function: "Se" },

    // INTROVERTED SENSING (Si) – Questions 51-60
    { id: "Si_1", text: "I notice subtle details and internal reactions to my environment that others often miss.", function: "Si" },
    { id: "Si_2", text: "I rely on my internal sense of what feels right or comfortable, even if I can’t always explain why.", function: "Si" },
    { id: "Si_3", text: "I am sensitive to the atmosphere or mood of a place, even if nothing obvious has changed.", function: "Si" },
    { id: "Si_4", text: "I often keep my strongest sensory reactions to myself because they’re hard to describe.", function: "Si" },
    { id: "Si_5", text: "New experiences often leave me with a strong, personal impression—like a specific taste, smell, or feeling—that stays with me, even if it’s hard to describe.", function: "Si" },
    { id: "Si_6", text: "I can be slow to adapt to sudden changes, especially if they disrupt my inner sense of balance.", function: "Si" },
    { id: "Si_7", text: "I may resist changes to routines or surroundings, even when others see the change as positive.", function: "Si" },
    { id: "Si_8", text: "I can become absorbed in my own impressions and lose track of what’s happening around me.", function: "Si" },
    { id: "Si_9", text: "I sometimes struggle to explain why certain sensations or experiences affect me so much.", function: "Si" },
    { id: "Si_10", text: "I may feel unsettled when my inner sense of how things should be doesn’t match what’s actually happening.", function: "Si" },

    // EXTRAVERTED INTUITION (Ne) – Questions 61-70
    { id: "Ne_1", text: "I quickly spot new possibilities or connections in situations where others see only what’s obvious.", function: "Ne" },
    { id: "Ne_2", text: "I get energized by exploring new ideas, projects, or opportunities, even if they’re untested or unconventional.", function: "Ne" },
    { id: "Ne_3", text: "I enjoy brainstorming and coming up with creative solutions, especially when things seem stuck or blocked.", function: "Ne" },
    { id: "Ne_4", text: "I often inspire others with my enthusiasm for what could be, rather than what currently is.", function: "Ne" },
    { id: "Ne_5", text: "I prefer change and variety over staying in stable, long-established situations, which can feel stifling to me.", function: "Ne" },
    { id: "Ne_6", text: "Once I understand how something works or what it could become, I quickly lose interest and look for the next challenge.", function: "Ne" },
    { id: "Ne_7", text: "I can become restless or dissatisfied if I feel stuck in routines or when there are no new opportunities to pursue.", function: "Ne" },
    { id: "Ne_8", text: "I may overlook practical details or immediate needs because I’m focused on future possibilities or what could be improved.", function: "Ne" },
    { id: "Ne_9", text: "Others sometimes see me as inconsistent or unreliable because I jump from one idea or interest to another.", function: "Ne" },
    { id: "Ne_10", text: "I often start new projects or ideas before finishing the ones I’ve already begun, because I’m more excited by what’s next than what’s now.", function: "Ne" },

    // INTROVERTED INTUITION (Ni) – Questions 71-80
    { id: "Ni_1", text: "I often have sudden insights or “aha” moments about how things connect or what might happen, even if I can’t explain how I know.", function: "Ni" },
    { id: "Ni_2", text: "I am drawn to explore the deeper meaning or symbolism behind events, images, or ideas, rather than just accepting them at face value.", function: "Ni" },
    { id: "Ni_3", text: "I often focus on one main idea or vision at a time, letting it unfold in my mind until I see where it leads.", function: "Ni" },
    { id: "Ni_4", text: "I trust my gut feelings or inner sense about the direction things are heading, even when there’s little concrete evidence.", function: "Ni" },
    { id: "Ni_5", text: "Sometimes, my imagination feels more real or vivid than the world around me, and I can get absorbed in inner images or visions.", function: "Ni" },
    { id: "Ni_6", text: "I sometimes struggle to explain my insights or visions to others in a way that makes sense to them.", function: "Ni" },
    { id: "Ni_7", text: "I may become so absorbed in my inner world that I lose touch with practical details or what’s happening around me.", function: "Ni" },
    { id: "Ni_8", text: "I can be slow to act or make decisions in the real world because I’m waiting for a clear inner vision or sense of direction.", function: "Ni" },
    { id: "Ni_9", text: "Others sometimes see me as mysterious, vague, or difficult to understand because I focus on things they can’t see or measure.", function: "Ni" },
    { id: "Ni_10", text: "I can become detached from everyday reality, neglecting practical needs or relationships while pursuing what feels meaningful inside.", function: "Ni" }
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
