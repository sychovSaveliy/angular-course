var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function requestList(req) {

    console.log(req.body);

    var servicePromise = filereader(fs, './mock/data/list/' + req.method + '.json');

    return servicePromise;
}

module.exports = { requestList };