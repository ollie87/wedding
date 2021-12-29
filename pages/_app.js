import firebase, { FirebaseContext } from '../firebase';
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => {
  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  )
}

export default appWithTranslation(App)
