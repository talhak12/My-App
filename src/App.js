import React, { Component } from 'react';
import Radium,{StyleRoot} from 'radium';

import './App.css';
import Person from './Person/Person';



class App extends Component{

  state={
    persons:[
      {"id":"asd","name":"Jamil", "age":"3s2"},
      {"id":"asd1","name":"akhtar" ,"age":"38"},
      {"id":"asd2","name":"sadia" ,"age":"21"}
    ],
    otherState:"some other value",
    showPerson:false
  }

  deletePersonHandler=(personIndex)=>{
     //const persons=this.state.persons;

     const persons=[...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons:persons});
  }

  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id==id;
    })

    const person={...this.state.persons[personIndex]};

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }

  toggleShowPerson=()=>{
    const doesShow=this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  


  render(){

    const style={
      backgroundColor:'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons=null;

    if(this.state.showPerson){
      persons=(
        <div>
          {
            this.state.persons.map((person,index)=>{
               return <Person Click={()=>this.deletePersonHandler(index)}
               name={person.name} 
               age={person.age}
               key={person.id}
               index={person.id}
               Changed={(event)=>this.nameChangedHandler(event,person.id)}
               />
            })
          }

        </div>
      )
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
      
    }

    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }

    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    

  return (
   <StyleRoot>
    <div>
      <p className={classes.join(' ')}>hi, how are you</p>
      <button style={style} 
      onClick={this.toggleShowPerson}>
      Switch Name
      </button>

      {persons}

  </div>
  </StyleRoot>
  )}
};

export default Radium(App);
