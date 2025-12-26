import { ExternalLink, Github } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, cart functionality, and payment integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
      techStack: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'An intelligent chatbot interface powered by machine learning with natural language processing capabilities.',
      techStack: ['Python', 'FastAPI', 'React', 'TensorFlow'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'A tool that helps developers create beautiful portfolio websites with customizable templates and themes.',
      techStack: ['TypeScript', 'React', 'Firebase', 'SCSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Code Snippet Manager',
      description: 'A developer tool for organizing, searching, and sharing code snippets with syntax highlighting support.',
      techStack: ['Electron', 'React', 'SQLite', 'Monaco Editor'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and historical data visualization.',
      techStack: ['Vue.js', 'D3.js', 'OpenWeather API', 'Mapbox'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[50vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-subheading mb-6">Selected Work</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-display mb-8">
              Projects that
              <br />
              define me.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body max-w-xl">
              A collection of projects that showcase my technical skills, 
              problem-solving abilities, and passion for creating impactful solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <article className="card-invert group h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-sm">0{index + 1}</span>
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="p-2 border border-current hover:bg-current hover:text-background transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.demo}
                      className="p-2 border border-current hover:bg-current hover:text-background transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-body mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="card-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-heading mb-8">
              Want to see more?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body mb-8 max-w-xl mx-auto">
              Check out my GitHub profile for more projects, 
              open-source contributions, and experimental work.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-transparent hover:text-background border-2 border-background transition-colors"
            >
              <Github size={16} />
              View GitHub
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Projects;
