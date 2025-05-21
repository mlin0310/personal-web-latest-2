import Image from "next/image";
import ProjectCard from '@/components/portfolio/ProjectCard'
import Link from "next/link";

const projects = [
  {
    title: "FreeSeed-自由種子",
    description: "致力於推廣開源文化與自由軟體。",
    imageUrl: "/project1.jpg",
    tags: ["Figma", "Asana"],
    link: "https://ocf.tw/p/freeseed/"
  },
  {
    title: "AI藥物辨識系統",
    description: "使用機器學習技術開發的藥物辨識系統，幫助使用者快速識別藥物。",
    imageUrl: "/project2.png",
    tags: ["Google Colab", "TypeScript", "Firebase"],
    link: "https://www.canva.com/design/DAGmkSgJqaQ/wBVJollylvWXYJSNCyNATg/edit"
  },
  {
    title: "捷運黑客松專案 🚧",
    description: "使用Figma開發的改善版本。",
    imageUrl: "/project3.png",
    tags: ["Figma", "Tailwind CSS", "TypeScript"],
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
          
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#portfolio" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">Portfolio</a>
                <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="#contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I&apos;m</span>
              <span className="block text-yellow-500">Morris Lin</span>
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                <Image
                  src="/profile.jpg.png"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              設計師和影視工作者，喜歡貓。
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                >
                  My Work 📥
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A selection of my recent work
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Get to know more about my journey and expertise
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">學歷 🏫</h3>
              <div className="text-gray-600 space-y-4">
                <p className="font-medium">2024-present</p>
                <p className="flex items-center gap-2">
                  國立政治大學 傳播碩士學位學程
                  <div className="relative w-4 h-4">
                  </div>
                </p>
                <p className="font-medium mt-4">2020-2024</p>
                <p>世新大學 廣播電視電影學系</p> 
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">工作經驗 💼</h3>
              <div className="text-gray-600 space-y-6">
                <div>
                  <p className="font-medium">2025/03-present</p>
                  <p>林日璇教授媒體心理實驗室 - 研究助理</p>
                </div>
                <div>
                  <p className="font-medium">2025/03-04</p>
                  <p>自由種子計畫 - 使用者經驗開發人員</p>
                </div>
                <div>
                  <p className="font-medium">2024/11-12</p>
                  <p>台北金馬影展執行委員會 - 工作人員</p>
                </div>
                <div>
                  <p className="font-medium">2021/09-2022/04</p>
                  <p>詮識數位 - 專案實習生</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">獲獎紀錄 🏆</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">作品名稱</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>音效之短片作品《海龜少年》</li>
                    <li>音效之短片作品《梅花梅花幾月開》</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">榮譽</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>高雄電影節台灣組：最佳學生劇情片</li>
                    <li>新北市學生影像新星獎：入選</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">學術工作 📚</h3>
              <div className="text-gray-600 space-y-4">
                <p>
                  國科會計畫-計畫主持人：林日璇教授
                </p>
              </div>
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
    </main>
  );
}
