import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import Searchbox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

function App(props) {
  const [robots, setRobots] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);


  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1> Loading </h1>
  ) : (
    <div className="tc">
      <h1 className="f1 ">RobotFriends</h1>
      <button onClick={() => setCount(count + 1)}>--Click me--</button>
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
