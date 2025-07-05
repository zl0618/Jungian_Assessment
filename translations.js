// Translation dictionary
const translations = {
    en: {
        mainTitle: "Jungian Cognitive Function Assessment",
        mainSubtitle: "Discover your psychological type through Carl Jung's cognitive function theory",
        languageTitle: "Choose Language / 選擇語言",
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
        thankYouText: "Your assessment has been completed successfully.",
        completionIdLabel: "Completion ID:",
        functionsReference: "Functions Reference",
        downloadResults: "Download PDF Report",
        takeAgain: "Take Assessment Again",
        questionOf: "Question {current} of {total}",
        estimatedTime: "Estimated time: 15 minutes",
        ratingExplanationTitle: "Rating Scale:",
        stronglyDisagreeGuide: "Strongly Disagree",
        disagreeGuide: "Disagree",
        neutralGuide: "Neutral",
        agreeGuide: "Agree",
        stronglyAgreeGuide: "Strongly Agree"
    },
    zh: {
        mainTitle: "榮格認知功能評估",
        mainSubtitle: "透過卡爾·榮格的認知功能理論發現你的心理類型",
        languageTitle: "選擇語言 / Choose Language",
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
        thankYouText: "您的評估已成功完成。",
        completionIdLabel: "完成ID：",
        functionsReference: "功能參考",
        downloadResults: "下載PDF報告",
        takeAgain: "重新評估",
        questionOf: "第 {current} 題，共 {total} 題",
        estimatedTime: "預計時間：15分鐘",
        ratingExplanationTitle: "評分標準：",
        stronglyDisagreeGuide: "強烈不同意",
        disagreeGuide: "不同意",
        neutralGuide: "中立",
        agreeGuide: "同意",
        stronglyAgreeGuide: "強烈同意"
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
