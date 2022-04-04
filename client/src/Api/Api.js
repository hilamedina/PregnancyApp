import axios from 'axios';
let myURL = 'http://localhost:5000/';
if (process.env.NODE_ENV === 'production') {
  myURL = '/';
}
export const getSizeData = (onSuccess) => {
  axios.get(myURL + 'size').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const getTodoData = (onSuccess) => {
  const body = { userId: '1' };
  axios.post(myURL + 'todo', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const addTodoData = (onSuccess, msg) => {
  const body = { userId: '1', task: msg };
  axios.post(myURL + 'todo/add', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};

export const setStatusTodo = (onSuccess, task, isCompleted) => {
  const body = { userId: '1', task: task, isCompleted: isCompleted };
  axios.post(myURL + 'todo/set', body).then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const removeItem = (onSuccess, task) => {
  const body = { task: task };
  axios.post(myURL + 'todo/delete', body).then((response) => {
    // console.log(response);
    onSuccess(response.data);
  });
};

export const getWeeklyData = (onSuccess) => {
  axios.get(myURL + 'weekly').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};
export const getMyWeightData = (onSuccess) => {
  axios.get(myURL + 'myWeight').then((response) => {
    onSuccess(response.data);
    console.log(response.data);
  });
};

export const addMyWeight = (onSuccess, weight, week) => {
  const body = { userId: '1', weight: weight, week: week };

  axios
    .post(myURL + 'addWeight', body)
    .then((response) => {
      console.log(response);
      onSuccess(response.data);
      console.log(response.data);
    })
    .catch((error) => console.log(error.response));
};

export const createUser = (onSuccess, email, password) => {
  const body = { userId: '1', email: email, password: password };

  axios
    .post(myURL + 'api/users', body)
    .then((response) => {
      console.log(response);
      onSuccess(response.data);
      console.log(response.data);
    })
    .catch((error) => console.log(error.response));
};
