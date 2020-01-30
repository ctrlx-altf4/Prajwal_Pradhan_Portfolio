import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import auth0 from '../service/auth0';
import App, {Component} from  'next/app';

function MyApp({ Component, pageProps,auth }) {
    return <Component {...pageProps} auth ={auth} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    const user = await process.browser ?
            await  auth0.clientAuth( ): 
            await auth0.serverAuth(appContext.ctx.req);
    const auth = {user, isAuthenticated:!!user};
    return { ...appProps,auth }
  }
  
  export default MyApp