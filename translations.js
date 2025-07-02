// Translation dictionary
const translations = {
    en: {
        mainTitle: "Jungian Cognitive Function Assessment",
        mainSubtitle: "Discover your psychological type through Carl Jung's cognitive function theory",
        languageTitle: "Choose Language / 選擇語言",
        participantInfoTitle: "Participant Information (Optional)",
        participantIdLabel: "Participant ID (for research purposes):",
        participantIdPlaceholder: "e.g., P001, or leave blank for anonymous",
        ageLabel: "Age:",
        ageSelect: "Select age range",
        educationLabel: "Education Level:",
        educationSelect: "Select education level",
        educationHS: "High School",
        educationSC: "Some College",
        educationBA: "Bachelor's Degree",
        educationMA: "Master's Degree",
        educationPhD: "PhD/Doctorate",
        educationOther: "Other",
        startBtn: "Start Assessment",
        stronglyDisagree: "Strongly Disagree",
        neutral: "Neutral",
        stronglyAgree: "Strongly Agree",
        previous: "Previous",
        next: "Next",
        finish: "Finish",
        resultsTitle: "Assessment Complete",
        resultsSubtitle: "Your Jungian Cognitive Function Results",
        thankYouTitle: "Thank You for Participating!",
        thankYouText: "Your responses have been recorded. If you provided a participant ID, your results are linked to that identifier.",
        completionIdLabel: "Completion ID:",
        downloadResults: "Download Results",
        takeAgain: "Take Assessment Again",
        questionOf: "Question {current} of {total}",
        estimatedTime: "Estimated time: 15 minutes"
    },
    zh: {
        mainTitle: "榮格認知功能評估",
        mainSubtitle: "透過卡爾·榮格的認知功能理論發現你的心理類型",
        languageTitle: "選擇語言 / Choose Language",
        participantInfoTitle: "參與者資訊（可選）",
        participantIdLabel: "參與者ID（用於研究目的）：",
        participantIdPlaceholder: "例如：P001，或留空表示匿名",
        ageLabel: "年齡：",
        ageSelect: "選擇年齡範圍",
        educationLabel: "教育程度：",
        educationSelect: "選擇教育程度",
        educationHS: "高中",
        educationSC: "大學肄業",
        educationBA: "學士學位",
        educationMA: "碩士學位",
        educationPhD: "博士學位",
        educationOther: "其他",
        startBtn: "開始評估",
        stronglyDisagree: "強烈不同意",
        neutral: "中立",
        stronglyAgree: "強烈同意",
        previous: "上一題",
        next: "下一題",
        finish: "完成",
        resultsTitle: "評估完成",
        resultsSubtitle: "您的榮格認知功能結果",
        thankYouTitle: "感謝您的參與！",
        thankYouText: "您的回答已被記錄。如果您提供了參與者ID，您的結果將與該標識符關聯。",
        completionIdLabel: "完成ID：",
        downloadResults: "下載結果",
        takeAgain: "重新評估",
        questionOf: "第 {current} 題，共 {total} 題",
        estimatedTime: "預計時間：15分鐘"
    }
};

// Translation function for dynamic content
function translate(key, lang) {
    const keys = key.split('.');
    let result = translations[lang];
    
    keys.forEach(k => {
        if (result) {
            result = result[k];
        }
    });
    
    return result || key;
}
