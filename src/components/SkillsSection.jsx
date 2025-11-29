export const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Next.js", level: 65 },
    { name: "TypeScript", level: 70 },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-background text-foreground dark:bg-background dark:text-foreground"
    >
      <div className="container max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-foreground dark:text-foreground">
                  {skill.name}
                </span>
                <span className="text-sm text-foreground/70 dark:text-foreground/70">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-4 bg-border rounded-full overflow-hidden">
                <div
                  className="h-4 bg-primary dark:bg-primary rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
