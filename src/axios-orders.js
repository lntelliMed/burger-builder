import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-react-burger-81155.firebaseio.com/'
});

export default instance;
