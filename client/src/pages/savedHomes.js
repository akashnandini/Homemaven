import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "../pages/savedHome.css"
class Homes extends Component {
  state = {    
    address:"",
    county:"",
    building_type:"",
    levels:"",
    finished_size:"",
    year_built:"",
    homes:[],
  };

  componentDidMount() {
    this.loadHomes();
  }

  loadHomes = () => {
    let email = localStorage.getItem("email");
    API.getHome(email)
      .then(res =>{
        console.log("***********data"+JSON.stringify(res.data));
        
        this.setState({ homes: res.data});
        console.log("***********state data"+this.state.homes);

        //console.log("*****");
        //console.log("response:  "+JSON.stringify(res.data[0]));
        //console.log("response:  "+JSON.stringify(res.data[1]));
      }
      )
      .catch(err => console.log(err));
       //console.log(this.state.homes);
  };

 
  deleteHome = id => {
    API.deleteHome(id)
      .then(res => this.loadHomes())
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  showMap = (str) => {
    console.log("search Map");
    var str1 = str.split(",");
    console.log(str1[0], str1[1]);
    API.displayMap(str1[0], str1[1])  
      .then(response => {
        console.log("response:  "+ JSON.stringify(response));
        this.setState({
          mapUrl:response.data.results[0].locations[0].mapUrl,          
        });
        console.log("MapUrllllllllllllllllll  "+this.state.mapUrl);
      })        
      .catch(err => console.log(err));

      this.render();
    }
   
   
  render() {
    return (      
            <Jumbotron>
               <div class="card" style={{width:"800px"}}>
                  <div class="card-header" style={{ backgroundColor: "rgb(43, 43, 82)",color: "white"}}>
                    Saved Homes
                  </div>
                  <div class="card-body" style={{ backgroundColor: "lightgrey",color: "black"}}>
                    <h5 class="card-title"></h5>
                    <p class="card-text" style={{opacity:2}}>{this.state.homes.length ? (
                      <List className="list-group">
                          
                            {this.state.homes.map(home => (
                              <ListItem className="list-group-item" key={home.id}>
                                                           
                                  <strong>
                                    {home.address}
                                  </strong>
                                  <a href={`https://www.google.com/maps/place/${home.address}`} target="_black">
                                  <button type="button" className="btn btn-primary mt-3 btnNew">View</button>
                                  </a>
                                  <button type="button" onClick={() => this.deleteHome(home._id)} className="btn btn-primary mt-3 btnNew">Delete</button>
                                  </ListItem> 
                            ))}
                            
                            </List>
                          
                        ) : (
                          <h3>No Results to Display</h3>
                        )}</p>
                              </div>
                            </div> 
                      </Jumbotron>
    );
  }
}

export default Homes;