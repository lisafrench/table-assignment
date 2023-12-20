import { useState } from "react";
import TableRow from "./TableRow";
import data from "../data/data.json";
import "../styles/Table.css";

function Table() {
  const [selected, setSelected] = useState([]);

  const updateSelected = (item) => {
    const tableItem = data.find((dataItem) => dataItem.name === item);

    if (selected.includes(tableItem)) {
      setSelected(selected.filter((selectedItem) => selectedItem != tableItem));
    } else {
      setSelected([...selected, tableItem]);
    }
  };

  const showAlert = () => {
    const messageDownload = selected.map((selectedItem) => {
      return `This action will download the path "${selectedItem.path}" onto the device ${selectedItem.device}`;
    });
    const messageSelect = "Please select some items to download";

    alert(selected.length === 0 ? messageSelect : messageDownload);
  };

  const selectedText =
    selected.length === 0 ? "None Selected" : `Selected: ${selected.length}`;

  return (
    <div>
      <div className="actions">
        <span>{selectedText}</span>
        <a className="text-link" onClick={showAlert}>
          Download Selected
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Device</td>
            <td>Path</td>
            <td>Status</td>
          </tr>
        </thead>

        <tbody>
          <TableRow updateSelected={updateSelected} selected={selected} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
