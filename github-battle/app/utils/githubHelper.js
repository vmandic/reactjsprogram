var axios = require('axios');

var id = "";
var sec = "";
var param = "?client_id=" + id + "&client_secret" + sec;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username);
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
    }
};

module.exports = helpers;