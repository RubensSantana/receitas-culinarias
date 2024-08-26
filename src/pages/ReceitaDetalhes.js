import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReceitaById } from '../services/api';
import '../assets/css/estilo.css'

const ReceitaDetalhes = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);


  useEffect(() => {
    getReceitaById(id).then((data) => {
      setReceita(data);
    }).catch((error) => {
      console.error("Erro ao buscar detalhes da receita:", error);
    });
  }, [id]);

  if (!receita) return <p>Carregando...</p>;

  return (
    <div>
      <header>
          <nav>
            <div>
              <h2><Link to='/' className='adicionar_receita'>Receitas</Link></h2>
            </div>
            <div>
              <h3><Link to="/" className='adicionar_receita'>Voltar</Link></h3>
            </div>
              </nav>
      </header>
      <body>
        <div className='detalhes-receita'>
          <h1 className='detalhes-titulo-receita'>{receita.titulo}</h1>
          <h3>Ingredientes</h3>
          <ul>
            {receita.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <h3>Modo de Preparo</h3>
          <p className='detalhes-modo-preparo'>{receita.modoPreparo}</p>
        </div>
      </body>
    </div>
  );
};

export default ReceitaDetalhes;
