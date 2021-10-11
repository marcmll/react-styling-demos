import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  whitespace: nowrap;
`;

export const TableHead = styled.thead`
  width: 100%;
  display: table;
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: table;
`;

export const HeadRow = styled.tr`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const BodyRow = styled(HeadRow)`
  border-top: 1px solid #f1f1f1;

  &:first-child {
    border-color: #ccc;
  }
`;

export const HeadCell = styled.th`
  padding: 0 16px;
  height: 100%;
  color: #666;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  text-align: left;
  flex-grow: 1;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #edf0ff;
  }
`;

export const BodyCell = styled.td`
  padding: 0 16px;
  height: 100%;
  color: #333;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  text-align: left;
  flex-grow: 1;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #edf0ff;
  }
`;
