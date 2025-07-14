# 💼 Valuefy - Technical Assignment (Innovation Lab Intern)

**Project Title:** Natural Language Cross-Platform Data Query RAG Agent  
**Tech Stack:** ReactJS | FastAPI | LangChain | MySQL | MongoDB | OpenAI GPT | Chart.js  

---

## 📌 Project Overview

This is an AI-powered platform built to help wealth managers and business users query complex client portfolio and transaction data using natural language.  
It supports answering real-time questions like:

- _"What are the top five portfolios of our wealth members?"_  
- _"Give me the breakup of portfolio values per relationship manager."_  
- _"Tell me the top relationship managers in my firm."_  
- _"Which clients are the highest holders of [specific stock]?"_

The project leverages **LangChain**, **OpenAI**, and **RAG (Retrieval-Augmented Generation)** to intelligently retrieve and process information from:
- 📊 **MySQL** → client transactions
- 📁 **MongoDB** → client profiles and risk data

---

## 🏗️ Architecture

```mermaid
graph TD
    User[User Input (Natural Language)] -->|Query| ReactFrontend
    ReactFrontend -->|POST /ask| FastAPIBackend
    FastAPIBackend --> LangChainAgent
    LangChainAgent --> MySQL[MySQL: Transactions]
    LangChainAgent --> MongoDB[MongoDB: Client Profiles]
    LangChainAgent --> OpenAI[OpenAI GPT API]
    OpenAI --> Response[Text/Table/Graph]
    Response --> ReactFrontend
