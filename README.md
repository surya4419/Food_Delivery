
# Pumato - Full Stack Food Delivery Application

Pumato is a comprehensive full-stack food delivery platform built with modern web technologies. The application provides a complete ecosystem for food ordering, including customer frontend, admin dashboard, and robust backend services with secure payment integration.

## 🚀 Project Overview

Pumato is a feature-rich food delivery application that connects customers with delicious food options through an intuitive interface. The platform includes three main components:
- **Customer Frontend**: User-facing application for browsing and ordering food
- **Admin Dashboard**: Administrative panel for managing food items, orders, and business operations
- **Backend API**: RESTful API handling all business logic, authentication, and data management

## ✨ Key Features

### Customer Features
- **User Authentication**: Secure registration and login system with JWT tokens
- **Food Browsing**: Browse food items by categories with detailed descriptions and images
- **Search Functionality**: Real-time search for food items
- **Shopping Cart**: Add/remove items, manage quantities, and view cart totals
- **Order Management**: Place orders, track order status, view order history
- **User Profile**: Manage personal information and view order history
- **Payment Integration**: Secure payment processing with Stripe
- **Responsive Design**: Mobile-friendly interface for all devices
- **Mobile App Promotion**: Dedicated section for mobile app download

### Admin Features
- **Food Management**: Add new food items with images, descriptions, and pricing
- **Food Listing**: View and manage all available food items
- **Order Management**: View and manage customer orders with status updates
- **Dashboard Interface**: Clean and intuitive admin panel

### Technical Features
- **Image Upload**: Support for food item image uploads with multer
- **Real-time Updates**: Dynamic content updates without page refresh
- **Error Handling**: Comprehensive error handling and user feedback
- **Security**: Password hashing with Argon2, JWT authentication, CORS protection

## 🛠️ Technology Stack

### Frontend (Customer)
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **React Router DOM**: Client-side routing for SPA navigation
- **Axios**: HTTP client for API communication
- **CSS3**: Custom styling with responsive design

### Frontend (Admin)
- **React 18**: Modern React framework
- **Vite**: Fast development environment
- **React Router DOM**: Navigation management
- **React Toastify**: User notifications and feedback
- **Axios**: API communication

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling tool
- **JWT (jsonwebtoken)**: Authentication token management
- **Argon2**: Secure password hashing
- **Stripe**: Payment processing integration
- **Multer**: File upload handling for images
- **CORS**: Cross-Origin Resource Sharing
- **dotenv**: Environment variable management

### Development Tools
- **ESLint**: Code linting and quality assurance
- **Nodemon**: Development server auto-restart
- **Vite Dev Server**: Frontend development server

## 📁 Project Structure

```
Food_Delivery/
├── frontend/                 # Customer-facing React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   └── assets/         # Static assets
├── admin/                   # Admin dashboard React application
│   ├── src/
│   │   ├── components/      # Admin UI components
│   │   └── pages/          # Admin page components
├── backend/                 # Node.js/Express API
│   ├── controllers/        # Business logic controllers
│   ├── models/            # MongoDB data models
│   ├── routes/            # API route definitions
│   ├── middleware/        # Custom middleware functions
│   ├── config/           # Database configuration
│   └── uploads/          # Uploaded image storage
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Stripe account for payment processing

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Food_Delivery
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your .env file with MongoDB URI, JWT secret, and Stripe keys
   npm run server
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd admin
   npm install
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env` file in the backend directory with:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 📱 Usage

### Customer Application
- Visit the frontend URL (typically http://localhost:5173)
- Browse food items, add to cart, and place orders
- Track order status and manage profile

### Admin Dashboard
- Access the admin panel (typically http://localhost:5174)
- Manage food inventory and pricing
- Process and update customer orders

## 🔒 Security Features

- **Password Security**: Argon2 hashing for secure password storage
- **Authentication**: JWT-based authentication system
- **Input Validation**: Server-side validation for all user inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Environment Variables**: Sensitive data stored securely

## 🎯 API Endpoints

### Food Management
- `GET /api/food` - Get all food items
- `POST /api/food` - Add new food item (admin)
- `GET /api/food/:id` - Get specific food item

### User Management
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Cart Management
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart` - Get user cart

### Order Management
- `POST /api/order/place` - Place new order
- `GET /api/order/myorders` - Get user orders
- `POST /api/order/status` - Update order status (admin)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Responsive design for mobile and desktop users
- Secure payment integration with industry-standard practices
- Clean architecture following MVC pattern

---

**Pumato** - Delivering delicious food with cutting-edge technology! 🍕✨

