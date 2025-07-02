// Web-optimized Jungian Assessment Application

class WebJungianAssessment {
    constructor() {
        this.currentLanguage = 'en';
        this.questions = this.getQuestionsForLanguage(this.currentLanguage);
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.scores = {};
        this.results = null;
        this.startTime = null;
        this.participantInfo = {};
        this.completionId = null;
        
        this.initializeApp();
        this.initializeFirebase();
    }
    
    getQuestionsForLanguage(lang) {
        console.log('Loading questions for language:', lang);
        
        // Try language-specific question banks first
        if (lang === 'zh' && typeof getChineseQuestions === 'function') {
            const questions = getChineseQuestions();
            console.log(`Loaded ${questions.length} Chinese questions`);
            return questions;
        } else if (lang === 'en' && typeof getEnglishQuestions === 'function') {
            const questions = getEnglishQuestions();
            console.log(`Loaded ${questions.length} English questions`);
            return questions;
        }
        
        // Fallback to original questions.js file
        if (typeof getAllQuestions === 'function') {
            try {
                const questions = getAllQuestions(lang);
                if (questions && questions.length > 0) {
                    console.log(`Loaded ${questions.length} questions from getAllQuestions for ${lang}`);
                    return questions;
                }
            } catch (error) {
                console.warn('Error getting questions from getAllQuestions:', error);
            }
        }
        
        // Final fallback to default questions
        console.log(`Using fallback questions for ${lang}`);
        return this.getDefaultQuestions(lang);
    }
    
