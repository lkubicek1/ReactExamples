// Importing necessary libraries and components for testing
import {render, screen} from '@testing-library/react'; // Provides functions to render a component and to query the rendered output
import React, {useEffect} from 'react'; // React library and the useEffect hook
import App from './App'; // The component we are testing

// Define a mock component to replace the real AgGridReact component during testing.
// This is crucial to isolate the App component and control the behavior of the AgGridReact component, ensuring the testing environment is predictable and manipulable.
// We use a regular function declaration (instead of an arrow function) because it gets hoisted, allowing it to be referenced in jest.mock() below.
function MockAgGridReact(props) {
    // The useEffect hook is used to perform side effects in functional components.
    // Here, it’s used to call the onGridReady prop, simulating the behavior of the real AgGridReact component.
    useEffect(() => {
        // Checking if onGridReady prop exists, then call it with a mock object to simulate grid readiness.
        // This enables testing the App component's reaction to the grid being ready without relying on the real grid's implementation.
        if (props.onGridReady) props.onGridReady({
            api: {  //Adding the api reference to the mock
                forEachNode: (callback) => {  // Note the ignored callback here.  This is a placeholder variable for what is passed into the forEachNode call in onGridReady
                    console.log('mock forEachNode here...') // Log to the console to indicate that the mock forEachNode is called.
                    // Simulating a call to the passed callback, providing a mock node object.
                    callback({
                        rowIndex: 0, // A mock rowIndex representing the first row in the grid.
                        setSelected(newValue, clearSelection, source) {
                            // Logging to signify that the mock setSelected is being called.
                            console.log('mock setSelected here...')
                        }
                    })
                }
            }
        });
    }, []); // An empty dependency array means this useEffect runs once after the initial render.

    // Return some JSX that will be rendered in place of the real AgGridReact component.
    return <div>Mock AgGridReact</div>;
}

// Use jest.mock to replace the real AgGridReact component with our mock component when the module is required.
// jest.mock calls are hoisted above imports, so even though this appears after the function declaration, it’s actually executed before.
// However, since function declarations are also hoisted, MockAgGridReact is available here.
jest.mock('ag-grid-react', () => ({AgGridReact: MockAgGridReact}));

// Define a test case.
it('stateful component returns a valid component instance', async () => {
    render(<App/>); // Render the App component. This will use the mocked AgGridReact component.
    // Check that the text "Mock AgGridReact" is in the document.
    // This verifies that our mock AgGridReact component is being rendered as expected.
    expect(screen.getByText('Mock AgGridReact')).toBeInTheDocument();
});
