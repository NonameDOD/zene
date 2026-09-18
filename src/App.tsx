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
        <div className="zenek">
           <Zenek lista={ZENELISTA}/>
        </div>
        {/* ide kerül a zene */}
        
      </article>
      <footer>
        <p>Fóti Dávid Bálint</p>
      </footer>
    </>
  )
}

export default App
