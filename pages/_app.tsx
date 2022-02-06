import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import Emitter, { EmitterEvents } from '../services/emitter';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const emitter = Emitter.get();
  emitter.on(EmitterEvents.LoginClicked, () => {
    router.push('/login');
  });
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
