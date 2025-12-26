import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticText } from '@/components/MagneticText';
import { Trophy, Briefcase, Award, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'hackathon',
      icon: Code,
      title: 'Smart India Hackathon Participant',
      organization: 'Selected at Institutional Level (Waitlisted National)',
      period: 'Nov 2025',
      description: 'Selected for the prestigious national hackathon, demonstrating technical excellence in problem-solving.',
    },
    {
      type: 'project',
      icon: Briefcase,
      title: 'SIH Prelims Hackathon Organizer',
      organization: 'College of Engineering Muttathara',
      period: 'Oct 2025',
      description: 'Coordinated hackathon operations and supported teams through the preliminary round.',
    },
    {
      type: 'internship',
      icon: Code,
      title: 'Full-Stack Development Internship (1 Week)',
      organization: 'Lifosys',
      period: 'Oct 2025',
      description: 'Completed an intensive hands-on program covering frontend, backend, and database integration.',
    },
    {
      type: 'award',
      icon: Trophy,
      title: 'Top 10 Finalist (Kerala Level)',
      organization: 'State Innovation Challenge',
      period: 'Sep 2025',
      description: 'Recognized among the top ten teams statewide for innovative problem-solving.',
    },
    {
      type: 'project',
      icon: Briefcase,
      title: 'IEDC Ignite Event Organizer',
      organization: 'College of Engineering Muttathara',
      period: 'Aug 2024',
      description: 'Led the planning and execution of an innovation-focused event encouraging student startups.',
    },
    {
      type: 'workshop',
      icon: Code,
      title: 'Flutter Development Workshop',
      organization: 'College of Engineering Muttathara',
      period: 'Feb 2024',
      description: 'Gained hands-on experience building cross-platform mobile interfaces using Flutter.',
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
            <MagneticText as="h1" className="text-display mb-8">
              Journey of
              <br />
              growth.
            </MagneticText>
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
                      <MagneticText as="h3" className="text-xl md:text-2xl font-bold mt-2 mb-1">
                        {exp.title}
                      </MagneticText>
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
          { number: '1', label: 'Internships' },
          { number: '10+', label: 'Projects' },
          { number: '10+', label: 'Certifications' },
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
              'Top 10 Finalist - TiE U Kerala',
              'IEDC Event Coordinator',
              'AI Prompt Engineer',
              'IEDC Operations & Quality Campus Sub-Lead',
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
