export const footerLinks = [
    { title: 'Product', items: [
        { label: 'Popular', href: '/product' },
        { label: 'Trending', href: '/product/features' },
        { label: 'Guided', href: '/product/tutorials' },
        { label: 'Products', href: '/product/pricing' },
    ]},
    { title: 'Company', items: [
        { label: 'Press', href: '/company' },
        { label: 'Mission', href: '/company/customers' },
        { label: 'Strategy', href: '/company/blog' },
        { label: 'About', href: '/company/careers' },
    ]},
    { title: 'Info', items: [
        { label: 'Support', href: '/connect/contact' },
        { label: 'Customer Service', href: '/connect/newsletter' },
        { label: 'Get Started', href: '/connect/linkedin' },
        { label: 'Facebook', href: '/connect/facebook' },
    ]},
    {   title: 'Follow us', items: [] }
];

// Path: src/components/Footer.tsx

export const cardsInfo = [
    {
        title: 'Hair loss',
        subtitle: 'Hair loss neednt to be irreversible. We can help!',
        text: 'We are working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
        image: '/photo.png',

    },
    {
        title: 'Erectile dysfunction',
        text: 'We are working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.',
        subtitle: 'Erections can be a tricky thing. But no need to feel down',
        image: '/photo_2.png',

    },
];

export const quizQuestions = {
    "questions":[
    {
        "question":"Which image best matches your hair loss?",
        "type":"ChoiceType",
        "options":[
        {
        "display":"<img alt=\"Temples\"src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png\"srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png2x\" />",
        "value":"Temples",
        "isRejection":false
        },
    {
        "display":"<img alt=\"Temples & Crown\"src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png\"srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x\"/>",
        "value":"Temples & Crown",
        "isRejection":false
        },
        {
            "display":"<img alt=\"Patchy\"src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png\"srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png2x\"/>",
            "value":"Patchy",
            "isRejection":true
        },
        {
            "display":"<img alt=\"Moderate\"src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png\"srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x\" />",
            "value":"Moderate",
            "isRejection":false
        },
        {
        "display":"<img alt=\"Extensive\"src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png\"srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x\"/>",
        "value":"Extensive",
        "isRejection":true
        },
        {
        "display":"<img alt=\"Complete\"src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\"srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x\" />",
        "value":"Complete",
        "isRejection":true
        }
    ]
    },
    {
        "question":"Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
        "type":"ChoiceType",
        "options":[
            {
            "display":"Yes",
            "value":true,
            "isRejection":true
            },
            {
            "display":"No",
            "value":false,
            "isRejection":false
            }
        ]
    },
    {
        "question":"Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
        "type":"ChoiceType",
        "options":[
            {
            "display":"Yes",
            "value":true,
            "isRejection":true
            },{
            "display":"No",
            "value":false,
            "isRejection":false
            }
        ]
    }
]
}
