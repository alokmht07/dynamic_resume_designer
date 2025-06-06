## Dynamic Resume Designer 📋

A web-based platform for creating customizable resumes, providing users with an interactive and seamless experience to design and download professional resumes.

## 🚀 Technologies

- 📦 **MongoDB**: A NoSQL database for storing data.
- ⚙️ **Express.js**: A web application framework for Node.js.
- ⚛️ **Next.js**: A JavaScript library for building user interfaces.
- 🚀 **Node.js**: A JavaScript runtime for server-side development.
- 🔑 **JWT**: JSON Web Tokens for user authentication.
- 🔒 **bcrypt**: A library for hashing user passwords.

## ⚙️ Configuration

1. Create a `.env` file in the `server` directory with the following environment variables:

   ```env
   PORT = port
   CORS_ORIGIN = origin_url
   MONGODB_URI = your_mongodb_uri

   SECRET_KEY_ACCESS_TOKEN = jwt_secret_key
   SECRET_KEY_REFRESH_TOKEN = jwt_refresh_secret_key
   ```

2. Create a `.env` file in the `client` directory with the following environment variables:

   ```env
   NEXT_PUBLIC_API_ORIGIN = backend_host_url
   NEXT_PUBLIC_GOOGLE_OAUTH_CLIENTID =  google_oauth_id
   ```

## 🚀 Getting Started

### Prerequisites
- Node.js: Ensure you have Node.js installed on your machine.
- MongoDB: Set up a MongoDB database.

### Installation

 1. **Clone the repository:**
    ```bash
    git clone https://github.com/alokmht07/dynamic_resume_designer.git
    cd dynamic_resume_designer
    ```
 2. **Install dependencies:**
    ```bash
    cd client
    yarn install
    # or
    npm install
    ```
   
 3. **Run the frontend:**
    ```bash
    yarn dev
    # or
    npm run dev
    ```
    
 4. **Start the Backend Server:**
    ```bash
    cd server
    yarn install
    # or
    npm install

    yarn dev
    # or
    npm run dev

5. Access the application in your web browser at `http://localhost:3000`.
