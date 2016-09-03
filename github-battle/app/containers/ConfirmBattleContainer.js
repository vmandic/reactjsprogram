var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle.js');
var githubHelpers = require('../utils/githubHelper.js');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        };
    },
    componentDidMount: function () {
        var query = this.props.location.query;
        // fetch github info and update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players){
            this.setState({
                isLoading: true,
                playersInfo: [players[0], players[1]]
            });
        }.bind(this));
    },
    handleInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo} />
        );
    }
});

module.exports = ConfirmBattleContainer;