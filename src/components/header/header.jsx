/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
    Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import logo from '../../assets/images/logos/blue-logo-text-trans.png';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/"><img src={logo} alt="wrapkit" /></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/components"}>
                                        Components
										</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/custom-components"}>
                                        Custom-Components
                                    	</Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Wallet
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to={"/custom-components"}>
                                        SignUp
                                    	</Link>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <Link to="/#coming" className="btn btn-success-gradiant font-14">SignIn</Link>
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
