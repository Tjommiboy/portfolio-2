const Hero = () => {
  return (
    <div className="container flex flex-col md:flex-row p-2 rounded gap-2 justify-center">
      <div className="md:w-1/3 bg-[var(--natural-4)] p-2 rounded flex items-center justify-center">
        <img
          className="rounded object-cover w-full h-auto"
          src="../../public/images/DSC_6973-2.jpg"
          alt="picture of Anand Chetty"
        />
      </div>
      <div className="md:w-1/3">
        <p className="bg-[var(--natural-4)] p-4 text-2xl text-[var(--generic-8)] rounded">
          Hi, I’m Anand <br />– a recent Bachelor’s graduate and Frontend
          Developer passionate about building responsive, user-friendly web
          interfaces. I enjoy working with HTML, CSS, JavaScript, and React to
          create clean and interactive digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
