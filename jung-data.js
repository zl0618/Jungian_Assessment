// Jungian Assessment Data and Utility Functions

// Debug: Check if type descriptions are loaded
console.log('=== TYPE DESCRIPTIONS DEBUG ===');
console.log('typeDescriptions available:', typeof typeDescriptions);
console.log('getTypeDescription available:', typeof getTypeDescription);
if (typeof typeDescriptions !== 'undefined') {
    console.log('Available types:', Object.keys(typeDescriptions));
}
console.log('================================');

// Emergency fallback type descriptions - Complete detailed versions
const fallbackTypeDescriptions = {
    'NITE': {
        description: {
            en: "These types are guided by profound, often symbolic inner images and archetypal patterns. Their orientation to life is visionary: they sense the underlying currents and inevitable directions of events, often long before others do. This \"inner seeing\" is not vague fantasy, but a focused, almost prophetic perception of what is to come, which they strive to realize through effective, objective action. Their auxiliary extraverted thinking gives them a practical, systematic approach to manifesting their visions—they are not content to dream, but must bring order and structure to the world in accordance with what they have foreseen. They may appear enigmatic, intense, or even aloof, as their attention is so often absorbed by the compelling reality of their inner world. They are often misunderstood, as their motivations are shaped by images and meanings that are difficult to articulate. In adaptation, they excel at long-term strategy, innovation, and transformation, but may struggle with the demands of the present moment or with the emotional needs of others.",
            zh: "這些類型被深刻的、通常是象徵性的內在圖像和原型模式所引導。他們對生活的取向是有遠見的：他們感知到事件的潛在趨勢和不可避免的方向，通常遠早於其他人。這種「內在視野」不是模糊的幻想，而是對即將到來的事物的專注、幾乎是預言性的感知，他們努力通過有效、客觀的行動來實現。他們的輔助外向思考為他們提供了實現願景的實用、系統化方法——他們不滿足於夢想，而必須根據他們所預見的為世界帶來秩序和結構。他們可能顯得神秘、強烈，甚至冷漠，因為他們的注意力經常被內心世界的引人入勝的現實所吸引。他們經常被誤解，因為他們的動機是由難以表達的形象和意義所塑造的。在適應中，他們擅長於長期戰略、創新和轉型，但可能在應對當前時刻的需求或他人的情感需求時掙扎。"
        },
        mostSimilar: {
            en: "NIFE (shares Ni dominance, but with a focus on harmony and empathy)",
            zh: "NIFE (共享Ni主導，但專注於和諧與同理心)"
        },
        mostComplementary: {
            en: "SEFI (Se-Fi axis: present-focused, authentic, and attuned to immediate experience, balancing Ni-Te's future orientation and abstraction)",
            zh: "SEFI (Se-Fi軸：專注於當下、真實、並與即時體驗相連，平衡Ni-Te的未來導向和抽象性)"
        }
    },
    'SITE': {
        description: {
            en: "SITE types are the reliable guardians of established systems and traditions, combining a deep respect for proven methods with a practical ability to implement them efficiently. Their dominant introverted sensing gives them an exceptional memory for details and past experiences, allowing them to recognize patterns and remember what has worked effectively before. This rich internal database of experience is organized and applied through extraverted thinking, which drives them to create systematic, logical approaches to tasks and responsibilities. They are often found in management, administration, accounting, or any field that requires careful attention to detail and adherence to established procedures. SITE types excel at maintaining stability and ensuring that important processes continue to function smoothly over time. They have a natural talent for seeing what needs to be done and methodically working through tasks to completion. Their approach to life is conservative and methodical—they prefer to build upon solid foundations rather than experiment with untested approaches. They value tradition, loyalty, and competence, and they often serve as the institutional memory of organizations. Their challenges may include resistance to change, especially when new methods seem to discard valuable lessons from the past, difficulty with ambiguous situations that lack clear procedures, and potential impatience with theoretical discussions that don't lead to practical applications. Their focus on proven methods can sometimes make them appear inflexible, though their consistency and reliability are often invaluable assets to any organization or community.",
            zh: "SITE類型是既定系統和傳統的可靠守護者，將對經過驗證方法的深度尊重與有效實施它們的實際能力相結合。他們的主導內向感覺為他們提供對細節和過去經驗的卓越記憶，使他們能夠識別模式並記住以前有效運作的東西。這個豐富的內在經驗數據庫通過外向思考來組織和應用，驅使他們為任務和責任創造系統、邏輯的方法。他們經常在管理、行政、會計或任何需要仔細注意細節和遵守既定程序的領域中被發現。SITE類型擅長維持穩定並確保重要流程隨時間繼續順利運作。他們在看到需要做什麼並有條理地完成任務方面有天然才能。他們的生活方式是保守和有條理的——他們偏好在堅實基礎上建設，而不是嘗試未經測試的方法。他們重視傳統、忠誠和能力，經常作為組織的機構記憶。他們的挑戰可能包括對變化的抗拒，特別是當新方法似乎丟棄過去寶貴教訓時、在缺乏明確程序的模糊情況下的困難，以及對不導致實際應用的理論討論的潛在不耐煩。他們對經過驗證方法的關注有時可能使他們顯得不靈活，儘管他們的一致性和可靠性對任何組織或社區來說往往是無價的資產。"
        },
        mostSimilar: {
            en: "SIFE (shares Si dominance, but focuses on harmony and relationships)",
            zh: "SIFE (共享Si主導，但專注於和諧與關係)"
        },
        mostComplementary: {
            en: "NEFI (Ne-Fi axis: open, imaginative, and possibility-oriented, balancing SITE's conservatism and practicality)",
            zh: "NEFI (Ne-Fi軸：開放、富有想像力、可能性導向，平衡SITE的保守主義和實用性)"
        }
    },
    'NIFE': {
        description: {
            en: "NIFE types are deeply attuned to the symbolic and archetypal meaning of life, but their insights are expressed through empathy, diplomacy, and a desire to inspire or guide others. They often have a sense of personal destiny or calling, and seek to harmonize groups or communities around a vision that feels both inevitable and meaningful. Their auxiliary extraverted feeling makes them sensitive to the emotional climate and needs of others, and they may become the \"conscience\" or \"prophet\" of their circle. They are often reserved or mysterious, as their perceptions are difficult to translate into everyday language, but they radiate a quiet conviction and warmth. They may struggle when their inner vision is misunderstood or when they feel disconnected from collective values.",
            zh: "NIFE類型深深地調節於生活的象徵和原型意義，但他們的洞察通過同理心、外交和激勵或指導他人的願望來表達。他們經常有個人命運或使命感，並尋求圍繞一個既不可避免又有意義的願景來協調群體或社區。他們的輔助外向情感使他們對他人的情感氣候和需求敏感，並且可能成為他們圈子的「良心」或「先知」。他們經常保持內斂或神秘，因為他們的感知難以轉化為日常語言，但他們散發出平靜的信念和溫暖。當他們的內在視野被誤解或感到與集體價值觀脫節時，他們可能會掙扎。"
        },
        mostSimilar: {
            en: "NITE (shares Ni dominance, but with a practical, logical bent)",
            zh: "NITE (共享Ni主導，但具有實用、邏輯傾向)"
        },
        mostComplementary: {
            en: "SEFI (Se-Fi axis: authentic, present, and spontaneous, offering a grounding counterpoint to NIFE's abstraction and future focus)",
            zh: "SEFI (Se-Fi軸：真實、當下、自發，為NIFE的抽象和未來焦點提供基礎對比)"
        }
    },
    'NEFI': {
        description: {
            en: "NEFI types are open, imaginative, and constantly scanning the external world for new possibilities, patterns, and connections. Their dominant extraverted intuition gives them a restless curiosity and an ability to see potential where others see only what is. Their auxiliary introverted feeling means their explorations are guided by a strong, private sense of personal value and authenticity. They are champions of individuality, both for themselves and others, and are often drawn to causes, the arts, or any field that allows creative self-expression. They may appear scattered or changeable, but their inner values provide a quiet consistency beneath their outward adaptability.",
            zh: "NEFI類型開放、富有想像力，不斷掃描外部世界尋找新的可能性、模式和聯繫。他們的主導外向直覺給了他們不安分的好奇心，能夠在其他人只看到現實的地方看到潛力。他們的輔助內向情感意味著他們的探索由強烈、私人的個人價值感和真實性所指導。他們是個性的擁護者，無論是對自己還是對他人，經常被事業、藝術或任何允許創造性自我表達的領域所吸引。"
        },
        mostSimilar: {
            en: "NETI (shares Ne dominance, but with a logical, analytical auxiliary)",
            zh: "NETI (共享Ne主導，但具有邏輯、分析輔助)"
        },
        mostComplementary: {
            en: "SITE (Si-Te axis: tradition- and fact-oriented, providing stability and practical grounding to NEFI's openness)",
            zh: "SITE (Si-Te軸：傳統和事實導向，為NEFI的開放性提供穩定和實際基礎)"
        }
    },
    'NETI': {
        description: {
            en: "NETI types are innovative theorists and conceptual architects who delight in exploring ideas, possibilities, and theoretical frameworks. Their dominant extraverted intuition makes them natural brainstormers, constantly generating new ideas, seeing connections others miss, and envisioning alternative ways of understanding or approaching problems. This creative explosion of possibilities is organized and refined by introverted thinking, which provides them with an internal framework for testing ideas against logical consistency and theoretical elegance. They are often found in research, academia, technology development, consulting, or any field that values original thinking and theoretical innovation. NETI types have an exceptional ability to see potential in ideas that others might dismiss and to synthesize concepts from different domains into novel frameworks. They excel at identifying underlying patterns and principles that govern complex systems. Their approach to life is exploratory and intellectually driven—they are motivated by understanding, discovery, and the pure joy of intellectual puzzling. They prefer environments that offer intellectual freedom and the opportunity to pursue interesting problems without excessive bureaucracy or routine constraints. Their main challenges include difficulty with follow-through on practical implementation, tendency to become bored with routine details once the interesting theoretical work is complete, and potential struggles in highly structured environments that don't allow for intellectual exploration. They may also find it challenging to communicate their complex ideas to audiences who prefer concrete, practical information.",
            zh: "NETI類型是創新的理論家和概念建築師，喜歡探索想法、可能性和理論框架。他們的主導外向直覺使他們成為天然的頭腦風暴者，不斷產生新想法，看到其他人錯過的聯繫，並設想理解或處理問題的替代方式。這種可能性的創意爆發由內向思考組織和精煉，為他們提供內在框架來測試想法的邏輯一致性和理論優雅性。他們經常在研究、學術界、技術開發、諮詢或任何重視原創思維和理論創新的領域中被發現。NETI類型在看到其他人可能忽視的想法中的潛力以及將不同領域的概念綜合成新穎框架方面有著卓越的能力。他們擅長識別支配複雜系統的潛在模式和原則。他們的生活方式是探索性和智力驅動的——他們被理解、發現和智力難題的純粹樂趣所激勵。他們偏好提供智力自由和追求有趣問題的機會而不受過度官僚主義或例行約束的環境。他們的主要挑戰包括在實際實施的跟進方面的困難、一旦有趣的理論工作完成就傾向於對例行細節感到厭煩，以及在不允許智力探索的高度結構化環境中的潛在掙扎。他們也可能發現向偏好具體、實用信息的受眾傳達他們的複雜想法具有挑戰性。"
        },
        mostSimilar: {
            en: "NEFI (shares Ne dominance, but guided by values rather than logic)",
            zh: "NEFI (共享Ne主導，但由價值觀而非邏輯指導)"
        },
        mostComplementary: {
            en: "SITE (Si-Te axis: practical, detail-oriented, and tradition-minded, balancing NETI's abstract theorizing)",
            zh: "SITE (Si-Te軸：實用、注重細節、傳統導向，平衡NETI的抽象理論化)"
        }
    },
    'TENI': {
        description: {
            en: "TENI types are visionary leaders and strategic architects who combine long-term thinking with decisive action to transform organizations and systems. Their dominant extraverted thinking drives them to organize the external world efficiently, establishing clear structures, processes, and goals that move groups toward ambitious objectives. This practical, results-oriented approach is informed by introverted intuition, which gives them an almost prophetic ability to see long-term trends, underlying patterns, and future possibilities that others miss. They are natural leaders who excel at strategic planning, organizational development, and implementing large-scale changes. TENI types have an exceptional ability to envision where an organization or system needs to go and to create systematic plans for getting there. They can see inefficiencies and potential improvements that others overlook, and they're willing to make difficult decisions to achieve their vision. Their approach to life is goal-oriented and future-focused—they are motivated by achievement, growth, and the satisfaction of building something significant. They prefer environments that offer leadership opportunities and the autonomy to implement their strategic vision. Their main challenges include potential impatience with slower-moving individuals or processes, tendency to focus on long-term goals while sometimes overlooking immediate human needs, and difficulty in situations that require extensive emotional sensitivity or individual accommodation. Their drive for efficiency and results can sometimes make them appear demanding or impersonal, though they often genuinely care about creating systems that benefit everyone in the long term.",
            zh: "TENI類型是遠見的領導者和戰略建築師，結合長期思維與決斷行動來轉變組織和系統。他們的主導外向思考驅使他們有效地組織外部世界，建立明確的結構、流程和目標，推動群體朝向雄心勃勃的目標。這種實用、結果導向的方法由內向直覺告知，給了他們幾乎是預言性的能力來看到其他人錯過的長期趨勢、潛在模式和未來可能性。他們是在戰略規劃、組織發展和實施大規模變革方面表現出色的天然領導者。TENI類型在設想組織或系統需要走向何處以及為到達那裡創造系統計劃方面有著卓越的能力。他們能看到其他人忽視的低效率和潛在改進，並願意做出困難決定來實現他們的願景。他們的生活方式是目標導向和未來導向的——他們被成就、成長和建設重要事物的滿足感所激勵。他們偏好提供領導機會和實施戰略願景自主權的環境。他們的主要挑戰包括對較慢行動的個人或流程的潛在不耐煩、傾向於關注長期目標而有時忽視即時人類需求，以及在需要廣泛情感敏感性或個人適應的情況下的困難。他們對效率和結果的推動有時可能使他們顯得苛刻或冷漠，儘管他們經常真誠地關心創造長期惠及每個人的系統。"
        },
        mostSimilar: {
            en: "TESI (shares Te dominance, but grounded in tradition and detail)",
            zh: "TESI (共享Te主導，但植根於傳統和細節)"
        },
        mostComplementary: {
            en: "FINE (Fi-Ne axis: values-driven, open to possibilities, and attuned to authenticity, offering a counterbalance to TENI's objectivity and structure)",
            zh: "FINE (Fi-Ne軸：價值觀驅動、對可能性開放、調節真實性，為TENI的客觀性和結構提供平衡)"
        }
    },
    'FENI': {
        description: {
            en: "FENI types are natural inspirers and catalysts for human potential, driven by an exceptional ability to perceive the emotional undercurrents and hidden possibilities within groups and individuals. Their dominant extraverted feeling makes them highly attuned to the emotional climate around them, enabling them to sense what others need to feel valued, understood, and motivated. Combined with their auxiliary introverted intuition, they possess an almost prophetic ability to see the deeper meaning and future potential in people and situations. They are often found in roles where they can guide, teach, or inspire others—whether as educators, counselors, leaders, or advocates for causes they believe in. FENI types have a gift for articulating shared values and visions that unite people around common purposes. They can be powerfully persuasive, not through manipulation, but through their genuine belief in human goodness and potential. Their challenge lies in their tendency to become overwhelmed by others' emotions or to neglect their own needs while focusing on helping others. They may also struggle when their idealistic vision of human nature encounters harsh realities or when they feel disconnected from a meaningful cause or community.",
            zh: "FENI類型是人類潛力的天然啟發者和催化劑，具有卓越的能力來感知群體和個人內部的情感暗流和隱藏可能性。他們的主導外向情感使他們高度調節周圍的情感氛圍，能夠感知他人需要什麼才能感到被重視、理解和激勵。結合他們的輔助內向直覺，他們具有幾乎是預言性的能力來看到人和情況的更深層意義和未來潛力。他們經常在可以指導、教導或啟發他人的角色中被發現——無論是作為教育者、顧問、領導者，還是他們相信的事業的倡導者。FENI類型在表達共同價值觀和願景方面有天賦，能夠圍繞共同目標團結人們。他們可以具有強大的說服力，不是通過操縱，而是通過他們對人類善良和潛力的真誠信念。他們的挑戰在於傾向於被他人的情感所淹沒，或者在專注於幫助他人時忽視自己的需求。當他們對人性的理想主義願景遇到嚴酷現實，或者當他們感到與有意義的事業或社區脫節時，他們也可能掙扎。"
        },
        mostSimilar: {
            en: "FESI (shares Fe dominance, but more tradition- and detail-oriented)",
            zh: "FESI (共享Fe主導，但更傳統和細節導向)"
        },
        mostComplementary: {
            en: "TINE (Ti-Ne axis: independent, analytical, and theoretical)",
            zh: "TINE (Ti-Ne軸：獨立、分析、理論)"
        }
    },
    'FINE': {
        description: {
            en: "FINE types are passionate individualists who live according to deeply held personal values while maintaining an endless curiosity about life's possibilities. Their dominant introverted feeling creates an intensely private inner world of values, emotions, and personal meaning that serves as their compass for all decisions. This is beautifully complemented by extraverted intuition, which opens them to new experiences, ideas, and potential in the external world. They are often artists, writers, activists, or innovators who channel their authentic inner vision into creative expression or meaningful causes. FINE types have an remarkable ability to see potential and possibility in people and situations that others might overlook. They champion the underdog, celebrate uniqueness, and resist anything that feels inauthentic or constraining. Their approach to life is exploratory and value-driven—they want to experience everything that resonates with their inner truth while remaining open to new discoveries about themselves and the world. They may appear inconsistent to others, but this reflects their commitment to growth and authenticity rather than rigid consistency. Their greatest challenge is often translating their rich inner world and scattered interests into concrete achievements, and they may struggle with routine, structure, or situations that demand they compromise their values.",
            zh: "FINE類型是充滿激情的個人主義者，根據深度持有的個人價值觀生活，同時對生活的可能性保持無盡的好奇心。他們的主導內向情感創造了一個極其私密的內在世界，充滿價值觀、情感和個人意義，作為所有決定的指南針。這與外向直覺完美地互補，使他們對外部世界的新體驗、想法和潛力開放。他們經常是藝術家、作家、活動家或創新者，將他們真實的內在願景引導到創意表達或有意義的事業中。FINE類型在看到他人可能忽視的人和情況中的潛力和可能性方面有著卓越的能力。他們為弱者辯護，慶祝獨特性，抗拒任何感覺不真實或約束的東西。他們的生活方式是探索性和價值觀驅動的——他們想要體驗與內在真理共鳴的一切，同時保持對自己和世界新發現的開放。他們可能對他人顯得不一致，但這反映了他們對成長和真實性的承諾，而不是僵化的一致性。他們最大的挑戰往往是將豐富的內在世界和分散的興趣轉化為具體的成就，他們可能在例行公事、結構或要求他們妥協價值觀的情況下掙扎。"
        },
        mostSimilar: {
            en: "FISE (shares Fi dominance, but with a focus on sensory experience)",
            zh: "FISE (共享Fi主導，但專注於感官體驗)"
        },
        mostComplementary: {
            en: "TENI (Te-Ni axis: objective, strategic, and results-oriented)",
            zh: "TENI (Te-Ni軸：客觀、戰略、結果導向)"
        }
    },
    'TINE': {
        description: {
            en: "TINE types are independent thinkers and conceptual innovators who approach the world through precise analysis and theoretical exploration. Their dominant introverted thinking creates a highly refined internal framework of logic, where they continuously test ideas for consistency, accuracy, and elegance. This is energized by extraverted intuition, which feeds them a constant stream of new possibilities, connections, and theoretical frameworks to analyze. They are often found in academic fields, research, technology, or any domain that values original thinking and systematic investigation. TINE types have an exceptional ability to see logical flaws in existing systems and to generate novel solutions or entirely new approaches to complex problems. They tend to be intellectually honest to a fault, willing to abandon cherished beliefs if evidence contradicts them. Their communication style can be precise but complex, as they naturally think in terms of systems, categories, and theoretical relationships. They value competence, intellectual freedom, and the opportunity to pursue understanding for its own sake. Their main challenges include difficulty communicating their insights to non-specialists, tendency to become absorbed in theoretical pursuits while neglecting practical concerns, and potential struggles with emotional expression or social situations that require quick interpersonal decisions.",
            zh: "TINE類型是獨立的思想家和概念創新者，通過精確分析和理論探索來處理世界。他們的主導內向思考創造了一個高度精緻的內在邏輯框架，他們在其中持續測試想法的一致性、準確性和優雅性。這由外向直覺激發，為他們提供源源不斷的新可能性、聯繫和理論框架來分析。他們經常在學術領域、研究、技術或任何重視原創思維和系統調查的領域中被發現。TINE類型在看到現有系統邏輯缺陷並生成新穎解決方案或完全新的複雜問題方法方面有著卓越的能力。他們往往在智力上過分誠實，如果證據與他們珍視的信念相矛盾，願意放棄這些信念。他們的溝通風格可能精確但複雜，因為他們自然地以系統、類別和理論關係的形式思考。他們重視能力、智力自由和為了理解本身而追求理解的機會。他們的主要挑戰包括難以向非專家傳達他們的洞察、傾向於沉浸在理論追求中而忽視實際關切，以及在情感表達或需要快速人際決策的社交情況中的潛在掙扎。"
        },
        mostSimilar: {
            en: "TISE (shares Ti dominance, but is more practical and sensory-focused)",
            zh: "TISE (共享Ti主導，但更實用和感官導向)"
        },
        mostComplementary: {
            en: "FENI (Fe-Ni axis: empathetic, visionary, and group-oriented)",
            zh: "FENI (Fe-Ni軸：同理心、遠見、群體導向)"
        }
    },
    'SIFE': {
        description: {
            en: "SIFE types are the steady, nurturing guardians of tradition and community, with an exceptional gift for creating stability and harmony in their immediate environment. Their dominant introverted sensing gives them a rich, detailed memory of past experiences and a deep appreciation for established methods and traditions that have proven their worth over time. This is beautifully complemented by extraverted feeling, which makes them highly attuned to the emotional needs and well-being of those around them. They are often the backbone of families, organizations, or communities, quietly ensuring that everyone feels cared for and that important details are not overlooked. SIFE types have an innate ability to create warm, welcoming environments where people feel safe to be themselves. They excel at remembering personal details about others—birthdays, preferences, concerns—and use this knowledge to provide thoughtful support and care. Their approach to life is methodical and service-oriented; they find deep satisfaction in maintaining traditions, supporting others, and creating order from chaos. They may struggle when faced with rapid change, theoretical abstractions that don't connect to concrete experience, or situations where they must assert themselves in conflict. Their loyalty and dedication can sometimes be taken for granted, and they may neglect their own needs while focusing on others.",
            zh: "SIFE類型是傳統和社區的穩定、關懷守護者，在為他們的即時環境創造穩定和和諧方面有著卓越的天賦。他們的主導內向感覺為他們提供豐富、詳細的過去經驗記憶，以及對已經證明其價值的既定方法和傳統的深度欣賞。這與外向情感完美地互補，使他們高度調節周圍人的情感需求和福祉。他們經常是家庭、組織或社區的支柱，默默地確保每個人都感到被關心，重要的細節不被忽視。SIFE類型有一種天生的能力來創造溫暖、歡迎的環境，讓人們感到安全可以做自己。他們擅長記住他人的個人詳情——生日、偏好、關切——並使用這些知識提供體貼的支持和關懷。他們的生活方式是有條理和服務導向的；他們在維護傳統、支持他人和從混亂中創造秩序方面找到深度滿足感。當面對快速變化、不與具體經驗相關的理論抽象，或必須在衝突中主張自己的情況時，他們可能會掙扎。他們的忠誠和奉獻有時可能被視為理所當然，他們可能在專注於他人時忽視自己的需求。"
        },
        mostSimilar: {
            en: "SITE (shares Si dominance, but focuses on efficiency and structure)",
            zh: "SITE (共享Si主導，但專注於效率和結構)"
        },
        mostComplementary: {
            en: "NEFI (Ne-Fi axis: creative, open, and authenticity-oriented)",
            zh: "NEFI (Ne-Fi軸：創造性、開放、真實性導向)"
        }
    },
    'SEFI': {
        description: {
            en: "SEFI types are vibrant, spontaneous individuals who live authentically in the present moment while staying true to their deeply held personal values. Their dominant extraverted sensing makes them acutely aware of their immediate environment—they notice subtle changes in atmosphere, appreciate beauty and aesthetics, and are drawn to hands-on experiences that engage their senses. This is guided by introverted feeling, which provides them with a strong internal compass of personal values and authenticity. They have an exceptional ability to read the emotional undertones of situations and people, often sensing when something feels 'off' or inauthentic. SEFI types are often artists, performers, craftspeople, or work in fields that allow them to express their creativity and individuality. They value freedom, authenticity, and the ability to respond spontaneously to life's opportunities. Their approach to relationships is warm and genuine—they connect with others through shared experiences and mutual respect for individuality. They may struggle with long-term planning, abstract theory, or situations that require them to compromise their values for external expectations. Their independent spirit can sometimes be misunderstood as rebelliousness, but they are simply committed to living in alignment with their inner truth while remaining fully engaged with the richness of present-moment experience.",
            zh: "SEFI類型是充滿活力、自發的個體，在保持對其深度持有的個人價值觀忠實的同時，真實地生活在當下時刻。他們的主導外向感覺使他們對即時環境極其敏感——他們注意到氛圍的細微變化，欣賞美和美學，並被吸引到吸引他們感官的實作體驗。這由內向情感指導，為他們提供強大的個人價值觀和真實性內在指南針。他們在讀取情況和人的情感基調方面有著卓越的能力，經常感知到某些事情感覺'不對'或不真實。SEFI類型通常是藝術家、表演者、工藝人，或在允許他們表達創造力和個性的領域工作。他們重視自由、真實性和自發回應生活機會的能力。他們對關係的方法是溫暖和真誠的——他們通過共同體驗和對個性的相互尊重與他人聯繫。他們可能在長期規劃、抽象理論或要求他們為外部期望妥協價值觀的情況下掙扎。他們的獨立精神有時可能被誤解為叛逆，但他們只是承諾在與內在真理保持一致的同時生活，同時完全參與當下時刻體驗的豐富性。"
        },
        mostSimilar: {
            en: "SETI (shares Se dominance, but with a logical, analytical auxiliary)",
            zh: "SETI (共享Se主導，但具有邏輯、分析輔助)"
        },
        mostComplementary: {
            en: "NITE (Ni-Te axis: visionary, strategic, and future-focused)",
            zh: "NITE (Ni-Te軸：遠見、戰略、未來焦點)"
        }
    },
    'SETI': {
        description: {
            en: "SETI types are pragmatic realists who excel at navigating the physical world through keen observation and logical analysis. Their dominant extraverted sensing makes them exceptionally aware of their immediate environment—they notice details others miss, adapt quickly to changing circumstances, and are skilled at working with tools, systems, or hands-on problems. This perceptual acuity is organized by introverted thinking, which allows them to analyze what they observe and develop efficient, logical approaches to practical challenges. They are often found in technical fields, emergency services, sports, or any domain that requires quick thinking and effective action in real-world situations. SETI types have a natural talent for troubleshooting—they can quickly diagnose what's wrong with a system or situation and implement practical solutions. They prefer learning through direct experience rather than theoretical instruction, and they excel in crisis situations where calm, rational action is needed. Their communication style is typically straightforward and results-oriented. They may struggle with abstract theories that don't have clear practical applications, long-term planning that lacks concrete steps, or emotionally charged situations that require extensive interpersonal sensitivity. Their focus on efficiency and practicality can sometimes be perceived as insensitive, though they often care deeply about solving real problems for real people.",
            zh: "SETI類型是務實的現實主義者，通過敏銳的觀察和邏輯分析擅長在物理世界中導航。他們的主導外向感覺使他們對即時環境異常敏感——他們注意到其他人錯過的細節，快速適應變化的環境，並擅長使用工具、系統或實作問題。這種感知敏銳性由內向思考組織，使他們能夠分析所觀察到的東西，並開發有效、邏輯的方法來應對實際挑戰。他們經常在技術領域、緊急服務、體育或任何需要在現實世界情況下快速思考和有效行動的領域中被發現。SETI類型在故障排除方面有天然的才能——他們可以快速診斷系統或情況的問題並實施實際解決方案。他們偏好通過直接經驗而非理論指導來學習，在需要冷靜、理性行動的危機情況下表現出色。他們的溝通風格通常直接且結果導向。他們可能在沒有明確實際應用的抽象理論、缺乏具體步驟的長期規劃或需要廣泛人際敏感性的情感充電情況下掙扎。他們對效率和實用性的關注有時可能被認為是不敏感的，儘管他們經常深深關心為真實的人解決真實的問題。"
        },
        mostSimilar: {
            en: "SEFI (shares Se dominance, but with a values-driven auxiliary)",
            zh: "SEFI (共享Se主導，但具有價值觀驅動的輔助)"
        },
        mostComplementary: {
            en: "NIFE (Ni-Fe axis: visionary, empathetic, and future-oriented)",
            zh: "NIFE (Ni-Fe軸：遠見、同理心、未來導向)"
        }
    },
    'TESI': {
        description: {
            en: "TESI types are natural organizers and administrators who bring order, efficiency, and systematic structure to their environment. Their dominant extraverted thinking drives them to organize the external world according to logical principles, establishing clear procedures, timelines, and standards that ensure objectives are met efficiently. This is supported by introverted sensing, which gives them a detailed memory of what has worked in the past and a preference for proven, reliable methods. They are often found in management, administration, project coordination, or any field that requires systematic oversight and practical implementation. TESI types excel at breaking down complex projects into manageable steps, allocating resources effectively, and ensuring that deadlines are met. They have a natural ability to see inefficiencies in systems and implement improvements that save time and resources. Their approach to life is methodical and goal-oriented—they prefer structure, clear expectations, and measurable outcomes. They value competence, reliability, and tradition, and they often serve as the steady backbone of organizations or communities. Their challenges may include difficulty adapting to sudden changes, impatience with theoretical discussions that don't lead to concrete action, and potential struggles with emotionally complex situations that can't be resolved through systematic approaches. Their focus on efficiency and results can sometimes overlook individual needs or feelings.",
            zh: "TESI類型是天然的組織者和管理者，為他們的環境帶來秩序、效率和系統結構。他們的主導外向思考驅使他們根據邏輯原則組織外部世界，建立明確的程序、時間表和標準，確保目標得到有效實現。這由內向感覺支持，為他們提供過去有效方法的詳細記憶，以及對經過驗證、可靠方法的偏好。他們經常在管理、行政、項目協調或任何需要系統監督和實際實施的領域中被發現。TESI類型擅長將複雜項目分解為可管理的步驟，有效分配資源，並確保截止日期得到滿足。他們有天然的能力看到系統中的低效率並實施節省時間和資源的改進。他們的生活方式是有條理和目標導向的——他們偏好結構、明確的期望和可衡量的結果。他們重視能力、可靠性和傳統，經常作為組織或社區的穩定支柱。他們的挑戰可能包括難以適應突然變化、對不導致具體行動的理論討論缺乏耐心，以及在不能通過系統方法解決的情感複雜情況下的潛在掙扎。他們對效率和結果的關注有時可能忽視個人需求或感受。"
        },
        mostSimilar: {
            en: "TENI (shares Te dominance, but is more visionary and abstract)",
            zh: "TENI (共享Te主導，但更有遠見和抽象)"
        },
        mostComplementary: {
            en: "FINE (Fi-Ne axis: authentic, open, and possibilities-focused)",
            zh: "FINE (Fi-Ne軸：真實、開放、可能性焦點)"
        }
    },
    'FESI': {
        description: {
            en: "FESI types are warm, dependable individuals who create harmony and stability in their communities through their exceptional ability to understand and care for others' needs. Their dominant extraverted feeling makes them naturally attuned to the emotional climate around them—they can sense when someone is troubled, celebrate others' successes genuinely, and work tirelessly to maintain group harmony and morale. This is grounded by introverted sensing, which gives them a rich appreciation for traditions, established practices, and concrete details about the people in their lives. They are often found in caregiving professions, education, hospitality, or community leadership roles where they can directly support and nurture others. FESI types have an remarkable memory for personal details—they remember birthdays, family situations, preferences, and individual needs, using this knowledge to provide personalized care and support. They excel at creating inclusive environments where everyone feels valued and heard. Their approach to life is service-oriented and relationship-focused; they find deep satisfaction in helping others succeed and in maintaining the social fabric of their communities. They may struggle with criticism, conflict situations that disrupt harmony, or abstract theories that seem disconnected from human concerns. Their desire to please others can sometimes lead them to overcommit or neglect their own needs, and they may have difficulty making decisions that might disappoint people they care about.",
            zh: "FESI類型是溫暖、可靠的個體，通過他們理解和關心他人需求的卓越能力在社區中創造和諧與穩定。他們的主導外向情感使他們自然地調節周圍的情感氛圍——他們能感知到某人何時困擾，真誠地慶祝他人的成功，並不知疲倦地工作以維持群體和諧與士氣。這由內向感覺奠定基礎，為他們提供對傳統、既定慣例和生活中人們具體細節的豐富欣賞。他們經常在照護專業、教育、接待或社區領導角色中被發現，在那裡他們可以直接支持和培養他人。FESI類型對個人細節有著卓越的記憶——他們記住生日、家庭情況、偏好和個人需求，使用這些知識提供個性化的關懷和支持。他們擅長創造包容性環境，讓每個人都感到被重視和被聽到。他們的生活方式是服務導向和關係導向的；他們在幫助他人成功和維護社區社會結構方面找到深度滿足感。他們可能在批評、破壞和諧的衝突情況或似乎與人類關切脫節的抽象理論方面掙扎。他們取悅他人的願望有時可能導致他們過度承諾或忽視自己的需求，他們可能在做出可能令他們關心的人失望的決定時有困難。"
        },
        mostSimilar: {
            en: "FENI (shares Fe dominance, but is more visionary and abstract)",
            zh: "FENI (共享Fe主導，但更有遠見和抽象)"
        },
        mostComplementary: {
            en: "TINE (Ti-Ne axis: analytical, independent, and theoretical)",
            zh: "TINE (Ti-Ne軸：分析、獨立、理論)"
        }
    },
    'FISE': {
        description: {
            en: "FISE types are deeply authentic individuals who live by their personal values while remaining highly attuned to the immediate sensory world around them. Their dominant introverted feeling gives them a rich, private emotional life and an unwavering sense of what feels right or wrong to them personally. This is complemented by extraverted sensing, which makes them acutely aware of present-moment experiences, aesthetics, and the physical environment. They tend to be passionate about causes or people that align with their values, often expressing this through creative, artistic, or hands-on pursuits. They may appear reserved initially, but when engaged with something meaningful to them, they show remarkable intensity and dedication. FISE types often have a strong aesthetic sense and may be drawn to artistic expression, craftsmanship, or experiences that engage their senses. They value authenticity above all and can quickly detect when someone is being false or manipulative. Their challenge may be in articulating their deeply held values to others or in dealing with abstract theories that don't connect to concrete experience.",
            zh: "FISE類型是深度真實的個體，他們按照個人價值觀生活，同時對周圍的即時感官世界保持高度敏感。他們的主導內向情感為他們提供豐富、私密的情感生活，以及對個人認為對錯的堅定感知。這由外向感覺所補充，使他們對當下體驗、美學和物理環境極其敏感。他們往往對與其價值觀一致的事業或人充滿熱情，經常通過創意、藝術或實作追求來表達這一點。他們最初可能顯得內斂，但當參與對他們有意義的事情時，會表現出顯著的強度和奉獻精神。FISE類型通常具有強烈的美學感，可能被藝術表達、工藝或吸引感官的體驗所吸引。他們最重視真實性，能夠快速察覺某人是否虛偽或操縱性。他們的挑戰可能在於向他人表達深層價值觀，或處理與具體經驗無關的抽象理論。"
        },
        mostSimilar: {
            en: "FINE (shares Fi dominance and values-driven approach, but focuses more on possibilities and future potential rather than immediate sensory experience)",
            zh: "FINE (共享Fi主導和價值驱动方法，但更專注於可能性和未來潛力，而非即時感官體驗)"
        },
        mostComplementary: {
            en: "TENI (Te-Ni axis: strategic, objective, and future-focused, providing logical structure and long-term vision to balance FISE's personal values and present-moment focus)",
            zh: "TENI (Te-Ni軸：戰略性、客觀、未來導向，為FISE的個人價值觀和當下焦點提供邏輯結構和長期願景的平衡)"
        }
    },
    'TISE': {
        description: {
            en: "TISE types are precise, analytical craftspeople who approach the world through careful observation and systematic understanding. Their dominant introverted thinking creates a sophisticated internal framework for analyzing how things work, seeking to understand the underlying principles and logical relationships that govern systems, whether mechanical, natural, or abstract. This is complemented by extraverted sensing, which provides them with acute awareness of immediate, concrete details and the ability to work skillfully with tools, instruments, or hands-on problems. They are often found in technical fields, research, engineering, or skilled trades where precision and expertise are valued. TISE types excel at troubleshooting complex problems, often approaching challenges with methodical experimentation and careful observation of results. They have a natural talent for understanding how systems function and can often repair, improve, or optimize things that others find mysterious. Their communication style tends to be economical and precise—they prefer to demonstrate competence through action rather than words. They value autonomy, mastery, and the opportunity to work independently on projects that challenge their technical skills. Their main difficulties may include impatience with inefficient social processes, discomfort with emotional expressions that seem illogical, and challenges in situations that require extensive interpersonal cooperation or political navigation. They may also struggle to communicate their expertise to non-technical audiences.",
            zh: "TISE類型是精確、分析性的工藝人，通過仔細觀察和系統理解來處理世界。他們的主導內向思考創造了一個精密的內在框架來分析事物如何運作，尋求理解支配系統的根本原則和邏輯關係，無論是機械的、自然的還是抽象的。這由外向感覺補充，為他們提供對即時、具體細節的敏銳意識，以及熟練使用工具、儀器或實作問題的能力。他們經常在技術領域、研究、工程或重視精確和專業知識的熟練行業中被發現。TISE類型擅長故障排除複雜問題，經常通過有條理的實驗和仔細觀察結果來處理挑戰。他們在理解系統如何運作方面有天然才能，經常能修復、改進或優化其他人覺得神秘的事物。他們的溝通風格傾向於經濟和精確——他們偏好通過行動而非言語來展示能力。他們重視自主性、熟練程度和獨立工作於挑戰其技術技能的項目的機會。他們的主要困難可能包括對低效社會流程的不耐煩、對似乎不合邏輯的情感表達的不適，以及在需要廣泛人際合作或政治導航的情況下的挑戰。他們也可能在向非技術受眾傳達他們的專業知識方面掙扎。"
        },
        mostSimilar: {
            en: "TINE (shares Ti dominance, but is more theoretical and imaginative)",
            zh: "TINE (共享Ti主導，但更理論和富有想像力)"
        },
        mostComplementary: {
            en: "FENI (Fe-Ni axis: empathetic, visionary, and group-oriented)",
            zh: "FENI (Fe-Ni軸：同理心、遠見、群體導向)"
        }
    }
};

