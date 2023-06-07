import { createRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import axiosClient from "../../api/axiosClient"

const BarChart = () => {

  const myRef = createRef();

  useEffect(() => {
    let refAccess = d3.select(myRef.current);
    refAccess.style("background-color", "red");

    axiosClient.get('expenses')
      .then((data) => {
        console.log(data);
      })
  }, [])

  return (
    <>
      <div ref={myRef}>asd</div>
    </>
  );
}

export default BarChart;
