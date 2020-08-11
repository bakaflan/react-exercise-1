import React from "react";
import Eduction from "./Eduction";
import "../styles/eductions.css";

class Eductions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eductions: [
        {
          id: 1,
          year: "1990",
          summary: "I was born in Katowice",
          para:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.",
        },
        {
          id: 2,
          year: "2005",
          summary: "Secondary school specializing in artistic",
          para:
            "Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.",
        },
        {
          id: 3,
          year: "2009",
          summary: "First level graduation in Graphic Design",
          para:
            "Aspermatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde",
        },
        {
          id: 4,
          year: "2012",
          summary: "Second level graduation in Graphic Design",
          para: "Ducimus, aliquam tempore autem itaque et accusantium!",
        },
      ],
    };
  }

  render() {
    return (
      <div className="eductions">
        <h1>Eduction</h1>
        {this.state.eductions.map((eduction,index) => (
          <Eduction key = {index} info={eduction} />
        ))}
      </div>
    );
  }
}

export default Eductions;
