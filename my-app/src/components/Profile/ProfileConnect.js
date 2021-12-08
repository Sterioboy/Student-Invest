import React from "react";
import { Table } from "react-bootstrap";
import { connectionsAC } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import ModalProfile from "./Modal";
import TableCell from "./TableCell";

function ProfileConnect() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    (async () => {
      const res = await fetch("/connections");
      const data = await res.json();
      dispatch(connectionsAC(data));
    })();
  }, [dispatch]);

  const connectionsArr = useSelector((store) => store.connections);
  const { user } = useSelector((store) => store.user);

  return (
    <>
      <h3>Connections Status</h3>
      <Table className="mb-3" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Investor</th>
            <th>Status</th>
            <th>Connect</th>
          </tr>
        </thead>
        <tbody>
          {connectionsArr.map((element) => {
            if (user === element.student || user === element.investor) {
              return <TableCell element={element} key={element.id} />;
            }
          })}
        </tbody>
      </Table>
      <ModalProfile />
    </>
  );
}

export default ProfileConnect;
