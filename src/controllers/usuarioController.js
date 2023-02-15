import { bdUsuarios } from "../bd.js"

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.get('/email/:email', usuarioController.buscarPorEmail)
        app.delete('/usuario/:email',usuarioController.deletar)
        app.put('/usuario/:email', usuarioController.atualizarUsuario)
        app.post('/usuario', usuarioController.inserir)
        // /usuario
    }

    static listar(req, res){
        const usuario = bdUsuarios
        res.send(usuario)

    }

    static buscarPorEmail(req, res){
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

        if(!usuario){
            req.status(404).send ('Usuário não encontrado')
        }
        res.send(usuario) 
    }
    
    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }

    static deletar(req, res){

    const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

    if (!usuario) {

        res.status(404).send('Usuário não encontrado') 
    }
    const index = bdUsuarios.indexOf (usuario)
    bdUsuarios.splice(index, 1)
    res.send(usuario)
    }

    static atualizarUsuario (req, res){
        const usuario = bdUsuarios.find(usuario => usuario.nome === req.params.nome)
        
        if(usuario){
            res.status(404).send('Usuario não encontrado')
        }
        usuario.nome = (req.body.nome || usuario.nome)
        usuario.email = (req.body.email || usuario.email)
        usuario.senha = (req.body.senha || usuario.senha)

        req.send({mensagem: 'Usuário alterado com sucesso'})
    }
}

export default usuarioController