import { useEffect, useState } from "react";
import "./App.css";
import crossImg from "./assets/x.png";
import circleImg from "./assets/o.png";
import Player from "./Player";

function App() {
  // let data =['','','','','','','','','']
  const emptyData = ["", "", "", "", "", "", "", "", ""];
  const [data, setData] = useState(emptyData);
  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState("");
  const [scoreX, setScoreX] = useState(0) 
  const [scoreO, setScoreO] = useState(0) 

  const toggle = (element, number) => {
    if (lock) {
      return;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      element.target.innerHTML = `<img src='${crossImg}'/>`;
      newData[number] = "x";
    } else {
      element.target.innerHTML = `<img src='${circleImg}'/>`;
      newData[number] = "o";
    }

    setData(newData);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log(data);
    const checkWin = () => {
      if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
        won(data[0]);
      } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
        won(data[3]);
      } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
        won(data[6]);
      } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
        won(data[0]);
      } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
        won(data[1]);
      } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
        won(data[2]);
      } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
        won(data[0]);
      } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
        won(data[2]);
      }
    };

    checkWin();
  }, [data]);

  // const toggle = (element, number) => {
  //   if (lock || data[number] !== "") {
  //     return;
  //   }

  //   const newData = [...data];
  //   newData[number] = count % 2 === 0 ? "x" : "o";

  //   if(count % 2 === 0){
  //     element.target.innerHTML = `<img src='${crossImg}'/>`;
  //   }else{
  //     element.target.innerHTML = `<img src='${circleImg}'/>`;
  //   }

  //   setCount(count + 1);
  //   checkWin();
  // };

  const won = (letter) => {
    setLock(true);
    setWinner(letter);

    if(letter === 'x'){
      setScoreX(prevScore => prevScore+1)
    }else if (letter === 'o'){
      setScoreO(prevScore => prevScore+1)
    }
  };

  const resetFunction = () => {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => (box.innerHTML = ""));
    setData(emptyData);
    setLock(false);
    setCount(0);
    setWinner("");
  };

  return (
    <div className="overall">
      <h1>{lock ? `The winner is Player ${winner}` : "Let's play X and O"}</h1>
      <div className="playerdiv">
        <Player score={scoreX} player="X"/>
        <Player score={scoreO} player="O"/>
      </div>

      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(element) => {
              toggle(element, 8);
            }}
          ></div>
        </div>
      </div>
      <button onClick={resetFunction}>Reset</button>
    </div>
  );
}

export default App;
