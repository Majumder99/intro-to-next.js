import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // Passing the component of pages to the layout as children
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
