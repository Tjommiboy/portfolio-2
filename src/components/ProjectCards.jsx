const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <div className="bg-[var(--natural-4)] p-4 rounded shadow">
      <img
        src={image}
        alt={title}
        className="rounded mb-2 w-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-[var(--generic-8)] mb-2">{description}</p>
      <p className="text-xs text-gray-400 mb-1">Tech: {technologies}</p>
      {link && (
        <a
          href={link}
          className="text-blue-300 underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
