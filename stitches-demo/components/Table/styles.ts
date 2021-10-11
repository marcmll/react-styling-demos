import { styled } from '@stitches/react';

export const TableWrapper = styled('table', {
  width: '100%',
  maxWidth: '100%',
  overflowX: 'auto',
  whitespace: 'nowrap',
});

export const TableHead = styled('thead', {
  width: '100%',
  display: 'table',
});

export const TableBody = styled('tbody', {
  width: '100%',
  display: 'table',
});

export const HeadRow = styled('tr', {
  width: '100%',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const BodyRow = styled(HeadRow, {
  borderTop: '1px solid #f1f1f1',
  '&:first-child': {
    borderColor: '#ccc',
  },
});

export const HeadCell = styled('th', {
  padding: '0 16px',
  height: '100%',
  color: '#666',
  fontSize: '14px',
  lineHeight: '22px',
  fontWeight: '700',
  textAlign: 'left',
  flexGrow: '1',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: '#edf0ff',
  },
});

export const BodyCell = styled('td', {
  padding: '0 16px',
  height: '100%',
  color: '#666',
  fontSize: '14px',
  lineHeight: '22px',
  fontWeight: '500',
  flexGrow: '1',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: '#edf0ff',
  },
});
