import { Flex, Input, Link } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (

        <Flex align="center" w="100%" p="2px" border="1px" borderColor="gray.100" borderRadius="0">
            <Input placeholder="Search here" fontSize="14px" borderRadius="0" />
            <Link href="/" bgColor="gray.100" p="3" border="1px" borderColor="gray.100">
                <FaSearch />
            </Link>
        </Flex>

    )
}

export default SearchBar;