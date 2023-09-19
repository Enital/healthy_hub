import axios from 'axios';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDMxOTExZjE3ZmJhMDY4NzNiMjk1ZiIsImlhdCI6MTY5NDgwMTg5MywiZXhwIjoxNjk3MzkzODkzfQ.OJg9pFwAOeVcYExefy7zABOlOceUW8nwLBaTGnlUokI';

const token = localStorage.getItem('persist:auth');
console.log(token);

axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

async function getRecomendations(count) {
  try {
    const res = await axios.get('user/recommended-food', {
      params: {
        count: count,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default getRecomendations;
