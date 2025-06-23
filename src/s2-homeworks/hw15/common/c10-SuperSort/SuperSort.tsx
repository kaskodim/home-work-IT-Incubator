import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


// добавить в проект иконки и импортировать
const downIcon = <ArrowDropDownIcon/>;
const upIcon = <ArrowDropUpIcon/>;
const noneIcon = "[--]";

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  // return up // исправить
  if (sort === down) {
    return up;
  } else if (sort === up) {
    return "";
  } else {
    return down;
  }
};

const SuperSort: React.FC<SuperSortPropsType> = ({
                                                   sort,
                                                   value,
                                                   onChange,
                                                   id = "hw15",
                                                 }) => {
  const up = "0" + value;  // сортировка по возрастанию
  const down = "1" + value; // сортировка по убыванию

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down
      ? downIcon
      : sort === up
          ? upIcon
          : noneIcon;

  return (
      <span
          id={id + "-sort-" + value}
          onClick={onChangeCallback}
          style={{cursor: 'pointer'}} // добавляем pointer для лучшего UX
      >
      {icon}
    </span>
  );
};

export default SuperSort;
