import { Flex } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"

const StarRating = ({ rating }) => {
    return (
        <Flex>
            <FaStar style={{ color: (rating > 1)? "orange": "#d4d4d4", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 2)? "orange": "#d4d4d4", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 3)? "orange": "#d4d4d4", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 4)? "orange": "#d4d4d4", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 5)? "orange": "#d4d4d4", margin: "2px", fontSize: "10px" }} />
        </Flex>
    )
}

export default StarRating;