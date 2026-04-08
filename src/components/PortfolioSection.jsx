import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding relative dot-pattern">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          My <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A selection of projects showcasing my skills across the full stack.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 px-4 md:px-20">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover group overflow-hidden rounded-none border border-border/50"
          >
            <div className={`h-52 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-glow-primary/5 group-hover:bg-glow-primary/10 transition-colors" />
              <ExternalLink className="text-glow-primary opacity-30 group-hover:opacity-60 transition-opacity" size={36} />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="font-heading font-semibold text-xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-glow-primary/10 text-glow-primary border border-glow-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
