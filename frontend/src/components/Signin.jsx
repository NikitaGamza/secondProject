import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function userLogin(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 'ok') {
      if (data.user) {
        localStorage.setItem('token', data.user);
        alert('Success');
        navigate('/page');
      } else {
        alert('Wrong');
      }
    }

    // console.log(data);
  }
  return (
    <div>
      <form action="" onSubmit={userLogin}>
        <p>Email</p>
        <input
          type="email"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Пароль</p>
        <input
          type="password"
          name=""
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Войти" />
      </form>
      <p>
        Нет своего аккаунта? <Link to="/signup">Зарегистрироваться</Link>
      </p>
    </div>
  );
}
