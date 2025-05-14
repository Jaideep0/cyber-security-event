import axios from 'axios';

const apiCall = axios.create({
  baseURL: `${process.env.BACKEND_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiCall;
