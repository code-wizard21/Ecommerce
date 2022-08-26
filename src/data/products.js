import chair01 from "../assets/imgs/chairs/chair05-01.png"
import chair02 from "../assets/imgs/chairs/chair02.png"
import chair03 from "../assets/imgs/chairs/chair03-01.png"
import chair04 from "../assets/imgs/chairs/chair04-01.png"

export const products = {    
    products: [
        {
            id: 1,
            title: "Nook Lounge Chair",
            description: "The Nook lounge chair is the best for you. You can never go wrong with any of our products. All have been created by our amazing designers to bring you the best you can get.",
            details: {
                dimension: "L-530mm x W-510mm x H-700mm, SH-450mm",
                base: "With legs",
                baseMaterial: "Wood, Brass",
                brand: "Mezzo",
                color: "White, Peach, Walnut",
                country: "Portugal",
                feature: "Medium back",
                style: "Mid century"
            },
            price: 230,
            discountPercentage: 30,
            rating: 4.69,
            stock: 94,
            category: "Chairs",
            thumbnail: chair01,
            images: [ "../assets/imgs/chairs/chair01.png", "", "" ]
        },
        {
            id: 2,
            title: "Capitol Complex Chair",
            description: "The Capitol Complex chair is the best for you. You can never go wrong with any of our products. All have been created by our amazing designers to bring you the best you can get.",
            details: {
                dimension: "L-530mm x W-510mm x H-700mm, SH-450mm",
                base: "With legs",
                baseMaterial: "Wood, Brass",
                brand: "Mezzo",
                color: "White, Peach, Walnut",
                country: "Portugal",
                feature: "Medium back",
                style: "Mid century"
            },
            price: 200,
            discountPercentage: 20,
            rating: 4.69,
            stock: 14,
            category: "Chairs",
            thumbnail: chair02,
            images: [ "../assets/imgs/chairs/chair02.png", "", "" ]
        },
        {
            id: 3,
            title: "Ashby Dining Chair",
            description: "The Ashby dining chair is the best for you. You can never go wrong with any of our products. All have been created by our amazing designers to bring you the best you can get.",
            details: {
                dimension: "L-530mm x W-510mm x H-700mm, SH-450mm",
                base: "With legs",
                baseMaterial: "Wood, Brass",
                brand: "Mezzo",
                color: "White, Peach, Walnut",
                country: "Portugal",
                feature: "Medium back",
                style: "Mid century"
            },
            price: 230,
            discountPercentage: 20,
            rating: 4.69,
            stock: 14,
            category: "Chairs",
            thumbnail: chair03,
            images: [ "../assets/imgs/chairs/chair03-01.png", "../assets/imgs/chairs/chair03-02.png", "../assets/imgs/chairs/chair03-03.png" ]
        },
        {
            id: 4,
            title: "Serbium one-sit sofa",
            description: "The serbium one-sit sofa is the best for you. You can never go wrong with any of our products. All have been created by our amazing designers to bring you the best you can get.",
            details: {
                dimension: "L-530mm x W-510mm x H-700mm, SH-450mm",
                base: "With legs",
                baseMaterial: "Wood, Brass",
                brand: "Mezzo",
                color: "White, Peach, Walnut",
                country: "Portugal",
                feature: "Medium back",
                style: "Mid century"
            },
            price: 300,
            discountPercentage: 10,
            rating: 4.69,
            stock: 24,
            category: "Chairs",
            thumbnail: chair04,
            images: [ "../assets/imgs/chairs/chair03-01.png", "../assets/imgs/chairs/chair03-02.png", "../assets/imgs/chairs/chair03-03.png" ]
        }
    ],
    total: 15,
    skip: 0,
    limit: 30
}