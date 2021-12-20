import styles from './styles.module.scss';
import Head from 'next/head';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>
              20 de dezembro de 2021
            </time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eligendi. Assumenda inventore quia quasi! Velit doloribus sequi quidem assumenda quam! Libero minima maxime reiciendis quis porro facilis cumque est corrupti?</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa voluptatum totam vitae iste, aperiam labore nesciunt at odit deleniti. Consequuntur excepturi minima sapiente fugit perspiciatis amet harum facere rem.</p>
          </a>
          <a href="">
            <time>
              20 de dezembro de 2021
            </time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eligendi. Assumenda inventore quia quasi! Velit doloribus sequi quidem assumenda quam! Libero minima maxime reiciendis quis porro facilis cumque est corrupti?</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa voluptatum totam vitae iste, aperiam labore nesciunt at odit deleniti. Consequuntur excepturi minima sapiente fugit perspiciatis amet harum facere rem.</p>
          </a>
          <a href="">
            <time>
              20 de dezembro de 2021
            </time>
            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eligendi. Assumenda inventore quia quasi! Velit doloribus sequi quidem assumenda quam! Libero minima maxime reiciendis quis porro facilis cumque est corrupti?</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa voluptatum totam vitae iste, aperiam labore nesciunt at odit deleniti. Consequuntur excepturi minima sapiente fugit perspiciatis amet harum facere rem.</p>
          </a>
        </div>
      </main>
    </>
  );
}