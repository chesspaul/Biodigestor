export default function TopNav() {
  return (
    <header className="bw-nav">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
            <span className="bw-logo" aria-hidden="true" />
            <span className="d-flex flex-column lh-1">
              <b style={{ letterSpacing: ".2px" }}>BioWatch</b>
              <small style={{ opacity: 0.7, fontSize: 12 }}>
                200L demo • Electricidad local
              </small>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bwNav"
            aria-controls="bwNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="bwNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <a className="nav-link" href="#problema">Problema</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#solucion">Solución</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proceso">Proceso</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tecnico">Técnico</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#beneficios">Beneficios</a>
              </li>
              <li className="nav-item mt-2 mt-lg-0 ms-lg-2">
                <a className="btn bw-cta w-100 w-lg-auto" href="#contacto">
                  Contactar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}