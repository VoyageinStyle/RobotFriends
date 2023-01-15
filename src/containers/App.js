import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import Searchbox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import SelectedCard from "../components/CardSelect";
import "./App.css";

import {
  requestRobots,
  setSearchField,
  setCount,
  selectCard,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    count: state.setCount.count,
    selectedCard: state.selectCard.selectedCard
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
    onClickCount: () => dispatch(setCount()),
    reset: () => dispatch(setCount(0)),
    onSelect: () => dispatch(selectCard())
  };
};

function App(props) {
  useEffect(() => {
    props.onRequestRobots();
  }, []);



  // const filteredRobots = props.robots.filter((robot) => {
  //   if (!props.selectedCard) {
  //     return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  //   } else {
  //     return robot.name.toLowerCase().includes("lea");
  //   }
  // });  

  const filteredRobots = props.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  return props.isPending ? (
    <h1> Loading </h1>
  ) : (
    <div className="tc">
      <h1 className="f1 ">RobotFriends</h1>
      <button className="mh2" onClick={props.onClickCount}>
        Click me
      </button>
      <button className="mh2" onClick={props.reset}>
        Reset
      </button>
      <p>Click Count {props.count}</p>
      <Searchbox searchChange={props.onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <SelectedCard>
            <CardList robots={filteredRobots} /* selected={selectedCardChildren}*/ />
          </SelectedCard>
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
