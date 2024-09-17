import React, { useState, useEffect } from "react";
import classes from "../styles/Certificates.module.scss";
import certificatesData from "../assets/data/certificatesData";
import pdfIcon from "../assets/photos/pdf-icon.png";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    setCertificates(certificatesData);
  }, []);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className={classes.certificates}>
      <h2>My Certificates</h2>
      <div className={classes.certificates_inner}>
        <p>
          I have added some of my certificates below. Click on a certificate to
          expand it or open in a new tab.
        </p>
        <div className={classes.certificateContainer}>
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={classes.certificateCard}
              onClick={() => handleCertificateClick(certificate)}
              role="button"
              tabIndex={0}
              onKeyPress={(event) =>
                event.key === "Enter" && handleCertificateClick(certificate)
              }
            >
              <div className={classes.thumbnail}>
                {certificate.fileType === "image" ? (
                  <img
                    src={`/certificates/${certificate.fileName}`}
                    alt={`Thumbnail of ${certificate.name}`}
                    className={classes.certificateThumbnail}
                  />
                ) : (
                  <img
                    src={pdfIcon}
                    alt="PDF Icon"
                    className={classes.pdfIcon}
                  />
                )}
              </div>
              <div className={classes.certificateInfo}>
                <h3>{certificate.name}</h3>
                <p>{certificate.description}</p>
                <p>
                  <strong>Country:</strong> {certificate.country}
                </p>
                <p>
                  <strong>Date:</strong> {certificate.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedCertificate && (
          <div className={classes.modal} onClick={handleCloseModal}>
            <div
              className={classes.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={classes.closeButton}
                onClick={handleCloseModal}
              >
                &times;
              </button>
              {selectedCertificate.fileType === "image" ? (
                <img
                  src={`/certificates/${selectedCertificate.fileName}`}
                  alt={selectedCertificate.name}
                  className={classes.fullImage}
                />
              ) : (
                <object
                  data={`/certificates/${selectedCertificate.fileName}`}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  className={classes.fullPdf}
                >
                  <p>
                    Your browser does not support PDFs.
                    <a
                      href={`/certificates/${selectedCertificate.fileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download the PDF
                    </a>
                    .
                  </p>
                </object>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
