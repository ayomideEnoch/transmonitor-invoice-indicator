import React from "react";
import "./table.scss";

const Table = ({ tableData }) => {
  const colorStatusMap = {
    pending: "yellow",
    reconcilled: "green",
    unreconcilled: "grey"
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Price</th>
            <th>Transaction</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(
            ({ product, amount, transaction_id, status, time, id }) => (
              <tr key={id}>
                <td className="dark">
                  <div className="inline-flex">
                    <span className="initails">VW</span>
                    <p className="m-0">{product}</p>
                  </div>
                </td>
                <td>{amount}</td>
                <td>{transaction_id}</td>
                <td>
                  <div className="inline-flex flex-v-center">
                    <p>{time}</p>
                    <div className="status">
                      <span className={`bg-${colorStatusMap[status]} bullet`} />
                      <span className={`text-${colorStatusMap[status]}`}>
                        {status}
                      </span>
                    </div>
                    <img src="/caret.svg" alt="caret" className="caret" />
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <div className="table-bottom-info">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="table-buttons">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
