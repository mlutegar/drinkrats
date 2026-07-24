export const stats = {
  total: 77,
  periodDays: 88,
  startDate: '23 de Abril de 2026',
  endDate: '20 de Julho de 2026',

  participants: {
    michel: { name: 'Michel', count: 53, percent: 69 },
    maru: { name: 'Maru', count: 24, percent: 31 },
  },

  peakMonth: { name: 'Junho', count: 29 },
  months: [
    { name: 'Abr', count: 7 },
    { name: 'Mai', count: 21 },
    { name: 'Jun', count: 29 },
    { name: 'Jul', count: 20 },
  ],

  longestStreak: 3,
  streaks: [
    '23–25 Abr',
    '1–3 Mai',
    '4–6 Jun',
    '19–21 Jun',
  ],

  peakHour: '19h–21h',

  spellings: [
    { word: 'drink rats', count: 69, percent: 89.6, correct: true },
    { word: 'drink rat', count: 4, percent: 5.2, correct: false },
    { word: 'drinks rats', count: 4, percent: 5.2, correct: false },
  ],

  uniqueDays: 47,
  withPhoto: 95,

  origin: {
    date: '23 de Abril de 2026',
    time: '17:49',
    who: 'Maru',
    messages: [
      { who: 'maru', text: 'pra gnt contabilizar' },
      { who: 'maru', text: 'drink rat 🐀', first: true },
      { who: 'maru', text: 'pra gnt achar todas' },
      { who: 'michel', text: 'jae kkkkkk' },
      { who: 'michel', text: 'amei a ideia' },
      { who: 'michel', text: 'mano to bem bebado ainda da pra ve quando mexo no pc 💀' },
    ],
  },

  iconicMoments: [
    {
      who: 'Maru',
      text: '"to indo drink rats aguarde"',
      date: '09 Mai',
      emoji: '🚶',
    },
    {
      who: 'Michel',
      text: '"descansar um pouco meus figados"',
      date: '13 Jun',
      emoji: '💀',
    },
    {
      who: 'Maru',
      text: '"bday da tania hj drink rats"',
      date: '20 Jun',
      emoji: '🎂',
    },
    {
      who: 'Michel',
      text: '"Bebedouro de vodka nunca tinha visto"',
      date: '16 Mai',
      emoji: '😵',
    },
  ],
};
