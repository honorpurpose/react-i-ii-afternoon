import React, { Component } from 'react'
import DisplayData from './displaydata';
import './stateholder.css'
import data from './data'



class StateHolder extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            data: data
        }

        this.handleNextClick = this.handleNextClick.bind( this )
        this.handleBackClick = this.handleBackClick.bind( this )
        
    }
    
    handleNextClick(){
        if ( this.state.index < this.state.data.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        } else {
            this.setState({
                index: 0
            })
        }
        
        
    }

    handleBackClick(){
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        } else {
            this.setState({
                index: this.state.data.length - 1
            })
        }   
    }

    

    handleDeleteButton(index){
        let newArray = data.splice(index, 1)
        this.setState({
            data: data,
            
        })
        console.log(this.state.data)
    }

    render(){
        let nextButton = 'Next >';
        let backButton = '< Previous'
        
        return(
            <div>
                <DisplayData index={ this.state.index } data={ this.state.data } />
                <div className='buttonDiv'>
                    <div className='backDiv' onClick={ this.handleBackClick }> { backButton } </div>
                    <div className='deleteDiv' onClick={ () => this.handleDeleteButton(this.state.index) }> Delete </div>
                    <div className='nextDiv' onClick={ this.handleNextClick }> { nextButton } </div>
        
                </div>
                
                
            </div>
        )
    }


}

export default StateHolder;