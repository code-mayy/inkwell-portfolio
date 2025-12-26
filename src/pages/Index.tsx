import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { TypeWriter } from '@/components/TypeWriter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { NameRain } from '@/components/NameRain';

const Index = () => {
  const roles = ['CSE Student', 'Developer', 'Problem Solver', 'Tech Enthusiast'];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <NameRain />
        
        <div className="section-padding relative z-10">
          <div className="max-w-4xl">
            <p className="text-subheading mb-6 animate-fade-in">
              Computer Science Engineering Student
            </p>
            
            <h1 className="text-display mb-6 animate-fade-in animation-delay-200">
              Abhin M Raj
            </h1>
            
            <p className="font-sans text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in animation-delay-400">
              Building logic, systems, and clean code.
            </p>
            
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
        <NameRain />
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-subheading mb-4">About</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-8">
              Passionate about creating elegant solutions to complex problems.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body max-w-2xl mb-8">
              A Computer Science Engineering student with a strong foundation in algorithms, 
              data structures, and modern web technologies. I love building systems that 
              make a difference.
            </p>
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
        <NameRain inverted />
        <div className="grid md:grid-cols-3 relative z-10">
          <Link 
            to="/skills" 
            className="section-padding border-b-2 md:border-b-0 md:border-r-2 border-background hover:bg-background hover:text-foreground transition-colors group"
          >
            <ScrollReveal>
              <p className="text-subheading mb-4 opacity-60">01</p>
              <h3 className="text-heading mb-4">Skills</h3>
              <p className="text-body mb-6 opacity-80">
                Programming languages, frameworks, and tools I work with.
              </p>
              <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </ScrollReveal>
          </Link>

          <Link 
            to="/projects" 
            className="section-padding border-b-2 md:border-b-0 md:border-r-2 border-background hover:bg-background hover:text-foreground transition-colors group"
          >
            <ScrollReveal delay={100}>
              <p className="text-subheading mb-4 opacity-60">02</p>
              <h3 className="text-heading mb-4">Projects</h3>
              <p className="text-body mb-6 opacity-80">
                Selected works showcasing my technical abilities.
              </p>
              <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </ScrollReveal>
          </Link>

          <Link 
            to="/resume" 
            className="section-padding hover:bg-background hover:text-foreground transition-colors group"
          >
            <ScrollReveal delay={200}>
              <p className="text-subheading mb-4 opacity-60">03</p>
              <h3 className="text-heading mb-4">Resume</h3>
              <p className="text-body mb-6 opacity-80">
                Download my complete resume for more details.
              </p>
              <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
            </ScrollReveal>
          </Link>
        </div>
      </section>

      {/* Another White Section */}
      <section className="section-padding relative overflow-hidden">
        <NameRain />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-heading mb-8">
              Let's work together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body mb-8 max-w-xl mx-auto">
              Looking for internship opportunities, hackathon collaborations, 
              or just want to connect? I'd love to hear from you.
            </p>
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
    </main>
  );
};

export default Index;
