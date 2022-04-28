import { GlobalStyles } from '../app.styled';
import { ContextProvider } from '../Context/context';
import '../components/Spinner/Spinner.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ContextProvider>
  )

}

export default MyApp
