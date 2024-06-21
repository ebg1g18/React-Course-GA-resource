import './index.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/weather"> Weather</Link>
          </li>
          <li>
            <Link to="/countries"> Countries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
