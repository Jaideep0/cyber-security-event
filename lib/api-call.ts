import axios from 'axios';

const apiCall = axios.create({
  baseURL: `${process.env.BACKEND_BASE_URL || 'http://localhost:8000'}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiCall;
