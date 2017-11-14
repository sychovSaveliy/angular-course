var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function getCollectionsMetadata(req, res) {
    var path = './api/collections/metadata/get.json';
    var servicePromise = filereader(fs, path);

    return servicePromise
        .then((response) => {
            console.log("GET", path);
            return response;
        }, onError);
}

function getCourses(req, res) {
    var path = './api/collections/courses/get.json';
    var servicePromise = filereader(fs, path);
    var onAction = (response) => { return response };
    
    if (req.query.type && req.query.type === 'metadata') {
        onAction = queryParamsHandler;
    }

    servicePromise
        .then((response) => {
            console.log("GET", path);

            return response;
        }, onError)
        .then(onAction)
        .then((response) => {
            res.json(response);
        });
}

function queryParamsHandler(response) {
    return 
        getCollectionsMetadata()
        .then((resp) => {
            response.inject = response.inject || {};
            response.inject.metadata = resp;

            return response;
        })
}

function onError(error) {
    console.error(error);
}


module.exports = { getCourses }