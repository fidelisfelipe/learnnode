class LivroDao {

    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'Select * from livros',
                (erro, result) => {
                    if(erro) return reject('Não foi possível listar os livros!');

                    return resolve(result);
                })
            });        
    }
}

module.exports = LivroDao;