# Therapist AI

Therapist AI is an open-source project designed to detect emotions based on user input, whether it's text or voice, and respond like a therapist. The user can choose the mode of interaction—text or voice—and the AI will respond accordingly. The project leverages **Natural Language Processing (NLP)** techniques to detect emotions and deliver personalized responses.

## Project Goal

The primary objective of Therapist AI is to build an intelligent system that can:

1. Detect emotions from user input (text or voice).
2. Respond to the user as a therapist in the preferred mode (text or voice).

## Features

- Emotion detection using state-of-the-art AI models.
- Support for both text and voice input.
- Therapeutic responses via text or synthesized voice output.
- RESTful API integration for easy interaction with AI models.
- Extensible for future additions like mental health diagnostics or speech emotion detection.

## Technologies Used

### **Frontend**:

- **React** with TypeScript (built using Vite for faster development)

### **Backend**:

- **Node.js (Express)**
- **Prisma ORM** for database management
- **PostgreSQL** as the database

### **AI Models**:

- **Python (Flask)** to serve pre-trained NLP models for emotion detection
- **Transformers** library for natural language processing

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- PostgreSQL
- Docker (optional, for containerized setup)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Therapist-AI.git
cd Therapist-AI
```

#### 2. Backend Setup

```bash
cd backend
npm install
```

- Set up the PostgreSQL database:

```bash
npx prisma migrate dev
```

- Start the server:

```bash
npm run dev
```

#### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

#### 4. AI Model Setup (Python Flask)

```bash
cd ai_model
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
python app.py
```

## Contribution Guidelines

We welcome contributions to this open-source project! Please follow the guidelines below:

### 1. Fork the Project

Fork the repository on GitHub by clicking the "Fork" button at the top right of the page.

### 2. Create Your Feature Branch

```bash
git checkout -b feature/your-feature
```

### 3. Commit Your Changes

Make sure your code follows the existing coding style and conventions.

```bash
git commit -m "feat: add your feature"
```

### 4. Push to Your Forked Repository

```bash
git push origin feature/your-feature
```

### 5. Submit a Pull Request

Create a pull request (PR) from your feature branch to the main branch of the project. Describe the changes you made and why they're necessary.

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand how to interact with this project.

### Development Guidelines

- Follow **clean code** practices and ensure proper **error handling**.
- Write unit tests for new features.
- Ensure that all tests pass before submitting a PR.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you're interested in contributing to **Therapist AI**, feel free to check out the open issues and submit a PR. We look forward to your input!
