import React, {useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import {FiTrash2, FiPower} from 'react-icons/fi'
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const [incidentes, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {headers:{
                Authorization: ongId,}
            });

            setIncidents(incidentes.filter(incident => incident.id !== id));
        }catch{
            alert('Erro ao deletar caso, tente novamente.')
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt = "Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/newIncident">
            Cadastrar um novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={48} color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidentes.map(incident => (
                <l1 key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
 
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>
 
                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
 
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} collor="#a8a8b3"/>
                    </button>
                </l1>
                ))}
            </ul>
        </div>
      );
}