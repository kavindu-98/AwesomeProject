export const countries = [
    {
        id: 1,
        name: "Central",
        image: require("../assets/images/central/central.png"),
        places: [
            {
                id: 1.1,
                name: "Sri Dalada Maligawa",
                description: "The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa, is a Buddhist temple in Kandy, Sri Lanka. which houses the relic of the tooth of the Buddha.",
                image: require("../assets/images/central/maligawa.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 7.294,
                    longitude: 80.6412,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "10",
                        name: "Riverside Majestic Hotel",
                        image: require("../assets/images/malaysia/kuching/riverside_majestic_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557907,
                            longitude: 110.352079,
                        },
                    },
                    {
                        id: "11",
                        name: "Grand Margherita Hotel",
                        image: require("../assets/images/malaysia/kuching/grand_margherita_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.558163,
                            longitude: 110.352813,
                        },
                    },
                    {
                        id: "12",
                        name: "Hilton Kuching",
                        image: require("../assets/images/malaysia/kuching/hilton_kuching.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557144,
                            longitude: 110.350496,
                        },
                    },
                ]
            },
            {
                id: 1.2,
                name: "Royal Botanic Gardens",
                description: "Royal Botanic Gardens, Peradeniya are about 5.5 km to the west of the city of Kandy in the Central Province of Sri Lanka. ",
                image: require("../assets/images/central/royal_garden.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 3.135662,
                    longitude: 101.687128,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "13",
                        name: "Hilton Kuala Lumpur",
                        image: require("../assets/images/malaysia/kuala_lumpur/hilton_kuala_lumpur.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135308,
                            longitude: 101.685729,
                        },
                    },
                    {
                        id: "14",
                        name: "Le Méridien Kuala Lumpur",
                        image: require("../assets/images/malaysia/kuala_lumpur/le_meridien_kuala_lumpur.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135843,
                            longitude: 101.686544,
                        },
                    },
                    {
                        id: "15",
                        name: "The St. Regis Kuala Lumpur",
                        image: require("../assets/images/malaysia/kuala_lumpur/the_st_regis_kuala_lumpur.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.136902,
                            longitude: 101.688924,
                        },
                    },
                ]
            },
            {
                id: 1.3,
                name: "Sigiriya",
                description: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
                image: require("../assets/images/central/sigiriya.png"),
                rate: "4.70",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "16",
                        name: "Sunrise Gurney",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.432874,
                            longitude: 100.316750,
                        },
                    },
                    {
                        id: "17",
                        name: "Sunrise Gurney Homestay",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney_homestay.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431626,
                            longitude: 100.317848,
                        },
                    },
                    {
                        id: "18",
                        name: "Evergreen Laurel Hotel Penang",
                        image: require("../assets/images/malaysia/penang/evergreen_laurel_hotel_penang.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431288,
                            longitude: 100.317898,
                        },
                    },
                ]
            },
            {
                id: 1.4,
                name: "Lake Gregory",
                description: "Lake Gregory sometimes also called Gregory Lake or Gregory Reservoir, is a reservoir in heart of the tea country hill city, Nuwara Eliya, Sri Lanka.",
                image: require("../assets/images/central/nuwara_eliya.png"),
                rate: "4.70",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "16",
                        name: "Sunrise Gurney",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.432874,
                            longitude: 100.316750,
                        },
                    },
                    {
                        id: "17",
                        name: "Sunrise Gurney Homestay",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney_homestay.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431626,
                            longitude: 100.317848,
                        },
                    },
                    {
                        id: "18",
                        name: "Evergreen Laurel Hotel Penang",
                        image: require("../assets/images/malaysia/penang/evergreen_laurel_hotel_penang.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431288,
                            longitude: 100.317898,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "North_central",
        image: require("../assets/images/north_central/North_central.png"),
        places: [
            {
                id: 2.1,
                name: "Goa",
                description: "Known for its gorgeous beaches, stellar nightlife, delish seafood, world-heritage listed monuments, Goa is where all the fun is in India.",
                image: require("../assets/images/india/goa.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 15.498931,
                    longitude: 73.767945,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "19",
                        name: "Taj Holiday Village",
                        image: require("../assets/images/india/goa/taj_holiday_village.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 15.499815,
                            longitude: 73.769295,
                        },
                    },
                    {
                        id: "20",
                        name: "Taj Fort Aguada",
                        image: require("../assets/images/india/goa/taj_fort_aguada.jpeg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 15.497798,
                            longitude: 73.767097,
                        },
                    },
                ]
            },
            {
                id: 2.2,
                name: "Jaipur",
                description: "The Pink City, Jaipur is a destination you cannot miss when visiting India. Jaipur is a perfect reflection of what the royal state of Rajasthan is about.",
                image: require("../assets/images/india/jaipur.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 26.928055,
                    longitude: 75.788295,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "21",
                        name: "Umaid Mahal",
                        image: require("../assets/images/india/jaipur/umaid_mahal.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 26.927940,
                            longitude: 75.789056,
                        },
                    },
                ]
            },
            {
                id: 2.3,
                name: "Agra",
                description: "Home to the symbol of love, Taj Mahal, Agra in Uttar Pradesh finds its spot on the world heritage map.",
                image: require("../assets/images/india/agra.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 27.168123,
                    longitude: 78.049032,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "22",
                        name: "The Oberoi Amarvilas",
                        image: require("../assets/images/india/agra/the_oberoi_amarvilas.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 27.168123,
                            longitude: 78.049032,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "sabara",
        image: require("../assets/images/sabara/Sabara.png"),
        places: [
            {
                id: 3.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 3.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 3.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },

    {
        id: 4,
        name: "eastern",
        image: require("../assets/images/eastern/eastern.png"),
        places: [
            {
                id: 3.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 3.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 3.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        name: "north_west",
        image: require("../assets/images/north_west/north_west.png"),
        places: [
            {
                id: 3.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 3.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 3.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 6,
        name: "south",
        image: require("../assets/images/south/South.png"),
        places: [
            {
                id: 3.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 3.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 3.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        name: "uva",
        image: require("../assets/images/uva/uva.png"),
        places: [
            {
                id: 3.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 3.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 3.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Western",
        image: require("../assets/images/western/western.png"),
        places: [
            {
                id: 8.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 8.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 8.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
    {

        id: 9,
        name: "North",
        image: require("../assets/images/jaffna/jaffna.png"),
        places: [
            {
                id: 8.1,
                name: "Bali",
                description: "Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.",
                image: require("../assets/images/indonesia/bali.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "23",
                        name: "The Kayon Jungle Resort",
                        image: require("../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: "24",
                        name: "Green View Private Villas",
                        image: require("../assets/images/indonesia/bali/green_view_private_villas.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ]
            },
            {
                id: 8.2,
                name: "Jakarta",
                description: "Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.",
                image: require("../assets/images/indonesia/jakarta.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "25",
                        name: "Oakwood Premier Cozmo",
                        image: require("../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: "26",
                        name: "JW Marriott Hotel",
                        image: require("../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ]
            },
            {
                id: 8.3,
                name: "Nusa Penida",
                description: "If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.",
                image: require("../assets/images/indonesia/nusa_penida.png"),
                rate: "4.89",
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "27",
                        name: "Purist Beach",
                        image: require("../assets/images/indonesia/nusa_penida/purist_beach.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ]
            }
        ]
    },
]

const dummyData = { countries };

export default dummyData;