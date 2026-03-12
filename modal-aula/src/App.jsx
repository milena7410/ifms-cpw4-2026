import { useState } from 'react'
import './style.scss'

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
     
        <button onClick={() => setModalAberto}(true)>
          count is {count}
        </button>
       
    </>
  )
}

export default App
