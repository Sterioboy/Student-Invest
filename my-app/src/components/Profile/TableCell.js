import React from "react";
import { Button } from "react-bootstrap";
import { thunkChangeStatusAC } from "../../store/actions";

function TableCell({ element }) {
  return (
    <tr>
      <td>{element.id}</td>
      <td>{element.student}</td>
      <td>{element.investor}</td>
      <td>{element.status === false ? "Pending..." : "Connected!"}</td>
      <td><Button /* onClick={() => dispatch(thunkChangeStatusAC(data))} */>Connect</Button></td>
    </tr>
  );
}

export default TableCell;
