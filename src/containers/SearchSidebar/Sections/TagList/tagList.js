import React from "react";
import "./tagList.styles.css";
import Tag from "../../../../components/Tag";
import AddTag from "../../../../components/AddTag";
import Select from "react-select";
//import { countries } from "countries-list";
import { AiFillCloseCircle } from "react-icons/ai";
import { editSearchSidebarData } from "../../../../redux/slices/appSlice";
import { useDispatch } from "react-redux";
const TagList = ({ tags, opened, heading, subHeading }) => {
  const dispatch = useDispatch();
  function onHandleChange(event) {
    dispatch(
      editSearchSidebarData({ value: event.value, subHeading, heading })
    );
  }

  function onHandleClick() {
    dispatch(editSearchSidebarData({ subHeading, heading, add: true }));
  }

  function onCloseClick() {
    dispatch(editSearchSidebarData({ subHeading, heading, add: false }));
  }

  return (
    <>
      {tags && tags.map((tag) => <Tag key={tag.id_} title={tag.title}></Tag>)}
      {opened ? (
        <div className="tag-list-main-select-container">
          <div className="tag-list-select-container">
            <Select
              options={[
                { value: "Software Engineer", label: "software Engineer" },
                { value: "Staff Engineer", label: "Staff Engineer" },
                { value: "Full stack Engineer", label: "Full stack Engineer" },
                { value: "Data Engineer", label: "Data Engineer" },
                { value: "Ai Engineer", label: "Ai Engineer" },
              ]}
              onChange={onHandleChange}
            />
          </div>
          <div className="tag-list-add-filter-close">
            <AiFillCloseCircle onClick={onCloseClick} />
          </div>
        </div>
      ) : (
        <AddTag onClick={onHandleClick} />
      )}
    </>
  );
};

export default TagList;
