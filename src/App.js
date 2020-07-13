//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  //You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  
  const [quarter, setQuarter] = useState(0);
  const newQuarter = e => {
    setQuarter(quarter + 1)
  }
  const touchHome = e =>{
    setHomeScore(homeScore + 7)
  }
  const fieldHome = e => {
    setHomeScore(homeScore + 3)
  }

  const touchAway = e => {
    setAwayScore(awayScore + 7)
  }

  const fieldAway = e => {
    setAwayScore(awayScore + 3)
  }



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter = {quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {touchHome}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {fieldHome}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {touchAway}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {fieldAway}>Away Field Goal</button>
        </div>
        <div className = "quarterButtons">
          <button className = "quarterButton__increase" onClick = {newQuarter}>New Quarter</button>
        </div>

      </section>
    </div>
  );
}

export default App;
