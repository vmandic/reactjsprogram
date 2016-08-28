var React = require("react");
var PropTypes = React.PropTypes;
var Results = require("../components/Results.js");
var githubHelpers = require("../utils/githubHelper.js");

var ResultsContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            scores: []
        };
    },
    componentDidMount: function () {
        console.log(this.props.location.state.playersInfo);
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then(function (scores) {
                this.setState({
                    scores: scores,
                    isLoading: false
                });
            }.bind(this));
    },
    render: function () {
        return (
            <Results 
                playersInfo={this.props.location.state.playersInfo} 
                isLoading={this.state.isLoading} 
                scores={this.state.scores} />
        );
    }
});

module.exports = ResultsContainer;