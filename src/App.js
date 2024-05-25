// import logo from './logo.svg';
import './App.css';
import Options from './Component/Options.js';
import RegisterForm from './Component/RegisterForm.js';
import AuthProvider from './context/authContext.js';

function App() {
  return (
    <div>
      <AuthProvider>
        <Options />
        {/* <DetailPost data={dataDetail} /> */}


      </AuthProvider>
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload no way lfhjlhsjaldhjsalhdjslahdjslahdjsalhdjsalhdjsalkhd.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>