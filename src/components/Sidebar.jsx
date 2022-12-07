import React, { useContext, useState, useEffect } from "react"
import { Link, useLocation, useParams, useNavigate } from "react-router-dom"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { FiMenu, FiBell, FiChevronDown, FiUserCheck, FiLogOut } from "react-icons/fi"

import { DynamicFaIcon } from "./DynamicIcon"
import SidebarMenuData from "./../utils/data/sidebar"
import { UserContext } from "./../utils/contexts/UserConsumer"

const Sidebar = ({ props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg={ useColorModeValue("gray.200", "gray.900") }>
            <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
            <Drawer autoFocus={ false } isOpen={ isOpen } placement="left" onClose={ onClose } returnFocusOnClose={ false } onOverlayClick={ onClose } size="full">
                <DrawerContent>
                    <SidebarContent onClose={ onClose } />
                </DrawerContent>
            </Drawer>
            {/* Header */}
            <MobileNav onOpen={ onOpen } />
            <Box ml={{ base: 0, md: 60 }} p="4">{ props }</Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    const location = useLocation();
    const params = useParams();
    const [route, setRoute] = useState("");
    useEffect(() => {
        setRoute(location.pathname);
    }, [location, params]);
  
    return (
        <Box
            color="#ffffff"
            overflowY={"auto"}
            transition="3s ease"
            bg="#1c1c1c"
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            { ...rest }
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="17.5px" fontFamily="monospace" fontWeight="bold" mx="auto">Home Electric Monitoring</Text>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>
            {
                SidebarMenuData.map((x) => {
                    return (
                        <NavName icon={ x.icon } key={ x.path } linkto={ x.path } bgColor={ route === `${x.path}` ? "#134387" : "" } textColor={ route === `${x.path}` ? "white" : ""}>
                        { x.label }
                        </NavName>
                    );
                })
            }
        </Box>
    );
};

const NavName = ({ children, icon, linkto, bgColor, textColor, ...rest }) => {
    return (
        <Link style={{ textDecoration: "none" }} to={ linkto }>
            <Flex
                align="center"
                p="4"
                mx="4"
                my="1"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bg={ bgColor }
                color={ textColor }
                _hover={{
                    bg: "#4EC49A",
                    color: "white",
                }}
                {...rest}
            >
                <DynamicFaIcon name={ icon } as={ icon } />
                <Text ml="4" fontSize="16" _groupHover={{ color: "white" }}>{ children }</Text>
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, handleLogout, ...rest }) => {
    const navigate = useNavigate()
    const user = useContext(UserContext)
    const onLogout = async () => {
        await user.logout()
        navigate("/login")
    }

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg="#1c1c1c"
            borderBottomWidth="1px"
            borderBottomColor={ useColorModeValue("gray.200", "gray.700") }
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton display={{ base: "flex", md: "none" }} onClick={ onOpen } color="#ffffff" variant="outline" aria-label="open menu" icon={ <FiMenu /> } />
            <Text display={{ base: "flex", md: "none" }} fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={ "#ffffff" }>Home Electric Monitoring</Text>
            <HStack spacing={{ base: "0", md: "6" }}>
                <Link to={ "/log" }>
                    <IconButton size="lg" variant="ghost" aria-label="open menu" color={ "#ffffff" } icon={ <FiBell /> } />
                </Link>
                <Flex alignItems={ "center" }>
                    <Menu>
                        <MenuButton py={ 2 } transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                            <HStack>
                                <Avatar size={ "sm" } />
                                <VStack display={{ base: "none", md: "flex" }} alignItems="flex-start" spacing="1px" ml="2">
                                    <Text fontSize="sm" color="#ffffff">{ user.data.name }</Text>
                                    <Text fontSize="xs" color="#ffffff">{ user.data.email }</Text>
                                </VStack>
                                <Box display={{ base: "none", md: "flex" }}>
                                    <FiChevronDown color="#ffffff" />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList bg={ useColorModeValue("white", "gray.900") } borderColor={ useColorModeValue("gray.200", "gray.700") }>
                            <Link to={ "/profile" }>
                                <MenuItem>
                                    <FiUserCheck />
                                    <Text ml="4">Profile</Text>
                                </MenuItem>
                            </Link>
                            <MenuDivider />
                            <MenuItem onClick={ () => { onLogout() } }>
                                <FiLogOut />
                                <Text ml="4">Sign out</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default Sidebar