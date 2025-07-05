# 📚 BookCrate Library Management System

BookCrate is a minimalist Library Management System built using **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. The system is designed to demonstrate clean architecture, RESTful API integration, and responsive UI design for managing books and borrowings—**without the complexity of user authentication or payment systems**.

---

## Features

### Public Access
All routes are open and do not require authentication, allowing users to manage and interact with books freely.

### Book Management

- **Book List Table**  
  View all books in a responsive table layout with the following columns:
  - Title
  - Author
  - Genre
  - ISBN
  - Copies
  - Availability
  - Actions (Edit | Delete | Borrow)

- **Add New Book**  
  - Accessed via `/create-book`
  - Form fields include: Title, Author, Genre, ISBN, Description, Copies
  - Automatically marked as available unless copies = 0
  - Redirects to book list upon successful submission

- **Edit Book**  
  - Accessed via `/edit-book/:id`
  - Updates existing book info and reflects changes immediately

- **Delete Book**  
  - Opens a confirmation modal before deleting
  - Removes the book and updates the UI upon confirmation

- **Borrow Book**  
  - Accessed via `/borrow/:bookId`
  - Fields: Quantity, Due Date
  - Borrow logic:
    - Quantity cannot exceed available copies
    - If copies reach 0, the book is marked as unavailable
  - On success, redirects to `/borrow-summary`

### Borrow Summary

- Accessed via `/borrow-summary`
- Aggregated view of all borrowed books
- Displays:
  - Book Title
  - ISBN
  - Total Quantity Borrowed

---

## Page Structure

| Route               | Description                                 |
|--------------------|---------------------------------------------|
| `/books`           | List of all books with actions              |
| `/create-book`     | Form to add a new book                      |
| `/books/:id`       | View detailed book information              |
| `/edit-book/:id`   | Edit a book’s details                       |
| `/borrow/:bookId`  | Borrow form for a selected book             |
| `/borrow-summary`  | Aggregated list of borrowed books           |

---

## UI/UX Design

- **Minimal & Clean**: Focus on usability and clarity using **Tailwind CSS**
- **Responsive**: Fully adaptable across mobile, tablet, and desktop devices
- **User-Friendly Navigation**:
  - Simple **Navbar** for routing between major sections
  - Clearly labeled buttons and forms
  - Standard **Footer** with site info or credits

---

## Tech Stack

- **Frontend**: React + TypeScript
- **State Management**: Redux Toolkit Query (RTK Query)
- **Styling**: Tailwind CSS
- **API**: RESTful endpoints (assumed to be available)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bookcrate-library.git
cd bookcrate-library
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure API Base URL
Update the base URL of your REST API in src/redux/api/apiSlice.ts or wherever you've configured RTK Query.

```ts
// Example
baseUrl: 'http://localhost:5000/api',
```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:5173 to view the app in your browser.

## Available Scripts

| Command         | Description                          |
|----------------|--------------------------------------|
| `npm run dev`   | Starts the development server        |
| `npm run build` | Builds the app for production        |
| `npm run lint`  | Runs linter to check for code issues |


[Live Link](https://bookcrate-library-management.netlify.app/)
