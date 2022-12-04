import { useState } from "react"
import { useToast, Box, Grid, GridItem, Text, Switch, Image, FormControl, FormLabel } from '@chakra-ui/react'

import ModifyBreadcrumb from "./../components/Breadcrumb"

const ControlPage = () => {
    const toast = useToast()
    const breadcrumbData = [
        {
            label: "Control",
            path: "/control",
            isCurrentPage: true,
        }
    ]

    const [lamp, setLamp] = useState({
        lampOne: false,
        lampTwo: false,
        lampThree: false
    })

    const [washingMachine, setWashingMachine] = useState(false)
    const [television, setTelevision] = useState(false)
    const [airConditioner, setAirConditioner] = useState(false)
    const [plantWateringMachine, setPlantWateringMachine] = useState(false)
    const [waterTankMachine, setWaterTankMachine] = useState(false)

    return (
        <>
            <ModifyBreadcrumb data={ breadcrumbData } />
            <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(4, 1fr)' gap={ 2 }>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Lamp #1</Text>
                        <FormLabel htmlFor="lamp-1">
                            <center>
                                <Image src="./images/lamp.png" boxSize="150px" mb={ 5 } alt="Washing Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="lamp-1" value={ lamp.lampOne } onChange={ () => {
                                setLamp((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue.lampOne ? "on" : "off"} the lamp #1`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return { ...prevValue, lampOne: !prevValue.lampOne }
                                })
                            }} />
                            <FormLabel htmlFor="lamp-1" mb="0" ml={ 3 }>Turn {!washingMachine ? "on" : "off"} the Washing Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Lamp #2</Text>
                        <FormLabel htmlFor="lamp-2">
                            <center>
                                <Image src="./images/lamp.png" boxSize="150px" mb={ 5 } alt="Washing Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="lamp-2" value={ lamp.lampTwo } onChange={ () => {
                                setLamp((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue.lampTwo ? "on" : "off"} the lamp #2`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })
                                    
                                    return { ...prevValue, lampTwo: !prevValue.lampTwo } 
                                })
                            }} />
                            <FormLabel htmlFor="lamp-2" mb="0" ml={ 3 }>Turn {!washingMachine ? "on" : "off"} the Washing Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Lamp #3</Text>
                        <FormLabel htmlFor="lamp-3">
                            <center>
                                <Image src="./images/lamp.png" boxSize="150px" mb={ 5 } alt="Washing Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="lamp-3" value={ lamp.lampThree } onChange={ () => {
                                setLamp((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue.lampThree ? "on" : "off"} the lamp #3`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return { ...prevValue, lampThree: !prevValue.lampThree } 
                                })
                            }} />
                            <FormLabel htmlFor="lamp-3" mb="0" ml={ 3 }>Turn {!washingMachine ? "on" : "off"} the Washing Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Washing Machine</Text>
                        <FormLabel htmlFor="washing-machine">
                            <center>
                                <Image src="./images/washing-machine.png" boxSize="150px" mb={ 5 } alt="Washing Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="washing-machine" value={ washingMachine } onChange={ () => {
                                setWashingMachine((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue ? "on" : "off"} the washing machine`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return !prevValue 
                                })
                            }} />
                            <FormLabel htmlFor="washing-machine" mb="0" ml={ 3 }>Turn {!washingMachine ? "on" : "off"} the Washing Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Television</Text>
                        <FormLabel htmlFor="television">
                            <center>
                                <Image src="./images/tv-show.png" boxSize="150px" mb={ 5 } alt="Television" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="television" value={ television } onChange={ () => {
                                setTelevision((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue ? "on" : "off"} the television`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return !prevValue 
                                })
                            }} />
                            <FormLabel htmlFor="television" mb="0" ml={ 3 }>Turn {!television ? "on" : "off"} the Television?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Air Conditioner</Text>
                        <FormLabel htmlFor="air-conditioner">
                            <center>
                                <Image src="./images/air-conditioner.png" boxSize="150px" mb={ 5 } alt="Air Conditioner" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="air-conditioner" value={ airConditioner } onChange={ () => {
                                setAirConditioner((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue ? "on" : "off"} the air conditioner`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return !prevValue 
                                })
                            }} />
                            <FormLabel htmlFor="air-conditioner" mb="0" ml={ 3 }>Turn {!airConditioner ? "on" : "off"} the Air Conditioner?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Plant Watering Machine</Text>
                        <FormLabel htmlFor="watering-plant">
                            <center>
                                <Image src="./images/watering-plant.png" boxSize="150px" mb={ 5 } alt="Plant Watering Machine" />
                            </center>
                        </FormLabel>
                        <FormControl id="watering-plant"  display='flex' alignItems='center'>
                            <Switch value={ plantWateringMachine } onChange={ () => {
                                setPlantWateringMachine((prevValue) => { 
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue ? "on" : "off"} the plant watering machine`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return !prevValue 
                                })
                            }} />
                            <FormLabel htmlFor="watering-plant" mb="0" ml={ 3 }>Turn {!plantWateringMachine ? "on" : "off"} the Plant Watering Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Water Tank Machine</Text>
                        <FormLabel htmlFor="water-tank">
                            <center>
                                <Image src="./images/water-tank.png" boxSize="150px" mb={ 5 } alt="Water Tank Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="water-tank" value={ waterTankMachine } onChange={ () => {
                                setWaterTankMachine((prevValue) => {
                                    toast({
                                        title: "Success",
                                        description: `Success turn ${!prevValue ? "on" : "off"} the water tank machine`,
                                        position: "bottom-right",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })

                                    return !prevValue 
                                })
                            }} />
                            <FormLabel htmlFor="water-tank" mb="0" ml={ 3 }>Turn {!plantWateringMachine ? "on" : "off"} the Water Tank Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
            </Grid>
        </>
    )
}

export default ControlPage