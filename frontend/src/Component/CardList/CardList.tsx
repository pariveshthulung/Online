import React from "react";
import Card from "../Card";
import "bootstrap/dist/css/bootstrap.css";

type Props = {};

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card CourseTitle="Java" Description="Lorem50" />
      <Card CourseTitle="C++" Description="Lorem50" />
      <Card CourseTitle="React" Description="Lorem50" />
    </div>
  );
};

export default CardList;