    getDefaultQuestions(lang) {
        const questions = [];
        
        if (lang === 'zh') {
            // Chinese questions - 80 questions total (10 per function)
            const chineseQuestions = [
                // EXTRAVERTED THINKING (Te) – Questions 1-10
                { id: 'Te_1', text: '我喜歡把事情整理得更有效率。', function: 'Te' },
                { id: 'Te_2', text: '我做決定時會根據大家都能看到的事實。', function: 'Te' },
                { id: 'Te_3', text: '我比較喜歡有明確規則和系統來指引我。', function: 'Te' },
                { id: 'Te_4', text: '我喜歡用實際的方法解決問題。', function: 'Te' },
                { id: 'Te_5', text: '我希望看到可以衡量的成果。', function: 'Te' },
                { id: 'Te_6', text: '我喜歡事先計畫並設定目標。', function: 'Te' },
                { id: 'Te_7', text: '當事情順利有效地進行時，我會感到很滿意。', function: 'Te' },
                { id: 'Te_8', text: '我常常提出改進建議讓事情做得更好。', function: 'Te' },
                { id: 'Te_9', text: '我信任那些被證實且客觀的資訊。', function: 'Te' },
                { id: 'Te_10', text: '我喜歡掌控專案或任務的進行。', function: 'Te' },

                // INTROVERTED THINKING (Ti) – Questions 11-20
                { id: 'Ti_1', text: '我常常深入思考事情內部的運作方式。', function: 'Ti' },
                { id: 'Ti_2', text: '我在意想法對我來說是否合理。', function: 'Ti' },
                { id: 'Ti_3', text: '我喜歡用自己的方式理解事物。', function: 'Ti' },
                { id: 'Ti_4', text: '我會在心裡默默質疑事情。', function: 'Ti' },
                { id: 'Ti_5', text: '我希望自己的想法清楚且有邏輯，即使別人不懂也沒關係。', function: 'Ti' },
                { id: 'Ti_6', text: '我喜歡自己解決謎題或問題。', function: 'Ti' },
                { id: 'Ti_7', text: '我常常注意到別人說話中的矛盾。', function: 'Ti' },
                { id: 'Ti_8', text: '我對自己認為正確的事情有很高的標準，即使我不太會解釋。', function: 'Ti' },
                { id: 'Ti_9', text: '我喜歡分析事情直到我真正理解為止。', function: 'Ti' },
                { id: 'Ti_10', text: '我喜歡先在腦中想清楚再說出來。', function: 'Ti' },

                // EXTRAVERTED FEELING (Fe) – Questions 21-30
                { id: 'Fe_1', text: '我很在意身邊每個人的感受。', function: 'Fe' },
                { id: 'Fe_2', text: '我希望大家能和睦相處、一起快樂。', function: 'Fe' },
                { id: 'Fe_3', text: '我經常調整自己的話語以避免傷害別人。', function: 'Fe' },
                { id: 'Fe_4', text: '當有人在團體中不自在時，我會察覺到。', function: 'Fe' },
                { id: 'Fe_5', text: '我喜歡讓大家都有參與感。', function: 'Fe' },
                { id: 'Fe_6', text: '我會優先考慮別人的需求。', function: 'Fe' },
                { id: 'Fe_7', text: '當人與人之間有衝突時，我會感到不安。', function: 'Fe' },
                { id: 'Fe_8', text: '我常常鼓勵別人並提升他們的自信心。', function: 'Fe' },
                { id: 'Fe_9', text: '我希望無論到哪裡都能帶來和諧。', function: 'Fe' },
                { id: 'Fe_10', text: '我對團體氣氛的變化很敏感。', function: 'Fe' },

                // INTROVERTED FEELING (Fi) – Questions 31-40
                { id: 'Fi_1', text: '我會根據內心覺得對的事情做選擇。', function: 'Fi' },
                { id: 'Fi_2', text: '我有很強烈但難以解釋的個人價值觀。', function: 'Fi' },
                { id: 'Fi_3', text: '我需要獨處來了解自己的感受。', function: 'Fi' },
                { id: 'Fi_4', text: '我喜歡以符合真實自我的方式行動。', function: 'Fi' },
                { id: 'Fi_5', text: '我非常在乎少數幾個親近的人。', function: 'Fi' },
                { id: 'Fi_6', text: '除非我很信任對方，否則我會把感受藏在心裡。', function: 'Fi' },
                { id: 'Fi_7', text: '假裝成不是自己的樣子會讓我不自在。', function: 'Fi' },
                { id: 'Fi_8', text: '即使別人不同意，我也會堅持自己的信念。', function: 'Fi' },
                { id: 'Fi_9', text: '當某事違背我的內心價值時，我會察覺到。', function: 'Fi' },
                { id: 'Fi_10', text: '我希望自己的行為能忠於自我。', function: 'Fi' },

                // EXTRAVERTED SENSING (Se) – Questions 41-50
                { id: 'Se_1', text: '我會立刻注意到周圍發生的事情。', function: 'Se' },
                { id: 'Se_2', text: '我喜歡體驗新的景象、聲音和味道。', function: 'Se' },
                { id: 'Se_3', text: '我對環境的變化反應很快。', function: 'Se' },
                { id: 'Se_4', text: '我喜歡動手和需要身體參與的活動。', function: 'Se' },
                { id: 'Se_5', text: '我相信自己直接看到和聽到的東西。', function: 'Se' },
                { id: 'Se_6', text: '我喜歡活在當下。', function: 'Se' },
                { id: 'Se_7', text: '我喜歡刺激和行動。', function: 'Se' },
                { id: 'Se_8', text: '我常常注意到別人沒發現的細節。', function: 'Se' },
                { id: 'Se_9', text: '我喜歡嘗試新事物，只為了體驗。', function: 'Se' },
                { id: 'Se_10', text: '當我全心投入現實世界時，我感覺最好。', function: 'Se' },

                // INTROVERTED SENSING (Si) – Questions 51-60
                { id: 'Si_1', text: '我會把新體驗和過去的記憶做比較。', function: 'Si' },
                { id: 'Si_2', text: '我會記住對我重要事情的細節。', function: 'Si' },
                { id: 'Si_3', text: '我的過去經歷會影響我現在的看法。', function: 'Si' },
                { id: 'Si_4', text: '我喜歡讓我感到安心的日常習慣。', function: 'Si' },
                { id: 'Si_5', text: '當某事和我習慣的不同時，我會察覺到。', function: 'Si' },
                { id: 'Si_6', text: '我對身體或環境的變化很敏感。', function: 'Si' },
                { id: 'Si_7', text: '我偏好熟悉的地方和活動。', function: 'Si' },
                { id: 'Si_8', text: '我對某些食物、氣味或聲音有很強烈的好惡。', function: 'Si' },
                { id: 'Si_9', text: '我常常回想以前的事情。', function: 'Si' },
                { id: 'Si_10', text: '有些經歷讓我覺得很永恆，會記很久。', function: 'Si' },

                // EXTRAVERTED INTUITION (Ne) – Questions 61-70
                { id: 'Ne_1', text: '我在每種情況下都能看到很多可能性。', function: 'Ne' },
                { id: 'Ne_2', text: '新的想法和機會會讓我很興奮。', function: 'Ne' },
                { id: 'Ne_3', text: '我常常把看似無關的事物聯繫起來。', function: 'Ne' },
                { id: 'Ne_4', text: '我喜歡集思廣益並想出創意解決方法。', function: 'Ne' },
                { id: 'Ne_5', text: '我喜歡想像事情可能有什麼不同。', function: 'Ne' },
                { id: 'Ne_6', text: '我樂於接受改變和新體驗。', function: 'Ne' },
                { id: 'Ne_7', text: '我喜歡探索新主題和興趣。', function: 'Ne' },
                { id: 'Ne_8', text: '我常常同時有很多想法。', function: 'Ne' },
                { id: 'Ne_9', text: '我喜歡用新思維啟發別人。', function: 'Ne' },
                { id: 'Ne_10', text: '想到未來會讓我充滿活力。', function: 'Ne' },

                // INTROVERTED INTUITION (Ni) – Questions 71-80
                { id: 'Ni_1', text: '我常常突然靈光一現。', function: 'Ni' },
                { id: 'Ni_2', text: '我會思考事情背後更深的意義。', function: 'Ni' },
                { id: 'Ni_3', text: '我相信自己對未來的直覺。', function: 'Ni' },
                { id: 'Ni_4', text: '我一次只專注於一個主要想法或願景。', function: 'Ni' },
                { id: 'Ni_5', text: '我喜歡發現生活中的隱藏規律。', function: 'Ni' },
                { id: 'Ni_6', text: '我對有深層意義的符號、夢境或故事特別感興趣。', function: 'Ni' },
                { id: 'Ni_7', text: '有時，我會被內心強烈的畫面或願景所驅使。', function: 'Ni' },
                { id: 'Ni_8', text: '我覺得很難把自己的洞察力解釋給別人聽。', function: 'Ni' },
                { id: 'Ni_9', text: '我常常在事情發生前就有預感。', function: 'Ni' },
                { id: 'Ni_10', text: '有時候，我的想像比現實世界還真實。', function: 'Ni' }
            ];
            return chineseQuestions;
        } else {
            // English questions - 80 questions total (10 per function)
            const englishQuestions = [
                // EXTRAVERTED THINKING (Te) – Questions 1-10
                { id: 'Te_1', text: 'I like to organize things so they work better.', function: 'Te' },
                { id: 'Te_2', text: 'I make decisions based on facts everyone can see.', function: 'Te' },
                { id: 'Te_3', text: 'I prefer clear rules and systems to guide what I do.', function: 'Te' },
                { id: 'Te_4', text: 'I enjoy fixing problems in practical ways.', function: 'Te' },
                { id: 'Te_5', text: 'I want results that can be measured.', function: 'Te' },
                { id: 'Te_6', text: 'I like to plan ahead and set goals.', function: 'Te' },
                { id: 'Te_7', text: 'I feel good when things run smoothly and efficiently.', function: 'Te' },
                { id: 'Te_8', text: 'I often suggest improvements to make things work better.', function: 'Te' },
                { id: 'Te_9', text: 'I trust information that is proven and objective.', function: 'Te' },
                { id: 'Te_10', text: 'I like to be in control of projects or tasks.', function: 'Te' },

                // INTROVERTED THINKING (Ti) – Questions 11-20
                { id: 'Ti_1', text: 'I often think deeply about how things work inside.', function: 'Ti' },
                { id: 'Ti_2', text: 'I care about whether ideas make sense to me.', function: 'Ti' },
                { id: 'Ti_3', text: 'I like to figure out my own way of understanding things.', function: 'Ti' },
                { id: 'Ti_4', text: 'I question things quietly in my mind.', function: 'Ti' },
                { id: 'Ti_5', text: "I want my ideas to be clear and logical, even if others don't get them.", function: 'Ti' },
                { id: 'Ti_6', text: 'I enjoy solving puzzles or problems on my own.', function: 'Ti' },
                { id: 'Ti_7', text: 'I often notice inconsistencies in what people say.', function: 'Ti' },
                { id: 'Ti_8', text: "I have high standards for what I believe is true, even if I can't explain them well.", function: 'Ti' },
                { id: 'Ti_9', text: 'I like to analyze things until I really understand them.', function: 'Ti' },
                { id: 'Ti_10', text: 'I prefer to work things out in my head before talking.', function: 'Ti' },

                // EXTRAVERTED FEELING (Fe) – Questions 21-30
                { id: 'Fe_1', text: 'I care about how everyone around me feels.', function: 'Fe' },
                { id: 'Fe_2', text: 'I want people to get along and be happy together.', function: 'Fe' },
                { id: 'Fe_3', text: 'I often adjust what I say to avoid hurting others.', function: 'Fe' },
                { id: 'Fe_4', text: 'I notice when someone is uncomfortable in a group.', function: 'Fe' },
                { id: 'Fe_5', text: 'I like to help people feel included.', function: 'Fe' },
                { id: 'Fe_6', text: "I try to meet others' needs before my own.", function: 'Fe' },
                { id: 'Fe_7', text: 'I feel uneasy when there is conflict between people.', function: 'Fe' },
                { id: 'Fe_8', text: 'I often encourage others and boost their confidence.', function: 'Fe' },
                { id: 'Fe_9', text: 'I want to create harmony wherever I go.', function: 'Fe' },
                { id: 'Fe_10', text: 'I am sensitive to changes in the mood of a group.', function: 'Fe' },

                // INTROVERTED FEELING (Fi) – Questions 31-40
                { id: 'Fi_1', text: 'I make choices based on what feels right to me inside.', function: 'Fi' },
                { id: 'Fi_2', text: 'I have strong personal values that are hard to explain.', function: 'Fi' },
                { id: 'Fi_3', text: 'I need time alone to understand my feelings.', function: 'Fi' },
                { id: 'Fi_4', text: 'I prefer to act in ways that match my true self.', function: 'Fi' },
                { id: 'Fi_5', text: 'I care deeply about a few close people.', function: 'Fi' },
                { id: 'Fi_6', text: 'I keep my feelings private unless I trust someone.', function: 'Fi' },
                { id: 'Fi_7', text: "I feel uncomfortable pretending to be someone I'm not.", function: 'Fi' },
                { id: 'Fi_8', text: 'I am loyal to my beliefs even if others disagree.', function: 'Fi' },
                { id: 'Fi_9', text: 'I notice when something goes against my inner values.', function: 'Fi' },
                { id: 'Fi_10', text: 'I want my actions to be true to who I am.', function: 'Fi' },

                // EXTRAVERTED SENSING (Se) – Questions 41-50
                { id: 'Se_1', text: "I notice what's happening around me right away.", function: 'Se' },
                { id: 'Se_2', text: 'I like to experience new sights, sounds, and tastes.', function: 'Se' },
                { id: 'Se_3', text: 'I am quick to react to changes in my environment.', function: 'Se' },
                { id: 'Se_4', text: 'I enjoy activities that are hands-on and physical.', function: 'Se' },
                { id: 'Se_5', text: 'I trust what I see and hear directly.', function: 'Se' },
                { id: 'Se_6', text: 'I like to live in the moment.', function: 'Se' },
                { id: 'Se_7', text: 'I am drawn to excitement and action.', function: 'Se' },
                { id: 'Se_8', text: 'I often notice details others miss.', function: 'Se' },
                { id: 'Se_9', text: 'I like to try new things just for the experience.', function: 'Se' },
                { id: 'Se_10', text: "I feel best when I'm fully engaged with the world.", function: 'Se' },

                // INTROVERTED SENSING (Si) – Questions 51-60
                { id: 'Si_1', text: 'I compare new experiences to memories from my past.', function: 'Si' },
                { id: 'Si_2', text: 'I remember details about things that matter to me.', function: 'Si' },
                { id: 'Si_3', text: 'My past experiences affect how I see things now.', function: 'Si' },
                { id: 'Si_4', text: 'I like routines that make me feel comfortable.', function: 'Si' },
                { id: 'Si_5', text: "I notice when something feels different from what I'm used to.", function: 'Si' },
                { id: 'Si_6', text: 'I am sensitive to changes in my body or surroundings.', function: 'Si' },
                { id: 'Si_7', text: 'I prefer familiar places and activities.', function: 'Si' },
                { id: 'Si_8', text: 'I have strong likes and dislikes for certain foods, smells, or sounds.', function: 'Si' },
                { id: 'Si_9', text: 'I often think about how things used to be.', function: 'Si' },
                { id: 'Si_10', text: 'Some experiences feel timeless and stay with me for years.', function: 'Si' },

                // EXTRAVERTED INTUITION (Ne) – Questions 61-70
                { id: 'Ne_1', text: 'I see lots of possibilities in every situation.', function: 'Ne' },
                { id: 'Ne_2', text: 'I get excited by new ideas and opportunities.', function: 'Ne' },
                { id: 'Ne_3', text: 'I often connect things that seem unrelated.', function: 'Ne' },
                { id: 'Ne_4', text: 'I enjoy brainstorming and coming up with creative solutions.', function: 'Ne' },
                { id: 'Ne_5', text: 'I like to imagine how things could be different.', function: 'Ne' },
                { id: 'Ne_6', text: 'I am open to change and new experiences.', function: 'Ne' },
                { id: 'Ne_7', text: 'I enjoy exploring new topics and interests.', function: 'Ne' },
                { id: 'Ne_8', text: 'I often have many ideas at once.', function: 'Ne' },
                { id: 'Ne_9', text: 'I like to inspire others with new ways of thinking.', function: 'Ne' },
                { id: 'Ne_10', text: 'I feel energized by thinking about the future.', function: 'Ne' },

                // INTROVERTED INTUITION (Ni) – Questions 71-80
                { id: 'Ni_1', text: 'I often have sudden insights or "aha" moments.', function: 'Ni' },
                { id: 'Ni_2', text: 'I think about the deeper meaning behind things.', function: 'Ni' },
                { id: 'Ni_3', text: 'I trust my gut feelings about what will happen.', function: 'Ni' },
                { id: 'Ni_4', text: 'I focus on one main idea or vision at a time.', function: 'Ni' },
                { id: 'Ni_5', text: 'I like to find the hidden patterns in life.', function: 'Ni' },
                { id: 'Ni_6', text: 'I am drawn to symbols, dreams, or stories with deeper meaning.', function: 'Ni' },
                { id: 'Ni_7', text: 'Sometimes, I feel driven by strong inner images or visions.', function: 'Ni' },
                { id: 'Ni_8', text: 'I find it hard to explain my insights to others.', function: 'Ni' },
                { id: 'Ni_9', text: "I often sense what's coming before it happens.", function: 'Ni' },
                { id: 'Ni_10', text: 'My imagination feels more real than the outside world at times.', function: 'Ni' }
            ];
            return englishQuestions;
        }
    }
    
