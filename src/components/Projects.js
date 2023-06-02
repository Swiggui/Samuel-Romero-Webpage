import ProjectData from "../Data/ProjectsData";
import '../Styles/projectsStyles.css';
import { Button } from "react-bootstrap";

const Projects = () => {

    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return(
        <div>
            {ProjectData.map((project, index) => (
                <div 
                    className="project"
                    key={index}
                    onClick={() => openLink(project.Link)}
                    style={{backgroundImage: `url(${project.ImagePath})`}}
                >
                    
                    
                    
                    
                        <div 
                            className="project-info"
                        >
                            <h4>{project.Title}</h4>
                            <p>{project.Description}</p>
                            <Button 
                                variant="outline-light w-50 py-3" 
                                target="blank" 
                                >Watch</Button>
                        </div>
                </div>
            ))}
        </div> 
    );
}

export default Projects;