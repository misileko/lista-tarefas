import React, { useState, useEffect } from 'react';
import '../style/Cadastro.css';

function Cadastro() {

    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz",
        "Estudar programação",
        "enviar tarefa"
    ]);
    const tarefasStorage = localStorage.getItem('@tarefa');

    useEffect(() => {
        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

    function handleRegistro(e) {
        e.preventDefault();

        setTarefas([...tarefas, input])
        setInput('');
    }

    return (
        <div className='container'>
            <div className='container cadastro'>
                <div className='teste'>
                <form onSubmit={handleRegistro} >
                    <label className='cadastro'>Nome da tarefa:</label> 
                    <input
                        placeholder='Digite uma tarefa'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    /> <br />

                    <button className='btn' type="submit">Registro</button>
                </form>
                </div>
                <br /><br />

                <ul>
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Cadastro;