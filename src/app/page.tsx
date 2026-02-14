import Image from "next/image";
import ProjectCard from '@/components/portfolio/ProjectCard'
import Link from "next/link";

const projects = [
  {
    title: "FreeSeed",
    description: "Dedicated to promoting open-source culture and free software.",
    imageUrl: "/project1.jpg",
    tags: ["Figma", "Asana"],
    link: "https://ocf.tw/p/freeseed/"
  },
  {
    title: "AI Drug Recognition System",
    description: "A drug recognition system developed with machine learning to help users quickly identify medications.",
    imageUrl: "/project2.png",
    tags: ["Google Colab", "TypeScript", "Firebase"],
    link: "https://www.canva.com/design/DAGmkSgJqaQ/wBVJollylvWXYJSNCyNATg/edit"
  },
  {
    title: "MRT Hackathon Project 🚧",
    description: "An improved redesign prototype built with Figma.",
    imageUrl: "/project3.png",
    tags: ["Figma", "Tailwind CSS", "TypeScript"],
    link: "#"
  },
  {
    title: "Magical Well Motion Capture Project",
    description: "Digital motion capture project for Wasami Company.",
    imageUrl: "/project4.png",
    tags: [],
    link: "#"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900"></h1>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="relative w-12 h-12">
                <Image
                  src="/Personal_logo.png"
                  alt="Logo"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>



          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-12">@Morris Lin All Rights Reserved</p>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed font-medium text-gray-800 tracking-tight">
              Hey, I&apos;m <span className="font-bold text-gray-900">Morris</span>
              {" "}a <span className="font-bold text-gray-900">Project Designer</span>,
              <br className="hidden sm:block" />
              {" "}based in 📍 <span className="font-bold text-gray-900">Taipei</span>,
              <br className="hidden sm:block" />
              {" "}love 🐱 cats, 🎬 filmmaking,
              <br className="hidden sm:block" />
              {" "}and crafting <span className="font-bold text-gray-900">UX experiences</span>.
            </h1>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="#portfolio"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors"
            >
              My Work
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 transition-colors"
            >
              Let&apos;s connect
            </a>
          </div>
        </div>
      </section>

      {/* Section Navigator */}
      <nav className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            <a href="#partners" className="shrink-0 px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Partners</a>
            <a href="#experience" className="shrink-0 px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Experience</a>
            <a href="#portfolio" className="shrink-0 px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Projects</a>
            <a href="#about" className="shrink-0 px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">About</a>
            <a href="#contact" className="shrink-0 px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Partnered With Section */}
      <section id="partners" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest text-center mb-8">partnered with</p>
          <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
            <div className="relative w-[100px] h-[100px]">
              <Image src="/partners/meta.png" alt="Meta" fill className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
            <div className="relative w-[110px] h-[110px]">
              <Image src="/partners/nccu.png" alt="NCCU" fill className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
            <div className="relative w-[100px] h-[100px]">
              <Image src="/partners/logo.webp" alt="OCF" fill className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
            <div className="relative w-[110px] h-[110px]">
              <Image src="/partners/wasami.png" alt="Wasami" fill className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
            <div className="relative w-[100px] h-[100px]">
              <Image src="/partners/moda.png" alt="MODA" fill className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">Work Experience</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2025 — present</span>
              <div>
                <p className="font-medium text-gray-900">Project Intern at Institute for Information Industry (III)</p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2025</span>
              <div>
                <p className="font-medium text-gray-900">Research Scholarship Recipient at Meta</p>
                <p className="mt-1 text-sm text-gray-500">Selected as a Meta Scholarship recipient (Class of 2025) and awarded 7,000 USD to complete studies in AI agents and the Metaverse.</p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2025 — 2026</span>
              <div>
                <p className="font-medium text-gray-900">Research Assistant at NCCU</p>
                <p className="mt-1 text-sm text-gray-500">Led scripting and content production for VR materials used as core stimuli in user studies.</p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2025 — 2025</span>
              <div>
                <p className="font-medium text-gray-900">UX Designer at Open Culture Foundation</p>
                <p className="mt-1 text-sm text-gray-500">Designed the whole UX experience and user interface for FreeSEED.</p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2025 — 2025</span>
              <div>
                <p className="font-medium text-gray-900">Teaching Assistant at NCCU</p>
                <p className="mt-1 text-sm text-gray-500">Teaching assistant for the Bachelor&apos;s program in the College of Communication, NCCU.</p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2021 — 2022</span>
              <div>
                <p className="font-medium text-gray-900">Project Intern at OMNInsight Co., Ltd</p>
                <p className="mt-1 text-sm text-gray-500">Supported the completion of digital projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">Featured Projects</h2>
          <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4">
            {projects.map((project, index) => (
              <div key={index} className="snap-start shrink-0 w-[300px] sm:w-[340px]">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-10">About Me</h2>

          {/* Education + Awards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">education</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-8">
                  <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2024 — present</span>
                  <div>
                    <p className="font-medium text-gray-900">National Chengchi University (NCCU)</p>
                    <p className="mt-1 text-sm text-gray-500">Master's Program in Communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2020 — 2024</span>
                  <div>
                    <p className="font-medium text-gray-900">Shih Hsin University</p>
                    <p className="mt-1 text-sm text-gray-500">Department of Radio, Television & Film</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">awards</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-gray-900">Sound Design for Short Film "Summer of Farewell"</p>
                  <p className="mt-1 text-sm text-gray-500">Kaohsiung Film Festival — Best Student Narrative Film</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sound Design for Short Film "Blossoming"</p>
                  <p className="mt-1 text-sm text-gray-500">New Taipei City Student Film Rising Star Award — Nominee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Work */}
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">academic work</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2025 — 2026</span>
              <p className="font-medium text-gray-900">Prof. Tammy Lin's Media Psychology Lab</p>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2024 — present</span>
              <p className="font-medium text-gray-900">Prof. Tsung-Yu Hou's Social Intelligence Technologies Experimental Studio</p>
            </div>
            <div className="flex items-start gap-8">
              <span className="text-sm text-gray-400 whitespace-nowrap w-32 shrink-0 pt-0.5">2024 — present</span>
              <p className="font-medium text-gray-900">Prof. YiHsiu Chen's Intelligent Interaction Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Let&apos;s discuss your next project
            </p>
          </div>
          {/* New Contact Info Layout */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <p className="text-lg text-gray-700 mb-4">
                UI/UX designer, Project manager, SFX designer
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/m.lin910310?locale=zh_TW" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Facebook</a>
                <a href="https://www.linkedin.com/in/morris-lin-a46974222/" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">LinkedIn</a>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-col items-start md:items-end text-lg text-gray-700 space-y-2">
              <p>mlin910310@gmail.com</p>
              <p>113464051@g.nccu.edu.tw</p>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
