import './App.css';
// import DataGrid100 from './components/DataGrid100';
// import DataGrid1000 from './components/DataGrid1000';
// import DataGrid10000 from './components/DataGrid10000';
// import DataGrid100000 from './components/DataGrid100000';
// import XGrid100 from './components/XGrid100';
// import XGrid1000 from './components/XGrid1000';
// import XGrid10000 from './components/XGrid10000';
import XGrid100000 from './components/XGrid100000';

function App() {
  return (
    <div className="App">
      <h1>Material-UI DataGrid and XGrid performance measurements</h1>

      <div className="grid-container">
        {/* Different DataGrid and XGrid variations */}
        {/* <DataGrid100 /> */}
        {/* <DataGrid1000 /> */}
        {/* <DataGrid10000 /> */}
        {/* <DataGrid100000 /> */}
        {/* <XGrid100 /> */}
        {/* <XGrid1000 /> */}
        {/* <XGrid10000 /> */}
        <XGrid100000 />
      </div>
    </div>
  );
}

export default App;
