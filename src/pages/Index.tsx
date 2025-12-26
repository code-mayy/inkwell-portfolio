
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { MagneticText } from '@/components/MagneticText';
import { TypeWriter } from '@/components/TypeWriter';
import { ScrollReveal } from '@/components/ScrollReveal';


const Index = () => {
  const roles = ['Prompt Engineer', 'Full-Stack Developer', 'Automation Architect'];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">


        <div className="section-padding relative z-10">
          <div className="max-w-4xl">
            <MagneticText as="p" className="text-subheading mb-6 animate-fade-in hover-magnify">
              Systems & Logic Designer
            </MagneticText>

            <MagneticText as="h1" className="text-display mb-6 animate-fade-in animation-delay-200 hover-magnify">
              Abhin M Raj
            </MagneticText>

            <MagneticText as="p" className="font-sans text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in animation-delay-400">
              I design systems where language becomes logic. Translating intent into execution.
            </MagneticText>

            <div className="font-mono text-lg md:text-xl mb-12 animate-fade-in animation-delay-400">
              <TypeWriter words={roles} />
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
              <Link to="/projects" className="btn-invert inline-flex items-center gap-2">
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown size={24} className="animate-bounce" />
        </div>
      </section>

      {/* Quick Intro - White Section */}
      <section className="section-padding border-t-2 border-foreground relative overflow-hidden">

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <MagneticText as="p" className="text-subheading mb-4">About</MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <MagneticText as="h2" className="text-heading mb-8">
              Passionate about creating elegant solutions to complex problems.
            </MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <MagneticText as="p" className="text-body max-w-2xl mb-8">
              From databases and backends to AIdriven automations, I build end-to-end solutions that are scalable, efficient, and production-ready.
              My focus is on translating intent into execution—using prompts, code, and workflows that work together seamlessly.
            </MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Learn More
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Links Grid - Inverted Section */}
      <section className="section-inverted relative overflow-hidden">

        <div className="grid md:grid-cols-3 relative z-10">

          <Link
            to="/projects"
            className="section-padding border-b-2 md:border-b-0 md:border-r-2 border-background hover:bg-background hover:text-foreground transition-colors group"
          >
            <ScrollReveal delay={100}>
              <MagneticText as="p" className="text-subheading mb-4 opacity-60">01</MagneticText>
              <MagneticText as="h3" className="text-heading mb-4">Projects</MagneticText>
              <MagneticText as="p" className="text-body mb-6 opacity-80">
                Selected works showcasing my technical abilities.
              </MagneticText>
              <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </ScrollReveal>
          </Link>

          <Link
            to="/experience"
            className="section-padding border-b-2 md:border-b-0 md:border-r-2 border-background hover:bg-background hover:text-foreground transition-colors group"
          >
            <ScrollReveal delay={200}>
              <MagneticText as="p" className="text-subheading mb-4 opacity-60">02</MagneticText>
              <MagneticText as="h3" className="text-heading mb-4">Experience</MagneticText>
              <MagneticText as="p" className="text-body mb-6 opacity-80">
                My professional journey and career highlights.
              </MagneticText>
              <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </ScrollReveal>
          </Link>

          <Link
            to="/resume"
            className="section-padding hover:bg-background hover:text-foreground transition-colors group"
          >
            <ScrollReveal delay={300}>
              <MagneticText as="p" className="text-subheading mb-4 opacity-60">03</MagneticText>
              <MagneticText as="h3" className="text-heading mb-4">Resume</MagneticText>
              <MagneticText as="p" className="text-body mb-6 opacity-80">
                Download my complete resume for more details.
              </MagneticText>
              <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </ScrollReveal>
          </Link>
        </div>
      </section>

      {/* Another White Section */}
      <section className="section-padding relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <MagneticText as="h2" className="text-heading mb-8">
              Let's work together
            </MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <MagneticText as="p" className="text-body mb-8 max-w-xl mx-auto">
              Looking for freelance projects, AI automation solutions,
              or just want to connect? I'd love to hear from you.
            </MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link
              to="/contact"
              className="btn-invert inline-flex items-center gap-2"
            >
              Contact Me
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main >
  );
};

export default Index;
