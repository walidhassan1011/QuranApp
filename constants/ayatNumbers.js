const numbers = [
  ["Al-Faatiha", 7],
  ["Al-Baqara", 286],
  ["Aal-i-Imraan", 200],
  ["An-Nisaa", 176],
  ["Al-Maaida", 120],
  ["Al-An'aam", 165],
  ["Al-A'raaf", 206],
  ["Al-Anfaal", 75],
  ["At-Tawba", 129],
  ["Yunus", 109],
  ["Hud", 123],
  ["Yusuf", 111],
  ["Ar-Ra'd", 43],
  ["Ibrahim", 52],
  ["Al-Hijr", 99],
  ["An-Nahl", 128],
  ["Al-Israa", 111],
  ["Al-Kahf", 110],
  ["Maryam", 98],
  ["Taa-Haa", 135],
  ["Al-Anbiyaa", 112],
  ["Al-Hajj", 78],
  ["Al-Muminoon", 118],
  ["An-Noor", 64],
  ["Al-Furqaan", 77],
  ["Ash-Shu'araa", 227],
  ["An-Naml", 93],
  ["Al-Qasas", 88],
  ["Al-Ankaboot", 69],
  ["Ar-Room", 60],
  ["Luqman", 34],
  ["As-Sajda", 30],
  ["Al-Ahzaab", 73],
  ["Saba", 54],
  ["Faatir", 45],
  ["Yaseen", 83],
  ["As-Saaffaat", 182],
  ["Saad", 88],
  ["Az-Zumar", 75],
  ["Al-Ghaafir", 85],
  ["Fussilat", 54],
  ["Ash-Shura", 53],
  ["Az-Zukhruf", 89],
  ["Ad-Dukhaan", 59],
  ["Al-Jaathiya", 37],
  ["Al-Ahqaf", 35],
  ["Muhammad", 38],
  ["Al-Fath", 29],
  ["Al-Hujuraat", 18],
  ["Qaaf", 45],
  ["Adh-Dhaariyat", 60],
  ["At-Tur", 49],
  ["An-Najm", 62],
  ["Al-Qamar", 55],
  ["Ar-Rahmaan", 78],
  ["Al-Waaqia", 96],
  ["Al-Hadid", 29],
  ["Al-Mujaadila", 22],
  ["Al-Hashr", 24],
  ["Al-Mumtahana", 13],
  ["As-Saff", 14],
  ["Al-Jumu'a", 11],
  ["Al-Munaafiqoon", 11],
  ["At-Taghaabun", 18],
  ["At-Talaaq", 12],
  ["At-Tahrim", 12],
  ["Al-Mulk", 30],
  ["Al-Qalam", 52],
  ["Al-Haaqqa", 52],
  ["Al-Ma'aarij", 44],
  ["Nooh", 28],
  ["Al-Jinn", 28],
  ["Al-Muzzammil", 20],
  ["Al-Muddaththir", 56],
  ["Al-Qiyaama", 40],
  ["Al-Insaan", 31],
  ["Al-Mursalaat", 50],
  ["An-Naba", 40],
  ["An-Naazi'aat", 46],
  ["Abasa", 42],
  ["At-Takwir", 29],
  ["Al-Infitaar", 19],
  ["Al-Mutaffifin", 36],
  ["Al-Inshiqaaq", 25],
  ["Al-Burooj", 22],
  ["At-Taariq", 17],
  ["Al-A'laa", 19],
  ["Al-Ghaashiya", 26],
  ["Al-Fajr", 30],
  ["Al-Balad", 20],
  ["Ash-Shams", 15],
  ["Al-Lail", 21],
  ["Ad-Dhuhaa", 11],
  ["Ash-Sharh", 8],
  ["At-Tin", 8],
  ["Al-Alaq", 19],
  ["Al-Qadr", 5],
  ["Al-Bayyina", 8],
  ["Az-Zalzala", 8],
  ["Al-Aadiyaat", 11],
  ["Al-Qaari'a", 11],
  ["At-Takaathur", 8],
  ["Al-Asr", 3],
  ["Al-Humaza", 9],
  ["Al-Fil", 5],
  ["Quraish", 4],
  ["Al-Maa'un", 7],
  ["Al-Kawthar", 3],
  ["Al-Kaafiroon", 6],
  ["An-Nasr", 3],
  ["Al-Masad", 5],
  ["Al-Ikhlaas", 4],
  ["Al-Falaq", 5],
  ["An-Naas", 6],
];

