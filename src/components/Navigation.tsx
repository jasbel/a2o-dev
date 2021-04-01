import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { titleChess, titleLeague, titleString } from "../utils/constant";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navigation" color="light" light expand="md">

                <Link className="navbar-brand" to="/">A2O Dev</Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {/* <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem> */}
                    <NavItem className="mx-2">
                        <Link to="/problem-1"> { titleLeague } </Link>
                    </NavItem>
                    <NavItem className="mx-2">
                        <Link to="/problem-2">{titleChess}</Link>
                    </NavItem>
                    <NavItem className="mx-2">
                        <Link to="/problem-3">{titleString}</Link>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink target="_blank" href="https://jasbel.github.io">GitHub</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
