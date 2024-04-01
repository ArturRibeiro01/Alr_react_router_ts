import styles from './Snack.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';



export default function snack() {
  const { id } = useParams();
  const navigate = useNavigate();
  const snack = cardapio.find(item => item.id === Number(id));

  if (!snack) {
    return '';
  }


  return (
    <div>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {snack.title}
        </h1>
        <div className={styles.imagem}>
          <img src={snack.photo} alt={snack.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {snack.description}
          </p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__tipo]: true,
              [styles[`tags__tipo__${snack.category.label.toLowerCase()}`]]: true
            })}>
              {snack.category.label}
            </div>
            <div className={styles.tags__porcao}>
              {snack.size}g
            </div>
            <div className={styles.tags__qtdpessoas}>
              Serve {snack.serving} pessoa {snack.serving == 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
              R$ {snack.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}