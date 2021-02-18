import './App.css';
import React, { Component } from 'react';
import { receipt1, receipt2, receipt3 } from './records/records';

class App extends Component {

  state = {
    receipts: [receipt1, receipt2, receipt3]
  }
  updatelist = (i) => {
    console.log('click')
    let list = [...this.state.receipts]
    list[i].paid = true
    this.setState({ receipts: list })
  }
  render() {
    console.log(this.state.receipts)
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {
          this.state.receipts.map((item, i) => {
            if (item.paid == false) {
            return (
              <div key={i} onClick={() => { this.updatelist(i) }} style={{ border: 'salmon 1.5px solid', padding: '10px' }}>
                <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>

                  <li>
                    <h1>{item.person}</h1>
                  </li>
                  <li>
                    <ul>
                      <li>
                        Main: {item.order.main}
                      </li>
                      <li>
                        Rice: {item.order.rice}
                      </li>
                      <li>
                        Sauce: {item.order.sauce}
                      </li>
                      <li>
                        Drink: {item.order.drink}
                      </li>
                      <li>
                        Cost: {item.order.vost}
                      </li>
                    </ul>
                  </li>
                </ul>

              </div>


            )
            }

          })

        }
      </div>
    );
  }
}

export default App;
