// Web-optimized Jungian Assessment Application

// Debug: Check if type descriptions are loaded
console.log('=== TYPE DESCRIPTIONS DEBUG ===');
console.log('typeDescriptions available:', typeof typeDescriptions);
console.log('getTypeDescription available:', typeof getTypeDescription);
if (typeof typeDescriptions !== 'undefined') {
    console.log('Available types:', Object.keys(typeDescriptions));
}
console.log('================================');

// Emergency fallback type descriptions
const fallbackTypeDescriptions = {
    'NITE': {
        description: {
            en: "These types are guided by profound, often symbolic inner images and archetypal patterns. Their orientation to life is visionary: they sense the underlying currents and inevitable directions of events, often long before others do. This \"inner seeing\" is not vague fantasy, but a focused, almost prophetic perception of what is to come, which they strive to realize through effective, objective action.",
            zh: "這些類型被深刻的、通常是象徵性的內在圖像和原型模式所引導。他們對生活的取向是有遠見的：他們感知到事件的潛在趨勢和不可避免的方向，通常遠早於其他人。"
        },
        mostSimilar: {
            en: "NIFE (shares Ni dominance, but with a focus on harmony and empathy)",
            zh: "NIFE (共享Ni主導，但專注於和諧與同理心)"
        },
        mostComplementary: {
            en: "SEFI (Se-Fi axis: present-focused, authentic, and attuned to immediate experience, balancing Ni-Te's future orientation and abstraction)",
            zh: "SEFI (Se-Fi軸：專注於當下、真實、並與即時體驗相連，平衡Ni-Te的未來導向和抽象性)"
        }
    }
    // Add more types as needed
};

