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

    atualiza(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
            update from livros set titulo = ? , set preco = ? where id = ?
            `,
            [
                livro.titulo,
                livro.valor,
                livro.id
            ],
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

   remove(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
            delete from livros where id = ?
            `,
            [
                livro.id
            ],
            function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possível remover o livro!');
                }

                resolve();
            });
         });
    }

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get(`
            select from livros where id = ?
            `,
            [
                id
            ],
            function (erro, livro) {
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possível encontrar o livro!');
                }

                resolve(livro);
            });
         });
    }
}

module.exports = LivroDao;