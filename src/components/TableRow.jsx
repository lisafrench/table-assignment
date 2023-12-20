import { useState } from "react";
import data from "../data/data.json";
import { STATUS_AVAILABLE } from "../consts/consts";
import "../styles/TableRow.css";
import "../styles/util.css";

function TableRow(props) {
  return (
    <>
      {data.map((dataItem, i) => {
        const [isChecked, setChecked] = useState(false);

        const handleChange = (e) => {
          const value = e.target.value;
          props.updateSelected(value);
          setChecked(!isChecked);
        };

        const disabled = dataItem.status === STATUS_AVAILABLE ? false : true;

        const classIsChecked = isChecked ? "checked" : "";

        return (
          <tr
            key={`${i}-${dataItem.name}`}
            className={`${dataItem.status} ${classIsChecked}`}
          >
            <td>
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                id={`${i}`}
                name={dataItem.name}
                value={dataItem.name}
                disabled={disabled}
              ></input>
            </td>
            <td>{dataItem.name}</td>
            <td>{dataItem.device}</td>
            <td>{dataItem.path}</td>
            <td className="text-capitalize">{dataItem.status}</td>
          </tr>
        );
      })}
    </>
  );
}

export default TableRow;
