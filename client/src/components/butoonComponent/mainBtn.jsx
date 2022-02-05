import React from 'react';
import { Button } from '@material-ui/core';

const mainBtn = (props) => {
  return (
    <Button
      style={{
        padding: '25px',
        border: '2px solid',
        borderRadius: '10px',
        color: '#AC92A6',
        fontWeight: 'bold',
      }}
      onClick={props.onClick}
      variant="outlined"
      startIcon={props.startIcon}
    >
      {props.name}
    </Button>
  );
};

export default mainBtn;
