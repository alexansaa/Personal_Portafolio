import { useState } from 'react';
import styles from '../../styles/SliderNav.module.css';

function SlidingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleNavbar}>
        <div/>
      </button>
      <nav>
        <ul>
          <li><a href="#">Exp 1</a></li>
          <li><a href="#">Exp 2</a></li>
          <li><a href="#">Exp 3</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default SlidingNavbar;
