
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Header.css';

export const Header = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data) => {
    // Simular el almacenamiento en localStorage o simplemente mostrar el mensaje de éxito
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push({ email: data.email, createdAt: new Date() });
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

    // Mostrar el mensaje de éxito
    setShowSuccess(true);

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    // Limpiar el input después del envío
    reset();
  };

  return (
    <header className="header-container ">
      <h1>PING</h1>
      <h2>We are launching <strong>soon!</strong></h2>
      <p>Subscribe and get notified</p>

      <form className="access" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your email address"
          {...register('email', {
            required: 'Please provide an email address',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please provide a valid email address'
            }
          })}
          className={errors.email ? 'input-error' : ''}
        />
        <button type="submit">Notify Me</button>
      </form>
          <div className="error">

      {errors.email && <span className="error-message">{errors.email.message}</span>}

      {showSuccess && (
        <span className="success-message">Subscription successful! Thank you.</span>
      )}
          </div>
    </header>
  );
};



