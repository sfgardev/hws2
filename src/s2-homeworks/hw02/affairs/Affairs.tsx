import React, { MouseEvent } from "react";
import Affair from "./affair/Affair";
import { AffairType, FilterType } from "../HW2";
import s from "./Affairs.module.css";

// data={filteredAffairs}
// setFilter={setFilter}
// deleteAffairCallback={deleteAffairCallback}
// filter={filter}

type AffairsPropsType = {
  data: AffairType[]; // need to fix any
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
  filter: FilterType;
};

function Affairs(props: AffairsPropsType) {
  // const setAll = () => {
  //   props.setFilter("all");
  // };
  // const setHigh = () => {
  //   props.setFilter("high");
  // };
  // const setMiddle = () => {
  //   props.setFilter("middle");
  // };
  // const setLow = () => {
  //   props.setFilter("low");
  // };

  const setFilter = (event: MouseEvent<HTMLButtonElement>) => {
    props.setFilter(event.currentTarget.value as FilterType);
  };

  // const cnAll =
  //   s.button + " " + s.all + (props.filter === "all" ? " " + s.active : "");
  // const cnHigh =
  //   s.button + " " + s.high + (props.filter === "high" ? " " + s.active : "");
  // const cnMiddle =
  //   s.button +
  //   " " +
  //   s.middle +
  //   (props.filter === "middle" ? " " + s.active : "");
  // const cnLow =
  //   s.button + " " + s.low + (props.filter === "low" ? " " + s.active : "");

  const setClasses = (filter: FilterType) => {
    return `${s.button} ${s[filter]} ${
      props.filter === filter ? s.active : ""
    }`;
  };

  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  return (
    <div>
      <div className={s.buttonContainer}>
        <button
          id={"hw2-button-all"}
          value="all"
          onClick={setFilter}
          className={setClasses("all")}
        >
          All
        </button>
        <button
          id={"hw2-button-high"}
          value="high"
          onClick={setFilter}
          className={setClasses("high")}
        >
          High
        </button>
        <button
          id={"hw2-button-middle"}
          value="middle"
          onClick={setFilter}
          className={setClasses("middle")}
        >
          Middle
        </button>
        <button
          id={"hw2-button-low"}
          value="low"
          onClick={setFilter}
          className={setClasses("low")}
        >
          Low
        </button>
      </div>
      <div className={s.affairs}>{mappedAffairs}</div>
    </div>
  );
}

export default Affairs;
