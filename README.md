# Vue 3 + TypeScript + Vite

## Overview

This is a Vue.js 3 project written in TypeScript, utilizing Vite as the build tool. The project is configured to use SCSS for styling and Axios for making HTTP requests.

## Project Structure

```
├── src
│ ├── assets # Static assets (images)
│ ├── components # Reusable Vue components
│ ├── lang # Localization files
│ ├── services # API calls
│ ├── styles # Global styles
│ ├── types # TypeScript interfaces
│ ├── views # Pages/Views of the application
│ ├── App.vue # Root component
│ └── main.ts # Application entry point
├── package.json # Project dependencies and scripts
└── vite.config.ts # Vite configuration
```

## Getting Started

Prerequisites
Make sure you have Node.js installed on your machine (Node.js >= 16.x).

## Installation

Clone the repository:

```
git clone <repository>
```

```
cd <file>
```

Install dependencies:

```
npm install
```

Running the Development Server
To run the application in development mode with hot-reload:

```
npm run dev
```

This command simultaneously:
-Starts json-server, which uses the src/services/data.json file as an API, on port 3000.
-Starts Vite, which provides a development environment

Open http://localhost:5173 to view the application.
The API is available at http://localhost:3000.

# API Description

API Server (json-server):

## Data File:

The API uses the file src/services/data.json, which contains test data in JSON format.

## Routing

json-server automatically generates routes based on the structure of the data.json file.

## Example of data.json content:

```
{
  "data": [
    { "id": 1, "reviews": 163, "mark": 4.3 },
  ]
}
```

## Automatically generated routes:

Get all records: GET /data
Get record by ID: GET /data/1
Add new record: POST /data
Update record: PUT /data/1 or PATCH /data/1
Delete record: DELETE /data/1
