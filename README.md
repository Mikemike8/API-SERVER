# API-SERVER
WORKING RESTFUL API SERVER
# Express Server Setup Guide

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Steps to Run the Server

### 1. Clone the Repository (if applicable)

If your project is in a repository, clone it using:

```sh
git clone <repository-url>
cd <project-folder>
```

### 2. Initialize the Project (if not already done)

If you don't have a `package.json` file, initialize a Node.js project:

```sh
npm init -y
```

### 3. Install Dependencies

Run the following command to install the required packages:

```sh
npm install express cors dotenv
```

### 4. Create a `.env` File (Optional)

If you want to use environment variables, create a `.env` file in the root directory and add:

```
PORT=3006
```

### 5. Start the Server

To start the server, run:

```sh
node server.js
```

### 6. Use Nodemon for Auto-Restart (Optional)

If you want the server to automatically restart when changes are made, install nodemon:

```sh
npm install -g nodemon
nodemon server.js
```

### 7. Verify the Server is Running

Open your browser or use a tool like Postman and visit:

```
http://localhost:3006/
```

If everything is set up correctly, you should see:

```
Server is running
```

### 8. Stop the Server

To stop the server, press `CTRL + C` in the terminal.

## Troubleshooting

- If `PORT` is already in use, change the port in `.env` or `server.js`
- Ensure Node.js and npm are installed correctly by running:
  ```sh
  node -v
  npm -v
  ```
- If `nodemon` command is not found, try running:
  ```sh
  npx nodemon server.js
  ```

---

This guide ensures you can set up and run your Express server smoothly! 🚀


npm init -y
npm install express cors dotenv    


how to post using thuder client 

{
  "id": 3,
  "name": "Item 3"
}