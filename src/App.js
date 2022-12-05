import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

import MainRoute from "./routes/MainRoute"

import { getAccessToken, getUserLogged, putAccessToken } from "./utils/network-data"
import { UserProvider } from "./utils/contexts/UserConsumer"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    RadialLinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

class App extends React.Component {
	constructor(props) {
        super(props)

        this.state = {
            initializing: true,
            user: {
                isAuthenticated: false,
                data: {
                    id: "",
                    name: "",
                    email: "",
                },
                logout: this.handleLogout,
				setAuthenticatedUser: this.setAuthenticatedUser,
				getAuthenticatedUser: this.getAuthenticatedUser
            }
        }
        
        this.handleLogout = this.handleLogout.bind(this)
        this.setAuthenticatedUser = this.setAuthenticatedUser.bind(this)
        this.getAuthenticatedUser = this.getAuthenticatedUser.bind(this)
    }

	async componentDidMount() {
        await this.handleOnLoadUser()

        this.setState((prevState) => {
            return {
                ...prevState,
                initializing: false,
            }
        })
    }

	handleOnLoadUser = async () => {
        const accessToken = getAccessToken()
        if (accessToken !== undefined && accessToken !== null && accessToken !== "") {
            const data = await getUserLogged()
            if (!data.error) {
                let isAuthenticated = false
                if (data.data.id && data.data.name && data.data.email) {
                    isAuthenticated = true
                }

                this.setState((prevState) => {
                    const newState = {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            isAuthenticated: isAuthenticated,
                            data: data.data
                        }
                    }

                    return newState
                })
            }
        }
    }

	handleLogout = () => {
        putAccessToken("")
        this.setState((prevState) => {
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    isAuthenticated: false,
                    data: {
                        id: "",
                        name: "",
                        email: "",
                    },
                }
            }
        })
    }

	setAuthenticatedUser = ({ id, name, email }) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    isAuthenticated: true,
                    data: { id, name, email }
                }
            }
        })
    }

	getAuthenticatedUser = () => {
        return this.state.user
    }

    render() {
		return !this.state.initializing ? (
			<ChakraProvider>
				<UserProvider value={ this.state.user }>
					<MainRoute setAuthenticatedUser={this.setAuthenticatedUser}/>
				</UserProvider>
			</ChakraProvider>
		) : null
	}
}

export default App;
