import React, { useState } from 'react';

const HamburgerDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {isOpen && (
        <div className="drawer">
          <ul className="menu">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 20px;
          cursor: pointer;
        }

        .line {
          width: 100%;
          height: 2px;
          background-color: black;
          transition: transform 0.3s ease;
        }

        .open .line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .open .line:nth-child(2) {
          opacity: 0;
        }

        .open .line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .drawer {
          position: absolute;
          top: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.5);
          width: 200px;
          padding: 20px;
          z-index:100;
        }

        .menu {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .menu li {
          margin-bottom: 10px;
          font-size: 16px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default HamburgerDrawer;
