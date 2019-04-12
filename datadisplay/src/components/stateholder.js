import React, { Component } from 'react'
import DisplayData from './displaydata';
import './stateholder.css'

class StateHolder extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
        }

        this.handleNextClick = this.handleNextClick.bind( this )
        this.handleBackClick = this.handleBackClick.bind( this )
    }
    
    handleNextClick(){
        if ( this.state.index < 24) {
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
                index: 24
            })
        }


        
    }

    render(){
        let nextButton = 'Next >';
        let backButton = '< Previous'
        return(
            <div>
                <DisplayData index={ this.state.index } />
                <div className='buttonDiv'>
                    <div className='backDiv' onClick={ this.handleBackClick }> { backButton } </div>
                    <div className='nextDiv' onClick={ this.handleNextClick }> { nextButton } </div>
                </div>
                
                
            </div>
        )
    }


}

export default StateHolder;