import React from 'react';
import "./DropdownMenu.css"
import "./index.css"

const DropdownMenu = ({ selectedLanguage, onChangeLanguage }) => {
  return (
    <div className="language-dropdown">

      <div className='side'>
        <h1 className='lang'>Language</h1>
      </div>

      <select className="menu" value={selectedLanguage} onChange={onChangeLanguage}>

        <option value="hindi">Hindi</option>
        <option value="russian">Russian</option>

      </select>

    </div>
  );
};

export default DropdownMenu;
