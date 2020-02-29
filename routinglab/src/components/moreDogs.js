import React from "react";
import axios from "axios";
import Select from "./select"

class MoreDogs extends React.Component {
  state = {
    src: "",
    amount: "1"
  };
  getDogs = async () => {
    try {
      let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${this.state.amount}`);
      debugger
      this.setState({
        src: res.data.message
      });
    } catch (error) {
      console.log(error);
    }
  };

  selectHandle = (e) => {
    this.setState({amount: e.target.value})
    debugger
  }


  render() {
    const { src } = this.state;
    return (
      <div>
        <button onClick={this.getDogs}>GET RANDOM DOGS</button>
        <Select selectHandle={this.selectHandle}/>
        <img src={src}></img>
      </div>
    );
  }
}

export default MoreDogs;
