import React from "react";

function TableCases() {
  const { innerWidth: width } = window;

  let fontSize = "font-medium text-sm";
  let classRow = "border px-1";
  if (width > 500) {
    fontSize = "font-medium";
    classRow = "border px-4";
  }

  return (
    <div>
      <p className="px-4 pt-1 font-bold text-center">
        Number of cases per cluster
      </p>
      <div className="flex mx-auto justify-center py-1">
        <table className="table-auto text-center">
          <tbody>
            <tr className={fontSize}>
              <td className={classRow} style={{ color: "#2ca02c" }}>
                1 - 5
              </td>
              <td className={classRow} style={{ color: "#1f77b4" }}>
                6 - 10
              </td>
              <td className={classRow} style={{ color: "#fcc105" }}>
                11 - 25
              </td>
              <td className={classRow} style={{ color: "#ff7f0e" }}>
                25 - 50
              </td>
              <td className={classRow} style={{ color: "#d62728" }}>
                51 - 100
              </td>
              <td className={classRow} style={{ color: "#9467bd" }}>
                101 - 200
              </td>
              <td className={classRow} style={{ color: "#800000" }}>
                > 200
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCases;
