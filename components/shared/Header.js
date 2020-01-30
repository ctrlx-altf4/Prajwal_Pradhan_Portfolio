import React,{useState} from 'react'
import Link from 'next/link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem  } from 'reactstrap';
import  auth0 from '../../service/auth0';

const HeadNavLink=props=>{
    const {route,name}= props;
    return(
        <NavItem className="port-navbar-item">
            <Link href={route}>
                <a className="port-navbar-link">{name}</a>
            </Link>
        </NavItem>
    )
}

const Login=()=>{
    return(
        <NavItem className="port-navbar-item">
            <a onClick={auth0.login} className="port-navbar-link pointer">Login</a>
        </NavItem>
    )
}
const Logout=()=>{
    return(
        <NavItem className="port-navbar-item">
            <a onClick={auth0.logout} className="port-navbar-link pointer">Logout</a>
        </NavItem>
    )
}

const Header=(props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {isAuthenticated,user,className}= props;
    return(
        <div>
             <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" light expand="md">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand className="port-navbar-brand" href="/">Ctrlx.Altf4</NavbarBrand>
               
                <Collapse isOpen={isOpen} navbar>     
                    <Nav className="mr-auto" navbar>
                       
                    </Nav>
                    <Nav navbar>
                        <HeadNavLink route="/" name="Home"/>
                        <HeadNavLink route="/portfolios" name="Portfolios" />
                        <HeadNavLink route="/blog" name="Blog" />
                        <HeadNavLink route="/about" name="About" />
                        <HeadNavLink route="/cv" name="CV" />
                        {!isAuthenticated  &&
                             <Login></Login>
                        }
                        {
                            isAuthenticated&&
                            <Logout/>
                           
                        } 
                        {
                            isAuthenticated&&
                            user.name
                           
                        } 
                     
                    </Nav>
                </Collapse>
            </Navbar>   
        </div>
    )
}
export default Header;

