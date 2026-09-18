import { ZENELISTA } from './adat'
import './App.css'
import Zenek from './components/Zenek'

function App() {

  return (
    <>
      <header>
        <h1>Hurrá react</h1>
      </header>
      <article>
        {/* ide kerül a zene */}
         <Zenek lista={ZENELISTA}/>
      </article>
      <footer>
        <p>Fóti Dávid Bálint</p>
      </footer>
    </>
  )
}

export default App
