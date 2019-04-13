import React, { Component } from 'react'
import data from './data'

class AddNew extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstNameInput: '',
            lastNameInput: '',
            cityInput: '',
            countryInput: '',
            employerInput: '',
            titleInput: '',
            movieOneInput: '',
            movieTwoInput: '',
            movieThreeInput: '',
        }

        this.addData = this.addData.bind( this )
    }

    handleFirstName (val) {
        this.setState({
            firstNameInput: val
        })
    }

    handleLastName (val) {
        this.setState({
            lastNameInput: val
        })        
    }

    handleCity (val) {
        this.setState({
            cityInput: val
        })        
    }

    handleCountry (val) {
        this.setState({
            countryInput: val
        })        
    }

    handleEmployer (val) {
        this.setState({
            employerInput: val
        })        
    }

    handleTitle (val) {
        this.setState({
            titleInput: val
        })        
    }

    handleFavMoviesOne (val) {
        this.setState({
            movieOneInput: val
        })        
    }

    handleFavMoviesTwo (val) {
        this.setState({
            movieTwoInput: val
        })        
    }

    handleFavMoviesThree (val) {
        this.setState({
            movieThreeInput: val
        })        
    }
    
    addData(){
        const newData = this.state.data.push({
            id: this.state.data.length,
            name: {first: this.state.firstNameInput, last: this.state.lastNameInput},
            city: this.state.cityInput,
            country: this.state.countryInput,
            employer: this.state.employerInput,
            title: this.state.titleInput,
            favoriteMovies: [...this.state.movieOneInput],
            favoriteMovies: [...this.state.movieTwoInput],
            favoriteMovies: [...this.state.movieThreeInput]
        })
        this.setState({
            data: newData
        })

    }
    
    render () {
        
        return (
            <div>
                <div>
                    <input onChange={ (e) => this.handleFirstName( e.target.value ) } placeholder='First Name' />
                    <input onChange={ (e) => this.handleLastName( e.target.value ) } placeholder='Last Name' />
                </div>
                <div>
                    <input onClick={ (e) => this.handleCity( e.target.value ) } placeholder='City' />
                    <input onChange={ (e) => this.handleCountry( e.target.value ) } placeholder='Country' />
                    
                </div>
                <div>
                    <input onChange={ (e) => this.handleEmployer( e.target.value ) } placeholder='Employer' />
                    <input onChange={ (e) => this.handleTitle( e.target.value ) } placeholder='Title' />
                </div>
                <div>
                    <input onChange={ (e) => this.handleFavMoviesOne( e.target.value ) } placeholder='Favorite Movie 1' />
                    <input onChange={ (e) => this.handleFavMoviesTwo( e.target.value ) } placeholder='Favorite Movie 2' />
                    <input onChange={ (e) => this.handleFavMoviesThree( e.target.value ) } placeholder='Favorite Movie 3' />
                </div>
                <button onClick={ this.addData }> Confirm </button>
            </div>
        )
    }
}

export default AddNew


