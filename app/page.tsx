import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"
import HomeSection from "@/components/sections/home-section"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import ExperienceSection from "@/components/sections/experience-section"
import EducationSection from "@/components/sections/education-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"
import BackgroundPaths from "@/components/kokonutui/background-paths"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Background paths for the entire page - increased opacity */}
      <div className="fixed inset-0 z-0 opacity-65 pointer-events-none overflow-hidden">
        <BackgroundPaths title="" />
      </div>

      <Navbar />

      <div className="flex flex-col relative z-10">
        <section id="home" className="min-h-screen">
          <HomeSection />
        </section>

        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="experience" className="min-h-screen">
          <ExperienceSection />
        </section>

        <section id="education" className="min-h-screen">
          <EducationSection />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
