import { FC } from 'react';
import {TITLE_TEXT} from '../constants/constant';

const Title: FC = () => {
  return (
    <div>
      <h1 className='h1 text-white shadow-lg p-3 mt-4  rounded'>{TITLE_TEXT}</h1>
    </div>
  );
}

export default Title;