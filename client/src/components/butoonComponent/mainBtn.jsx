import React from 'react';
import { Button } from '@material-ui/core';

const MainBtn = (props) => {
  return (
    <button
      className="btns"
      // sx={{
      //   marginLeft: '10px',
      //   // width: '200px',
      //   // height: '200px',
      //   border: '4px solid black',
      //   borderRadius: '10px',
      //   fontWeight: 'bold',
      //   fontSize: '18px',
      //   textJustify: 'center',
      //   color: 'color',
      // }}
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
