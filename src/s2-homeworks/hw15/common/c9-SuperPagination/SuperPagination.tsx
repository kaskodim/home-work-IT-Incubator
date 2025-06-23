import React, { ChangeEvent } from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage);

  const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: number) => {
    onChange(page, event);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        // sx={{
        //   // стили для Pagination // пишет студент
        //   "& .MuiPagination-ul": {
        //     justifyContent: "center",
        //   },
        //   "& .MuiPaginationItem-root": {
        //     color: "#000", // цвет текста
        //   },
        //   "& .Mui-selected": {
        //     background: "rgb(161,6,27)", // цвет фона для активной страницы
        //     color: "#fff", // цвет текста для активной страницы
        //     "&:hover": {
        //       backgroundColor: "#0056b3", // цвет фона при наведении на активную страницу
        //     },
        //   },
        //   "& .MuiPaginationItem-page:hover": {
        //     backgroundColor: "#e9ecef", // цвет фона при наведении на страницу
        //   },
        // }}
        color={"primary"}
        shape="rounded"
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChangeOption={onChangeSelect}
      />

      <span className={s.text2}>строк в таблице</span>
    </div>
  );
};

export default SuperPagination;
