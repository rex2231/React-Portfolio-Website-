export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="text-left font-light">
          <h1 className="text-3xl">
            <span className="text-5xl font-bold h-10">T</span>his is it. ;)
            ____________________________________________________
          </h1>
          <p className="mt-5">
            Mahesh Babu is an Indian{" "}
            <span className="font-normal">
              UI/UX Designer & Front End Developer
            </span>
            {" "}with a passion for designing beautiful and fuctional user
            experiences. Typically hers Driven & permanently Curious. He's
            obsessed with designing things and even more obsessed with designing
            cool & clean stuff for the web and mobile. He has been in the
            business of creating since he hung his first painting on the wall
            when he was 11. <br />
            He holds a <span className="font-normal">bachelor degree in Computer Applications.</span> During his
            graduation, he has been actively involved in the web design
            community for the last 3 years. he has designed websites for small
            businesses, events, nonprofits and more. Currently hets based in
            Bihar, India, Where he's working as an independent creative.
          </p>

          <p className="mt-5">
            His interests, however, extend beyond the web and he loves helping
            people with branding and print design. He even loves designing <span className="font-normal">3D
            floor plan</span> 
          </p>

          <p className="mt-5">
            When he's not designing, he's probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
        </div>
      </div>
    </section>
  );
};
