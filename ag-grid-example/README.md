# AgGridReact Testing Example

## Overview of `App` Component and Test

This project contains a simplified `App.js` component that utilizes `ag-Grid` for tabular data and employs `faker.js` to generate mock data. The associated test file, using `jest` and `@testing-library/react`, aims to test the `App` component.

## App Component (`App.js`)

### **Objective:**

Create a simple React component, `App`, which renders an `ag-Grid` table filled with mock data.

### **Components and Libraries:**

- `React`: A JavaScript library for building user interfaces.
- `ag-Grid-react`: A React component from ag-Grid to render grids or tables.
- `faker.js`: A library to generate massive amounts of fake data.

### **Functionalities:**

1. **Grid Rendering:** Renders an `ag-Grid` table with columns for Name, Email, Address, and Company.
2. **Row Data Population:** Populates the grid with 100 rows of mock data on initial render.
3. **Row Selection:** Selects the first row when the grid is ready.

## Testing (`App.test.js`)

### **Objective:**

Test the `App` component to ensure it renders correctly and that the functionalities described above are working as intended.

### **Testing Frameworks and Libraries:**

- `jest`: A JavaScript Testing Framework.
- `@testing-library/react`: A lightweight solution for testing React components.

### **Testing Methodology:**

1. **Mocking Dependencies:**
    - Mocks `AgGridReact` to control its behavior and isolate the component for testing.

2. **Rendering Component:**
    - Renders the `App` component using the `render` function from `@testing-library/react`.

3. **Assertions:**
    - Checks if the mocked `AgGridReact` is in the document to ensure the component renders correctly.

## How to Run

1. Install dependencies using `npm install` or `yarn install`.
2. Run tests using `npm test` or `yarn test`.

## Glossary:

- **React Hook:** Functions that let you use state and other React features in functional components (e.g., `useState`, `useEffect`).
- **Mocking:** Replacing parts of the system under test with fake parts that let you control how they behave.
- **Render:** The process of converting React elements into actual DOM nodes that the browser can understand and display.
- **Ag-Grid:** A JavaScript grid/spreadsheet component.
- **JSX (JavaScript XML):** Syntax extension for JavaScript recommended by React.
- **API (Application Programming Interface):** A set of rules that allow programs to talk to each other.
