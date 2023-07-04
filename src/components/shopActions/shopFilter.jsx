import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

const ShopFilters = ({ handleFilters, clearFilters }) => {
    const [filters, setFilters] = useState({
        categories: ["Sofas", "Stands"],
        brands: ["Mezzo", "Verun"],
        price: [0, 500],
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

    const submitFilters = () => {
        console.log(filters)
        handleFilters(filters)
    }

    return (
        <Box w={[ "100%", "100%", "320px" ]} p="2" bgColor={"gray.100"}>
            <Text p="20px" border="1px solid gray.100">Filter Products</Text>
            <Accordion p="20px" bgColor="white">
                <AccordionItem>
                    <AccordionButton my="10px" fontWeight="600" color="brand.900">CATEGORIES</AccordionButton>
                    <AccordionPanel>
                        <Box>
                            {
                                ["Sofas", "Stands"].map((item, index) => { return (
                                    <Checkbox  key={index} p="2"
                                        value={item} 
                                        colorScheme="green"
                                        onChange={(e) => handleCategories(e)}
                                        defaultChecked
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
                                ["Mezzo", "Verun"].map((item, index) => { return (
                                    <Checkbox  key={index} p="2"
                                        value={item} 
                                        colorScheme="green"
                                        onChange={(e) => handleBrands(e)}
                                        defaultChecked
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
                            max={500}
                            aria-label={"price"}
                            colorScheme="green"
                            defaultValue={[0, 500]}
                            onChangeEnd={(val) => setFilters({ ...filters, price: val })}
                        >
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                            <RangeSliderThumb index={1}/>
                        </RangeSlider>
                        <Flex justify="space-between" w="100%">
                            <Text>Min: {filters.price[0]}</Text>
                            <Text>Max: {filters.price[1]}</Text>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

                
                <AccordionItem>
                    <AccordionButton my="10px" fontWeight="600" color="brand.900">DISCOUNT PERCENTAGE</AccordionButton>
                    <AccordionPanel>
                        <Select onChange={(e) => setFilters({ ...filters, discount: e.target.value })}>
                            {
                                [10, 20, 30, 40, 50].map((item, index) => { return (
                                    <option key={index} value={item}>{item}% or more</option>
                                ) })
                            }
                        </Select>
                    </AccordionPanel>
                </AccordionItem>
                
            </Accordion>

            <Flex p="20px">
                <Button bgColor="brand.900" color="white" flex="1" me="2" borderRadius="0" onClick={() => submitFilters()}>Apply filters</Button>
                <Button bgColor="gray.100" onClick={() => clearFilters()}>Clear</Button>
            </Flex>
        </Box>
    )
}

export default ShopFilters;