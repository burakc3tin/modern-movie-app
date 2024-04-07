import React from 'react';
import './style.css';
import Card from '../../components/Card';
import CloseButton from '../../components/CloseButton';
import { useParams } from 'react-router-dom';

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // URL'den film ID'sini al

    return (
        <div className='main'>
            <CloseButton/>
            <Card id={id} /> {/* Card bileşenine ID'yi props olarak geçir */}
        </div>
    );
}

export default Detail;
