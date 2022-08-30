import tvBase01_01 from "../assets/imgs/tv-base/product01-01.jpeg"
import tvBase01_02 from "../assets/imgs/tv-base/product01-02.jpeg"
import tvBase01_03 from "../assets/imgs/tv-base/product01-03.jpeg"
import tvBase02_01 from "../assets/imgs/tv-base/product02-01.jpeg"
import tvBase02_02 from "../assets/imgs/tv-base/product02-02.jpeg"
import tvBase02_03 from "../assets/imgs/tv-base/product02-03.jpeg"
import tvBase02_04 from "../assets/imgs/tv-base/product02-04.jpeg"
import tvBase03_01 from "../assets/imgs/tv-base/product03-01.jpeg"
import tvBase03_02 from "../assets/imgs/tv-base/product03-02.jpeg"
import tvBase03_03 from "../assets/imgs/tv-base/product03-03.png"
import tvBase03_04 from "../assets/imgs/tv-base/product03-04.png"
import tvBase04_01 from "../assets/imgs/tv-base/product04-01.jpeg"
import tvBase04_02 from "../assets/imgs/tv-base/product04-02.jpeg"
import tvBase04_03 from "../assets/imgs/tv-base/product04-03.jpg"
import tvBase04_04 from "../assets/imgs/tv-base/product04-04.jpeg"


export const data = {
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
            thumbnail: tvBase01_03,
            images: [ tvBase01_02, tvBase01_01, "" ]
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
            thumbnail: tvBase02_03,
            images: [ tvBase02_01, tvBase02_02, tvBase02_04 ]
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
            thumbnail: tvBase03_01,
            images: [ tvBase03_02, tvBase03_03, tvBase03_04 ]
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
            thumbnail: tvBase04_01,
            images: [ tvBase04_02, tvBase04_03, tvBase04_04 ]
        }
    ],
    total: 15,
    skip: 0,
    limit: 30
}