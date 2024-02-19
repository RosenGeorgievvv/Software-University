function validator(req) {
    let method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/gm;
    let messageRegex = /^[^<>\\&'"]*$/;

    if (!(req.method && method.includes(req.method))) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (!(req.uri && (req.uri === '*' || uriRegex.test(req.uri)))) {
        throw Error('Invalid request header: Invalid URI')
    }
    if (!(req.version && versions.includes(req.version))) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (!(req.hasOwnProperty('message') && (req.message === '' || messageRegex.test(req.message)))) {
        throw Error('Invalid request header: Invalid Message')
    }
    return req
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});