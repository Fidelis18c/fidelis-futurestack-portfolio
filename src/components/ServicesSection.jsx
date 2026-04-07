import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Responsive, performant UIs with React  and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Scalable APIs and server-side logic with Node.js, Express, and cloud services.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Efficient data modeling with PostgreSQL, MongoDB, Redis, and Prisma ORM.",
  },
 
];



const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Services & <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          End-to-end development expertise to bring your vision to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-glow-primary/10">
              <s.icon className="text-glow-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      
    </div>
  </section>
);

export default ServicesSection;

