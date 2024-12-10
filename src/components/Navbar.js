import React from 'react';
import '../style/Navbar.scss';

//-------------------------------------------------
function Navbar({ sections, onSectionSelect, selectedSection, isSectionDisabled }) {
  return (
    <nav className="navbar">
      <div className='container'>
        <ul className='ul-list'>
          {sections && sections.length > 0 ? (
            sections.map((section, index) => (
              <li
                key={index}
                onClick={() => !isSectionDisabled(section) && onSectionSelect(section)}
                className={`${selectedSection === section ? 'active' : ''} ${isSectionDisabled(section) ? 'disabled' : ''}`}
              >
                {section}
              </li>

            ))
          ) : (
            <li>لا توجد أقسام حالياً</li>
          )}
        </ul>
      </div>
    </nav>
  );
}
//-------------------------------------------------
export default Navbar;
