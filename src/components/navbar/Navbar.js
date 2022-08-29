import React, { Component } from 'react';
import MenuItems from "./MenuItems";
import './Navbar.css';
import { FaTimes, FaBtc } from 'react-icons/fa';
import { bars } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><FaBtc className='navbar-btc' />Crypto News</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? <FaTimes />: 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        )
    }
}

export default Navbar;