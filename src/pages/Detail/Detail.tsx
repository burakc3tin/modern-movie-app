import React from 'react';
import './style.css';
import Card from '../../components/Card';
import CloseButton from '../../components/CloseButton';

const Detail: React.FC = () => {
    return (

        <div className='main'>
            <CloseButton/>
             <Card />
        </div>

    );
}

export default Detail;