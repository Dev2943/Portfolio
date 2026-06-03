# 🎬 Interactive Portfolio

A personal portfolio website built with React and Tailwind CSS, designed with a sleek, streaming-service-inspired interface. Showcases quantitative finance, machine learning, and analytics projects in an interactive, browsable layout.

## 🚀 Live Demo

**[View Live Portfolio](https://dev-golakiya-portfolio.netlify.app)**

---

## ✨ Features

- **Cinematic UI** — dark theme, hero banner, and hover-to-expand project cards
- **Two project rows** — Quantitative Finance and ML & Analytics, browsable like streaming categories
- **Interactive project cards** — hover to reveal description, tech tags, and Demo / Code buttons
- **Responsive design** — adapts cleanly from mobile to desktop
- **Smooth navigation** — sticky nav bar with anchor links to Home, Projects, About, and Contact
- **Direct project links** — each card links to its live demo and GitHub repo

---

## 🛠 Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 |
| Styling | Tailwind CSS 3 |
| Build | Create React App (react-scripts) |
| Icons | Inline SVG |
| Deployment | Netlify |

---

## 📂 Featured Projects

### Quantitative Finance
- **Stock Market Analysis Platform** — 9-tab dashboard with VaR, options pricing, and factor models (Google Cloud Run)
- **Black-Scholes Options Pricer** — closed-form pricer with Greeks and IV solver
- **Monte Carlo Options Pricer** — variance reduction and exotic payoffs
- **Multi-Factor Equity Model** — Fama-French + momentum backtest
- **VaR & Expected Shortfall Calculator** — backtesting and stress testing

### ML & Analytics
- **COVID-19 Healthcare Analytics Dashboard** — Prophet forecasting + Monte Carlo (Google Cloud Run)
- **Restaurant Sentiment Analyzer Pro** — ensemble NLP pipeline (Streamlit)

---

## 🔧 Local Setup

```bash
# Clone the repository
git clone https://github.com/Dev2943/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm start
```
Open **http://localhost:3000** in your browser.

### Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── netflix-exact-replica.jsx   # Main portfolio component
│   ├── index.js                    # React entry point
│   └── index.css                   # Tailwind directives
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🎨 Customization

All projects, links, and content live in `src/netflix-exact-replica.jsx`. To update:

- **Add/edit projects** — modify the `quantProjects` and `mlProjects` arrays
- **Change hero text** — edit the hero section
- **Update skills** — edit the About section's skill arrays
- **Swap images** — replace the `image` URLs in each project object

---

## 🚀 Deployment (Netlify)

This site auto-deploys from GitHub:
1. Connect your repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Every push to `main` triggers an automatic redeploy

---

## 👨‍💻 Author

**Dev Golakiya** — MS Business Analytics, UMass Amherst
- 📧 devgolakiya07@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/devgolakiya)
- 🐙 [GitHub](https://github.com/Dev2943)

---

## 📄 License
MIT — free to use, fork, and adapt for your own portfolio.

---

*Built with React & Tailwind CSS · Deployed on Netlify · Last updated June 2026*
