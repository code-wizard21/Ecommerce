import { Box, Flex, Input, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link as SearchLink } from "react-router-dom";

const SearchBar = () => {
    const products = useSelector((state) => state.data.products)
    const [query, setQuery] = useState("")


    return (

        <Flex 
            align="center" 
            w="100%" p="2px" 
            border="1px" 
            borderColor="gray.100" 
            borderRadius="0"
            position="relative"
        >
            <Input placeholder="Search here" fontSize="14px" borderRadius="0" onChange={(e) => setQuery(e.target.value)} />
            <Link href="/" bgColor="gray.100" p="3" border="1px" borderColor="gray.100">
                <FaSearch />
            </Link>

            <Box position="absolute" top="100%" left="0" w="100%" bgColor="white" shadow="sm" zIndex="10000">
                {
                    products && products.filter(product => ( query !== "" && product.title.toUpperCase().indexOf(query.toUpperCase()) !== -1)).map(item => {
                        return (
                            <Box p="2" key={item.id}>
                                <SearchLink to={`/SingleProduct?id=${item.id}`}>{item.title}</SearchLink>
                            </Box>
                        )
                    })
                }
            </Box>
        </Flex>

    )
}

export default SearchBar;