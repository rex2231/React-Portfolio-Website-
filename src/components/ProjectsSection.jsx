export const ProjectsSection = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS.",
      image:
        "https://cdn.prod.website-files.com/62c5836076839ad95e36215d/64fb2b64316862df3d2e099a_rcQYosTUaQ6hiJSAk7JphBXJCcZpPSAnq6u8U_3pnj0UVcHM5niGdGNBZ625bnZmRDTg4UQFOjd8tuczIfNSZ7JQeRBtnY4NHvGyGjRBe_DVE4QiDsVy9vcllRT7B1Ut7wx9CBDr945F26Um1hF4xM4.png",
      link: "https://www.adhamdannaway.com/",
    },
    {
      name: "Todo App",
      description:
        "A todo list application with React and local storage support.",
      image:
        "https://cdn.prod.website-files.com/5ece2a5849bce17e045c5071/5f97f82f69b943c36115dfb1_Frame%2013%20(2).png",
      link: "https://airtable.com/appgfnxFVtvMLhADw/shr9PzcrmSqTgZ5NS/tblWUTxCO0zLWq9WO/viwVyhAeVuMQLNFzC",
    },
    {
      name: "E-commerce Store",
      description:
        "A demo e-commerce store built with Next.js and Stripe integration.",
      image:
        "https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage-august.jpg",
      link: "https://www.amazon.com",
    },
    {
      name: "Blog Platform",
      description:
        "A simple blog platform with Markdown support and React frontend.",
      image:
        "https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/free-blog-maker/grow-blog-traffic-en.webp?width=600&name=grow-blog-traffic-en.webp",
      link: "https://www.backpackerbanter.com/blog/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-background text-foreground dark:bg-background dark:text-foreground"
    >
      <div className="container max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-card dark:bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-foreground dark:text-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

