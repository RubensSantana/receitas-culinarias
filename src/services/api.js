import receitas from '../data/receitas.json';

// Função para obter todas as receitas
export const getReceitas = () => {
  return Promise.resolve(receitas);
};

// Função para obter uma receita específica pelo ID
export const getReceitaById = (id) => {
  const receita = receitas.find((r) => r.id === parseInt(id));
  return Promise.resolve(receita);
};

// Função para adicionar uma nova receita
export const addReceita = (novaReceita) => {
  receitas.push(novaReceita);
  return Promise.resolve(novaReceita);
};

// Função para remover uma receita pelo ID
export const removeReceita = (id) => {
  const index = receitas.findIndex((receita) => receita.id === id);
  if (index !== -1) {
    receitas.splice(index, 1);
  }
  return Promise.resolve();
};