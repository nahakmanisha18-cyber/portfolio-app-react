import Watch from "../assets/image/Watch.png";
import food from "../assets/image/food.png";
import secure from "../assets/image/secure.png";
import product from "../assets/image/product.png";
import note from "../assets/image/note.png";
import react from "../assets/image/react.png";


const Projects = () => {
    const projectList = [
        {
            title: "Moto Watch Store",
            desc: "A modern smartwatch e-commerce website with responsive design and stylish product showcase features.",
            image: Watch,
            live: "https://watch-d45c49.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/Watch_web"
        },
        {
            title: "TastyBite Food App",
            desc: "A responsive food delivery web app with interactive menu, online ordering, and clean user interface.",
            image: food,
            live: "https://food-09d930.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/food_web"
        },
        {
            title: "Secure Cam Web App",
            desc: "A security monitoring website designed to showcase smart surveillance solutions with modern UI.",
            image: secure,
            live: "https://secure-com-60d1bb.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/SecureCam_web"
        },
        {
            title: "Product Management App",
            desc: "A product management application for organizing, tracking, and managing products efficiently.",
            image: product,
            live: "https://product-management-879d7d.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/product-management-app"
        },
        {
            title: "Note Pad App",
            desc: "A simple and responsive note-taking application to create, manage, and organize daily notes.",
            image: note,
            live: "https://note-app-1eb51a.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/Notepad_web"
        },
        {
            title: "React Learning Website",
            desc: "An interactive React learning platform designed to help beginners understand React concepts easily.",
            image: react,
            live: "https://react-learn-65fcb5.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/React-Learn"
        }
    ];
    const displayProjects = [...projectList];

    return (
        <section className="projects-section" id="project">
            <h2 className="projects-title" data-aos="fade-up" data-aos-delay="100" ><span>MY</span> PROJECTS</h2>

            <div className="projects-grid">
                {displayProjects.map((project, index) => (
                    <div className="project-card" key={index} data-aos="fade-up" data-aos-delay="300">
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-links">
                                <a href={project.live} className="link-item">View Live Demo</a>
                                <span className="separator">|</span>
                                <a href={project.github} className="link-item">View on Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;