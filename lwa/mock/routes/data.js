var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function testGetRequest(req, res) {
    var servicePromise = filereader(fs, './api/test/get.json');

    servicePromise
        .then((response) => {
            console.log("GET", './api/test/get.json');
            // response
            return response;
        }, (error) => {
            console.log("GET - ERROR", './api/test/get.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}

function testPostRequest(req, res) {
    var servicePromise = filereader(fs, './api/test/post.json');
    // console.log(typeof req.body);
    var fofo = req.body.fofo;

    servicePromise
        .then((response) => {
            console.log("POST", './api/test/post.json');
            response.fofo = fofo*10;
            
            return response;
        }, (error) => {
            console.log("POST - ERROR", './api/test/post.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}


function getMenu(req, res) {
    var path = './api/menu/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
        .then((response) => {
            console.log("GET", path);
            return response;
        }, (error) => {
                console.log("GET - ERROR", path, error);
            })
        .then((response) => {
            res.json(response);
        });
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
    return new Promise(function(resolve, reject){
        getCollectionsMetadata()
        .then((resp) => {
            response.inject = response.inject || {};
            response.inject.metadata = resp;

            resolve(response);
        })
    });
}

function onError(error) {
    console.error(error);
}





module.exports = { testGetRequest, testPostRequest, getMenu, getCourses };