// Importing necessary libraries and components.
import React, {useEffect, useState} from 'react'; // React library, useEffect and useState hooks.
import {AgGridReact} from 'ag-grid-react'; // Ag-Grid React component.
import 'ag-grid-community/styles/ag-grid.css'; // Ag-Grid styles.
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Ag-Grid theme.
import {faker} from '@faker-js/faker'; // Faker library for generating mock data.

function App() {
    // Defining state variables.
    const [gridApi, setGridApi] = useState(null); // State to hold the grid API.
    const [rowData, setRowData] = useState([]); // State to hold the row data of the grid.

    // Using useEffect to populate row data after the initial render.
    useEffect(() => {
        // Generating an array of 100 objects to simulate rows in the grid using Faker.js.
        const rows = Array.from({length: 100}, () => ({
            name: `${faker.person.firstName()} ${faker.person.lastName()}`,
            email: faker.internet.email(),
            address: faker.location.streetAddress(),
            company: faker.company.name(),
        }));

        // Setting the generated rows as row data.
        setRowData(rows);
    }, []); // Empty dependency array means this useEffect runs once after the initial render, similar to componentDidMount.

    // Defining column definitions for the grid.
    const columns = [
        {headerName: 'Name', field: 'name'},
        {headerName: 'Email', field: 'email'},
        {headerName: 'Address', field: 'address'},
        {headerName: 'Company', field: 'company'},
    ];

    // Handler function when the grid is ready.  This is the core of the entire example.  We need to get full code coverage on this function.
    // Observe that in the test, the structure of this function was mocked, including the params object and expected properties and functions called in that object
    const onGridReady = (params) => {
        console.log('SUCCESSFULLY CALLED onGridReady'); // Log statement to confirm the onGridReady callback execution, helpful for debugging and ensuring code coverage.
        setGridApi(params.api); // Setting grid API received from the onGridReady event.

        // Selecting the first row when the grid is ready.
        // If you look at the mock in the test, you will see it is designed to mirror what is being called and passed in here...
        setTimeout(() => { //We need this setTimeout to give the grid a chance to populate...
            params.api.forEachNode((node, index) => {
                if (node.rowIndex === 0) {  // Get the first row
                    node.setSelected(true); // Selecting the first row in the grid.
                    // You will see that the mocked functions are only implemented to the minimum amount.  We just need to give the code something to call.
                }
            });
        }, 100);

    };

    // Returning JSX to be rendered.
    return (
        <div className="ag-theme-alpine" style={{height: '500px', width: '100%'}}>
            <AgGridReact
                columnDefs={columns} // Setting column definitions.
                rowData={rowData} // Setting row data.
                onGridReady={onGridReady} // Setting the onGridReady handler.
                rowSelection="single" // Allowing single row selection.
            />
        </div>
    );
}

// Exporting the App component as default export.
export default App;
