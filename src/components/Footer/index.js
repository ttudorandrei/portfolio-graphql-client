const PortfolioFooter = () => {
  return (
    <footer className="footer mt-auto text-center fixed-bottom m-4">
      <div className="container d-flex justify-content-evenly portfolio-footer--text highlight">
        <a
          href="https://github.com/ttudorandrei"
          rel="noreferrer"
          target="_blank"
        >
          <div>Github</div>
        </a>
        <a
          href="https://linkedin.com/in/tudor-tocan"
          rel="noreferrer"
          target="_blank"
        >
          <div>LinkedIn</div>
        </a>
        <div>Twitter</div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
