export const navLinks = [
  {
    id: 1,
    name: '首頁',
    href: '/',
  },
  {
    id: 2,
    name: '製作便當',
    href: '/make',
  },
  {
    id: 3,
    name: '食品型錄',
    href: '/catlog',
  }
];

export const images = [
  "/assets/aboutImage/about1.png",
  "/assets/aboutImage/about2.png",
  "/assets/aboutImage/about3.png",
  "/assets/aboutImage/about4.png",
  "/assets/aboutImage/about5.png",
  "/assets/aboutImage/about6.png",
  "/assets/aboutImage/about7.png",
];

export const ingredients = {
  step1: [
    { typeid: 1, stateid: 1, id: 1, splineName: "whiteRice", name: "白飯", type: "starch", calories: 130, protein: 2.7, carbs: 28, fat: 0.3, description: "白飯是最常見的主食之一，富含碳水化合物，能為人體提供持久的能量。口感鬆軟，容易消化吸收，適合各種料理搭配，是均衡飲食的重要來源。", image: "/assets/ingredientsImage/whiteRice.png" },
    { typeid: 1, stateid: 2, id: 2, splineName: "purpleRice", name: "紫米飯", type: "starch", calories: 150, protein: 3.0, carbs: 33, fat: 0.8, description: "紫米飯富含花青素，具有強效抗氧化作用，有助於提升免疫力並減緩老化。口感較白飯更有嚼勁，能增加飲食多樣性，是健康碳水的良好選擇。", image: "/assets/ingredientsImage/purpleRice.png" },
    { typeid: 1, stateid: 3, id: 3, splineName: "potato", name: "馬鈴薯泥", type: "starch", calories: 77, protein: 2.0, carbs: 17, fat: 0.1, description: "馬鈴薯泥富含鉀與維生素C，能幫助調節血壓與提升免疫力。質地綿密滑順，飽足感強，是理想的健康主食替代品，適合多種飲食需求。", image: "/assets/ingredientsImage/potato.png" },
    { typeid: 1, stateid: 4, id: 4, splineName: "noodles", name: "蕎麥麵", type: "starch", calories: 120, protein: 4.5, carbs: 24, fat: 0.6, description: "蕎麥麵含有豐富膳食纖維與低GI碳水，能幫助穩定血糖及促進消化健康。口感Q彈，且富含多種營養素，是健康飲食中不可或缺的優質主食。", image: "/assets/ingredientsImage/noodles.png" },
  ],
  step2: [
    { typeid: 2, stateid: 1, id: 5, splineName: "chicken", name: "烤雞腿", type: "protein", calories: 165, protein: 25, carbs: 0, fat: 6, description: "烤雞腿肉質嫩滑多汁，是高蛋白質且低碳水化合物的食材。富含人體必需胺基酸，有助於肌肉修復和生長，非常適合健身及健康飲食者。", image: "/assets/ingredientsImage/chicken.png" },
    { typeid: 2, stateid: 2, id: 6, splineName: "steak", name: "厚切牛肉", type: "protein", calories: 250, protein: 26, carbs: 0, fat: 17, description: "厚切牛肉提供豐富的鐵質與維生素B群，有助於提升體力和促進紅血球生成。其扎實口感與濃郁香氣，使其成為營養與美味兼具的蛋白質來源。", image: "/assets/ingredientsImage/steak.png" },
    { typeid: 2, stateid: 3, id: 7, splineName: "simon", name: "鮭魚", type: "protein", calories: 208, protein: 20, carbs: 0, fat: 13, description: "鮭魚富含Omega-3脂肪酸，對心血管健康及抗發炎有明顯益處。口感細膩油潤，是營養價值極高且味道鮮美的魚類蛋白質來源。", image: "/assets/ingredientsImage/salmon.png" },
    { typeid: 2, stateid: 4, id: 8, splineName: "tofu", name: "豆腐", type: "protein", calories: 76, protein: 8, carbs: 1.9, fat: 4.2, description: "豆腐是優質植物性蛋白質，脂肪含量低且富含鈣質，有助於骨骼健康。口感細嫩，能吸收各種調味，是素食者的理想蛋白質選擇。", image: "/assets/ingredientsImage/tofu.png" },
  ],
  step3: [
    { typeid: 3, stateid: 1, id: 9, splineName: "Brocoli", name: "花椰菜", type: "vegetable", calories: 55, protein: 4.0, carbs: 11, fat: 0.6, description: "花椰菜富含膳食纖維及多種維生素，尤其是維生素C與K，有助於免疫系統及骨骼健康。低熱量且有助於消化，適合日常健康飲食。", image: "/assets/ingredientsImage/brocoli.png" },
    { typeid: 3, stateid: 2, id: 10, splineName: "carrot", name: "胡蘿蔔", type: "vegetable", calories: 41, protein: 0.9, carbs: 10, fat: 0.2, description: "胡蘿蔔含豐富的β-胡蘿蔔素，能在體內轉化為維生素A，有助於視力保健與皮膚健康。甜脆口感讓它成為營養又美味的蔬菜選擇。", image: "/assets/ingredientsImage/carrot.png" },
    { typeid: 3, stateid: 3, id: 11, splineName: "cucumber", name: "小黃瓜", type: "vegetable", calories: 15, protein: 0.6, carbs: 3.6, fat: 0.1, description: "小黃瓜含有大量水分，能有效補充水分並促進代謝。口感清爽，熱量低，是夏季解暑及清淡飲食的理想選擇。", image: "/assets/ingredientsImage/cucumber.png" },
    { typeid: 3, stateid: 4, id: 12, splineName: "eggplant", name: "茄子", type: "vegetable", calories: 25, protein: 1.0, carbs: 6, fat: 0.2, description: "茄子富含抗氧化物質，有助於心臟健康與降低慢性疾病風險。口感柔軟細膩，適合各種烹調方式，增添菜餚風味。", image: "/assets/ingredientsImage/eggplant.png" },
    { typeid: 3, stateid: 5, id: 13, splineName: "tamato", name: "小番茄", type: "vegetable", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, description: "小番茄含有豐富的茄紅素，具強效抗氧化功能，有助於保護細胞健康並促進免疫力。甜美多汁，是營養與口感兼具的蔬果。", image: "/assets/ingredientsImage/tomato.png" },
    { typeid: 3, stateid: 6, id: 14, splineName: "Veg1", name: "青江菜", type: "vegetable", calories: 13, protein: 1.5, carbs: 2.2, fat: 0.2, description: "青江菜低熱量且富含鈣質與維生素A，有助於骨骼和視力健康。口感鮮嫩，是日常蔬菜料理中不可或缺的營養來源。", image: "/assets/ingredientsImage/veg1.png" },
    { typeid: 3, stateid: 7, id: 16, splineName: "Veg2", name: "大陸妹", type: "vegetable", calories: 18, protein: 2.0, carbs: 3.5, fat: 0.3, description: "大陸妹含有豐富的維生素C及膳食纖維，有助於促進消化及提升免疫力。葉片鮮綠，口感爽脆，是常見的健康青菜選擇。", image: "/assets/ingredientsImage/veg2.png" },
    { typeid: 3, stateid: 8, id: 17, splineName: "beans", name: "扁豌豆", type: "vegetable", calories: 42, protein: 3.0, carbs: 7.1, fat: 0.3, description: "扁豌豆含有豐富的葉酸與維生素K，有助於促進血液健康與骨骼強健。此外，富含膳食纖維，能改善腸道功能，促進消化健康。", image: "/assets/ingredientsImage/beans.png" },
    { typeid: 3, stateid: 9, id: 18, splineName: "Veg3", name: "空心菜", type: "vegetable", calories: 24, protein: 1.5, carbs: 3.1, fat: 0.3, description: "空心菜富含膳食纖維與維生素A，能促進腸道蠕動及視力健康。其鮮嫩多汁的口感，適合多種烹調方式，兼具營養與美味。", image: "/assets/ingredientsImage/veg3.png" },
    { typeid: 3, stateid: 10,id: 19, splineName: "okra", name: "秋葵", type: "vegetable", calories: 33, protein: 2.0, carbs: 7.4, fat: 0.1, description: "秋葵富含膳食纖維與抗氧化物質，有助於促進腸胃健康並減少炎症反應。獨特黏稠質地使其適合燉煮及湯品料理。", image: "/assets/ingredientsImage/okra.png" },
    { typeid: 3, stateid: 11,id: 20, splineName: "tofuSide", name: "豆腐", type: "vegetable", calories: 35, protein: 3.0, carbs: 4.4, fat: 0.1, description: "豆腐為植物性優質蛋白質來源，口感細膩嫩滑，易於吸收各種調味。含豐富鈣質，對骨骼健康有益，是健康飲食的理想選擇。", image: "/assets/ingredientsImage/tofu.png" },
    { typeid: 3, stateid: 12,id: 21, splineName: "drytofu", name: "豆干", type: "vegetable", calories: 48, protein: 3.0, carbs: 5.2, fat: 0.4, description: "豆干口感紮實，常以鹹甜醬汁熬煮，風味獨特且開胃。富含植物蛋白及微量元素，是日常餐桌上受歡迎的健康食材。", image: "/assets/ingredientsImage/driedTofu.png" },
    { typeid: 3, stateid: 13,id: 22, splineName: "pumkin", name: "南瓜", type: "vegetable", calories: 40, protein: 1.2, carbs: 7.3, fat: 0.1, description: "南瓜富含膳食纖維和多種維生素，熱量低且具飽足感。其天然甜味與柔軟質地，使其成為多種料理中健康又美味的食材。", image: "/assets/ingredientsImage/pumpkin.png" },
  ],
  step4: [
    { typeid: 4, stateid: 1, id: 23, splineName: "Egg", name: "水煮蛋", type: "other", calories: 68, protein: 5.5, carbs: 0.6, fat: 4.8, description: "水煮蛋是完整的蛋白質來源，富含膽鹼與維生素B群，對腦部健康及新陳代謝有顯著幫助。簡單烹調保持營養完整，是健康飲食的良好選擇。", image: "/assets/ingredientsImage/eggs.png" },
    { typeid: 4, stateid: 2, id: 24, splineName: "Corn", name: "玉米", type: "other", calories: 96, protein: 3.2, carbs: 21, fat: 1.5, description: "玉米富含膳食纖維及維生素B群，有助於促進消化和能量代謝。甜脆口感與自然甜味，讓它成為營養豐富且適合多種料理的食材。", image: "/assets/ingredientsImage/corn.png" },
  ],
};

export const orderHints = [
  "選擇1樣澱粉基底",
  "選擇1樣蛋白質主食",
  "選擇4樣配菜",
  "是否需要水煮蛋與玉米"
];

export const typeMap = {
  starch: '澱粉基底',
  protein: '蛋白質主菜',
  vegetable: '配菜',
  other: '其他'
};

export const ingredientToName = {
  steak: ["厚厚厚牛牛便當", "牛來運轉便當", "牛味十足便當", "嫩煎牛排便當", "牛牛便當"],
  chicken: ["雞不可失便當", "雞來運轉便當", "香烤G腿便當", "雞腿控便當", "義式烤雞腿便當"],
  tofu: ["柔情似豆腐便當","豆你玩便當", "豆腐方塊便當", "和風豆腐便當"],
  simon: ["鮭心似魚便當", "鮭鮭便當", "鮭喜發財便當", "豪華鮭魚便當", "鹽烤鮭魚便當"],
  no_main: ["菜菜便當", "主菜去哪了便當", "主菜缺席便當", "配菜大餐便當"],
  empty: ["空空如也便當", "空無一物便當", "便當紙盒便當"],
};

export const ingredientChooseCount = [1, 1, 4, 2]; // 每個步驟選擇的食材數量