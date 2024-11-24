import axios from 'axios';

const memehubApiHelper = async payload => {
  const {endpoint, method, token, body, headers} = payload;
  let response = null;

  //const url= `${process.env.REACT_APP_MEMEHUB_API_REMOTE_URL}/${endpoint}`;
  try {
    const api = axios.create({
      baseURL: process.env.REACT_APP_MEMEHUB_API_REMOTE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': headers?.contentType ?? 'application/json',
        ...headers,
      },
    });

    switch (method) {
      case 'POST':
        response = await api.post(endpoint, body);
        break;
      case 'GET':
        response = await api.get(endpoint);
        break;
      case 'PUT':
        response = await api.put(endpoint, body);
        break;
      default:
        console.log('no such method exist');
        break;
    }

    if (response) {
      return {
        status: response.status,
        message: response.data?.message,
        data: response?.data,
      };
    }

    return {
      status: null,
      message: 'no response',
      data: null,
    };
  } catch (e) {
    return {
      status: e.response.data.status,
      message: e.response.data.message,
      user_id: e.response.data.user_id || null,
      data: e.response.data || null,
    };
  }
};

export default memehubApiHelper;
