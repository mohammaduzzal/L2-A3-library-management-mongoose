# 📚 Library Management API

A robust RESTful API for managing books and borrowings in a library system. Built with Express, TypeScript, and MongoDB (via Mongoose).


## ✨ Features

### 📖 Book Management
- Create new books with full details
- Retrieve paginated list of books with filtering (genre) and sorting
- Get single book details by ID
- Update book information
- Delete books from collection

### 🔄 Borrowing Management
- Record book borrowings with automatic stock adjustment
- View borrowing summaries grouped by book
- Track total borrowed quantities per title

### 🛡️ System Features
- Robust error handling with consistent responses
- Type-safe codebase with TypeScript
- Environment configuration with dotenv
- CORS support enabled

## 🚀 Technologies Used

| Category        | Technologies                          |
|-----------------|---------------------------------------|
| **Backend**     | Node.js, Express.js                   |
| **Language**    | TypeScript                            |
| **Database**    | MongoDB                               |
| **ODM**         | Mongoose                              |
| **Validation**  | zod (available)                       |
| **Security**    | dotenv, cors                          |


## API Endpoints

### Book Endpoints

| Method | Endpoint           | Description                     |
|--------|-------------------|---------------------------------|
| POST   | `/api/books`      | Create a new book               |
| GET    | `/api/books`      | Get all books (filterable)      |
| GET    | `/api/books/:id`  | Get single book details         |
| PUT  | `/api/books/:id`  | Update book information         |
| DELETE | `/api/books/:id`  | Remove a book                   |

### Borrowing Endpoints

| Method | Endpoint             | Description                 |
|--------|---------------------|-----------------------------|
| POST   | `/api/borrow`       | Record a book borrowing     |
| GET    | `/api/borrow/summary` | Get borrowing summary     |


## 🚀 Getting Started

### 📦 Installation
1. Clone the repository:
```bash
git clone https://github.com/mohammaduzzal/L2-A3-library-management-mongoose.git
cd L2-A3-library-management-mongoose

Install dependencies:

npm install

⚙️ Environment Variables
Create a .env file in the root directory of your project and add the following:

PORT=5000
DATABASE_URL=your_mongodb_connection_string

PORT: The port on which the server will run (e.g., 5000).



▶️ Running the Server
To start the development server:

npm run dev

The server will typically run on http://localhost:5000 (or the port you specified in your .env file).