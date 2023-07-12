import LavanyaM from "./LavanyaM.pdf";

export default function Header({ onDownloadClick }) {
  return (
    <header className="header">
      <h1>Lavanya Mundru</h1>
      <p>Email: lavanyamundru2000@gmail.com | Phone: +91 9063695846</p>
      <button className="downloadButton" onClick={onDownloadClick}>
        <a download href={LavanyaM}>
          Download Resume
        </a>
      </button>
    </header>
  );
}
