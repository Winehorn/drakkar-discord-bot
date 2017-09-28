const gw2api = require('gw2api-client');


function authenticate(key) {
    let api = gw2api.default();
    api.authenticate(key);
    return api;
}

let getHomeServerID = function(key,callback) {
    authenticate(key).account().get().then(info => {
            if(info) {
                callback(info.world);
            }
    })
};

module.exports = {
    getHomeServerID: getHomeServerID
};