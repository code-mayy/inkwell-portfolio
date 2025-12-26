import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticText } from '@/components/MagneticText';

const About = () => {
  const education = [
    {
      year: '2023 - 2027',
      degree: 'B.Tech Computer Science Engineering',
      institution: 'College of Engineering Muttathara',
    },
    {
      year: '2021 - 2023',
      degree: 'Higher Secondary (PCM)',
      institution: 'Govt Higher Secondary School Kummil',
      details: 'Percentage: 85%',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[60vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl">
          <ScrollReveal>
            <MagneticText as="p" className="text-subheading mb-6">About Me</MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <MagneticText as="h1" className="text-display mb-8">
              Where language
              <br />
              becomes logic.
            </MagneticText>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section - Split Layout */}
      <section className="grid lg:grid-cols-2">
        {/* Left - Black Background */}
        <div className="section-padding bg-foreground text-background">
          <ScrollReveal>
            <p className="text-subheading mb-6 opacity-60">Professional Bio</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body mb-6">
              I am an Automation Architect and Prompt Engineer who sees code as a language of logic.
              My journey involves orchestrating systems where human intent is perfectly translated into machine execution.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body mb-6">
              I specialize in designing end-to-end workflows, integrating AI agents with robust backends,
              and ensuring that every prompt serves a functional, production-ready purpose.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-body">
              Beyond architecture, I obsess over efficiency, scalability, and the seamless
              fusion of traditional software engineering with the new frontier of Generative AI.
            </p>
          </ScrollReveal>
        </div >

        {/* Right - White Background */}
        < div className="section-padding" >
          <ScrollReveal>
            <p className="text-subheading mb-6">Career Objective</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-8">
              To build systems that think, adapt, and execute.
            </h2>
          </ScrollReveal >
          <ScrollReveal delay={200}>
            <p className="text-body">
              I aim to work where complexity meets clarity—creating automations that
              reduce friction and empower users to do more with less.
            </p>
          </ScrollReveal >
        </div >
      </section >

      {/* Education Timeline */}
      < section className="section-padding border-t-2 border-foreground" >
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-subheading mb-6">Education</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-12">Academic Journey</h2>
          </ScrollReveal>

          <div className="space-y-0">
            {education.map((edu, index) => (
              <ScrollReveal key={index} delay={200 + index * 100}>
                <div className="timeline-item">
                  <p className="font-mono text-sm mb-2">{edu.year}</p>
                  <MagneticText as="h3" className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</MagneticText>
                  <p className="text-body mb-1">{edu.institution}</p>
                  <p className="font-mono text-sm">{edu.details}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section >

      {/* Personal Interests */}
      < section className="section-padding bg-foreground text-background" >
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-subheading mb-6 opacity-60">Beyond Code</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-8">Interests & Hobbies</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={200}>
              <div className="border-2 border-background p-6">
                <h3 className="font-mono text-lg mb-4">Open Source</h3>
                <p className="opacity-80">
                  Contributing to the community and learning from talented developers worldwide.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="border-2 border-background p-6">
                <h3 className="font-mono text-lg mb-4">Competitive Programming</h3>
                <p className="opacity-80">
                  Sharpening problem-solving skills through algorithmic challenges.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="border-2 border-background p-6">
                <h3 className="font-mono text-lg mb-4">Tech Blogs</h3>
                <p className="opacity-80">
                  Writing and sharing knowledge about emerging technologies.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="border-2 border-background p-6">
                <h3 className="font-mono text-lg mb-4">Hackathons</h3>
                <p className="opacity-80">
                  Building innovative solutions under time constraints with amazing teams.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section >
    </main >
  );
};

export default About;
