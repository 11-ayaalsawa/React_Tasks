import React, { Component } from 'react';


 

class Show extends Component {

    constructor ()
    {
        super ()
        this.state={

             
     visible : 'block',
     color : 'red'
        }
    }


    Change_visiblity = () =>
    {
        if (this.state.visible === 'block') {
            this.setState
            ({
            visible : 'none'

            })
    
            
        } else {
            this.setState
            ({
visible : 'block'
            })
    
    
            
            
        }
    
    
    }
     Change_color = () =>
    {
        if (this.state.color === 'red') {
            this.setState
            ({
color : 'black'
            })
    
    
            
            
        } else {
    
            this.setState
            ({
color : 'red'
            })
    
            
            
        }
    
    }
  

    render() { 
        return (
            
            <p>
              
             <button onClick={this.Change_visiblity}> Hide Text</button>   <button onClick={this.Change_color}>Change Color</button>
               <h3 style={{color:this.state.color,display:this.state.visible }}>
                There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are 
                  </h3>
                  
            </p>
        );
    }
}
 
export default Show;