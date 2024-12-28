import React from "react";
import attack from './images/attack.png';
import defence from './images/defend.png'
class Counter extends React.Component{
    constructor(props)
    {
        
        super(props);
        //this.handleAttack = this.handleAttack.bind(this);
        //this.handlDefence = this.handlDefence.bind(this);
        this.state = {
            count : 0,
            LastPlay : "",
            GameStatus : ""
        }
    }
    handleAttack = () => {
        //alert("Attack Clicked");
        
        this.setState((previousState) => {
          let currentCount = previousState.count + Math.round(Math.random()*10);
          let status = ""
          if(currentCount >= 20)
          {
               status = "You won";
          }
          else if(currentCount <= -20)
          {
               status = "You lost";
          }
          return {  
            count : currentCount,
            LastPlay : "Attack",
            GameStatus : status
          }
        })
    }
    handlDefence = () => {
        //alert("Defence Clicked");
     
       
        this.setState((previousState) => {
            let currentCount = previousState.count - Math.round(Math.random()*10);
            let status = "";
          if(currentCount >= 20)
          {
               status = "You won";
          }
          else if(currentCount <= -20)
          {
               status = "You lost";
          }
            return {  
              count : currentCount,
              LastPlay : "Defence",
              GameStatus : status
            }
          })
    }
    handleRandomPlay = () => {
        this.setState(() => {
              let randomNum = Math.round(Math.random());
              if(randomNum === 0)
                {
                    this.handlDefence();
                } 
                else{
                    this.handleAttack();
                }
        })
    }
    handleReset = () => {
        this.setState(() => {
            return{
                count : 0,
                LastPlay : "",
                GameStatus : ""
            }
        })
    }
    
    render()
    {
        return(
            <div className="row text-white text-center">
                <h1>Game score : {this.state.count}</h1>
                <p>You win at +20 points and you lose at -20 points</p>
                <p>Last play : {this.state.LastPlay}</p>
                <p>Game status : {this.state.GameStatus}</p>
                <div className="col-6 col-md-3 offset-md-3">
                    <img
                     style={{width:"100%",  cursor:"pointer", border: "1px solid green"}} 
                     className="rounded p-3" 
                     src={attack} alt="Attack" 
                     onClick={this.handleAttack}/>
                    
                </div>
                <div className="col-6 col-md-3">
                    <img
                     style={{width:"100%",  cursor:"pointer", border: "1px solid red"}} 
                     className="rounded p-3" 
                     src={defence} alt="Defence" 
                     onClick={this.handlDefence}/>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                   <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
                   <br/>
                   <button className="btn btn-secondary w-100 mt-2" onClick={this.handleReset}>Reset</button>
                </div>
                
            </div>
        )
    }
}


export default Counter;