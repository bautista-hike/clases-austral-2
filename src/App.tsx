/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Clock, 
  Cpu, 
  BarChart3, 
  MessageSquare, 
  Menu, 
  X,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-space/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="font-display font-bold text-2xl tracking-[0.05em]">HIKE<span className="text-spark-yellow">.</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 font-display text-sm tracking-widest uppercase text-white/70">
          <a href="#services" className="hover:text-spark-yellow transition-colors">Servicios</a>
          <a href="#success" className="hover:text-spark-yellow transition-colors">Casos</a>
          <a href="#contact" className="hover:text-spark-yellow transition-colors">Contacto</a>
          <a href="https://wa.me/5491167908333" className="btn-outline">Hablar con un consultor</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-deep-space border-b border-white/10 p-6 flex flex-col gap-6 font-display text-center tracking-widest uppercase"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#success" onClick={() => setMobileMenuOpen(false)}>Casos</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          <button className="btn-primary">Agendar Ahora</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
    {/* Abstract Background Elements from Minimalism theme */}
    <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-lilac/10 rounded-full blur-[140px]" />
    <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-spark-yellow/5 rounded-full blur-[120px]" />

    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center px-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <span className="text-lilac font-display text-sm tracking-[0.3em] uppercase block">Human-Centric Automation</span>
        <h1 className="text-5xl md:text-6xl font-light leading-tight">
          Automatización con alma: <br />
          <span className="font-bold">Recupera tu activo más valioso.</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed font-sans">
          En Hike diseñamos flujos de trabajo que trabajan por ti, eliminando la fricción operativa para devolverte la libertad del tiempo.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
            Optimizar mi tiempo ahora
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative hidden md:block"
      >
        <div className="glass-card p-8 aspect-square flex items-center justify-center border-white/10 relative overflow-hidden group">
          <motion.div 
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-spark-yellow)_0%,_transparent_70%)]"
          />
          <div className="text-center relative z-10">
            <Clock size={80} className="text-spark-yellow mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl font-bold">+2000</h2>
            <p className="text-white/40 tracking-widest text-sm">HORAS RECUPERADAS</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Auditoría de Procesos",
      desc: "Identificación precisa de cuellos de botella y fugas de productividad en tu infraestructura actual.",
      icon: <BarChart3 className="text-lilac" size={32} />
    },
    {
      title: "Flujos Autónomos",
      desc: "Implementación de IA y automatización inteligente que escala con tu negocio sin sacrificar la calidad.",
      icon: <Cpu className="text-spark-yellow" size={32} />
    },
    {
      title: "Dashboard de Tiempo",
      desc: "Visualización en tiempo real del tiempo recuperado y el impacto directo en tus márgenes operativos.",
      icon: <Clock className="text-white" size={32} />
    }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-12 h-1 bg-spark-yellow mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-10 hover:border-white/40 transition-all duration-500"
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const cases = [
    {
      company: "Innovate Global",
      metric: "70%",
      label: "Reducción en tareas administrativas",
      text: "Hike transformó nuestra manera de operar. Ahora mi equipo se enfoca en crear, no en procesar."
    },
    {
      company: "Nexus Creative",
      metric: "45h",
      label: "Recuperadas por semana",
      text: "La implementación de flujos autónomos nos permitió escalar sin contratar más personal operativo."
    }
  ];

  return (
    <section id="success" className="py-32 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-white/40 font-display tracking-widest text-sm">MÉTRICAS QUE IMPORTAN</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((c, idx) => (
            <div key={idx} className="flex gap-8 items-start border-l border-white/10 pl-8">
              <div className="text-lilac">
                <span className="text-5xl font-bold leading-none">{c.metric}</span>
              </div>
              <div>
                <p className="text-lg italic text-white/80 mb-4 font-sans">&quot;{c.text}&quot;</p>
                <p className="text-spark-yellow font-display text-xs tracking-widest uppercase">{c.company}</p>
                <p className="text-white/30 text-xs mt-1">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 italic tracking-tight normal-case">¿Listo para recuperar tu tiempo?</h2>
        <p className="text-white/60">Completa el formulario y un consultor senior se pondrá en contacto contigo.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass-card p-10 relative"
      >
        <form action="https://formspree.io/f/mqakvjnd" method="POST" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 block">Nombre</label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spark-yellow transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 block">Empresa</label>
              <input 
                type="text" 
                name="company" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spark-yellow transition-colors"
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 block">Email</label>
            <input 
              type="email" 
              name="email" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spark-yellow transition-colors"
              placeholder="email@tuempresa.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-white/50 block">Proceso que deseas automatizar</label>
            <textarea 
              name="message" 
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spark-yellow transition-colors"
              placeholder="Cuéntanos cuál es tu desafío actual..."
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full py-4 tracking-widest uppercase mt-4">
            Enviar Consulta
          </button>
        </form>
      </motion.div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-10 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex flex-wrap justify-center md:justify-start gap-12">
        <div className="space-y-1">
          <div className="text-3xl font-bold text-lilac">70%</div>
          <div className="text-[10px] uppercase tracking-widest opacity-60">Reducción de carga admin</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-lilac">+150h</div>
          <div className="text-[10px] uppercase tracking-widest opacity-60">Mensuales recuperadas</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold text-lilac">98%</div>
          <div className="text-[10px] uppercase tracking-widest opacity-60">Eficacia operativa</div>
        </div>
      </div>

      <div className="text-center md:text-right">
        <p className="italic text-white/50 text-sm mb-4">
          "Hike transformó nuestra logística, permitiéndonos enfocarnos en el cliente."
        </p>
        <p className="text-[10px] uppercase tracking-wider font-bold text-white">— CEO, Logistics Global</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-spark-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating WhatsApp for Mobile/Global visibility */}
      <motion.a 
        href="https://wa.me/5491167908333" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/40 md:hidden"
      >
        <MessageSquare size={30} fill="white" className="text-white" />
      </motion.a>
    </div>
  );
}
