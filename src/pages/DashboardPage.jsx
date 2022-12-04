import { Link } from "react-router-dom"
import { Box, Grid, GridItem, Text, Button, Switch } from '@chakra-ui/react'
import { Bar, PolarArea } from 'react-chartjs-2'
import { faker } from "@faker-js/faker"

import DataTable from "./../components/DataTable"
import ModifyBreadcrumb from "./../components/Breadcrumb"

import LogData from "./../utils/data/log"

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

    const logData = LogData.slice(0, 5)
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
                                <Text fontWeight={ "bold" } mb={ 5 }>Lamp #1</Text>
                                <Switch isDisabled />
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Lamp #2</Text>
                                <Switch isDisabled />
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Lamp #3</Text>
                                <Switch isDisabled defaultChecked />
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Washing Machine</Text>
                                <Switch isDisabled defaultChecked />
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Television</Text>
                                <Switch isDisabled defaultChecked />
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Air Conditioning</Text>
                                <Switch isDisabled />
                            </GridItem>
                            <GridItem mb={ 4 }rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Plant Watering Machine</Text>
                                <Switch isDisabled defaultChecked />
                            </GridItem>
                            <GridItem mb={ 4 } rowSpan={ 4 } colSpan={ [8,4,4,4,4] } >
                                <Text fontWeight={ "bold" } mb={ 5 }>Water Tank Machine</Text>
                                <Switch isDisabled defaultChecked />
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