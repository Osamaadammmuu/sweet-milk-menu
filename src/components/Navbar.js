import React from 'react';
import '../style/Navbar.scss';
//-------------------------------------------------
function Navbar({ sections, onSectionSelect, selectedSection }) {
  return (
    <nav className="navbar">
      <div className='container'>
        <ul className='ul-list'>
          {sections.map((section, index) => (
            <li key={index} onClick={() => onSectionSelect(section)} className={selectedSection === section ? 'active' : ''}>
              {section}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
//-------------------------------------------------
export default Navbar;