import type { NextPage } from 'next';
import Head from 'next/head';

import Table, { DataSource } from 'components/Table';

const columns = [
  {
    dataIndex: 'col1',
    title: 'Col 1',
  },
  {
    title: 'Col 2',
    dataIndex: 'col2',
  },
  {
    title: 'Col 3',
    dataIndex: 'col3',
  },
  {
    title: 'Col 4',
    dataIndex: 'col4',
  },
];

const data: DataSource = [];
for (let i = 0; i < 20; i++) {
  data.push({
    col1: 'Test',
    col2: 'Test',
    col3: 'Test',
    col4: 'Test',
  });
}

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Tailwind Sass Demo</title>
    </Head>

    <main>
      <Table columns={columns} dataSource={data} />
    </main>
  </div>
);

export default Home;
