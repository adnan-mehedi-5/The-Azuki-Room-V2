export interface MenuItem {
  id: string;
  name: string;
  kanji?: string;
  category: 'robata' | 'sushi' | 'lunch' | 'sushi-club' | 'drinks';
  description: string;
  price: string;
  tag?: string;
  image?: string;
  dietary?: string[];
}

export interface MenuDocument {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  type: 'pdf' | 'jpg';
  pages?: string;
}

export const MENU_DOCUMENTS: MenuDocument[] = [
  {
    id: "main-menu",
    title: "A La Carte & Robata",
    subtitle: "Robatayaki, Yakitori, Raw Bar & Charcoal Specialties",
    path: `${import.meta.env.BASE_URL}menus/the-azuki-room-menu.pdf`,
    type: "pdf"
  },
  {
    id: "sushi-menu",
    title: "Sushi & Sashimi Bar",
    subtitle: "Moriawase, Speciality Rolls & Cut Rolls",
    path: `${import.meta.env.BASE_URL}menus/sushi-menu.jpg`,
    type: "jpg"
  },
  {
    id: "lunch-menu",
    title: "Lunchtime Ramen & Bento",
    subtitle: "Weekday Midday Service (12:00 – 15:00)",
    path: `${import.meta.env.BASE_URL}menus/lunch-menu.jpg`,
    type: "jpg"
  },
  {
    id: "sushi-club-menu",
    title: "Saturday Sushi Club",
    subtitle: "90-Minute Unlimited Dining Experience",
    path: `${import.meta.env.BASE_URL}menus/saturday-sushi-club.pdf`,
    type: "pdf"
  },
  {
    id: "events-menu",
    title: "Private Dining & Set Menus",
    subtitle: "Curated Set Menus for Parties & Private Hire",
    path: `${import.meta.env.BASE_URL}menus/event-set-menus.pdf`,
    type: "pdf"
  },
  {
    id: "drinks-menu",
    title: "Botanicals & Artisanal Teas",
    subtitle: "Cold-Pressed Mocktails, Infusions & Rare Teas",
    path: `${import.meta.env.BASE_URL}menus/drinks-menu.pdf`,
    type: "pdf"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Robata & Yakitori
  {
    id: "negima",
    name: "Chicken & Tokyo Leek Negima",
    kanji: "ねぎま",
    category: "robata",
    description: "Corn-fed chicken thigh skewer char-grilled over Kishu binchotan with aged sweet tare glaze.",
    price: "£8.50",
    tag: "Signature Robata",
    image: `${import.meta.env.BASE_URL}images/food/chicken-leek-yakitori.webp`,
    dietary: ["Halal"]
  },
  {
    id: "beef-tataki",
    name: "Seared Wagyu Tataki",
    kanji: "牛たたき",
    category: "robata",
    description: "Lightly torched premium beef with ponzu reduction, garlic crisps, and sliced fresh chives.",
    price: "£18.50",
    tag: "Chef's Cut",
    image: `${import.meta.env.BASE_URL}images/food/beef-tataki.webp`,
    dietary: ["Halal"]
  },
  {
    id: "lamb-cutlets",
    name: "Spiced Robata Lamb Cutlets",
    kanji: "羊肉串",
    category: "robata",
    description: "Tender lamb chops grilled over charcoal embers with sansho pepper and house fermented miso glaze.",
    price: "£16.00",
    image: `${import.meta.env.BASE_URL}images/food/lamb-chops-close.webp`,
    dietary: ["Halal"]
  },
  {
    id: "grilled-fish",
    name: "Whole Binchotan Sea Bass",
    kanji: "スズキ塩焼き",
    category: "robata",
    description: "Butterflied whole sea bass roasted over smoke with Okinawa sea salt and citrus grated daikon.",
    price: "£22.00",
    image: `${import.meta.env.BASE_URL}images/food/grilled-fish-whole.webp`,
    dietary: ["Halal", "Gluten-Free"]
  },
  {
    id: "tiger-prawns",
    name: "Charred Tiger Prawns",
    kanji: "車海老",
    category: "robata",
    description: "Jumbo wild prawns brushed with smoked yuzu butter and shiso gremolata.",
    price: "£14.00",
    image: `${import.meta.env.BASE_URL}images/food/tiger-prawn-plated.webp`,
    dietary: ["Halal"]
  },
  {
    id: "nasu-dengaku",
    name: "Nasu Dengaku Aubergine",
    kanji: "茄子田楽",
    category: "robata",
    description: "Silky caramelized Japanese aubergine with rich sweet red miso and toasted white sesame.",
    price: "£9.50",
    tag: "Plant-Based",
    image: `${import.meta.env.BASE_URL}images/food/miso-aubergine.webp`,
    dietary: ["Halal", "Vegetarian", "Vegan"]
  },
  {
    id: "grilled-squid",
    name: "Charcoal Grilled Squid",
    kanji: "イカ焼き",
    category: "robata",
    description: "Flame-kissed whole squid rings with ginger glaze, fresh chili, and togarashi mayo.",
    price: "£13.50",
    image: `${import.meta.env.BASE_URL}images/food/grilled-squid.webp`,
    dietary: ["Halal"]
  },

  // Sushi & Sashimi
  {
    id: "dragon-roll",
    name: "The Azuki Dragon Roll",
    kanji: "ドラゴン巻き",
    category: "sushi",
    description: "Crispy wild tiger prawn tempura, cucumber, wrapped in buttery ripe avocado with kabayaki glaze.",
    price: "£16.50",
    tag: "Most Requested",
    image: `${import.meta.env.BASE_URL}images/food/dragon-roll.webp`,
    dietary: ["Halal"]
  },
  {
    id: "nigiri-moriawase",
    name: "Imperial Nigiri Moriawase",
    kanji: "握り盛り合わせ",
    category: "sushi",
    description: "Six pieces of seasonal prime sashimi grade cuts: Akami, Scottish Salmon, Hamachi & Botan Ebi.",
    price: "£26.00",
    image: `${import.meta.env.BASE_URL}images/food/nigiri-prawn-tuna.webp`,
    dietary: ["Halal"]
  },
  {
    id: "unagi-claypot",
    name: "Unagi & Rice Kamameshi",
    kanji: "鰻釜飯",
    category: "sushi",
    description: "Caramelized freshwater eel cooked over Japanese short-grain rice with tare reduction and sansho.",
    price: "£24.00",
    tag: "Signature Pot",
    image: `${import.meta.env.BASE_URL}images/food/unagi-claypot.webp`,
    dietary: ["Halal"]
  },
  {
    id: "sharing-feast",
    name: "Izakaya Sharing Selection",
    kanji: "おまかせ",
    category: "sushi",
    description: "A complete curation of raw, tempura, and robata plates for intimate communal dining.",
    price: "£48.00",
    image: `${import.meta.env.BASE_URL}images/food/sharing-table-overhead.webp`,
    dietary: ["Halal"]
  },

  // Lunch & Ramen
  {
    id: "halal-paitan",
    name: "Tori Paitan Ramen",
    kanji: "鶏白湯ラーメン",
    category: "lunch",
    description: "12-hour simmered velvety chicken broth, hand-crafted wheat noodles, nitamago egg, nori and menma.",
    price: "£15.50",
    tag: "Lunch Only",
    dietary: ["Halal"]
  },
  {
    id: "spicy-tantanmen",
    name: "Tokyo Spicy Tantanmen",
    kanji: "担々麺",
    category: "lunch",
    description: "Roasted sesame broth with minced spiced chicken, rayu chili oil, bok choy, and crispy shallots.",
    price: "£16.00",
    dietary: ["Halal"]
  },
  {
    id: "chicken-karaage-don",
    name: "Crispy Karaage Bento",
    kanji: "唐揚げ定食",
    category: "lunch",
    description: "Double-fried ginger chicken thigh pieces with Japanese potato salad, steamed koshihikari rice, and miso soup.",
    price: "£14.50",
    dietary: ["Halal"]
  },

  // Saturday Sushi Club
  {
    id: "sushi-club-classic",
    name: "Saturday Sushi Club (Standard)",
    kanji: "寿司クラブ",
    category: "sushi-club",
    description: "90 minutes of unlimited hand-rolled sushi, nigiri, sashimi, and hot izakaya small plates.",
    price: "£49.00 / guest",
    tag: "Every Saturday",
    image: `${import.meta.env.BASE_URL}images/food/dragon-roll.webp`,
    dietary: ["Halal"]
  },
  {
    id: "sushi-club-paired",
    name: "Saturday Sushi Club (With Pairings)",
    kanji: "寿司クラブ・ペアリング",
    category: "sushi-club",
    description: "The full 90-minute unlimited sushi feast paired with 4 curated artisanal tea and mocktail botanical flights.",
    price: "£75.00 / guest",
    tag: "Signature Experience",
    image: `${import.meta.env.BASE_URL}images/food/cocktail-window-light.webp`,
    dietary: ["Halal"]
  },

  // Drinks
  {
    id: "tokyo-blossom",
    name: "Tokyo Blossom Elixir",
    kanji: "東京ブロッサム",
    category: "drinks",
    description: "Distilled botanical blend of lychee, white peach puree, cold-steeped jasmine tea, and sparkling dry tonic.",
    price: "£8.50",
    image: `${import.meta.env.BASE_URL}images/food/cocktail-window-light.webp`,
    dietary: ["Halal", "Non-Alcoholic"]
  },
  {
    id: "yuzu-charcoal",
    name: "Smoked Yuzu Highball",
    kanji: "柚子ハイボール",
    category: "drinks",
    description: "Cold-pressed Kochi yuzu juice, charred green tea tincture, and crisp soda over hand-carved ice.",
    price: "£9.00",
    dietary: ["Halal", "Non-Alcoholic"]
  },
  {
    id: "uji-matcha",
    name: "Ceremonial Grade Uji Matcha",
    kanji: "宇治抹茶",
    category: "drinks",
    description: "First-harvest ceremonial matcha from Kyoto, hand-whisked to order. Served warm or chilled.",
    price: "£6.00",
    dietary: ["Halal", "Vegan"]
  }
];

export const RESTAURANT_INFO = {
  name: "The Azuki Room",
  legalName: "The Azuki Room London",
  tagline: "A Hidden World of Japanese Dining",
  address: "Rolls Passage, off 36 Chancery Lane",
  city: "London",
  postcode: "EC4A 1HL",
  tube: "Chancery Lane Station (Central Line — 2 min walk)",
  phone: "0207 078 0135",
  phoneIntl: "+442070780135",
  email: "info@theazukiroom.com",
  instagram: "https://www.instagram.com/the_azuki_room",
  mapsUrl: "https://maps.app.goo.gl/p3UmPCVoQV4oh3VK9?g_st=ic",
  openTableId: "541284",
  capacity: "30 intimate covers",
  halal: "100% Halal certified meats & zero-alcohol culinary kitchen",
  hours: [
    { day: "Monday", lunch: "12:00 – 15:00", dinner: "17:00 – 22:30" },
    { day: "Tuesday", lunch: "12:00 – 15:00", dinner: "17:00 – 22:30" },
    { day: "Wednesday", lunch: "12:00 – 15:00", dinner: "17:00 – 22:30" },
    { day: "Thursday", lunch: "12:00 – 15:00", dinner: "17:00 – 22:30" },
    { day: "Friday", lunch: "12:00 – 15:00", dinner: "17:00 – 22:30" },
    { day: "Saturday", continuous: "12:00 – 22:30 (Sushi Club from 12:00)" },
    { day: "Sunday", closed: true }
  ]
};
