var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var Link = require("react-router").Link;
var UserDetails = require("../components/UserDetails.js");
var UserDetailsWrapper = require("../components/UserDetailsWrapper.js");
var MainContainer = require("../components/MainContainer");
var Loading = require("../components/Loading");

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <Loading />
        : <MainContainer>
            <h1>Confirm players</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Player 1">
                    <UserDetails user={props.playersInfo[0]}  />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player 2">
                    <UserDetails user={props.playersInfo[1]}  />
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={styles.space}>
                    <button
                        type="button"
                        className="btn btn-success btn-lg"
                        onClick={props.onInitiateBattle}>
                        Initiate Battle!
                    </button>
                </div>
                <div className="col-sm-12" style={styles.space}>
                    <Link to="/playerOne">
                        <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
                    </Link>
                </div>
            </div>
        </MainContainer>
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;