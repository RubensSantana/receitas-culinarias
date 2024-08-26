import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReceitas, removeReceita } from '../services/api';
import '../assets/css/estilo.css'

const Home = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    getReceitas().then((data) => {
      setReceitas(data);
    }).catch((error) => {
      console.error("Erro ao buscar receitas:", error);
    });
  }, []);

  const handleDelete = (id) => {
    removeReceita(id).then(() => {
      setReceitas((prevReceitas) => prevReceitas.filter((receita) => receita.id !== id));
    });
  };

  return (
    <div>
      <header>
        <nav>
          <div>
            <h2><Link to='/' className='adicionar_receita'>Receitas</Link></h2>
          </div>
          <div>
            <h3><Link to="/adicionar-receita" className='adicionar_receita'>Adicionar Nova Receita</Link></h3>
          </div>
            </nav>
      </header>
      <body>
        <div>
          <div className='container'>
            {receitas.map((receita) => (
              <div key={receita.id}>
                <h3><Link to={`/receita/${receita.id}`} className='titulo_receita'>{receita.titulo}</Link></h3>
                <div>
                  <button onClick={() => handleDelete(receita.id)} className='btn'><strong>Excluir</strong></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
