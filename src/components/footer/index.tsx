import Image from 'next/image'
import styles from './styles.module.sass'

import logoImg from '@/assets/logo.png'

import instagramIcon from '@/assets/footer/instagramIcon.png'
import facebookIcon from '@/assets/footer/facebookIcon.png'
import linkedinIcon from '@/assets/footer/linkedinIcon.png'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h4>Inscreva-se na nossa newsletter</h4>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos
              <br /> da Econverse.
            </p>
          </div>

          <form>
            <div className={styles.formContainer}>
              <div className={styles.formMainInputs}>
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu e-mail" />
                <button type="submit">INSCREVER</button>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="termsAndConditions" />
                <label htmlFor="termsAndConditions">
                  Aceito os termos e condições
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.footerNavContainer}>
        <div className={styles.footerNav}>
          <Image src={logoImg} alt="logo" width={165} height={48} />
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.
          </p>
          <nav>
            <a href="#">
              <Image
                width={24}
                height={24}
                alt="instagram"
                src={instagramIcon}
              />
            </a>
            <a href="#">
              <Image width={24} height={24} alt="facebook" src={facebookIcon} />
            </a>
            <a href="#">
              <Image width={24} height={24} alt="linkedin" src={linkedinIcon} />
            </a>
          </nav>
        </div>
        <span className={styles.separator} />
        <div className={styles.NavList}>
          <ul>
            <li>
              <a href="#">
                <strong>Institucional</strong>
              </a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Movimento</a>
            </li>
            <li>
              <a href="#">Trabalhe conosco</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <strong>Ajuda</strong>
              </a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
            <li>
              <a href="#">Perguntas Frequentes</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">
                <strong>Termos</strong>
              </a>
            </li>
            <li>
              <a href="#">Termos e condições</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Troca e Devolução</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.finalFooter}>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  )
}
