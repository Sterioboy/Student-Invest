import React from "react";
import { Table } from "react-bootstrap";
import ModalProfile from "./Modal";

function ProfileConnect() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td></td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td></td>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td></td>
        </tr>
      </tbody>
      <ModalProfile />
    </Table>
  );
}

export default ProfileConnect;
