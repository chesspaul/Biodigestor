export default function Footer() {
  return (
    <footer className="bw-footer">
      <div className="container">
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900 }}>© 2026 BioWatch. Website .</div>
            <div>Monitoring, maintenance and distribution of biodigesters.</div>
          </div>

          <div style={{ color: "rgba(255,255,255,.55)", fontSize: 13 }}>
            
          </div>
        </div>
      </div>
    </footer>
  );
}