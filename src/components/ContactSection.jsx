import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Typography */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Let's build something <br/>
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">amazing together.</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-md mx-auto md:mx-0">
              I'm currently open to new opportunities, freelance projects, and creative collaborations. If you have a project in mind, let's chat.
            </p>
            <div className="pt-4 hidden md:block">
              <a href="mailto:mansichhillar8898@gmail.com" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-violet-600 hover:text-white transition-colors duration-300">
                Say Hello <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Side: Glass Contact Card */}
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
            <div className="space-y-8">
              
              <a href="mailto:mansichhillar8898@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-violet-500/10 text-violet-500 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 mb-1">Email</p>
                  <p className="text-lg font-medium">mansichhillar8898@gmail.com</p>
                </div>
              </a>

              <a href="tel:+14378187440" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-fuchsia-500/10 text-fuchsia-500 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 mb-1">Phone</p>
                  <p className="text-lg font-medium">+1 (437) 955-9407</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50 mb-1">Location</p>
                  <p className="text-lg font-medium">Toronto, ON, Canada</p>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/20 dark:border-white/5 flex gap-4">
                <a href="https://www.linkedin.com/in/mansi-aa2728258" target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-white/20 dark:bg-white/5 flex justify-center hover:bg-violet-500 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/ft-Mansiii" target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-white/20 dark:bg-white/5 flex justify-center hover:bg-violet-500 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};