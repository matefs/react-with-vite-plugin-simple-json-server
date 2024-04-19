import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// Docs - vite-plugin-simple-json-server
// https://www.npmjs.com/package/vite-plugin-simple-json-server/v/0.4.1

function App() {
  const [count, setCount] = useState(0);
  fetch('/api/products')
    .then((response) => response.json()) // Converte o corpo da resposta para JSON
    .then((data) => console.log(data)) // Loga os dados convertidos
    .catch((error) => console.error('Erro ao obter os dados:', error)); // Trata erros

  return (
    <>
      <div>asasdfasdf asdfasdfasdf</div>
    </>
  );
}

export default App;