const VersesInEnglish = [
  {
    id: 1,
    surahName: "Al-Faatiha",
    fromAya: 1,
    toAya: 7,
  },
  {
    id: 2,
    surahName: "Al-Baqara",
    fromAya: 1,
    toAya: 286,
  },
  {
    id: 3,
    surahName: "Aal-i-Imraan",
    fromAya: 1,
    toAya: 200,
  },
  {
    id: 4,
    surahName: "An-Nisaa",
    fromAya: 1,
    toAya: 176,
  },
  {
    id: 5,
    surahName: "Al-Maaida",
    fromAya: 1,
    toAya: 120,
  },
  {
    id: 6,
    surahName: "Al-An'aam",
    fromAya: 1,
    toAya: 165,
  },
  {
    id: 7,
    surahName: "Al-A'raaf",
    fromAya: 1,
    toAya: 206,
  },
  {
    id: 8,
    surahName: "Al-Anfaal",
    fromAya: 1,
    toAya: 75,
  },
  {
    id: 9,
    surahName: "At-Tawba",
    fromAya: 1,
    toAya: 129,
  },
  {
    id: 10,
    surahName: "Yunus",
    fromAya: 1,
    toAya: 109,
  },
  {
    id: 11,
    surahName: "Hud",
    fromAya: 1,
    toAya: 123,
  },
  {
    id: 12,
    surahName: "Yusuf",
    fromAya: 1,
    toAya: 111,
  },
  {
    id: 13,
    surahName: "Ar-Ra'd",
    fromAya: 1,
    toAya: 43,
  },
  {
    id: 14,
    surahName: "Ibrahim",
    fromAya: 1,
    toAya: 52,
  },
  {
    id: 15,
    surahName: "Al-Hijr",
    fromAya: 1,
    toAya: 99,
  },
  {
    id: 16,
    surahName: "An-Nahl",
    fromAya: 1,
    toAya: 128,
  },
  {
    id: 17,
    surahName: "Al-Israa",
    fromAya: 1,
    toAya: 111,
  },
  {
    id: 18,
    surahName: "Al-Kahf",
    fromAya: 1,
    toAya: 110,
  },
  {
    id: 19,
    surahName: "Maryam",
    fromAya: 1,
    toAya: 98,
  },
  {
    id: 20,
    surahName: "Ta-Ha",
    fromAya: 1,
    toAya: 135,
  },
  {
    id: 21,
    surahName: "Al-Anbiyaa",
    fromAya: 1,
    toAya: 112,
  },
  {
    id: 22,
    surahName: "Al-Hajj",
    fromAya: 1,
    toAya: 78,
  },
  {
    id: 23,
    surahName: "Al-Mu'minoon",
    fromAya: 1,
    toAya: 118,
  },
  {
    id: 24,
    surahName: "An-Noor",
    fromAya: 1,
    toAya: 64,
  },
  {
    id: 25,
    surahName: "Al-Furqaan",
    fromAya: 1,
    toAya: 77,
  },
  {
    id: 26,
    surahName: "Ash-Shu'araa",
    fromAya: 1,
    toAya: 227,
  },
  {
    id: 27,
    surahName: "An-Naml",
    fromAya: 1,
    toAya: 93,
  },
  {
    id: 28,
    surahName: "Al-Qasas",
    fromAya: 1,
    toAya: 88,
  },
  {
    id: 29,
    surahName: "Al-Ankaboot",
    fromAya: 1,
    toAya: 69,
  },
  {
    id: 30,
    surahName: "Ar-Room",
    fromAya: 1,
    toAya: 60,
  },
  {
    id: 31,
    surahName: "Luqman",
    fromAya: 1,
    toAya: 34,
  },
  {
    id: 32,
    surahName: "As-Sajda",
    fromAya: 1,
    toAya: 30,
  },
  {
    id: 33,
    surahName: "Al-Ahzaab",
    fromAya: 1,
    toAya: 73,
  },
  {
    id: 34,
    surahName: "Saba",
    fromAya: 1,
    toAya: 54,
  },
  {
    id: 35,
    surahName: "Fatir",
    fromAya: 1,
    toAya: 45,
  },
  {
    id: 36,
    surahName: "Ya-Sin",
    fromAya: 1,
    toAya: 83,
  },
  {
    id: 37,
    surahName: "As-Saaffaat",
    fromAya: 1,
    toAya: 182,
  },
  {
    id: 38,
    surahName: "Sad",
    fromAya: 1,
    toAya: 88,
  },
  {
    id: 39,
    surahName: "Az-Zumar",
    fromAya: 1,
    toAya: 75,
  },
  {
    id: 40,
    surahName: "Ghafir",
    fromAya: 1,
    toAya: 85,
  },
  {
    id: 41,
    surahName: "Fussilat",
    fromAya: 1,
    toAya: 54,
  },
  {
    id: 42,
    surahName: "Ash-Shura",
    fromAya: 1,
    toAya: 53,
  },
  {
    id: 43,
    surahName: "Az-Zukhruf",
    fromAya: 1,
    toAya: 89,
  },
  {
    id: 44,
    surahName: "Ad-Dukhaan",
    fromAya: 1,
    toAya: 59,
  },
  {
    id: 45,
    surahName: "Al-Jaathiya",
    fromAya: 1,
    toAya: 37,
  },
  {
    id: 46,
    surahName: "Al-Ahqaf",
    fromAya: 1,
    toAya: 35,
  },
  {
    id: 47,

    surahName: "Muhammad",
    fromAya: 1,
    toAya: 38,
  },
  {
    id: 48,
    surahName: "Al-Fath",
    fromAya: 1,
    toAya: 29,
  },
  {
    id: 49,
    surahName: "Al-Hujuraat",
    fromAya: 1,
    toAya: 18,
  },
  {
    id: 50,
    surahName: "Qaaf",
    fromAya: 1,
    toAya: 45,
  },
  {
    id: 51,
    surahName: "Adh-Dhaariyat",
    fromAya: 1,
    toAya: 60,
  },
  {
    id: 52,
    surahName: "At-Tur",
    fromAya: 1,
    toAya: 49,
  },
  {
    id: 53,
    surahName: "An-Najm",
    fromAya: 1,
    toAya: 62,
  },
  {
    id: 54,
    surahName: "Al-Qamar",
    fromAya: 1,
    toAya: 55,
  },
  {
    id: 55,
    surahName: "Ar-Rahmaan",
    fromAya: 1,
    toAya: 78,
  },
  {
    id: 56,
    surahName: "Al-Waaqia",
    fromAya: 1,
    toAya: 96,
  },
  {
    id: 57,
    surahName: "Al-Hadid",
    fromAya: 1,
    toAya: 29,
  },
  {
    id: 58,
    surahName: "Al-Mujaadila",
    fromAya: 1,
    toAya: 22,
  },
  {
    id: 59,
    surahName: "Al-Hashr",
    fromAya: 1,
    toAya: 24,
  },
  {
    id: 60,
    surahName: "Al-Mumtahana",
    fromAya: 1,
    toAya: 13,
  },
  {
    id: 61,

    surahName: "As-Saff",
    fromAya: 1,
    toAya: 14,
  },
  {
    id: 62,
    surahName: "Al-Jumu'a",
    fromAya: 1,
    toAya: 11,
  },
  {
    id: 63,
    surahName: "Al-Munaafiqoon",

    fromAya: 1,
    toAya: 11,
  },
  {
    id: 64,
    surahName: "At-Taghaabun",
    fromAya: 1,
    toAya: 18,
  },
  {
    id: 65,
    surahName: "At-Talaaq",
    fromAya: 1,
    toAya: 12,
  },
  {
    id: 66,
    surahName: "At-Tahrim",
    fromAya: 1,
    toAya: 12,
  },
  {
    id: 67,
    surahName: "Al-Mulk",
    fromAya: 1,
    toAya: 30,
  },
  {
    id: 68,
    surahName: "Al-Qalam",
    fromAya: 1,
    toAya: 52,
  },
  {
    id: 69,
    surahName: "Al-Haaqqa",
    fromAya: 1,
    toAya: 52,
  },
  {
    id: 70,
    surahName: "Al-Ma'aarij",
    fromAya: 1,
    toAya: 44,
  },
  {
    id: 71,
    surahName: "Nooh",
    fromAya: 1,
    toAya: 28,
  },
  {
    id: 72,
    surahName: "Al-Jinn",
    fromAya: 1,
    toAya: 28,
  },
  {
    id: 73,
    surahName: "Al-Muzzammil",
    fromAya: 1,
    toAya: 20,
  },
  {
    id: 74,
    surahName: "Al-Muddaththir",
    fromAya: 1,
    toAya: 56,
  },
  {
    id: 75,
    surahName: "Al-Qiyaama",
    fromAya: 1,
    toAya: 40,
  },
  {
    id: 76,
    surahName: "Al-Insaan",
    fromAya: 1,
    toAya: 31,
  },
  {
    id: 77,
    surahName: "Al-Mursalaat",
    fromAya: 1,
    toAya: 50,
  },
  {
    id: 78,
    surahName: "An-Naba",
    fromAya: 1,
  },
  {
    id: 79,
    surahName: "An-Naazi'aat",
    fromAya: 1,
    toAya: 40,
  },
  {
    id: 80,
    surahName: "Abasa",
    fromAya: 1,
    toAya: 46,
  },
  {
    id: 81,
    surahName: "At-Takwir",
    fromAya: 1,
    toAya: 42,
  },
  {
    id: 82,
    surahName: "Al-Infitar",
    fromAya: 1,
    toAya: 29,
  },
  {
    id: 83,
    surahName: "Al-Mutaffifin",
    fromAya: 1,
    toAya: 19,
  },
  {
    id: 84,
    surahName: "Al-Inshiqaq",
    fromAya: 1,
    toAya: 36,
  },
  {
    id: 85,
    surahName: "Al-Burooj",
    fromAya: 1,
    toAya: 25,
  },
  {
    id: 86,
    surahName: "At-Taariq",
    fromAya: 1,
    toAya: 22,
  },
  {
    id: 87,
    surahName: "Al-A'laa",
    fromAya: 1,
    toAya: 17,
  },
  {
    id: 88,
    surahName: "Al-Ghaashiya",
    fromAya: 1,
    toAya: 19,
  },
  {
    id: 89,
    surahName: "Al-Fajr",
    fromAya: 1,
    toAya: 26,
  },
  {
    id: 90,
    surahName: "Al-Balad",
    fromAya: 1,
    toAya: 30,
  },
  {
    id: 91,
    surahName: "Ash-Shams",
    fromAya: 1,
    toAya: 20,
  },
  {
    id: 92,
    surahName: "Al-Lail",
    fromAya: 1,
    toAya: 15,
  },
  {
    id: 93,
    surahName: "Ad-Dhuhaa",
    fromAya: 1,
    toAya: 21,
  },
  {
    id: 94,
    surahName: "Ash-Sharh",
    fromAya: 1,
    toAya: 11,
  },
  {
    id: 95,
    surahName: "At-Tin",
    fromAya: 1,
    toAya: 8,
  },
  {
    id: 96,
    surahName: "Al-Alaq",
    fromAya: 1,
    toAya: 19,
  },
  {
    id: 97,

    surahName: "Al-Qadr",
    fromAya: 1,

    toAya: 5,
  },
  {
    id: 98,
    surahName: "Al-Bayyina",
    fromAya: 1,
    toAya: 8,
  },
  {
    id: 99,
    surahName: "Az-Zalzala",
    fromAya: 1,
    toAya: 8,
  },
  {
    id: 100,
    surahName: "Al-Aadiyaat",
    fromAya: 1,
    toAya: 11,
  },
  {
    id: 101,
    surahName: "Al-Qaari'a",
    fromAya: 1,
    toAya: 11,
  },
  {
    id: 102,
    surahName: "At-Takaathur",
    fromAya: 1,
    toAya: 8,
  },
  {
    id: 103,
    surahName: "Al-Asr",
    fromAya: 1,
    toAya: 3,
  },
  {
    id: 104,

    surahName: "Al-Humaza",
    fromAya: 1,
    toAya: 9,
  },
  {
    id: 105,
    surahName: "Al-Fil",
    fromAya: 1,
    toAya: 5,
  },
  {
    id: 106,
    surahName: "Quraish",
    fromAya: 1,
    toAya: 4,
  },
  {
    id: 107,
    surahName: "Al-Maa'un",
    fromAya: 1,
    toAya: 7,
  },
  {
    id: 108,
    surahName: "Al-Kawthar",
    fromAya: 1,
    toAya: 3,
  },
  {
    id: 109,
    surahName: "Al-Kaafiroon",
    fromAya: 1,
    toAya: 6,
  },
  {
    id: 110,
    surahName: "An-Nasr",
    fromAya: 1,
    toAya: 3,
  },
  {
    id: 111,
    surahName: "Al-Masad",
    fromAya: 1,

    toAya: 5,
  },
  {
    id: 112,
    surahName: "Al-Ikhlaas",
    fromAya: 1,
    toAya: 4,
  },
  {
    id: 113,
    surahName: "Al-Falaq",
    fromAya: 1,
    toAya: 5,
  },
  {
    id: 114,
    surahName: "An-Naas",
    fromAya: 1,
    toAya: 6,
  },
];
const versesInArabic = [
  {
    id: 1,
    surahName: "الفاتحة",
    fromAya: 1,
    toAya: 7,
  },
  { id: 2, surahName: "البقرة", fromAya: 1, toAya: 286 },

  {
    id: 3,
    surahName: "آل عمران",
    fromAya: 1,
    toAya: 200,
  },

  { id: 4, surahName: "النساء", fromAya: 1, toAya: 176 },
  {
    id: 5,
    surahName: "المائدة",
    fromAya: 1,
    toAya: 120,
  },
  {
    id: 6,
    surahName: "الأنعام",
    fromAya: 1,
    toAya: 165,
  },
  {
    id: 7,
    surahName: "الأعراف",
    fromAya: 1,
    toAya: 206,
  },
  { id: 8, surahName: "الأنفال", fromAya: 1, toAya: 75 },
  {
    id: 9,
    surahName: "التوبة",
    fromAya: 1,
    toAya: 129,
  },
  {
    id: 10,

    surahName: "يونس",
    fromAya: 1,
    toAya: 109,
  },
  {
    id: 11,
    surahName: "هود",
    fromAya: 1,
    toAya: 123,
  },
  {
    id: 12,
    surahName: "يوسف",
    fromAya: 1,
    toAya: 111,
  },
  {
    id: 13,

    surahName: "الرعد",
    fromAya: 1,
    toAya: 43,
  },
  {
    id: 14,
    surahName: "ابراهيم",
    fromAya: 1,
    toAya: 52,
  },
  {
    id: 15,
    surahName: "الحجر",
    fromAya: 1,
    toAya: 99,
  },

  {
    id: 16,
    surahName: "النحل",

    fromAya: 1,
    toAya: 128,
  },
  {
    id: 17,
    surahName: "الإسراء",
    fromAya: 1,
    toAya: 111,
  },
  {
    id: 18,
    surahName: "الكهف",
    fromAya: 1,
    toAya: 110,
  },
  {
    id: 19,
    surahName: "مريم",
    fromAya: 1,
    toAya: 98,
  },
  {
    id: 20,
    surahName: "طه",
    fromAya: 1,

    toAya: 135,
  },
  {
    id: 21,
    surahName: "الأنبياء",

    fromAya: 1,

    toAya: 112,
  },

  {
    id: 22,
    surahName: "الحج",
    fromAya: 1,

    toAya: 78,
  },
  {
    id: 23,
    surahName: "المؤمنون",
    fromAya: 1,

    toAya: 118,
  },
  {
    id: 24,
    surahName: "النور",
    fromAya: 1,
    toAya: 64,
  },
  {
    id: 25,
    surahName: "الفرقان",
    fromAya: 1,
    toAya: 77,
  },
  {
    id: 26,
    surahName: "الشعراء",
    fromAya: 1,
    toAya: 227,
  },
  {
    id: 27,
    surahName: "النمل",
    fromAya: 1,
    toAya: 93,
  },
  {
    id: 28,
    surahName: "القصص",
    fromAya: 1,
    toAya: 88,
  },
  {
    id: 29,
    surahName: "العنكبوت",
    fromAya: 1,
    toAya: 69,
  },
  {
    id: 30,
    surahName: "الروم",

    fromAya: 1,
    toAya: 60,
  },
  {
    id: 31,
    surahName: "لقمان",
    fromAya: 1,
    toAya: 34,
  },
  {
    id: 32,
    surahName: "السجدة",
    fromAya: 1,
    toAya: 30,
  },
  {
    id: 33,

    surahName: "الأحزاب",
    fromAya: 1,
    toAya: 73,
  },
  {
    id: 34,
    surahName: "سبأ",
    fromAya: 1,

    toAya: 54,
  },
  {
    id: 35,
    surahName: "فاطر",
    fromAya: 1,
    toAya: 45,
  },
  {
    id: 36,
    surahName: "يس",
    fromAya: 1,
    toAya: 83,
  },
  {
    id: 37,
    surahName: "الصافات",
    fromAya: 1,
    toAya: 182,
  },
  {
    id: 38,
    surahName: "ص",
    fromAya: 1,
    toAya: 88,
  },
  {
    id: 39,
    surahName: "الزمر",
    fromAya: 1,
    toAya: 75,
  },
  {
    id: 40,
    surahName: "غافر",
    fromAya: 1,
    toAya: 85,
  },
  {
    id: 41,
    surahName: "فصلت",
    fromAya: 1,

    toAya: 54,
  },
  {
    id: 42,

    surahName: "الشورى",
    fromAya: 1,
    toAya: 53,
  },
  {
    id: 43,
    surahName: "الزخرف",
    fromAya: 1,
    toAya: 89,
  },
  {
    id: 44,
    surahName: "الدخان",
    fromAya: 1,
    toAya: 59,
  },
  {
    id: 45,

    surahName: "الجاثية",
    fromAya: 1,
    toAya: 37,
  },
  {
    id: 46,
    surahName: "الأحقاف",
    fromAya: 1,
    toAya: 35,
  },
  {
    id: 47,
    surahName: "محمد",
    fromAya: 1,
    toAya: 38,
  },
  {
    id: 48,

    surahName: "الفتح",
    fromAya: 1,
    toAya: 29,
  },
  {
    id: 49,

    surahName: "الحجرات",
    fromAya: 1,
    toAya: 18,
  },
  {
    id: 50,
    surahName: "ق",
    fromAya: 1,
    toAya: 45,
  },
  {
    id: 51,
    surahName: "الذاريات",
    fromAya: 1,
    toAya: 60,
  },
  {
    id: 52,
    surahName: "الطور",
    fromAya: 1,
    toAya: 49,
  },
  {
    id: 53,
    surahName: "النجم",
    fromAya: 1,
    toAya: 62,
  },
  {
    id: 54,
    surahName: "القمر",
    fromAya: 1,
    toAya: 55,
  },
  {
    id: 55,
    surahName: "الرحمن",
    fromAya: 1,
    toAya: 78,
  },
  {
    id: 56,
    surahName: "الواقعة",
    fromAya: 1,
    toAya: 96,
  },
  {
    id: 57,
    surahName: "الحديد",
    fromAya: 1,
    toAya: 29,
  },
  {
    id: 58,
    surahName: "المجادلة",
    fromAya: 1,
    toAya: 22,
  },
  {
    id: 59,
    surahName: "الحشر",
    fromAya: 1,
    toAya: 24,
  },
  {
    id: 60,
    surahName: "الممتحنة",
    fromAya: 1,
    toAya: 13,
  },
  {
    id: 61,
    surahName: "الصف",
    fromAya: 1,
    toAya: 14,
  },
  {
    id: 62,

    surahName: "الجمعة",
    fromAya: 1,
    toAya: 11,
  },
  {
    id: 63,
    surahName: "المنافقون",

    fromAya: 1,
    toAya: 11,
  },
  {
    id: 64,
    surahName: "التغابن",
    fromAya: 1,
    toAya: 18,
  },
  {
    id: 65,

    surahName: "الطلاق",
    fromAya: 1,
    toAya: 12,
  },
  {
    id: 66,
    surahName: "التحريم",
    fromAya: 1,
    toAya: 12,
  },
  {
    id: 67,
    surahName: "الملك",
    fromAya: 1,
    toAya: 30,
  },
  {
    id: 68,
    surahName: "القلم",
    fromAya: 1,
    toAya: 52,
  },
  {
    id: 69,
    surahName: "الحاقة",
    fromAya: 1,
    toAya: 52,
  },
  {
    id: 70,
    surahName: "المعارج",
    fromAya: 1,
    toAya: 44,
  },
  {
    id: 71,
    surahName: "نوح",
    fromAya: 1,
    toAya: 28,
  },
  {
    id: 72,

    surahName: "الجن",
    fromAya: 1,

    toAya: 28,
  },
  {
    id: 73,
    surahName: "المزمل",

    fromAya: 1,

    toAya: 20,
  },
  {
    id: 74,

    surahName: "المدثر",

    fromAya: 1,

    toAya: 56,
  },
  {
    id: 75,

    surahName: "القيامة",

    fromAya: 1,

    toAya: 40,
  },
  {
    id: 76,

    surahName: "الانسان",

    fromAya: 1,

    toAya: 31,
  },
  {
    id: 77,

    surahName: "المرسلات",

    fromAya: 1,

    toAya: 50,
  },
  {
    id: 78,

    surahName: "النبأ",

    fromAya: 1,

    toAya: 40,
  },
  {
    id: 79,

    surahName: "النازعات",

    fromAya: 1,

    toAya: 46,
  },
  {
    id: 80,

    surahName: "عبس",

    fromAya: 1,

    toAya: 42,
  },
  {
    id: 81,

    surahName: "التكوير",

    fromAya: 1,

    toAya: 29,
  },
  {
    id: 82,

    surahName: "الانفطار",

    fromAya: 1,

    toAya: 19,
  },
  {
    id: 83,

    surahName: "المطففين",

    fromAya: 1,

    toAya: 36,
  },
  {
    id: 84,

    surahName: "الانشقاق",

    fromAya: 1,

    toAya: 25,
  },

  {
    id: 85,

    surahName: "البروج",

    fromAya: 1,

    toAya: 22,
  },
  {
    id: 86,

    surahName: "الطارق",

    fromAya: 1,

    toAya: 17,
  },

  {
    id: 87,

    surahName: "الاعلى",

    fromAya: 1,

    toAya: 19,
  },

  {
    id: 88,

    surahName: "الغاشية",

    fromAya: 1,

    toAya: 26,
  },
  {
    id: 89,

    surahName: "الفجر",

    fromAya: 1,

    toAya: 30,
  },
  {
    id: 90,

    surahName: "البلد",

    fromAya: 1,

    toAya: 20,
  },
  {
    id: 91,

    surahName: "الشمس",

    fromAya: 1,

    toAya: 15,
  },
  {
    id: 92,

    surahName: "الليل",

    fromAya: 1,

    toAya: 21,
  },

  {
    id: 93,

    surahName: "الضحى",

    fromAya: 1,

    toAya: 11,
  },
  {
    id: 94,

    surahName: "الشرح",

    fromAya: 1,

    toAya: 8,
  },
  {
    id: 95,

    surahName: "التين",

    fromAya: 1,

    toAya: 8,
  },
  {
    id: 96,

    surahName: "العلق",

    fromAya: 1,

    toAya: 19,
  },
  {
    id: 97,

    surahName: "القدر",

    fromAya: 1,

    toAya: 5,
  },
  {
    id: 98,

    surahName: "البينة",

    fromAya: 1,

    toAya: 8,
  },
  {
    id: 99,

    surahName: "الزلزلة",

    fromAya: 1,

    toAya: 8,
  },
  {
    id: 100,

    surahName: "العاديات",

    fromAya: 1,

    toAya: 11,
  },
  {
    id: 101,

    surahName: "القارعة",

    fromAya: 1,

    toAya: 11,
  },
  {
    id: 102,

    surahName: "التكاثر",

    fromAya: 1,

    toAya: 8,
  },
  {
    id: 103,

    surahName: "العصر",

    fromAya: 1,

    toAya: 3,
  },
  {
    id: 104,

    surahName: "الهمزة",

    fromAya: 1,

    toAya: 9,
  },
  {
    id: 105,

    surahName: "الفيل",

    fromAya: 1,

    toAya: 5,
  },
  {
    id: 106,

    surahName: "قريش",

    fromAya: 1,

    toAya: 4,
  },
  {
    id: 107,

    surahName: "الماعون",

    fromAya: 1,

    toAya: 7,
  },
  {
    id: 108,

    surahName: "الكوثر",

    fromAya: 1,

    toAya: 3,
  },
  {
    id: 109,

    surahName: "الكافرون",

    fromAya: 1,

    toAya: 6,
  },
  {
    id: 110,

    surahName: "النصر",

    fromAya: 1,

    toAya: 3,
  },
  {
    id: 111,

    surahName: "المسد",

    fromAya: 1,

    toAya: 5,
  },
  {
    id: 112,

    surahName: "الإخلاص",
    fromAya: 1,

    toAya: 4,
  },
  {
    id: 113,

    surahName: "الفلق",

    fromAya: 1,

    toAya: 5,
  },
  {
    id: 114,

    surahName: "الناس",

    fromAya: 1,

    toAya: 6,
  },
];

export { VersesInEnglish, numbers, versesInArabic };
