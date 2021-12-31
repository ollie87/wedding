import firebase, { FirebaseContext } from '../firebase';
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

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

export default App
