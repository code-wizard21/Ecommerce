import { Button, Flex, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    return (
        <form action="/Search" style={{ flex: 1 }}>
            <Flex
                align="center" 
                w="100%" p="2px" 
                border="1px" 
                bg="gray.100"
                borderColor="gray.200" 
                borderRadius="30px"
                position="relative"
            >
                <Button type="submit" href="/" bgColor="gray.100" p="3" border="1px" borderRadius="30px" borderColor="gray.100">
                    <FaSearch />
                </Button>
                <Input placeholder="Search here" name="query" fontSize="14px" border="none" type="search" borderRadius="30px"/>

            </Flex>
        </form>

    )
}

export default SearchBar;