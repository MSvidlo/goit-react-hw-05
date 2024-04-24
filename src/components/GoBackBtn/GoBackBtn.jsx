import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

function GoBackBtn({ route }) {
  return <div className={css.buttonWrapper}>
    <button className={css.button}><Link className={css.buttonLink} to={route}>Go back</Link></button>
  </div>;
}

export default GoBackBtn;