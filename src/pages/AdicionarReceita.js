import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addReceita } from '../services/api';
import { Link } from 'react-router-dom';
import '../assets/css/estilo.css'

const AdicionarReceita = () => {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaReceita = {
      id: Date.now(), // Gera um ID único para a nova receita
      titulo,
      ingredientes: ingredientes.split('\n'), // Divide os ingredientes por linha
      modoPreparo,
    };

    addReceita(novaReceita);
    navigate('/'); // Redireciona para a página inicial após adicionar a receita
  };

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
        <div className='corpo-adicionar-receita'>
          <div>
            <h1>Adicionar Nova Receita</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='adicionar-receita-titulo'>
              <label><strong>Título:</strong></label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>
            <div className='adicionar-receita-ingredientes-preparo'>
                <div>
                  <div className='adicionar-receita-ingredientes'>
                    <label><strong>Ingredientes (um por linha):</strong></label>
                  </div>
                  <div>
                    <textarea className='textarea-ingredientes'
                      value={ingredientes}
                      onChange={(e) => setIngredientes(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label><strong>Modo de Preparo:</strong></label>
                  </div>
                  <div >
                    <textarea className='textarea-preparo'
                      value={modoPreparo}
                      onChange={(e) => setModoPreparo(e.target.value)}
                      required
                    />
                  </div>
                </div>
            </div>
            <div>
              <button className='btn-adicionar-receita' type="submit">Adicionar Receita</button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};

export default AdicionarReceita;