function getFallbackTypeDescription(type, currentLanguage) {
    const typeInfo = fallbackTypeDescriptions[type];
    if (!typeInfo) return null;
    return {
        description: typeInfo.description[currentLanguage] || typeInfo.description.en,
        mostSimilar: typeInfo.mostSimilar[currentLanguage] || typeInfo.mostSimilar.en,
        mostComplementary: typeInfo.mostComplementary[currentLanguage] || typeInfo.mostComplementary.en
    };
}

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
        const functions = ['Te', 'Ti', 'Fe', 'Fi', 'Se', 'Si', 'Ne', 'Ni'];
        const questions = [];
        
        const questionTemplates = {
            en: {
                Te: [
                    "I naturally organize external systems according to logical principles that others can verify.",
                    "My thinking gains energy when I can apply established frameworks to improve real-world efficiency.",
                    "I tend to make decisions using objective data that is independent of personal opinions.",
                    "I am most intellectually satisfied when my logical analysis produces measurable external results.",
                    "I tend to evaluate ideas primarily based on their practical applicability to concrete situations.",
                    "I am inclined to create systematized approaches that can be universally implemented.",
                    "I focus on establishing cause-and-effect relationships that can be observed in the external world."
                ],
                Ti: [
                    "I am primarily concerned with developing my own internal logical framework, even if it's difficult to explain to others.",
                    "I often find myself silently questioning accepted ideas, following inner logical processes that others rarely see.",
                    "I tend to develop theories from internal intuition rather than external data, though I may struggle to prove this to others.",
                    "My thinking begins with subjective insights and returns to refining my internal understanding.",
                    "I formulate problems and create theories that emerge from my own internal logical development.",
                    "I find it difficult to articulate my thought processes because they follow my own internal logical sequences.",
                    "I am more interested in the subjective logical relationships between ideas than their external applications."
                ],
                Fe: [
                    "I naturally attune to and respond to the emotional atmosphere of the groups around me.",
                    "I feel energized when I can create harmony and positive emotional connections between people.",
                    "I tend to make decisions based on what will benefit the collective well-being of those involved.",
                    "I find myself naturally perceiving others' emotional needs and adjusting my behavior accordingly.",
                    "I prefer to follow universally accepted values and social standards in interpersonal relationships.",
                    "I feel uncomfortable when there is emotional tension or discord in my environment.",
                    "I tend to express emotions in ways that are appropriate to the social context I'm in."
                ],
                Fi: [
                    "I make decisions based on deeply personal values that I find difficult to explain or justify to others.",
                    "I tend to have strong internal emotional reactions that are largely invisible to the outside world.",
                    "I maintain my personal authenticity even when it conflicts with external expectations or social pressure.",
                    "I feel energized when my actions are in complete alignment with my personal conscience and inner moral standards.",
                    "I form deep, selective emotional connections while maintaining silent inner standards for relationships.",
                    "I find it nearly impossible to explain my value judgments because they feel self-evidently right to me.",
                    "I am primarily concerned with maintaining inner emotional harmony according to my personal moral compass."
                ],
                Se: [
                    "I am naturally drawn to rich, immediate sensory experiences in my current environment.",
                    "I feel most alive when I am actively engaged with concrete reality in real-time.",
                    "I tend to notice and quickly respond to changes and opportunities in my physical environment.",
                    "I gain energy through hands-on interaction with tangible objects and situations.",
                    "I prefer learning through direct sensory experience rather than theoretical instruction.",
                    "I find myself naturally noticing aesthetic details like colors, textures, and spatial arrangements.",
                    "I tend to trust information gained through my direct, immediate sensory observations."
                ],
                Si: [
                    "I tend to compare new experiences against my internal catalog of past sensory memories, each uniquely colored by my subjective reactions.",
                    "I naturally notice subtle changes in my internal bodily sensations and their distinctive subjective qualities.",
                    "My past experiences seem to have a timeless quality that continuously colors and influences my current perceptions.",
                    "I am more concerned with my subjective response to stimuli than the objective qualities of the stimuli themselves.",
                    "I tend to notice discrepancies between how I internally sense things should feel versus external reality.",
                    "I gain energy through preserving and maintaining the subjective qualities of meaningful sensory experiences.",
                    "I prefer to process sensory information slowly, allowing my unique internal reactions to fully develop."
                ],
                Ne: [
                    "I naturally see multiple possibilities and potential outcomes emerging from any external situation.",
                    "I feel energized when I can explore new connections between different ideas and external concepts.",
                    "I tend to focus on what might emerge or develop from current external circumstances.",
                    "I am drawn to collaborating with others in brainstorming and generating creative alternatives.",
                    "I prefer to keep my options open rather than committing to a single predetermined external path.",
                    "I find myself naturally seeing patterns and relationships in the external world that others might miss.",
                    "I am motivated by the potential for innovation and transformation in external systems and situations."
                ],
                Ni: [
                    "I tend to receive sudden insights about archetypal patterns and symbolic meanings behind experiences.",
                    "I am naturally drawn to understanding universal, symbolic elements that govern life and human experience.",
                    "I find myself having internal visions or clear symbolic images about how deeper patterns will unfold.",
                    "I prefer to develop one central archetypal insight deeply rather than exploring many surface options.",
                    "I tend to synthesize complex information into unified, symbolic understanding that feels timeless and universal.",
                    "I gain energy through pursuing a single, meaningful direction that feels connected to archetypal or eternal patterns.",
                    "I feel compulsively driven by internal images and visions that demand to be understood and expressed."
                ]
            },
            zh: {
                Te: [
                    "我自然地根據他人可以驗證的邏輯原則來組織外部系統。",
                    "當我能將既定框架應用於改善現實世界的效率時，我的思維會獲得能量。",
                    "我傾向於使用獨立於個人意見的客觀數據來做決定。",
                    "當我的邏輯分析產生可測量的外部結果時，我在智力上最感滿足。",
                    "我傾向於主要根據想法對具體情況的實際適用性來評估想法。",
                    "我傾向於創建可以普遍實施的系統化方法。",
                    "我專注於建立可以在外部世界中觀察到的因果關係。"
                ],
                Ti: [
                    "我主要關心發展自己的內在邏輯框架，即使很難向他人解釋。",
                    "我經常發現自己默默質疑被接受的想法，遵循他人很少看到的內在邏輯過程。",
                    "我傾向於從內在直覺而非外部數據發展理論，儘管我可能難以向他人證明這一點。",
                    "我的思維始於主觀洞察，並回歸於完善我的內在理解。",
                    "我制定問題並創建從我自己內在邏輯發展中產生的理論。",
                    "我發現很難表達我的思維過程，因為它們遵循我自己的內在邏輯序列。",
                    "我對想法之間的主觀邏輯關係比它們的外在應用更感興趣。"
                ],
                Fe: [
                    "我自然地調節並回應周圍群體的情感氛圍。",
                    "當我能在人與人之間創造和諧和積極的情感聯繫時，我感到精力充沛。",
                    "我傾向於根據什麼能使相關人員的集體福祉受益來做決定。",
                    "我發現自己自然地察覺他人的情感需求並相應地調整我的行為。",
                    "我偏好在人際關係中遵循普遍接受的價值觀和社會標準。",
                    "當我的環境中存在情感緊張或不和諧時，我感到不舒服。",
                    "我傾向於以適合我所處社會環境的方式表達情感。"
                ],
                Fi: [
                    "我根據我發現難以向他人解釋或證明的深層個人價值觀做決定。",
                    "我傾向於有強烈的內在情感反應，這些反應在很大程度上對外界是不可見的。",
                    "即使與外部期望或社會壓力衝突，我也會保持我的個人真實性。",
                    "當我的行為與我的個人良心和內在道德標準完全一致時，我感到精力充沛。",
                    "我建立深層、選擇性的情感聯繫，同時保持對關係的無聲內在標準。",
                    "我發現幾乎不可能解釋我的價值判斷，因為它們對我來說感覺是不言而喻的正確。",
                    "我主要關心根據我個人的道德指南針維持內在情感和諧。"
                ],
                Se: [
                    "我自然地被當前環境中豐富、即時的感官體驗所吸引。",
                    "當我積極參與實時的具體現實時，我感到最有活力。",
                    "我傾向於注意並快速回應我身體環境中的變化和機會。",
                    "我通過與有形物體和情況的實際互動體驗而獲得能量。",
                    "我偏好通過直接感官體驗而非理論指導來學習。",
                    "我發現自己自然地察覺美學細節，如顏色、質地和空間安排。",
                    "我傾向於信任通過我直接、即時感官觀察獲得的信息。"
                ],
                Si: [
                    "我傾向於將新體驗與我內在的過去感官記憶目錄進行比較，每個記憶都被我的主觀反應獨特地著色。",
                    "我自然地察覺我內在身體感覺的細微變化及其獨特的主觀品質。",
                    "我的過去體驗似乎具有永恆的品質，持續地著色並影響我當前的感知。",
                    "我更關注我對刺激的主觀反應，而不是刺激本身的客觀品質。",
                    "我傾向於注意我內在感覺事物應該如何感覺與外部現實之間的差異。",
                    "我通過保存和維持有意義感官體驗的主觀品質而獲得能量。",
                    "我偏好緩慢地處理感官信息，讓我獨特的內在反應充分發展。"
                ],
                Ne: [
                    "我自然地看到從任何外部情況中出現的多種可能性和潛在結果。",
                    "當我能探索不同想法和外部概念之間的新聯繫時，我感到精力充沛。",
                    "我傾向於關注當前外部環境中可能出現或發展的東西。",
                    "我被與他人合作進行頭腦風暴和產生創意替代方案所吸引。",
                    "我偏好保持我的選擇開放，而不是承諾單一的預定外部路徑。",
                    "我發現自己自然地看到外部世界中他人可能錯過的模式和關係。",
                    "我受到外部系統和情況中創新和變革潛力的激勵。"
                ],
                Ni: [
                    "我傾向於接收關於體驗背後原型模式和象徵意義的突然洞察。",
                    "我自然地被理解支配生活和人類體驗的普遍、象徵元素所吸引。",
                    "我發現自己有內在願景或清晰的象徵圖像，關於更深層模式將如何展開。",
                    "我偏好深度發展一個中心原型洞察，而不是探索許多表面選項。",
                    "我傾向於將複雜信息綜合為統一的、象徵性的理解，感覺永恆和普遍。",
                    "我通過追求感覺與原型或永恆模式相連的單一、有意義的方向而獲得能量。",
                    "我感到被內在圖像和願景強迫性地驅動，這些圖像和願景要求被理解和表達。"
                ]
            }
        };
        
        const templates = questionTemplates[lang] || questionTemplates.en;
        
        functions.forEach(func => {
            const funcTemplates = templates[func] || templates.Te;
            funcTemplates.forEach((text, index) => {
                questions.push({
                    id: `${func}_${index + 1}`,
                    text: text,
                    function: func
                });
            });
        });
        
        return questions;
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
        // Collect participant info
        this.participantInfo = {
            participantId: document.getElementById('participant-id').value || null,
            age: document.getElementById('participant-age').value || null,
            education: document.getElementById('participant-education').value || null,
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
            // Set default scores for testing
            this.scores = { Te: 25, Ti: 20, Fe: 15, Fi: 30, Se: 10, Si: 25, Ne: 35, Ni: 40 };
        }
    }
    
    generateResults() {
        console.log('Generating results from scores:', this.scores);
        
        // Convert scores to percentages
        const totalScore = Object.values(this.scores).reduce((a, b) => a + b, 0);
        const percentageScores = {};
        
        Object.keys(this.scores).forEach(func => {
            percentageScores[func] = Math.round((this.scores[func] / totalScore) * 100);
        });
        
        console.log('Percentage scores:', percentageScores);
        
        // Apply Jung's psychological type theory to determine the correct type
        const typeResult = this.determineJungianType(percentageScores);
        
        // Get the function stack based on the determined type
        const functionStack = this.getFunctionStack(typeResult.dominantFunction, typeResult.auxiliaryFunction);
        
        // Get type description with debugging
        console.log('=== GETTING TYPE DESCRIPTION ===');
        console.log('Type to look up:', typeResult.type);
        console.log('Language:', this.currentLanguage);
        
        let typeDescription = null;
        
        // Try multiple approaches in order
        if (typeof getTypeDescription === 'function') {
            console.log('Using getTypeDescription function');
            typeDescription = getTypeDescription(typeResult.type, this.currentLanguage);
        } else if (typeof window.getTypeDescription === 'function') {
            console.log('Using window.getTypeDescription function');
            typeDescription = window.getTypeDescription(typeResult.type, this.currentLanguage);
        } else if (typeof typeDescriptions !== 'undefined' && typeDescriptions[typeResult.type]) {
            console.log('Using direct typeDescriptions access');
            const typeInfo = typeDescriptions[typeResult.type];
            typeDescription = {
                description: typeInfo.description[this.currentLanguage] || typeInfo.description.en,
                mostSimilar: typeInfo.mostSimilar[this.currentLanguage] || typeInfo.mostSimilar.en,
                mostComplementary: typeInfo.mostComplementary[this.currentLanguage] || typeInfo.mostComplementary.en
            };
        } else if (typeof window.typeDescriptions !== 'undefined' && window.typeDescriptions[typeResult.type]) {
            console.log('Using window.typeDescriptions access');
            const typeInfo = window.typeDescriptions[typeResult.type];
            typeDescription = {
                description: typeInfo.description[this.currentLanguage] || typeInfo.description.en,
                mostSimilar: typeInfo.mostSimilar[this.currentLanguage] || typeInfo.mostSimilar.en,
                mostComplementary: typeInfo.mostComplementary[this.currentLanguage] || typeInfo.mostComplementary.en
            };
        } else {
            console.log('Using fallback type descriptions');
            typeDescription = getFallbackTypeDescription(typeResult.type, this.currentLanguage);
        }
        
        // If still no description, create a basic one
        if (!typeDescription) {
            console.warn('Creating basic fallback description for', typeResult.type);
            typeDescription = {
                description: `Type ${typeResult.type} combines ${typeResult.dominantFunction} as the dominant function with ${typeResult.auxiliaryFunction} as the auxiliary function. This creates a unique cognitive pattern focused on specific ways of processing information and making decisions.`,
                mostSimilar: `Types sharing the same dominant function (${typeResult.dominantFunction})`,
                mostComplementary: `Types with complementary function preferences`
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
    }

    determineJungianType(percentageScores) {
        // Find the highest scoring function as the dominant
        const sortedFunctions = Object.entries(percentageScores)
            .sort(([,a], [,b]) => b - a);
        
        const dominantFunction = sortedFunctions[0][0];
        
        // Apply Jung's rules to find the auxiliary function
        const auxiliaryFunction = this.findValidAuxiliary(dominantFunction, percentageScores);
        
        // Create the type name
        const type = dominantFunction + auxiliaryFunction;
        
        // Determine the axes
        const axes = this.determineAxes(dominantFunction, auxiliaryFunction);
        
        console.log('Determined type:', {
            dominantFunction,
            auxiliaryFunction,
            type,
            axes
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
        
        // If no type description, try to get it directly
        if (!typeDescription) {
            console.warn('No type description provided, trying to get it directly...');
            
            // Try multiple ways to get the type description
            if (typeof getTypeDescription === 'function') {
                typeDescription = getTypeDescription(jungianType, this.currentLanguage);
                console.log('Direct getTypeDescription call result:', typeDescription);
            } else if (typeof window.getTypeDescription === 'function') {
                typeDescription = window.getTypeDescription(jungianType, this.currentLanguage);
                console.log('Window getTypeDescription call result:', typeDescription);
            } else if (typeof typeDescriptions !== 'undefined' && typeDescriptions[jungianType]) {
                const typeInfo = typeDescriptions[jungianType];
                typeDescription = {
                    description: typeInfo.description[this.currentLanguage] || typeInfo.description.en,
                    mostSimilar: typeInfo.mostSimilar[this.currentLanguage] || typeInfo.mostSimilar.en,
                    mostComplementary: typeInfo.mostComplementary[this.currentLanguage] || typeInfo.mostComplementary.en
                };
                console.log('Direct typeDescriptions access result:', typeDescription);
            }
        }
        
        if (!typeDescription) {
            console.warn('Still no type description available for', jungianType);
            return `
                <div style="margin: 2rem 0; padding: 2rem; background: #ffe6e6; border-radius: 15px; border: 2px solid #ff4444;">
                    <h3 style="color: #cc0000; text-align: center;">Type Description Not Available</h3>
                    <p style="text-align: center; color: #666;">
                        Type description for ${jungianType} could not be loaded. Please check the type-descriptions.js file.
                    </p>
                    <p style="text-align: center; color: #999; font-size: 0.9rem;">
                        Debug info: getTypeDescription = ${typeof getTypeDescription}, typeDescriptions = ${typeof typeDescriptions}
                    </p>
                </div>
            `;
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
                <h3 style="color: #ff8c00; text-align: center; margin-bottom: 1.5rem;">${title}: ${jungianType}</h3>
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
        
        let html = '<div class="function-scores">';
        
        functions.forEach(([func, score]) => {
            html += `
                <div class="function-card">
                    <div class="function-name">${func}</div>
                    <div class="function-score">${score}%</div>
                    <div style="background: #e9ecef; height: 10px; border-radius: 5px; margin-top: 0.5rem;">
                        <div style="background: linear-gradient(45deg, #ff8c00, #ff6347); height: 100%; width: ${score}%; border-radius: 5px; transition: width 0.3s ease;"></div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    createRadarChartVisualization(percentageScores) {
        const functions = ['Te', 'Ti', 'Fe', 'Fi', 'Se', 'Si', 'Ne', 'Ni'];
        const size = 800;
        const center = size / 2;
        const maxRadius = 300;
        
        // Create SVG radar chart
        let svg = `
            <div class="radar-container" style="margin: 3rem auto; max-width: 800px; display: flex; justify-content: center; align-items: center;">
                <div style="background: white; padding: 2rem; border-radius: 15px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.1); width: 100%;">
                    <svg width="100%" height="800" viewBox="0 0 ${size} ${size}" style="margin: 0 auto; display: block;">
                        <!-- Background circles with percentage rings -->
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.2}" fill="none" stroke="#f5f5f5" stroke-width="2"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.4}" fill="none" stroke="#e8e8e8" stroke-width="2"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.6}" fill="none" stroke="#d0d0d0" stroke-width="2"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius * 0.8}" fill="none" stroke="#b8b8b8" stroke-width="2"/>
                        <circle cx="${center}" cy="${center}" r="${maxRadius}" fill="none" stroke="#999999" stroke-width="3"/>
                        
                        <!-- Percentage labels on the vertical axis -->
                        <text x="${center + 10}" y="${center - maxRadius * 0.2 + 8}" text-anchor="start" fill="#888" font-size="16">20%</text>
                        <text x="${center + 10}" y="${center - maxRadius * 0.4 + 8}" text-anchor="start" fill="#888" font-size="16">40%</text>
                        <text x="${center + 10}" y="${center - maxRadius * 0.6 + 8}" text-anchor="start" fill="#888" font-size="16">60%</text>
                        <text x="${center + 10}" y="${center - maxRadius * 0.8 + 8}" text-anchor="start" fill="#888" font-size="16">80%</text>
                        <text x="${center + 10}" y="${center - maxRadius + 8}" text-anchor="start" fill="#888" font-size="16">100%</text>
                        
                        <!-- Axis lines -->
        `;
        
        // Add axis lines and labels
        functions.forEach((func, index) => {
            const angle = (index * 2 * Math.PI) / functions.length - Math.PI / 2;
            const x = center + Math.cos(angle) * maxRadius;
            const y = center + Math.sin(angle) * maxRadius;
            const labelX = center + Math.cos(angle) * (maxRadius + 60);
            const labelY = center + Math.sin(angle) * (maxRadius + 60);
            
            svg += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#ccc" stroke-width="2"/>`;
            svg += `<text x="${labelX}" y="${labelY}" text-anchor="middle" dominant-baseline="central" fill="#333" font-size="28" font-weight="bold">${func}</text>`;
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
                        <polygon points="${polygonPoints}" fill="rgba(255, 140, 0, 0.25)" stroke="#ff8c00" stroke-width="4"/>
                        
                        <!-- Data points with values -->
        `;
        
        // Add data points with score labels
        functions.forEach((func, index) => {
            const score = percentageScores[func] || 0;
            const angle = (index * 2 * Math.PI) / functions.length - Math.PI / 2;
            const radius = (score / 100) * maxRadius;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            
            // Data point
            svg += `<circle cx="${x}" cy="${y}" r="10" fill="#ff8c00" stroke="white" stroke-width="4"/>`;
            
            // Score label near the point
            const labelOffset = 25;
            const labelX = x + Math.cos(angle) * labelOffset;
            const labelY = y + Math.sin(angle) * labelOffset;
            svg += `<text x="${labelX}" y="${labelY}" text-anchor="middle" dominant-baseline="central" fill="#ff8c00" font-size="18" font-weight="bold">${score}%</text>`;
        });
        
        svg += `
                        <!-- Center dot -->
                        <circle cx="${center}" cy="${center}" r="8" fill="#666"/>
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
                    ${this.currentLanguage === 'zh' ? 'Jung氏類型分析' : 'Jungian Type Analysis'}
                </h3>
                
                <!-- Function Stack -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #333; text-align: center; margin-bottom: 1rem; font-size: 1.1rem;">
                        ${this.currentLanguage === 'zh' ? '功能堆疊 (依照Jung理論)' : 'Function Stack (According to Jung)'}
                    </h4>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.8rem; max-width: 600px; margin: 0 auto;">
                        
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
                            <div style="font-size: 0.8rem; margin: 0.3rem 0; color: #666;">
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
        
        // Add radar chart visualization
        html += this.createRadarChartVisualization(percentageScores);
        
        // Add function axes visualization
        html += this.createFunctionAxesVisualization(functionStack);
        
        // Add bar chart visualization
        html += `<h3 style="text-align: center; color: #ff8c00; margin: 2rem 0 1rem;">${this.currentLanguage === 'zh' ? '認知功能評分' : 'Cognitive Function Scores'}</h3>`;
        html += this.createBarChart(percentageScores);
        
        container.innerHTML = html;
        
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
    

