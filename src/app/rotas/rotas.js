const db = require('../../config/database')

module.exports = (app) => {

    app.get('/', function(req, resp){
        
        resp.marko(require('../views/livros/lista/lista.marko'));
    });

    app.get('/livros', function(req, resp){
        db.all('select * from livros', function(erro, result){
            resp.marko(require('../views/livros/lista/lista.marko'),
            {
                livros: result
            });
        });
        
    });

}