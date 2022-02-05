import axios from 'axios';
// let myURL = 'http://localhost:5000/';

// export default axios.create({
//   baseURL: myURL,
// });
export const getSizeData = (onSuccess) => {
  axios.get('http://localhost:5000/size').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
