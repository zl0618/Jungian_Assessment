// Chinese Question Bank for Jungian Cognitive Function Assessment
// 榮格認知功能評估中文題庫

const questionsZH = [
    // EXTRAVERTED THINKING (Te) – Questions 1-10
    { id: "Te_1", text: "我喜歡把事情整理得更有效率。", function: "Te" },
    { id: "Te_2", text: "我做決定時會根據大家都能看到的事實。", function: "Te" },
    { id: "Te_3", text: "我比較喜歡有明確規則和系統來指引我。", function: "Te" },
    { id: "Te_4", text: "我喜歡用實際的方法解決問題。", function: "Te" },
    { id: "Te_5", text: "我希望看到可以衡量的成果。", function: "Te" },
    { id: "Te_6", text: "我喜歡事先計畫並設定目標。", function: "Te" },
    { id: "Te_7", text: "當事情順利有效地進行時，我會感到很滿意。", function: "Te" },
    { id: "Te_8", text: "我常常提出改進建議讓事情做得更好。", function: "Te" },
    { id: "Te_9", text: "我信任那些被證實且客觀的資訊。", function: "Te" },
    { id: "Te_10", text: "我喜歡掌控專案或任務的進行。", function: "Te" },

    // INTROVERTED THINKING (Ti) – Questions 11-20
    { id: "Ti_1", text: "我常常深入思考事情內部的運作方式。", function: "Ti" },
    { id: "Ti_2", text: "我在意想法對我來說是否合理。", function: "Ti" },
    { id: "Ti_3", text: "我喜歡用自己的方式理解事物。", function: "Ti" },
    { id: "Ti_4", text: "我會在心裡默默質疑事情。", function: "Ti" },
    { id: "Ti_5", text: "我希望自己的想法清楚且有邏輯，即使別人不懂也沒關係。", function: "Ti" },
    { id: "Ti_6", text: "我喜歡自己解決謎題或問題。", function: "Ti" },
    { id: "Ti_7", text: "我常常注意到別人說話中的矛盾。", function: "Ti" },
    { id: "Ti_8", text: "我對自己認為正確的事情有很高的標準，即使我不太會解釋。", function: "Ti" },
    { id: "Ti_9", text: "我喜歡分析事情直到我真正理解為止。", function: "Ti" },
    { id: "Ti_10", text: "我喜歡先在腦中想清楚再說出來。", function: "Ti" },

    // EXTRAVERTED FEELING (Fe) – Questions 21-30
    { id: "Fe_1", text: "我很在意身邊每個人的感受。", function: "Fe" },
    { id: "Fe_2", text: "我希望大家能和睦相處、一起快樂。", function: "Fe" },
    { id: "Fe_3", text: "我經常調整自己的話語以避免傷害別人。", function: "Fe" },
    { id: "Fe_4", text: "當有人在團體中不自在時，我會察覺到。", function: "Fe" },
    { id: "Fe_5", text: "我喜歡讓大家都有參與感。", function: "Fe" },
    { id: "Fe_6", text: "我會優先考慮別人的需求。", function: "Fe" },
    { id: "Fe_7", text: "當人與人之間有衝突時，我會感到不安。", function: "Fe" },
    { id: "Fe_8", text: "我常常鼓勵別人並提升他們的自信心。", function: "Fe" },
    { id: "Fe_9", text: "我希望無論到哪裡都能帶來和諧。", function: "Fe" },
    { id: "Fe_10", text: "我對團體氣氛的變化很敏感。", function: "Fe" },

    // INTROVERTED FEELING (Fi) – Questions 31-40
    { id: "Fi_1", text: "我會根據內心覺得對的事情做選擇。", function: "Fi" },
    { id: "Fi_2", text: "我有很強烈但難以解釋的個人價值觀。", function: "Fi" },
    { id: "Fi_3", text: "我需要獨處來了解自己的感受。", function: "Fi" },
    { id: "Fi_4", text: "我喜歡以符合真實自我的方式行動。", function: "Fi" },
    { id: "Fi_5", text: "我非常在乎少數幾個親近的人。", function: "Fi" },
    { id: "Fi_6", text: "除非我很信任對方，否則我會把感受藏在心裡。", function: "Fi" },
    { id: "Fi_7", text: "假裝成不是自己的樣子會讓我不自在。", function: "Fi" },
    { id: "Fi_8", text: "即使別人不同意，我也會堅持自己的信念。", function: "Fi" },
    { id: "Fi_9", text: "當某事違背我的內心價值時，我會察覺到。", function: "Fi" },
    { id: "Fi_10", text: "我希望自己的行為能忠於自我。", function: "Fi" },

    // EXTRAVERTED SENSING (Se) – Questions 41-50
    { id: "Se_1", text: "我會立刻注意到周圍發生的事情。", function: "Se" },
    { id: "Se_2", text: "我喜歡體驗新的景象、聲音和味道。", function: "Se" },
    { id: "Se_3", text: "我對環境的變化反應很快。", function: "Se" },
    { id: "Se_4", text: "我喜歡動手和需要身體參與的活動。", function: "Se" },
    { id: "Se_5", text: "我相信自己直接看到和聽到的東西。", function: "Se" },
    { id: "Se_6", text: "我喜歡活在當下。", function: "Se" },
    { id: "Se_7", text: "我喜歡刺激和行動。", function: "Se" },
    { id: "Se_8", text: "我常常注意到別人沒發現的細節。", function: "Se" },
    { id: "Se_9", text: "我喜歡嘗試新事物，只為了體驗。", function: "Se" },
    { id: "Se_10", text: "當我全心投入現實世界時，我感覺最好。", function: "Se" },

    // INTROVERTED SENSING (Si) – Questions 51-60
    { id: "Si_1", text: "我會把新體驗和過去的記憶做比較。", function: "Si" },
    { id: "Si_2", text: "我會記住對我重要事情的細節。", function: "Si" },
    { id: "Si_3", text: "我的過去經歷會影響我現在的看法。", function: "Si" },
    { id: "Si_4", text: "我喜歡讓我感到安心的日常習慣。", function: "Si" },
    { id: "Si_5", text: "當某事和我習慣的不同時，我會察覺到。", function: "Si" },
    { id: "Si_6", text: "我對身體或環境的變化很敏感。", function: "Si" },
    { id: "Si_7", text: "我偏好熟悉的地方和活動。", function: "Si" },
    { id: "Si_8", text: "我對某些食物、氣味或聲音有很強烈的好惡。", function: "Si" },
    { id: "Si_9", text: "我常常回想以前的事情。", function: "Si" },
    { id: "Si_10", text: "有些經歷讓我覺得很永恆，會記很久。", function: "Si" },

    // EXTRAVERTED INTUITION (Ne) – Questions 61-70
    { id: "Ne_1", text: "我在每種情況下都能看到很多可能性。", function: "Ne" },
    { id: "Ne_2", text: "新的想法和機會會讓我很興奮。", function: "Ne" },
    { id: "Ne_3", text: "我常常把看似無關的事物聯繫起來。", function: "Ne" },
    { id: "Ne_4", text: "我喜歡集思廣益並想出創意解決方法。", function: "Ne" },
    { id: "Ne_5", text: "我喜歡想像事情可能有什麼不同。", function: "Ne" },
    { id: "Ne_6", text: "我樂於接受改變和新體驗。", function: "Ne" },
    { id: "Ne_7", text: "我喜歡探索新主題和興趣。", function: "Ne" },
    { id: "Ne_8", text: "我常常同時有很多想法。", function: "Ne" },
    { id: "Ne_9", text: "我喜歡用新思維啟發別人。", function: "Ne" },
    { id: "Ne_10", text: "想到未來會讓我充滿活力。", function: "Ne" },

    // INTROVERTED INTUITION (Ni) – Questions 71-80
    { id: "Ni_1", text: "我常常突然靈光一現。", function: "Ni" },
    { id: "Ni_2", text: "我會思考事情背後更深的意義。", function: "Ni" },
    { id: "Ni_3", text: "我相信自己對未來的直覺。", function: "Ni" },
    { id: "Ni_4", text: "我一次只專注於一個主要想法或願景。", function: "Ni" },
    { id: "Ni_5", text: "我喜歡發現生活中的隱藏規律。", function: "Ni" },
    { id: "Ni_6", text: "我對有深層意義的符號、夢境或故事特別感興趣。", function: "Ni" },
    { id: "Ni_7", text: "有時，我會被內心強烈的畫面或願景所驅使。", function: "Ni" },
    { id: "Ni_8", text: "我覺得很難把自己的洞察力解釋給別人聽。", function: "Ni" },
    { id: "Ni_9", text: "我常常在事情發生前就有預感。", function: "Ni" },
    { id: "Ni_10", text: "有時候，我的想像比現實世界還真實。", function: "Ni" }
];

// Function to get all Chinese questions
function getChineseQuestions() {
    return questionsZH;
}

// Fallback function for compatibility
function getAllQuestions(lang) {
    if (lang === 'zh') {
        return getChineseQuestions();
    }
    // Return Chinese as fallback
    return getChineseQuestions();
}

// Global export for direct access
if (typeof window !== 'undefined') {
    window.questionsZH = questionsZH;
    window.getChineseQuestions = getChineseQuestions;
}
