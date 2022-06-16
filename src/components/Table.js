import React from 'react';

function Table() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Способ оплаты</th>
          <th scope="col">Назначение платежа</th>
          <th scope="col">Содержание</th>
          <th scope="col">Cумма, руб.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">12.12.2021</th>
          <td>Банк</td>
          <td>На огород</td>
          <td>Сбор</td>
          <td>1200.45</td>
        </tr>
        <tr>
          <th scope="row">12.12.2021</th>
          <td>Банк</td>
          <td>На огород</td>
          <td>Сбор</td>
          <td>1200.45</td>
        </tr>
        <tr>
        <th scope="row">12.12.2021</th>
          <td>Банк</td>
          <td>На огород</td>
          <td>Сбор</td>
          <td>1200.45</td>
        </tr>
    </tbody>
  </table>
  );
}

export default Table;