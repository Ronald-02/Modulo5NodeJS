import Usuario from './models/usuario.js'
import Tarefa from './models/tarefa.js'

const bdUsuarios = []
const bdTarefas = []

const usuario = new Usuario ('Alan', 'alan22@gmail.com', 'alan520')
bdUsuarios.push(usuario)

const usuario2 = new Usuario ('Breno', 'breno120@gmail.com', 'breno069')
bdUsuarios.push(usuario2)

const tarefa = new Tarefa ('Modelar BD', 'Modelar BD Projetada A', 'A Fazer', new Tarefa)
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa ('Criar BD', 'Criar BD Projeto B','A fazer', new Date)
bdTarefas.push(tarefa2)

export {bdUsuarios, bdTarefas}