const all_products = [
    { 
        id: 1,
        image:'https://fashionsizzle.com/wp-content/uploads/2023/02/6I5A4915_1800x1800.jpg',
        category: 'men',
        name:'White Shalwar Kameez',
        old_price: 99.40,
        new_price: 69.34
    },
   
    { 
        id: 2,
        image:'https://www.bargello.com/images/thumbs/0015964_style-k351_800.jpeg',
        name:'Kurta',
        category:'men',
        old_price: 150.55,
        new_price: 120.60
    },
    { 
        id: 3,
        image:'https://i.pinimg.com/736x/b2/30/aa/b230aaea66708a658dbbf97d2d08c088.jpg',
        name: 'Hand Made Kurta',
        category: 'men',
        old_price: 145.00,
        new_price: 105.99
    },
    
    { 
        id: 4,
        image:'https://fashionsizzle.com/wp-content/uploads/2023/02/6I5A0453_1800x1800.jpg',
        category: 'men',
        name:'Kurta Pajama',
        old_price: 100.40,
        new_price: 78.34
    },
   
    { 
        id: 5,
        image:'https://www.designerdhaage.com/cdn/shop/products/sapphire-pakistani-mens-suit-sam06-378001.jpg?v=1688136280',
        name:'Mens kurta',
        category:'men',
        old_price: 99.55,
        new_price: 67.60
    },
    { 
        id: 6,
        image:'https://fashionsizzle.com/wp-content/uploads/2023/02/0A6A8092_resize_1800x1800.jpg',
        name: 'Cotton Suit',
        category: 'men',
        old_price: 95.00,
        new_price: 70.00
    },
    
    { 
        id: 7,
        image:'https://avocado.pk/cdn/shop/products/2_ab1f0b9f-44fc-4644-9107-27b3a09eab51.jpg',
        category: 'men',
        name:'Black Suit',
        old_price: 69.40,
        new_price: 53.34
    },
   
    { 
        id: 8,
        image:'https://st3.depositphotos.com/1441511/18398/i/450/depositphotos_183981072-stock-photo-fashion-clothes-beautiful-girl-in.jpg',
        category: 'women',
        name: 'Skirt',
        old_price: 95.40,
        new_price: 65.00
    },
    { 
        id: 9,
        image:'https://st.depositphotos.com/1550494/2604/i/450/depositphotos_26043279-stock-photo-retro-fifties-summer-fashion-man.jpg',
        name: 'Dress Coat',
        category: 'men',
        old_price: 155.00,
        new_price: 105.40
    },
    { 
        id: 10,
        image:'https://i.pinimg.com/736x/71/e1/ee/71e1ee228d6825fa0c06e5b4b021802b.jpg',
        name: 'Pant Shirt',
        category: 'men',
        old_price: 75.00,
        new_price: 55.30
    },
    { 
        id: 11,
        image:'https://thumbs.dreamstime.com/b/mockup-white-clothing-posing-beautiful-girl-blue-jeans-hands-waist-isolated-background-front-view-template-baby-186991410.jpg',
        name: 'Baby Shirt',
        category: 'kids',
        old_price: 45.35,
        new_price: 30.00
    },
    { 
        id: 12,
        image:'https://i.pinimg.com/550x/2f/0d/d9/2f0dd94b8b70b01377669aa030f29452.jpg',
        name: 'Baby wears',
        category: 'kids',
        old_price: 85.34,
        new_price: 65.00
    },
    { 
        id: 13,
        image:'https://image.cnbcfm.com/api/v1/image/104331532-blazer.png?v=1489068946&w=1920&h=1080',
        name: 'Shirt Coat',
        category: 'women',
        old_price: 145.00,
        new_price: 100.50
    },
    { 
        id: 14,
        image:'https://www.shutterstock.com/image-photo/young-happy-fun-successful-employee-600nw-2258228369.jpg',
        name: 'Women Wears',
        category: 'women',
        old_price: 100.99,
        new_price: 65.54
    },
    { 
        id: 15,
        image:'https://i.pinimg.com/474x/84/1f/78/841f78dd623cb6c60a66b7b2874aa3d3.jpg',
        name: 'Dress Shirt',
        category: 'men',
        old_price: 70.00,
        new_price: 55.00
    },
    { 
        id: 16,
        image:'https://pk.sapphireonline.pk/cdn/shop/files/02SEDY24V112_4.jpg?v=1704971027&width=600',
        name: 'Straight Kurta',
        category: 'women',
        old_price: 95.00,
        new_price: 65.00
    },
    
    { 
        id: 17,
        image:'https://i.pinimg.com/736x/84/e3/70/84e370c206bca4a08f0e0781b75f82f2.jpg',
        name:'Kurta',
        category: 'women',
        old_price: 66.00,
        new_price: 50.34
    },
   
    { 
        id: 18,
        image:'https://i.pinimg.com/236x/72/b6/55/72b6554c21f37a3c6a59dea9dd9a5767.jpg',
        name:'Lawn Suit',
        category: 'women',
        old_price: 100.55,
        new_price: 74.60
    },
    { 
        id: 19,
        image:'https://i.pinimg.com/originals/e5/aa/ca/e5aaca4e95afadaa4957f1e893217bc4.jpg',
        name:'Fabric',
        category: 'wowen',
        old_price: 80.43,
        new_price: 60.00
    },



    { 
        id: 20,
        image:'https://img.freepik.com/premium-photo/casual-style-daily-life-simple-casual-masculinity-concept-male-temper-brutality-brutal-macho-casual-outfit-gray-background-fashion-beauty-hipster-long-well-groomed-beard-mustache_474717-94441.jpg',
        name: 'Jeans Shirt',
        category: 'men',
        old_price: 95.00,
        new_price: 65.00
    },
    
    { 
        id: 21,
        image:'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg',
        category: 'men',
        name:'Men Wears',
        old_price: 69.40,
        new_price: 53.34
    },
   
    { 
        id: 22,
        image:'https://www.tiptop.ca/cdn/shop/files/TT-5114-976-1012_navy_cc2dbed8-f7a1-4fcd-a475-36e1cdb156ff_1800x.jpg?v=1699540489',
        name:'Two Piece Men Wear',
        category:'men',
        old_price: 150.55,
        new_price: 120.60
    },
    { 
        id: 23,
        image:'https://dynamic.zacdn.com/42Xb3AvMA3LUROo5_WHWW-oO0R4=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/hm-5146-5698713-1.jpg',
        name:'Baby girl Wears',
        category: 'kids',
        old_price: 80.43,
        new_price: 60.00
    },
    { 
        id: 24,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuQa8ktjjIUvhxR9a4qt3hyV_7pG_0MHQwg&usqp=CAU',
        category: 'kids',
        name: 'Girl Long Coat Dress',
        old_price: 91.30,
        new_price: 63.00
    },
    
    { 
        id: 25,
        image:'https://i.pinimg.com/170x/41/77/80/417780def961b3292df965b558a5eff3.jpg',
        name:'Baby Jeans Shirt',
        category: 'kids',
        old_price: 66.00,
        new_price: 50.34
    },
   
    { 
        id: 26,
        image:'https://previews.123rf.com/images/angelnt/angelnt1706/angelnt170600015/80069625-russia-ekaterinburg-april-1-2016-little-boy-in-jeans-and-a-waistcoat-standing-on-white.jpg',
        name:'Baby Boy wears',
        category: 'kids',
        old_price: 100.55,
        new_price: 74.60
    },
    { 
        id: 27,
        image:'https://previews.123rf.com/images/prometeus/prometeus1612/prometeus161200898/67992942-kids-s-fashion-modern-nine-year-old-boy-posing-at-studio-over-brick-wall-background-clothes-for.jpg',
        name:'Baby Dress Shirt',
        category: 'kids',
        old_price: 80.43,
        new_price: 60.00
    },
    { 
        id: 28,
        image:'https://img.freepik.com/premium-photo/young-beautiful-brunette-woman-wearing-casual-clothes-pink-background-looking-away-side-with-smile-face-natural-expression-laughing-confident_839833-18196.jpg?w=2000',
        name: 'Women Wears Shirt',
        category: 'women',
        old_price: 95.00,
        new_price: 65.00
    },
    
    { 
        id: 29,
        image:'https://i.pinimg.com/550x/b0/08/82/b00882972a17697b4e76669e60b5d592.jpg',
        name:'Kurta',
        category: 'women',
        old_price: 66.00,
        new_price: 50.34
    },
   
    { 
        id: 30,
        image:'https://i.pinimg.com/1200x/53/11/7a/53117ac4859d712fe9251eb192f33d01.jpg',
        category: 'women',
        name:'Lawn Suit',
        old_price: 100.55,
        new_price: 74.60
    },
    { 
        id: 31,
        image:'https://media.wforwoman.com/product/22AUD10505-604694/665/22AUD10505-604694_5.jpg?format=webp&w=320&dpr=2.6',
        name:'Fabric',
        category: 'women',
        old_price: 80.43,
        new_price: 60.00
    },
    { 
        id: 32,
        image:'https://i.pinimg.com/564x/ae/a7/49/aea7499fc12879aa43c2ef409f5a2093.jpg',
        category: 'women',
        name:'Long Lawn Suit',
        old_price: 100.55,
        new_price: 79.60
    },
    { 
        id: 33,
        image:'https://i.pinimg.com/736x/f1/25/21/f1252151a5e88b488bc8eec60c95a4c6.jpg',
        name:'Kurta Pajama',
        category: 'women',
        old_price: 95.43,
        new_price: 59.99
    },




    { 
        id: 34,
        image:'https://st5.depositphotos.com/2398521/64079/i/450/depositphotos_640793526-stock-photo-happy-smiling-man-looking-camera.jpg',
        name: 'Shalwar Kameez',
        category: 'men',
        old_price: 95.00,
        new_price: 65.00
    },
    
    
    { 
        id: 35,
        image:'https://www.studiobytcs.com/cdn/shop/files/3B9A3164_400x.jpg?v=1695648287',
        name:'Kurta Pajama',
        category:'men',
        old_price: 99.55,
        new_price: 70.60
    }
]

export default all_products;