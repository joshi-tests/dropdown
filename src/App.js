import { Dropdown } from './components/Dropdown';
import { Navbar } from './components/Navbar';
import { NavbarItems } from './components/NavbarItems';

function App() {
  return (
    <Navbar>
      <NavbarItems>
        <Dropdown/>
      </NavbarItems>
    </Navbar>
    
  );
}

export default App;

