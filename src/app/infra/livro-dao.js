class LivroDao {

    constructor(db){
        this._db = db;
    }

    lista(callback){
        this._db.all(
            'Select * from livros',
            (erro, result) =>
                callback(erro, result)
        )
    }
}

module.exports = LivroDao;