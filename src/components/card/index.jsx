
import './index.scss';
import { useEffect } from  'react'

export default function Card() {
  let corPrimaria = '#A3E5BA'
  let corSegundaria = '#EFFBE2'
  
  let data = true

  
  return (
    <div className='comp-card'>
      <div className='cards'>
        <div className='card' style={{ backgroundColor: corSegundaria }}>
          <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
            <h2>Componentes</h2>
          </div>
          <div className='card-conteudo'>
            <h3>Assuntos</h3>
            <pre>
              - Objetos e Listas de Objetos<br />
              - Componentes
            </pre>
    {data && <p className='tag'>26/agosto</p>}
        
          </div>
        
        </div>
      </div>
    </div>
  );


}