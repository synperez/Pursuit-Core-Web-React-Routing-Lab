import React, { Component } from 'react';
import axios from "axios";

class DogBreeds extends Component {
    state = {
        breeds: [],
        currentBreed: "",
        src: ""
    }
    async componentDidMount() {
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/list/all");
            this.setState({
                breeds: Object.keys(res.data.message)
            })
        } catch (error) {
            this.setState({
                breeds: []
            });
            console.log(error);
        }
    }
    handleBreed = async (e) => {
        this.setState({
            currentBreed: e
        })
        try {
            console.log();
            let res = await axios.get(`https://dog.ceo/api/breed/${e}/images/random`);
                this.setState({src: res.data.message})
        } catch (error) {
            console.log(error);

        }
    }
    render() { 
        console.log(this.state.currentBreed);
        const options = this.state.breeds.map(breed => {
            return <option value={breed} key={breed}>{breed}</option>
        })
        return ( 
            <>
            <select onChange={(e) => this.handleBreed(e.target.value)}
            value={this.state.currentBreed}>
                <option value={""} disabled>Select Breed</option>
                {options}
            </select>
            <img src={this.state.src}></img>
            </>
         );
        }
}

 
export default DogBreeds;