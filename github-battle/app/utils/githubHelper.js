var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret" + sec;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username){
    return axios.get('https://api.github.com/users/' + username + "/repos?per_page=100");
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, cur){
        return prev + cur.stargazers_count;
    }, 0);
}

function getPlayersData(player) {
    return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars){
        return {
            followers: player.followers,
            totalStars: totalStars
        };
    });
}

function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(function(username){ 
            return getUserInfo(username); 
        })).then(function(info){
            console.log('player data', info);

            return info.map(function(user){
                return user.data;
            });
        }).catch(function(err){
            console.warn('Error in getPlayersInfo', err);
        });
    },
    battle: function(players) {
        var pOne = players[0],
            pTwo = players[1];

        var playerOneDataPromise = getPlayersData(pOne),
            playerTwoDataPromise = getPlayersData(pTwo);

        return axios
            .all([playerOneDataPromise, playerTwoDataPromise])
            .then(calculateScores)
            .catch(function(err){ console.warn("ERROR", err); });
    }
};

module.exports = helpers;