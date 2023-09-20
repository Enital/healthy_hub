import axios from 'axios';
axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';

async function getUser(token) {
  try {
    const res = await axios.get('/auth/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default getUser;
