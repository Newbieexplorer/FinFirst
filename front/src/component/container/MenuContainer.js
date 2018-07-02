import React, {
  Component
} from 'react';
import   '../../css/container/MenuContainer.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class MenuContainer extends Component {

  constructor(props){
      super(props)
      this.state = {active: 0}
  }

  onChangeItem = (index) => {
    this.props.onChangeItem(index)
    this.setState({active: index})
  }

  render() {
    return (
      <div>
      <ListGroup>
        <ListGroupItem ><h3>Портфели</h3></ListGroupItem>
            {
              this.props.data.map((item,i) => {
                console.log(i + item);
              return ( <ListGroupItem key={i} className = {this.state.active == i ? "active":null} onClick = {this.onChangeItem.bind(this,i)}  tag="button" action>{item.name}</ListGroupItem>);
            })
          }
          <ListGroupItem ></ListGroupItem>
          <ListGroupItem tag="button" action>Создать   портфель</ListGroupItem>
          <ListGroupItem tag="button" action>Удалить   портфель</ListGroupItem>

      </ListGroup>
      </div>

    );
  }
}

export default MenuContainer;
