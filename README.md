URL Shortener
A simple URL shortener built with Node.js, Express, and MongoDB. This application takes a long URL and generates a shorter, unique alias for it. Users can use these shortened URLs to easily share or access content. The app also keeps track of the original URLs, making it easy to retrieve them later.

Features
Generate short, unique URLs for any given link
Redirect to the original URL when accessing the shortened link
Persistent storage with MongoDB for URL mappings
Minimal and efficient API design
Tech Stack
Node.js: Backend runtime environment
Express: Framework for routing and API handling
MongoDB: Database to store URL mappings
EJS: Templating engine for rendering dynamic HTML pages
Nodemon: Tool that automatically restarts the server during development
Getting Started
To set up and run this project locally, follow these steps:

Clone the repository
Install dependencies: npm install
Set up MongoDB and add your MongoDB URI to the environment variables
Start the server: npm run dev
