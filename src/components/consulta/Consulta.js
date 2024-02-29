import React, { useState } from 'react';

function Consulta() {
  const [placa, setPlaca] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!placa) {
      setError('Por favor, insira uma placa.');
      return;
    }

    try {
      const token = await generateToken(placa);
      const randomIP = generateRandomIP();
      const { latitude, longitude } = generateRandomCoordinates();

      const request = `<?xml version="1.0" encoding="utf-8" standalone="yes" ?> 
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"> 
          <soap:Header> 
            <dispositivo>GT-S1312L</dispositivo> 
            <nomeSO>Android</nomeSO> 
            <versaoAplicativo>1.1.1</versaoAplicativo> 
            <versaoSO>5.1.1</versaoSO> 
            <aplicativo>aplicativo</aplicativo> 
            <ip>${randomIP}</ip> 
            <token>${token}</token> 
            <latitude>${latitude}</latitude> 
            <longitude>${longitude}</longitude> 
          </soap:Header> 
          <soap:Body> 
            <webs:getStatus xmlns:webs="http://soap.ws.placa.service.sinesp.serpro.gov.br/"> 
              <placa>${placa}</placa> 
            </webs:getStatus> 
          </soap:Body> 
        </soap:Envelope>`;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml',
          'Accept': 'text/plain, */*; q=0.01',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'x-wap-profile': 'http://wap.samsungmobile.com/uaprof/GT-S7562.xml',
        },
        body: request,
      };

      const response = await fetch('http://sinespcidadao.sinesp.gov.br/sinesp-cidadao/ConsultaPlacaNovo', requestOptions);
      const data = await response.text();

      setResult(data);
      setError('');
    } catch (error) {
      setError('Erro: ' + error.message);
    }
  };

  const generateToken = async (placa) => {
    // Aqui você pode implementar a lógica para gerar o token, por exemplo, uma chamada a uma API de autenticação
    // Supondo uma função fictícia chamada generateTokenAPI que retorna o token
    const token = await generateTokenAPI(placa);
    return token;
  };

  const generateTokenAPI = async (placa) => {
    // Implementação fictícia da geração do token
    return 'TOKEN_GERADO'; // Substitua por sua lógica real
  };

  const generateRandomIP = () => {
    // Gera um IP aleatório
    const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    return randomIP;
  };

  const generateRandomCoordinates = () => {
    // Gera latitude e longitude aleatórias dentro dos limites do Brasil
    const latitude = -33.8688 + Math.random() * (5.2719 - (-33.8688));
    const longitude = -73.7243 + Math.random() * (-34.7936 - (-73.7243));
    return { latitude, longitude };
  };

  return (
    <div>
      <h1>Consulta de Placa</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Insira a placa" />
        <button type="submit">Consultar</button>
      </form>
      {error && <p>{error}</p>}
      {result && <pre>{result}</pre>}
    </div>
  );
}

export default Consulta;
