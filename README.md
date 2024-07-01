# Note Keeper Project

## Description

The Note Keeper Project is a modern and stylish note management application built using React. This application allows users to effortlessly create and manage their notes. Each note consists of a title and content, and users can easily add or delete notes as needed. The user interface is powered by Material-UI, providing a seamless and intuitive experience that enhances productivity and usability.

## Features

- **Add Notes**: Users can add new notes with a title and content.
- **Delete Notes**: Users can delete existing notes.
- **Responsive UI**: The application is responsive and works well on various devices.
- **Material-UI**: Stylish and intuitive user interface powered by Material-UI.

## Technologies Used

- **Frontend**: React
- **UI Framework**: Material-UI
- **State Management**: React Hooks (useState)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm is installed with Node.js. If you need to install it separately, follow the instructions [here](https://www.npmjs.com/get-npm).

## Installation and Setup

Follow these steps to set up and run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/Meital-Elmakaies/Keeper-app.git
cd Keeper-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm start
```

The development server should now be running on `http://localhost:3000`.

### 4. Open the application

Open your web browser and go to `http://localhost:3000` to view and use the Note Keeper application.

## Project Structure

```
Keeper-app/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── ...
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Note.jsx
│   │   └── CreateArea.jsx
│   ├── index.js
├── .gitignore
├── package.json
└── README.md
```

- **public/index.html**: The main HTML file.
- **public/styles.css**: Global CSS styles for the application.
- **src/components/**: Contains the React components used in the application.
- **src/index.js**: Entry point for the React application.

## Component Descriptions

### `App.jsx`

The main component that manages the state of the notes and renders the `Header`, `CreateArea`, `Note`, and `Footer` components.

### `Header.jsx`

A simple header component that displays the title of the application using Material-UI's `HighlightIcon`.

### `Footer.jsx`

A footer component that displays the current year.

### `Note.jsx`

A component that displays individual notes. Each note can be deleted using the delete button which uses Material-UI's `DeleteIcon`.

### `CreateArea.jsx`

A component that handles creating new notes. It uses Material-UI's `AddIcon`, `Fab`, and `Zoom` components to provide a user-friendly interface for adding notes. The component expands when the user clicks on the text area to provide an input field for the note title.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## Contact

- **Name**: Meital Elmakaies
- **Email**: Meital.elmakaies@gmail.com
