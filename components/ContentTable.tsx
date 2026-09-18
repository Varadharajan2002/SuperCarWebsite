type TableData = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export default function ContentTable({ data }: { data: TableData }) {
  return (
    <div className="tariff-wrap">
      <h3 className="tariff-caption">{data.caption}</h3>
      <div className="tariff-scroll">
        <table className="tariff-table">
          <thead>
            <tr>
              {data.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={`${row[0]}-${i}`}>
                {row.map((cell, j) => (
                  <td key={`${i}-${j}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
