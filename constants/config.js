const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL, // Your client-side URL
    "https://convo-connect-client-seven.vercel.app" // Your client-side URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allowing cookies and authorization headers
};

const CHATTU_TOKEN = "chattu-token";

module.exports = { corsOptions, CHATTU_TOKEN };

