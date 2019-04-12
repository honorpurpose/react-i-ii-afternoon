import React, { Component } from 'react'

import './displaydata.css'

class DisplayData extends Component {
    constructor(props){
        super(props);

        

    }

    
    

    render(){
        return (
            <div className='content'>
                <div className='home'>Home</div>
                
                    <div className='displayContent'>
                        <h1 className='whereAt'>{ this.props.index + 1 }/{this.props.data.length}</h1>
                        <h1 className='firstLastName'>{this.props.data[this.props.index].name.first} {this.props.data[this.props.index].name.last}</h1>
                        <div className='personInfo'>
                            <p><strong>From: </strong> { this.props.data[this.props.index].city }, { this.props.data[this.props.index].country }</p>
                            <p><strong>Job Title: </strong> { this.props.data[this.props.index].title }</p>
                            <p><strong>Employer: </strong>{ this.props.data[this.props.index].employer }</p>
                        </div>
                        <div className='movieContainer'>
                            <p><strong>Favorite Movies:</strong></p>
                            <div className='favoriteMovies'>
                                <p>1. { this.props.data[this.props.index].favoriteMovies[0] }</p>
                                <p>2. { this.props.data[this.props.index].favoriteMovies[1] }</p>
                                <p>3. { this.props.data[this.props.index].favoriteMovies[2] }</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default DisplayData;