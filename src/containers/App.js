import React, { Component } from "react";
import { connect } from "react-redux";

import CardList from "../components/Card_List";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "./ErrorBoundary";
import Header from '../components/Header'

import { setSearchField, requestRobots } from "../actions";
import "./App.css";

class App extends Component {

    componentDidMount = () => {
        this.props.onRequestRobots()
    };

    render() {
        const { robots, isPending, searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ? (
            <h1>Loading...</h1>
        ) : (
            <div className="tc">
                <Header />
                <SearchBox
                    searchChange={onSearchChange}
                    searchField={searchField}
                />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
