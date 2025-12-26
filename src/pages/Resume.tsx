import { Download, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticText } from '@/components/MagneticText';

const Resume = () => {
  const resumeData = {
    education: [
      {
        degree: 'B.Tech Computer Science Engineering',
        institution: 'College of Engineering Muttathara',
        period: '2023 - 2027',
        grade: 'Pursuing',
      },
    ],
    experience: [
      {
        title: 'Full-Stack Development Intern',
        company: 'Lifosys',
        period: 'Oct 2025',
        points: [
          'Completed an intensive hands-on program covering frontend, backend, and database integration.',
          'Built responsive interfaces and integrated database solutions.',
        ],
      },
    ],
    skills: {
      languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
      frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
      databases: ['PostgreSQL', 'MongoDB', 'Redis'],
      tools: ['Git', 'Docker', 'AWS', 'Linux'],
    },
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[40vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <ScrollReveal>
                <p className="text-subheading mb-6">Resume</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <MagneticText as="h1" className="text-display">
                  My
                  <br />
                  Credentials.
                </MagneticText>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={200}>
              <a
                href="/Copy%20of%20ABHIN%20M%20RAJ%20(5).pdf.pdf"
                download="Abhin_M_Raj_Resume.pdf"
                className="btn-invert inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download PDF
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inline Resume Preview */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12 pb-8 border-b-2 border-foreground">
              <MagneticText as="h2" className="text-3xl md:text-4xl font-bold mb-2">Abhin M Raj</MagneticText>
              <MagneticText as="p" className="font-mono text-sm mb-4">Automation Architect & AI Prompt Engineer</MagneticText>
              <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
                <span>abhinmraj@gmail.com</span>
                <span>•</span>
                <span>Thiruvanthapuram, Kerala</span>
                <span>•</span>
                <span>linkedin.com/in/abhinmraj</span>
                <span>•</span>
                <span>github.com/code-mayy</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h3 className="text-subheading mb-6">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <MagneticText as="p" className="font-bold text-lg">{edu.degree}</MagneticText>
                    <MagneticText as="p" className="text-body">{edu.institution}</MagneticText>
                  </div>
                  <div className="md:text-right">
                    <MagneticText as="p" className="font-mono text-sm">{edu.period}</MagneticText>
                    <MagneticText as="p" className="font-mono text-sm">{edu.grade}</MagneticText>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal delay={200}>
            <div className="mb-12">
              <h3 className="text-subheading mb-6">Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <MagneticText as="p" className="font-bold text-lg">{exp.title}</MagneticText>
                      <MagneticText as="p" className="text-body">{exp.company}</MagneticText>
                    </div>
                    <MagneticText as="p" className="font-mono text-sm">{exp.period}</MagneticText>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-body">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={300}>
            <div className="mb-12">
              <h3 className="text-subheading mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-sm font-bold">Languages: </span>
                  <span className="text-body">{resumeData.skills.languages.join(', ')}</span>
                </div>
                <div>
                  <span className="font-mono text-sm font-bold">Frameworks: </span>
                  <span className="text-body">{resumeData.skills.frameworks.join(', ')}</span>
                </div>
                <div>
                  <span className="font-mono text-sm font-bold">Databases: </span>
                  <span className="text-body">{resumeData.skills.databases.join(', ')}</span>
                </div>
                <div>
                  <span className="font-mono text-sm font-bold">Tools: </span>
                  <span className="text-body">{resumeData.skills.tools.join(', ')}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <MagneticText as="h2" className="text-heading mb-8">
              Ready to download?
            </MagneticText>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body mb-8 max-w-xl mx-auto">
              Get the complete resume in PDF format with all details
              about my education, experience, and achievements.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Copy%20of%20ABHIN%20M%20RAJ%20(5).pdf.pdf"
                download="Abhin_M_Raj_Resume.pdf"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-transparent hover:text-background border-2 border-background transition-colors"
              >
                <Download size={16} />
                Download PDF
              </a>
              <a
                href="https://www.linkedin.com/in/abhinmraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-background px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-background hover:text-foreground border-2 border-background transition-colors"
              >
                <ExternalLink size={16} />
                View LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Resume;
