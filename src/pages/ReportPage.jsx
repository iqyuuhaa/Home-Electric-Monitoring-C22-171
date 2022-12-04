import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { Bar, PolarArea, Line } from 'react-chartjs-2'
import { faker } from "@faker-js/faker"

import ModifyBreadcrumb from "./../components/Breadcrumb"

const ReportPage = () => {
    const breadcrumbData = [
        {
            label: "Report",
            path: "/report",
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

    const outcomesHistoryOptions = {
        responsive: true,
    };

    const outcomesHistoryData = {
        labels,
        datasets: [
            {
                label: "Outcomes Total (Rp. x)",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Saving Total (Rp. x)",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    const mostActiveUserOptions = {
        responsive: true,
    };

    const mostActiveUserData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "User-1",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "User-2",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Ayah",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                borderColor: "rgb(115, 74, 199)",
                backgroundColor: "rgba(115, 74, 199, 0.5)",
            },
            {
                label: "Ibu",
                data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
                borderColor: "rgb(68, 184, 91)",
                backgroundColor: "rgba(68, 184, 91, 0.5)",
            }
        ],
    };

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
                <GridItem rowSpan={ 4 } colSpan={ [8,8,8,8,4] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Outcomes History</Text>
                        <Line options={ outcomesHistoryOptions } data={ outcomesHistoryData } />
                    </Box>
                </GridItem>
                <GridItem rowSpan={ 4 } colSpan={ [8,8,8,8,4] } >
                    <Box bg="white" p="5" borderRadius="lg" shadow="sm" h="full">
                        <Text fontWeight={ "bold" } mb={ 5 }>Most Active User</Text>
                        <Line options={ mostActiveUserOptions } data={ mostActiveUserData } />
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
}

export default ReportPage