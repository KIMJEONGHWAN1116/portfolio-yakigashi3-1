import product2 from '../assets/images/product2.svg';
import product3 from '../assets/images/product3.svg';
import product4 from '../assets/images/product4.svg';
import product5 from '../assets/images/product5.svg';
import product6 from '../assets/images/product6.svg';
import product7 from '../assets/images/product7.svg';
import no1 from '../assets/images/no1.svg';
import no2 from '../assets/images/no2.svg';
import no3 from '../assets/images/no3.svg';



export const products = [
  {
    id: 1,
    title: 'Organic Setouchi Lemon Cake',
    subtitle: '(オーガニック瀬戸内レモンケーキ)',
    description: '愛媛県産の無農薬レモンを使った、\n爽やかな香りとふんわり食感が魅力の、\nやさしい甘さの焼き菓子',
    price: '価格：1個 ¥330（税込）',
    image: product2,
    image2: no1,
    productKey: 'lemon',
    qty: 1
  },
  {
    id: 2,
    title: 'White Chocolate Lemon Cake',
    subtitle: '(ホワイトチョコレモンケーキ)',
    description: '瀬戸内レモンピールとホワイト\nチョコが奏でる、爽やかさと甘さの\n絶妙なバランス。',
    price: '価格：1個 ¥360（税込）',
    image: product3,
    image2: no2,
    link: '/shop/choco',
    productKey: 'White',
    qty: 2
  },
  {
    id: 3,
    title: 'Lemon Cookies',
    subtitle: '(レモンガレット)',
    description: 'ほどよい酸味とサクサク食感が\n魅力の、紅茶によく合う可愛らしい\nレモンクッキー',
    price: '価格：1袋 ¥330（税込）',
    image: product4,
    image2: no3,
    link: '/shop/nut',
    productKey: 'Cookies',
    qty: 3
  },
  {
    id: 4,
    title: 'Chocolate & Nut Cake',
    subtitle: '(チョコナッツケーキ)',
    description: 'ベルギー産のチョコを使用した生地に、\nアーモンドやくるみなどのナッツを\nたっぷり混ぜ込んだ焼き菓子です。',
    price: '価格：1個 ¥330（税込）',
    image: product5,
    image2: '',
    link: '/shop/lemon',
    productKey: 'Nut',
    qty: 4
  },
  {
    id: 5,
    title: 'Beurre de Neige',
    subtitle: '(ブールドネージュ)',
    description: 'ほろっとくずれる口どけと、\nバニラの香りがふわっと広がるクッキー。\nやさしい甘さでお子さまにも人気。',
    price: '価格：各1袋 ¥250（税込）',
    image: product6,
    link: '/shop/choco',
    productKey: 'Beurre',
    qty: 5
  },
  {
    id: 6,
    title: 'Florentin',
    subtitle: '(フロランタン)',
    description: '香ばしく焼き上げたキャラメル\nアーモンドの、サクッと広がる\n贅沢な味わい。',
    price: '価格：1個 ¥320（税込）',
    image: product7,
    link: '/shop/nut',
    productKey: 'Florentin',
    qty: 6
  }
];
