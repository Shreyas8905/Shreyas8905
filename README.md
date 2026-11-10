# Shreyas Kulkarni

**AI Engineer | Agentic AI and LLM Systems | Backend Developer**

Portfolio: [shreyas8905.github.io/Shreyas8905](https://shreyas8905.github.io/Shreyas8905/) | LinkedIn: [Shreyas Kulkarni](https://www.linkedin.com/in/shreyas-kulkarni-083a5019b/) 

---

## Summary

I design and build production-oriented AI systems, with a focus on agentic workflows, LLM orchestration, retrieval-augmented generation, and the backend infrastructure that supports them. I prefer full-code implementations over low-code abstractions, which gives me precise control over state management, latency, and failure handling.

I am an AI and Machine Learning undergraduate at Dayanand Sagar College of Engineering (Batch of 2027), and I am open to internships and full-time roles in AI engineering, LLM systems, and ML backend development.

---

## Core Competencies

- **Agentic AI and LLM Orchestration:** ReAct-style agents, multi-agent pipelines, and stateful workflows using LangGraph and LangChain
- **Retrieval-Augmented Generation:** Vector search, query rewriting, self-correction loops, and grounded, citation-backed generation
- **Deep Learning:** PyTorch, convolutional architectures, unsupervised learning
- **Backend Engineering:** FastAPI, Django, Flask, asynchronous services, REST API design
- **Data Layer:** PostgreSQL, MongoDB, MySQL, ChromaDB
- **Deployment:** Docker, Render, Netlify, Vercel, end-to-end delivery from schema design to cloud hosting

**Currently exploring:** Reinforcement Learning, LLM reasoning and evaluation, and the mathematical foundations of learning systems.

---

## Featured Projects
**ReSector: Local-First AI Research Workstation**
*Next.js 16, React 19, TypeScript, Tailwind v4, FastAPI, SQLite, ChromaDB, LangChain, Tauri v2*

- Built a desktop and web research workstation that lets researchers chat with their PDF libraries, with every answer citing the paper and page and highlighting the exact passage.
- Designed a RAG pipeline in FastAPI with embedded ChromaDB vector search and SQLite storage. It grounds answers in retrieved passages, checks citation numbers against what was actually retrieved, and fits context to each model's token budget.
- Built an infinite-canvas research dashboard in React Flow. Users lay out papers, save highlighted quotes and figures, and draw typed links between ideas, and an AI agent suggests connections and gaps with evidence the user can accept or dismiss.
- Developed a drafting environment with cite-while-writing, a sentence-by-sentence checker that flags claims their sources don't support, an autopilot that writes cited sections from the user's papers, version history with diffs, and Markdown export.
- Added support for multiple drafts per dashboard, where the user chooses which drafts the AI may read for context.
- Made it provider-agnostic: users bring their own Groq, Gemini, OpenAI or Anthropic key. Keys stay on the user's machine, which keeps the app private, and a live token-usage meter shows cost.
- Packaged it as a Tauri v2 desktop installer distributed through GitHub Releases, with an in-app updater and an embedded backend. I diagnosed and fixed a stale-UI bug in the desktop webview with server-side cache headers.
- Redesigned the UI for both new and older researchers: a true-black dark mode and a white light mode, brand and per-tool colour tokens, adjustable text size, a Ctrl+K command palette, a labelled navigation rail and keyboard-accessible controls.
- Wrote unit tests for the backend helpers (grounding, token budgeting, draft AI, export) and the frontend logic (citation parsing, PDF highlight geometry, link wiring, draft helpers), plus a README, setup guide with an API-key walkthrough, and technical architecture documentation.

For a one-line version when space is tight: *Built a local-first AI research workstation (Next.js, FastAPI, ChromaDB, Tauri) with cited document chat, an AI-assisted research canvas, and a grounded writing environment, shipped as a cross-platform desktop app.*
Github:
[View on GitHub](https://github.com/Shreyas8905/Resector)

---

### S2TD: Self-Correcting Agentic RAG System

An adaptive System-2 style RAG agent that evaluates retrieved context, rewrites queries when retrieval quality is poor, and uses an ensemble of LLMs to reduce hallucinations and improve answer relevance.

**Stack:** Python, LangGraph, LangChain
[View on GitHub](https://github.com/Shreyas8905/S2TD)

---

### AIPES: AI-Powered Evaluation System

A multi-agent, asynchronous orchestration system for evaluating pitch decks at scale. Parallel LangGraph agents combine visual critique with logical analysis to produce structured evaluations.

**Stack:** Python, LangGraph, asynchronous agent orchestration
[View on GitHub](https://github.com/Shreyas8905/aipes)

---

### Exoplanet Identification using Convolutional Autoencoders

A fully unsupervised deep learning pipeline for detecting signatures of hidden exoplanets in synthetic ALMA continuum observations of protoplanetary disks, using convolutional autoencoders to flag anomalies without labeled data.

**Stack:** Python, PyTorch
[View on GitHub](https://github.com/Shreyas8905/Exoplanet-Identification-using-autoencoder)

---

### InterXAI: AI Interview Platform

An AI interviewer that uses LLMs and sentiment analysis to evaluate candidates dynamically. I developed the core AI pipeline and the real-time response logic.

---

### Arogya Kosh: Blockchain-Based Electronic Health Records

A blockchain-backed EHR system integrated with AI models for accident detection and prescription processing. I architected the core AI integration.

---

## Professional Experience Highlights

**Custom AI Workflow Engineering**
Built multiple production-grade AI workflows for web platforms, with emphasis on complex state management and low-latency inference.
Preferred stack: LangGraph, LangChain, Groq (LPU inference).

**Full-Stack Systems Deployment**
Designed and deployed end-to-end web applications, covering database schema design, API development, frontend, and cloud deployment.
Preferred stack: React (TypeScript), FastAPI, NeonDB (PostgreSQL), Render, Netlify/Vercel.

---

## Technical Stack

**Languages, Frameworks and Technologies**

![Languages and Frameworks](https://skillicons.dev/icons?i=python,pytorch,tensorflow,scikitlearn,fastapi,flask,redis,kafka)

**Databases**

![Infrastructure and Databases](https://skillicons.dev/icons?i=postgresql,mongodb,mysql)

**Infrastructure**

![Infrastructure and Databases](https://skillicons.dev/icons?i=linux,github,docker,kubernetes)

---

## GitHub Activity
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=shreyas8905&theme=cobalt)](https://git.io/streak-stats)

---

## Contact

I am interested in roles involving agentic AI, LLM systems, and scalable AI backends. I am happy to discuss opportunities or collaborate on relevant projects.

- Email: shreyaskulkarni159@gmail.com
- LinkedIn: [linkedin.com/in/shreyas-kulkarni-083a5019b](https://www.linkedin.com/in/shreyas-kulkarni-083a5019b/)
- Portfolio: [shreyas8905.github.io/Shreyas8905](https://shreyas8905.github.io/Shreyas8905/)

<p align="center">
  <i>Research the intelligence. Engineer the system.</i>
</p>
