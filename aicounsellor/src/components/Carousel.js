import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import { DataContext } from "../App";
import "./Carousel.css";

const Carousel = (props) => {
  const data = useContext(DataContext);
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };
  const items = data.map((record) => {
    return (
      <>
        <div className="card-container">
          <h4 className="title">{record.Name}</h4>
          <p className="rank">#{record.Id}</p>
          <div>
            <div className="location-container">
              <p>
                <span className="attribute">Location :</span>
                {record.Location}
              </p>
              <p>
                <span className="attribute">Rating :</span>
                {record.Rating}
              </p>
            </div>
            <div className="fees-container">
              <p>
                <span className="attribute">Fees : </span>
                {record.Fees}
              </p>
              <p>
                <span className="attribute">Avg Package : </span>
                {record.Package}
              </p>
            </div>
            <p className="review">
              <span className="attribute">Review : </span>
              {record.Review}
            </p>
          </div>
        </div>
      </>
    );
  });
  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={100}
      animationDuration={1500}
      disableDotsControls
      autoPlay
      items={items}
      responsive={responsive}
      disableButtonsControls
    />
  );
};

export default Carousel;
