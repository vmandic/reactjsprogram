var React = require("react");
var PropTypes = React.PropTypes;
var styles = require("../styles");
var UserDetails = require("../components/UserDetails.js");
var UserDetailsWrapper = require("../components/UserDetailsWrapper.js");
var Link = require("react-router").Link;
var MainContainer = require("../components/MainContainer");

function StartOver(props) {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
                <button className="btn btn-danger">Start Over</button>
            </Link>
        </div>
    )
}

function Results(props) { 

    if (props.isLoading) {
        return (
            <p> LOADING </p>
        )
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        );
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} user={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} user={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    );
}

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

module.exports = Results;