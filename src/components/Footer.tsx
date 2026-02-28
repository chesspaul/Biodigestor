export default function Footer() {
  return (
    <footer className="bw-footer">
      <div className="container">
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900 }}>© 2026 BioWatch. Página .</div>
            <div>Monitoreo, mantenimiento y distribución de biodigestores.</div>
          </div>

          <div style={{ color: "rgba(255,255,255,.55)", fontSize: 13 }}>
            Imágenes ilustrativas/provisionales • Sección técnica en diseño
          </div>
        </div>
      </div>
    </footer>
  );
}