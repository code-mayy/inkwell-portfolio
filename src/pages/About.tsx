import { ScrollReveal } from '@/components/ScrollReveal';

const About = () => {
  const education = [
    {
      year: '2021 - 2025',
      degree: 'B.Tech Computer Science Engineering',
      institution: 'University Name',
      details: 'CGPA: 8.5/10',
    },
    {
      year: '2019 - 2021',
      degree: 'Higher Secondary (PCM)',
      institution: 'High School Name',
      details: 'Percentage: 92%',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[60vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-subheading mb-6">About Me</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-display mb-8">
              Crafting the future,
              <br />
              one line of code
              <br />
              at a time.
            </h1>
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
              I'm a dedicated Computer Science Engineering student with a passion 
              for building innovative software solutions. My journey in tech began 
              with curiosity about how things work, and has evolved into a deep 
              commitment to mastering the craft of software development.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body mb-6">
              I specialize in full-stack web development, with experience in 
              React, Node.js, and various database technologies. I'm constantly 
              exploring new technologies and methodologies to stay at the cutting 
              edge of the industry.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-body">
              Beyond coding, I actively participate in hackathons, contribute to 
              open-source projects, and enjoy solving algorithmic challenges on 
              competitive programming platforms.
            </p>
          </ScrollReveal>
        </div>

        {/* Right - White Background */}
        <div className="section-padding">
          <ScrollReveal>
            <p className="text-subheading mb-6">Career Objective</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-8">
              To leverage my technical skills and creative problem-solving 
              abilities to develop impactful software solutions.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body">
              I aim to work in an environment that challenges me to grow, 
              collaborate with talented individuals, and contribute to 
              projects that make a meaningful difference in people's lives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding border-t-2 border-foreground">
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
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-body mb-1">{edu.institution}</p>
                  <p className="font-mono text-sm">{edu.details}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-padding bg-foreground text-background">
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
      </section>
    </main>
  );
};

export default About;
