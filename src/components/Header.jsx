import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <section id="header">
        <header>
            <h1>Merhaba, Ben Barış <span><FontAwesomeIcon icon={faHandSparkles} /></span></h1>
            <h1 className="color-green">FrontEnd Developer</h1>
            <ul className="links-list">
                <li className="link">
                <a href="https://github.com/bariskahraman34" target='_blank'>
                    <span><FontAwesomeIcon icon={faGithub} /></span>
                    Github
                </a>
                </li>
                <li className="link">
                <a href="https://www.linkedin.com/in/bariskahraman34/" target='_blank'>
                    <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    Linkedin
                </a>
                </li>
                <li className="link">
                <a href="mailto:boriskahra34@gmail.com" target='_blank'>
                    <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    Email
                </a>
                </li>
            </ul>
            <div className="description">
                <p>
                    Merhaba, ben Barış Kahraman. 1999 yılında İstanbul'da doğdum ve şu an Bahçeşehir ilçesinde ikamet ediyorum. Yıldız Teknik Üniversitesi'nde Kontrol ve Otomasyon Mühendisliği Lisans bölümünde eğitim alıyorum. Ayrıca, Marmara Üniversitesi'nde Bilgisayar Programcılığı ön lisans eğitimi alıyorum.
                </p>
                <p>
                    Acunmedya Akademi'den almakta olduğum Genişletilmiş Yazılım Uzmanlığı - Frontend eğitimi, bilgi ve becerilerimi daha da geliştirmeme yardımcı oluyor. Bu süreçte, kendimi sürekli olarak yenilemeyi ve geliştirmeyi amaçlıyorum. Ayrıca, bilgisayar programcılığı alanındaki eğitimim de devam ediyor, bu da bana geniş bir perspektif kazandırıyor.
                </p>
                <p>
                    Amacım, yazılım dünyasında iyi bir takım arkadaşı olmanın yanı sıra özellikle Frontend ve ardından Backend alanında etkili bir geliştirici olmaktır. Yaptığım her adımda öğrenmeye ve kendimi daha da ileriye taşımaya odaklanıyorum.
                </p>
            </div>
        </header>
    </section>
  )
}
