import { Flex } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"

const StarRating = ({ rating }) => {
    return (
        <Flex>
            {
                [1,2,3,4,5].map(value => (
                    <FaStar key={value} style={{ color: (rating > value)? "orange": "#d4d4d4", margin: "2px", fontSize: "10px" }} />
                ))
            }
        </Flex>
    )
}

export default StarRating;