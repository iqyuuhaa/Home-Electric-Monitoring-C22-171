import { Link } from "react-router-dom"
import { Box, Grid, GridItem, Text, Button, Switch, Image, FormControl } from '@chakra-ui/react'
import { Bar, PolarArea } from 'react-chartjs-2'
import { faker } from "@faker-js/faker"

import DataTable from "./../components/DataTable"
import ModifyBreadcrumb from "./../components/Breadcrumb"
import { getActivities, getToolActivities } from "./../utils/local-data"

const DashboardPage = () => {
    const breadcrumbData = [
        {
            label: "Dashboard",
            path: "/dashboard",
            isCurrentPage: true,
        }
    ]

    const electricUsageandOutcomesOptions = {
        responsive: true,
    }

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const electricUsageandOutcomesData = {
        labels,
        datasets: [
            {
                label: "Voltage Amount (Watt)",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Outcomes (Rp. x)",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    const mostHighElectricUsageOptions = {
        responsive: true,
    };

    const mostHighElectricUsageData = {
        labels: ['Lamp', 'Washing Machine', 'Television', 'Air Conditioner', 'Plant Watering Machine', 'Water Tank Machine'],
        datasets: [
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const tools = JSON.parse(getToolActivities())
    const getTopFiveLog = () => {
        const currrentActivities = getActivities()
        const activities = JSON.parse(currrentActivities)
        if (activities.length > 0) {
            const logData = activities.sort((a, b) => {
                return b["time"].localeCompare(a["time"]);
            }).map((x, i) => {
                return {
                    ...x,
                    no: i+1
                }
            });

            return logData.slice(0, 5)
        }
        
        return activities
    }

    const logData = getTopFiveLog()
    const logColumns = [
        {
            Header: "No",
            accessor: "no",
        },
        {
            Header: "User",
            accessor: "user",
        },
        {
            Header: "Action",
            accessor: "action",
        },
        {
            Header: "Time",
            accessor: "time",
        },
    ]

    return (
        <>
            <ModifyBreadcrumb data={ breadcrumbData } />
            <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(4, 1fr)' gap={ 2 }>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,5,5,5] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Electric Usage and Outcomes</Text>
                        <Bar options={ electricUsageandOutcomesOptions } data={ electricUsageandOutcomesData } />
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,3,3,3] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Most High Electric Usage</Text>
                        <PolarArea options={ mostHighElectricUsageOptions } data={ mostHighElectricUsageData } />
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,4,4] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Device Status</Text>
                        <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(4, 1fr)' gap={ 2 }>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/lamp.png" boxSize="50px" mb={ 5 } alt="Lamp #1" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.lamp.one } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Lamp #1</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/lamp.png" boxSize="50px" mb={ 5 } alt="Lamp #2" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.lamp.two } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Lamp #2</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/lamp.png" boxSize="50px" mb={ 5 } alt="Lamp #3" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.lamp.three } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Lamp #3</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/washing-machine.png" boxSize="50px" mb={ 5 } alt="Washing Machine" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.washingMachine } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Washing Machine</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/tv-show.png" boxSize="50px" mb={ 5 } alt="Television" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.television } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Television</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/air-conditioner.png" boxSize="50px" mb={ 5 } alt="Air Conditioner" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.airConditioner } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Air Conditioner</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/watering-plant.png" boxSize="50px" mb={ 5 } alt="Plant Watering Machine" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.plantWateringMachine } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Plant Watering Machine</Text>
                                </FormControl>
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Image src="./images/water-tank.png" boxSize="50px" mb={ 5 } alt="Water Tank Machine" />
                                <FormControl display='flex' alignItems='center'>
                                    <Switch isDisabled defaultChecked={ tools.waterTankMachine } />
                                    <Text fontWeight={ "bold" } ml={ 3 }>Water Tank Machine</Text>
                                </FormControl>
                            </GridItem>
                        </Grid>
                        <Link to={ "/control" }>
                            <Button mt={ 5 } colorScheme='blue'>See More &gt;&gt;&gt;</Button>
                        </Link>
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,4,4,4] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Recent Activities</Text>
                        <DataTable columns={ logColumns } data={ logData } isShowPagination={ false } />
                        <Link to={ "/log" }>
                            <Button mt={ 5 } colorScheme='blue'>See More &gt;&gt;&gt;</Button>
                        </Link>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}

export default DashboardPage