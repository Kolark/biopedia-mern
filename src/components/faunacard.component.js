import React,{Component} from 'react';

import './styles/search.css'
export default class Faunacard extends Component{
    constructor(props){
        super(props);
        this.state = {
            vernacularName:props.faunacard.vernacularName,
            scientificName:props.faunacard.scientificName,
            family:props.faunacard.family,
            description:props.faunacard.description,
            imagedir:props.faunacard.image
        }
    }

    render(){
        return(
                <div className="col-4 col-sm-4">
                    <div className="card" >
                        <div className="imgcardcontainer">

                        <img src={"http://localhost:3001/uploads/"+this.state.imagedir} id="imgcard" className="card-img-top" alt="..."></img>
                        </div>
                        <div className="container">
                        
                        <div className="names">
                        <h5 className="card-title">{this.state.vernacularName}</h5>
                            <h6 className="card-title">Scientific Name: </h6>
                            <p>{this.state.scientificName}</p>
                            <h6 className="card-title">Family: </h6>
                            <p>{this.state.family}</p>
                        </div>
                        <div className="overflow-auto" id="scrollcard">
                        <p className="card-text">{this.state.description}</p>
                        </div>

                        </div>
                    </div>
                </div>

        )
    }
}