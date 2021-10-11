export type Column = {
  dataIndex: string;
  title: string;
};

export type DataSource = Array<{
  // eslint-disable-next-line no-unused-vars
  [key in string]?: any;
}>;

export type TableProps = {
  columns: Column[];
  dataSource: DataSource;
};
