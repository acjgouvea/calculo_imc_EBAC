import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [porcentagemGordura, setPorcentagemGordura] = useState('');
  const [porcentagemMusculo, setPorcentagemMusculo] = useState('');
  const [imc, setIMC] = useState(null);

  const handleCalcIMC = () => {
    const alturaMetros = altura / 100; // Convertendo altura de cm para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
  };

  const getIMCClassification = () => {
    if (imc === null) return '';
    if (imc < 18.5) return 'Abaixo do Peso';
    if (imc >= 18.5 && imc < 25) return 'Peso Normal';
    if (imc >= 25 && imc < 30) return 'Sobrepeso';
    if (imc >= 30 && imc < 35) return 'Obesidade Grau I';
    if (imc >= 35 && imc < 40) return 'Obesidade Grau II';
    return 'Obesidade Grau III';
  };

  return (
    <Container>
      <h1>Calculadora de IMC</h1>
      <Form>
        <Form.Group controlId="formAltura">
          <Form.Label>Altura (cm)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite sua altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPeso">
          <Form.Label>Peso (kg)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite seu peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPorcentagemGordura">
          <Form.Label>Porcentagem de Gordura (%)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite sua porcentagem de gordura"
            value={porcentagemGordura}
            onChange={(e) => setPorcentagemGordura(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPorcentagemMusculo">
          <Form.Label>Porcentagem de Músculo (%)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite sua porcentagem de músculo"
            value={porcentagemMusculo}
            onChange={(e) => setPorcentagemMusculo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCalcIMC}>
          Calcular IMC
        </Button>
      </Form>
      {imc !== null && (
        <div className="mt-4">
          <h2>Seu IMC é: {imc}</h2>
          <h3>Sua classificação é: {getIMCClassification()}</h3>
        </div>
      )}
    </Container>
  );
};

export default App;
