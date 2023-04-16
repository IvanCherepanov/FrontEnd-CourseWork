import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ADMIN_PATH, REGISTRATION_PATH, SHOP_PATH, LOGIN_PATH} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_PATH}>BuySkyrim</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'white '}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Button
                            onClick={() => history(ADMIN_PATH)}
                        >
                            AdminPanel
                        </Button>
                        <Button
                            className="ms-lg-3"
                            onClick={() => logOut()}
                        >
                            Logout
                        </Button>
                        {/*<Button className="ms-lg-3" onClick={() => user.setIsAuth(false)}>Logout</Button>*/}
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white '}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Container style={{display: 'flex'}}>
                            <Button
                                style={{marginLeft:'20px'}}
                                onClick={() => history(LOGIN_PATH)}
                            >
                                Login
                            </Button>
                            <Button
                                className="ms-lg-3"
                                onClick={() => history(REGISTRATION_PATH)}
                            >
                                Registration
                            </Button>
                        </Container>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;