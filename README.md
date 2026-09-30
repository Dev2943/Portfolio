<div align="center">

# Dev Golakiya

### Quant Finance · Machine Learning · Business Analytics

MS Business Analytics student at UMass Amherst building institutional-grade quant tools —
options pricers, VaR backtests, factor models, and NLP pipelines — deployed on Google Cloud.

**[Portfolio](https://dev-golakiya-portfolio.netlify.app/)** ·
[GitHub](https://github.com/Dev2943) ·
[LinkedIn](https://www.linkedin.com/in/devgolakiya) ·
[Email](mailto:devgolakiya07@gmail.com)

</div>

---

## About

I'm a quant-leaning data scientist finishing my MS in Business Analytics at UMass Amherst. I
build end-to-end tools that span math-heavy research and production deployment.

The quant work covers options pricing (Black-Scholes, Monte Carlo, binomial and
Longstaff-Schwartz), market risk (VaR with Kupiec and Christoffersen backtests, stress testing),
credit risk (Merton, Black-Cox, Gaussian copula, CDS), and factor models (Fama-French,
momentum). On the ML side, NLP pipelines and healthcare analytics platforms.

What ties them together is a bias toward reporting negative results honestly. Several of these
projects exist because a widely-repeated claim didn't survive contact with real transaction
costs, a small sample, or a proper backtest — and saying so is more useful than another clean
equity curve.

**Portfolio site:** a Netflix-styled single-page React application, built with React and
Tailwind, deployed on Netlify.

---

## Quantitative Finance

### Predictive Trading Lab

Deterministic C++23 trading engine — 57,168 lines across 34 libraries — exposed through a
FastAPI gateway and a Next.js research workstation. The hard problem wasn't trading; it was
serving a single-threaded, deterministic engine through a concurrent web API without losing
reproducibility. A mutex around the engine would have put a lock on the trading path, so writes
became commands applied between events by one driver thread while reads come from immutable
snapshots. C++ objects are never bound to Python — everything crosses as JSON. One config
fingerprint (`30b44e5972450aad`) verified identical across the C++ binary, the bindings, and the
HTTP gateway, unchanged through GCC, Clang, C++20, C++23 and sanitized builds. 990 tests.

`C++23` `pybind11` `FastAPI` `Next.js` `Docker` `990 Tests`
[Repo](https://github.com/Dev2943/predictive-trading-lab) ·
[Demo](https://predictive-trading-lab.vercel.app)

---

### Stock Market Analysis Platform

Nine-tab always-on dashboard integrating four quant projects. Real-time Yahoo Finance data,
VaR and ES stress tests (Historical, Variance-Covariance, Monte Carlo), a Black-Scholes options
pricer with Greeks, a Fama-French factor model, and a 12-1 momentum strategy backtest. Deployed
on Google Cloud Run — never sleeps.

`Python` `Streamlit` `GCP` `Docker` `SciPy` `yfinance`
[Repo](https://github.com/Dev2943/stock-market-dashboard) ·
[Live](https://stock-market-dashboard-909492874362.us-central1.run.app)

---

### Credit Portfolio Analytics & Trading System

Four-layer credit system mirroring a bank's Credit Portfolio Group quant desk. Layer 1:
single-name credit (Merton structural, Black-Cox first-passage, reduced-form CDS pricing)
validated on real firms — correctly ranked MSFT, Ford and Carnival by credit risk. Layer 2:
Gaussian copula portfolio risk, where default correlation multiplies tail risk 3× to 18× while
expected loss stays flat. Layer 3: CDS hedge optimization cutting 99% Expected Shortfall by 24%.
Layer 4: an LLM agent generating grounded desk briefings. 43 tests.

`Python` `Credit Risk` `Copula` `CDS Pricing` `LLM` `SciPy`
[Repo](https://github.com/Dev2943/credit-system)

---

### Black-Scholes Options Pricer

Closed-form BSM pricer for European calls and puts. All five Greeks (Δ, Γ, ν, θ, ρ) verified
against finite-difference approximations to 1e-5. Newton-Raphson IV solver converging to machine
precision in roughly three iterations, with bisection fallback. Real SPY volatility smile
recovery. 79 passing tests.

`Python` `SciPy` `Options Pricing` `Greeks` `79 Tests`
[Repo](https://github.com/Dev2943/bsm-pricer)

---

### American Options Pricer

Prices American options three ways: CRR binomial trees, Longstaff-Schwartz least-squares Monte
Carlo, and basket extensions. Computes the early-exercise premium that Black-Scholes has no
closed form for. Binomial and LSM cross-validate to the cent on the American put (~$6.09).
Convergence to BS empirically verified.

`Python` `Binomial Trees` `Longstaff-Schwartz` `Monte Carlo` `SciPy`
[Repo](https://github.com/Dev2943/tree-pricer) ·
[Live](https://tree-pricer-909492874362.us-central1.run.app)

---

### Monte Carlo Options Pricer

MC pricing framework for European, Asian, and barrier options under risk-neutral GBM. Roughly
85% variance reduction via control variates. Key finding: stacking antithetic and control
variates is *worse* than control alone — the techniques are not additive. Limit-case validation:
Asian at `n_steps=1` matches vanilla exactly. 13 tests.

`Python` `NumPy` `Monte Carlo` `Variance Reduction` `Exotics`
[Repo](https://github.com/Dev2943/mc-pricer)

---

### VaR & Expected Shortfall Calculator

Three VaR/ES methods on a $100K portfolio (SPY, TLT, GLD). Kupiec POF and Christoffersen CC
backtests over 4,884 trading days. Historical VaR passes Kupiec (p=0.051) but fails
Christoffersen at p<0.001 — the clustering failure mode that brought down major shops in 2008.
Stress losses run 7–9× daily VaR. 15 tests.

`Python` `VaR` `Backtesting` `Stress Testing` `CCAR`
[Repo](https://github.com/Dev2943/var-calculator)

---

### Multi-Factor Equity Model

Fama-French four-factor regression plus 12-1 momentum on 31 US large-cap stocks (2015–2026).
0.73 correlation with Ken French's published MOM factor. Exposed the small-universe
errors-in-variables pathology — a 15× inflated premium — and fixed it with portfolio-sorted
Fama-MacBeth. 0.35 Sharpe. 15 tests.

`Python` `Fama-MacBeth` `Momentum` `Factor Model` `15 Tests`
[Repo](https://github.com/Dev2943/factor-model)

---

### Crypto Funding-Rate Basis Research

Event-driven research pipeline testing whether the crypto funding-rate basis trade (long spot,
short perpetual) survives real transaction costs. Real OKX funding and price data across five
assets, strict no-lookahead signal construction, four-leg fee and slippage accounting on every
round trip. **Key finding: it doesn't.** Gross funding runs 0.3–4.4% annualized in the current
regime and net returns go negative at taker fees. The break-even frontier shows the signal only
activates below roughly 0.05% round-trip execution — reframing a widely-pitched "delta-neutral
yield" as an execution-cost edge captured by whoever trades cheapest. Real and synthetic results
kept strictly separate.

`Python` `pandas` `Backtesting` `Transaction Costs` `OKX API`
[Repo](https://github.com/Dev2943/funding-basis)

---

### Monoculture Risk: Systemic Fragility from AI-Driven Model Convergence

Agent-based market simulation giving computational teeth to the CFA Institute's "cognitive
convergence" systemic-risk thesis. Price emerges from momentum and mean-reverting agents; a
tunable diversity parameter drives the population from diverse to monoculture. Ran 630
simulations (21 diversity levels × 30 seeds) showing systemic fragility rises and accelerates as
strategy diversity collapses — max drawdown −3% to −11%, action synchronization 53% to 99%.
Explicitly tested for a sharp phase transition and honestly reported gradual acceleration rather
than overclaiming a tipping point.

`Python` `Agent-Based Modeling` `Systemic Risk` `NumPy` `Simulation`
[Repo](https://github.com/Dev2943/monoculture-risk)

---

### Costco Three-Statement Model & DCF Valuation

Full three-statement model (income statement, balance sheet, cash flow) built from Costco's
FY2024 SEC filings, projected five years and fully linked — balances to zero every year. DCF
with CAPM WACC, mid-year discounting, and terminal value computed both ways. Key finding via
reverse DCF: the market implies 6.3% perpetual growth against roughly 4% nominal GDP, pricing
the membership annuity (1.9% of revenue, 52% of operating income, 90%+ renewal). Demonstrates
building a complete valuation from a blank modeling shell.

`Excel` `Financial Modeling` `DCF` `Valuation` `Equity Research`
[Repo](https://github.com/Dev2943/costco-dcf-model)

---

## Machine Learning & Analytics

### COVID-19 Healthcare Analytics Dashboard

Full-stack interactive analytics dashboard tracking COVID-19 across 248 countries. ML
forecasting with Facebook Prophet, Monte Carlo scenario simulation with a "Case-at-Risk"
tail-risk KPI, ICU and hospital resource utilization trends, geospatial choropleth maps, and
surge detection alerts. Dockerized on Google Cloud Run.

`Python` `Dash` `Prophet ML` `Monte Carlo` `GCP` `Docker`
[Repo](https://github.com/Dev2943/covid-healthcare-analytics) ·
[Live](https://covid-healthcare-analytics-909492874362.us-central1.run.app)

---

### Credit Card Portfolio Analytics

End-to-end consumer-credit analytics on 30,000 cardholders: ETL and behavioral feature
engineering, K-means customer segmentation, default prediction (logistic regression and gradient
boosting) with a fair-lending disparate-impact check, and risk-adjusted portfolio KPIs
(Expected Loss = PD × EAD × LGD). Built for a bank quant-analytics role.

`Python` `scikit-learn` `Segmentation` `Credit Risk` `Streamlit`
[Repo](https://github.com/Dev2943/card-analytics) ·
[Live](https://card-analytics-909492874362.us-central1.run.app)

---

### Restaurant Sentiment Analyzer Pro

Advanced NLP pipeline with TextBlob, VADER, and ensemble ML models (Naive Bayes, Logistic
Regression, SVM) analyzing 750+ restaurant reviews at 85%+ accuracy. Multi-restaurant
comparison, topic modeling, real-time sentiment analysis, and automated business insights.

`Python` `NLP` `Streamlit` `scikit-learn` `85%+ Accuracy`
[Repo](https://github.com/Dev2943/restaurant-sentiment-analyzer) ·
[Live](https://dev2943-restaurant-sentiment-analyzer.streamlit.app)

---

## Skills

**Quant & Risk**
Black-Scholes · Monte Carlo · VaR / ES · Fama-French · Momentum · Backtesting · Stress Testing ·
Credit Risk · Copula Models · CDS Pricing · DCF Valuation

**Languages & Libraries**
Python · C++23 · SQL · Pandas · NumPy · SciPy · Plotly · Streamlit · scikit-learn

**ML & NLP**
TextBlob · VADER · Naive Bayes · Logistic Regression · SVM · Prophet · TF-IDF · Gradient Boosting

**Infrastructure**
Google Cloud Run · Docker · GitHub Actions · FastAPI · Next.js · React · Power BI · Tableau

---

## Live Deployments

| Platform | Projects |
|:--|:--|
| **Google Cloud Run** | Stock Market Platform · American Options Pricer · COVID Analytics · Card Analytics |
| **Streamlit Cloud** | Restaurant Sentiment Analyzer |
| **Vercel** | Predictive Trading Lab |
| **Netlify** | Portfolio site |

---

<div align="center">

**[devgolakiya07@gmail.com](mailto:devgolakiya07@gmail.com)** ·
[@Dev2943](https://github.com/Dev2943) ·
[LinkedIn](https://www.linkedin.com/in/devgolakiya)

</div>
