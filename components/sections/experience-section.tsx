"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const workExperience = [
  {
    id: 0,
    title: "Software Engineer",
    company: "Capgemini",
    period: "Jun 2025 - Present",
    description: "Currently developing scalable enterprise applications using .NET Core, C#, Azure, and SQL Server."  
  },
  {
    id: 1,
    title: "Web Developer",
    company: "Hiyasa Design",
    period: "Apr 2025 - Jun 2025",
    description:
      "Lead developer for enterprise web application. Architected and implemented scalable solution using Shopify API, Liquid, CSS, JavaScript. Collaborated with design and marketing teams to ensure seamless deployemnt and client satisfaction.",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Cognifyz Technologies",
    period: "Jun 2024 - Jul 2024",
    description:
      "Developed and optimized responsive web applications using HTML5 and CSS3. Collaborated with designers to implement pixel-perfect UI. Improved site performance by 20% through code optimization and lazy loading.",
  },
]

export default function ExperienceSection() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Work Experience</h2>
        <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          My professional journey that has shaped my skills and expertise in software development.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {workExperience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-black dark:bg-white z-10 flex items-center justify-center">
        <Briefcase className="h-3 w-3 text-white dark:text-black" />
      </div>

      {/* Content */}
      <div className={`md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-10 md:pl-0`}>
        <Card className="overflow-hidden border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="mb-2 text-sm font-medium text-black dark:text-white">{item.period}</div>
            <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{item.title}</h3>
            <div className="text-neutral-700 dark:text-neutral-300 font-medium mb-3">{item.company}</div>
            <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
