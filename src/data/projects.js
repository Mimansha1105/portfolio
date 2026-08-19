export const projects = [
  {
    id: 'wanderlust',
    name: 'Wanderlust',
    description:
      'Full-stack property listing application with RESTful APIs and secure authentication.',
    points: [
      'Implemented secure auth using Passport.js and Google OAuth',
      'Integrated MongoDB with Mongoose for schema design and queries',
      'Added image uploads, reviews, sessions, and cloud deployment',
    ],
    stack: ['MongoDB', 'Express.js', 'Node.js', 'EJS', 'Passport.js'],
    github: 'https://github.com/Mimansha1105/wanderlust',
    demo: 'https://mimanshas-wanderlust.onrender.com/listings',
  },
  {
    id: 'rag-chatbot',
    name: 'RAG PDF Q&A Chatbot',
    description:
      'Retrieval-Augmented Generation chatbot that answers questions from uploaded PDFs.',
    points: [
      'Semantic search via Hugging Face embeddings + ChromaDB vector store',
      'Groq Llama models integrated with LangChain for context-aware answers',
      'End-to-end pipeline: chunking, embedding, retrieval, synthesis, multi-PDF Streamlit UI',
    ],
    stack: ['Python', 'LangChain', 'Groq', 'Hugging Face', 'ChromaDB', 'Streamlit'],
    github: 'https://github.com/Mimansha1105/rag-pdf-chatbot',
    demo: 'https://rag-pdf-chatbot-gqdnac4zghsnyzfpu6wthb.streamlit.app/',
  },
];