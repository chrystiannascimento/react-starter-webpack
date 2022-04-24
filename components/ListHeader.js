import React from 'react';

const ListHeader = () => {
  return (
    <div className="cabecalhoLista">
      <div className="row">
        <div className="col">
          <label for="data_inicio" className="primary-color">
            Grupos
          </label>
          <input
            name="data_inicio"
            id="data_inicio"
            className="form-control dted-form-border hasDatepicker"
            type="text"
          />
        </div>
        <div className="col">
          <label for="data_inicio" className="primary-color">
            Orientador
          </label>
          <input
            name="data_inicio"
            id="data_inicio"
            className="form-control dted-form-border "
            type="text"
          />
        </div>
        <div className="col">
          <label for="data_inicio" className="primary-color">
            Aluno
          </label>
          <input
            name="data_inicio"
            id="data_inicio"
            className="form-control dted-form-border "
            type="text"
          />
        </div>
        <div className="col">
          <label for="status" className="primary-color">
            Status
          </label>
          <select name="status" id="" className="form-control">
            <option value="Todos">Todos</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Reprovado">Reprovado</option>
          </select>
        </div>
      </div>
      <button>filtro</button>
    </div>
  );
};

export default ListHeader;
