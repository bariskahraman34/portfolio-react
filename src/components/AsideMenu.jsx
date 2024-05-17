import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUserLarge, faLinesLeaning, faCode } from '@fortawesome/free-solid-svg-icons';

export default function AsideMenu() {
  return (
    <aside>
      <nav className="navigation">
        <a href="../public/files/barisKahramanResume.pdf" target="_blank" className="tooltip" data-tooltip="CV Görüntüle">
          <FontAwesomeIcon icon={faFile} />
        </a>
        <a className="tooltip" href="#header" data-tooltip="Hakkımda">
          <FontAwesomeIcon icon={faUserLarge} />
        </a>
        <a className="tooltip" href="#tools" data-tooltip="Öğrendiklerim">
          <FontAwesomeIcon icon={faLinesLeaning} />
        </a>
        <a className="tooltip" href="#projects" data-tooltip="Projelerim">
          <FontAwesomeIcon icon={faCode} />
        </a>
      </nav>
    </aside>
  )
}
