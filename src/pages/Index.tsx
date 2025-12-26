import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { TypeWriter } from '@/components/TypeWriter';
import { GeometricShape } from '@/components/GeometricShape';
import { ScrollReveal } from '@/components/ScrollReveal';

const Index = () => {
  const roles = ['CSE Student', 'Developer', 'Problem Solver', 'Tech Enthusiast'];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 flex flex-col justify-center section-padding">
          <div className="max-w-2xl">
            <p className="text-subheading mb-6 animate-fade-in">
              B.Tech Computer Science Engineering
            </p>
            
            <h1 className="text-display mb-8 animate-fade-in animation-delay-200">
              Building
              <br />
              Systems,
              <br />
              Code & Ideas
            </h1>
            
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

        {/* Right Side - Geometric Shape */}
        <div className="flex-1 hidden lg:flex items-center justify-center bg-foreground">
          <div className="w-full h-full flex items-center justify-center text-background">
            <GeometricShape />
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center py-8">
        <ArrowDown size={24} className="animate-bounce" />
      </div>

      {/* Quick Intro */}
      <section className="section-padding border-t-2 border-foreground">
        <div className="max-w-4xl mx-auto">
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

      {/* Quick Links Grid */}
      <section className="grid md:grid-cols-3 border-t-2 border-foreground">
        <Link 
          to="/skills" 
          className="section-padding border-b-2 md:border-b-0 md:border-r-2 border-foreground hover:bg-foreground hover:text-background transition-colors group"
        >
          <ScrollReveal>
            <p className="text-subheading mb-4">01</p>
            <h3 className="text-heading mb-4">Skills</h3>
            <p className="text-body mb-6">
              Programming languages, frameworks, and tools I work with.
            </p>
            <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
          </ScrollReveal>
        </Link>

        <Link 
          to="/projects" 
          className="section-padding border-b-2 md:border-b-0 md:border-r-2 border-foreground hover:bg-foreground hover:text-background transition-colors group"
        >
          <ScrollReveal delay={100}>
            <p className="text-subheading mb-4">02</p>
            <h3 className="text-heading mb-4">Projects</h3>
            <p className="text-body mb-6">
              Selected works showcasing my technical abilities.
            </p>
            <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
          </ScrollReveal>
        </Link>

        <Link 
          to="/resume" 
          className="section-padding hover:bg-foreground hover:text-background transition-colors group"
        >
          <ScrollReveal delay={200}>
            <p className="text-subheading mb-4">03</p>
            <h3 className="text-heading mb-4">Resume</h3>
            <p className="text-body mb-6">
              Download my complete resume for more details.
            </p>
            <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
          </ScrollReveal>
        </Link>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
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
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-transparent hover:text-background border-2 border-background transition-colors"
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
