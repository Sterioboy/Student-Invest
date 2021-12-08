import React from "react";

function TableCell({ element }) {
  console.log(1);
  return (
    <tr>
      <td>{element.id}</td>
      <td>{element.student}</td>
      <td>{element.investor}</td>
      <td>{String(element.status)}</td>
    </tr>
  );
}

export default TableCell;
