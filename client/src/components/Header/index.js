import React, { Component } from "react";
import "./header.css";
//import Jumbotron from "../components/Jumbotron";

//import { Col, Row, Container } from "../components/Grid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./header.css";
//import Carousel from "../Carousel/Carousel"
/*class Homes extends Component {
  state = {
   
  };

  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img src="../../logo.png"></img>
            </Jumbotron>           
          </Col>          
        </Row>
      </Container>
    );
  }
}*/
//class FirstPage extends Component {
function Header(){
   // render() {
        return (
           
                <Carousel autoPlay>                    
                    <div>
                        <img src="car1.jpg" />                       
                    </div>                    
                    <div>
                        <img src="car4.jpg" />                       
                    </div>
                    <div>
                        <img src="car5.jpg" />                    
                    </div>
                    <div>
                        <img src="airplane1.jpg"/>                       
                    </div>
                </Carousel>           
        )
    }
//}
export default Header;
