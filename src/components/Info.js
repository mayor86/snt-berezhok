import React from 'react';

function Info() {
  return (
      <div class="mb-3">
        <label for="updated" class="form-label">Данные обновлены</label>
        <input type="date" class="form-control text-danger" id="updated"></input>
        <label for="cashdescUpdated" class="form-label">Дата обновления кассы</label>
        <input type="date" class="form-control" id="cashdescUpdated"></input>
        <label for="bankUpdated" class="form-label">Дата обновления банка</label>
        <input type="date" class="form-control" id="bankUpdated"></input>
      </div>
  );
}

export default Info;