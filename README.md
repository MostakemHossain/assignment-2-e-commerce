# Express TypeScript MongoDB E-commerce API

This project is an E-commerce API developed using Express and TypeScript, integrating MongoDB with Mongoose for effective data management. Data validation is ensured using Joi/Zod.

## Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **Joi** / **Zod**

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd express-ts-mongo
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory with the following content:
    ```env
    MONGO_URI=<your_mongodb_connection_string>
    PORT=9000
    ```

4. Compile TypeScript and start the server:
    ```sh
    npm run build
    npm start
    ```

## Base URL

- The base URL for the API is: `http://localhost:9000`

- **Live Link:** [Your Live API URL](http://your-live-url.com)

## API Endpoints

### Product Management

- **Create a New Product**
    - **Endpoint:** `POST /api/products`

- **Retrieve All Products**
    - **Endpoint:** `GET /api/products`

- **Retrieve a Specific Product by ID**
    - **Endpoint:** `GET /api/products/:productId`

- **Update Product Information**
    - **Endpoint:** `PUT /api/products/:productId`

- **Delete a Product**
    - **Endpoint:** `DELETE /api/products/:productId`

- **Search Products**
    - **Endpoint:** `GET /api/products?searchTerm=<term>`

### Order Management

- **Create a New Order**
    - **Endpoint:** `POST /api/orders`

- **Retrieve All Orders**
    - **Endpoint:** `GET /api/orders`

- **Retrieve Orders by User Email**
    - **Endpoint:** `GET /api/orders?email=<email>`

