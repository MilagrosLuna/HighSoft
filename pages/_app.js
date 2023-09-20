import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrige la importación
import GeneralContextProvider from '@/src/context/GeneralContextProvider';
export default function App({ Component, pageProps }) {
  return <GeneralContextProvider><Component {...pageProps} /></GeneralContextProvider>
}
