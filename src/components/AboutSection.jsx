import { motion } from "framer-motion";
import { Code2, Globe, TrendingUp } from "lucide-react";
import reactLogo from "@/assets/React.png";
import nodeLogo from "@/assets/Node.js.png";
import expressLogo from "@/assets/Express.png";
import postgresLogo from "@/assets/PostgresSQL.png";
import tailwindLogo from "@/assets/Tailwind CSS.png";
import JavaScriptLogo from "@/assets/JavaScript.png";
import MySQLLogo from "@/assets/MySQL.png";

const cards = [
  {
    icon: Code2,
    title: "Full-stack Development",
    desc: "I build both the face of the website that users see and the brain behind the scenes that handles data.",
  },
  {
    icon: Globe,
    title: "API integration",
    desc: "Connecting your platform to third-party services and live databases to ensure seamless, real-time data flow.",
   },
  {
    icon: TrendingUp,
    title: "Landing Page and Responsive design",
    desc: "I create high-impact, single-page websites designed to turn visitors into customers, ensuring a seamless and fully responsive experience across all devices.",
  },
];

 const techStack = [
  { name: "React", src: reactLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Express", src: expressLogo },
  { name: "PostgreSQL", src: postgresLogo },
  { name: "Tailwind", src: tailwindLogo },
  { name: "JavaScript", src: JavaScriptLogo },
  { name: "MySQL", src: MySQLLogo },
];

// section-padding
const AboutSection = () => (
  <section id="about" className="section-padding relative"> 
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          What I <span className="gradient-text">Do</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm a fullstack developer who thrives on building impactful digital products.
          With expertise spanning frontend, backend, and database technologies,
          I craft solutions that solve real problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 py-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card-hover p-4 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center bg-glow-primary/10">
              <c.icon className="text-glow-primary" size={28} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
       
     <div>
           <div>
             <h1 className="font-heading text-1xl md:text-2xl md:text-center font-bold mt-10">Tech stack</h1>
           </div>

        <div className="w-full overflow-hidden bg-transparent py-12">

            <motion.div
              className="flex"
              animate={{
              x: ["0%", "-50%"], // Moves from start to halfway (the end of the first set)
              }}
              transition={{
              ease: "linear",
              duration: 20, // Adjust this number to make it faster (10) or slower (30)
              repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
             >

                 {/* The Container that moves */}
        <div className="flex animate-marquee whitespace-nowrap">
           {techStack.map((tech, index) => (
          <div 
             key={index} 
             className="flex flex-col items-center justify-center mx-12 min-w-[100px]"
             >
                       {/* The Image */}
            <img 
              src={tech.src} 
              alt={tech.name} 
              className="h-14 w-14 object-contain mb-4 hover:scale-110 transition-transform" 
            />
                      {/* The Text below */}
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
       </div>
         </motion.div>
    </div>

       </div>
  
    </div>
  </section>
);

export default AboutSection;

