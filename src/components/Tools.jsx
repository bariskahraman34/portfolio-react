import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faSass, faBootstrap, faReact, faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons';

export default function Tools() {
  return (
    <section id="tools">
        <h2>Öğrendiklerim</h2>
        <div className="card-container">
            <div className="card tooltip" data-tooltip="JavaScript">
                <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="card tooltip" data-tooltip="HTML5">
                <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="card tooltip" data-tooltip="CSS">
                <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="card tooltip" data-tooltip="SCSS">
                <FontAwesomeIcon icon={faSass} />
            </div>
            <div className="card tooltip" data-tooltip="Bootstrap">
                <FontAwesomeIcon icon={faBootstrap} />
            </div>
            <div className="card tooltip" data-tooltip="React">
                <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="card tooltip" data-tooltip="Git">
                <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="card tooltip" data-tooltip="Figma">
                <FontAwesomeIcon icon={faFigma} />
            </div>
        </div>
    </section>
  )
}
