import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect , useState } from 'react';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabase = createClient('https://htidrheaexbcibvimmjg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0aWRyaGVhZXhiY2lidmltbWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3ODc1NDEsImV4cCI6MjAzMTM2MzU0MX0.rPIpWG2jvenTlqpWkQS35RaHuCI4T5cdYsn84b2SNx0');

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [technologies , setTechnologies] = useState([]);
    const [images , setImages] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            let {data: projects , error:projectsError} = await supabase
                .from('projects')
                .select('*')
            if(projectsError){
            console.log(projectsError);
            }else{
            setProjects(projects);
            }
            let {data: techs , error:techsError} = await supabase
                .from('project-technologies')
                .select('*')
            if(techsError){
                console.log(techsError)
            }else{
                console.log(techs)
                setTechnologies(techs)
            }
            let {data: images , error:imagesError} = await supabase
                .from('project-images')
                .select('*')
            if(imagesError){
                console.log(imagesError)
            }else{
                console.log(images)
                setImages(images)
            }
        }
        fetchProjects()
    },[])
  return (
    <>
        <section id='projects'>
            <h2>Projelerim</h2>
            <div className="card-container">
                {projects?.map((project) => (
                    <div key={project.id} className="card">
                        <a href={project.demo_URL} target="_blank" >
                            {images?.map((img,index) => (
                                project.id == img.project_id ? <img key={index} src={img.image_url} alt="" />  : ""
                            ))}
                            
                            <div className="card-heading">
                                <h3 className="project-name">{project.project_name}</h3>
                                <span className="color-green">{project.year}</span>
                            </div>
                            <div className="languages">
                                <ul className="languages-list">
                                {technologies?.map((tech, index) => (
                                    tech.project_id == project.id ? <li key={index}>{tech.technology}</li> : ""
                                ))}
                                </ul>
                            </div>
                        </a>
                        <p className="description">
                            {project.description}
                        </p>
                        <a className="github-link" target='_blank' href={project.source_code_url}>Github Repository 
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
