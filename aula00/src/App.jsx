import Header from "./components/Header"
import Button from "./components/Button"
import "./styles.css"

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Bem-vindo ao DONE</h2>
        <p>Organize suas tarefas de forma simples.</p>

        <Button texto="Começar" />
      </main>
    </div>
  )
}

export default App