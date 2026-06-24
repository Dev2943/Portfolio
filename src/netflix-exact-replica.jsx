import React, { useState } from 'react';

export default function NetflixPortfolio() {
  const [hoveredId, setHoveredId] = useState(null);

  // ── Row 1: Quantitative Finance Projects ──────────────────────────────────
  const quantProjects = [
    {
      id: 1,
      title: "Stock Market Analysis Platform",
      description: "9-tab always-on dashboard integrating 4 quant projects. Real-time Yahoo Finance data, VaR & ES stress tests (Historical, Variance-Covariance, Monte Carlo), Black-Scholes options pricer with Greeks, Fama-French factor model, and 12-1 momentum strategy backtest. Deployed on Google Cloud Run — never sleeps.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=281&fit=crop",
      tags: ["Python", "Streamlit", "GCP", "Docker", "SciPy", "yfinance"],
      github: "https://github.com/Dev2943/stock-market-dashboard",
      demo: "https://stock-market-dashboard-909492874362.us-central1.run.app"
    },
    {
      id: 2,
      title: "Black-Scholes Options Pricer",
      description: "Closed-form BSM pricer for European calls and puts. All 5 Greeks (Δ, Γ, ν, θ, ρ) verified against finite-difference approximations to 1e-5. Newton-Raphson IV solver converging to machine precision in ~3 iterations, with bisection fallback. Real SPY volatility smile recovery. 79 passing tests.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=281&fit=crop",
      tags: ["Python", "SciPy", "Options Pricing", "Greeks", "79 Tests"],
      github: "https://github.com/Dev2943/bsm-pricer",
      demo: "https://github.com/Dev2943/bsm-pricer"
    },
    {
      id: 3,
      title: "Monte Carlo Options Pricer",
      description: "MC pricing framework for European, Asian, and barrier options under risk-neutral GBM. ~85% variance reduction via control variates. Key finding: stacking antithetic + control variate is worse than control alone — the techniques are not additive. Limit-case validation: Asian at n_steps=1 matches vanilla exactly. 13 tests.",
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&h=281&fit=crop",
      tags: ["Python", "NumPy", "Monte Carlo", "Variance Reduction", "Exotics"],
      github: "https://github.com/Dev2943/mc-pricer",
      demo: "https://github.com/Dev2943/mc-pricer"
    },
    {
      id: 4,
      title: "Multi-Factor Equity Model",
      description: "Fama-French 4-factor regression + 12-1 momentum on 31 US large-cap stocks (2015–2026). 0.73 correlation with Ken French's published MOM factor. Exposed the small-universe errors-in-variables pathology (15× inflated premium) and fixed with portfolio-sorted Fama-MacBeth. 0.35 Sharpe. 15 tests.",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=500&h=281&fit=crop",
      tags: ["Python", "Fama-MacBeth", "Momentum", "Factor Model", "15 Tests"],
      github: "https://github.com/Dev2943/factor-model",
      demo: "https://github.com/Dev2943/factor-model"
    },
    {
      id: 5,
      title: "VaR & Expected Shortfall Calculator",
      description: "Three VaR/ES methods on a $100K portfolio (SPY, TLT, GLD). Kupiec POF + Christoffersen CC backtests over 4,884 trading days. Historical VaR passes Kupiec (p=0.051) but fails Christoffersen at p<0.001 — the clustering failure mode that brought down major shops in 2008. Stress losses 7–9× daily VaR. 15 tests.",
      image: "https://images.unsplash.com/photo-1612010167108-3e6b327405f0?w=500&h=281&fit=crop",
      tags: ["Python", "VaR", "Backtesting", "Stress Testing", "CCAR"],
      github: "https://github.com/Dev2943/var-calculator",
      demo: "https://github.com/Dev2943/var-calculator"
    },
    {
      id: 8,
      title: "American Options Pricer",
      description: "Prices American options three ways: CRR binomial trees, the Longstaff-Schwartz least-squares Monte Carlo, and basket extensions. Computes the early-exercise premium that Black-Scholes has no closed form for. Binomial and LSM cross-validate to the cent on the American put (~$6.09). Convergence to BS empirically verified.",
      image: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=500&h=281&fit=crop",
      tags: ["Python", "Binomial Trees", "Longstaff-Schwartz", "Monte Carlo", "SciPy"],
      github: "https://github.com/Dev2943/tree-pricer",
      demo: "https://tree-pricer-909492874362.us-central1.run.app"
    },
    {
      id: 10,
      title: "Credit Portfolio Analytics & Trading System",
      description: "Four-layer credit system mirroring a bank's Credit Portfolio Group quant desk. Layer 1: single-name credit (Merton structural, Black-Cox first-passage, reduced-form CDS pricing) validated on real firms — correctly ranked MSFT/Ford/Carnival by credit risk. Layer 2: Gaussian copula portfolio risk — default correlation multiplies tail risk 3×→18× while expected loss stays flat. Layer 3: CDS hedge optimization cutting 99% Expected Shortfall 24%. Layer 4: an LLM agent generating grounded desk briefings. 43 tests.",
      image: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?w=500&h=281&fit=crop",
      tags: ["Python", "Credit Risk", "Copula", "CDS Pricing", "LLM", "SciPy"],
      github: "https://github.com/Dev2943/credit-system",
      demo: "https://github.com/Dev2943/credit-system"
    },
  ];

  // ── Row 2: ML & Analytics Projects ───────────────────────────────────────
  const mlProjects = [
    {
      id: 6,
      title: "COVID-19 Healthcare Analytics Dashboard",
      description: "Full-stack interactive analytics dashboard tracking COVID-19 across 248 countries. ML forecasting with Facebook Prophet, Monte Carlo scenario simulation with a 'Case-at-Risk' tail-risk KPI, ICU & hospital resource utilization trends, geospatial choropleth maps, and surge detection alerts. Dockerized on Google Cloud Run.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&h=281&fit=crop",
      tags: ["Python", "Dash", "Prophet ML", "Monte Carlo", "GCP", "Docker"],
      github: "https://github.com/Dev2943/covid-healthcare-analytics",
      demo: "https://covid-healthcare-analytics-909492874362.us-central1.run.app"
    },
    {
      id: 7,
      title: "Restaurant Sentiment Analyzer Pro",
      description: "Advanced NLP pipeline with TextBlob, VADER, and ensemble ML models (Naive Bayes, Logistic Regression, SVM) analyzing 750+ restaurant reviews with 85%+ accuracy. Features multi-restaurant comparison, topic modeling, real-time sentiment analysis, and automated business insights.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=281&fit=crop",
      tags: ["Python", "NLP", "Streamlit", "scikit-learn", "85%+ Accuracy"],
      github: "https://github.com/Dev2943/restaurant-sentiment-analyzer",
      demo: "https://dev2943-restaurant-sentiment-analyzer.streamlit.app"
    },
    {
      id: 9,
      title: "Credit Card Portfolio Analytics",
      description: "End-to-end consumer-credit analytics on 30,000 cardholders: ETL & behavioral feature engineering, K-means customer segmentation, default prediction (logistic regression + gradient boosting) with a fair-lending disparate-impact check, and risk-adjusted portfolio KPIs (Expected Loss = PD × EAD × LGD). Built for a bank quant-analytics role.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=281&fit=crop",
      tags: ["Python", "scikit-learn", "Segmentation", "Credit Risk", "Streamlit"],
      github: "https://github.com/Dev2943/card-analytics",
      demo: "https://card-analytics-909492874362.us-central1.run.app"
    },
  ];

  // ── Reusable project card (identical hover behaviour to original) ─────────
  const ProjectCard = ({ project }) => (
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

        {/* Hover Info */}
        {hoveredId === project.id && (
          <div className="absolute inset-0 bg-zinc-900 bg-opacity-95 p-4 flex flex-col justify-between overflow-y-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-zinc-800 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
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
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans">

      {/* Netflix Navigation Bar — unchanged */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-2xl md:text-4xl font-bold tracking-tight">
              PORTFOLIO
            </h1>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#home"     className="hover:text-gray-300 transition">Home</a>
              <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
              <a href="#about"    className="hover:text-gray-300 transition">About</a>
              <a href="#interests" className="hover:text-gray-300 transition">Interests</a>
              <a href="#contact"  className="hover:text-gray-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner — same layout, updated text */}
      <div id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center px-4 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Dev Golakiya</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Quant Finance · Machine Learning · Business Analytics
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              MS Business Analytics student at UMass Amherst building institutional-grade quant tools —
              options pricers, VaR backtests, factor models, and NLP pipelines — deployed on Google Cloud.
              <br/><br/>
              I care about the full stack: rigorous math, clean code, and production infrastructure that stays up.
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

      {/* Projects Section — two Netflix-style rows */}
      <div id="projects" className="relative z-10 -mt-32 px-4 md:px-12 pb-20">

        {/* Row 1 — Quant Finance */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4">⚡ Quantitative Finance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {quantProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Row 2 — ML & Analytics */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4">🤖 ML & Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mlProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* About Section — same layout, updated content */}
      <div id="about" className="px-4 md:px-12 py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm <span className="text-red-600 font-semibold">Dev Golakiya</span>, a quant-leaning data scientist
                finishing my MS in Business Analytics at UMass Amherst. I build end-to-end tools that span
                math-heavy research and production deployment.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My quant portfolio covers options pricing (Black-Scholes, Monte Carlo), market risk
                (VaR, Kupiec/Christoffersen backtests, stress testing), and factor models
                (Fama-French, momentum). On the ML side I've built NLP pipelines and healthcare analytics platforms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I care about the connection between theory and production — not just running a regression,
                but understanding why it fails in stress periods, and deploying it on infrastructure that stays up.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Quantitative Finance</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Black-Scholes","Monte Carlo","VaR / ES","Fama-French","Momentum","Backtesting","Stress Testing"].map(s => (
                      <span key={s} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Python & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python","Pandas","NumPy","SciPy","Plotly","Streamlit","scikit-learn"].map(s => (
                      <span key={s} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Machine Learning & NLP</h4>
                  <div className="flex flex-wrap gap-2">
                    {["TextBlob","VADER","Naive Bayes","Logistic Regression","SVM","Prophet","TF-IDF"].map(s => (
                      <span key={s} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold mb-3">Cloud & Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Google Cloud Run","Docker","GitHub Actions","SQL","Power BI","Tableau"].map(s => (
                      <span key={s} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beyond the Code — Interests Section */}
      <div id="interests" className="px-4 md:px-12 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Beyond the Code</h2>
          <p className="text-gray-400 text-lg mb-12">A few things I'm passionate about outside of work.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Chess */}
            <div className="group bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">♟️</div>
              <h3 className="text-xl font-bold mb-2">Chess</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A serious chess player — I love the strategy, pattern recognition, and calculating lines several moves ahead. The same analytical thinking I bring to quant problems.
              </p>
            </div>

            {/* FPS Gaming */}
            <div className="group bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">FPS Gaming</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Big fan of first-person shooters — fast reflexes, split-second decisions, and competitive gameplay. A great way to unwind and stay sharp.
              </p>
            </div>

            {/* FC Barcelona */}
            <div className="group bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-2">FC Barcelona</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Visca el Barça! A lifelong Culé — I follow every match and love the philosophy of beautiful, possession-based football. 💙❤️
              </p>
            </div>

            {/* Max Verstappen / F1 */}
            <div className="group bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-4">🏎️</div>
              <h3 className="text-xl font-bold mb-2">Formula 1</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Huge Max Verstappen fan — the precision, racecraft, and relentless drive for the fastest lap. Where engineering meets raw competition.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Section — unchanged layout */}
      <div id="contact" className="px-4 md:px-12 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12">
            Open to quant research, market risk, ML engineering, and analytics roles. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:devgolakiya07@gmail.com"
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition group">
              <svg className="w-12 h-12 mx-auto mb-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-400 group-hover:text-white transition">devgolakiya07@gmail.com</p>
            </a>
            <a href="https://github.com/Dev2943" target="_blank" rel="noopener noreferrer"
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition group">
              <svg className="w-12 h-12 mx-auto mb-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-gray-400 group-hover:text-white transition">@Dev2943</p>
            </a>
            <a href="https://www.linkedin.com/in/devgolakiya" target="_blank" rel="noopener noreferrer"
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition group">
              <svg className="w-12 h-12 mx-auto mb-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-white transition">Dev Golakiya</p>
            </a>
          </div>
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

      {/* Footer — unchanged */}
      <footer className="px-4 md:px-12 py-8 text-gray-400 text-sm border-t border-gray-800 text-center">
        <p className="mb-2">Built with React & Tailwind CSS</p>
        <p>© 2026 Dev Golakiya. All rights reserved.</p>
      </footer>
    </div>
  );
}
