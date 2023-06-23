# MangaVerse_API

This repository contains the backend code for the Manga Browsing Web App, a full-stack web application that allows users to browse and manage their favorite mangas.

## Deployment

The backend server is deployed on Heroku. You can access the live deployment at [https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/](https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/).

## Key Features

- **User Management**: Create, update, and delete user accounts.
- **Manga Management**: Retrieve manga information and perform CRUD operations on manga data.
- **Favorites Management**: Add, update, and delete favorite mangas for each user.
- **Authentication and Authorization**: Secure user authentication and authorization using JSON Web Tokens (JWT).
- **Error Handling**: Handle and respond to errors with appropriate error messages and status codes.

## Technologies Used

The backend is built using the following technologies:

- Backend: Node.js, Express, MongoDB
- Database: MongoDB Atlas
- Deployment: Heroku

## Project Structure

The project structure consists of several directories and files:

- `controllers`: Contains the controller functions for different routes and database operations. This includes `favoriteControllers.js`, `mangaControllers.js`, and `userControllers.js`.
- `data`: Contains JSON data files used for seeding the database. This includes `manga.json` and `mangaDetails.json`.
- `db`: Contains database-related files, including the database connection and seeding scripts. This includes `dbConnect.js`, `dbSeedJSON.js`, and `dbSeedMongo.js`.
- `middleware`: Contains middleware functions used for authentication and authorization. The `verifyAuth.js` middleware ensures routes requiring authentication are protected.
- `models`: Contains the database models defined using Mongoose. This includes `favoriteModel.js`, `manga.js`, and `user.js`.
- `routes`: Contains the route handlers for different API endpoints. This includes `authRoutes.js`, `favoriteRoutes.js`, `mangaRoutes.js`, and `userRoutes.js`.
- `server.js`: The entry point of the backend server, where the Express app is initialized and routes are defined.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `LICENSE`: The license file for the project.
- `Procfile`: Specifies the commands to run on Heroku deployment.
- `README.md`: Provides information and documentation about the backend code.
- `package-lock.json` and `package.json`: Files that store the project's dependencies and scripts.

## Installation and Setup

To run the backend server locally, follow these steps:

1. Clone the repository: `git clone https://github.com/lst68868/project-3-backend.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

The server will run on `http://localhost:3000` by default.

## Database Connection

The backend server connects to a MongoDB database hosted on MongoDB Atlas. The connection configuration is stored in the `.env` file using the `DATABASE_URL` variable. The `dbConnect.js` file establishes the connection with the database using Mongoose.

## Data Seeding

The project includes functionality for seeding manga data into the database. The seeding process retrieves manga information from an external API and saves it to the `manga.json` file. The `dbSeedJSON.js` script is responsible for fetching the manga data and saving it to the file.

To seed the data, run the following command:

```bash
npm run seed
```

This command executes the `dbSeedJSON.js` script and fetches the manga data from an external API using the `axios`

library. The data is then saved to the `manga.json` file in the `data` directory.

## Error Handling

The backend server includes error handling middleware to handle and respond to errors with appropriate error messages and status codes. The `server.js` file sets up error handling middleware to catch and handle errors throughout the application. This ensures a smooth user experience and improved error handling in the application.

## Authentication and Authorization

The server implements user authentication and authorization using JSON Web Tokens (JWT). The `verifyAuth.js` middleware ensures that routes requiring authentication are protected and only accessible with a valid JWT. This middleware verifies the token present in the request headers and allows authenticated users to access protected routes.

## Contributors

This project has been developed by the following contributors:

Lst68868 (Leo) - Technical Lead

- Created the public frontend and backend repositories.
- Deployed the frontend and backend to Netlify and Heroku.
- Conducted code reviews and managed git pulls, merges, and conflicts.
- Made significant contributions to backend and frontend authentication.

AleksBulajic - Project Manager

- Managed group scheduling and delegated responsibilities.
- Conducted and scheduled standup meetings.
- Made significant contributions to backend and frontend authentication.

kevininga - Backend and Database Specialist

- Implemented backend routes and MongoDB integration.
- Collaborated on backend architecture and best practices.

alibay97 (Alison) - Lead Designer and Frontend Developer

- Led frontend design efforts.
- Made significant contributions to frontend development and CSS styling.
- Collaborated on frontend architecture and best practices.

## Contributing

Contributions to the project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature/bug fix: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

Please make sure to follow the code style guide and maintain consistency with the existing codebase.

## Contact

For any inquiries or further information, please feel free to reach out to any of the contributors mentioned above.

We hope you enjoy using the Manga Browsing Web App!

---

Note: The frontend code for this project can be found at [https://github.com/lst68868/project-3-frontend](https://github.com/lst68868/project-3-frontend).
