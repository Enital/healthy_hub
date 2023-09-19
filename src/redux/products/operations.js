import axios from 'axios';
axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';

async function getRecomendations(token, count) {
  try {
    const res = await axios.get('user/recommended-food', {
      params: {
        count: count,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default getRecomendations;
