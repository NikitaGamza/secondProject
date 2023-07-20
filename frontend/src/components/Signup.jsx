import { useState } from 'react';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function registerUser(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    const res = await fetch('http://localhost:5000/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <form action="" onSubmit={registerUser}>
        <p>Имя</p>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>Фамилия</p>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setLastName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="email"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Телефон</p>
        <input
          type="tel"
          name=""
          id=""
          onChange={(e) => setPhone(e.target.value)}
        />
        <p>Пароль</p>
        <input
          type="password"
          name=""
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Повторите пароль</p>
        <input
          type="password"
          name=""
          id=""
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </div>
  );
}
