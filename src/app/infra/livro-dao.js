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
    
    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
            insert into livros(titulo, preco, descricao) values (?,?,?)
            `,
            [
                livro.titulo,
                livro.valor,
                livro.titulo
            ],
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possível adicionar o livro!');
                }

                resolve();
            });
        });
    }
}

module.exports = LivroDao;