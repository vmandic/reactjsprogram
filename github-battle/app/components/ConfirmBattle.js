var React = require('react');

function puke(object) {
    return <pre>{JSON.stringify(ojb, null,' ')}</pre>
}

function ConfirmBattle(props) {
    return props.isLoading === true
        ? <p> LOADING! </p>
        : <p> CONFIRM BATTLE!: {puke(props)} </p>
}

module.exports = ConfirmBattle;