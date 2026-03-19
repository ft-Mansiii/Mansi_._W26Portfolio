import { ArrowDown, Github, Linkedin, Mail, Download, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto z-10">
        
        {/* The Massive Glass Panel */}
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl rounded-[2.5rem] p-8 md:p-16 text-center transform transition-all hover:scale-[1.01] duration-500">
          
          <div className="space-y-6">
    
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Hi, I'm Mansi
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide max-w-2xl mx-auto uppercase">
              Software Engineer • George Brown College
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft elegant, high-performance digital experiences. From scalable backend architectures to intuitive full-stack applications, I focus on building solutions that are as beautiful under the hood as they are on the screen.
            </p>

            {/* Primary CTA + Social buttons */}
            <div className="pt-8 flex flex-col items-center justify-center gap-6">
              
              {/* Top Row: Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  View Projects
                </a>
                
                <a 
                  href="/profesional_resume.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 px-6 py-3 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>

<a 
                  href="/cover letter.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 px-6 py-3 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                  Cover Letter
                </a>

                <a 
                  href="/Unofficial Transcript.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 px-6 py-3 text-sm font-medium hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <FileText className="h-4 w-4" />
                  Transcript
                </a>
              </div>

              {/* Bottom Row: Social Links */}
              {/* Bottom Row: Social Links */}
              <div className="flex items-center justify-center gap-5 mt-4">
                <a
                  href="https://github.com/ft-Mansiii"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mansi-aa2728258"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                
                <a
                  href="mailto:mansichhillar8898@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};