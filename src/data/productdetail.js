import detaillemon1 from '../assets/images/detaillemon1.svg'
import detaillemon2 from '../assets/images/detaillemon2.svg'
import detaillemon3 from '../assets/images/detaillemon3.svg'
import detaillemon4 from '../assets/images/detaillemon4.svg'

import detailwhite1 from '../assets/images/detailwhite1.svg'
import detailwhite2 from '../assets/images/detailwhite2.svg'
import detailwhite3 from '../assets/images/detailwhite3.svg'
import detailwhite4 from '../assets/images/detailwhite4.svg'

import detailCookie1 from '../assets/images/detailCookie1.png'
import detailCookie2 from '../assets/images/detailCookie2.png'
import detailCookie3 from '../assets/images/detailCookie3.png'
import detailCookie4 from '../assets/images/detailCookie4.svg'

import detailnut1 from '../assets/images/detailnut1.png'
import detailnut2 from '../assets/images/detailnut2.png'
import detailnut3 from '../assets/images/detailnut3.png'
import detailnut4 from '../assets/images/detailnut4.png'

import detailBeurre1 from '../assets/images/detailBeurre1.svg'
import detailBeurre2 from '../assets/images/detailBeurre2.svg'
import detailBeurre3 from '../assets/images/detailBeurre3.svg'
import detailBeurre4 from '../assets/images/detailBeurre4.svg'

import detailFlorentin1 from '../assets/images/detailFlorentin1.svg'
import detailFlorentin2 from '../assets/images/detailFlorentin2.svg'
import detailFlorentin3 from '../assets/images/detailFlorentin3.svg'
import detailFlorentin4 from '../assets/images/detailFlorentin4.svg'

import product1 from '../assets/images/product1.svg';


export const productDetails = [
    {
        slug: 'gift-box',
        title: 'Gift Box',
        subtitle: 'ギフトボックス',
        price: '価格：¥3,500（税込）',
        images: product1,
        productKey: 'gift-box'
    },
    {
        slug: 'lemon',
        title: 'Organic Setouchi Lemon Cake',
        subtitle: '(オーガニック瀬戸内レモンケーキ)',
        price: '価格：1個 ¥330（税込）',
        images: [
            detaillemon1,
            detaillemon2,
            detaillemon3,
            detaillemon4,
        ],
        description: [
            '愛媛県産の無農薬レモンを使った、\n爽やかな香りとふんわり食感が魅力の、\nやさしい甘さの焼き菓子',
        ],
        details: {
            原材料: [
                '小麦粉（国内製造）、バター、きび砂糖、卵、レモンパウダー、レモン（愛媛県産）、ピスタチオ'
            ],
            保存方法: [
                '高温多湿、直射日光を避けてください'
            ],
        },
        recommendIds: ['choco', 'nut'],
        productKey: 'lemon',
        qty: 1
    },
    {
        slug: 'White',
        title: 'White Chocolate Lemon Cake',
        subtitle: '(ホワイトチョコレモンケーキ)',
        price: '価格：1個 ¥360（税込）',
        images: [
            detailwhite1,
            detailwhite2,
            detailwhite3,
            detailwhite4,
        ],
        description: [
            '瀬戸内レモンピールとホワイト\nチョコが奏でる、爽やかさと甘さの\n絶妙なバランス。',
        ],
        details: {
            原材料: [
                '小麦粉（国内製造）、バター（国内製造）、卵（愛知産）、きび砂糖、ホワイトチョコレート、レモン、ベーキングパウダー'
            ],
            保存方法: [
                '高温多湿、直射日光を避けてください'
            ]
        },
        recommendIds: ['choco', 'nut'],
        productKey: 'White',
        qty: 2
    },
    {
        slug: 'Cookies',
        title: 'Lemon Cookies',
        subtitle: '(レモンガレット)',
        price: '価格：1袋 ¥330（税込）',
        images: [
            detailCookie1,
            detailCookie2,
            detailCookie3,
            detailCookie4,
        ],
        description: [
            'ほどよい酸味とサクサク食感が\n魅力の、紅茶によく合う可愛らしい\nレモンクッキー',
        ],
        details: {
            原材料: [
                '小麦粉（国内製造）、バター、きび砂糖、卵、レモンパウダー、レモン（愛媛県産）、ピスタチオ'
            ],
            保存方法: [
                '高温多湿、直射日光を避けてください'
            ]
        },
        recommendIds: ['choco', 'nut'],
        productKey: 'Cookies',
        qty: 3
    },
    {
        slug: 'Nut',
        title: 'Chocolate & Nut Cake',
        subtitle: '(チョコナッツケーキ)',
        price: '価格：1個 ¥330（税込）',
        images: [
            detailnut1,
            detailnut2,
            detailnut3,
            detailnut4,
        ],
        description: [
            'ベルギー産のチョコを使用した生地に、\nアーモンドやくるみなどのナッツを\nたっぷり混ぜ込んだ焼き菓子です。',
        ],
        details: {
            原材料: [
                '小麦粉（国内製造）、バター、きび砂糖、卵、レモンパウダー、レモン（愛媛県産）、ピスタチオ'
            ],
            保存方法: [
                '高温多湿、直射日光を避けてください'
            ]
        },
        recommendIds: ['choco', 'nut'],
        productKey: 'Nut',
        qty: 4
    },
    {
        slug: 'Beurre',
        title: 'Beurre de Neige',
        subtitle: '(ブールドネージュ)',
        price: '価格：各1袋 ¥250（税込）',
        images: [
            detailBeurre1,
            detailBeurre2,
            detailBeurre3,
            detailBeurre4,
        ],
        description: [
            'ほろっとくずれる口どけと、\nバニラの香りがふわっと広がるクッキー。\nやさしい甘さでお子さまにも人気。',
        ],
        details: {
            原材料: [
                '小麦粉（国内製造）、バター、きび砂糖、卵、レモンパウダー、レモン（愛媛県産）、ピスタチオ'
            ],
            保存方法: [
                '高温多湿、直射日光を避けてください'
            ]
        },
        recommendIds: ['choco', 'nut'],
        productKey: 'Beurre',
        qty: 5
    },
    {
        slug: 'Florentin',
        title: 'Florentin',
        subtitle: '(フロランタン)',
        price: '価格：1個 ¥320（税込）',
        images: [
            detailFlorentin1,
            detailFlorentin2,
            detailFlorentin3,
            detailFlorentin4,
        ],
        description: [
            '香ばしく焼き上げたキャラメル\nアーモンドの、サクッと広がる\n贅沢な味わい。',
        ],
        details: {
            原材料: [
                '小麦粉（国内製造）、バター、きび砂糖、卵、レモンパウダー、レモン（愛媛県産）、ピスタチオ'
            ],
            保存方法: [
                '高温多湿、直射日光を避けてください'
            ]
        },
        recommendIds: ['choco', 'nut'],
        productKey: 'Florentin',
        qty: 6
    }

];

