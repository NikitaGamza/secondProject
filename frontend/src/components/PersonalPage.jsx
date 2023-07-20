import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function PersonalPage() {
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();
  console.log('local tiken ', jwtDecode(localStorage.getItem('token')));
  async function getUser() {
    const req = await fetch('http://localhost:5000/api/page', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
    const data = req.json();
    console.log('This is req ', data);
    if (data.status === 'ok') {
      setUserData(data.user);
    } else {
      alert('This is err', data.err);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log('This is user', user);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/signin');
      } else {
        getUser();
      }
    }
  }, []);
  return (
    <div>
      <h1>Your page {userData}</h1>
    </div>
  );
}
