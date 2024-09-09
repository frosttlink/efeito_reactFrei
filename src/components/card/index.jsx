
import './index.scss';
import { useEffect } from 'react'

export default function Card(Props) {
  let corPrimaria = '#A3E5BA'
  let corSegundaria = '#EFFBE2'

  let data = true


  switch (Props.status) {
    case 'Completo':
      corPrimaria = '#A3E5BA'
      corSegundaria = '#EFFBE2'
      break;
    case 'Em andamento':
      corPrimaria = '#DCA3E5'
      corSegundaria = '#EDE2FB'
      break;
    case 'Criado':
      corPrimaria = '#C3C3C3'
      corSegundaria = '#F2F2F2'
      break;
    case 'Evento':
      corPrimaria = '#F6E448'
      corSegundaria = '#FAF4C1'
      break;
    default:
      corPrimaria = '#EDF2F4'
      corSegundaria = '#313131'
      break;
  }

  return (
    <div className='comp-card'>
      <div className='cards'>
        <div className='card' style={{ backgroundColor: corSegundaria }}>
          <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
            <h2>{Props.titulo}</h2>
          </div>
          <div className='card-conteudo'>
            <h3>Assuntos</h3>
            <pre>
              {Props.assunto}
            </pre>
            {data && <p className='tag'>{Props.data}</p>}
            {Props.trabalho && <p className='tag'>Entrega Trab.</p>}

          </div>

        </div>
      </div>
    </div>
  );


}