import React, { Component } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

 

class CreateAd extends Component {

  constructor(props){
    super(props)

    this.state ={

        clientname: "", 
        fromdate: "", 
        todate: "", 
        states: "asd", 
        district: "asd" , 
        city: "asd" , 
        localarea: "asdd" , 
        impressions: "" , 
        audience: "" , 
        adplacement: "" , 
        adplatform:"" , 
        adtype:"" , 
        adtitle:"" , 
        image1:"" , 
        image2:"", 
        image3: "",
        action1: "",
        action2: "",
        action3: ""
        
        
    }
}

  

changeHandler = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}


submitHandler = (e) => {
  e.preventDefault()


  
  const  clientname = this.state.clientname
  const  fromdate = this.state.fromdate
  const  todate = this.state.todate
  const  states = this.state.states
  const  district = this.state.district
  const  city = this.state.city
  const  localarea = this.state.localarea
  const  impressions =this.state.impressions
  const  audience = this.state.audience
  const  adplacement =this.state.adplacement
  const  adplatform = this.state.adplatform
  const  adtype = this.state.adtype
  const  adtitle = this.state.adtitle
  const  image1 = this.state.image1
  const  image2 = this.state.image2
  const  image3 = this.state.image3
  const  action1 = this.state.action1
  const  action2 = this.state.action2
  const  action3 = this.state.action3


  const data1 = {
      clientname,
  }
  console.log(data1)

  const data2 = {
      states,
      district,
      city,
      localarea
  }
  console.log(data2)
  
  axios.post('/t/aq4wd-1636008700/post', data1)
  axios.post('/t/2bz6j-1636008741/post', data2)
  
  .then(response =>{
      console.log('Success:',response)
  })
  .catch(err => {
      console.log('Error :',err)
  })
}

render(){
return(
    <div className="content">
      <form className="form-group"  onSubmit={this.submitHandler.bind(this)}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 box">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="clientname"> Client Name:</label>
              <input type="text" className="form-control" name="clientname" id="clientname" value={this.state.clientname} onChange={this.changeHandler.bind(this)}/>
            </div>
            
            <div className="form-group">
              <label>Form date</label>
              <input type="date" name="fromdate" id="fromdate" className="form-control" value={this.state.fromdate} onChange={this.changeHandler.bind(this)}/>  
              <label>To date</label>
              <input type="date" name="todate" id="todate" className="form-control" value={this.state.todate} onChange={this.changeHandler.bind(this)}/>                
            </div>
            
            <div className="form-group">
              <label htmlFor="states">Select State:</label>
              <select className="form-control" name="states" id="states" value={this.state.states} onChange={this.changeHandler.bind(this)} >
                <option>Bihar</option>
                <option>Gujarat</option>
                <option>Jharkhand</option>
                <option>Punjab</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="district">Select District:</label>
              <select className="form-control" name="district" id="district" value={this.state.district} onChange={this.changeHandler.bind(this)}>
                <option>Araria</option>
                <option>Arwal</option>
                <option>Patna</option>
                <option>Rohtas</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="city">Select City:</label>
              <select className="form-control" name="city" id="city" value={this.state.city} onChange={this.changeHandler.bind(this)}>
                <option>Araria</option>
                <option>Arwal</option>
                <option>Patna</option>
                <option>Rohtas</option>
              </select>
            </div>
           
            <div className="form-group">
              <label htmlFor="localarea">Select Hyper Local Area:</label>
              <select className="form-control" name="localarea" id="localarea" value={this.state.localarea} onChange={this.changeHandler.bind(this)}>
                <option>Income Tax</option>
                <option>Gandhi Maidan</option>
                <option>Belly Road</option>
                <option>Mithapur</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="impressions">Impression Per Day:</label>
              <select className="form-control" name="impressions" id="impressions" value={this.state.impressions} onChange={this.changeHandler.bind(this)}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>
          
            <div className="form-group">
              <label htmlFor="audience">Audience Size:</label>
              <select className="form-control" name="audience" id="audience" value={this.state.audience} onChange={this.changeHandler.bind(this)}>
                <option>1000</option>
                <option>2500</option>
                <option>3000</option>
                <option>5000</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="placement">Ad Placement:</label>
              <select className="form-control" name="placement" id="placement" value={this.state.placement} onChange={this.changeHandler.bind(this)}>
                <option>Home Page</option>
                <option>Landing Page</option>
                <option>About Page</option>
                <option>Service Page</option>
                <option>More</option>
              </select>
            </div>

            <div className="form-group">
                <label htmlFor="adplatform">Ad Platfrom:</label>
                <select className="form-control" name="platform" id="platform" value={this.state.platform} onChange={this.changeHandler.bind(this)}>
                  <option>Mobile App</option>
                  <option>Laptop</option>
                  <option>PC</option>
                  <option>Lablet</option>
                  <option>More</option>
                </select>
              </div>
            
          </div>
        </div>
        <div className="col-md-7 box2">
          <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="adtype">Select Ad Type:</label>
              <select className="form-control" name="adtype" id="adtype"  value={this.state.adtype} onChange={this.changeHandler.bind(this)}>
                <option>Full Screen</option>
                <option>Laptop</option>
                <option>PC</option>
                <option>Lablet</option>
                <option>More</option>
              </select>
            </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="adtitle">Ad Title:</label>
                <select className="form-control" name="adtitle" id="adtitle" value={this.state.adtitle} onChange={this.changeHandler.bind(this)}>
                  <option>ABC Products</option>
                  <option>Laptop</option>
                  <option>PC</option>
                  <option>Lablet</option>
                  <option>More</option>
                </select>
              </div>
            </div>

            
          </div>
          <div className="row">
            <div className="col-md-3 right">
            <input type="file" name="image1" id="image1" className="form-control-file" value={this.state.image1} onChange={this.changeHandler.bind(this)} />
              
            </div>          
           <div className="col-md-3 right">
           <input type="file" name="image2" id="image2" className="form-control-file" value={this.state.image2} onChange={this.changeHandler.bind(this)} />
            
           </div>
           <div className="col-md-3 right">
           <input type="file" name="image3" id="image3" className="form-control-file" value={this.state.image3} onChange={this.changeHandler.bind(this)} />
            
           </div>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <label className="required">Call To Action</label>
              <input type="text"  name="action1" id="action1" value={this.state.action1} onChange={this.changeHandler.bind(this)} style={{width:'100%'}}/>
            </div>          
           <div className="col-md-3 ">
              <label className="required">Call To Action</label>
              <input type="text"  name="action2" id="action2" value={this.state.action2} onChange={this.changeHandler.bind(this)} style={{width:'100%'}} />
           </div>
           <div className="col-md-3 ">
              <label className="required">Call To Action</label>
              <input type="text"  name="action3" id="action3" value={this.state.action3} onChange={this.changeHandler.bind(this)} style={{width:'100%'}}/>
           </div>
          </div>
          <br/><br/>
          <button type="submit" className="btn btn-primary float-right">Run Compaign</button>
        <button type="submit" className="btn btn-success float-right">Save</button>
        </div>  
        
      </div>
      
    </div>
    </form>
    


    
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
     </div>
      )
    }
  }
 export default CreateAd