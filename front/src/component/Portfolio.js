import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MenuContainer from "./container/MenuContainer"
import PortfolioContainer from "./container/PortfolioContainer"
import NavBar from "./customview/NavBar"
import '../css/Portfolio.css';



const dataUser = [ {
        "_id": "5a36ff62a434022548fe3e30",
        "name": "Смешанный",
        "stratDate": "2017-12-17T23:36:02.329Z",
        "startBalance": 0,
        "realBalance": 0,
        "currency": "",
        "__v": 0,
        "tickets": [
            {
                "_id": "5a36ff62a434022548fe3e2d",
                "title": "Alfa",
                "type": "asdftyqwwer",
                "value": 234,
                "count": 2,
                "percent": 0,
                "__v": 0
            },
            {
                "_id": "5a36ff62a434022548fe3e2e",
                "title": "Apple",
                "type": "asdftyqwwer",
                "value": 123,
                "count": 2,
                "percent": 1,
                "__v": 0
            },
            {
                "_id": "5a36ff62a434022548fe3e2f",
                "title": "Tinkof",
                "type": "asdftyqwwer",
                "value": 321,
                "count": 2,
                "percent": 2,
                "__v": 0
            }
        ]
    },
    {
            "_id": "5a36ff62a434022548fe3e30",
            "name": "Агресивный",
            "stratDate": "2017-12-17T23:36:02.329Z",
            "startBalance": 0,
            "realBalance": 0,
            "currency": "",
            "__v": 0,
            "tickets": [
                {
                    "_id": "5a36ff62a434022548fe3e2d",
                    "title": "Alfa",
                    "type": "asdftyqwwer",
                    "value": 32,
                    "count": 2,
                    "percent": 0,
                    "__v": 0
                },
                {
                    "_id": "5a36ff62a434022548fe3e2e",
                    "title": "Upple",
                    "type": "asdftyqwwer",
                    "value": 123,
                    "count": 2,
                    "percent": 1,
                    "__v": 0
                },
                {
                    "_id": "5a36ff62a434022548fe3e2f",
                    "title": "Pinkof",
                    "type": "asdftyqwwer",
                    "value": 44,
                    "count": 2,
                    "percent": 2,
                    "__v": 0
                }
            ]
        }
  ]


class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {currentItem: 0};
  }

  onChangeItem = (index) => {
      console.log("index now :" +this.state.currentItem)
      this.setState({currentItem:index});
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Row>
          <Col xs="3" md="3" lg={{size:2,offset:1}} >
            <MenuContainer
            onChangeItem ={this.onChangeItem}
            data = {dataUser}/>
          </Col>
          <Col xs="1" md="9" lg={{size:6,offset:1}} >
            <PortfolioContainer
               data = {dataUser[this.state.currentItem]}/>
          </Col>
        </Row>
        </div>
    );
  }
}

export default Portfolio;
