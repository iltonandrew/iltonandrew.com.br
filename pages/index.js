import Typewriter from 'typewriter-effect';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ilton Andrew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ color: '#49D49D' }}>
          Olá! Eu sou o Ilton!
        </h1>
        <div className={styles.subTitle} style={{ color: '#49D49D' }}>
          <Typewriter
            options={{
              cursor: '_',
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString('Eu sou um Engenheiro')
                .pauseFor(1000)
                .deleteChars(10)
                .typeString('Desenvolvedor')
                .pauseFor(1000)
                .deleteChars(20)
                .typeString('construo coisas para a web.')
                .start();
            }}
          />
        </div>

        <p className={styles.description}>
          Bem vindo à minha página!
          <br />
          Ela está em construição 🚧🚧 ainda, mas logo estará pronta! <br />
          <br />
          Se quiser saber um pouco mais sobre mim:
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/ilton-andrew/" className={styles.card}>
            <h3>Linkedin &rarr;</h3>
            <p>Me adicione no Linkedin! 🔗</p>
          </a>

          <a href="https://github.com/iltonandrew" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Veja alguns de meus projetos! 🔧</p>
          </a>

          <a href="https://www.instagram.com/ilton.andrew/" className={styles.card}>
            <h3>Instagram &rarr;</h3>
            <p>Me siga no instagram. 📷</p>
          </a>

          <a href="/IltonAndrew.pdf" className={styles.card} target="_blank">
            <h3>Currículo &rarr;</h3>
            <p>Veja meu currículo! 🎯</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito com 💚 por Ilton Andrew
        </a>
      </footer>
    </div>
  );
}
