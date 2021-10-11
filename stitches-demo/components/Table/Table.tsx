import { TableProps } from './types';
import {
  TableWrapper,
  TableHead,
  TableBody,
  HeadRow,
  BodyRow,
  HeadCell,
  BodyCell,
} from './styles';

const Table = ({ columns, dataSource }: TableProps) => {
  return (
    <TableWrapper>
      <TableHead>
        <HeadRow>
          {columns.map((col) => (
            <HeadCell key={`head-${col.dataIndex}`}>{col.title}</HeadCell>
          ))}
        </HeadRow>
      </TableHead>
      <TableBody>
        {dataSource.map((src, index) => (
          <BodyRow key={`row-${index}`}>
            {columns.map((col) => (
              <BodyCell key={`cell-${col.dataIndex}-${index}`}>
                {src[col.dataIndex]}
              </BodyCell>
            ))}
          </BodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
