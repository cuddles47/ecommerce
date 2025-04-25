# Elecshop - Frontend Application

A modern Next.js e-commerce frontend with Shadcn UI, Tailwind CSS, and AI-powered features.

## Features

- 🛒 Full shopping cart functionality
- 🔍 Advanced product search and filtering
- 👤 User account management
- 🔒 Authentication with JWT refresh tokens
- 💳 Payment integration (PayPal & Stripe)
- 🤖 AI-powered product recommendations
- 🎨 Modern UI with dark/light mode
- 📱 Responsive design for all devices

## Prerequisites

- Node.js (v16 or higher)
- pnpm (preferred package manager)
- Backend API running

## Getting Started

### 1. Environment Setup

Create a `.env.local` file in the frontend directory with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 2. Install Dependencies

```bash
# From the frontend directory
pnpm install

# Or from the root directory
pnpm install
```

### 3. Run Development Server

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Build and Production

### Create Production Build

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Project Structure

```
src/
├── app/             # Next.js app router pages
├── components/      # Reusable UI components
├── config/          # Application configuration
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and libraries
└── modules/         # Feature modules
```

## Key Features Implementation

### Authentication

Authentication is handled with JWT tokens and HTTP-only cookies for secure sessions. The frontend stores the access token in memory and uses a refresh token for session persistence.

### Product Management

Products can be browsed, searched, and filtered. Admin users can create and manage products through the admin dashboard.

### Shopping Cart

Cart functionality persists:
- In local storage for guest users
- On the backend database for logged-in users
- Automatically merges when a guest user logs in

### AI Features

The application includes AI-powered features:
- Product recommendations based on browsing history
- AI Chat assistant for product inquiries
- AI-powered product creation tools (admin only)

## Deployment

The frontend is configured for easy deployment on Vercel:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

## Testing

```bash
# Run tests
pnpm test
```

## Learn More

To learn more about Next.js, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
