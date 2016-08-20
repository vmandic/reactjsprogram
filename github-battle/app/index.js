var React = require("react");
var ReactDOM = require("react-dom");
var routes = require("./config/routes");
var Raven = require("raven-js");

var sentryKey = 'f06484eccb1a449ba4f72d098cd3d4b3';
var sentryApp = '93269';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: '4',
    version: '1.0'
};

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch,
    }
}).install();

ReactDOM.render(
    routes,
    document.getElementById("app")
); 