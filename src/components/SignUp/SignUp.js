import React, { useState } from 'react';
import './SignUp.css'

function SignUp() {
  const [formData, setFormData] = useState({
    nickname: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    console.log('Formulário submetido:', formData);
  };

  return (
    <div className='bg'>
      <div className='tela'>
      <p className='labeltext'>Criar Conta</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label className='label-from' htmlFor="nickname">Nickname:</label>
          <input
            className='input-form'
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label-from' htmlFor="fullName">Nome Completo:</label>
          <input
            className='input-form'
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label-from' htmlFor="email">Email:</label>
          <input
            className='input-form'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label-from' htmlFor="password">Senha:</label>
          <input
            className='input-form'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='label-from' htmlFor="confirmPassword">Confirmação de Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className='input-form'
          />
        </div>
        <div className='container-btn'>
          <button className='buttonCriarConta' type="submit">Criar Conta</button>
        </div>

      </form>
    </div>
    </div>
  );
}

export default SignUp;
