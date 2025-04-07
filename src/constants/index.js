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
  },
  {
    id: 4,
    name: '個人頁面',
    href: '/profile',
  },
  {
    id: 5,
    name: '登入',
    href: '/login',
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
    { id: 1, name: "白飯", type: "starch", calories: 130, protein: 2.7, carbs: 28, fat: 0.3, description: "標準碳水來源，富含能量。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 2, name: "紫米飯", type: "starch", calories: 150, protein: 3.0, carbs: 33, fat: 0.8, description: "富含花青素，較有嚼勁。", image: "/assets/ingredientsImage/purpleRice.png" },
    { id: 3, name: "馬鈴薯泥", type: "starch", calories: 77, protein: 2.0, carbs: 17, fat: 0.1, description: "富含鉀與維生素C，飽足感高。", image: "/assets/ingredientsImage/potato.png" },
    { id: 4, name: "蕎麥麵", type: "starch", calories: 120, protein: 4.5, carbs: 24, fat: 0.6, description: "低GI碳水，含有豐富膳食纖維。", image: "/assets/ingredientsImage/noodles.png" },
  ],
  step2: [
    { id: 5, name: "烤雞腿", type: "protein", calories: 165, protein: 25, carbs: 0, fat: 6, description: "富含蛋白質，口感嫩滑。", image: "/assets/ingredientsImage/chicken.png" },
    { id: 6, name: "厚切牛肉", type: "protein", calories: 250, protein: 26, carbs: 0, fat: 17, description: "含鐵質與B群，增強體力。", image: "/assets/ingredientsImage/steak.png" },
    { id: 7, name: "鮭魚", type: "protein", calories: 208, protein: 20, carbs: 0, fat: 13, description: "富含Omega-3，有助於心血管健康。", image: "/assets/ingredientsImage/salmon.png" },
    { id: 8, name: "豆腐", type: "protein", calories: 76, protein: 8, carbs: 1.9, fat: 4.2, description: "植物性蛋白質來源，低脂肪。", image: "/assets/ingredientsImage/tofu.png" },
  ],
  step3: [
    { id: 9, name: "花椰菜", type: "vegetable", calories: 55, protein: 4.0, carbs: 11, fat: 0.6, description: "高纖維，富含維生素C與K。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 10, name: "胡蘿蔔", type: "vegetable", calories: 41, protein: 0.9, carbs: 10, fat: 0.2, description: "含β-胡蘿蔔素，有助於視力保健。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 11, name: "小黃瓜", type: "vegetable", calories: 15, protein: 0.6, carbs: 3.6, fat: 0.1, description: "水分含量高，清爽可口。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 12, name: "茄子", type: "vegetable", calories: 25, protein: 1.0, carbs: 6, fat: 0.2, description: "富含抗氧化物，有助於心臟健康。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 13, name: "小番茄", type: "vegetable", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, description: "富含茄紅素，有助於抗氧化。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 14, name: "青江菜", type: "vegetable", calories: 13, protein: 1.5, carbs: 2.2, fat: 0.2, description: "低熱量，高鈣質與維生素A。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 16, name: "大陸妹", type: "vegetable", calories: 18, protein: 2.0, carbs: 3.5, fat: 0.3, description: "富含膳食纖維，有助於消化。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 17, name: "扁豌豆", type: "vegetable", calories: 42, protein: 3.0, carbs: 7.1, fat: 0.3, description: "含有豐富的葉酸與維生素K。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 18, name: "空心菜", type: "vegetable", calories: 24, protein: 1.5, carbs: 3.1, fat: 0.3, description: "富含膳食纖維。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 19, name: "秋葵", type: "vegetable", calories: 33, protein: 2.0, carbs: 7.4, fat: 0.1, description: "富含膳食纖維，有助於腸胃健康。", image: "/assets/ingredientsImage/whiteRice.png" },
  ],
  step4: [
    { id: 20, name: "水煮蛋", type: "other", calories: 68, protein: 5.5, carbs: 0.6, fat: 4.8, description: "完整蛋白質來源，富含膽鹼與B群。", image: "/assets/ingredientsImage/whiteRice.png" },
    { id: 21, name: "玉米", type: "other", calories: 96, protein: 3.2, carbs: 21, fat: 1.5, description: "富含膳食纖維與維生素B群。", image: "/assets/ingredientsImage/whiteRice.png" },
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