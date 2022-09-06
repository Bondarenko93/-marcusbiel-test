import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetState } from 'react-use';
import { AuthContext } from '../context/AuthContext.js';

import {
    Container,
    Row,
    Form,
    Button,
} from "react-bootstrap";

const initialState = {
    email: '',
    name: '',
    password: ''
}

const Login = () => {

    const { state: ContextState, login, setUserData } = useContext(AuthContext);
    const [state, setState] = useSetState(initialState);
    const navigation = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, name, password } = state;
        login();
        setUserData(email, name, password)
        setState({
            email: '',
            name: '',
            password: ''
        });
        navigation("/")
    }

    return (
        <Container>
            <Row className="mx-0 align-items-center">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                            value={state.email}
                            onChange={e => setState({ email: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={state.name}
                            onChange={e => setState({ name: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            value={state.password}
                            onChange={e => setState({ password: e.target.value })}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>



    )
}

export default Login