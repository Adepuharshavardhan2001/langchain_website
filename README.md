#  Website Automation using Gemini AI

This project is an AI-powered **website code generator** built using **Streamlit**, **LangChain**, and **Google Gemini**.  
Users can describe a website idea, and the app automatically generates **HTML, CSS, and JavaScript** files.

---

## Project Overview

Website Automation using Gemini AI is a Streamlit-based application that automates the creation of frontend website code using Generative AI. The user provides a natural language description of a website, and the system intelligently generates structured **HTML**, **CSS**, and **JavaScript** files.

The project leverages **Google Gemini** through **LangChain** to interpret user requirements and produce clean, reusable frontend code. This automation reduces manual coding effort and demonstrates practical usage of Large Language Models (LLMs) in real-world web development workflows.

---

##  Features

- Generate complete frontend code using AI
- Supports **HTML, CSS, and JavaScript**
- Simple and clean **Streamlit UI**
- Secure API key handling using `.env`
- Saves generated files automatically

---

##  Tech Stack

- **Python**
- **Streamlit**
- **LangChain**
- **Google Gemini (Generative AI)**
- **HTML, CSS, JavaScript**

---

##  How It Works

1. The user enters a natural language description of the desired website layout and features in the Streamlit interface.

2. When the **Generate** button is clicked, the application constructs a structured prompt consisting of:
   - A **system message** defining the AI’s role as a frontend web developer
   - A **user message** containing the website description

3. This prompt is sent to **Google Gemini** using **LangChain’s ChatGoogleGenerativeAI** interface.

4. The Gemini model processes the request and generates frontend code in a predefined format containing:
   - HTML
   - CSS
   - JavaScript

5. The application parses the AI response and separates the code into individual files:
   - `index.html`
   - `style.css`
   - `script.js`

6. The generated code is automatically saved to the local project directory and displayed in the Streamlit app for review.

This workflow demonstrates how Generative AI can be integrated into real-world applications to automate repetitive development tasks.


---

##  Environment Setup

Create a `.env` file in the root directory and add your **Google Gemini API key**:

```env
gemini=YOUR_GOOGLE_API_KEY


