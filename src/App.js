import React, { useState, useEffect } from 'react';
import './style/App.css';
import Cadastro from './components/Cadastro';
import BackgroundColor from './components/BackgroundColor';

function App() {
    const [nome, setNome] = useState([]);
    const nomeLocalStorage = localStorage.getItem('nome');

    useEffect(() => {
        const nome = prompt("Qual é o seu nome?");
        localStorage.setItem('nome', nome);
    }, [])


    useEffect(() => {
        if (nomeLocalStorage) {
            setNome(nomeLocalStorage)
        }

    }, []);
    return (
        <div className='App'>
            <h1>{nomeLocalStorage}, sua lista de tarefas</h1>
            <Cadastro />
            <BackgroundColor/>
        </div>
    )
}

export default App