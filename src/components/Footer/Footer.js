import React from 'react';
import './Footer.scss';

const Footer = () => {

    const year = new Date().getFullYear();
    return (
          <div className="foot">
                  &copy; Copyright-{year} Gauri Harbola
            </div>
      );
}

export default Footer;