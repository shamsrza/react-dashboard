import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Employees = () => {
  const { currentMode } = useStateContext();

  const rowDataBound = (args) => {
    if (currentMode === 'Dark') {
      setTimeout(() => {
        args.row.style.background = '#33373E';
        args.row.style.title.color = '#ffffff';
      }, 0);
    } else {
      setTimeout(() => {
        args.row.style.background = '#ffffff';
        args.row.style.color = '#000057';
      }, 0);
    }
}
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        rowDataBound={rowDataBound}
        enableHover='false'
        className= "dark:bg-secondary-dark-bg"
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} background="black" />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Employees;