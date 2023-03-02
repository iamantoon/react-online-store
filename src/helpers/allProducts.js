import iphone12pro from './../images/products/apple_iphone_12_pro.jpg';
import iphone13pro from './../images/products/iphone13pro.jpg';
import iphone14Pro from './../images/products/iphone-14-pro.png';
import iphone14 from './../images/products/try14.jpg';

import imac1 from './../images/products/imac1.jpg';
import imac2 from './../images/products/imac2.jpg';
import imac3 from './../images/products/imac3.jpg';

import macbookAir from './../images/products/macbook-air.png';
import macbookAir13 from './../images/products/macbook-air-2.jpg';
import macbookPro from './../images/products/macbookpro.png';

import appleWatch from './../images/products/apple-watch.jpg';
import appleWatch8 from './../images/products/apple-watch-8.png';
import appleWatchSE from './../images/products/air-pods-se.jpg';

import airPodsPro2 from './../images/products/air-pods-pro-2.jpg';
import airPods3 from './../images/products/air-pods-3.jpg';
import airPodsMax from './../images/products/air-pods-max.png';

const allProducts = [
    {
        id: 0,
        img: iphone12pro,
        title: 'Apple iPhone 12 Pro Max 256GB Pacific Blue',
        description: 'iPhone 12 Pro and iPhone 12 Pro Max deliver an advanced 5G experience on a global scale, engineered with a seamless integration of world-class hardware and software. Designed with premium materials, iPhone 12 Pro models boast a new, sophisticated flat-edge design that features a gorgeous surgical-grade stainless steel band paired with a precision-milled matte glass back, and introduces the incredibly durable Ceramic Shield.',
        color: 'rgb(40, 99, 146)',
        count: 1,
        price: 1100,
        sale: 1200,
        saleColor: 'rgb(187, 38, 73)',
        totalPrice: 1100,
        newItem: false,
    },
    {
        id: 1,
        img: iphone13pro,
        title: 'Apple iPhone 13 Pro Max 512GB Sierra Blue',
        description: 'The iPhone 13 Pro and iPhone 13 Pro Max are smartphones designed, developed and marketed by Apple Inc. They were the flagship smartphones in the fifteenth generation of the iPhone, succeeding the iPhone 12 Pro and iPhone 12 Pro Max respectively. Major upgrades over its predecessor include improved battery life, improved cameras and computational photography, rack focus for video in a new "Cinematic Mode" at 1080p 30 fps, Apple ProRes video recording, a new A15 Bionic system on a chip, and a variable 10–120 Hz display, marketed as ProMotion.',
        color: 'rgb(94, 147, 196)',
        count: 1,
        price: 1400,
        totalPrice: 1400,
        newItem: false
    },
    {
        id: 2,
        img: iphone14,
        title: 'Apple iPhone 14 Pro Max 512GB Deep Purple',
        description: 'A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip. Introducing Dynamic Island, a truly Apple innovation that’s hardware and software and something in between. It bubbles up music, FaceTime and so much more — all without taking you away from what you’re doing',
        color: 'rgb(76, 0, 153)',
        count: 1,
        price: 1800,
        totalPrice: 1800,
        newItem: true
    },
    {
        id: 3,
        img: imac1,
        title: 'Apple iMac 24',
        description: 'Easy to learn. Astoundingly powerful. And designed to let you work, play and create in ways you never imagined. It’s the computer that comes packed with apps that are ready to go straight out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.',
        color: 'rgb(80, 191, 198)',
        count: 1,
        price: 2000,
        totalPrice: 2000,
        newItem: true
    },
    {
        id: 4,
        img: imac2,
        title: 'Apple iMac 24',
        description: 'Easy to learn. Astoundingly powerful. And designed to let you work, play and create in ways you never imagined. It’s the computer that comes packed with apps that are ready to go straight out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.',
        color: 'rgb(255, 150, 165)',
        count: 1,
        price: 1900,
        sale: 2000,
        saleColor: 'rgb(187, 38, 73)',
        totalPrice: 1900,
        newItem: false
    },
    {
        id: 5,
        img: imac3,
        title: 'Apple iMac 24',
        description: 'Easy to learn. Astoundingly powerful. And designed to let you work, play and create in ways you never imagined. It’s the computer that comes packed with apps that are ready to go straight out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.',
        color: 'rgb(242, 167, 50)',
        count: 1,
        price: 2000,
        totalPrice: 2000,
        newItem: false
    },
    {
        id: 6,
        img: macbookPro,
        title: 'Apple MacBook Pro 16',
        description: 'The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop. The M2 chip begins the next generation of Apple silicon, with even more of the speed and power efficiency introduced by M1. So you can rip through workflows with a more powerful 8-core CPU. Create stunning graphics with a lightning‑fast 10‑core GPU. Work with more streams of 4K and 8K ProRes video with the high-performance media engine. And do it all at once with up to 24GB of faster unified memory.',
        color: 'rgb(131, 132, 134)',
        count: 1,
        price: 2300,
        sale: 2900,
        saleColor: 'rgb(187, 38, 73)',
        totalPrice: 2300,
        newItem: false
    },
    {
        id: 7,
        img: macbookAir,
        title: 'Apple MacBook Air 13 M2 Chip',
        description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure. It’s the ultrafast, ultra-capable laptop that lets you work, play or create just about anything — anywhere. There’s power in silence. Thanks to the efficiency of the M2 chip, MacBook Air can deliver amazing performance without a fan — so it stays completely silent, no matter how intense the task.',
        color: 'rgb(131, 132, 134)',
        count: 1,
        price: 1200,
        sale: 1000,
        saleColor: 'rgb(187, 38, 73)',
        totalPrice: 1200,
        newItem: true
    },
    {
        id: 8,
        img: macbookAir13,
        title: 'Apple MacBook Air 13 M1 Chip',
        description: 'MacBook Air with M1 is an outstandingly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness. M1 is our first chip designed specifically for Mac. Apple silicon integrates the CPU, GPU, Neural Engine, I/O and so much more onto a single tiny chip. Packed with an astonishing 16 billion transistors, M1 delivers exceptional performance, custom technologies and unbelievable power efficiency — a major breakthrough for Mac.',
        color: 'rgb(207, 152, 129)',
        count: 1,
        price: 1000,
        totalPrice: 1000,
        newItem: false
    },
    {
        id: 9,
        img: appleWatch,
        title: 'Apple Watch Ultra',
        description: 'Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life,1 the freedom of cellular,2 and three specialised straps made for athletes and adventurers of all kinds. To build the ultimate sports watch, we crafted every element with painstaking attention to detail for unparalleled performance.',
        color: 'rgb(175, 160, 155)',
        count: 1,
        price: 750,
        sale: 850,
        saleColor: 'rgb(187, 38, 73)',
        totalPrice: 750,
        newItem: true
    },
    {
        id: 10,
        img: appleWatch8,
        title: 'Apple Watch 8',
        description: 'Apple Watch Series 8 features a big, brilliant, Always‑On display. Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health.1 Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train in the enhanced Workout app. The future of health never looked so good.',
        color: 'rgb(254, 200, 126)',
        count: 1,
        price: 500,
        totalPrice: 500,
        newItem: true
    },
    {
        id: 11, 
        img: appleWatchSE,
        title: 'Apple Watch SE',
        description: 'Three stylish case colours. Powerful sensors for insights about your health and fitness. Innovative safety features. Convenient ways to stay connected. A faster dual-core processor for added performance. Apple Watch SE is feature packed, and now it’s better value than ever.',
        color: 'rgb(245, 65, 92)',
        count: 1,
        price: 300,
        totalPrice: 300
    },
    {
        id: 12,
        img: airPodsPro2,
        title: 'Apple Air Pods Pro 2',
        description: 'With plenty of talking and listening time, voice-activated Siri access and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.',
        color: 'rgb(131, 132, 134)',
        count: 1, 
        price: 300,
        totalPrice: 300,
        newItem: true
    },
    {
        id: 13,
        img: airPods3,
        title: 'Apple Air Pods 3',
        description: 'Personalised Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or cinema. ',
        color: 'rgb(131, 132, 134)',
        count: 1,
        price: 200,
        totalPrice: 200,
        newItem: true
    },
    {
        id: 14,
        img: airPodsMax,
        title: 'Apple Air Pods Max',
        description: 'Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here. The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound',
        color: 'rgb(91, 183, 218)',
        count: 1,
        price: 500,
        sale: 600,
        saleColor: 'rgb(187, 38, 73)',
        totalPrice: 500
    }
];

export default allProducts;