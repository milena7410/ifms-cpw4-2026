import { useState } from "react"
import "./style.scss"

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Entregar atividade"
  ])
  const [novaTarefa, setNovaTarefa] = useState("")

  function alternarTema() {
    setTemaEscuro(!temaEscuro)
  }

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return
    setTarefas([...tarefas, novaTarefa])
    setNovaTarefa("")
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index))
  }

  return (
    <div className={`app ${temaEscuro ? "escuro" : "claro"}`}>
      <div className="container">

        <h1 className="titulo">Done</h1>

        <button className="botao-tema" onClick={alternarTema}>
          {temaEscuro ? "Modo claro" : "Modo escuro"}
        </button>

        <h2>Funcionalidades</h2>
        <ul>
          <li>Adicionar tarefas</li>
          <li>Remover tarefas</li>
          <li>Alternar tema</li>
        </ul>

        <h2>Lista de tarefas</h2>

        <div className="area-input">
          <input
            className="input-tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma tarefa"
          />

          <button className="botao-adicionar" onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        {tarefas.map((tarefa, index) => (
          <div className="card" key={index}>
            {tarefa}
            <button
              className="botao-remover"
              onClick={() => removerTarefa(index)}
            >
              Remover
            </button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App