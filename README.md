Auth System Project Overview
Description
This project is a basic authentication system implemented using Node.js, Express, and MySQL. It provides user registration, login, and profile retrieval functionalities secured by JSON Web Tokens (JWT).

Features

User Registration:
Endpoint: POST /api/auth/register
Registers a new user with a unique username and email.
Hashes the user's password using bcrypt before storing it in the database.

User Login:
Endpoint: POST /api/auth/login
Authenticates a user using email and password.
Generates and returns a JWT upon successful login.

Profile Retrieval:
Endpoint: GET /api/auth/profile
Retrieves the profile information of the logged-in user.
Protected by JWT, requiring the token for access.

Technologies Used
Node.js: JavaScript runtime for server-side development.
Express: Web framework for building APIs.
MySQL: Relational database for storing user data.
bcryptjs: Library for hashing passwords.
jsonwebtoken: Library for creating and verifying JWTs.
dotenv: Library for loading environment variables.
jest: Testing framework.
supertest: Library for HTTP assertions during testing.
