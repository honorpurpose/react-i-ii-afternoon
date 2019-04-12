import React, { Component } from 'react'
import data from './data'
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
                        <h1 className='whereAt'>{ this.props.index + 1 }/25</h1>
                        <h1 className='firstLastName'>{data[this.props.index].name.first} {data[this.props.index].name.last}</h1>
                        <div className='personInfo'>
                            <p><strong>From: </strong> { data[this.props.index].city }, { data[this.props.index].country }</p>
                            <p><strong>Job Title: </strong> { data[this.props.index].title }</p>
                            <p><strong>Employer: </strong>{ data[this.props.index].employer }</p>
                        </div>
                        <div className='movieContainer'>
                            <p><strong>Favorite Movies:</strong></p>
                            <div className='favoriteMovies'>
                                <p>1. { data[this.props.index].favoriteMovies[0] }</p>
                                <p>2. { data[this.props.index].favoriteMovies[1] }</p>
                                <p>3. { data[this.props.index].favoriteMovies[2] }</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default DisplayData;