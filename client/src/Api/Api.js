import axios from 'axios';
// let myURL = 'http://localhost:5000/';

// export default axios.create({
//   baseURL: myURL,
// });
// onSuccess = state
export const getSizeData = (onSuccess) => {
  axios.get('http://localhost:5000/size').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const getTodoData = (onSuccess) => {
  const body = { userId: '1' };
  axios.post('http://localhost:5000/todo', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const addTodoData = (onSuccess, msg) => {
  const body = { userId: '1', task: msg };
  axios.post('http://localhost:5000/todo/add', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};

export const setStatusTodo = (onSuccess, task, isCompleted) => {
  const body = { userId: '1', task: task, isCompleted: isCompleted };
  axios.post('http://localhost:5000/todo/set', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const removeItem = (onSuccess, task) => {
  const body = { task: task };
  axios.post('http://localhost:5000/todo/delete', body).then((response) => {
    // console.log(response);
    onSuccess(response.data);
  });
};

export const getWeeklyData = (onSuccess) => {
  axios.get('http://localhost:5000/weekly').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const getMyWeightData = (onSuccess) => {
  axios.get('http://localhost:5000/myweight').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};

export const addMyWeight = (onSuccess, weight, week) => {
  const body = { userId: '1', weight: weight, week: week };
  axios.post('http://localhost:5000/todo/add', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
