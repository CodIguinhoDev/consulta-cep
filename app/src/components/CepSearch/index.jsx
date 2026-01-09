import React, { useEffect, useState } from "react";
import "./style.css";

const Index = () => {
  const [info, setInfo] = useState("");

  const [cep, setCep] = useState("");
  console.log(cep);

  const api = async (value) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
      const data = await response.json();
      setInfo(data);
    } catch (erro) {
      console.log("Erro");
    }
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="cep-container">
      <div className="cep-card">
        <h1 className="title">Buscar CEP</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="CEP"
            className="cep-input"
            onChange={(information) => setCep(information.target.value)}
            onBlur={() => api(cep)}
          />

          <input
            type="text"
            placeholder="Rua"
            className="input-padrao-address-input"
            onChange={(information) => console.log(information.target.value)}
            value={info.logradouro}
          />
          <div className="city-state-group">
            <input
              type="text"
              placeholder="Cidade"
              className="city-input"
              onChange={(information) => console.log(information.target.value)}
              value={info.localidade}
            />
            <input
              type="text"
              placeholder="Estado"
              className="state-input"
              onChange={(information) => console.log(information.target.value)}
              value={info.estado}
            />
          </div>
          <button className="search-button">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
