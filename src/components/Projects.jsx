import ProjectCard from "./ProjectCards";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Project Evolution</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Noroff Year 1: Blog App"
          description="My first CRUD app using vanilla JavaScript and REST APIs."
          image="/images/blog-project.png"
          technologies="HTML, CSS, JS"
          link="https://github.com/yourusername/blog-app"
        />
        <ProjectCard
          title="Noroff Year 2: Social Media App"
          description="React-based SPA with dynamic routing and state management."
          image="/images/social-app.png"
          technologies="React, Tailwind, Vite"
          link="https://github.com/yourusername/social-app"
        />
        <ProjectCard
          title="Noroff Year 2: Social Media App"
          description="React-based SPA with dynamic routing and state management."
          image="/images/social-app.png"
          technologies="React, Tailwind, Vite"
          link="https://github.com/yourusername/social-app"
        />
      </div>
    </div>
  );
};

export default Projects;
