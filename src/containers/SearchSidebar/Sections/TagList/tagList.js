import React from "react";
import "./tagList.styles.css";
import Tag from "../../../../components/Tag";
import AddTag from "../../../../components/AddTag";
const TagList = ({ tags }) => {
  return (
    <>
      {tags && tags.map((tag) => <Tag key={tag.id_} title={tag.title}></Tag>)}
      <AddTag />
    </>
  );
};

export default TagList;
