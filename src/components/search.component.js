import React,{Component} from 'react';
import Faunacard from './faunacard.component'








export default class BiopediaSearch extends Component{

    constructor(props){
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            searchQuery:'',
            faunacards:[],
            array:["hola","hola2","hola3"]
        }
    }
    onChangeSearch(e){
        this.setState({searchQuery: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log("SUBMITED");
        console.log(this.state.searchQuery);
        this.getFauna();
        console.log("Submited Again")
        console.log(this.state.faunacards)
        // this.setState({searchQuery:''});
    }

    async getFauna(){
        const res = await fetch('http://localhost:3001/api/Fauna?vernacularname='+this.state.searchQuery);

        if(!res.ok) {
            console.log('error get Faunas')
        } else{
            this.setState({faunacards:[]});
            const data = await res.json();
            
            this.setState({faunacards:data});
            console.log("DAta:  " + data);
            console.log(data);
        }
    }

    render(){
        return ( 
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="col-3">
                <h4>Search:         </h4>
                </div>
                <div className="input-group col-6">
                        <input type="text" required placeholder="Animal name" className="form-control" value={this.state.searchQuery} onChange={this.onChangeSearch} aria-describedby="button-addon2"/>
                        <input type="submit" value="Search" id="button-addon2" className="btn btn-outline-secondary"/>
                </div>


                </form>
                
                <div className="container">
                    <div className="row">
                        {this.state.faunacards.map((card)=> <Faunacard faunacard={card}/>)}
                    </div>
                </div>
                


            </div>
        )
    }
}


