import { Route, Routes } from 'react-router-dom';
import './App.css';
import SidebarNav from './Sidebar Navigation/SidebarNav';
import Dashboard from "./screens/Dashboard/Dashboard";
import Tasks from "./screens/Tasks/Tasks";
import Email from "./screens/Email/Email";
import Contacts from "./screens/Contacts/Contacts";
import GlobalSearch from './SearchBar/GlobalSearch';
import Error404 from './Error404';

function App() {
  return (
    <div className="App">
      <div >
        <SidebarNav />
      </div>
      <div className='screen-container'>
        <GlobalSearch />
        <Routes path="/">
          <Route index path="/" element={<Dashboard/>} ></Route>
          <Route path='/contacts' element={<Contacts />} ></Route>
          <Route path='/tasks' element={<Tasks />} ></Route>
          <Route path='/email' element={<Email />} ></Route>
          <Route path='/*' element={<Error404 />} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