function getFallbackTypeDescription(type, currentLanguage) {
    // Handle both "FiSe" and "FISE" naming conventions
    let normalizedType = type;
    
    // Convert from "FiSe" format to "FISE" format if needed
    const typeMapping = {
        'NiTe': 'NITE', 'TeNi': 'TENI',
        'NiFe': 'NIFE', 'FeNi': 'FENI', 
        'SiTe': 'SITE', 'TeSi': 'TESI',
        'SiFe': 'SIFE', 'FeSi': 'FESI',
        'NeTi': 'NETI', 'TiNe': 'TINE',
        'NeFi': 'NEFI', 'FiNe': 'FINE',
        'SeTi': 'SETI', 'TiSe': 'TISE',
        'SeFi': 'SEFI', 'FiSe': 'FISE'
    };
    
    if (typeMapping[type]) {
        normalizedType = typeMapping[type];
    }
    
    const typeInfo = fallbackTypeDescriptions[normalizedType];
    if (!typeInfo) {
        console.warn(`No fallback description found for type: ${type} (normalized: ${normalizedType})`);
        return null;
    }
    
    return {
        description: typeInfo.description[currentLanguage] || typeInfo.description.en,
        mostSimilar: typeInfo.mostSimilar[currentLanguage] || typeInfo.mostSimilar.en,
        mostComplementary: typeInfo.mostComplementary[currentLanguage] || typeInfo.mostComplementary.en
    };
}
