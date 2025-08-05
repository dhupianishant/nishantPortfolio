"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Layout,
  Palette,
  Smartphone,
  Server,
  Globe,
  Cpu,
  LineChart,
  ShieldCheck,
  Layers,
  Workflow,
} from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    description: "React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Markdown",
  },
  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    description: ".NET Core, C#, Node.js, Express.js, Python, RESTful APIs",
  },
  {
    name: "Database Management",
    icon: <Database className="h-6 w-6" />,
    description: "SQL Server, MongoDB, PostgreSQL, MySQL",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    description: "Figma, Adobe XD, Responsive Design, Accessibility",
  },
  {
    name: "Cloud & DevOps",
    icon: <Code className="h-6 w-6" />,
    description: "Microsoft Azure, Git, Vercel, Netlify, Railway",
  },
  {
    name: "AI Integration",
    icon: <Cpu className="h-6 w-6" />,
    description: "OpenAI, Machine Learning APIs, Gemini API, Clerk, Neon",
  },
  {
    name: "Security",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "Authentication, Authorization, Data Protection",
  },
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">About Me</h2>
        <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Code enthusiast turning ideas into elegant digital experiences. Driven by curiosity, powered by coffee, and always building something new.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">My Story</h3>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>
            A Computer Science & Engineering graduate from Jaipur Engineering College & Research Centre, I’m passionate about using technology to build practical, real-world solutions — a drive that led me into software development where logic meets creativity.
            </p>
            <p>
            Currently a Software Engineer at Capgemini, I specialize in building cloud-based, scalable applications using .NET Core, C#, Azure, and SQL Server, with a strong eye for clean architecture and user experience.
            </p>
            <p>
            When I’m not coding, you’ll find me recharging with sleep, discovering cozy cafes, riding my bike, or exploring new places behind the wheel.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Education</h3>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <div>
              <h4 className="font-semibold">Jaipur Engineering College & Research Centre, Jaipur</h4>
              <p>B. Tech in Computer Science & Engineering, 2021-2025</p>
            </div>
            <div>
              <h4 className="font-semibold">St. Stephen's Sr. Sec. School, Ajmer</h4>
              <p>High Schooling, 2021</p>
            </div>
            <div>
              <h4 className="font-semibold">St. Stephen's Sr. Sec. School, Ajmer</h4>
              <p>Secondary Schooling, 2019</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl font-bold mb-8 text-center text-black dark:text-white"
      >
        My Skills
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full hover:shadow-md transition-shadow border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">{skill.name}</h4>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300">{skill.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
