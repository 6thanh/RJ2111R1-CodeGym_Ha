import { useLocation } from "react-router-dom"

export const Home = () => {
    // get objects declared from navigation
    const { state } = useLocation();
    // return info
    return (
        <div>Your account is: {state.username} - {state.password}</div>
    )
}