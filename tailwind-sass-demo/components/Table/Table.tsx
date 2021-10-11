import { TableProps } from './types';

const Table = ({ columns, dataSource }: TableProps) => {
  return (
    <table className="table-primary">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={`head-${col.dataIndex}`}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((src, index) => (
          <tr key={`row-${index}`}>
            {columns.map((col) => (
              <td key={`cell-${col.dataIndex}-${index}`}>
                {src[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
