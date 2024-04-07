import { FC } from 'react';
import { COLUMN_ONE, COLUMN_SECOND, COLUMN_THIRD } from '../constants/constant';
import '../pages/Home/style.css';
 
const Table: FC = () => {
 
  return (
    <table className="table table-warning text-center">
      <thead>
        <tr>
          <th scope="col">{COLUMN_ONE}</th>
          <th scope="col">{COLUMN_SECOND}</th>
          <th scope="col">{COLUMN_THIRD}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;