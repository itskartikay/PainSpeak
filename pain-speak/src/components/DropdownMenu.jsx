import React from 'react';
import "../css/DropdownMenu.css"
import "../css/DropdownMenu-two.css"
import "../index.css"

const DropdownMenu = ({ selectedLanguage, onChangeLanguage }) => {
  return (
    <div className='toCenter'>
      <div className="language-dropdown">

        <div className='side'>
          <h1 className='lang'>Language</h1>
        </div>

          <select className="menu" value={selectedLanguage} onChange={onChangeLanguage}>

            <option value="select">English</option>
            <option value="hindi">हिन्दी</option>
            <option value="punjabi">ਪੰਜਾਬੀ</option>
            <option value="gujrati">ગુજરાતી</option>
            <option value="tamil">தமிழ்</option>
            <option value="telugu">తెలుగు</option>
            <option value="malyalam">മലയാളം</option>
            <option value="kannada">ಕನ್ನಡ</option>
            <option value="bengali">বাংলা</option>
            <option value="urdu">اُردُو</option>
            <option value="russian">русский</option>
            <option value="german">Deutsch</option>
            <option value="french">Français</option>
            <option value="spanish">Español</option>
            <option value="dutch">Nederlands</option>
            <option value="portuguese">português</option>

          </select>


      </div>
    </div>
  );
};

export default DropdownMenu;
