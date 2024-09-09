import './App.scss';
import Cabecalho from '../components/cabecalho/index'
import Card from '../components/card';

export default function App() {

  let corPrimaria = ''
  let corSegundaria = ''
  let card = [
    {
      "titulo": "Componentes",
      "assunto": "- Objetos e Listas de Objetos",
      "data": "26/Agosto",
      "trabalho": false,
      "status": "Completo"
    },
    {
      "titulo": "rato",
      "assunto": "tchufo",
      "data": "2/agosto",
      "trabalho": true,
      "status": "Em andamento"
    },
  ]

  return (
    <div className="App">
      <Cabecalho />
      {card.map(item => (
        <Card
          titulo={item.titulo}
          assunto={item.assunto}
          data={item.data}
          trabalho={item.trabalho}
          status={item.status}
        />
      ))}
    </div>
  );
}


