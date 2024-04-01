import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTheme from 'styles/theme.module.scss';

import { useNavigate } from 'react-router-dom';



function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTheme.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>{
          '< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}

export default NotFound;
