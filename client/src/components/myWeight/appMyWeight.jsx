import React from 'react';
import { useState, useEffect } from 'react';
import { getMyWeightData, addMyWeight } from '../../Api/Api';
import MyWeightForm from './myWeightForm';
import MyWeightItem from './myWeightItem';
import '../myWeight/myWeight.css';

const AppmyWeight = (props) => {
  const myWeight = (weight) => {
    addMyWeight(setmyWeightData, weight);
  };

  const [myWeightData, setmyWeightData] = useState([]);
  useEffect(() => {
    getMyWeightData(setmyWeightData);
  }, []);

  console.log(myWeightData);
  return (
    <>
      <div className="weight-list">
        {myWeightData.map((userWeight, index) => (
          <MyWeightItem key={index} index={index} userWeight={userWeight} />
        ))}
      </div>
      <div>
        <MyWeightForm myWeight={myWeight} />
      </div>
      <div>
        <button onClick={props.returnToMainView}>Back</button>
      </div>
    </>
  );
};

export default AppmyWeight;
