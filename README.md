# WeLoveMovies Backend

## Context

Welcome to WeLoveMovies, a startup focused on providing users with access to data about movies, theaters, and reviews. As a backend developer for this project, my primary responsibilities included setting up a database and building specific routes to allow users to interact with the data. This project aimed to test my ability to create a robust server, handle database interactions, and adhere to RESTful design principles.

## Research and Use Case

The goal of WeLoveMovies is to enhance the user experience by providing comprehensive information about movies, theaters, and reviews. Users can access this information through the frontend application, which is being developed separately. The backend is designed to handle requests, process data, and deliver relevant information to the frontend for a seamless user experience.

## Live Frontend Link

Access the live frontend application [here](https://welovemovies-frontend-sjx0.onrender.com/).

## Features and Aspects

### Database Tables

I have created five tables for this project, each detailed in the `docs/tables/` folder. Migrations for each table were created and executed. Seed data is available in `./src/db/seeds`.

### Routes

Five routes have been implemented, and detailed information can be found in the `docs/routes/` folder. Some routes return data based on query parameters, providing flexibility in accessing information.

### General Tasks

- The `app.js` and `server.js` files are correctly configured, with `app.js` exporting the Express application.
- The `cors` package is used to enable requests from the frontend to reach the backend.
- If a request is made to a non-existent route, the server returns a 404 error.
- If a request is made to an existing route with an incorrect HTTP method, a 405 error is returned.
- All routes respond with the appropriate status codes and utilize a `data` key in the response.

## Technologies and Tools

- **Express.js:** A web application framework for Node.js, used to build the backend server.
- **Knex.js:** A SQL query builder for Node.js, used for database interactions, migrations, and seeding.
- **SQLite:** A lightweight, file-based database engine, used for testing purposes.
- **Postman:** Utilized for testing API endpoints during development.
- **Cors:** Middleware used to enable cross-origin resource sharing.

## Discoveries

During the development process, I gained valuable insights into structuring databases, creating migrations, and handling complex API routes. Additionally, working with in-memory databases and deploying a backend server to a cloud service presented unique challenges that I successfully navigated.

## Future Goals

Moving forward, I aim to enhance the project by implementing additional features, improving performance, and ensuring a seamless integration with the frontend application. Continuous testing and refinement will be key to delivering a reliable and user-friendly experience.

## Screenshots

[Include relevant screenshots or supplemental images here]

---

Thank you for exploring the WeLoveMovies backend project. Your feedback and contributions are highly appreciated!
