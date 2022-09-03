import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, HStack, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

const ShopFilters = () => {
    const [filters, setFilters] = useState({
        categories: [],
        brands: [],
        price: [],
        discount: 0
    })

    const handleCategories = (e) => {
        if(e.target.checked) {
            setFilters({
                ...filters,
                categories: [...filters.categories, e.target.value]
            })
        }
        else {
            setFilters({
                ...filters,
                categories: filters.categories.filter(item => item !== e.target.value)
            })
        }
    }

    const handleBrands = (e) => {
        if(e.target.checked) {
            setFilters({
                ...filters,
                brands: [...filters.brands, e.target.value]
            })
        }
        else {
            setFilters({
                ...filters,
                brands: filters.brands.filter(item => item !== e.target.value)
            })
        }
    }

    return (
        <Box w={[ "100%", "100%", "25%" ]} p="2" bgColor={"gray.100"}>
            <Text p="20px" border="1px solid gray.100">Filter Products</Text>
            <Accordion p="20px" bgColor="white">
                <AccordionItem>
                    <AccordionButton my="10px" fontWeight="600" color="brand.900">CATEGORIES</AccordionButton>
                    <AccordionPanel>
                        <Box>
                            {
                                ["Sofas", "Stands", "Chairs"].map((item, index) => { return (
                                    <Checkbox  key={index} p="2"
                                        value={item} 
                                        colorScheme="green"
                                        onChange={(e) => handleCategories(e)}
                                        > {item}</Checkbox>
                                )})
                            }
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton my="10px" fontWeight="600" color="brand.900">BRANDS</AccordionButton>
                    <AccordionPanel>
                        <Box>
                            {
                                ["Mezzo", "Verun", "Amani", "VIivace"].map((item, index) => { return (
                                    <Checkbox  key={index} p="2"
                                        value={item} 
                                        colorScheme="green"
                                        onChange={(e) => handleBrands(e)}
                                        > {item}</Checkbox>
                                )})
                            }
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton my="10px" fontWeight="600" color="brand.900">PRICE</AccordionButton>
                    <AccordionPanel>
                        <RangeSlider  
                            colorScheme="green" 
                            defaultValue={[10, 30]}
                            onChangeEnd={(val) => setFilters({ ...filters, price: val })}
                        >
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                            <RangeSliderThumb index={1}/>
                        </RangeSlider>
                        <HStack spacing={4}>
                            <Box>
                                <Text>Min</Text>
                                <Input value="10" />
                            </Box>
                            <Box>
                                <Text>Max</Text>
                                <Input value="30" />
                            </Box>
                        </HStack>
                    </AccordionPanel>
                </AccordionItem>

                
                <AccordionItem>
                    <AccordionButton my="10px" fontWeight="600" color="brand.900">DISCOUNT PERCENTAGE</AccordionButton>
                    <AccordionPanel>
                        <Select onChange={(e) => setFilters({ ...filters, discount: e.target.value })}>
                            {
                                [50, 40, 30, 20, 10].map((item, index) => { return (
                                    <option key={index} value={item}>{item}% or more</option>
                                ) })
                            }
                        </Select>
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion>

            <Flex p="20px">
                <Button bgColor="brand.900" color="white" flex="1" me="2" borderRadius="0">Apply filters</Button>
                <Button bgColor="gray.100">Cancel</Button>
            </Flex>
        </Box>
    )
}

export default ShopFilters;