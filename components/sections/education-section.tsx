"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    id: 1,
    title: "Bachelor's in Computer Science & Engineering",
    institution: "Jaipur Engineering College and Research Centre",
    period: "2021 - 2025",
    description:
      "CGPA: 7.91/10.0",
  },
  {
    id: 2,
    title: "High School",
    institution: "St. Stephen's Sr. Sec. School, Ajmer",
    period: "2020 - 2021",
    description: "Score: 94.4%",
  },
  {
    id: 3,
    title: "Secondary School",
    institution: "St. Stephen's Sr. Sec. School, Ajmer",
    period: "2018 - 2019",
    description: "Score: 92.2%",
  },
]

const certifications = [
  {
    id: 1,
    title: "Introduction to Front-End Development",
    institution: "Meta",
    period: "May 2025",
    description: "All-inclusive certification covering HTML, CSS, JavaScript, and responsive design principles.",
  },
  {
    id: 2,
    title: "SQL (Intermediate)",
    institution: "HackerRank",
    period: "Apr 2025",
    description: "Extensive certification covering advanced SQL queries, joins, aggregations, and data analysis techniques.",
  },
  {
    id: 3,
    title: "JavaScript (Basic)",
    institution: "HackerRank",
    period: "Apr 2025",
    description: "Comprehensive certification covering core JavaScript concepts, syntax, and fundamental programming techniques.",
  },
  {
    id: 4,
    title: "SQL (Basic)",
    institution: "HackerRank",
    period: "May 2024",
    description: "All-encompassing certification covering fundamental SQL querying, data retrieval, and database manipulation.",
  },
  {
    id: 5,
    title: "Basics of Web Development",
    institution: "DevTown",
    period: "Aug 2022",
    description: "Wide-ranging certification covering HTML, CSS, and Bootstrap.",
  },
  {
    id: 6,
    title: "Machine Learning with Python (Basics)",
    institution: "UpFlairs Pvt. Ltd.",
    period: "Aug 2022",
    description: "Inclusive certification covering Python programming, data analysis, and machine learning fundamentals.",
  },
]

export default function EducationSection() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Education & Certifications</h2>
        <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          My academic background and professional certifications that have built my knowledge foundation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-black dark:text-white text-center md:text-left"
          >
            Education
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <EducationItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-black dark:text-white text-center md:text-left"
          >
            Certifications
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {certifications.map((item, index) => (
                <EducationItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EducationItem({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      className="relative pl-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-black dark:bg-white z-10 flex items-center justify-center">
        <GraduationCap className="h-3 w-3 text-white dark:text-black" />
      </div>

      {/* Content */}
      <Card className="overflow-hidden border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="mb-2 text-sm font-medium text-black dark:text-white">{item.period}</div>
          <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{item.title}</h3>
          <div className="text-neutral-700 dark:text-neutral-300 font-medium mb-3">{item.institution}</div>
          <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
