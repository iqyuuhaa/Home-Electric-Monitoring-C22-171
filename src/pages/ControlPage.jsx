import { useContext, useState } from "react"
import { useToast, Box, Grid, GridItem, Text, Switch, Image, FormControl, FormLabel } from '@chakra-ui/react'

import ModifyBreadcrumb from "./../components/Breadcrumb"
import { UserContext } from "./../utils/contexts/UserConsumer"

import { getToolActivities, setToolActvity, setActivity } from "./../utils/local-data"

const ControlPage = () => {
    const toast = useToast()
    const breadcrumbData = [
        {
            label: "Control",
            path: "/control",
            isCurrentPage: true
        }
    ]

    const user = useContext(UserContext)
    let [tools, setTools] = useState(JSON.parse(getToolActivities()))

    const onSwitchLampOne = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.lamp.one ? "on" : "off"} the lamp #1`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.lamp.one ? "on" : "off"} the lamp #1`
        })

        tools = {
            ...tools,
            lamp: {
                ...tools.lamp,
                one: !tools.lamp.one,
            }
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchLampTwo = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.lamp.two ? "on" : "off"} the lamp #2`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.lamp.two ? "on" : "off"} the lamp #2`
        })

        tools = {
            ...tools,
            lamp: {
                ...tools.lamp,
                two: !tools.lamp.two,
            }
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchLampThree = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.lamp.three ? "on" : "off"} the lamp #3`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.lamp.three ? "on" : "off"} the lamp #3`
        })

        tools = {
            ...tools,
            lamp: {
                ...tools.lamp,
                three: !tools.lamp.three,
            }
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchWashingMachine = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.washingMachine ? "on" : "off"} the washing machine`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.washingMachine ? "on" : "off"} the washing machine`
        })

        tools = {
            ...tools,
            washingMachine: !tools.washingMachine
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchTelevision = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.television ? "on" : "off"} the television`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.television ? "on" : "off"} the television`
        })

        tools = {
            ...tools,
            television: !tools.television
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchAirConditioner = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.airConditioner ? "on" : "off"} the air conditioner`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.airConditioner ? "on" : "off"} the air conditioner`
        })

        tools = {
            ...tools,
            airConditioner: !tools.airConditioner
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchWaterTankMachine = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.waterTankMachine ? "on" : "off"} the water tank machine`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.waterTankMachine ? "on" : "off"} the water tank machine`
        })

        tools = {
            ...tools,
            waterTankMachine: !tools.waterTankMachine
        }
        setToolActvity(tools)
        setTools(tools)
    }

    const onSwitchPlantWateringMachine = () => {
        toast({
            title: "Success",
            description: `Success turn ${!tools.plantWateringMachine ? "on" : "off"} the plant watering machine`,
            position: "bottom-right",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setActivity({
            user: user.data.name,
            action: `${user.data.name} turn ${!tools.plantWateringMachine ? "on" : "off"} the plant watering machine`
        })

        tools = {
            ...tools,
            plantWateringMachine: !tools.plantWateringMachine
        }
        setToolActvity(tools)
        setTools(tools)
    }

    return (
        <>
            <ModifyBreadcrumb data={ breadcrumbData } />
            <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(4, 1fr)' gap={ 2 }>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Lamp #1</Text>
                        <FormLabel htmlFor="lamp-1">
                            <center>
                                <Image src="./images/lamp.png" boxSize="150px" mb={ 5 } alt="Lamp #1" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="lamp-1" defaultChecked={ tools.lamp.one } onChange={ () => { onSwitchLampOne() }} />
                            <FormLabel htmlFor="lamp-1" mb="0" ml={ 3 }>Turn {!tools.lamp.one ? "on" : "off"} the Lamp #1?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Lamp #2</Text>
                        <FormLabel htmlFor="lamp-2">
                            <center>
                                <Image src="./images/lamp.png" boxSize="150px" mb={ 5 } alt="Lamp #2" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="lamp-2" defaultChecked={ tools.lamp.two } onChange={ () => { onSwitchLampTwo() }} />
                            <FormLabel htmlFor="lamp-2" mb="0" ml={ 3 }>Turn {!tools.lamp.two ? "on" : "off"} the Lamp #2?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Lamp #3</Text>
                        <FormLabel htmlFor="lamp-3">
                            <center>
                                <Image src="./images/lamp.png" boxSize="150px" mb={ 5 } alt="Lamp #3" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="lamp-3" defaultChecked={ tools.lamp.three } onChange={ () => { onSwitchLampThree() }} />
                            <FormLabel htmlFor="lamp-3" mb="0" ml={ 3 }>Turn {!tools.lamp.three ? "on" : "off"} the Lamp #3?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Washing Machine</Text>
                        <FormLabel htmlFor="washing-machine">
                            <center>
                                <Image src="./images/washing-machine.png" boxSize="150px" mb={ 5 } alt="Washing Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="washing-machine" defaultChecked={ tools.washingMachine } onChange={ () => { onSwitchWashingMachine() }} />
                            <FormLabel htmlFor="washing-machine" mb="0" ml={ 3 }>Turn {!tools.washingMachine ? "on" : "off"} the Washing Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Television</Text>
                        <FormLabel htmlFor="television">
                            <center>
                                <Image src="./images/tv-show.png" boxSize="150px" mb={ 5 } alt="Television" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="television" defaultChecked={ tools.television } onChange={ () => { onSwitchTelevision() }} />
                            <FormLabel htmlFor="television" mb="0" ml={ 3 }>Turn {!tools.television ? "on" : "off"} the Television?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Air Conditioner</Text>
                        <FormLabel htmlFor="air-conditioner">
                            <center>
                                <Image src="./images/air-conditioner.png" boxSize="150px" mb={ 5 } alt="Air Conditioner" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="air-conditioner" defaultChecked={ tools.airConditioner } onChange={ () => { onSwitchAirConditioner() }} />
                            <FormLabel htmlFor="air-conditioner" mb="0" ml={ 3 }>Turn {!tools.airConditioner ? "on" : "off"} the Air Conditioner?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Plant Watering Machine</Text>
                        <FormLabel htmlFor="watering-plant">
                            <center>
                                <Image src="./images/watering-plant.png" boxSize="150px" mb={ 5 } alt="Plant Watering Machine" />
                            </center>
                        </FormLabel>
                        <FormControl id="watering-plant"  display='flex' alignItems='center'>
                            <Switch id="watering-plant" defaultChecked={ tools.plantWateringMachine } onChange={ () => { onSwitchPlantWateringMachine() }} />
                            <FormLabel htmlFor="watering-plant" mb="0" ml={ 3 }>Turn {!tools.plantWateringMachine ? "on" : "off"} the Plant Watering Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,4,4,2,2] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Water Tank Machine</Text>
                        <FormLabel htmlFor="water-tank">
                            <center>
                                <Image src="./images/water-tank.png" boxSize="150px" mb={ 5 } alt="Water Tank Machine" />
                            </center>
                        </FormLabel>
                        <FormControl display='flex' alignItems='center'>
                            <Switch id="water-tank" defaultChecked={ tools.waterTankMachine } onChange={ () => { onSwitchWaterTankMachine() }} />
                            <FormLabel htmlFor="water-tank" mb="0" ml={ 3 }>Turn {!tools.waterTankMachine ? "on" : "off"} the Water Tank Machine?</FormLabel>
                        </FormControl>
                    </Box>
                </GridItem>
            </Grid>
        </>
    )
}

export default ControlPage