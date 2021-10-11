import '@fontsource/inter/variable.css';
import 'tailwindcss/tailwind.css';
import 'styles/Table.sass';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
