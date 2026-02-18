import './App.css'
import NavBar from './componentes/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './componentes/inicio.jsx'
import Sobre from './componentes/Sobre.jsx'
import Projetos from './componentes/Projetos.jsx'

function App() {

  return (
  
    <div>
      <NavBar/>
      <Inicio/>
      <Sobre/>
      <Projetos/>
    </div>
  )
}
export default App
