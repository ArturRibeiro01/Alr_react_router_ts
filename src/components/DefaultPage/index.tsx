import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/theme.module.scss';

function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={stylesTheme.container}>
        <Outlet />
      </section>
    </>
  );
}

export default DefaultPage;