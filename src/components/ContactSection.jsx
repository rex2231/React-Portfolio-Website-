export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16
                 bg-background text-foreground dark:bg-background dark:text-foreground"
    >
      <div className="container max-w-3xl mx-auto text-center space-y-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary">
          Contact Me
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-6 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-card dark:bg-card text-foreground dark:text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-card dark:bg-card text-foreground dark:text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="p-4 rounded-xl bg-card dark:bg-card text-foreground dark:text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

