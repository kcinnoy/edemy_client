// _app.js used to initialize pages. 
// *before users sees page. 
// *can add 3rd party files
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import '../public/css/styles.css';

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />;
}

export default MyApp;