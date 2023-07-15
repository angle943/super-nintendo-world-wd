/**
 * Data for Rides and Attractions
 */
const raData = [
    /*
        Wonho, F. Lee. (2023). Toadstool Cafe [Photograph]. Eater. Retrieved July 14, 2023,
        from
        https://la.eater.com/2023/1/9/23545048/toadstool-cafe-universal-studios-hollywood-super-mario-brothers
     */
    {
        title: "Bowser's BBQ Bonanza",
        description: "Feast on fiery, savory barbecue favorites overseen by Bowser himself, offering a villainously delicious dining experience.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/bowsers-bbq.jpeg",
            alt: "Attraction image",
        },
        category: "Dining",
    },
    /*
        Roméo A. (2021). Mario Kart: Koopa's Challenge [Photograph]. Unsplash. Retrieved
        July 14, 2023, from https://unsplash.com/photos/aGm3un7MQDc
     */
    {
        title: "Bowser's Comedy Castle",
        description: "Laugh out loud at Bowser's hilarious stand-up comedy routine, where the villainous Koopa King showcases his unexpectedly comedic side.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/splash.jpg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Romeo, Jonathan. (2016). Samus [Digital Art]. Reddit. Retrieved July 14, 2023, from
        https://www.reddit.com/r/ImaginaryTechnology/comments/3ztxj2/samus_by_romeo_jonathan_wenjr/
     */
    {
        title: "Brinstar",
        description: "Experience the life as Samus in this terrifying world of Brinstar",
        more: "Must be 10 years or older",
        img: {
            src: "./static/rides-and-attractions/brinstar.jpg",
            alt: "Attraction image",
        },
        category: "Attractions",
    },
    /*
        Universal Pictures. (2023). The Super Mario Bros. Movie [Film Screenshot]. Svg.
        Retrieved July 14, 2023, from
        https://www.svg.com/1271007/how-new-york-20-foot-tall-donkey-kong-arcade-machine-made-possible/
     */
    {
        title: "Donkey Kong's Barrel Blast",
        description: "Swing through a thrilling barrel coaster ride with Donkey Kong, navigating obstacles and daring jumps.",
        more: "Must be 6 years or older",
        img: {
            src: "./static/rides-and-attractions/Donkey-Kong.jpeg",
            alt: "Attraction image",
        },
        category: "Attractions",
    },
    /*
        Unknown. (2021). Donkey Kong Drums [Digital Image]. Screen Rant. Retrieved July 14, 2023,
        from https://screenrant.com/call-duty-vanguard-donkey-kong-bongos-drum-kills/
     */
    {
        title: "Donkey Kong's Drumbeat Rhythm Show",
        description: "Feel the rhythm and get your groove on as Donkey Kong and his crew take center stage, delivering a lively and entertaining drumbeat performance that will have you dancing in your seat.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/kong-show.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Universal Pictures. (2023). The Super Mario Bros. Movie [Film Screenshot]. Mario Wiki. Retrieved July 14, 2023,
        from https://www.mariowiki.com/Great_Ring_of_Kong#/media/File:TSMBM_DK_laughing_at_Cat_Mario.jpg
     */
    {
        title: "Donkey Kong's Jungle Jam",
        description: "Get ready for a rhythm-infused extravaganza as Donkey Kong and his crew showcase their groovy moves in an energetic dance and percussion performance, creating an unforgettable spectacle of beats and entertainment.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/kong-show2.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Nintendo. (2020). Hyrule Warriors: Age of Calamity [Digital Image]. Nintendo.
        Retrieved on July 14, 2023, from
        https://www.nintendo.com/store/products/hyrule-warriors-age-of-calamity-110729/
     */
    {
        title: "Hyrule Highlands Resort",
        description:
          "Immerse yourself in the enchanting world of Hyrule at this majestic resort nestled amidst lush greenery and towering mountains, offering a serene escape with a touch of legendary adventure.",
        more: "Suitable for all ages. Adult supervision required.",
        img: {
            src: "./static/rides-and-attractions/hyrule-resort.jpeg",
            alt: "Attraction image",
        },
        category: "Resorts",
    },
    /*
        Nintendo. (2022). Kirby’s Dream Buffet [Digital Image]. Ign. Retrieved on July 14, 2023,from
        https://www.ign.com/articles/kirbys-dream-buffet-is-a-fall-guys-style-party-game-coming-to-switch
     */
    {
        title: "Kirby's Dream Buffet",
        description:
          "Step into a magical confectionery world with Kirby, where you can indulge in a variety of colorful and sweet delights.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/kirby-buffet.jpeg",
            alt: "Attraction image",
        },

        category: "Dining",
    },
    /*
        Animist. (2021). Kirby’s Victory Dance. [Animation]. Twitter. Retrieved on July 14, 2023, from
        https://twitter.com/shinohara_kenta/status/1376127694094491650?s=19
     */
    {
        title: "Kirby's Dreamland Dance Party",
        description: "Join Kirby and friends in an energetic dance party, grooving to catchy tunes and showcasing your best moves in a lively and colorful atmosphere.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/kirby-show.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Nintendo. (2015). Kirby and the Rainbow Curse. [Digital Image]. Nintendo Life. Retrieved on July 14, 2023, from
        https://www.nintendolife.com/games/wiiu/kirby_and_the_rainbow_curse
     */
    {
        title: "Kirby's Flying Spectacular",
        description: "Immerse yourself in a whimsical journey through Dreamland with Kirby and his friends in a magical stage show filled with acrobatics, music, and captivating performances, leaving the audience enchanted and filled with joy.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/kirby-flying.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Universal Studios. (n.d.). Mario Cart, Koopa’s Challenge [Digital Image]. Universal Studios Japan. Retrieved July 14, 2023, from
        https://super-nintendo-world.usj.co.jp/en/us/mariokart
     */
    {
        title: "Koopa's Crazy Kart Rally",
        description: "Join the Koopa Troop in a fast-paced go-kart race against Mario and friends, complete with power-ups and exciting shortcuts.",
        more: "Must be 6 years or older",
        img: {
            src: "./static/rides-and-attractions/Koopas-kart.jpeg",
            alt: "Attraction image",
        },
        category: "Attractions",
    },
    /*
        Wonho, F. Lee. (2023). Toadstool Cafe [Photograph]. Eater. Retrieved July 14, 2023, from
        https://la.eater.com/2023/2/14/23588227/best-dishes-toadstool-cafe-restaurant-review-super-nintendo-world-los-angeles
     */
    {
        title: "Luigi's Burgers",
        description:
          "Savor authentic Burgers prepared by Luigi, showcasing his culinary skills and love for hearty comfort food.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/Luigis-burgers.jpeg",
            alt: "Attraction image",
        },

        category: "Dining",
    },
    /*
        Nintendo. (n.d.). Princess Peach [Digital Image]. Pintrest. Retrieved July 14, 2023,
        from https://www.pinterest.com/pin/611504455651199394/
     */
    {
        title: "Mama Mia Bakery",
        description:
          "You deserve some cake from Princess Peach after all the adventuring! Come and get some cake and other desserts that will make you say Mama Mia!",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/mama-mia-bakery.jpeg",
            alt: "Attraction image",
        },
        category: "Dining",
    },
    /*
        Universal Pictures. (2023). The Super Mario Bros. Movie [Film Screenshot]. Polygon. Retrieved July 14, 2023,
        from https://www.polygon.com/23677014/super-mario-bros-movie-gross-box-office-opening-weekend
     */
    {
        title: "Mario and Friends' Super Spectacular Showdown",
        description: "Get ready for an electrifying stage show as Mario, Luigi, Princess Peach, and their pals display their extraordinary talents in a high-energy performance filled with stunts, music, and excitement.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/mario-show.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Rivers, Jay. (2009). Mario & Luigi - 239 - Yummy Pizza [Photograph]. Flickr. Retrieved July 14, 2023,
        from https://www.flickr.com/photos/revengingangel/3392027038/
     */
    {
        title: "Mario's Pizza Paradise",
        description:
          "Enjoy a slice of piping-hot, handcrafted pizza made by none other than Mario himself, featuring a variety of Mushroom Kingdom-inspired toppings.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/Mario-pizza.jpeg",
            alt: "Attraction image",
        },

        category: "Dining",
    },
    /*
        Unknown. (n.d.). Mushroom Inn. [Photograph]. Hotels. Retrieved July 14, 2023, from
        https://www.hotels.com/ho1545400608/mushrooms-inn-semporna-malaysia/?pwaDialogNested=media-gallery&pwaThumbnailDialog=thumbnail-gallery
     */
    {
        title: "Mushroom Kingdom Inn",
        description:
          "Experience a cozy and enchanting stay at the Mushroom Kingdom Inn, where whimsical decor and warm hospitality await guests of all ages.",
        more: "Suitable for all ages. Adult supervision required.",
        img: {
            src: "./static/rides-and-attractions/mushroom-resort.jpeg",
            alt: "Attraction image",
        },
        category: "Resorts",
    },
    /*
        Nintendo. (2021). Pokémon Unite [Screenshot]. Kotaku. Retrieved July 14, 2023, from
        https://kotaku.com/pokemon-unite-survey-suggests-huge-changes-could-be-com-1847754725
     */
    {
        title: "Pokémon Battle Extravaganza",
        description: "Witness an epic display of Pokémon battles featuring trainers and their Pokémon engaging in electrifying duels, showcasing their skills and teamwork.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/pokemon-show.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Universal Studios. (2023). Princess Peach’s Castle [Photograph]. Universal Studios Hollywood. Retrieved July 14, 2023,
        from https://ktla.com/wp-content/uploads/sites/4/2023/01/Princess-Peach-Castle.jpg
     */
    {
        title: "Princess Peach's Castle Escape",
        description: "Help Princess Peach escape from Bowser's clutches in an interactive and immersive castle-themed experience.",
        more: "Must be 6 years or older",
        img: {
            src: "./static/rides-and-attractions/Princess-Peach-Castle.jpeg",
            alt: "Attraction image",
        },
        category: "Attractions",
    },
    /*
        Universal Studios. (n.d.). Mario Cart, Bowser’s Challenge [Digital Image]. Universal Studios Hollywood. Retrieved July 14, 2023, from
        https://www.universalstudioshollywood.com/web/en/us/things-to-do/rides-and-attractions/mario-kart-bowsers-challenge
     */
    {
        title: "Star Power Roller Coaster",
        description: "Feel the rush as you ride a high-speed roller coaster through a galaxy filled with sparkling stars and cosmic wonders.",
        more: "Must be 6 years or older",
        img: {
            src: "./static/rides-and-attractions/star-power-rollercoaster.jpeg",
            alt: "Attraction image",
        },
        category: "Attractions",
    },
    /*
        Unknown. (2017). E3 Expo 2017: Nintendo. [Photograph]. AES Creative. Retrieved July 14, 2023, from
        https://www.aescreative.com/ts-nintendo-e3-zelda-breathofthewild
     */
    {
        title: "The Legend of Zelda",
        description: "Ocarina of Time Live: Immerse yourself in the enchanting melodies of Hyrule through a captivating live orchestral performance, showcasing the timeless music of The Legend of Zelda: Ocarina of Time.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/zelda-show.jpeg",
            alt: "Attraction image",
        },
        category: "Shows",
    },
    /*
        Nintendo. (2020). Paper Mario: The Origami King. [Digital Image]. The Gamer. Retrieved July 14, 2023, from
        https://www.thegamer.com/gaming-detail-paper-mario-the-origami-kings-shogun-studios-is-based-on-a-real-world-japanese-theme-park/
     */
    {
        title: "Toadstool Terrace Retreat",
        description:
          "Discover tranquility and charm at the Toadstool Terrace Retreat, nestled in the heart of Super Nintendo World. Enjoy cozy accommodations, lush gardens, and delightful amenities, providing a peaceful escape for adventurers of all ages.",
        more: "Suitable for all ages. Adult supervision required.",
        img: {
            src: "./static/rides-and-attractions/toadstool-resort.jpeg",
            alt: "Attraction image",
        },
        category: "Resorts",
    },
    /*
        Universal Pictures. (2023). The Super Mario Bros. Movie [Film Screenshot]. Twitter. Retrieved July 14, 2023,
        from https://twitter.com/supermariomovie/status/1577297788513173506/photo/1
     */
    {
        title: "Toad's Mushroom Munchies",
        description:
          "Delight in a range of delectable Mushroom Kingdom-inspired treats and snacks at Toad's charming food kiosk.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/tod-munchies.jpeg",
            alt: "Attraction image",
        },

        category: "Dining",
    },
    /*
        Nintendo. (2021). Mario Cart Tour: Yoshi Tour [Digital Image]. Nintendo. Retrieved July 14, 2023, from
        https://www.nintendo.com/whatsnew/roll-into-egg-siting-fun-with-the-yoshi-tour/
     */
    {
        title: "Yoshi's Epic Egg Hunt",
        description: "Embark on an egg-citing adventure with Yoshi, searching for hidden eggs and encountering delightful surprises along the way.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/Yoshi.jpeg",
            alt: "Attraction image",
        },
        category: "Attractions",
    },
    /*
        Nilghe, Chris. (2021). Yoshi’s Lassi [Photograph]. TDR Explorer. Retrieved July 14, 2023, from
        https://tdrexplorer.com/wp-content/uploads/2021/02/super-nintendo-world-yoshis-snack-island-5-scaled.jpeg
     */
    {
        title: "Yoshi's Snack-a-Saurus Cafe",
        description:
            "Refuel with tasty snacks and refreshing drinks at Yoshi's whimsical and vibrant cafe, perfect for a quick bite.",
        more: "Suitable for all ages",
        img: {
            src: "./static/rides-and-attractions/Yoshi-snacks.jpeg",
            alt: "Attraction image",
        },

        category: "Dining",
    },
    /*
        Universal Studios. (2021). Super Nintendo World Theme Park. [Photograph]. Universal Studios Japan. Retrieved July 14, 2023,
        from https://concreteplayground.com/auckland/news-2/take-a-sneak-peek-at-the-new-mario-kart-ride-coming-to-japans-multi-level-super-nintendo-theme-park
     */
    {
        title: "World 1-1",
        description:
          "Start your new adventure as Mario in this world 1-1. Don't worry about losing your life, this is the first level!",
        more: "Must be 6 years or older",
        img: {
            src: "./static/rides-and-attractions/world-1-1.png",
            alt: "Attraction image",
        },

        category: "Attractions",
    },
];
