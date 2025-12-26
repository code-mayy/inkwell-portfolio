import { ExternalLink, Github } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticText } from '@/components/MagneticText';

const Projects = () => {
  const projects = [
    {
      title: 'Medify (Lifosys Internship)',
      description: 'An AI-driven healthcare assistant built during a full-stack internship, enabling intelligent symptom analysis, consultation support, and automated user workflows.',
      techStack: ['Python', 'FastAPI', 'React', 'MongoDB', 'AI APIs'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Verion',
      description: 'A legal AI assistant developed for a GenAI hackathon conducted by Google and Hack2Skill, designed to interpret legal documents and answer complex queries using large language models.',
      techStack: ['Python', 'LLMs', 'FastAPI', 'Vector Search', 'GenAI'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Smart AI Traffic Agent',
      description: 'An AI-powered traffic management agent developed for the Kottakkal Hackathon to analyze congestion patterns and propose optimized traffic flow strategies.',
      techStack: ['Python', 'AI Models', 'Data Analysis', 'Automation'],
      github: '#',
      demo: '#',
    },
    {
      title: 'NASA Space Apps Challenge Project',
      description: 'Built a solution for the NASA Space Apps Challenge using open NASA datasets to generate insights through data analysis and visualization.',
      techStack: ['Python', 'APIs', 'Data Visualization', 'Web Technologies'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Personal AI Assistant (n8n)',
      description: 'Created a personal AI assistant using n8n to automate tasks such as email handling, data processing, API orchestration, and intelligent decision flows.',
      techStack: ['n8n', 'APIs', 'LLMs', 'Automation', 'Webhooks'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chatbots & Conversational Interfaces',
      description: 'Developed multiple AI-powered chatbots for web applications, enabling natural language interaction, automated support, and task execution.',
      techStack: ['LLMs', 'FastAPI', 'React', 'NLP', 'Automation'],
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
            <MagneticText as="h1" className="text-display mb-8">
              Projects that
              <br />
              define me.
            </MagneticText>
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

                <MagneticText as="h3" className="text-xl md:text-2xl font-bold mb-4">{project.title}</MagneticText>
                <MagneticText as="p" className="text-body mb-6 flex-1">{project.description}</MagneticText>

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
            <MagneticText as="h2" className="text-heading mb-8">
              Want to see more?
            </MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body mb-8 max-w-xl mx-auto">
              Check out my GitHub profile for more projects,
              open-source contributions, and experimental work.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <a
              href="https://github.com/code-mayy"
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
