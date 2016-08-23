var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var Link = require("react-router").Link;

function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> LOADING! </p>
        : <div
            className="jumbotron col-sm-12 text-center"
            style={styles.transparentBg}>
            <h1>Confirm players</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-6">
                    <p className="lead">Player 1</p>
                    {puke(props.playersInfo[0])}
                </div>
                <div className="col-sm-6">
                    <p className="lead">Player 2</p>
                    {puke(props.playersInfo[1])}
                </div>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12">
                    <button 
                        type="button" 
                        className="btn btn-success btn-lg" 
                        onClick={props.onInitiateBattle}>
                     Initiate Battle!
                    </button>
                </div>
                <div className="col-sm-12">
                    <Link to="/playerOne">
                        <button className="btn btn-lg btn-danger">Reselect Players</button>
                    </Link>
                </div>
            </div>
        </div>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;