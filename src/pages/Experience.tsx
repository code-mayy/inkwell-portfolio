import { ScrollReveal } from '@/components/ScrollReveal';
import { Trophy, Briefcase, Award, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      icon: Briefcase,
      title: 'Software Engineering Intern',
      organization: 'Tech Company Name',
      period: 'Jun 2024 - Aug 2024',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on production features.',
    },
    {
      type: 'hackathon',
      icon: Trophy,
      title: 'Smart India Hackathon',
      organization: 'Winner - National Level',
      period: 'Dec 2023',
      description: 'Built an innovative solution for agricultural supply chain management. Led a team of 6 members.',
    },
    {
      type: 'certification',
      icon: Award,
      title: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services',
      period: 'Sep 2023',
      description: 'Validated cloud concepts, AWS services, security, architecture, pricing, and support knowledge.',
    },
    {
      type: 'project',
      icon: Code,
      title: 'College Technical Fest Lead',
      organization: 'University Name',
      period: 'Jan 2023 - Mar 2023',
      description: 'Managed the technical events and workshops. Organized coding competitions with 500+ participants.',
    },
    {
      type: 'hackathon',
      icon: Trophy,
      title: 'MLH Local Hack Day',
      organization: '2nd Runner Up',
      period: 'Nov 2022',
      description: 'Built a real-time collaborative code editor with video calling features in 24 hours.',
    },
    {
      type: 'certification',
      icon: Award,
      title: 'Meta Frontend Developer',
      organization: 'Meta (Coursera)',
      period: 'Aug 2022',
      description: 'Comprehensive program covering React, responsive design, and modern web development practices.',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[50vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-subheading mb-6">Experience & Achievements</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-display mb-8">
              Journey of
              <br />
              growth.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body max-w-xl">
              Milestones that have shaped my technical expertise and 
              professional development throughout my academic journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="relative flex gap-6 md:gap-12">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-foreground text-background flex items-center justify-center">
                      <exp.icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8 border-b border-foreground/20 last:border-b-0">
                      <span className="font-mono text-sm uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mt-2 mb-1">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-sm mb-4">{exp.organization}</p>
                      <p className="text-body">{exp.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-4 border-t-2 border-foreground">
        {[
          { number: '5+', label: 'Hackathons' },
          { number: '3', label: 'Internships' },
          { number: '10+', label: 'Projects' },
          { number: '8', label: 'Certifications' },
        ].map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 100}>
            <div className={`section-padding text-center ${index < 3 ? 'border-b md:border-b-0 md:border-r' : ''} border-foreground`}>
              <p className="text-display mb-2">{stat.number}</p>
              <p className="font-mono text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Additional Achievements */}
      <section className="section-padding bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-subheading mb-6 opacity-60">Recognition</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-12">Notable Mentions</h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              'Dean\'s List for Academic Excellence (2023)',
              'Top 100 in CodeChef Long Challenge',
              'Published Technical Article with 10K+ Views',
              'Open Source Contributor - 50+ Contributions',
              'Campus Ambassador - Major Tech Company',
            ].map((achievement, index) => (
              <ScrollReveal key={index} delay={200 + index * 50}>
                <div className="flex items-center gap-4 border-b border-background/20 pb-4">
                  <span className="font-mono text-sm">0{index + 1}</span>
                  <p className="text-lg">{achievement}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
