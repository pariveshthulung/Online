import React from "react";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
  CourseTitle: string;
  Description: string;
}

const Card: React.FC<Props> = ({
  CourseTitle,
  Description,
}: Props): JSX.Element => {
  return (
    <div className="w-25">
      {/* <img src="" alt="" /> */}
      <div className="card-body">
        <h5 className="card-title">{CourseTitle}</h5>
        <p className="card-text">{Description}</p>
      </div>
    </div>
  );
};

export default Card;
