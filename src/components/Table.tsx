import React from 'react';

export default function Table() {
  return (
    <table className="table table-warning text-center">
      <thead>
        <tr>
          <th scope="col">IMDB ID</th>
          <th scope="col">Name</th>
          <th scope="col">Release Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1acas3d</th>
          <td>Titanic</td>
          <td>1986</td>
        </tr>
      </tbody>
    </table>
  );
}
