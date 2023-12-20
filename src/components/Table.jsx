function Table() {
  return (
    <div>
      <div className="actions">
        <span>Selected: </span>
        <span>Download Selected</span>
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

        <tbody></tbody>
      </table>
    </div>
  );
}

export default Table;
