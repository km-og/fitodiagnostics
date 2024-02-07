import TableRow from "../TableRow/TableRow";
import { tableInfo } from "../utils/constants";
import "./Table.css";

function Table() {
  return (
    <section className="tests">
      <h3 className="tests__title">Тест-системы</h3>
      <table className="tests__table">
        <tbody>
          {tableInfo.map((item) => (
            <TableRow
              key={item.id}
              cellOne={item.cellOne}
              cellTwo={item.cellTwo}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
