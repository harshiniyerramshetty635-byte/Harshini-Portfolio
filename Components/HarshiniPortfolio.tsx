import React from "react";
import Image from "next/image";

export default function HarshiniPortfolio() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {/* ✅ Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Harshini Yerramshetty</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* ✅ Home / Hero */}
      <section id="home" className="py-20 text-center">
        <Image src="/profile.jpg" alt="Profile" width={120} height={120} className="rounded-full mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-2">Hi, I&apos;m Harshini</h2>
        <p className="text-lg text-slate-600">Senior Data Analyst • Turning data into insights</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/resume.pdf" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Download Resume
          </a>
          <a href="#contact" className="px-5 py-2 border border-slate-300 rounded-lg hover:bg-slate-100">
            Contact Me
          </a>
        </div>
      </section>

      {/* ✅ About */}
      <section id="about" className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-slate-600">
          I am a Senior Data Analyst with 4+ years of experience in banking, insurance, and telecom. 
          Skilled in Python, SQL, BI tools, and predictive modeling. Passionate about solving 
          business problems with data.
        </p>
      </section>

      {/* ✅ Skills */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
            <span className="px-4 py-2 border rounded-lg">Python</span>
            <span className="px-4 py-2 border rounded-lg">SQL</span>
            <span className="px-4 py-2 border rounded-lg">Power BI</span>
            <span className="px-4 py-2 border rounded-lg">Tableau</span>
            <span className="px-4 py-2 border rounded-lg">Pandas</span>
            <span className="px-4 py-2 border rounded-lg">NumPy</span>
            <span className="px-4 py-2 border rounded-lg">Scikit-learn</span>
            <span className="px-4 py-2 border rounded-lg">Hadoop</span>
            <span className="px-4 py-2 border rounded-lg">Spark</span>
            <span className="px-4 py-2 border rounded-lg">AWS</span>
          </div>
        </div>
      </section>

      {/* ✅ Experience */}
      <section id="experience" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Experience</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Senior Data Analyst – RABO BANK</h4>
              <p className="text-sm text-slate-500">Sept 2024 – Present</p>
              <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                <li>Led data collection and transformation with Python/SQL</li>
                <li>Developed dashboards in Power BI & Tableau</li>
                <li>Automated reporting processes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Data Analyst – Argo Group</h4>
              <p className="text-sm text-slate-500">Nov 2023 – Aug 2024</p>
              <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                <li>Developed optimized SQL queries</li>
                <li>Built interactive dashboards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Data Analyst – Viasat</h4>
              <p className="text-sm text-slate-500">2021 – 2023</p>
              <ul className="list-disc list-inside text-sm text-slate-600 mt-2">
                <li>Worked on network reliability analytics</li>
                <li>Automated reporting with ETL pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Projects */}
      <section id="projects" className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold">Churn Prediction</h4>
              <p className="text-sm text-slate-600">Built churn prediction and CLV models.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold">ETL Automation</h4>
              <p className="text-sm text-slate-600">Automated reporting workflows with Python & SQL.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold">Network Dashboards</h4>
              <p className="text-sm text-slate-600">Interactive dashboards to monitor reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Education */}
      <section id="education" className="py-16 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <p className="text-slate-600">Master’s in Business Analytics – Webster University</p>
      </section>

      {/* ✅ Contact */}
      <section id="contact" className="py-16 text-center bg-slate-50">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-slate-600 mb-4">Email: 
          <a href="mailto:harshiniyerramshetty01@gmail.com" className="text-indigo-600 ml-1">
            harshiniyerramshetty01@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com" className="px-4 py-2 border rounded-lg">LinkedIn</a>
          <a href="https://github.com" className="px-4 py-2 border rounded-lg">GitHub</a>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Harshini Yerramshetty — Data Analyst
      </footer>
    </div>
  );
}