    updateUILanguage() {
        const t = translations[this.currentLanguage];
        
        // Helper function to safely update element content
        const safeUpdateElement = (id, property, value) => {
            const element = document.getElementById(id);
            if (element) {
                if (property === 'textContent') {
                    element.textContent = value;
                } else if (property === 'placeholder') {
                    element.placeholder = value;
                }
            } else {
                console.warn(`Element with id '${id}' not found`);
            }
        };
        
        // Update static text elements
        safeUpdateElement('main-title', 'textContent', t.mainTitle);
        safeUpdateElement('main-subtitle', 'textContent', t.mainSubtitle);
        safeUpdateElement('language-title', 'textContent', t.languageTitle);
        safeUpdateElement('participant-info-title', 'textContent', t.participantInfoTitle);
        safeUpdateElement('participant-id-label', 'textContent', t.participantIdLabel);
        safeUpdateElement('participant-id', 'placeholder', t.participantIdPlaceholder);
        safeUpdateElement('participant-age-label', 'textContent', t.ageLabel);
        safeUpdateElement('age-select', 'textContent', t.ageSelect);
        safeUpdateElement('participant-education-label', 'textContent', t.educationLabel);
        safeUpdateElement('education-select', 'textContent', t.educationSelect);
        safeUpdateElement('education-hs', 'textContent', t.educationHS);
        safeUpdateElement('education-sc', 'textContent', t.educationSC);
        safeUpdateElement('education-ba', 'textContent', t.educationBA);
        safeUpdateElement('education-ma', 'textContent', t.educationMA);
        safeUpdateElement('education-phd', 'textContent', t.educationPhD);
        safeUpdateElement('education-other', 'textContent', t.educationOther);
        safeUpdateElement('start-btn', 'textContent', t.startBtn);
        safeUpdateElement('strongly-disagree', 'textContent', t.stronglyDisagree);
        safeUpdateElement('neutral', 'textContent', t.neutral);
        safeUpdateElement('strongly-agree', 'textContent', t.stronglyAgree);
        safeUpdateElement('prev-btn', 'textContent', t.previous);
        safeUpdateElement('results-title', 'textContent', t.resultsTitle);
        safeUpdateElement('results-subtitle', 'textContent', t.resultsSubtitle);
        safeUpdateElement('thank-you-title', 'textContent', t.thankYouTitle);
        safeUpdateElement('thank-you-text', 'textContent', t.thankYouText);
        safeUpdateElement('completion-id-label', 'textContent', t.completionIdLabel);
        safeUpdateElement('functions-link', 'textContent', t.functionsReference);
        safeUpdateElement('download-btn', 'textContent', t.downloadResults);
        safeUpdateElement('restart-btn', 'textContent', t.takeAgain);
        
        // Update progress text if in assessment
        const assessmentScreen = document.getElementById('assessment-screen');
        if (assessmentScreen && assessmentScreen.classList.contains('active')) {
            const questionNumber = document.getElementById('question-number');
            if (questionNumber && this.questions && this.questions.length > 0) {
                questionNumber.textContent = t.questionOf
                    .replace('{current}', this.currentQuestionIndex + 1)
                    .replace('{total}', this.questions.length);
            }
            safeUpdateElement('time-estimate', 'textContent', t.estimatedTime);
        }
    }
    
    initializeFirebase() {
        // Firebase configuration for data collection
        const firebaseConfig = {
            apiKey: "AIzaSyDGVfBm3zO3K3EKN38ekZex9pIi4aHVk0o",
            authDomain: "jung8-a7bcc.firebaseapp.com",
            projectId: "jung8-a7bcc",
            storageBucket: "jung8-a7bcc.firebasestorage.app",
            messagingSenderId: "141359013150",
            appId: "1:141359013150:web:490eadf4c4a6b1ef50bd0f"
        };
        
        try {
            if (typeof firebase !== 'undefined') {
                firebase.initializeApp(firebaseConfig);
                this.db = firebase.firestore();
                this.auth = firebase.auth();
                console.log('Firebase initialized for data collection');
            }
        } catch (error) {
            console.log('Firebase not available, using local storage only:', error);
        }
    }
    
    async saveResultsToCloud(data) {
        if (!this.db || !this.auth) return { success: false, error: 'Firebase not available' };
        
        try {
            // Sign in anonymously for data collection
            if (!this.auth.currentUser) {
                await this.auth.signInAnonymously();
            }
            
            const docRef = await this.db.collection('interview-responses').add({
                ...data,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                sessionId: this.auth.currentUser.uid,
                userAgent: navigator.userAgent,
                screenResolution: `${screen.width}x${screen.height}`,
                completionTime: Date.now() - this.startTime
            });
            
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error saving to Firebase:', error);
            return { success: false, error: error.message };
        }
    }
    
