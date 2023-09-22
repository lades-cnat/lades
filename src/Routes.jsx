import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Integrantes from './pages/Integrantes/Integrantes'
import EditarIntegrante from './pages/Integrantes/Editar'
import Pesquisas from './pages/LinhasPesquisa/Pesquisas'
import EditarPesquisa from './pages/LinhasPesquisa/EditarPesquisa'
import Projetos from './pages/Projetos/Projetos'
import EditarProjeto from './pages/Projetos/EditarProjeto'

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm/login" element={<Login />} />
          <Route path="/adm/integrantes" element={<Integrantes />} />
          <Route path="/adm/integrantes/editar/:id" element={<EditarIntegrante />} />
          <Route path="/adm/linhasPesquisa" element={<Pesquisas />}/>
          <Route path="/adm/linhasPesquisa/editar/:id" element={<EditarPesquisa />} />
          <Route path="/adm/projetos" element={<Projetos />}/>
          <Route path="/adm/projetos/editar/:id" element={<EditarProjeto />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas