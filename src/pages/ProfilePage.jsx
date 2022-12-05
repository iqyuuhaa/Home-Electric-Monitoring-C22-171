import { Avatar, Grid, GridItem, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

import ModifyBreadcrumb from "./../components/Breadcrumb"

import { UserConsumer } from "./../utils/contexts/UserConsumer"

const ProfilePage = () => {
    const breadcrumbData = [
        {
            label: "Profile",
            path: "/profile",
            isCurrentPage: true,
        }
    ]

    return (
        <UserConsumer>
            {
                (user) => {
                    return (
                        <>
                            <ModifyBreadcrumb data={ breadcrumbData } />
                            <Grid h='200px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                                <GridItem rowSpan={3} colSpan={1}>
                                    <center>
                                        <Avatar size={ "2xl" } />
                                    </center>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <InputGroup>
                                        <InputLeftAddon children='ID' />
                                        <Input variant='outline' value={ user.data.id } bg={ "#ffffff" } disabled />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Name' />
                                        <Input variant='outline' value={ user.data.name } bg={ "#ffffff" } disabled />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Email' />
                                        <Input variant='outline' value={ user.data.email } bg={ "#ffffff" } disabled />
                                    </InputGroup>
                                </GridItem>
                            </Grid>
                        </>
                    )
                }
            }
        </UserConsumer>
    )
}

export default ProfilePage