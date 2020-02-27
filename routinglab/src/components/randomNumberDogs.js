import React from "react";
import axios from "axios";

class Moredogs extends React.Component {
  state = {
    src: ""
  };
  getDogs = async () => {
      let num = 5
    try {
      let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`);
      debugger
      this.setState({
        src: res.data.message
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { src } = this.state;
    return (
      <div>
        <select onChange={this.getDogs}>GET RANDOM DOGS</select>
        <img src={src}></img>
      </div>
    );
  }
}

export default Moredogs;
