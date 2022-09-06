import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Welcome = ({ user }) => {
    const navigation = useNavigate()
    const { logout } = useContext(AuthContext);
    const logOut = (e) => {
        e.preventDefault()
        logout()
        navigation("/login")
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center', margin: '40px 0' }}>Welcome {user}!</h1>
            <Button variant="primary" onClick={logOut}>
                Logout
            </Button>
        </Container>

    )
}

export default Welcome;