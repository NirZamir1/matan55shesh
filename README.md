# Saas-Quickstart

This repository is a full-stack project that includes both frontend and backend setups with predefined Docker configurations. It is organized into multiple directories, each responsible for different aspects of the application. The project uses `Next.js` for the UI and `NestJS` for the server.

## Project Structure

- **UI (next)**: The frontend part of the project using Next.js.
- **Server (nest)**: The backend part of the project using NestJS.
- **Dev**: Contains development-related files, including scripts and configuration.
  - **scripts**: A directory for basic scripts to facilitate development.
  - **localenv**: Contains the `docker-compose.yml` file with predefined Docker configurations.

## Setup

### Prerequisites
Make sure you have the following installed on your machine:

- Docker
- Node.js
- npm or yarn

### Getting Started
2. Install dependencies for both the UI and server:

    ```bash
    # Install dependencies for the UI (Next.js)
    cd ui
    npm install
    
    # Install dependencies for the Server (NestJS)
    cd ../server
    npm install
    ```

3. Set up Docker:

    The `localenv` directory contains a `docker-compose.yml` with the necessary configurations. You can use this to start up the project in Docker containers.

    ```bash
    cd localenv
    docker-compose up
    ```

4. Running the Project Locally:

    You can start both the UI and server locally using the scripts in their respective `package.json` files:

    - **UI**: Navigate to the `ui` directory and run:

        ```bash
        npm run dev
        ```

    - **Server**: Navigate to the `server` directory and run:

        ```bash
        npm run start:dev
        ```

### Development Scripts

The project includes helpful development scripts defined in the `package.json` files of both the UI and server. You can run these scripts for common tasks.

#### Server (NestJS)

Here are the important server scripts:

- `npm run build`: Builds the NestJS application.
- `npm run start`: Starts the NestJS server.
- `npm run start:dev`: Starts the NestJS development server with watch mode.
- `npm run lint`: Lints the code using ESLint.
- `npm run test`: Runs unit tests using Jest.
- `npm run db:migrate`: Runs database migrations and generates Prisma client.
- `npm run db:reset`: Resets the database using Prisma.

For additional scripts, refer to the `package.json` file in the `server` directory.

#### UI (Next.js)

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the Next.js application for production.
- `npm run start`: Starts the Next.js application in production mode.
- `npm run lint`: Lints the code using Next.js linting.
- `npm run env:encrypt`: Encrypts environment variables.
- `npm run env:decrypt`: Decrypts environment variables.

### Docker Configuration

To run the project using Docker, you can use the predefined `docker-compose.yml` file located in the `localenv` directory. This configuration sets up the necessary containers for the project and simplifies the process of running everything together.

1. Build and start the containers:

    ```bash
    docker-compose up --build
    ```

2. Access the UI and Server:

    - The UI should be accessible at `http://localhost:3000`.
    - The server should be accessible at `http://localhost:4000`.

## Contribution

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
