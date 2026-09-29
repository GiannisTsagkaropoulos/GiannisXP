export type Project = {
  id: string
  title: string
  imgUrl: string
  stack: string[]
  link: string
  brief: string
  description: string
  updatedAt: string
  views: string
  likes: number
  uploadedBy: string
  comments: { author: string; age: string; text: string; likes: number; dislikes?: number }[]
}

export const projectData: Project[] = [
  {
    id: 'advanced-systems-lab',
    title: "Chacha20 Poly1305 Optimization",
    imgUrl: "advanced-systems-lab.png",
    stack: ["C", "SIMD", "Optimization"],
    link: "https://github.com/GiannisTsagkaropoulos/Chacha20-Poly1305-Optimization",
    brief: "Design, implementation and optimization of the ChaCha20-Poly1305 AEAD scheme.",
    description: "This is the Advanced Systems Lab Project Work for MSc Advanced Systems Lab course offered at ETH Zurich (263-0007-00L). \n \n \n Important: This is a performance-optimization project, not a production-ready cryptographic library. Use a maintained library such as OpenSSL for security-critical, time-constant applications. \n \n Project goal: Design, implement and optimize the ChaCha20-Poly1305 Authenticated Encryption with Associated Data (AEAD) scheme. Specifically, \n 1. Provide a baseline of the code which is compliant with the specifications RFC8439. \n \n 2. Create a first optimized version of the implementation using the techniques learned during the course, such as ILP, inlining, precomputation, memory optimizations. \n3. Create a fully optimized vectorized code, using the best SIMD/AVX combination possible.  \n4. Extend the Poly1305 code to support an additional prime field. \n5. Compare with existing state-of-art implementations such as OpenSSL.",
    updatedAt: "29 September 2026",
    views: "1.8K",
    likes: 42,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@OpenSSL-org ", age: "1 day ago", text: "How on earth are you beating OpenSSL for small inputs", likes: 6 },
      { author: "@El SIMD Professor", age: "3 days ago", text: "Nice work on the SIMD section, loved the way you handled internal chacha-state transformation", likes: 3 }
    ]
  },
    {
    id: 'gsh',
    title: "GSH",
    imgUrl: "gsh.png",
    stack: ["C"],
    link: "https://github.com/GiannisTsagkaropoulos/GSH",
    brief: "A hobbyist unix-like shell implementation in C.",
    description: "GSH is a small Unix-inspired shell with command parsing, process management, and a focused interactive terminal experience.",
    updatedAt: "4 August 2026",
    views: "920",
    likes: 28,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@Paul Falstad", age: "2 weeks ago", text: "This is gonna make me replace zsh", likes: 46 },
      { author: "@impatient-dev", age: "1 day ago", text: "When are you planning to add pipes?", likes: 2 },
      { author: "@bug-bounter36", age: "1 day ago", text: "Sth is wrong with the parser and I have found mulitple inputs that break GSH, message me to resolve.", likes: 2 }
    ]
  },
  {
    id: 'agent-on-leash',
    title: "Agent on a Leash (StartHack 2026)",
    imgUrl: "agent-on-leash.png",
    stack: ["Python", "Typescript", "Next.js"],
    link: "https://github.com/GiannisTsagkaropoulos/leash-agentic-commerce",
    brief: "A solution that keeps a customer in control when an AI shopping agent wants to spend their money.",
    description: "Agent on a Leash is a hackathon prototype for keeping customers in control when an AI shopping agent can spend on their behalf. A customer describes purchasing rules in plain language, reviews the extracted authority, and sees each generated purchase approved, declined, or escalated for human review with an auditable reason. The prototype had 2 jobs: \n \n 1. Let the customer control what is allowed. Help them explain their wishes, review the permissions your system understands, and confirm, tighten, or revoke them (withdraw permission). 2. Decide whether each purchase should go ahead. Considering those permissions, the purchase facts, and relevant past activity we needed to explain the result and remember earlier decisions when they affect the next purchase.",
    updatedAt: "27 September 2026",
    views: "7.2K",
    likes: 120,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@Viseca", age: "5 days ago", text: "Lucky that we own the IP to that product.", likes: 15 },
      { author: "@Mastercard", age: "2 weeks ago", text: "Oh man we are losing our competitive edge in agentic shopping.", likes: 17 },
    ]
  },
    {
    id: 'julia-nkua',
    title: "Julia NKUA",
    imgUrl: "julia-nkua.png",
    stack: ["Julia", "JavaScript"],
    link: "https://www.juliateamnkua.com/",
    brief: "Guides for Julia Programming Language and interactive notebooks for Arithmetican Analysis, Number Theory and Applied Mathematics.",
    description: "Julia NKUA is an organization of the National and Kapodistrian University of Athens.\n \n It's goal is to make Julia Programming Language more accessible and useful for the scientific community. We present a brief introduction & guide to Julia language. \n \n \n We examine calculation of pivot patterns emerging from application of GECP in Hadamard matrices, Benchmarks between Julia, Matlab & Python in applications of matrix computations & the Newton-Raphson method, Base conversion programs, Polynomial Interpolation, Natural Cubic Splines, Accuracy of different expressions of equal quantities. All those are showcased using Pluto.jl: an open-source, reactive notebook environment.",
    updatedAt: "February 2026",
    views: "5K",
    likes: 60,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@Fons van der Plas", age: "1 year ago", text: "That's a great use of Pluto.jl! Love it.", likes: 16},
      { author: "@Stefan Karpinski", age: "1.5 year ago", text: "Did you have any problems while using Julia? I would love to hear your feedback", likes: 2 },
    ]
  },
    {
    id: 'tikz-graphics',
    title: "Tikz Graphics",
    imgUrl: "tikz-graphics.png",
    stack: ["LaTeX", "Tikz"],
    link: "https://github.com/GiannisTsagkaropoulos/Tikz-Graphics",
    brief: "Examples of LaTeX Tikz code for graphics and output of the rendered code.",
    description: "Tikz Graphics collects diagrams and visual experiments designed for technical communication. The examples are produced for university notes, teaching assistanship, presentations, papers. \n The inspiration was often the pages tikz.net and my brother's high quality tikz plots. \n The purpose of this project is to make the world more beautiful than it is, by providing highly quality scientific visuals.",
    updatedAt: "12 June 2026",
    views: "2.4K",
    likes: 57,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@Donald Knuth", age: "5 days ago", text: "What a time to be alive.", likes: 8 },
      { author: "@Till Tantau", age: "2 weeks ago", text: "I would never have believed that my creation would be used like that.", likes: 5 },
      { author: "@Stefan Kottwitz", age: "1 day ago", text: "Man could I could advertize those in tikz.net.?", likes: 2 }
    ]
  },
   {
    id: 'world-dev-indicators',
    title: "World Development Indicators",
    imgUrl: "world-dev-indicators.png",
    stack: ["R", "Regression Analysis"],
    link: "https://github.com/GiannisTsagkaropoulos/world-dev-indicators",
    brief: "A study of Corruption Control using multiple regression analysis to clarify and project corruption control based on various global development indicators.",
    description: "Computational implementation of semester project in Linear Models in National and Kapodistrian University of Athens (2023-2024). We were given a subset of the data of World Bank's WDI database consisting of 27 variables for 120 countries, in the year 2018. I selected to analyse Corruption Control (CorControl) for the following 3 part analysis. \n \n 1. Descriptive statistics: introduction of new categorical variables and calculation of basic descriptors \n \n  2. Multiple Regression: Choose 1 dependent vairable and develop a multiple regression model estimating the variable through the other indicators. Followed a Backward Stepwise procedure with AIC, interpret coefficients of the model, calculation of confidence internvals and more \n \n 3. ANOVA: Variance analysis with the independent variables 'FertCat' and 'InflCat' and the variable selected in Section 2 as the dependent variable : testing interaction and main effects of factors on the response variable at the 5% level of significance, test assumptions and investigate whether there is an effect of each level of factors on the response variable.",
    updatedAt: "October 2024",
    views: "1K",
    likes: 32,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@European Commission", age: "1.5 year ago", text: "What a coincidence to be Greek and studying Corruption", likes: 35},
    ]
  },
  {
    id: 'ctf-solutions',
    title: "CTF Solutions",
    imgUrl: "ctf-solutions.png",
    stack: ["Cryptography", "OSINT", "Python"],
    link: "https://github.com/GiannisTsagkaropoulos/ctf-solutions",
    brief: "CTF Solutions & Writeups",
    description: "Personal repository containing CTF writeups, solution scripts, and challenge files organized by category. Problems are from Applied Cryptography course @ETHZ, BjornCTF2025, tfcctf2026.",
    updatedAt: "September 2026",
    views: "535",
    likes: 7,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@Anonymous", age: "1 day ago", text: "Are you looking for a job?", likes: 2},
    ]
  },
  {
    id: 'python-semester-projects',
    title: "Python Semester Projects",
    imgUrl: "python-semester-projects.png",
    stack: ["Python"],
    link: "https://github.com/GiannisTsagkaropoulos/Computer-Science-II",
    brief: "Solutions of semester projects from Computer Science II (Functions, Files, Exceptions, OOP)",
    description: "These project comprise of: \n \n 1. Foundational algorithms (e.g., sorting, number systems, Eratosthenes' sieve) \n 2. Efficient data structures for sparse matrices, priority queues, and encoded files \n 3. OOP solutions (complex number operations, polynomial arithmetic, and priority queues \n 4. Design of simulations and tools like file encoding/decoding, data storage systems, and game implementations (e.g., Hangman, Roulette, Chess Checkmate finder) \n \n Notable Implementations: 1. Roulette Game \n  - Endless play \n  - Dynamic features like borrowing money \n - Animation for roullete \n \n \n 2. Chess Exercise \n - Chessboard visualization in the terminal \n - Designed algorithms to detect checkmate patterns \n - Improved strategic understanding of chess rules and applied them programmatically",
    updatedAt: "May 2022",
    views: "1.531",
    likes: 22,
    uploadedBy: "Giannis Tsagkaropoulos",
    comments: [
      { author: "@Casey Muratoru", age: "3 years ago", text: "Damn the most innovative games I have ever witnessed", likes: 2},
      { author: "@John Carmack", age: "2.5 years ago", text: "Do you think you can transition to programming Doom after the Chess implementation?", likes: 10},
    ]
  }
];