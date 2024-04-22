import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return <div className={css.loaderWrapper}><ProgressBar
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
  /></div>;
}

export default Loader;