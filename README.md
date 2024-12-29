# MERN Starter Web Project

## Overview
This repository provides a boilerplate setup for a MERN (MongoDB, Express, React, Node.js) stack application with React configured using Vite for a fast development experience.

---

## Prerequisites
Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)
- A Git client (e.g., Git Bash, Git CLI)
- A Twilio account (for SMS functionality)
- A Google account with an App Password (for email functionality)

---

## Setup Instructions

### Step 1: Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://gitlab.com/mernstacksysgenpro/starter-web.git
```

Navigate into the project directory:

```bash
cd starter-web
```

---

### Step 2: Configure Environment Variables
Navigate to the `config` directory:

```bash
cd config
```

Edit  `default.json` file and add the following environment variables. Replace the placeholder values with your actual credentials:

```plaintext
PORT="5001"
DB_URL="your_mongodb_connection_url/DB_NAME"
JWT_SECRET="your_jwt_secret"
EMAIL="your_email_address"
PASSWORD="your_google_app_password"
TWILIO_SID="your_twilio_account_sid"
TWILIO_TOKEN="your_twilio_auth_token"
TWILIO_NUMBER="your_twilio_phone_number"
SERVER_URL="http://localhost:5001"
```

- **DB_URL**: MongoDB connection string (e.g., from MongoDB Atlas)
- **JWT_SECRET**: Secret key for JSON Web Token authentication
- **EMAIL**: Your email address
- **PASSWORD**: Google App Password for the above email address
- **TWILIO_SID**: Twilio Account SID
- **TWILIO_TOKEN**: Twilio Authentication Token
- **TWILIO_NUMBER**: Twilio phone number for sending SMS

---

### Step 3: Install Dependencies
Return to the project root and install all dependencies:

```bash
npm install
```

---


Make sure you have nodemon installed globally for easier development:

```bash
npm install -g nodemon
```

---

### Step 4: Run the Server
Start the backend server:

```bash
npm start
```

The server should now be running on `http://localhost:5001` (or the port specified in your `default.json` file).

---

### Step 5: Run the Frontend
To run the React frontend:

```bash
cd ..
cd client
npm install
npm run dev
```

The React app should now be running on `http://localhost:5173`.

---

## Build for Production
To create a production build of the React app:

```bash
cd client
npm run build
```

The built files will be available in the `client/dist` directory.

---

## Features
- Full-stack MERN boilerplate
- JWT-based authentication
- Environment-based configuration
- Twilio integration for SMS
- Google App Password integration for email notifications
- Vite for a fast development experience

---

## Troubleshooting
- Ensure MongoDB is running locally or the connection string is correct.
- Use a Google App Password for the email functionality (not your actual email password).
- Check the Twilio dashboard for valid SID, Token, and phone number configurations.

For additional help, feel free to reach out! at `https://suhailroushan.com`