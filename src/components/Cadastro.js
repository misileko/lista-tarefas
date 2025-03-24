import React, { useState, useEffect } from 'react';
import '../style/Cadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cadastro() {

    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([]);
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
            <div className='cadastro'>
                <form 
                className='form-group'
                onSubmit={handleRegistro} >
                    <label 
                    className='section'
                    >Nome da tarefa:</label>
                    <input
                        type='text'
                        class="form-control"  
                        required
                        placeholder='Digite uma tarefa'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    /> 
                    <br />
                    <button className="btn btn-primary w-100 p-1" type="submit">Registro</button>
                </form>
            </div>
            <br />

            <ul className="list-group">
                {tarefas.map(tarefa => (
                    <li
                        className="list-group-item shadow-lg"
                        key={tarefa}>{tarefa}</li>
                ))}
            </ul><br />

        </div>
    );
}

export default Cadastro;