import "dotenv/config"
import "../../config/database.js"
import Itinerary from "../Itinerary.js"

const itineraries = [
    {
      name: "Madrid Cultural Walk",
      userPhoto: "https://robohash.org/52",
      userName: "Carlos G.",
      price: 4,
      duration: 6,
      likes: 0,
      hashtags: ["#art", "#history", "#madrid"],
      cityId: "6717d666ecb07940ffe928a1"
    },
    {
      name: "Tapas & Nightlife Tour",
      userPhoto: "https://robohash.org/84",
      userName: "Sofia R.",
      price: 3,
      duration: 3,
      likes: 0,
      hashtags: ["#food", "#nightlife", "#fun"],
      cityId: "6717d666ecb07940ffe928a1"
    },
    {
      name: "Royal Palace & Gardens",
      userPhoto: "https://robohash.org/12",
      userName: "Miguel L.",
      price: 5,
      duration: 4,
      likes: 0,
      hashtags: ["#royalty", "#gardens", "#madrid"],
      cityId: "6717d666ecb07940ffe928a1"
    },
    {
      name: "Mumbai Market Adventure",
      userPhoto: "https://robohash.org/19",
      userName: "Ravi S.",
      price: 2,
      duration: 3,
      likes: 0,
      hashtags: ["#markets", "#shopping", "#mumbai"],
      cityId: "6717d666ecb07940ffe9289f"
    },
    {
      name: "Bollywood Tour",
      userPhoto: "https://robohash.org/33",
      userName: "Priya D.",
      price: 4,
      duration: 5,
      likes: 0,
      hashtags: ["#bollywood", "#film", "#mumbai"],
      cityId: "6717d666ecb07940ffe9289f"
    },
    {
      name: "Street Food Delight",
      userPhoto: "https://robohash.org/88",
      userName: "Anjali P.",
      price: 3,
      duration: 2,
      likes: 0,
      hashtags: ["#food", "#culture", "#mumbai"],
      cityId: "6717d666ecb07940ffe9289f"
    },
    {
      name: "Los Angeles Beach & Sunset",
      userPhoto: "https://robohash.org/44",
      userName: "Emma W.",
      price: 4,
      duration: 3,
      likes: 0,
      hashtags: ["#beach", "#sunset", "#LA"],
      cityId: "6717d666ecb07940ffe928a3"
    },
    {
      name: "Hollywood Highlights",
      userPhoto: "https://robohash.org/67",
      userName: "John M.",
      price: 5,
      duration: 5,
      likes: 0,
      hashtags: ["#hollywood", "#stars", "#LA"],
      cityId: "6717d666ecb07940ffe928a3"
    },
    {
      name: "LA Street Art Tour",
      userPhoto: "https://robohash.org/90",
      userName: "Lily S.",
      price: 3,
      duration: 2,
      likes: 0,
      hashtags: ["#art", "#street", "#LA"],
      cityId: "6717d666ecb07940ffe928a3"
    },
    {
      name: "São Paulo Culture Crawl",
      userPhoto: "https://robohash.org/11",
      userName: "Marcos T.",
      price: 3,
      duration: 4,
      likes: 0,
      hashtags: ["#culture", "#art", "#SP"],
      cityId: "6717d666ecb07940ffe9289c"
    },
    {
      name: "Gastronomic Experience",
      userPhoto: "https://robohash.org/18",
      userName: "Fernanda L.",
      price: 4,
      duration: 3,
      likes: 0,
      hashtags: ["#food", "#tasting", "#SP"],
      cityId: "6717d666ecb07940ffe9289c"
    },
    {
      name: "São Paulo Night Tour",
      userPhoto: "https://robohash.org/36",
      userName: "Rafael P.",
      price: 5,
      duration: 5,
      likes: 0,
      hashtags: ["#nightlife", "#views", "#SP"],
      cityId: "6717d666ecb07940ffe9289c"
    },
    {
      name: "Historical London Walk",
      userPhoto: "https://robohash.org/58",
      userName: "Sarah J.",
      price: 4,
      duration: 4,
      likes: 0,
      hashtags: ["#history", "#walking", "#london"],
      cityId: "6717d666ecb07940ffe92894"
    },
    {
      name: "Royal London Tour",
      userPhoto: "https://robohash.org/72",
      userName: "Henry F.",
      price: 5,
      duration: 6,
      likes: 0,
      hashtags: ["#royal", "#palaces", "#london"],
      cityId: "6717d666ecb07940ffe92894"
    },
    {
      name: "London Markets Exploration",
      userPhoto: "https://robohash.org/85",
      userName: "Lucy B.",
      price: 3,
      duration: 3,
      likes: 0,
      hashtags: ["#markets", "#food", "#london"],
      cityId: "6717d666ecb07940ffe92894"
    }
]

  

Itinerary.insertMany(itineraries)