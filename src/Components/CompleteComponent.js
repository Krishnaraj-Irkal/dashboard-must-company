import React, { useState } from "react";
import NameAndButtons from "./Name/NameAndButtons";
import DropDowns from "./DropDowns/DropDowns";
import Registration from "./Registration/Registration";
import TableDesign from "./Table/TableDesign";

export default function CompleteComponent() {
  const [pageSize, setPageSize] = useState(10);
  return (
    <>
      <NameAndButtons />
      <DropDowns setPageSize={setPageSize} />
      <Registration />
      <TableDesign pageSize={pageSize} />
    </>
  );
}
