import React, { useEffect, useState, useRef } from "react";
import LazyImage from "./LazyImage";

const Galerry = () => {
  const [allData, setAllData] = useState([]);

  const getAllDatas = async () => {
    try {
      const response = await fetch(
        `https://api.slingacademy.com/v1/sample-data/photos`
      );
      const data = await response.json();
      return setAllData(data?.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDatas();
  }, []);

  return (
    <div>
      <h1>Galerry</h1>
      <hr />

      {allData &&
        allData.map((images) => {
          return (
            <>
              {/* <img
                ref={ref}
                src={images.url}
                alt="imageOfGal"
                height="400px"
                width="500px"
              /> */}
              <LazyImage
                id={images.id}
                key={images.id}
                src={images.url}
                height="400px"
                width="500px"
              />
            </>
          );
        })}
    </div>
  );
};

export default Galerry;
