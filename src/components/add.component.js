import React,{Component} from 'react';

import './styles/add.css'


// const postFaunaEntity = async (body) => {
//     const res = await fetch('/api/Fauna', {
//             method: 'POST',
//             body: JSON.stringify(body),
//             headers: { 'Content-type': 'application/json'}
//     });
//     if (!res.ok) {
//             console.log('error');
//     } else {
//             const data = await res.json();
//             console.log(data);
//     }
// };


export default class BiopediaAdd extends Component{
    constructor(props){
        super(props);

        this.onChangeVernacular = this.onChangeVernacular.bind(this);
        this.onChangeScientific = this.onChangeScientific.bind(this);
        this.onChangeFamily = this.onChangeFamily.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            vernacularName:'',
            scientificName:'',
            family:'',
            description:'',
            imagefile:null
        }
        
    }
    onChangeVernacular(e){
        this.setState({
            vernacularName: e.target.value
        });
    }
    onChangeScientific(e){
        this.setState({
            scientificName: e.target.value
        });
    }
    onChangeFamily(e){
        this.setState({
            family: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeImage(e){
        this.setState({
            imagefile: e.target.files[0]
        });
    }

    onSubmit(e){
        e.preventDefault();
        const exercise = {
            vernacularName:this.state.vernacularName,
            scientificName:this.state.scientificName,
            family:this.state.family,
            description:this.state.description,
            imagefile:this.state.imagefile
        }
        // console.log(exercise);
        const formData = new FormData();
        formData.append('vernacularName', exercise.vernacularName);
        formData.append('scientificName', exercise.scientificName);
        formData.append('family', exercise.family);
        formData.append('description', exercise.description);
        formData.append('faunaImage', exercise.imagefile);
        this.postFauna(formData);
        window.location = "/";
    }

    async postFauna(bodyformData){
        const res = await fetch('http://localhost:3001/api/Fauna', {
            method: 'POST',
            body: bodyformData,
            // headers: { 'Content-type': 'application/json'}
         });
        if (!res.ok) {
                console.log('error');
        } else {
                const data = await res.json();
                console.log(data);
        }
    }

    render(){
        return ( 
            <div id="contents">                
                
                <form onSubmit={this.onSubmit}>
                    <div className="container" >
                    <h3 className="text-left"><b>Add new Fauna Entity</b></h3>
                    <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h4>Vernacular name: </h4>
                                    <input type="text" required className="form-control" value={this.state.vernacularName} onChange={this.onChangeVernacular}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <h4>Scientific name: </h4>
                                <input type="text" required className="form-control" value={this.state.scientificName} onChange={this.onChangeScientific}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h4>Family: </h4>
                                    <input type="text" required className="form-control" value={this.state.family} onChange={this.onChangeFamily}/>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <h4>Upload Image: </h4>
                                    <div className="input-group">
                                    <input type="file" name="input-foto" id="inputimg" accept="image/png, image/jpeg" onChange={this.onChangeImage} />
                                    </div>
                            </div>
                        </div>
                   
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <div className="form-group">
                        <h4>Description: </h4>
                        <textarea class="form-control" rows="3" value={this.state.description} onChange={this.onChangeDescription}></textarea>
                         </div>
                        </div>
                    </div>
                    
                    
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                            <input type="submit" value="Add Fauna Entity" className="btn btn-primary" id="submitbutton"/>
                            </div>
                        </div>
                    </div>
                   
                    </div>
                    
                    
                    
                </form>
            </div>
        )
    }
}