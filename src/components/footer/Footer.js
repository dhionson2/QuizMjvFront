import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <p className="text-muted">
              Compartilhe sua Experiência: Divulgue suas realizações nas redes sociais e convide outros a participarem dessa jornada de aprendizado.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex input-group-text">
            <div className="col-4">
              <a href="#">
                <img src="/images/facebook.png" alt="Facebook" className="social-media-icons" />
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src="/images/instagram.png" alt="Instagram" className="social-media-icons" />
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src="/images/whatsapp.png" alt="Whatsapp" className="social-media-icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
