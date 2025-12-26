import { ScrollReveal } from '@/components/ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C'],
    },
    {
      title: 'Web Development',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Figma', 'Postman', 'AWS'],
    },
    {
      title: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'System Design', 'Agile'],
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[50vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-subheading mb-6">Technical Skills</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-display mb-8">
              Tools of
              <br />
              the trade.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body max-w-xl">
              A comprehensive toolkit built through years of learning, 
              building, and problem-solving across various domains.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <ScrollReveal delay={categoryIndex * 50}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-sm">0{categoryIndex + 1}</span>
                  <h2 className="text-heading">{category.title}</h2>
                  <div className="flex-1 h-0.5 bg-foreground origin-left animate-line-grow" />
                </div>
              </ScrollReveal>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <ScrollReveal 
                    key={skill} 
                    delay={categoryIndex * 50 + skillIndex * 30}
                  >
                    <span className="skill-item">{skill}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proficiency Bars */}
      <section className="section-padding bg-foreground text-background border-t-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-subheading mb-6 opacity-60">Proficiency</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-12">Core Competencies</h2>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              { skill: 'Frontend Development', level: 90 },
              { skill: 'Backend Development', level: 80 },
              { skill: 'Data Structures & Algorithms', level: 85 },
              { skill: 'Database Management', level: 75 },
              { skill: 'DevOps & Cloud', level: 65 },
            ].map((item, index) => (
              <ScrollReveal key={item.skill} delay={200 + index * 100}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm">{item.skill}</span>
                    <span className="font-mono text-sm">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-background/20 overflow-hidden">
                    <div 
                      className="h-full bg-background transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="section-padding border-t-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-subheading mb-6">Always Growing</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-8">Currently Exploring</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {['Kubernetes', 'GraphQL', 'Machine Learning', 'Web3', 'Rust'].map((skill, index) => (
              <ScrollReveal key={skill} delay={200 + index * 50}>
                <span className="skill-item border-dashed">{skill}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
