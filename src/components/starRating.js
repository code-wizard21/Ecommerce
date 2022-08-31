import { Flex } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"

const StarRating = ({ rating }) => {
    return (
        <Flex>
            <FaStar style={{ color: (rating > 1)? "orange": "#999", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 2)? "orange": "#999", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 3)? "orange": "#999", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 4)? "orange": "#999", margin: "2px", fontSize: "10px" }} />
            <FaStar style={{ color: (rating > 5)? "orange": "#999", margin: "2px", fontSize: "10px" }} />
        </Flex>
    )
}

export default StarRating;