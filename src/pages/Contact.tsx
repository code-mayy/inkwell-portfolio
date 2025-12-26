import { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/yourprofile', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', value: '/yourusername', href: 'https://github.com' },
    { icon: MapPin, label: 'Location', value: 'City, Country', href: '#' },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="section-padding min-h-[40vh] flex items-center border-b-2 border-foreground">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-subheading mb-6">Get in Touch</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-display mb-8">
              Let's
              <br />
              connect.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-body max-w-xl">
              Have a project in mind? Looking for an intern? Or just want to 
              say hello? I'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="grid lg:grid-cols-2">
        {/* Form */}
        <div className="section-padding">
          <ScrollReveal>
            <p className="text-subheading mb-6">Send a Message</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-sm uppercase tracking-widest block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-sans focus:outline-none focus:bg-foreground focus:text-background transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-sm uppercase tracking-widest block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-sans focus:outline-none focus:bg-foreground focus:text-background transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="font-mono text-sm uppercase tracking-widest block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-sans focus:outline-none focus:bg-foreground focus:text-background transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-sm uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-2 border-foreground px-4 py-3 font-sans resize-none focus:outline-none focus:bg-foreground focus:text-background transition-colors"
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                />
              </div>

              <button type="submit" className="btn-invert w-full flex items-center justify-center gap-2">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Contact Info */}
        <div className="section-padding bg-foreground text-background">
          <ScrollReveal>
            <p className="text-subheading mb-6 opacity-60">Contact Info</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-heading mb-12">
              Other ways to reach me
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {socialLinks.map((link, index) => (
              <ScrollReveal key={link.label} delay={200 + index * 100}>
                <a 
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 border-2 border-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="font-mono text-sm uppercase tracking-widest opacity-60">{link.label}</p>
                    <p className="text-lg">{link.value}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Availability */}
          <ScrollReveal delay={600}>
            <div className="mt-16 pt-8 border-t border-background/20">
              <p className="font-mono text-sm uppercase tracking-widest opacity-60 mb-2">Availability</p>
              <p className="text-body">
                Currently open for internship opportunities and 
                freelance projects. Response time: 24-48 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="section-padding border-t-2 border-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-sm uppercase tracking-widest mb-4">
              Thank you for visiting
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-body">
              Built with passion, precision, and a lot of caffeine.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
