import React from "react";
import { useGetList } from "react-admin";
import Card from "./card";
function Info({ arg, title }) {
  const { total, isLoading, error } = useGetList(arg);

  if (isLoading) {
    return <Card title={title} value={null} />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return <Card title={title} value={total} />;
}

export default Info;
