import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { IntegrantesProvider } from './pagesAdmin/Integrantes/integrantesContext';
import { PesquisasProvider } from './pagesAdmin/Pesquisas/pesquisasContext';
import { ProjetosProvider } from './pagesAdmin/Projetos/projetosContext';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <IntegrantesProvider>
          <PesquisasProvider>
            <ProjetosProvider>  
             <Routes />
            </ProjetosProvider>
          </PesquisasProvider>
        </IntegrantesProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
