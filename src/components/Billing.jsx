import React from "react";
import { useState } from "react";
import "./Billing.css";
const Billing = () => {
  const myFields = [];
  const botFields = [];
  let flag1 = true;
  const blocks = [];
  const options = [];

  const startGame = () => {
    blocks.length = 0;
    options.length = 0;
    myFields.length = 0;
    botFields.length = 0;
  };

  const Reset = () => {
    blocks.length = 0;
    options.length = 0;
    myFields.length = 0;
    botFields.length = 0;
  };

  const [me, setMe] = useState()
  return (
    <>
      <div className="settings">
        <button className="reset" onClick={Reset}>Reset</button>
        <h3 className="whoStart">Who start?</h3>
        <form className="form1">
          <input type="radio" className="me" value={me} onChange={() => {setMe('me')}}/>
          me
          <input type="radio" className="bot" /> bot
        </form>
        <h3 className="whoStart">Choose your item:</h3>
        <form className="form2">
          <input type="radio" className="x" /> X
          <input type="radio" className="o" /> O
        </form>

        <div className="div"></div>
      </div>

      <div className="settings2">
        <h3 className="currentPlayer"></h3>
        <button className="accept">Accept</button>
        <button className="decline">Cancel</button>
      </div>

      <div className="settings3">
        <button className="Start" onClick={startGame}>
          Start game!
        </button>
        <h1 className="winlosse"></h1>
      </div>

      <div className="board">
        <div className="field" id="1"></div>
        <div className="field" id="2"></div>
        <div className="field" id="3"></div>
        <div className="field" id="4"></div>
        <div className="field" id="5"></div>
        <div className="field" id="6"></div>
        <div className="field" id="7"></div>
        <div className="field" id="8"></div>
        <div className="field" id="9"></div>
      </div>
    </>
  );
};

export default Billing;
