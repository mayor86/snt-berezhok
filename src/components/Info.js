import React from 'react';

function Info() {
  return (
      <div className="mb-5">
        <label for="updated" className="form-label">Данные обновлены</label>
        <input type="text" id="updated" className="form-control fw-bold" defaultValue="12.06.2022" disabled></input>
        <label for="cashdescUpdated" className="form-label">Дата обновления кассы</label>
        <input type="text" className="form-control" id="cashdescUpdated" defaultValue="10.06.2022" disabled></input>
        <label for="bankUpdated" className="form-label">Дата обновления банка</label>
        <input type="text" className="form-control" id="bankUpdated" defaultValue="11.06.2022" disabled></input>
      </div>
  );
}

export default Info;