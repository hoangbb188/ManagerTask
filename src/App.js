
import './App.css';
import Header from "./components/Header";
import ListTask from './components/ListTask';
import TaskHeader from './components/TaskHeader';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <TaskHeader/>
        <ListTask/>
      </div>
    </div>
  );
}

export default App;
