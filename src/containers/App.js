import React, { useEffect } from "react";
import { connect } from "react-redux";

import CardList from "./CardList";
import Searchbox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import {
  requestRobots,
  setSearchField,
  setCount,
  selectCard,
} from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    error: state.requestRobotsReducer.error,
    count: state.setCountReducer.count,
    selectedCard: state.selectCardReducer.selectedCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
    onClickCount: () => dispatch(setCount()),
    reset: () => dispatch(setCount(0)),
    onSelect: () => dispatch(selectCard()),
  };
};

function App({ onRequestRobots, ...props }) {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = props.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  return props.isPending ? (
    <h1> Loading </h1>
  ) : (
    <div className="tc mw-100">
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
            <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
