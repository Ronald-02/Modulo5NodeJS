import { bdTarefas } from "../bd.js"

class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/Tarefa', tarefaController.listar)
        app.delete('/Tarefa',tarefaController.deletar)
        app.put('/Tarefa', tarefaController.atualizarTarefa)
        app.post('/Tarefa', tarefaController.inserir)
        //tarefa
    }

    static listar(req, res){
        const tarefa = bdTarefas
        
        res.send(tarefa)
    }
    static buscarPorTarefa(req, res){
        const tarefa = bdTarefas.find(tarefa => tarefa.email === req.params.email)

        if(!tarefa){
            req.status(404).send ('Tarefa não encontrado')
        }
        res.send(tarefa) 
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        // Console log do corpo da requisição
        console.log(req.body)
    }
    static deletar(req, res){

        const tarefa = bdTarefas.find(tarefa => tarefa.email === req.params.email)
    
        if (!tarefa) {
    
            res.status(404).send('Tarefa não encontrado') 
        }
        const index = bdTarefas.indexOf (tarefa)
        bdTarefas.splice(index, 1)
        res.send(tarefa)
        }
    
        static atualizarTarefa (req, res){
            const tarefa = bdTarefas.find(tarefa => tarefa.nome === req.params.nome)
            
            if(tarefa){
                res.status(404).send('Tarefa não encontrado')
            }
            tarefa.nome = (req.body.nome || usuario.nome)
            tarefa.email = (req.body.email || usuario.email)
            tarefa.senha = (req.body.senha || usuario.senha)
    
            req.send({mensagem: 'Tarefa alterado com sucesso'})
        }
}

export default tarefaController