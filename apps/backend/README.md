# Elecshop NestJS Backend API

A robust, feature-rich eCommerce backend API built with NestJS, MongoDB, and JWT authentication.

## Features

- 🔐 JWT Authentication with access and refresh tokens
- 👤 User management with role-based access control
- 🏪 Product catalog with categories, reviews, and search
- 🛒 Shopping cart system with persistence
- 📦 Order processing and management
- 🤖 AI-powered product generation and recommendations
- 📊 Swagger API documentation
- 🔒 Security features (Helmet, CORS, Rate Limiting)
- ☁️ Cloudinary integration for image storage
- 🌱 Database seeding for development

## Prerequisites

- Node.js (v16 or higher)
- Docker (recommended for MongoDB) 
- pnpm (preferred package manager)
- Cloudinary account (for media storage)
- OpenAI API key (for AI features)
- Replicate API key (for image generation)

## Getting Started

### 1. Environment Setup

Create a `.env` file in the backend directory with the following variables:

```
PORT=4000
ALLOWED_ORIGINS=http://localhost:3000
JWT_SECRET=your_jwt_secret
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
MONGODB_URI=mongodb://localhost:27017/modern-ecommerce
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
REPLICATE_API_TOKEN=your_replicate_api_token
OPENAI_API_KEY=your_openai_api_key
```

### 2. Install Dependencies

```bash
# From the backend directory
pnpm install
```

### 3. Start MongoDB with Docker

```bash
# Start MongoDB container
pnpm start:mongo
```

This command runs the Docker Compose file that sets up a MongoDB instance.

### 4. Seed the Database

```bash
# Seed the database with initial data
pnpm seed
```

The seeding process will:
- Create an admin user with credentials:
  - Email: `admin@example.com`
  - Password: `admin123`
- Create additional sample users (19 regular users)
- Add sample products with categories, images, and details
- Set up initial store configuration

### 5. Start the Development Server

```bash
# Start the NestJS server in development mode
pnpm dev
```

The server will start on http://localhost:4000 by default.

## API Documentation

Once the server is running, access the Swagger API documentation at:
```
http://localhost:4000/api
```

This provides a complete, interactive reference for all API endpoints.

## Key API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login and get tokens
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/profile` - Get current user profile

### Products
- `GET /api/v1/products` - Get all products (with pagination, filters)
- `GET /api/v1/products/:id` - Get product details
- `POST /api/v1/products` - Create new product (admin)
- `PUT /api/v1/products/:id` - Update product (admin)
- `DELETE /api/v1/products/:id` - Delete product (admin)
- `POST /api/v1/products/:id/reviews` - Add product review

### Cart
- `GET /api/v1/cart` - Get user's cart
- `POST /api/v1/cart` - Add item to cart
- `PUT /api/v1/cart/:id` - Update cart item quantity
- `DELETE /api/v1/cart/:id` - Remove item from cart

### Orders
- `POST /api/v1/orders` - Create new order
- `GET /api/v1/orders` - Get user's orders
- `GET /api/v1/orders/:id` - Get order details
- `PUT /api/v1/orders/:id/pay` - Update order to paid
- `PUT /api/v1/orders/:id/deliver` - Update order to delivered (admin)

### AI Features
- `POST /api/v1/ai/generate-product` - Generate product with AI
- `POST /api/v1/ai/generate-image` - Generate product image with AI

## Project Structure

```bash
src/
├── ai/                   # AI-related modules and services
├── app/                  # Core app module
├── cart/                 # Shopping cart functionality
├── cloudinary/           # Cloudinary integration
├── decorators/           # Custom decorators
├── guards/               # Authentication guards
├── interceptors/         # Request/response transformers
├── orders/               # Order processing
├── products/             # Product catalog
├── seeds/                # Database seeding
├── strategies/           # Authentication strategies
├── users/                # User management
└── utils/                # Utilities and helpers
```

## Available Scripts

```bash
# Development
pnpm dev               # Start development server
pnpm seed              # Seed the database

# Database
pnpm start:mongo       # Start MongoDB container

# Production
pnpm build             # Build for production
pnpm start:prod        # Run production server

# Testing
pnpm test              # Run tests
pnpm test:e2e          # Run end-to-end tests
```

## Token System Architecture

The API implements a secure dual-token authentication system:

- **Access Token**: Short-lived JWT token (15 minutes) for API authentication
- **Refresh Token**: Long-lived token (7 days) stored as HTTP-only cookie

When the access token expires, the client can use the refresh token to obtain a new pair of tokens without requiring the user to log in again.

## Database Seeding Details

The seeding system creates:

1. An admin user:
   - Email: `admin@example.com`
   - Password: `admin123`
   - Has full access to all admin features

2. Regular users:
   - 19 randomly generated users
   - All with password: `password123`

3. Products:
   - Various electronics and gadgets
   - With realistic details, images, and pricing
   - Distributed across different categories

To modify seed data, edit the files in:
- `src/utils/data/seed-products.ts`
- `src/utils/seed-users.ts`

## Deployment

For production deployment:

```bash
# Build the application
pnpm build

# Start the production server
pnpm start:prod
```

The application is configured for easy deployment to platforms like Railway or Heroku.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
