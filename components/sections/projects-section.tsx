"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

// Ensure all category values are trimmed and lowercase
const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "python", name: "Python" },
  { id: "ai", name: "AI Projects" },
  { id: "ml", name: "ML Projects" },
]

const projects = [
  {
    id: 1,
    title: "Hiyasa",
    description: "A full-featured e-commerce platform built with CSS, JavScript, PhonePe, Razorpay, and Shopify. Includes product management, cart functionality, and secure checkout.",
    image: "/hiyasa.png",
    tags: ["Shopify", "CSS", "JavaScript", "Animations"],
    liveUrl: "https://hiyasadesign.com/",
    githubUrl: "https://github.com/dhupianishant/hiyasaDesign",
    category: "web",
  },
  {
    id: 2,
    title: "CareerCatalyst",
    description: "A platform for professionals to ace their interviews. Built with Next.js, Express.js, and PostgreSQL.",
    image: "/careerCatalyst.png",
    tags: ["React.js", "Next.js", "Express.js", "Material UI", "Clerk", "NeonDB", "PostgreSQL"],
    liveUrl: "https://careercatalyst.dhupianishant.in/",
    githubUrl: "https://github.com/dhupianishant/careerCatalyst",
    category: "web",
  },
  {
    id: 3,
    title: "SnapSound",
    description: "An AI-powered music recommendation system that suggests songs based on user preferences. Built with React.js and Express.js.",
    image: "/snapSound.png",
    tags: ["JavaScript", "React.js", "Express.js", "Clarifai API", "Spotify API"],
    liveUrl: "https://snapsound.dhupianishant.in/",
    githubUrl: "https://github.com/dhupianishant/snapSound",
    category: "ai",
  },
  {
    id: 4,
    title: "Sync.io",
    description: "An HTTP based file-sharing server. Built with GoLang, React.js, and Tailwind CSS.",
    image: "/syncio.png",
    tags: ["GoLang", "Tailwind CSS", "React.js", "Material UI"],
    liveUrl: "https://github.com/KhushalJangid/sync.io/releases",
    githubUrl: "https://github.com/KhushalJangid/sync.io",
    category: "web",
  },
  {
    id: 5,
    title: "Login/Signup Page",
    description: "A simple login and signup page built with HTML, CSS, and JavaScript. Features form validation and responsive design.",
    image: "/loginSignup.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://dhupianishant.github.io/loginSignupPage/",
    githubUrl: "https://github.com/dhupianishant/loginSignupPage",
    category: "web",
  },
  {
    id: 6,
    title: "To-Do List",
    description: "A simple to-do list application built with Python, Tkinter, and MySQL. Users can add, edit, update, and delete tasks.",
    image: "/todoList.png",
    tags: ["Python", "MySQL Server", "Tkinter"],
    liveUrl: "https://github.com/dhupianishant/todoListPython",
    githubUrl: "https://github.com/dhupianishant/todoListPython",
    category: "python",
  },
  {
    id: 7,
    title: "House Rent Prediction",
    description: "A desktop application that predicts house prices based on user inputs using machine learning algorithms.",
    image: "/houseRentPrediction.jpg",
    tags: ["Python", "Tkinter", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Pickle"],
    liveUrl: "https://github.com/dhupianishant/House-Rent-Prediction",
    githubUrl: "https://github.com/dhupianishant/House-Rent-Prediction",
    category: "ml",
  },
  {
    id: 8,
    title: "CO2 Emissions",
    description: "CO2 emissions prediction model using machine learning. Built with Python and Scikit-learn.",
    image: "/co2Emission.jpg",
    tags: ["Python", "Tkinter", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Pickle"],
    liveUrl: "https://github.com/dhupianishant/co2Emmisions",
    githubUrl: "https://github.com/dhupianishant/co2Emmisions",
    category: "ml",
  },
  {
    id: 9,
    title: "Advanced Task Manager",
    description: "A task management application with user authentication, and real-time updates. Built with Node.js and Express.",
    image: "/taskManager.png",
    tags: ["Node.js", "Express.js", "CORS", "RESTFUL APIs"],
    liveUrl: "https://github.com/dhupianishant/taskManager",
    githubUrl: "https://github.com/dhupianishant/taskManager",
    category: "web",
  },
  {
    id: 10,
    title: "BrewHaven",
    description: "A sleek, responsive coffee website to blend bold design with smooth user experience.",
    image: "/brewHaven.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://dhupianishant.github.io/brewHaven/",
    githubUrl: "https://github.com/dhupianishant/brewHaven",
    category: "web",
  },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects
    return projects.filter(
      (project) => project.category.trim().toLowerCase() === activeCategory
    )
  }, [activeCategory])

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-wrap">
          My Projects
        </h2>
        <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Here are some of my recent projects. Each one was built to solve a specific problem and demonstrates different
          aspects of my technical skills.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </Button>
        ))}
      </motion.div>

      {filteredProjects.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-center text-neutral-500">
            No projects found in this category.
          </p>
        </motion.div>
      ) : (
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}>
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden h-full flex flex-col border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" className="border-neutral-300 dark:border-neutral-700" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        <Button
          size="sm"
          className="bg-black hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black"
          asChild
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  )
}
