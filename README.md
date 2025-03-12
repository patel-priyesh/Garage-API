# Garage API

Garage API is a RESTful API built using Node.js, Express.js, and MongoDB. It provides functionality for managing garages, vehicles, customers, services, and shopkeepers while ensuring secure access and data integrity.

## Features

- **User Authentication & Authorization** (JWT-based login & signup)
- **Secure Password Hashing** (bcrypt)
- **Garage, Vehicle, Customer, Service & Shopkeeper Management** (CRUD operations)
- **Error Handling & Logging**
- **MongoDB Integration** (Mongoose for data modeling)

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token) for authentication
- Bcrypt for password security

## API Endpoints

### Customer Management

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | /customers       | Create a customer       |
| POST   | /customers/login | Customer login          |
| GET    | /customers       | Get all customers       |
| GET    | /customers/\:id  | Get customer by ID      |
| PATCH  | /customers/\:id  | Update customer details |
| DELETE | /customers/\:id  | Delete a customer       |

### Service Management

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| POST   | /services      | Create a service       |
| GET    | /services      | Get all services       |
| GET    | /services/\:id | Get service by ID      |
| PATCH  | /services/\:id | Update service details |
| DELETE | /services/\:id | Delete a service       |

### Shopkeeper Management

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | /shopkeepers       | Create a shopkeeper       |
| POST   | /shopkeepers/login | Shopkeeper login          |
| GET    | /shopkeepers       | Get all shopkeepers       |
| GET    | /shopkeepers/\:id  | Get shopkeeper by ID      |
| PUT    | /shopkeepers/\:id  | Update shopkeeper details |
| DELETE | /shopkeepers/\:id  | Delete a shopkeeper       |

## Security Measures

- **JWT Authentication** for secure access.
- **Bcrypt Password Hashing** for storing passwords safely.
- **Input Validation & Error Handling** to prevent attacks.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

