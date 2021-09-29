import Button from './lib/Components/Button';
import Div from './lib/Components/Div';


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      gap: '1.5rem',
      padding: '5rem'
    }}>
      <p>Wow, look at this component library.</p>
      <h5>A notification badge:</h5>
      <Div >Hello</Div>
      <br />
      <h5>A button:</h5>
      <Button text="Enter"/>
    </div>
  );
}

export default App;
