This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# Secret Dispatch

Secret Dispatch is an anonymous messaging platform built with Next.js, MongoDB, Zod, Shadcn UI, and AI integration using Gemini Pro. It allows users to send messages anonymously while providing robust authentication features.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Installation](#installation)
4. [Usage](#usage)
5. [Authentication](#authentication)
6. [Database](#database)
7. [AI Integration](#ai-integration)
8. [Deployment](#deployment)
9. [Contributing](#contributing)


## Features

- Anonymous messaging
- User authentication (sign up, sign in)
- Email verification via OTP
- AI-powered message suggestions using Gemini Pro
- Responsive UI built with Shadcn UI
- Form validation using Zod
- MongoDB database integration

## Tech Stack

- [Next.js]- React framework for building web applications
- [MongoDB]- NoSQL database
- [Zod]- TypeScript-first schema validation
- [Shadcn UI]- Re-usable components built with Radix UI and Tailwind CSS
- [NextAuth.js]- Authentication for Next.js
- [Gemini Pro]- AI model for message suggestions

## Getting Started



### Installation

1. Clone the repository:
```bash
git clone https://github.com/pravee1701/secretdispatch.git
```
2. Install dependencies:
``` bash 
npm install
```
3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```bash
MONGODB_URI="your-mongodb-url"
NEXTAUTH_SECRET="your-nextauth-secret"
RESEND_API_KEY="your-resend-api-key"
GOOGLE_API_KEY="your-google-api-key"
```
4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Usage

1. Sign up for an account using your email
2. Verify your email address with the OTP sent to your inbox
3. Log in to your account
4. Start sending anonymous messages
5. Use the AI-powered suggestion feature to get message ideas



## Authentication

Authentication is handled using NextAuth.js. The project uses a Credentials provider, but you can add more providers as needed.

## Database

MongoDB is used as the database. Ensure your connection string is correctly set in the environment variables.

## AI Integration

Gemini Pro is used for generating message suggestions. Make sure to set up your API key in the environment variables.

## Deployment

1. Choose a hosting platform (e.g., Vercel, Netlify)
2. Connect your GitHub repository
3. Set up environment variables in the hosting platform
4. Deploy the application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

