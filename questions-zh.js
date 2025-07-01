// Chinese Question Bank for Jungian Cognitive Function Assessment
// 榮格認知功能評估中文題庫

const questionsZH = [
    // Te (外向思維) Questions
    { id: "Te_1", text: "我自然地根據他人可以驗證的邏輯原則來組織外部系統。", function: "Te" },
    { id: "Te_2", text: "當我能將既定框架應用於改善現實世界的效率時，我的思維會獲得能量。", function: "Te" },
    { id: "Te_3", text: "我傾向於使用獨立於個人意見的客觀數據來做決定。", function: "Te" },
    { id: "Te_4", text: "當我的邏輯分析產生可測量的外部結果時，我在智力上最感滿足。", function: "Te" },
    { id: "Te_5", text: "我傾向於主要根據想法對具體情況的實際適用性來評估想法。", function: "Te" },
    { id: "Te_6", text: "我傾向於創建可以普遍實施的系統化方法。", function: "Te" },
    { id: "Te_7", text: "我專注於建立可以在外部世界中觀察到的因果關係。", function: "Te" },
    { id: "Te_8", text: "我偏好使用具體、可證明的事實，而非抽象的理論推測。", function: "Te" },
    { id: "Te_9", text: "我通過思維與客觀現實的對應程度來衡量思維的價值。", function: "Te" },
    { id: "Te_10", text: "當我能將邏輯原則轉化為有效的外部行動時，我感到精力充沛。", function: "Te" },

    // Ti (內向思維) Questions
    { id: "Ti_1", text: "我主要關心發展自己的內在邏輯框架，即使很難向他人解釋。", function: "Ti" },
    { id: "Ti_2", text: "我經常發現自己默默質疑被接受的想法，遵循他人很少看到的內在邏輯過程。", function: "Ti" },
    { id: "Ti_3", text: "我傾向於從內在直覺而非外部數據發展理論，儘管我可能難以向他人證明這一點。", function: "Ti" },
    { id: "Ti_4", text: "我的思維始於主觀洞察，並回歸於完善我的內在理解。", function: "Ti" },
    { id: "Ti_5", text: "我制定問題並創建從我自己內在邏輯發展中產生的理論。", function: "Ti" },
    { id: "Ti_6", text: "我發現很難表達我的思維過程，因為它們遵循我自己的內在邏輯序列。", function: "Ti" },
    { id: "Ti_7", text: "我對想法之間的主觀邏輯關係比它們的外在應用更感興趣。", function: "Ti" },
    { id: "Ti_8", text: "我傾向於僅僅因為想法被普遍接受而對其持懷疑態度，更偏好我自己的無聲標準。", function: "Ti" },
    { id: "Ti_9", text: "我經常對邏輯真理有清楚的內在信念，但無法輕易向他人傳達。", function: "Ti" },
    { id: "Ti_10", text: "當我達到內在一致的理解時，我感到最滿足，無論是否得到外部驗證。", function: "Ti" },

    // Fe (外向情感) Questions
    { id: "Fe_1", text: "我自然地調節並回應周圍群體的情感氛圍。", function: "Fe" },
    { id: "Fe_2", text: "當我能在人與人之間創造和諧和積極的情感聯繫時，我感到精力充沛。", function: "Fe" },
    { id: "Fe_3", text: "我傾向於根據什麼能使相關人員的集體福祉受益來做決定。", function: "Fe" },
    { id: "Fe_4", text: "我發現自己自然地察覺他人的情感需求並相應地調整我的行為。", function: "Fe" },
    { id: "Fe_5", text: "我偏好在人際關係中遵循普遍接受的價值觀和社會標準。", function: "Fe" },
    { id: "Fe_6", text: "當我的環境中存在情感緊張或不和諧時，我感到不舒服。", function: "Fe" },
    { id: "Fe_7", text: "我傾向於以適合我所處社會環境的方式表達情感。", function: "Fe" },
    { id: "Fe_8", text: "我受到對共享情感體驗和集體和諧做出貢獻的激勵。", function: "Fe" },
    { id: "Fe_9", text: "我自然地調整我的溝通風格以與不同類型的人建立聯繫。", function: "Fe" },
    { id: "Fe_10", text: "當我能幫助他人感到情感上受到重視和支持時，我感到最充實。", function: "Fe" },

    // Fi (內向情感) Questions
    { id: "Fi_1", text: "我根據我發現難以向他人解釋或證明的深層個人價值觀做決定。", function: "Fi" },
    { id: "Fi_2", text: "我傾向於有強烈的內在情感反應，這些反應在很大程度上對外界是不可見的。", function: "Fi" },
    { id: "Fi_3", text: "即使與外部期望或社會壓力衝突，我也會保持我的個人真實性。", function: "Fi" },
    { id: "Fi_4", text: "當我的行為與我的個人良心和內在道德標準完全一致時，我感到精力充沛。", function: "Fi" },
    { id: "Fi_5", text: "我建立深層、選擇性的情感聯繫，同時保持對關係的無聲內在標準。", function: "Fi" },
    { id: "Fi_6", text: "我發現幾乎不可能解釋我的價值判斷，因為它們對我來說感覺是不言而喻的正確。", function: "Fi" },
    { id: "Fi_7", text: "我主要關心根據我個人的道德指南針維持內在情感和諧。", function: "Fi" },
    { id: "Fi_8", text: "我傾向於對誰允許進入我的內在情感世界非常有選擇性。", function: "Fi" },
    { id: "Fi_9", text: "我偏好私下處理我的感情，然後表達它們，如果我表達的話。", function: "Fi" },
    { id: "Fi_10", text: "當我的外在行動完美地反映我的內在價值觀時，我感到最滿足，即使他人不理解。", function: "Fi" },

    // Se (外向感覺) Questions
    { id: "Se_1", text: "我自然地被當前環境中豐富、即時的感官體驗所吸引。", function: "Se" },
    { id: "Se_2", text: "當我積極參與實時的具體現實時，我感到最有活力。", function: "Se" },
    { id: "Se_3", text: "我傾向於注意並快速回應我身體環境中的變化和機會。", function: "Se" },
    { id: "Se_4", text: "我通過與有形物體和情況的實際互動體驗而獲得能量。", function: "Se" },
    { id: "Se_5", text: "我偏好通過直接感官體驗而非理論指導來學習。", function: "Se" },
    { id: "Se_6", text: "我發現自己自然地察覺美學細節，如顏色、質地和空間安排。", function: "Se" },
    { id: "Se_7", text: "我傾向於信任通過我直接、即時感官觀察獲得的信息。", function: "Se" },
    { id: "Se_8", text: "我受到擁有新的和多樣的身體體驗的機會所激勵。", function: "Se" },
    { id: "Se_9", text: "我自然地調整我的行為以匹配情況的即時具體要求。", function: "Se" },
    { id: "Se_10", text: "當我能在當下活動中充分調動我的感官時，我感到最滿足。", function: "Se" },

    // Si (內向感覺) Questions
    { id: "Si_1", text: "我傾向於將新體驗與我內在的過去感官記憶目錄進行比較，每個記憶都被我的主觀反應獨特地著色。", function: "Si" },
    { id: "Si_2", text: "我自然地察覺我內在身體感覺的細微變化及其獨特的主觀品質。", function: "Si" },
    { id: "Si_3", text: "我的過去體驗似乎具有永恆的品質，持續地著色並影響我當前的感知。", function: "Si" },
    { id: "Si_4", text: "我更關注我對刺激的主觀反應，而不是刺激本身的客觀品質。", function: "Si" },
    { id: "Si_5", text: "我傾向於注意我內在感覺事物應該如何感覺與外部現實之間的差異。", function: "Si" },
    { id: "Si_6", text: "我通過保存和維持有意義感官體驗的主觀品質而獲得能量。", function: "Si" },
    { id: "Si_7", text: "我偏好緩慢地處理感官信息，讓我獨特的內在反應充分發展。", function: "Si" },
    { id: "Si_8", text: "我對特定感官體驗有強烈的偏好，基於它們對我的個人、主觀意義。", function: "Si" },
    { id: "Si_9", text: "我的感官感知更多地受到我內在主觀狀態而非客觀屬性的影響。", function: "Si" },
    { id: "Si_10", text: "當前體驗經常似乎存在於一個神話世界中，物體承載著比其表面現實更深、更個人的意義。", function: "Si" },

    // Ne (外向直覺) Questions
    { id: "Ne_1", text: "我自然地看到從任何外部情況中出現的多種可能性和潛在結果。", function: "Ne" },
    { id: "Ne_2", text: "當我能探索不同想法和外部概念之間的新聯繫時，我感到精力充沛。", function: "Ne" },
    { id: "Ne_3", text: "我傾向於關注當前外部環境中可能出現或發展的東西。", function: "Ne" },
    { id: "Ne_4", text: "我被與他人合作進行頭腦風暴和產生創意替代方案所吸引。", function: "Ne" },
    { id: "Ne_5", text: "我偏好保持我的選擇開放，而不是承諾單一的預定外部路徑。", function: "Ne" },
    { id: "Ne_6", text: "我發現自己自然地看到外部世界中他人可能錯過的模式和關係。", function: "Ne" },
    { id: "Ne_7", text: "我受到外部系統和情況中創新和變革潛力的激勵。", function: "Ne" },
    { id: "Ne_8", text: "我傾向於對新的外部可能性感到興奮，但可能在實際後續行動中有困難。", function: "Ne" },
    { id: "Ne_9", text: "我自然地鼓勵他人考慮替代觀點和未探索的外部選項。", function: "Ne" },
    { id: "Ne_10", text: "當我能激勵他人看到他們環境中的新可能性和潛力時，我感到最滿足。", function: "Ne" },

    // Ni (內向直覺) Questions
    { id: "Ni_1", text: "我傾向於接收關於體驗背後原型模式和象徵意義的突然洞察。", function: "Ni" },
    { id: "Ni_2", text: "我自然地被理解支配生活和人類體驗的普遍、象徵元素所吸引。", function: "Ni" },
    { id: "Ni_3", text: "我發現自己有內在願景或清晰的象徵圖像，關於更深層模式將如何展開。", function: "Ni" },
    { id: "Ni_4", text: "我偏好深度發展一個中心原型洞察，而不是探索許多表面選項。", function: "Ni" },
    { id: "Ni_5", text: "我傾向於將複雜信息綜合為統一的、象徵性的理解，感覺永恆和普遍。", function: "Ni" },
    { id: "Ni_6", text: "我通過追求感覺與原型或永恆模式相連的單一、有意義的方向而獲得能量。", function: "Ni" },
    { id: "Ni_7", text: "我感到被內在圖像和願景強迫性地驅動，這些圖像和願景要求被理解和表達。", function: "Ni" },
    { id: "Ni_8", text: "我發現很難解釋我的洞察，因為它們作為完整的、象徵性的整體而非邏輯序列出現。", function: "Ni" },
    { id: "Ni_9", text: "我傾向於面向未來，感知將從當前無意識過程中出現的原型模式。", function: "Ni" },
    { id: "Ni_10", text: "這些內在原型願景有時感覺如此強迫，以至於它們對我來說比外部環境更真實。", function: "Ni" }
];

// Function to get all Chinese questions
function getChineseQuestions() {
    return questionsZH;
}
