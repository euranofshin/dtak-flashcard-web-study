const fronts = [
  "不 (bù)",
  "大学 (dàxué)",
  "的 (de)",
  "对 (duì)",
  "对不起 (duìbùqǐ)",
  "高兴 (gāoxìng)",
  "好 (hǎo)",
  "很 (hěn)",
  "叫 (jiào)",
  "教 (jiào)",
  "老师 (lǎoshī)",
  "吗 (ma)",
  "没关系 (méiguānxì)",
  "美国 (měiguó)",
  "名字 (míngzì)",
  "呢 (ne)",
  "你 (nǐ)",
  "你们 (nǐmen)",
  "朋友 (péngyǒu)",
  "人 (rén)",
  "上课 (shàngkè)",
  "谁 (shéí)",
  "什么 (shénme)",
  "是 (shì)",
  "她 (tā)",
  "他 (tā)",
  "同学 (tóngxué)",
  "我 (wǒ)",
  "我们 (wǒmen)",
  "下课 (xiàkè)",
  "喜欢 (xǐhuān)",
  "姓 (xìng)",
  "学 (xué)",
  "学生 (xuéshēng)",
  "再见 (zàijiàn)",
  "知道 (zhīdào)",
  "中国 (zhōngguó)",
  "笔 (bǐ)",
  "别 (bié)",
  "菜 (cài)",
  "吃饭 (chīfàn)",
  "东西 (dōngxī)",
  "都 (dōu)",
  "非常 (fēicháng)",
  "个 (gè)",
  "和 (hé)",
  "喝 (hē)",
  "会 (huì)",
  "今天 (jīntiān)",
  "咖啡 (kāfēi)",
  "看 (kàn)",
  "来 (lái)",
  "两 (liǎng)",
  "练习 (liànxí)",
  "买 (mǎi)",
  "没 (méi)",
  "那 (nà)",
  "哪 (nǎ)",
  "去 (qù)",
  "室友 (shìyǒu)",
  "书 (shū)",
  "说 (shuō)",
  "图书馆 (túshūguǎn)",
  "问 (wèn)",
  "问题 (wèntí)",
  "想 (xiǎng)",
  "写 (xiě)",
  "谢谢 (xièxiè)",
  "英文 (yīngwén)",
  "有 (yǒu)",
  "在 (zài)",
  "怎么 (zěnme)",
  "怎么样 (zěnmeyàng)",
  "这 (zhè)",
  "做 (zuò)",
  "爱 (ài)",
  "别人 (biérén)",
  "不错 (bùcuò)",
  "不好意思 (bùhǎoyìsī)",
  "常 (cháng)",
  "大 (dà)",
  "打球 (dǎqiú)",
  "懂 (dǒng)",
  "多 (duō)",
  "多少 (duōshǎo)",
  "高 (gāo)",
  "跟 (gēn)",
  "回答 (huídá)",
  "几 (jǐ)",
  "教室 (jiàoshì)",
  "今年 (jīnnián)",
  "觉得 (juéde)",
  "可是 (kěshì)",
  "门 (mén)",
  "明天 (míngtiān)",
  "难 (nán)",
  "漂亮 (piàoliàng)",
  "认识 (rènshí)",
  "少 (shǎo)",
  "师 (shuài)",
  "舒服 (shūfú)",
  "说话 (shuōhuà)",
  "所以 (suǒyǐ)",
  "宿舍 (sùshè)",
  "为什么 (wèishénme)",
  "小 (xiǎo)",
  "因为 (yīnwèi)",
  "一起 (yìqǐ)",
  "有意思 (yǒu yìsī)",
  "有点 (yǒudiǎn)",
  "有用 (yǒuyòng)",
  "专业 (zhuānyè)",
  "作业 (zuòyè)",
  "吧 (ba)",
  "爸 (bà)",
  "聪明 (cōngmíng)",
  "当 (dāng)",
  "弟 (dì)",
  "多大 (duōdà)",
  "高中 (gāozhōng)",
  "哥 (gē)",
  "工作 (gōngzuò)",
  "狗 (gǒu)",
  "还 (hái)",
  "还是 (háishì)",
  "好看 (hǎokàn)",
  "好听 (hǎotīng)",
  "姐 (jiě)",
  "可爱 (kěài)",
  "口 (kǒu)",
  "了 (le)",
  "妈 (mā)",
  "猫 (māo)",
  "妹 (mèi)",
  "那 (nà)",
  "女孩 (nǚhái)",
  "让 (ràng)",
  "上学 (shàngxué)",
  "时间 (shíjiān)",
  "岁 (suì)",
  "它们 (tāmen)",
  "现在 (xiànzài)",
  "以后 (yǐhòu)",
  "应该 (yīnggāi)",
  "医生 (yīshēng)",
  "张 (zhāng)",
  "照片 (zhàopiān)",
  "纸 (zhǐ)",
  "住 (zhù)",
  "自己 (zìjǐ)",
  "床 (chuáng)",
  "出去 (chūqù)",
  "打 (dǎ)",
  "电话 (diànhuà)",
  "电视 (diànshì)",
  "儿子 (érzi)",
  "复习 (fùxí)",
  "给 (gěi)",
  "还可以 (háikěyǐ)",
  "好吃 (hǎochī)",
  "回 (huí)",
  "回来 (huílái)",
  "或者 (huòzhě)",
  "就 (jiù)",
  "累 (lèi)",
  "里边 (lǐbiān)",
  "另外 (lìngwài)",
  "忙 (máng)",
  "女儿 (nǚ ér)",
  "奇怪 (qíguài)",
  "上网 (shàngwǎng)",
  "生活 (shēnghuó)",
  "时候 (shíhòu)",
  "听 (tīng)",
  "玩 (wán)",
  "习惯 (xíguàn)",
  "要是 (yàoshì)",
  "一点 (yìdiǎn)",
  "音乐 (yīnyuè)",
  "椅子 (yǐzi)",
  "有时候 (yǒushíhòu)",
  "正 (zhèng)",
  "周末 (zhōumò)",
  "桌子 (zhuōzi)",
  "昨天 (zuótiān)",
  "百 (bǎi)",
  "半 (bàn)",
  "帮 (bāng)",
  "不用 (bùyòng)",
  "点 (diǎn)",
  "地方 (dìfāng)",
  "分 (fēn)",
  "号 (hào)",
  "后天 (hòutiān)",
  "见 (jiàn)",
  "节 (jié)",
  "开 (kāi)",
  "考试 (kǎoshì)",
  "可以 (kěyǐ)",
  "空 (kōng)",
  "块 (kuài)",
  "礼物 (lǐwù)",
  "钱 (qián)",
  "前天 (qiántiān)",
  "去年 (qùnián)",
  "上 (shàng)",
  "上午 (shàngwǔ)",
  "生日 (shēngrì)",
  "事 (shì)",
  "死了 (sǐle)",
  "晚上 (wǎnshàng)",
  "下 (xià)",
  "下午 (xiàwǔ)",
  "星期 (xīngqī)",
  "要 (yào)",
  "一定 (yídìng)",
  "以前 (yǐqián)",
  "月 (yuè)",
  "早上 (zǎoshàng)",
  "只 (zhǐ)",
  "中午 (zhōngwǔ)",
  "比赛 (bǐsài)",
  "才 (cái)",
  "唱歌 (chànggē)",
  "得 (dé)",
  "多长时间 (duōzhǎngshíjiān)",
  "饿 (è)",
  "饭馆 (fànguǎn)",
  "分钟 (fēnzhōng)",
  "服务员 (fúwùyuán)",
  "交 (jiāo)",
  "可能 (kěnéng)",
  "快 (kuài)",
  "流利 (liúlì)",
  "慢 (màn)",
  "每 (měi)",
  "没事 (méishì)",
  "男生 (nánshēng)",
  "能 (néng)",
  "起床 (qǐchuáng)",
  "清楚 (qīngchǔ)",
  "生病 (shēngbìng)",
  "生气 (shēngqì)",
  "身体 (shēntǐ)",
  "睡觉 (shuìjiào)",
  "听说 (tīngshuō)",
  "晚 (wǎn)",
  "晚饭 (wǎnfàn)",
  "先 (xiān)",
  "小时 (xiǎoshí)",
  "医院 (yīyuàn)",
  "游泳 (yóuyǒng)",
  "越来越 (yuèláiyuè)",
  "早 (zǎo)",
  "真 (zhēn)",
  "真的 (zhēnde)",
  "走 (zǒu)",
  "最近 (zuìjìn)",
  "背 (bèi)",
  "比较 (bǐjiào)",
  "不要 (búyào)",
  "参加 (cānjiā)",
  "担心 (dānxīn)",
  "到 (dào)",
  "等 (děng)",
  "刚才 (gāngcái)",
  "告诉 (gàosù)",
  "更 (gèng)",
  "花 (huā)",
  "回去 (huíqù)",
  "记得 (jìde)",
  "紧张 (jǐnzhāng)",
  "开车 (kāichē)",
  "麻烦 (máfán)",
  "马上 (mǎshàng)",
  "怕 (pà)",
  "请假 (qǐngjià)",
  "容易 (róngyì)",
  "生词 (shēngcí)",
  "收到 (shōudào)",
  "送 (sòng)",
  "忘 (wàng)",
  "午饭 (wǔfàn)",
  "休息 (xiūxī)",
  "洗澡 (xǐzǎo)",
  "页 (yè)",
  "一边 (yībiān)",
  "已经 (yǐjīng)",
  "一下 (yīxià)",
  "用 (yòng)",
  "有的 (yǒude)",
  "早饭 (zǎofàn)",
  "祝 (zhù)",
  "准备 (zhǔnbèi)",
  "最 (zuì)",
  "饱 (bǎo)",
  "博物馆 (bówùguǎn)",
  "的话 (dehuà)",
  "房间 (fángjiān)",
  "服务 (fúwù)",
  "刚 (gāng)",
  "公园 (gōngyuán)",
  "号码 (hàomǎ)",
  "后边 (hòubiān)",
  "机场 (jīchǎng)",
  "近 (jìn)",
  "离 (lí)",
  "卖 (mài)",
  "拍 (pāi)",
  "胖 (pàng)",
  "旁边 (pángbiān)",
  "陪 (péi)",
  "前边 (qiánbiān)",
  "请 (qǐng)",
  "上边 (shàngbiān)",
  "试 (shì)",
  "瘦 (shòu)",
  "书店 (shūdiàn)",
  "特别 (tèbié)",
  "外边 (wàibiān)",
  "下边 (xiàbiān)",
  "学校 (xuéxiào)",
  "银行 (yínháng)",
  "一样 (yīyàng)",
  "右边 (yòubiān)",
  "有名 (yǒumíng)",
  "有钱 (yǒuqián)",
  "远 (yuǎn)",
  "走路 (zǒulù)",
  "左边 (zuǒbiān)",
  "办法 (bànfǎ)",
  "超市 (chāoshì)",
  "出来 (chūlái)",
  "出租车 (chūzūchē)",
  "大巴 (dàbā)",
  "带 (dài)",
  "电影 (diànyǐng)",
  "地铁 (dìtiě)",
  "冬天 (dōngtiān)",
  "方便 (fāngbiàn)",
  "飞机 (fēijī)",
  "公共汽车 (gōnggòngqìchē)",
  "逛 (guàng)",
  "逛街 (guàngjiē)",
  "贵 (guì)",
  "过 (guò)",
  "机票 (jīpiào)",
  "冷 (lěng)",
  "面包 (miànbāo)",
  "牛奶 (niúnǎi)",
  "便宜 (piányi)",
  "苹果 (píngguǒ)",
  "千 (qiān)",
  "热 (rè)",
  "商场 (shāngchǎng)",
  "天气 (tiānqì)",
  "跳舞 (tiàowǔ)",
  "位 (wèi)",
  "夏天 (xiàtiān)",
  "下雪 (xiàxuě)",
  "希望 (xīwàng)",
  "一些 (yīxiē)",
  "又 (yòu)",
  "约 (yuē)",
  "运动 (yùndòng)",
  "再 (zài)",
  "怎么办 (zěnmebàn)",
  "找 (zhǎo)",
  "坐 (zuò)",
];

