import React from 'react';
import { Table, Jumbotron, UncontrolledAlert} from 'reactstrap';
import PieChart from "react-svg-piechart"
import "../../css/container/PortfolioContainer.css"

const data = [
  {title: "Data 1", value: 100, color: "#22594e"},
  {title: "Data 2", value: 60, color: "#2f7d6d"},
  {title: "Data 3", value: 30, color: "#3da18d"},
  {title: "Data 4", value: 20, color: "#69c2b0"},
  {title: "Data 5", value: 10, color: "#a1d9ce"},
]
// 22594e
// 2f7d6d
// 3da18d
class PortfolioContainer extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    this.props.data.tickets.map((item,i)=>{
      item.color = data[i].color;
    })
    return (
      <div className="PortfolioContainer">
      <UncontrolledAlert color="info">
        Здесь будет основная информации о состоянии вашего портфеля.
      </UncontrolledAlert>
      <UncontrolledAlert color="info">
        Акции Alfa в среднем вырасли на 9%!
      </UncontrolledAlert>
      <UncontrolledAlert color="danger">
        Нестабильная экономическая ситуация. Стоит вывести все деньги.
      </UncontrolledAlert>
      <div className="Chart">
      <PieChart
        viewBoxSize = {50}
        data={this.props.data.tickets}
        // If you need expand on hover (or touch) effect
        expandOnHover
        // If you need custom behavior when sector is hovered (or touched)
        // onSectorHover={(d, i, e) => {
        //   if (d) {
        //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
        //   } else {
        //     console.log("Mouse leave - Index:", i, "Event:", e)
        //   }
        // }
      />
      </div>
      <Table>
        <thead>
          <th>#</th>
          <th>Имя портфеля</th>
          <th>Имя тикета</th>
          <th>Цена</th>
          <th>Процент</th>
        </thead>
        <tbody>
          {
            this.props.data.tickets.map((item,i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{this.props.data.name}</td>
                  <td>{item.title}</td>
                  <td>{item.value * item.count}</td>
                  <td>{item.percent}</td>
                </tr>
                )
            })
          }
        </tbody>
      </Table>
      </div>
    );
  }
}

export default PortfolioContainer;
