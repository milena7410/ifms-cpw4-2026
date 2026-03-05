import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import "./componentes.scss"
import Modal from "./components/Modal";

function App() {
  const navigate = useNavigate(); 
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [tarefas, setTarefas] = useState([
    "Estudar React",
    "Fazer exercícios",
    "Entregar atividade",
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState("");

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;
    setTarefas([...tarefas, novaTarefa]); //ccria nova lista + o que foi add
    setNovaTarefa("");
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));//mantém tudo que for diferente do índice clicado.
  }
  

  function visualizarTarefa(tarefa) {
    setTarefaSelecionada(tarefa);
    setModalAberto(true);
  }

  function truncar(texto, limite) {
    return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
  }

  return (
    <div className={`app ${temaEscuro ? "escuro" : "claro"}`}>
      <div className="container">
        <h1 className="titulo">Done</h1>

        {/* Toggle tema */}
        <div
          className={`toggle ${temaEscuro ? "ativo" : ""}`}
          onClick={() => setTemaEscuro(!temaEscuro)}
        >
          <div className="icone">{temaEscuro ? "🌙" : "☀️"}</div>
          <div className="bolinha"></div>
        </div>

        {/* Botão que leva para Componentes Legais */}
        <button className="botao" onClick={() => navigate("/componentes")}>
          Componentes Uteis
        </button>

        <h2>Lista de tarefas</h2>

        <div className="area-input">
          <input
            className="input-tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma tarefa"
          />
          <button className="botao botao-adicionar" onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        {tarefas.map((tarefa, index) => (
          <div className="card" key={index}>
            <span>{truncar(tarefa, 60)}</span>

            <div className="acoes">
              <button
                className="botao botao-visualizar"
                onClick={() => visualizarTarefa(tarefa)}
              >
                Visualizar
              </button>

              <button
                className="botao botao-remover"
                onClick={() => removerTarefa(index)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}

        <Modal
          aberto={modalAberto}
          tarefa={tarefaSelecionada}
          fechar={() => setModalAberto(false)}
        />
      </div>
    </div>
  );
}

export default App;