import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrige la importación
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
