// English Question Bank for Jungian Cognitive Function Assessment

const questionsEN = [
    // Te (Extraverted Thinking) Questions
    { id: "Te_1", text: "I naturally organize external systems according to logical principles that others can verify.", function: "Te" },
    { id: "Te_2", text: "My thinking gains energy when I can apply established frameworks to improve real-world efficiency.", function: "Te" },
    { id: "Te_3", text: "I tend to make decisions using objective data that is independent of personal opinions.", function: "Te" },
    { id: "Te_4", text: "I am most intellectually satisfied when my logical analysis produces measurable external results.", function: "Te" },
    { id: "Te_5", text: "I tend to evaluate ideas primarily based on their practical applicability to concrete situations.", function: "Te" },
    { id: "Te_6", text: "I am inclined to create systematized approaches that can be universally implemented.", function: "Te" },
    { id: "Te_7", text: "I focus on establishing cause-and-effect relationships that can be observed in the external world.", function: "Te" },
    { id: "Te_8", text: "I prefer working with concrete, provable facts rather than abstract theoretical speculation.", function: "Te" },
    { id: "Te_9", text: "I measure the value of thinking by how well it corresponds to objective reality.", function: "Te" },
    { id: "Te_10", text: "I feel energized when I can translate logical principles into effective external action.", function: "Te" },

    // Ti (Introverted Thinking) Questions
    { id: "Ti_1", text: "I am primarily concerned with developing my own internal logical framework, even if it's difficult to explain to others.", function: "Ti" },
    { id: "Ti_2", text: "I often find myself silently questioning accepted ideas, following inner logical processes that others rarely see.", function: "Ti" },
    { id: "Ti_3", text: "I tend to develop theories from internal intuition rather than external data, though I may struggle to prove this to others.", function: "Ti" },
    { id: "Ti_4", text: "My thinking begins with subjective insights and returns to refining my internal understanding.", function: "Ti" },
    { id: "Ti_5", text: "I formulate problems and create theories that emerge from my own internal logical development.", function: "Ti" },
    { id: "Ti_6", text: "I find it difficult to articulate my thought processes because they follow my own internal logical sequences.", function: "Ti" },
    { id: "Ti_7", text: "I am more interested in the subjective logical relationships between ideas than their external applications.", function: "Ti" },
    { id: "Ti_8", text: "I tend to be skeptical of ideas simply because they are widely accepted, preferring my own silent standards.", function: "Ti" },
    { id: "Ti_9", text: "I often have clear internal convictions about logical truth that I cannot easily communicate to others.", function: "Ti" },
    { id: "Ti_10", text: "I feel most satisfied when I achieve internally consistent understanding, regardless of external validation.", function: "Ti" },

    // Fe (Extraverted Feeling) Questions
    { id: "Fe_1", text: "I naturally attune to and respond to the emotional atmosphere of the groups around me.", function: "Fe" },
    { id: "Fe_2", text: "I feel energized when I can create harmony and positive emotional connections between people.", function: "Fe" },
    { id: "Fe_3", text: "I tend to make decisions based on what will benefit the collective well-being of those involved.", function: "Fe" },
    { id: "Fe_4", text: "I find myself naturally perceiving others' emotional needs and adjusting my behavior accordingly.", function: "Fe" },
    { id: "Fe_5", text: "I prefer to follow universally accepted values and social standards in interpersonal relationships.", function: "Fe" },
    { id: "Fe_6", text: "I feel uncomfortable when there is emotional tension or discord in my environment.", function: "Fe" },
    { id: "Fe_7", text: "I tend to express emotions in ways that are appropriate to the social context I'm in.", function: "Fe" },
    { id: "Fe_8", text: "I am motivated by contributing to shared emotional experiences and collective harmony.", function: "Fe" },
    { id: "Fe_9", text: "I naturally adjust my communication style to connect with different types of people.", function: "Fe" },
    { id: "Fe_10", text: "I feel most fulfilled when I can help others feel emotionally valued and supported.", function: "Fe" },

    // Fi (Introverted Feeling) Questions
    { id: "Fi_1", text: "I make decisions based on deeply personal values that I find difficult to explain or justify to others.", function: "Fi" },
    { id: "Fi_2", text: "I tend to have strong internal emotional reactions that are largely invisible to the outside world.", function: "Fi" },
    { id: "Fi_3", text: "I maintain my personal authenticity even when it conflicts with external expectations or social pressure.", function: "Fi" },
    { id: "Fi_4", text: "I feel energized when my actions are in complete alignment with my personal conscience and inner moral standards.", function: "Fi" },
    { id: "Fi_5", text: "I form deep, selective emotional connections while maintaining silent inner standards for relationships.", function: "Fi" },
    { id: "Fi_6", text: "I find it nearly impossible to explain my value judgments because they feel self-evidently right to me.", function: "Fi" },
    { id: "Fi_7", text: "I am primarily concerned with maintaining inner emotional harmony according to my personal moral compass.", function: "Fi" },
    { id: "Fi_8", text: "I tend to be very selective about who I allow into my inner emotional world.", function: "Fi" },
    { id: "Fi_9", text: "I prefer to process my feelings privately before expressing them, if I express them at all.", function: "Fi" },
    { id: "Fi_10", text: "I feel most satisfied when my external actions perfectly reflect my inner values, even if others don't understand.", function: "Fi" },

    // Se (Extraverted Sensation) Questions
    { id: "Se_1", text: "I am naturally drawn to rich, immediate sensory experiences in my current environment.", function: "Se" },
    { id: "Se_2", text: "I feel most alive when I am actively engaged with concrete reality in real-time.", function: "Se" },
    { id: "Se_3", text: "I tend to notice and quickly respond to changes and opportunities in my physical environment.", function: "Se" },
    { id: "Se_4", text: "I gain energy through hands-on interaction with tangible objects and situations.", function: "Se" },
    { id: "Se_5", text: "I prefer learning through direct sensory experience rather than theoretical instruction.", function: "Se" },
    { id: "Se_6", text: "I find myself naturally noticing aesthetic details like colors, textures, and spatial arrangements.", function: "Se" },
    { id: "Se_7", text: "I tend to trust information gained through my direct, immediate sensory observations.", function: "Se" },
    { id: "Se_8", text: "I am motivated by opportunities to have new and varied physical experiences.", function: "Se" },
    { id: "Se_9", text: "I naturally adapt my behavior to match the immediate concrete demands of situations.", function: "Se" },
    { id: "Se_10", text: "I feel most satisfied when I can fully engage my senses in present-moment activities.", function: "Se" },

    // Si (Introverted Sensation) Questions
    { id: "Si_1", text: "I tend to compare new experiences against my internal catalog of past sensory memories, each uniquely colored by my subjective reactions.", function: "Si" },
    { id: "Si_2", text: "I naturally notice subtle changes in my internal bodily sensations and their distinctive subjective qualities.", function: "Si" },
    { id: "Si_3", text: "My past experiences seem to have a timeless quality that continuously colors and influences my current perceptions.", function: "Si" },
    { id: "Si_4", text: "I am more concerned with my subjective response to stimuli than the objective qualities of the stimuli themselves.", function: "Si" },
    { id: "Si_5", text: "I tend to notice discrepancies between how I internally sense things should feel versus external reality.", function: "Si" },
    { id: "Si_6", text: "I gain energy through preserving and maintaining the subjective qualities of meaningful sensory experiences.", function: "Si" },
    { id: "Si_7", text: "I prefer to process sensory information slowly, allowing my unique internal reactions to fully develop.", function: "Si" },
    { id: "Si_8", text: "I have strong preferences for specific sensory experiences based on their personal, subjective meaning to me.", function: "Si" },
    { id: "Si_9", text: "My sensory perceptions are influenced more by my internal subjective state than by objective properties.", function: "Si" },
    { id: "Si_10", text: "Present experiences often seem to exist in a mythical world where objects carry deeper, more personal significance than their surface reality.", function: "Si" },

    // Ne (Extraverted Intuition) Questions
    { id: "Ne_1", text: "I naturally see multiple possibilities and potential outcomes emerging from any external situation.", function: "Ne" },
    { id: "Ne_2", text: "I feel energized when I can explore new connections between different ideas and external concepts.", function: "Ne" },
    { id: "Ne_3", text: "I tend to focus on what might emerge or develop from current external circumstances.", function: "Ne" },
    { id: "Ne_4", text: "I am drawn to collaborating with others in brainstorming and generating creative alternatives.", function: "Ne" },
    { id: "Ne_5", text: "I prefer to keep my options open rather than committing to a single predetermined external path.", function: "Ne" },
    { id: "Ne_6", text: "I find myself naturally seeing patterns and relationships in the external world that others might miss.", function: "Ne" },
    { id: "Ne_7", text: "I am motivated by the potential for innovation and transformation in external systems and situations.", function: "Ne" },
    { id: "Ne_8", text: "I tend to get excited about new external possibilities but may struggle with practical follow-through.", function: "Ne" },
    { id: "Ne_9", text: "I naturally encourage others to consider alternative perspectives and unexplored external options.", function: "Ne" },
    { id: "Ne_10", text: "I feel most satisfied when I can inspire others to see new possibilities and potential in their environment.", function: "Ne" },

    // Ni (Introverted Intuition) Questions
    { id: "Ni_1", text: "I tend to receive sudden insights about archetypal patterns and symbolic meanings behind experiences.", function: "Ni" },
    { id: "Ni_2", text: "I am naturally drawn to understanding universal, symbolic elements that govern life and human experience.", function: "Ni" },
    { id: "Ni_3", text: "I find myself having internal visions or clear symbolic images about how deeper patterns will unfold.", function: "Ni" },
    { id: "Ni_4", text: "I prefer to develop one central archetypal insight deeply rather than exploring many surface options.", function: "Ni" },
    { id: "Ni_5", text: "I tend to synthesize complex information into unified, symbolic understanding that feels timeless and universal.", function: "Ni" },
    { id: "Ni_6", text: "I gain energy through pursuing a single, meaningful direction that feels connected to archetypal or eternal patterns.", function: "Ni" },
    { id: "Ni_7", text: "I feel compulsively driven by internal images and visions that demand to be understood and expressed.", function: "Ni" },
    { id: "Ni_8", text: "I find it difficult to explain my insights because they emerge as complete, symbolic wholes rather than logical sequences.", function: "Ni" },
    { id: "Ni_9", text: "I tend to be future-oriented, perceiving archetypal patterns that will emerge from current unconscious processes.", function: "Ni" },
    { id: "Ni_10", text: "These internal archetypal visions sometimes feel so compelling that they seem more real to me than external circumstances.", function: "Ni" }
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
