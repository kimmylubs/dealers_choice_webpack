import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class App extends React.Component {
    constructor() {
      super();
      this.state = {
        bobas: [],
      }
      this.addPrice = this.addNew.bind(this);
    };
    addNew(){
      
    }
    async componentDidMount() {
      const bobas = (await axios.get("/api/bobas")).data;
      this.setState({ bobas });
    };
    render() {
      const bobas = this.state.bobas;
      return (
        <div>
          <h1> Boba Stores </h1>
          <button onClick={this.addNew}> More </button>
          <ul>
            {bobas.map(boba => {
              return (
                <li>  {boba.name} - {boba.price}  &emsp;
                <button>   x </button>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }


  ReactDOM.render(<App />, document.querySelector('#root'));