import React, { Component } from 'react'
import DisplayData from './displaydata';
import './stateholder.css'
import data from './data'




class StateHolder extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            data: data,
            addNew: false,
            edit: false,
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

        this.handleNextClick = this.handleNextClick.bind( this )
        this.handleBackClick = this.handleBackClick.bind( this )
        this.handleAddClick = this.handleAddClick.bind( this )
        this.addData = this.addData.bind( this )
        this.handleEditClick = this.handleEditClick.bind( this )
        this.editData = this.editData.bind( this )
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

    handleAddClick(){
        if (this.state.addNew === false) {
            this.setState({
                addNew: true
            })
        } else {
            this.setState({
                addNew: false
            })
        }
        
        console.log(this.state.addNew)
    }

    handleEditClick(){
        if (this.state.edit === false) {
            this.setState({
                edit: true
            })
        } else {
            this.setState({
                edit: false
            })
        }
    }
    

    handleDeleteButton(index){
        let newArray = this.state.data.filter((e, i) => i != index)
        if (index != this.state.data.length - 1) {
            this.setState({
                data: newArray,
            })
        } else {
            this.setState({
                data: newArray,
                index: this.state.index - 1
            })
        }
        
        
        
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    editData(index){

        let newData = this.state.data.map((e, i) => {if (i === index){return {
            id: this.state.index + 1,
            name: {first: this.state.firstNameInput, last: this.state.lastNameInput},
            city: this.state.cityInput,
            country: this.state.countryInput,
            employer: this.state.employerInput,
            title: this.state.titleInput,
            favoriteMovies: [this.state.movieOneInput, this.state.movieTwoInput, this.state.movieThreeInput],
        }} else {return data[i]}})
        this.setState({
            data: newData,
            edit: false
        })
    }   
    
    addData(){

        this.setState({
            data: [...this.state.data, {
                id: this.state.data.length + 1,
                name: {first: this.state.firstNameInput, last: this.state.lastNameInput},
                city: this.state.cityInput,
                country: this.state.countryInput,
                employer: this.state.employerInput,
                title: this.state.titleInput,
                favoriteMovies: [this.state.movieOneInput, this.state.movieTwoInput, this.state.movieThreeInput],
                
            }]
        })
        this.setState({
            addNew: false
        })
    }
        

    render(){
        let nextButton = 'Next >';
        let backButton = '< Previous'
        const addNewData = 
            this.state.addNew ?
                
            <div>
            <div>
                <input name='firstNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='First Name' />
                <input name='lastNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='Last Name' />
            </div>
            <div>
                <input name='cityInput' onChange={ (e) => this.handleChange( e ) } placeholder='City' />
                <input name='countryInput' onChange={ (e) => this.handleChange( e ) } placeholder='Country' />
                
            </div>
            <div>
                <input name='employerInput' onChange={ (e) => this.handleChange( e ) } placeholder='Employer' />
                <input name='titleInput' onChange={ (e) => this.handleChange( e ) } placeholder='Title' />
            </div>
            <div>
                <input name='movieOneInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 1' />
                <input name='movieTwoInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 2' />
                <input name='movieThreeInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 3' />
            </div>
            <button onClick={ this.addData }> Confirm </button>
        </div>
                
            : <div></div>
        

        const editData = 
        this.state.edit ? 
        <div>
        <div>
            <input name='firstNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='First Name' />
            <input name='lastNameInput' onChange={ (e) => this.handleChange( e ) } placeholder='Last Name' />
        </div>
        <div>
            <input name='cityInput' onChange={ (e) => this.handleChange( e ) } placeholder='City' />
            <input name='countryInput' onChange={ (e) => this.handleChange( e ) } placeholder='Country' />
            
        </div>
        <div>
            <input name='employerInput' onChange={ (e) => this.handleChange( e ) } placeholder='Employer' />
            <input name='titleInput' onChange={ (e) => this.handleChange( e ) } placeholder='Title' />
        </div>
        <div>
            <input name='movieOneInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 1' />
            <input name='movieTwoInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 2' />
            <input name='movieThreeInput' onChange={ (e) => this.handleChange( e ) } placeholder='Favorite Movie 3' />
        </div>
        <button onClick={ () => this.editData( this.state.index ) }> Confirm </button>
        </div>

        : <div></div>

        return(
            <div>
                <DisplayData index={ this.state.index } data={ this.state.data } />
                
                <div className='buttonDiv'>
                    <div className='backDiv' onClick={ this.handleBackClick }> { backButton } </div>
                    <div className='blueButtonDiv'>
                    <div className='editDiv blueButtons' onClick={ this.handleEditClick }> Edit </div>
                    <div className='deleteDiv blueButtons' onClick={ () => this.handleDeleteButton(this.state.index) }> Delete </div>
                    <div className='addDiv blueButtons' onClick={ this.handleAddClick }> Add </div>
                    </div>
                    <div className='nextDiv' onClick={ this.handleNextClick }> { nextButton } </div>
                    
                </div>
                <div className='inputs'>
                <div>{ addNewData } </div>
                <div>{ editData } </div>
                </div>
                
            </div>
            
        )
    }


}

export default StateHolder;