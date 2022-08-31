import { Flex } from "@chakra-ui/react";
import Heading from "../components/heading";
import { useSelector } from "react-redux"
import Product from "../components/product";


const Wishlist = () => {
    const wishlist = useSelector((state) => state.data.wishlist);


    return (
        <>
            <Heading mainText={"MY WISHLIST"} subText={"Your saved products are all here. You can add them to cart from here."} />

            <Flex flexWrap="wrap" px={[ null, "10px", "5%", "10%" ]}>
                {
                    wishlist && wishlist.map(product => {
                        return (
                            <Product product={product} key={product.id}/>
                        )
                    })
                }
            </Flex>
        </>
    )
}

export default Wishlist;