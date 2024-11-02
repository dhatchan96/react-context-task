
# Shopping Cart Application

This project is a Shopping Cart application built with React and Vite, which includes features like adding/removing items, updating item quantities, and displaying the total quantity and amount. It uses Context API for state management and supports dynamic title updates with `react-helmet`.

## Features

- **Add/Remove Items**: Easily add or remove items from the cart.
- **Quantity Adjustment**: Modify the quantity of items directly from the cart.
- **Total Calculation**: Automatically calculates total quantity and amount.
- **Dynamic Title and Favicon**: Title updates based on cart contents, and a favicon/logo is displayed in the title bar.
- **Responsive Design**: Optimized for different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast project bundling and development.
- **Context API**: For state management across the app.
- **React Helmet**: For managing dynamic document head data.
- **CSS**: For styling the components.

## Project Structure

```
.
├── public
│   ├── index.html      # Main HTML file
│   ├── logo.png        # Favicon logo for the title bar
├── src
│   ├── App.jsx         # Root component of the application
│   ├── CartContext.jsx # Context for managing cart state
│   ├── CartPage.jsx    # Cart page component displaying cart items
│   ├── CartPage.css    # CSS for cart page styling
│   ├── products.json   # Sample data file with products
│   └── main.jsx        # Entry point for Vite
├── .gitignore          # Specifies files to ignore in Git
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```
