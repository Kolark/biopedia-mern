import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'
export default class Navbar extends Component{

    render(){
        return ( 
            <nav className="navbar fixed-top navbar-expand-lg" id="navbarbiopedia">
                <div className="container"  >
                <Link to="/" className="navbar-brand"><div id="navtxt1"><b>Biopedia</b></div></Link>
                <div className ="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link" id=""> <div id="navtxt2"><b>Search</b></div> </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link"><div id="navtxt3"><b>Add Fauna</b></div> </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}