import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Famousman name='Bill Gates' founded='Microsoft'></Famousman>
      <Famousman name='Alone Mask' founded='Twitter'></Famousman>
      <Famousman name='Mark zukerberg' founded='Facebook'></Famousman>
    </div>
  );
}
const different = {
  backgroundColor: 'aqua',
  margin: '20px',
  border: '2px solid red'

}
function Famousman(props) {
  return (
    <div style={different}>
      <h1 style={{ color: 'purple' }}>{props.name}</h1>
      <h3 style={{ color: 'red' }}>{props.founded}</h3>
    </div>
  )
}
export default App;
