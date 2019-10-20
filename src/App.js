import React, { Component } from 'react';
import './App.css';
import Person from './Person';

// const App = () => {

//   const [personState, setPersonState] = useState({
//     persons: [
//       {
//         name: 'Hemant', age: 30
//       },
//       {
//         name: 'Reena', age: 30
//       }
//     ]
//   });

//   const [otherState, setOtherState] = useState({
//     items: [
//       {
//         name: 'Hemant', age: 30
//       },
//       {
//         name: 'Reena', age: 30
//       }
//     ]
//   });

//   const switchHandler = () => {

//     setPersonState({
//       persons: [
//         {
//           name: 'Hemant Jain', age: 30
//         },
//         {
//           name: 'Reena Jain', age: 30
//         }
//       ]
//     });

//     console.log(personState, otherState);
//   }

//   return (
//     <div className="App" >
//       <header className="App-header">
//         <h1>I am React App</h1>
//         <button onClick={switchHandler}>Switch</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}>Hello</Person>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
//       </header>
//     </div >
//   );

// }

class App extends Component {

  state = {
    persons: [
      {
        name: 'Hemant', age: 30
      },
      {
        name: 'Reena', age: 30
      }
    ],
    showPersons: false
  };

  switchHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 30
        },
        {
          name: 'Reena Jain', age: 30
        }
      ]
    }, () => console.log(this.state.persons));
  }

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value, age: 30
        },
        {
          name: 'Reena', age: 30
        }
      ]
    }, () => console.log(this.state.persons));
  }

  toggleHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    const style = {
      padding: '8px',
      border: '1px solid #eee'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person changed={this.changedNameHandler} click={this.switchHandler.bind(this, 'Hello')} name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        </div>
      )
    }


    return (
      <div className="App" >
        <header className="App-header">
          <h1>I am React App</h1>
          <button style={style} onClick={this.switchHandler.bind(this, 'Jain')}>Switch</button>
          <button style={style} onClick={this.toggleHandler}>Toggle</button>
          {persons}
        </header>
      </div >
    );

  }
}

export default App;