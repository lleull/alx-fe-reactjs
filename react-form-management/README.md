# React Form Management

This project is a demonstration of managing form data in a React application. It includes a user registration form implemented using both controlled components and Formik for advanced form handling.

## Project Structure

```
react-form-management
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── index.js
│   ├── components
│   │   ├── ControlledRegistrationForm.jsx
│   │   ├── FormikRegistrationForm.jsx
│   │   └── FormSummary.jsx
│   ├── styles
│   │   └── App.css
│   └── utils
│       └── validation.js
├── package.json
└── README.md
```

## Features

- **Controlled Components**: The application includes a user registration form that manages its state using React's `useState` hook.
- **Formik Integration**: The registration form is refactored to use Formik, which simplifies form handling and validation.
- **Validation**: Basic validation is implemented to ensure that all fields are filled out before submission, with additional validation using Yup in the Formik form.
- **Form Summary**: After successful registration, a summary of the submitted data is displayed.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate into the project directory**:
   ```
   cd react-form-management
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Dependencies

- React
- Formik
- Yup

## Usage

You can use the `ControlledRegistrationForm` for a simple form handling experience or the `FormikRegistrationForm` for a more robust solution with built-in validation and error handling.

## License

This project is open-source and available under the MIT License.