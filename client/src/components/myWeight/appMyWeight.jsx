import React from 'react';
import { useState, useEffect } from 'react';
import { getMyWeightData } from '../../Api/Api';
import '../myWeight/myWeight.css';

const AppmyWeight = (props) => {
  const [myWeightData, setmyWeightData] = useState([]);
  useEffect(() => {
    getMyWeightData(myWeightData);
  }, []);
  return (
    <div className="hila">
      <button onClick={props.returnToMainView}>Back</button>
    </div>
  );
};

export default AppmyWeight;