    initializeApp() {
        this.bindEvents();
        this.showWelcomeScreen();
        this.updateUILanguage();
        
        // Handle hash navigation (for returning from Functions Reference)
        this.handleHashNavigation();
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => {
            this.handleHashNavigation();
        });
    }
    
    handleHashNavigation() {
        const hash = window.location.hash;
        if (hash === '#results' && this.results) {
            // If there are results and we're being asked to show them, do so
            this.showResultsScreen();
        }
    }
    
    bindEvents() {
        // Language selection (both welcome and assessment screens)
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchLanguage(e.target.dataset.lang);
            });
        });
        
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startAssessment();
        });
        
        // Rating buttons
        document.querySelectorAll('.rating-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectRating(parseInt(e.target.dataset.value));
            });
        });
        
        // Navigation
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });
        
        // Results actions
        document.getElementById('download-btn').addEventListener('click', () => {
            this.downloadResults();
        });
        
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartAssessment();
        });
    }
    
    switchLanguage(lang) {
        console.log('Switching to language:', lang);
        this.currentLanguage = lang;
        
        // Update all language button states
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Load questions for the new language
        this.questions = this.getQuestionsForLanguage(lang);
        console.log(`Loaded ${this.questions.length} questions for ${lang}`);
        
        // Update all UI text
        this.updateUILanguage();
        
        // If in assessment, update the current question
        const assessmentScreen = document.getElementById('assessment-screen');
        if (assessmentScreen && assessmentScreen.classList.contains('active')) {
            this.displayCurrentQuestion();
        }
        
        console.log(`Language switch complete to ${lang}`);
    }
    
    startAssessment() {
        // Set basic participant info without form elements
        this.participantInfo = {
            participantId: null,
            age: null,
            education: null,
            language: this.currentLanguage
        };
        
        this.startTime = Date.now();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.showAssessmentScreen();
        this.displayCurrentQuestion();
    }
    
    displayCurrentQuestion() {
        if (!this.questions || this.questions.length === 0) {
            console.error('No questions available');
            return;
        }
        
        const question = this.questions[this.currentQuestionIndex];
        if (!question) {
            console.error('Question not found at index:', this.currentQuestionIndex);
            return;
        }
        
        console.log('Displaying question:', question.text);
        const questionElement = document.getElementById('question-text');
        if (questionElement) {
            questionElement.textContent = question.text;
        } else {
            console.error('Question text element not found');
            return;
        }
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        
        const t = translations[this.currentLanguage];
        const questionNumber = document.getElementById('question-number');
        if (questionNumber && t && t.questionOf) {
            questionNumber.textContent = t.questionOf
                .replace('{current}', this.currentQuestionIndex + 1)
                .replace('{total}', this.questions.length);
        }
        
        // Clear previous selection
        document.querySelectorAll('.rating-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Show previous answer if exists
        const savedAnswer = this.answers[this.currentQuestionIndex];
        if (savedAnswer) {
            const selectedBtn = document.querySelector(`[data-value="${savedAnswer}"]`);
            if (selectedBtn) {
                selectedBtn.classList.add('selected');
            }
        }
        
        this.updateNavigationButtons();
    }
    
    selectRating(value) {
        console.log(`Selected rating ${value} for question ${this.currentQuestionIndex}`);
        this.answers[this.currentQuestionIndex] = value;
        
        // Update UI
        document.querySelectorAll('.rating-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        const selectedBtn = document.querySelector(`[data-value="${value}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        } else {
            console.warn(`Button with value ${value} not found`);
        }
        
        // Auto-advance to next question after a short delay
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++;
                this.displayCurrentQuestion();
            } else {
                console.log('Assessment complete, finishing...');
                this.finishAssessment();
            }
        }, 500); // 500ms delay to show selection before advancing
    }
    
    updateNavigationButtons() {
        document.getElementById('prev-btn').style.display = 
            this.currentQuestionIndex > 0 ? 'inline-block' : 'none';
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    }
    
    async finishAssessment() {
        console.log('Finishing assessment...');
        console.log('Answers collected:', Object.keys(this.answers).length);
        console.log('Total questions:', this.questions.length);
        
        // Ensure we have answers
        if (Object.keys(this.answers).length === 0) {
            console.error('No answers collected!');
            alert('No answers were collected. Please try the assessment again.');
            return;
        }
        
        this.calculateScores();
        console.log('Calculated scores:', this.scores);
        
        this.generateResults();
        console.log('Generated results:', this.results);
        
        // Generate completion ID
        this.completionId = 'JUNG-' + Date.now().toString(36).toUpperCase();
        
        // Save results
        const resultsData = {
            participantInfo: this.participantInfo,
            answers: this.answers,
            scores: this.scores,
            results: this.results,
            completionId: this.completionId,
            completionTime: Date.now() - this.startTime,
            timestamp: new Date().toISOString()
        };
        
        // Save to cloud if available
        await this.saveResultsToCloud(resultsData);
        
        // Save locally as backup
        localStorage.setItem(`assessment_${this.completionId}`, JSON.stringify(resultsData));
        
        console.log('Showing results screen...');
        this.showResultsScreen();
    }
    
    calculateScores() {
        // Initialize scores for all 8 cognitive functions
        this.scores = {
            Te: 0, Ti: 0, Fe: 0, Fi: 0,
            Se: 0, Si: 0, Ne: 0, Ni: 0
        };
        
        console.log('Starting score calculation...');
        
        // Calculate scores based on questions
        this.questions.forEach((question, index) => {
            const answer = this.answers[index];
            if (answer && question.function) {
                this.scores[question.function] += answer;
                console.log(`Question ${index}: ${question.function} += ${answer}`);
            }
        });
        
        console.log('Final scores:', this.scores);
        
        // Ensure we have valid scores
        const totalScore = Object.values(this.scores).reduce((a, b) => a + b, 0);
        if (totalScore === 0) {
            console.error('All scores are zero! Check question format.');
            // Set default scores for testing (using realistic absolute values)
            this.scores = { Te: 45, Ti: 38, Fe: 32, Fi: 52, Se: 28, Si: 41, Ne: 49, Ni: 55 };
        }
    }

    generateResults() {
        console.log('Generating results from scores:', this.scores);
        
        // Calculate absolute percentages based on maximum possible scores
        const maxPossiblePerQuestion = 5; // Rating scale 1-5 (was incorrectly 7)
        const questionsPerFunction = 7; // 7 questions per function (56 total / 8 functions)
        const maxPossiblePerFunction = maxPossiblePerQuestion * questionsPerFunction;
        
        // Also keep raw scores for debugging
        const rawScores = { ...this.scores };
        
        // Convert to absolute percentages (score / max possible for that function)
        const absolutePercentageScores = {};
        Object.keys(this.scores).forEach(func => {
            const rawScore = this.scores[func];
            const absolutePercentage = Math.round((rawScore / maxPossiblePerFunction) * 100);
            absolutePercentageScores[func] = Math.max(0, Math.min(100, absolutePercentage)); // Clamp between 0-100
        });
        
        // For comparison, also calculate relative percentages
        const totalScore = Object.values(this.scores).reduce((a, b) => a + b, 0);
        const relativePercentageScores = {};
        Object.keys(this.scores).forEach(func => {
            relativePercentageScores[func] = totalScore > 0 ? Math.round((this.scores[func] / totalScore) * 100) : 0;
        });
        
        console.log('Raw scores:', rawScores);
        console.log('Total raw score:', totalScore);
        console.log('Max possible per function:', maxPossiblePerFunction);
        console.log('Absolute percentage scores:', absolutePercentageScores);
        console.log('Relative percentage scores (old method):', relativePercentageScores);
        
        console.log('=== ABSOLUTE SCORE ANALYSIS ===');
        Object.keys(this.scores).forEach(func => {
            const rawScore = this.scores[func];
            const absolutePercentage = absolutePercentageScores[func];
            const relativePercentage = relativePercentageScores[func];
            console.log(`${func}: ${rawScore}/${maxPossiblePerFunction} = ${absolutePercentage}% absolute (was ${relativePercentage}% relative)`);
        });
        console.log('================================');
        
        // Use absolute percentages for type determination
        const percentageScores = absolutePercentageScores;
        
        // Apply Jung's psychological type theory to determine the correct type
        const typeResult = this.determineJungianType(percentageScores);
        
        // Get the function stack based on the determined type
        const functionStack = this.getFunctionStack(typeResult.dominantFunction, typeResult.auxiliaryFunction);
        
        // Get type description with debugging
        console.log('=== GETTING TYPE DESCRIPTION ===');
        console.log('Type to look up:', typeResult.type);
        console.log('Language:', this.currentLanguage);
        
        let typeDescription = null;
        
        // Try multiple approaches in order with better error handling
        try {
            // Method 1: Try getTypeDescription function
            if (typeof getTypeDescription === 'function') {
                console.log('Using getTypeDescription function');
                typeDescription = getTypeDescription(typeResult.type, this.currentLanguage);
                console.log('getTypeDescription result:', typeDescription);
            }
            
            // Method 2: Try window.getTypeDescription
            if (!typeDescription && typeof window.getTypeDescription === 'function') {
                console.log('Using window.getTypeDescription function');
                typeDescription = window.getTypeDescription(typeResult.type, this.currentLanguage);
                console.log('window.getTypeDescription result:', typeDescription);
            }
            
            // Method 3: Try direct typeDescriptions access
            if (!typeDescription && typeof typeDescriptions !== 'undefined' && typeDescriptions[typeResult.type]) {
                console.log('Using direct typeDescriptions access');
                const typeInfo = typeDescriptions[typeResult.type];
                typeDescription = {
                    description: typeInfo.description[this.currentLanguage] || typeInfo.description.en || typeInfo.description,
                    mostSimilar: typeInfo.mostSimilar[this.currentLanguage] || typeInfo.mostSimilar.en || typeInfo.mostSimilar,
                    mostComplementary: typeInfo.mostComplementary[this.currentLanguage] || typeInfo.mostComplementary.en || typeInfo.mostComplementary
                };
                console.log('Direct typeDescriptions result:', typeDescription);
            }
            
            // Method 4: Try window.typeDescriptions
            if (!typeDescription && typeof window.typeDescriptions !== 'undefined' && window.typeDescriptions[typeResult.type]) {
                console.log('Using window.typeDescriptions access');
                const typeInfo = window.typeDescriptions[typeResult.type];
                typeDescription = {
                    description: typeInfo.description[this.currentLanguage] || typeInfo.description.en || typeInfo.description,
                    mostSimilar: typeInfo.mostSimilar[this.currentLanguage] || typeInfo.mostSimilar.en || typeInfo.mostComplementary,
                    mostComplementary: typeInfo.mostComplementary[this.currentLanguage] || typeInfo.mostComplementary.en || typeInfo.mostComplementary
                };
                console.log('Window typeDescriptions result:', typeDescription);
            }
            
            // Method 5: Try fallback descriptions
            if (!typeDescription) {
                console.log('Using fallback type descriptions');
                console.log('Type being looked up:', typeResult.type);
                console.log('Available fallback types:', typeof fallbackTypeDescriptions !== 'undefined' ? Object.keys(fallbackTypeDescriptions) : 'fallbackTypeDescriptions not available');
                typeDescription = getFallbackTypeDescription(typeResult.type, this.currentLanguage);
                console.log('Fallback result:', typeDescription);
            }
            
        } catch (error) {
            console.error('Error getting type description:', error);
        }
        
        // Method 6: Create emergency fallback if all else fails
        if (!typeDescription) {
            console.warn('Creating emergency fallback description for', typeResult.type);
            const functionNames = {
                'Te': this.currentLanguage === 'zh' ? '外向思考' : 'Extraverted Thinking',
                'Ti': this.currentLanguage === 'zh' ? '內向思考' : 'Introverted Thinking',
                'Fe': this.currentLanguage === 'zh' ? '外向情感' : 'Extraverted Feeling',
                'Fi': this.currentLanguage === 'zh' ? '內向情感' : 'Introverted Feeling',
                'Se': this.currentLanguage === 'zh' ? '外向感覺' : 'Extraverted Sensing',
                'Si': this.currentLanguage === 'zh' ? '內向感覺' : 'Introverted Sensing',
                'Ne': this.currentLanguage === 'zh' ? '外向直覺' : 'Extraverted Intuition',
                'Ni': this.currentLanguage === 'zh' ? '內向直覺' : 'Introverted Intuition'
            };
            
            const domName = functionNames[typeResult.dominantFunction] || typeResult.dominantFunction;
            const auxName = functionNames[typeResult.auxiliaryFunction] || typeResult.auxiliaryFunction;
            
            typeDescription = {
                description: this.currentLanguage === 'zh' ? 
                    `類型 ${typeResult.type} 結合了 ${domName} 作為主導功能和 ${auxName} 作為輔助功能。這創造了一種獨特的認知模式，專注於特定的信息處理和決策方式。此類型的人傾向於依賴這兩種功能來理解世界並做出選擇。` :
                    `Type ${typeResult.type} combines ${domName} as the dominant function with ${auxName} as the auxiliary function. This creates a unique cognitive pattern focused on specific ways of processing information and making decisions. People of this type tend to rely on these two functions to understand the world and make choices.`,
                mostSimilar: this.currentLanguage === 'zh' ? 
                    `共享相同主導功能 (${domName}) 的其他類型` :
                    `Other types sharing the same dominant function (${domName})`,
                mostComplementary: this.currentLanguage === 'zh' ? 
                    `具有互補功能偏好的類型，特別是那些主導功能與此類型形成平衡的類型` :
                    `Types with complementary function preferences, especially those whose dominant functions balance this type`
            };
        }
        
        console.log('Final typeDescription:', typeDescription);
        console.log('================================');

        this.results = {
            percentageScores,
            dominantFunction: [typeResult.dominantFunction, percentageScores[typeResult.dominantFunction]],
            auxiliaryFunction: [typeResult.auxiliaryFunction, percentageScores[typeResult.auxiliaryFunction]],
            tertiaryFunction: [functionStack.tertiary, percentageScores[functionStack.tertiary]],
            inferiorFunction: [functionStack.inferior, percentageScores[functionStack.inferior]],
            functionStack: functionStack,
            jungianType: typeResult.type,
            axes: typeResult.axes,
            typeDescription: typeDescription
        };
        
        console.log('Final results object:', this.results);
        
        // Validate that typeDescription is properly set
        if (!this.results.typeDescription || !this.results.typeDescription.description) {
            console.error('typeDescription is still null or invalid after all attempts!');
        }
    }

    determineJungianType(percentageScores) {
        // Find the highest scoring function as the dominant
        const sortedFunctions = Object.entries(percentageScores)
            .sort(([,a], [,b]) => b - a);
        
        console.log('All functions sorted by score:', sortedFunctions);
        
        const dominantFunction = sortedFunctions[0][0];
        const dominantScore = sortedFunctions[0][1];
        
        console.log('Dominant function selected:', dominantFunction, 'with score:', dominantScore);
        
        // Apply Jung's rules to find the auxiliary function
        const auxiliaryFunction = this.findValidAuxiliary(dominantFunction, percentageScores);
        
        // Create the type name in uppercase
        const type = (dominantFunction + auxiliaryFunction).toUpperCase();
        
        // Determine the axes
        const axes = this.determineAxes(dominantFunction, auxiliaryFunction);
        
        console.log('Determined type:', {
            dominantFunction,
            auxiliaryFunction,
            type,
            axes,
            allScores: sortedFunctions
        });
        
        return {
            dominantFunction,
            auxiliaryFunction,
            type,
            axes
        };
    }

    findValidAuxiliary(dominantFunction, scores) {
        const irrationalFunctions = ['Ni', 'Ne', 'Si', 'Se'];
        const rationalFunctions = ['Ti', 'Te', 'Fi', 'Fe'];
        
        const isDominantIrrational = irrationalFunctions.includes(dominantFunction);
        const isDominantExtraverted = dominantFunction.startsWith('N') || dominantFunction.startsWith('S') ? 
            dominantFunction.endsWith('e') : dominantFunction.startsWith('Te') || dominantFunction.startsWith('Fe');
        
        // Rule 1: If dominant is irrational, auxiliary must be rational (and vice versa)
        const candidateFunctions = isDominantIrrational ? rationalFunctions : irrationalFunctions;
        
        // Rule 2: If dominant is extraverted, auxiliary must be introverted (and vice versa)
        const validCandidates = candidateFunctions.filter(func => {
            const isExtraverted = func.startsWith('N') || func.startsWith('S') ? 
                func.endsWith('e') : func.startsWith('Te') || func.startsWith('Fe');
            return isDominantExtraverted ? !isExtraverted : isExtraverted;
        });
        
        // Find the highest scoring valid candidate
        let bestAuxiliary = validCandidates[0];
        let bestScore = scores[bestAuxiliary] || 0;
        
        validCandidates.forEach(func => {
            if (scores[func] > bestScore) {
                bestScore = scores[func];
                bestAuxiliary = func;
            }
        });
        
        console.log('Valid auxiliary candidates:', validCandidates);
        console.log('Selected auxiliary:', bestAuxiliary);
        
        return bestAuxiliary;
    }

    determineAxes(dominantFunction, auxiliaryFunction) {
        // The four Jung axes: Ni-Se, Ne-Si, Fi-Te, Ti-Fe
        const axes = {
            'Ni': 'Se', 'Se': 'Ni',
            'Ne': 'Si', 'Si': 'Ne',
            'Fi': 'Te', 'Te': 'Fi',
            'Ti': 'Fe', 'Fe': 'Ti'
        };
        
        const dominantOpposite = axes[dominantFunction];
        const auxiliaryOpposite = axes[auxiliaryFunction];
        
        // One axis should be irrational (Ni-Se or Ne-Si), the other rational (Fi-Te or Ti-Fe)
        const irrationalAxis = ['Ni', 'Se'].includes(dominantFunction) ? 
            `${dominantFunction}-${dominantOpposite}` : 
            `${auxiliaryFunction}-${auxiliaryOpposite}`;
            
        const rationalAxis = ['Ti', 'Te', 'Fi', 'Fe'].includes(dominantFunction) ? 
            `${dominantFunction}-${dominantOpposite}` : 
            `${auxiliaryFunction}-${auxiliaryOpposite}`;
        
        return {
            irrational: irrationalAxis,
            rational: rationalAxis,
            dominant_inferior: `${dominantFunction}-${dominantOpposite}`,
            auxiliary_tertiary: `${auxiliaryFunction}-${auxiliaryOpposite}`
        };
    }

    getFunctionStack(dominantFunction, auxiliaryFunction) {
        // The four Jung axes determine the function stack
        const axes = {
            'Ni': 'Se', 'Se': 'Ni',
            'Ne': 'Si', 'Si': 'Ne',
            'Fi': 'Te', 'Te': 'Fi',
            'Ti': 'Fe', 'Fe': 'Ti'
        };
        
        return {
            dominant: dominantFunction,
            auxiliary: auxiliaryFunction,
            tertiary: axes[auxiliaryFunction],  // Opposite of auxiliary
            inferior: axes[dominantFunction]   // Opposite of dominant
        };
    }

    createTypeDescriptionSection(jungianType, typeDescription) {
        console.log('createTypeDescriptionSection called with:', { jungianType, typeDescription });
        
        // Additional validation
        if (!typeDescription || !typeDescription.description) {
            console.error('Invalid or missing typeDescription in createTypeDescriptionSection');
            
            // Try one more time to get the description
            if (typeof getTypeDescription === 'function') {
                typeDescription = getTypeDescription(jungianType, this.currentLanguage);
            }
            
            // If still no description, create a detailed error message
            if (!typeDescription || !typeDescription.description) {
                console.error('Failed to get type description after all attempts');
                return `
                    <div style="margin: 2rem 0; padding: 2rem; background: #ffe6e6; border-radius: 15px; border: 2px solid #ff4444;">
                        <h3 style="color: #cc0000; text-align: center;">Type Description Not Available</h3>
                        <p style="text-align: center; color: #666;">
                            Type description for ${jungianType} could not be loaded. 
                        </p>
                        <div style="text-align: center; color: #999; font-size: 0.9rem; margin-top: 1rem;">
                            <p>Debug info:</p>
                            <p>getTypeDescription: ${typeof getTypeDescription}</p>
                            <p>typeDescriptions: ${typeof typeDescriptions}</p>
                            <p>Current language: ${this.currentLanguage}</p>
                            <p>Requested type: ${ jungianType}</p>
                        </div>
                        <div style="text-align: center; margin-top: 1rem;">
                            <button onclick="console.log('Available types:', typeof typeDescriptions !== 'undefined' ? Object.keys(typeDescriptions) : 'none')" 
                                    style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                                Log Available Types to Console
                            </button>
                        </div>
                    </div>
                `;
            }
        }
        
        const title = this.currentLanguage === 'zh' ? '類型描述' : 'Type Description';
        const similarTitle = this.currentLanguage === 'zh' ? '最相似類型' : 'Most Similar Type';
        const complementaryTitle = this.currentLanguage === 'zh' ? '最互補類型' : 'Most Complementary Type';
        const explanationTitle = this.currentLanguage === 'zh' ? '如何理解"最相似"和"最互補"' : 'How to Read "Most Similar" and "Most Complementary"';
        
        const explanationText = this.currentLanguage === 'zh' ? {
            similar: '最相似：共享相同的主導功能（因此對生活有相同的核心取向），但輔助功能不同，導致世界觀相似但適應風格不同。',
            complementary: '最互補：具有相反的主導-輔助軸，通常提供對方最缺乏的東西（例如，Ni-Te vs. Se-Fi），這既可能具有挑戰性，也能促進成長。'
        } : {
            similar: 'Most similar: Shares the same dominant function (and thus the same core orientation to life), but with a different auxiliary, leading to similar worldview but different adaptation style.',
            complementary: 'Most complementary: Has the opposite dominant–auxiliary axis, typically providing what the other most lacks (e.g., Ni-Te vs. Se-Fi), which can be both challenging and growth-promoting.'
        };
        
        return `
            <div style="margin: 2rem 0; padding: 2rem; background: linear-gradient(135deg, #fff8f0 0%, #ffebe0 100%); border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">
                <h3 style="color: rgb(255, 149, 0); text-align: center; margin-bottom: 1.5rem;">${title}: ${jungianType}</h3>
                <p style="line-height: 1.8; color: #333; text-align: justify; margin-bottom: 2rem;">
                    ${typeDescription.description}
                </p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #4a90e2;">
                        <h4 style="color: #4a90e2; margin-bottom: 0.5rem;">${similarTitle}</h4>
                        <p style="color: #666; line-height: 1.6;">${typeDescription.mostSimilar}</p>
                    </div>
                    <div style="background: white; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #28a745;">
                        <h4 style="color: #28a745; margin-bottom: 0.5rem;">${complementaryTitle}</h4>
                        <p style="color: #666; line-height: 1.6;">${typeDescription.mostComplementary}</p>
                    </div>
                </div>
                
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border: 1px solid #dee2e6;">
                    <h4 style="color: #6c757d; margin-bottom: 1rem; font-size: 1.1rem;">${explanationTitle}</h4>
                    <div style="margin-bottom: 0.8rem;">
                        <strong style="color: #4a90e2;">${similarTitle}:</strong>
                        <span style="color: #666; line-height: 1.6;">${explanationText.similar}</span>
                    </div>
                    <div>
                        <strong style="color: #28a745;">${complementaryTitle}:</strong>
                        <span style="color: #666; line-height: 1.6;">${explanationText.complementary}</span>
                    </div>
                </div>
            </div>
        `;
    }

    createBarChart(percentageScores) {
        const functions = Object.entries(percentageScores).sort(([,a], [,b]) => b - a);
        
        let html = `
            <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); margin: 2rem 0;">
                <h4 style="color: #333; text-align: center; margin-bottom: 1.5rem; font-size: 1.2rem;">
                    ${this.currentLanguage === 'zh' ? '功能強度詳細分析' : 'Detailed Function Strength Analysis'}
                </h4>
                <p style="color: #666; text-align: center; margin-bottom: 2rem; font-size: 0.95rem;">
                    ${this.currentLanguage === 'zh' ? 
                        '每個功能的絕對分數（0-100%），基於您對該功能相關問題的回答' :
                        'Absolute score for each function (0-100%), based on your responses to questions about that function'
                    }
                </p>
                <div class="function-scores">
        `;
        
        functions.forEach(([func, score]) => {
            // Determine strength level and color
            let strengthLevel, strengthColor, strengthBg;
            if (score >= 80) {
                strengthLevel = this.currentLanguage === 'zh' ? '很強' : 'Very Strong';
                strengthColor = '#2e7d32';
                strengthBg = '#e8f5e8';
            } else if (score >= 60) {
                strengthLevel = this.currentLanguage === 'zh' ? '強' : 'Strong';
                strengthColor = '#388e3c';
                strengthBg = '#e8f5e8';
            } else if (score >= 40) {
                strengthLevel = this.currentLanguage === 'zh' ? '中等' : 'Moderate';
                strengthColor = '#f57c00';
                strengthBg = '#fff3e0';
            } else if (score >= 20) {
                strengthLevel = this.currentLanguage === 'zh' ? '弱' : 'Weak';
                strengthColor = '#e64a19';
                strengthBg = '#ffebee';
            } else {
                strengthLevel = this.currentLanguage === 'zh' ? '很弱' : 'Very Weak';
                strengthColor = '#c62828';
                strengthBg = '#ffebee';
            }
            
            html += `
                <div style="margin-bottom: 1rem; padding: 1rem; background: ${strengthBg}; border-radius: 10px; border-left: 4px solid ${strengthColor};">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <div style="font-weight: bold; font-size: 1.1rem; color: #333;">${func}</div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="background: ${strengthColor}; color: white; padding: 0.2rem 0.8rem; border-radius: 15px; font-size: 0.85rem; font-weight: bold;">
                                ${strengthLevel}
                            </span>
                            <div style="font-weight: bold; font-size: 1.2rem; color: ${strengthColor};">${score}%</div>
                        </div>
                    </div>
                    <div style="background: #f5f5f5; height: 12px; border-radius: 6px; overflow: hidden;">
                        <div style="background: linear-gradient(45deg, ${strengthColor}, ${strengthColor}dd); height: 100%; width: ${score}%; border-radius: 6px; transition: width 0.6s ease;"></div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
                <div style="margin-top: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #6c757d;">
                    <h5 style="color: #495057; margin-bottom: 0.8rem; font-size: 1rem;">
                        ${this.currentLanguage === 'zh' ? '如何解讀這些分數：' : 'How to interpret these scores:'}
                    </h5>
                    <ul style="color: #666; font-size: 0.9rem; line-height: 1.6; margin: 0; padding-left: 1.2rem;">
                        <li>${this.currentLanguage === 'zh' ? '<strong>80-100%:</strong> 很強 - 您非常偏好這種認知方式' : '<strong>80-100%:</strong> Very Strong - You strongly prefer this cognitive approach'}</li>
                        <li>${this.currentLanguage === 'zh' ? '<strong>60-79%:</strong> 強 - 您經常使用這種思維方式' : '<strong>60-79%:</strong> Strong - You frequently use this thinking style'}</li>
                        <li>${this.currentLanguage === 'zh' ? '<strong>40-59%:</strong> 中等 - 您有時會使用這種功能' : '<strong>40-59%:</strong> Moderate - You sometimes use this function'}</li>
                        <li>${this.currentLanguage === 'zh' ? '<strong>20-39%:</strong> 弱 - 您較少依賴這種方式' : '<strong>20-39%:</strong> Weak - You rely less on this approach'}</li>
                        <li>${this.currentLanguage === 'zh' ? '<strong>0-19%:</strong> 很弱 - 這不是您的自然傾向' : '<strong>0-19%:</strong> Very Weak - This is not your natural tendency'}</li>
                    </ul>
                </div>
            </div>
        `;
        
        return html;
    }

    createRadarChartVisualization(percentageScores) {
        const functions = ['Te', 'Ti', 'Fe', 'Fi', 'Se', 'Si', 'Ne', 'Ni'];
        
        // Fully optimized responsive sizing based on screen width
        const screenWidth = window.innerWidth;
        let size, maxRadius, containerMaxWidth, labelOffset, fontSize, percentFontSize, dataPointRadius, padding, margin;
        
        if (screenWidth <= 480) {
            // Ultra-small screens
            size = 270; // More compact size
            maxRadius = 90; // Smaller radius for better fit
            containerMaxWidth = '280px'; // Fixed width for consistency
            labelOffset = 22; // Minimal offset for tight layout
            fontSize = 9; // Smaller font
            percentFontSize = 7; // Smaller percentage font
            dataPointRadius = 2.5; // Smaller data points
            padding = '0.75rem'; // Minimal padding
            margin = '1rem'; // Reduced margin
        } else if (screenWidth <= 768) {
            // Mobile screens
            size = 330; // More appropriate for medium screens
            maxRadius = 110; // Better radius for medium screens
            containerMaxWidth = '340px'; // Fixed width for consistency
            labelOffset = 28; // Adjusted offset
            fontSize = 11; // Medium font
            percentFontSize = 8; // Medium percentage font
            dataPointRadius = 3; // Medium data points
            padding = '1rem'; // Medium padding
            margin = '1.5rem'; // Medium margin
        } else {
            // Desktop screens
            size = 480; // Slightly smaller for better proportions
            maxRadius = 170; // Slightly smaller radius
            containerMaxWidth = '500px'; // Fixed maximum width
            labelOffset = 45; // Standard offset
            fontSize = 14; // Standard font
            percentFontSize = 10; // Standard percentage font
            dataPointRadius = 4; // Standard data points
            padding = '2rem'; // Full padding
            margin = '2rem'; // Full margin
        }
        
        const center = size / 2;
        
        // Create improved SVG radar chart
        let svg = `
            <div class="radar-container" style="margin: ${margin} auto; max-width: ${containerMaxWidth}; display: flex; justify-content: center; align-items: center;">
                <div style="background: white; padding: ${padding}; border-radius: ${screenWidth <= 480 ? '10px' : '15px'}; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.08); width: 100%;">
                    <svg width="100%" height="${size}" viewBox="0 0 ${size} ${size}" style="margin: 0 auto; display: block;">
                        <!-- Background circles with percentage rings -->
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.2}" fill="none" stroke="#f5f5f5" stroke-width="${screenWidth <= 480 ? 1 : 2}"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.4}" fill="none" stroke="#e8e8e8" stroke-width="${screenWidth <= 480 ? 1 : 2}"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.6}" fill="none" stroke="#d0d0d0" stroke-width="${screenWidth <= 480 ? 1 : 2}"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.8}" fill="none" stroke="#b8b8b8" stroke-width="${screenWidth <= 480 ? 1 : 2}"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius}" fill="none" stroke="#999999" stroke-width="${screenWidth <= 480 ? 2 : 3}"/>
                        
                        <!-- Percentage labels on the vertical axis -->
                        <text x="${center + 5}" y="${center - maxRadius * 0.2 + 3}" text-anchor="start" fill="#888" font-size="${percentFontSize}">20%</text>
                        <text x="${center + 5}" y="${center - maxRadius * 0.4 + 3}" text-anchor="start" fill="#888" font-size="${percentFontSize}">40%</text>
                        <text x="${center + 5}" y="${center - maxRadius * 0.6 + 3}" text-anchor="start" fill="#888" font-size="${percentFontSize}">60%</text>
                        <text x="${center + 5}" y="${center - maxRadius * 0.8 + 3}" text-anchor="start" fill="#888" font-size="${percentFontSize}">80%</text>
                        <text x="${center + 5}" y="${center - maxRadius + 3}" text-anchor="start" fill="#888" font-size="${percentFontSize}">100%</text>
                        
                        <!-- Axis lines -->
        `;
        
        // Add axis lines and labels with better positioning for mobile
        functions.forEach((func, index) => {
            const angle = (index * 2 * Math.PI) / functions.length - Math.PI / 2;
            const x = center + Math.cos(angle) * maxRadius;
            const y = center + Math.sin(angle) * maxRadius;
            const labelX = center + Math.cos(angle) * (maxRadius + labelOffset);
            const labelY = center + Math.sin(angle) * (maxRadius + labelOffset);
            
            svg += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#ccc" stroke-width="${screenWidth <= 480 ? 1 : 2}"/>`;
            svg += `<text x="${labelX}" y="${labelY}" text-anchor="middle" dominant-baseline="central" fill="#333" font-size="${fontSize}" font-weight="bold">${func}</text>`;
        });
        
        // Create data polygon
        let polygonPoints = '';
        functions.forEach((func, index) => {
            const score = percentageScores[func] || 0;
            const angle = (index * 2 * Math.PI) / functions.length - Math.PI / 2;
            const radius = (score / 100) * maxRadius;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            polygonPoints += `${x},${y} `;
        });
        
        svg += `
                        <!-- Data polygon -->
                        <polygon points="${polygonPoints}" fill="rgba(255, 149, 0, 0.25)" stroke="rgb(255, 149, 0)" stroke-width="${screenWidth <= 480 ? 2 : 3}"/>
                        
                        <!-- Data points with values -->
        `;
        
        // Add data points with score labels - optimized for mobile
        functions.forEach((func, index) => {
            const score = percentageScores[func] || 0;
            const angle = (index * 2 * Math.PI) / functions.length - Math.PI / 2;
            const radius = (score / 100) * maxRadius;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            
            // Data point
            svg += `<circle cx="${x}" cy="${y}" r="${dataPointRadius}" fill="rgb(255, 149, 0)" stroke="white" stroke-width="${screenWidth <= 480 ? 1 : 2}"/>`;
            
            // Score label - improved positioning to prevent overlap
            let scoreLabelOffset;
            
            // Dynamically adjust label position based on score to prevent overlap
            if (score < 15) {
                scoreLabelOffset = Math.round(labelOffset * 0.85); // Move further out for very low scores
            } else if (score > 85) {
                scoreLabelOffset = Math.round(labelOffset * 0.5); // Keep closer for high scores
            } else {
                scoreLabelOffset = Math.round(labelOffset * 0.65);
            }
            
            // Further adjust for mobile - avoid placing labels too far
            if (screenWidth <= 480) {
                scoreLabelOffset = Math.min(scoreLabelOffset, 20);
            }
            
            const labelX = center + Math.cos(angle) * (radius + scoreLabelOffset);
            const labelY = center + Math.sin(angle) * (radius + scoreLabelOffset);
            
            // Add background circle for better readability (responsive sizing)
            const labelBgRadius = Math.round(dataPointRadius * (screenWidth <= 480 ? 2 : 2.5));
            svg += `<circle cx="${labelX}" cy="${labelY}" r="${labelBgRadius}" fill="white" stroke="rgb(255, 149, 0)" stroke-width="${screenWidth <= 480 ? 1 : 1.5}" opacity="0.9"/>`;
            svg += `<text x="${labelX}" y="${labelY}" text-anchor="middle" dominant-baseline="central" fill="rgb(255, 149, 0)" font-size="${percentFontSize}" font-weight="bold">${score}%</text>`;
        });
        
        svg += `
                        <!-- Center dot -->
                        <circle cx="${center}" cy="${center}" r="${Math.round(dataPointRadius * 0.8)}" fill="#666"/>
                    </svg>
                </div>
            </div>
        `;
        
        return svg;
    }

    createFunctionAxesVisualization(functionStack) {
        if (!this.results.axes) {
            return '';
        }
        
        const { axes, percentageScores } = this.results;
        
        return `
            <div style="margin: 2rem 0; padding: 2rem; background: white; border-radius: 10px; border: 1px solid #ddd;">
                <h3 style="color: #333; text-align: center; margin-bottom: 2rem; font-size: 1.3rem;">
                    ${this.currentLanguage === 'zh' ? '類型分析' : 'Type Analysis'}
                </h3>
                
                <!-- Function Stack -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #333; text-align: center; margin-bottom: 1rem; font-size: 1.1rem;">
                        ${this.currentLanguage === 'zh' ? '功能堆疊' : 'Function Stack'}
                    </h4>
                    <div class="function-stack-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.8rem; max-width: 600px; margin: 0 auto;">
                        
                        <div style="background: #f8f9fa; border: 2px solid #666; padding: 1rem; border-radius: 8px; text-align: center;">
                            <div style="font-weight: bold; font-size: 1.1rem; color: #333;">${functionStack.dominant}</div>
                            <div style="font-size: 0.8rem; margin: 0.3rem 0; color: #666;">
                                ${this.currentLanguage === 'zh' ? '主導' : 'Dominant'}
                            </div>
                            <div style="font-size: 0.9rem; color: #333;">${percentageScores[functionStack.dominant]}%</div>
                        </div>
                        
                        <div style="background: #f8f9fa; border: 2px solid #999; padding: 1rem; border-radius: 8px; text-align: center;">
                            <div style="font-weight: bold; font-size: 1.1rem; color: #333;">${functionStack.auxiliary}</div>
                            <div style="font-size: 0.8rem; margin: 0.3rem 0; color: #666;">
                                ${this.currentLanguage === 'zh' ? '輔助' : 'Auxiliary'}
                            </div>
                            <div style="font-size: 0.9rem; color: #333;">${percentageScores[functionStack.auxiliary]}%</div>
                        </div>
                        
                        <div style="background: #f8f9fa; border: 2px solid #ccc; padding: 1rem; border-radius: 8px; text-align: center;">
                            <div style="font-weight: bold; font-size: 1.1rem; color: #666;">${functionStack.tertiary}</div>
                            <div style="font-size:  0.8rem; margin: 0.3rem 0; color: #666;">
                                ${this.currentLanguage === 'zh' ? '第三' : 'Tertiary'}
                            </div>
                            <div style="font-size: 0.9rem; color: #666;">${percentageScores[functionStack.tertiary]}%</div>
                        </div>
                        
                        <div style="background: #f8f9fa; border: 2px solid #ddd; padding: 1rem; border-radius: 8px; text-align: center;">
                            <div style="font-weight: bold; font-size: 1.1rem; color: #999;">${functionStack.inferior}</div>
                            <div style="font-size: 0.8rem; margin: 0.3rem 0; color: #666;">
                                ${this.currentLanguage === 'zh' ? '劣勢' : 'Inferior'}
                            </div>
                            <div style="font-size: 0.9rem; color: #999;">${percentageScores[functionStack.inferior]}%</div>
                        </div>
                        
                    </div>
                </div>
                
                <!-- Jung's Axes -->
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #333;">
                    <h4 style="color: #333; text-align: center; margin-bottom: 1rem; font-size: 1.1rem;">
                        ${this.currentLanguage === 'zh' ? 'Jung的四個軸線' : "Jung's Four Axes"}
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1rem;">
                        <div style="text-align: center;">
                            <strong style="color: #333; font-size: 1rem;">
                                ${this.currentLanguage === 'zh' ? '無理性軸線' : 'Irrational Axis'}
                            </strong>
                            <div style="margin: 0.5rem 0; font-size: 1.1rem; font-weight: bold; color: #333;">
                                ${axes.irrational}
                            </div>
                            <div style="font-size: 0.85rem; color: #666;">
                                ${this.currentLanguage === 'zh' ? '(感知功能)' : '(Perception Functions)'}
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <strong style="color: #333; font-size: 1rem;">
                                ${this.currentLanguage === 'zh' ? '理性軸線' : 'Rational Axis'}
                            </strong>
                            <div style="margin: 0.5rem 0; font-size: 1.1rem; font-weight: bold; color: #333;">
                                ${axes.rational}
                            </div>
                            <div style="font-size: 0.85rem; color: #666;">
                                ${this.currentLanguage === 'zh' ? '(判斷功能)' : '(Judgment Functions)'}
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center; font-size: 0.9rem; color: #666; border-top: 1px solid #ddd; padding-top: 1rem;">
                        ${this.currentLanguage === 'zh' ? 
                            '每個人都有一個無理性軸線(感知)和一個理性軸線(判斷)' : 
                            'Each person has one irrational axis (perception) and one rational axis (judgment)'}
                    </div>
                </div>
                
                <!-- Type Explanation -->
                <div style="margin-top: 1.5rem; padding: 1.5rem; background: #fff; border: 1px solid #ddd; border-radius: 8px;">
                    <h4 style="color: #333; margin-bottom: 1rem; font-size: 1.1rem;">
                        ${this.currentLanguage === 'zh' ? '您的類型: ' : 'Your Type: '}${this.results.jungianType}
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem; color: #666;">
                        <div>
                            <strong>${this.currentLanguage === 'zh' ? '主導-劣勢軸線:' : 'Dominant-Inferior Axis:'}</strong>
                            <div style="margin-top: 0.3rem;">${axes.dominant_inferior}</div>
                        </div>
                        <div>
                            <strong>${this.currentLanguage === 'zh' ? '輔助-第三軸線:' : 'Auxiliary-Tertiary Axis:'}</strong>
                            <div style="margin-top: 0.3rem;">${axes.auxiliary_tertiary}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    displayResults() {
        const container = document.getElementById('results-content');
        if (!container || !this.results) {
            console.error('Cannot display results: Container or results missing');
            return;
        }
        
        console.log('Displaying results:', this.results);
        
        const { percentageScores, dominantFunction, auxiliaryFunction, functionStack, jungianType, typeDescription } = this.results;
        
        // Generate content
        let html = `
            <div class="results-summary">
                <h2>${this.currentLanguage === 'zh' ? '您的榮格認知功能結果' : 'Your Jungian Cognitive Function Results'}</h2>
                <p style="font-size: 1.5rem; font-weight: bold; margin: 1rem 0;">${this.currentLanguage === 'zh' ? '類型' : 'Type'}: ${jungianType}</p>
                <p>${this.currentLanguage === 'zh' ? '主導功能' : 'Dominant Function'}: ${dominantFunction[0]} (${dominantFunction[1]}%)</p>
                <p>${this.currentLanguage === 'zh' ? '輔助功能' : 'Auxiliary Function'}: ${auxiliaryFunction[0]} (${auxiliaryFunction[1]}%)</p>
            </div>
        `;
        
        // Add type description section
        if (typeDescription) {
            html += this.createTypeDescriptionSection(jungianType, typeDescription);
        }
        
        // Add radar chart visualization with extra spacing
        html += this.createRadarChartVisualization(percentageScores);
        
        // Add function axes visualization with extra spacing
        html += this.createFunctionAxesVisualization(functionStack);
        
        // Add bar chart visualization with extra spacing
        html += `<div style="margin-top: 4rem;"><h3 style="text-align: center; color: rgb(255, 149, 0); margin: 2rem 0 1rem;">${this.currentLanguage === 'zh' ? '認知功能評分' : 'Cognitive Function Scores'}</h3></div>`;
        html += this.createBarChart(percentageScores);
        
        container.innerHTML = html;
        
        // Show the Functions Reference link now that assessment is complete
        this.showFunctionsReference();
        
        // Set completion ID
        const completionIdElement = document.getElementById('completion-id');
        if (completionIdElement && this.completionId) {
            completionIdElement.textContent = this.completionId;
        }
    }

    downloadResults() {
        if (!this.results) {
            alert('No results to download');
            return;
        }
        
        const data = {
            participantInfo: this.participantInfo,
            results: this.results,
            completionId: this.completionId,
            timestamp: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `jung-assessment-${this.completionId}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    restartAssessment() {
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.scores = {};
        this.results = null;
        this.completionId = null;
        this.showWelcomeScreen();
    }

    showResultsScreen() {
        this.showScreen('results');
        this.displayResults();
        
        // Scroll to top of results
        window.scrollTo(0, 0);
    }
    
    // Add missing showScreen method
    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(`${screenName}-screen`).classList.add('active');
    }
    
    showWelcomeScreen() {
        this.showScreen('welcome');
    }
    
    showAssessmentScreen() {
        this.showScreen('assessment');
    }

    showFunctionsReference() {
        const functionsNav = document.querySelector('.functions-nav');
        if (functionsNav) {
            functionsNav.style.display = 'block';
        }
    }

    // Continue with the rest of the methods...
    // Note: I'll add the remaining methods in the next part due to length constraints
}

// Global function for Functions Reference navigation (accessible from HTML onclick)
function navigateToFunctionsReference() {
    // Check if we're currently on the results screen
    const resultsScreen = document.getElementById('results-screen');
    const isOnResults = resultsScreen && resultsScreen.classList.contains('active');
    
    if (isOnResults) {
        // Navigate with parameter indicating we came from results
        window.location.href = 'functions-reference.html?from=results';
    } else {
        // Navigate normally
        window.location.href = 'functions-reference.html';
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Additional check after DOM is loaded
    console.log('=== POST-DOM TYPE DESCRIPTIONS CHECK ===');
    console.log('typeDescriptions available:', typeof typeDescriptions);
    console.log('getTypeDescription available:', typeof getTypeDescription);
    if (typeof typeDescriptions !== 'undefined') {
        console.log('Available types:', Object.keys(typeDescriptions));
        // Test a specific type
        console.log('Test NITE description:', typeDescriptions['NITE']);
    }
    console.log('==========================================');
    
    // Check if external question files are loaded
    const hasChineseQuestions = typeof getChineseQuestions === 'function';
    const hasEnglishQuestions = typeof getEnglishQuestions === 'function';
    const hasAllQuestions = typeof getAllQuestions === 'function';
    
    console.log('External question files status:', {
        hasChineseQuestions,
        hasEnglishQuestions,
        hasAllQuestions
    });
    
    if (!hasChineseQuestions) {
        console.warn('questions-zh.js not loaded, will use fallback questions for Chinese');
    }
    if (!hasEnglishQuestions) {
        console.warn('questions-en.js not loaded, will use fallback questions for English');
    }
    
    window.jungApp = new WebJungianAssessment();
});
