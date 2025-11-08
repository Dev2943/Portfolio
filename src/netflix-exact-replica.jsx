import React, { useState } from 'react';

export default function NetflixPortfolio() {
  const [hoveredId, setHoveredId] = useState(null);

  // YOUR PROJECTS
  const projects = [
    {
      id: 1,
      title: "Stock Market Analysis Platform",
      description: "Built a real-time stock market analysis dashboard with Python and Streamlit, featuring risk assessment and ML-based forecasting, deployed on Streamlit Cloud.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=281&fit=crop",
      tags: ["Python", "FinTech", "MachineLearning"],
      github: "https://github.com/Dev2943/stock-market-dashboard",
      demo: "https://dev2943-stock-market-dashboard-dashboard.streamlit.app"
    },
    {
      id: 2,
      title: "Restaurant Sentiment Analyzer Pro",
      description: "Advanced NLP pipeline with TextBlob, VADER, and ensemble ML models analyzing 750+ restaurant reviews. Features multi-restaurant comparison, topic modeling, real-time sentiment analysis, and automated business insights with 85%+ accuracy.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=281&fit=crop",
      tags: ["Python", "NLP", "Streamlit", "MachineLearning"],
      github: "https://github.com/Dev2943/restaurant-sentiment-analyzer",
      demo: "https://dev2943-restaurant-sentiment-analyzer.streamlit.app" 
    },
    {
      id: 3,
      title: "SQL Data Analysis Project",
      description: "Comprehensive SQL queries for data extraction, transformation and analysis on large datasets.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=281&fit=crop",
      tags: ["SQL", "Database", "Analytics"],
      github: "https://github.com/Dev2943/sql-analysis",
      demo: "https://github.com/Dev2943/sql-analysis"
    },
    {
      id: 4,
      title: "Python Data Visualization",
      description: "Data visualization projects using Python libraries like Matplotlib, Seaborn, and Plotly for insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=281&fit=crop",
      tags: ["Python", "Visualization", "Pandas"],
      github: "https://github.com/Dev2943/data-viz",
      demo: "https://github.com/Dev2943/data-viz"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      
      {/* Netflix Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl md:text-4xl font-bold tracking-tight">
              PORTFOLIO
            </h1>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#home" className="hover:text-gray-300 transition">Home</a>
              <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
              <a href="#about" className="hover:text-gray-300 transition">About</a>
              <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center px-4 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Dev Golakiya
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Data Analyst | Business Analytics Specialist
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              Hey there! I'm Dev Golakiya — a data-driven person who enjoys finding patterns and turning numbers into stories. 
              I focus on analyzing data, building dashboards, and helping businesses make better decisions. I've worked on projects 
              involving Excel, Power BI, Python, and SQL, where I explored sales trends, forecasts, and insights that actually drive results.
              <br/><br/>
              I like connecting the technical side with the business side — making data simple, clear, and useful.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="flex items-center bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition font-semibold">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                View Projects
              </a>
              <a href="#about" className="flex items-center bg-gray-700 bg-opacity-70 text-white px-6 py-3 rounded hover:bg-opacity-50 transition font-semibold">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="relative z-10 -mt-32 px-4 md:px-12 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative overflow-hidden rounded transition-all duration-300 ${
                hoveredId === project.id ? 'scale-105 z-50' : 'scale-100'
              }`}>
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                </div>

                {/* Always Visible Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>

                {/* Hover Info - FIXED STRUCTURE */}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-zinc-900 bg-opacity-95 p-4 flex flex-col justify-between overflow-y-auto">
                    {/* Top Content Group */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      
                      <p className="text-sm text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zinc-800 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Buttons Group */}
                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                        </svg>
                        Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="px-4 md:px-12 py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - About Text */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm <span className="text-red-600 font-semibold">Dev Golakiya</span>, a passionate Data Analyst who loves 
                turning raw data into actionable insights. With a strong foundation in business analytics, I bridge the gap 
                between complex data and strategic decision-making.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise lies in extracting meaningful patterns from data, building interactive dashboards, and 
                presenting findings in a way that drives business value. I believe that good analytics isn't just about 
                the numbers—it's about telling the story behind them.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not diving into datasets, you'll find me exploring new visualization techniques, learning about 
                the latest analytics tools, or working on projects that combine my love for data with real-world problem solving.
              </p>
            </div>

            {/* Right Column - Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              
              <div className="space-y-6">
                {/* Data Analysis */}
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Data Analysis & Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Python</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Power BI</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Excel</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Tableau</span>
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Database & Querying</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">SQL</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">MySQL</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">PostgreSQL</span>
                  </div>
                </div>

                {/* Libraries */}
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Python Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Pandas</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">NumPy</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Matplotlib</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Seaborn</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Plotly</span>
                  </div>
                </div>

                {/* Machine Learning */}
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Scikit-learn</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Predictive Modeling</span>
                    <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Forecasting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="px-4 md:px-12 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12">
            Interested in working together or just want to say hi? Feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a 
              href="mailto:devgolakiya31@gmail.com"
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition group"
            >
              <svg className="w-12 h-12 mx-auto mb-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-white transition">devgolakiya31@gmail.com</p>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Dev2943"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition group"
            >
              <svg className="w-12 h-12 mx-auto mb-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-gray-400 group-hover:text-white transition">@Dev2943</p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/devgolakiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition group"
            >
              <svg className="w-12 h-12 mx-auto mb-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-white transition">Dev Golakiya</p>
            </a>
          </div>

          {/* Download Resume */}
          <a 
            href="https://drive.google.com/file/d/144I6Vnd5QfVWu780qQjfF-DdRnBI6by8/view?usp=drive_link" 
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-8 text-gray-400 text-sm border-t border-gray-800 text-center">
        <p className="mb-2">Built with React & Tailwind CSS</p>
        <p>© 2025 Dev Golakiya. All rights reserved.</p>
      </footer>
    </div>
  );
}
