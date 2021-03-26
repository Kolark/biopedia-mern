import React,{Component} from 'react';

import "./styles/about.css"

import pakita from "./imgs/pakita.JPG";

import polarimg from "./imgs/polar.png";
import tucanimg from "./imgs/tucan.png";

export default class BiopediaAbout extends Component{

    render(){
        return ( 
            <div id="BigBox">
                <div id="contents">
                    <div id="BoxOne">
                        <div className="container">
                            <div className="row row-md-cols-2">
                                <div className="col-sm-4" id="titulo">
                                <h2>About this Project</h2>
                                <p>The main idea with this project was to learn the basics of the <b>React library</b>, also using this opportunity to use <b>mongoDB</b>, <b>express</b> and <b>Node.</b>  This website was build with the MERN stack.</p>
                                </div>
                                
                                <div className="col-sm" id="boximg1">
                                    <img src={polarimg}/>
                                    {/* <h1>Hola</h1> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="BoxTwo">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm" id="boximg1">
                                <img src={tucanimg}/>
                                </div>
                                <div className="col-sm">
                                    <h2>The Idea</h2>
                                    <p>The name Biopedia suggests that works like an encyclopedia for all living things, and thats exactly what the idea of this website is, to have an API of all types of plants and animals that roam the earth. As of right now, the Biopedia API and the database contains the most basic information of animals and plants</p>
                                    <p>Is also important to note that i took the time fill the database and it wasn't done by a proffesional related to animals of plants.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                <br/>
                <div id="BoxThree">
                    <div className="container">
                        <h4>Contact Information</h4>
                        <label>felipe.loaiza@upb.edu.co</label>
                        <h3>Images and descriptions taken from</h3>
                        <ul>
                            <li>
                            <label><b>Wikipedia.com</b></label>
                            </li>
                            <li>https://pngimg.com/uploads/polar_bear/polar_bear_PNG32.png</li>
                            <li>https://officialpsds.com/imageview/rk/vx/rkvx35_large.png?1521316539</li>
                        </ul>
                        
                    </div>
                </div>
                    
                </div>
            </div>
                
        )
    }
}