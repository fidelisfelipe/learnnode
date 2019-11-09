module.exports = (app) => {

    app.get('/', function(req, resp){
        resp.marko(require('../views/livros/lista/lista.marko'));
    });

    app.get('/hello', function(req, resp){
        resp.marko(require('../views/livros/lista/lista.marko'));
    });

}