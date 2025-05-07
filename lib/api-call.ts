import axios from 'axios';

const apiCall = axios.create({
  baseURL: `${'https://cyber-demo-backend-latest.onrender.com'}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiCall;
