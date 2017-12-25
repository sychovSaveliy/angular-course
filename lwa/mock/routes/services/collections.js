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
    console.log(path);
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
            res.json(response.data);
        });
}
function getCourse(req, res) {
    var path = './api/collections/courses/'+ req.params.id + '/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
        .then((response) => {
        console.log("GET", path);

        return response;
        }, onError)
        .then((response) => {
                res.json(response.data);
        });
}

function queryParamsHandler(response) {
    return new Promise(function(resolve, reject) {

        getCollectionsMetadata()
            .then((resp) => {
                response.inject = response.inject || {};
                response.inject.metadata = resp;


                return response;
            })

                resolve(response);
            })
    }

function onError(error) {
    console.error(error);
}


module.exports = { getCourses, getCourse }