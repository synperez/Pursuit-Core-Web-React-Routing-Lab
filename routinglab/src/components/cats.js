import React from "react";
import axios from "axios";

class Cats extends React.Component {
  state = {
    src: ""
  };
  getRandomCat = async () => {
    try {
      let res = await axios.get("https://api.thecatapi.com/v1/images/search");
      this.setState({
        src: res.data[0].url
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { src } = this.state;
    return (
      <div>
        <button onClick={this.getRandomCat}>GET RANDOM CAT</button>
        <img src={src}></img>
      </div>
    );
  }
}

export default Cats;