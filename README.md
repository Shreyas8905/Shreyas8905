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

### Resector: Local-First Academic Research Workstation

An agentic research platform that turns static PDF libraries into an interactive knowledge base, with grounded chat, citation graph analysis, and structured critique tools.

- **Agentic RAG engine:** ReAct loop built with LangGraph that iteratively queries a local ChromaDB vector store and live web sources, enforcing inline citations to reduce hallucination.
- **Recursive citation graph:** Traverses OpenAlex and Semantic Scholar (with ArXiv/DOI fallback) to build 50-paper citation networks, adds bibliographic coupling edges (Jaccard threshold of 0.035), and applies Louvain community detection to identify thematic clusters. Rendered with `react-force-graph-2d` and exportable to GEXF.
- **Provider factory pattern:** Swappable LLM backends (Groq, OpenAI, Anthropic, Google Gemini) with no changes to orchestration logic.
- **Research modules:** Methodology extraction, persona-based adversarial critique, jargon simplification, and a searchable research archive.
- **Architecture:** Decoupled orchestration, vector, and relational layers so that research documents stay local. Deployable with a single `docker-compose up --build`.

**Stack:** Python, FastAPI, LangGraph, ChromaDB, PostgreSQL, React, TypeScript, Docker
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

**Languages and Frameworks**

![Languages and Frameworks](https://skillicons.dev/icons?i=python,pytorch,tensorflow,scikitlearn,fastapi,flask)

**Databases**

![Infrastructure and Databases](https://skillicons.dev/icons?i=postgresql,mongodb,mysql)

**Infrastructure**

![Infrastructure and Databases](https://skillicons.dev/icons?i=linux,github,docker,kubernetes)

---

## GitHub Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Shreyas8905&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shreyas8905&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
</div>

---

## Contact

I am interested in roles involving agentic AI, LLM systems, and scalable AI backends. I am happy to discuss opportunities or collaborate on relevant projects.

- Email: shreyaskulkarni159@gmail.com
- LinkedIn: [linkedin.com/in/shreyas-kulkarni-083a5019b](https://www.linkedin.com/in/shreyas-kulkarni-083a5019b/)
- Portfolio: [shreyas8905.github.io/Shreyas8905](https://shreyas8905.github.io/Shreyas8905/)

<p align="center">
  <i>Research the intelligence. Engineer the system.</i>
</p>
