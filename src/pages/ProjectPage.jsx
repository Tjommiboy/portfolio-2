import { useParams } from "react-router-dom";
import { projectData } from "../projectData/projectData";
const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center p-4">Project not found.</div>;
  }

  return (
    <div className=" container mx-auto p-4 bg-amber-50/30 rounded text-[var(--natural-6)]">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex-1">
          <p className="mb-2">{project.description}</p>

          <div className="flex gap-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Repo
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Live Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  gap-4">
          {project.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.title} Screenshot ${index + 1}`}
              className="w-full h-60 object-fit rounded shadow-xl bg-amber-50"
            />
          ))}
        </div>
      </div>
      <h2>Built with:</h2>
      <section className="flex p-4">
        <ul className="flex flex-wrap gap-4 p-0 list-none">
          {project.techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded"
            >
              {tech.logo && (
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width="24"
                  height="24"
                />
              )}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectPage;