const backs = [
  "not, no",
  "university",
  "(marking subordination or possession)",
  "correct, right",
  "I'm sorry, excuse me",
  "name of a person, happy",
  "good",
  "very",
  "to be called",
  "to teach",
  "teacher",
  "question particle",
  "it doesn't matter, never mind",
  "the United States",
  "name",
  "(indicating continued state or action)",
  "you",
  "you (plural)",
  "friend",
  "people, person",
  "class starts, to attend class",
  "who, whom",
  "hwhat",
  "to be",
  "she, her",
  "he, him",
  "classmate",
  "I, me",
  "we, us",
  "class is over, to get out of class",
  "to like",
  "to be surnamed",
  "to study",
  "student",
  "goodbye",
  "to know",
  "China",
  "pen",
  "other, another",
  "(non-staple) food, vegetable, dish",
  "to have a meal",
  "things, stuff",
  "all, both",
  "very much",
  "(for all items not covered by another specific measure word (e.g. one student)",
  "and",
  "to drink",
  "can, to know how to",
  "today",
  "coffee",
  "to visit",
  "to come out, to release (movies, books, etc)",
  "two",
  "to practice, exercise",
  "to buy",
  "not (have)",
  "then, in that case",
  "nan",
  "to go ",
  "roommate",
  "book",
  "to say, to speak",
  "library",
  "to ask",
  "question",
  "to feel like, to miss, to think",
  "to write",
  "thank (you)",
  "English (language)",
  "to have",
  "to be at/in/on",
  "how is that, why",
  "how is (it)?",
  "this",
  "to do",
  "to like, to have an affinity for, to love",
  "others, other people, another person",
  "not bad, pretty good",
  "to feel embarrassed",
  "often, frequently",
  "big, great",
  "to play a ball game",
  "to understand, to know",
  "many, much",
  "how many",
  "tall, high",
  "with, to, from",
  "to reply, answer",
  "how many, how much (for numbers estimated under 10)",
  "classroom",
  "this year",
  "to feel, to think",
  "but",
  "(for courses), door",
  "tomorrow",
  "difficult",
  "beautiful",
  "to know",
  "few, little",
  "handsome",
  "comfortable",
  "to speak, to talk",
  "so, therefore, as a result",
  "dormitory",
  "why",
  "small, little",
  "because",
  "together, in the same place",
  "interesting, fun",
  "somewhat, a little bit, kind of ",
  "useful",
  "major, specialty",
  "homework",
  "(indicating assumption or conjecture)",
  "father",
  "smart",
  "to work as",
  "younger brother",
  "how old",
  "high school",
  "elder brother",
  "work, to work",
  "dog",
  "still, yet",
  "or",
  "good-looking, pleasant in appearance",
  "pleasant to hear",
  "elder sister",
  "cute",
  "(for number of family members)",
  "(indicating an existing state, change in state, or completed action)",
  "mother",
  "cat",
  "younger sister",
  "then, in that case",
  "girl, young lady",
  "to let, to allow, to make",
  "to go to/attend school",
  "time, duration",
  "years old",
  "they",
  "now, at present",
  "later, afterwards",
  "should",
  "doctor",
  "(for flat objects such as photos, paper, desks)",
  "photo, picture",
  "only, merely",
  "to live, to stay",
  "oneself",
  "bed",
  "to go out",
  "a generalized 'action' verb with specific meaning determined by its object, e.g., to hit, to get, to plat",
  "telephone",
  "television",
  "son",
  "to review, review",
  "to, for, for the benefit of",
  "not bad, passable",
  "delicious, tasty",
  "to go back, to return, to reply",
  "to return, to come back",
  "or",
  "then, exactly, precisely, right away",
  "tired",
  "inside",
  "to other, another, in addition",
  "busy",
  "daughter",
  "strange, weird",
  "to surf the internet",
  "life",
  "(duration of) time, moment",
  "to listen, to hear",
  "to play, to have fun",
  "to be used to",
  "if",
  "a little bit",
  "music",
  "chair",
  "sometimes, now and then",
  "just, just now, precisely",
  "weekend",
  "table, desk",
  "yesterday",
  "hundred",
  "half",
  "to help",
  "need not, do not need",
  "o'clock (for time)",
  "place, space, room",
  "minute (of time), cent (of money)",
  "date",
  "day after tomorrow",
  "to meet, to see",
  "(for classes, sections, etc)",
  "to hold",
  "to have a test, exam",
  "can, many",
  "free time",
  "(for Chinese currency)",
  "gift, present",
  "money",
  "day before yesterday",
  "last year",
  "last",
  "morning",
  "birthday",
  "matter, affair",
  "extremely",
  "evening",
  "next",
  "afternoon",
  "week",
  "must, need to, to want",
  "definitely, certainly",
  "formerly, before",
  "mouth",
  "morning",
  "(for cats, dogs, birds, etc)",
  "Chinese language",
  "competition, match",
  "only then (later than expected)",
  "to sing (a song)",
  "grammatical particle",
  "how long",
  "hungry",
  "restaurant",
  "minute (of time), cent (of money)",
  "waiter, waitress, attendant",
  "to turn in, to submit",
  "possibly, probably",
  "fast",
  "fluent",
  "slow (in speed)",
  "every, each",
  "it doesn't matter, never mind",
  "male/boy student, guy",
  "can, to be able to",
  "to get up from bed",
  "clear",
  "to fall ill",
  "to get angry",
  "body, health",
  "to sleep",
  "to hear that",
  "late",
  "dinner",
  "first",
  "hour",
  "hospital",
  "swimming, to swim",
  "more and more",
  "early",
  "really",
  "true, really",
  "to leave, to walk, to go",
  "recently",
  "to learn by heart, to recite from memory",
  "relatively",
  "don't, don't want",
  "to attend, to join",
  "to worry",
  "to arrive",
  "to wait",
  "just now, a moment ago",
  "to tell",
  "more, further",
  "to spend",
  "to go back, to return",
  "to remember",
  "nervous",
  "to drive a (motor) vehicle",
  "troublesome, trouble, to bother",
  "at once, right away",
  "to fear, to dread",
  "to ask for leave",
  "easy",
  "new (vocabulary) word",
  "to receive",
  "to give as a present, to see off, to send",
  "to forget, to overlook",
  "lunch",
  "to rest",
  "to take a back, to take a shower",
  "(for pages)",
  "while",
  "already",
  "in a short while",
  "to use",
  "some",
  "breakfast",
  "to express good wishes, to wish",
  "to prepare, to get ready",
  "most",
  "full (after meal)",
  "museum",
  "if",
  "room",
  "service, to serve",
  "just now",
  "park",
  "number",
  "back, behind",
  "airport",
  "near",
  "distant/apart from",
  "to sell",
  "to take a photo, to shoot film",
  "fat, plump",
  "side, next to",
  "to accompany",
  "front",
  "to treat",
  "above",
  "to try",
  "thin",
  "bookstore",
  "special, especially",
  "outside",
  "below, under, underneath",
  "school",
  "bank",
  "same",
  "right",
  "famous",
  "to have money",
  "far",
  "to walk",
  "left",
  "way, means, measure",
  "supermarket",
  "to come out, to release (movies, books, etc)",
  "taxi",
  "megabus",
  "to bring, to carry, to look after",
  "movie, film",
  "subway",
  "winter",
  "convenient",
  "airplane",
  "local bus",
  "to stroll, to ramble, to roam",
  "to window-shop",
  "expensive",
  "(indicating that an action has taken place, but does not continue up to the present)",
  "plane ticket",
  "cold",
  "bread",
  "cow's milk",
  "cheap",
  "apple",
  "thousand",
  "hot",
  "mall, bazaar, market",
  "weather",
  "to dance",
  "(referring to people politely)",
  "summer",
  "to snow",
  "ro hope, wish",
  "a number of, certain, some",
  "again, moreover",
  "to make an appointment, to arrange/agree on a time",
  "to exercise, sports",
  "in/at/on",
  "what to do (used as a phrase)",
  "to look for, to give change",
  "to ride, to sit",
];
