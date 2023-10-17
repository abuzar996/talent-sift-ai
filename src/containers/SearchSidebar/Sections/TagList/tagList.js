import React from "react";
import "./tagList.styles.css";
import Tag from "../../../../components/Tag";
const TagList = ({ tags }) => {
  return (
    <>
      {tags && tags.map((tag) => <Tag key={tag.id_} title={tag.title}></Tag>)}
    </>
  );
};

export default TagList;
