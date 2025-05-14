import axios from 'axios';

const apiCall = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiCall;
