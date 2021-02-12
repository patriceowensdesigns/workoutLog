import React, {useState} from 'react';
import { //1
    Navbar, 
    NavbarBrand, 
} from 'reactstrap';

const Sitebar = (props) => { //2
    //3
    return (
        <Navbar color = "faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
        </Navbar>
    )
}

export default Sitebar;