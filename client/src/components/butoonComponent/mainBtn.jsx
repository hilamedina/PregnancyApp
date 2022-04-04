import React from 'react';
import { Button } from '@material-ui/core';

const MainBtn = (props) => {
  return (
    <button
      className="btns"
      size="large"
      color="string"
      onClick={props.onClick}
      variant="outlined"
      startIcon={props.startIcon}
    >
      {props.name}
    </button>
  );
};

export default MainBtn;
