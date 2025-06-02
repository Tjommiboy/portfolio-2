import { useParams } from "react-router-dom";
import { projectData } from "../projectData/projectData";
const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center p-4">Project not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-amber-50 rounded text-[var(--natural-6)]">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full mb-4" />
      <p className="mb-2">{project.description}</p>
      <p className="text-sm mb-2">
        Tech used: {project.technologies.join(", ")}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View Repo
      </a>
    </div>
  );
};

export default ProjectPage;
