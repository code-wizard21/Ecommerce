import { Box, Grid } from "@chakra-ui/react";
import Heading from "../components/heading";
import { useSelector } from "react-redux"
import Product from "../components/product";


const Wishlist = () => {
    const wishlist = useSelector((state) => state.data.wishlist);


    return (
        <Box py="30px">
            <Heading mainText={"MY WISHLIST"} subText={"Your saved products are all here. You can add them to cart from here."} />

            <Grid gap={4} templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} px={["20px", "20px", "10%"]}>
                {
                    wishlist && wishlist.map(product => {
                        return (
                            <Product product={product} key={product.id}/>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default Wishlist;