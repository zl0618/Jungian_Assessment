// Chinese Question Bank for Jungian Cognitive Function Assessment
// 榮格認知功能評估中文題庫

const questionsZH = [
    // EXTRAVERTED THINKING (Te) – Questions 1-10
    { id: "Te_1", text: "我會自然而然地從不同來源整合資訊，創造新的架構或系統。", function: "Te" },
    { id: "Te_2", text: "當我分析某件事時，腦中已經在思考如何把它重組得更好，或與其他元素結合。", function: "Te" },
    { id: "Te_3", text: "即使舊方法還能用，我也會忍不住想用更有效的方法取而代之。。", function: "Te" },
    { id: "Te_4", text: "我的思考總是向前推進——很少停留在過去的想法，而是想著如何進一步發展。", function: "Te" },
    { id: "Te_5", text: "比起個人見解，我更信任能被外部、客觀證據驗證的結論。", function: "Te" },
    { id: "Te_6", text: "有時我會太相信自己的邏輯架構，以至於把其他觀點直接否定掉。。", function: "Te" },
    { id: "Te_7", text: "當別人沒有按照我認為明顯的邏輯步驟行事時，我會變得不耐煩或不以為然。。", function: "Te" },
    { id: "Te_8", text: "我傾向於把複雜的人際情境簡化為邏輯公式，即使這樣未必完全適用。。", function: "Te" },
    { id: "Te_9", text: "即使沒有人請求，我有時也會把自己的組織方式強加給他人。。", function: "Te" },
    { id: "Te_10", text: "當主觀因素（情感、個人價值觀）干擾我認為最有效率的解決方案時，我會感到挫折。", function: "Te" },

    // INTROVERTED THINKING (Ti) – Questions 11-20
    { id: "Ti_1", text: "當主觀因素（情感、個人價值觀）干擾我認為最有效率的解決方案時，我會感到挫折。", function: "Ti" },
    { id: "Ti_2", text: "即使沒有足夠的事實支持，我也常常會自己創建理論架構。。", function: "Ti" },
    { id: "Ti_3", text: "當我遇到新資訊時，會立刻嘗試把它納入自己的內在邏輯體系，而不是直接接受表面內容。", function: "Ti" },
    { id: "Ti_4", text: "我喜歡在腦中把問題完全想通，即使這比實際操作要花更久的時間。。", function: "Ti" },
    { id: "Ti_5", text: "即使無法完全解釋原因，我也更相信自己的邏輯推理，而非專家意見或既定方法。。", function: "Ti" },
    { id: "Ti_6", text: "我常常因為考慮太多細節與例外，把簡單問題變得複雜，最後連原本重點都不見了。", function: "Ti" },
    { id: "Ti_7", text: "別人要求我在理論尚未完善時就提出實際應用，會讓我感到困擾。", function: "Ti" },
    { id: "Ti_8", text: "當外部事實不符合我的內在邏輯模型時，即使那些事實很有根據，我有時也會忽略它們。", function: "Ti" },
    { id: "Ti_9", text: "即使我的邏輯很清楚，我也常常難以用別人能理解的方式解釋自己的想法。", function: "Ti" },
    { id: "Ti_10", text: "當別人質疑我的推理，尤其是他們只關心實用而非邏輯一致時，我會變得防衛或不以為然。", function: "Ti" },

    // EXTRAVERTED FEELING (Fe) – Questions 21-30
    { id: "Fe_1", text: "我會自然而然地調整自己的情感表達，以符合團體的氣氛和期待，即使這意味著要暫時壓抑自己的感受。", function: "Fe" },
    { id: "Fe_2", text: "當我幫助營造和諧、正向的人際關係時，會感到充滿活力。", function: "Fe" },
    { id: "Fe_3", text: "我很樂於參與支持共同價值、促進團結的社會或文化活動。", function: "Fe" },
    { id: "Fe_4", text: "我常常能感受到別人的情感需求，甚至在他們還沒開口之前就主動給予幫助。", function: "Fe" },
    { id: "Fe_5", text: "我重視傳統和社會規範，因為它們能帶來歸屬感與秩序。", function: "Fe" },
    { id: "Fe_6", text: "當我的個人情感可能破壞團體和諧時，我有時會難以表達出來。", function: "Fe" },
    { id: "Fe_7", text: "我會根據不同的人或情境調整自己的情感立場，有時因此顯得不夠一致。", function: "Fe" },
    { id: "Fe_8", text: "我偶爾會懷疑自己的感受到底是發自內心，還是受到周遭影響。", function: "Fe" },
    { id: "Fe_9", text: "當環境中出現衝突或不和諧時，我會感到不安或焦慮。", function: "Fe" },
    { id: "Fe_10", text: "如果批判性或邏輯性的想法可能破壞團體的情感平衡，我有時會選擇不去思考這些。", function: "Fe" },

    // INTROVERTED FEELING (Fi) – Questions 31-40
    { id: "Fi_1", text: "即使和他人期待不同，我也會根據自己內心的價值觀做決定。", function: "Fi" },
    { id: "Fi_2", text: "我會努力以真誠、忠於自我的方式行事，不受外界壓力影響。", function: "Fi" },
    { id: "Fi_3", text: "當身邊的事情違背我內心的是非標準時，即使我不說出口，也會強烈感受到。", function: "Fi" },
    { id: "Fi_4", text: "我對少數幾個重要的人或信念有很深的忠誠。", function: "Fi" },
    { id: "Fi_5", text: "我傾向於先在心裡釐清和消化自己的感受，只有在必要時才會分享。", function: "Fi" },
    { id: "Fi_6", text: "雖然我內心很清楚，但有時還是難以向別人解釋自己最深層的感受或價值觀。", function: "Fi" },
    { id: "Fi_7", text: "當別人不理解或不重視我在意的事物時，我會覺得被誤解。", function: "Fi" },
    { id: "Fi_8", text: "假裝在意自己其實不在乎的事，會讓我感到不自在。", function: "Fi" },
    { id: "Fi_9", text: "即使很難用邏輯說明，我有時也會堅持自己的信念或感受。", function: "Fi" },
    { id: "Fi_10", text: "如果在團體中感覺自己的價值觀或感受不被尊重，我可能會選擇沉默或退縮。", function: "Fi" },

    // EXTRAVERTED SENSING (Se) – Questions 41-50
    { id: "Se_1", text: "當我全身心投入於當下的視覺、聽覺和感官體驗時，會覺得最有活力。", function: "Se" },
    { id: "Se_2", text: "我很快就能察覺到環境中的變化或細節，常常比別人更敏銳。", function: "Se" },
    { id: "Se_3", text: "我喜歡尋找新鮮、刺激或需要身體參與的體驗。", function: "Se" },
    { id: "Se_4", text: "比起抽象理論，我更相信自己能直接看見、聽見、觸摸或測量到的事物。", function: "Se" },
    { id: "Se_5", text: "我常常依照當下情況即興行動，而不是事先做詳細規劃。", function: "Se" },
    { id: "Se_6", text: "如果某些計畫或想法沒有明確、直接的影響，我有時很難專注於長遠目標或抽象可能性。", function: "Se" },
    { id: "Se_7", text: "如果沒辦法積極參與身邊的世界，我會感到不耐煩或無聊。", function: "Se" },
    { id: "Se_8", text: "當我沉浸於當下的刺激時，有時會忽略潛在的後果。", function: "Se" },
    { id: "Se_9", text: "有時我會把眼前的享受或舒適放在規則、傳統或長遠目標之前。", function: "Se" },
    { id: "Se_10", text: "即使別人覺得重要，我有時也會忽略那些無法直接感受到或經驗到的事物。", function: "Se" },

    // INTROVERTED SENSING (Si) – Questions 51-60
    { id: "Si_1", text: "我會注意到環境中細微的變化或自己內在的反應，這些常常是別人沒發現的。", function: "Si" },
    { id: "Si_2", text: "即使難以解釋，我也會依賴自己內在對舒適或合適的感覺。", function: "Si" },
    { id: "Si_3", text: "即使外在沒有明顯變化，我也能敏銳地感受到一個地方的氣氛或情緒。", function: "Si" },
    { id: "Si_4", text: "我常常把自己最強烈的感官反應藏在心裡，因為很難用語言表達。", function: "Si" },
    { id: "Si_5", text: "新的經驗常常會給我留下強烈的個人印象，例如某種特定的味道、氣味或感覺，即使很難形容，也會長時間留在心裡。", function: "Si" },
    { id: "Si_6", text: "如果突然的改變打亂了我內在的平衡，我可能會很難適應。", function: "Si" },
    { id: "Si_7", text: "即使別人覺得改變是好事，我有時還是會抗拒改變習慣或環境。", function: "Si" },
    { id: "Si_8", text: "我有時會太專注於自己的感受印象，以致忽略了周遭發生的事。", function: "Si" },
    { id: "Si_9", text: "我有時很難解釋為什麼某些感覺或經驗會對我產生這麼大的影響。", function: "Si" },
    { id: "Si_10", text: "當我的內在感覺和外在現實不一致時，我會感到不安。", function: "Si" },

    // EXTRAVERTED INTUITION (Ne) – Questions 61-70
    { id: "Ne_1", text: "當別人只看到表面時，我能很快發現新的可能性或聯繫。", function: "Ne" },
    { id: "Ne_2", text: "探索新想法、新計畫或新機會會讓我感到充滿活力，即使這些還沒經過驗證或很不尋常。", function: "Ne" },
    { id: "Ne_3", text: "當事情卡住或停滯時，我喜歡集思廣益，想出有創意的解決方法。", function: "Ne" },
    { id: "Ne_4", text: "我常常用「未來可能性」而不是「現狀」來激勵他人。", function: "Ne" },
    { id: "Ne_5", text: "相較於穩定和一成不變的狀態，我更喜歡變化和多樣，否則會覺得被束縛。", function: "Ne" },
    { id: "Ne_6", text: "一旦我了解某件事的運作或潛力，就會很快失去興趣，轉而尋找下一個挑戰。", function: "Ne" },
    { id: "Ne_7", text: "當我被困在例行公事或缺乏新機會時，會變得焦躁或不滿。", function: "Ne" },
    { id: "Ne_8", text: "我有時會忽略實際細節或當下需求，因為我更關心未來的可能性或改進空間。", function: "Ne" },
    { id: "Ne_9", text: "別人有時會覺得我反覆無常或不可靠，因為我常常從一個想法或興趣跳到另一個。", function: "Ne" },
    { id: "Ne_10", text: "我常常還沒完成一個計畫或想法，就已經迫不及待想開始下一個，因為我對「下一步」比「現在」更感興趣。", function: "Ne" },

    // INTROVERTED INTUITION (Ni) – Questions 71-80
    { id: "Ni_1", text: "我常常會突然領悟到事物之間的關聯或未來可能發生什麼，即使說不清楚原因。", function: "Ni" },
    { id: "Ni_2", text: "我喜歡探究事件、圖像或想法背後更深層的意義或象徵，而不只是接受表面現象。", function: "Ni" },
    { id: "Ni_3", text: "我常常專注於一個主要的想法或願景，讓它在腦中慢慢展開，直到看清它的走向。", function: "Ni" },
    { id: "Ni_4", text: "即使缺乏明確證據，我也會相信自己對事物發展方向的直覺或內在感受。", function: "Ni" },
    { id: "Ni_5", text: "有時我的想像世界比現實還要真實或鮮明，我會沉浸在內心的畫面或願景中。", function: "Ni" },
    { id: "Ni_6", text: "我有時很難把自己的洞見或願景用別人能理解的方式解釋出來。", function: "Ni" },
    { id: "Ni_7", text: "我可能會太沉浸在內心世界，以致忽略現實中的細節或正在發生的事。", function: "Ni" },
    { id: "Ni_8", text: "因為我總是在等一個明確的內在指引或願景，有時會拖延行動或做決定。", function: "Ni" },
    { id: "Ni_9", text: "別人有時覺得我神祕、難以捉摸，因為我專注於他們看不到或無法衡量的東西。", function: "Ni" },
    { id: "Ni_10", text: "當我追尋內心意義時，可能會與現實脫節，忽略實際需求或人際關係。", function: "Ni" }
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
