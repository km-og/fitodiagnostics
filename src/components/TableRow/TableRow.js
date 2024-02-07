function TableRow({ cellOne, cellTwo }) {
  return (
    <tr className="tests__row">
      <td className="tests__cell">{cellOne}</td>
      <td className="tests__cell">{cellTwo}</td>
    </tr>
  );
}

export default TableRow;
