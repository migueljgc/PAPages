import React, { useState, useEffect, useRef } from 'react';
import './script.css'

export const Script = () => {const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    <div className="user-menu" onClick={toggleDropdown}>
      <div className="user-info">
        <img src='/iconprofile.png' alt="Foto de perfil" className="profile-picture" width="35%" height="40%" />
        <br />
        <i className="fa fa-caret-down"></i>
      </div>
      {isOpen && (
        <div className="dropdown-content" ref={dropdownRef}>
          <span className="username">¡Hola, Admin!</span><br />
          <a href="#"><i className="fa fa-plus"></i>Editar usuario</a>
          <a href="#"><i className="fa fa-sign-out"></i>Salir</a>
        </div>
      )}
    </div>
  );
};

 