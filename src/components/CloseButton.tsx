import React from 'react';
import '../pages/Home/style.css';
import { CLOSE_TEXT } from '../constants/constant';
import { useNavigate } from 'react-router-dom';

const CloseButton: React.FC = () => {
    const navigate = useNavigate();

    const handleQuit = () => {
        navigate('/');
    }

  return (
    <a href="" className='close-btn' onClick={handleQuit}>{ CLOSE_TEXT }</a>
  );
}

export default CloseButton;