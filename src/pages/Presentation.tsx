import TopNav from "../components/TopNav";
import Section from "../components/Section";
import Footer from "../components/Footer";

function FlowStep({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="col-12 col-md-6">
      <div className="bw-card p-4 h-100">
        <div style={{ fontWeight: 900 }}>{title}</div>
        <div className="bw-muted mt-2">{desc}</div>
      </div>
    </div>
  );
}

export default function Presentation() {
  // Initial values (demo pilot) — update once the final model is validated.
  const fishKg = 20;
  const vegKg = 60;
  const digesterL = 200;

  return (
    <div className="bw-wrap">
      <TopNav />

      <main id="inicio" className="container bw-hero">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6">
            <div className="bw-kicker">The proyect</div>
            <h1 className="bw-title">
              BlueCycle Biodigester Watch: Permanent Organic Waste Infrastructure
              for Coastal Communities
            </h1>
            <p className="bw-subtitle mt-3">
              A fixed, site-installed system that first manages organic waste,
              then converts it into usable energy, and ultimately powers slurry
              ice production to reduce food loss in the cold chain.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <a className="bw-btn bw-btn-primary" href="#solucion">
                See our solution
              </a>
              <a className="bw-btn" href="#proceso">
                See process
              </a>
              <a className="bw-btn" href="#tecnico">
                See specs
              </a>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <span className="bw-pill">Blue Economy</span>
              <span className="bw-pill">Circularity</span>
              <span className="bw-pill">IoT + Evidence</span>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <img
              className="bw-img"
              alt="Imagen ilustrativa (provisional)"
              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>

        <div className="row g-3 mt-4">
          <div className="col-12 col-md-4">
            <div className="bw-stat">
              <div className="n">1) Containment</div>
              <div className="l">Prevent organic waste from ending up in the sea</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bw-stat">
              <div className="n">2) Local energy</div>
              <div className="l">Biogas → electricity for on-site use</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bw-stat">
              <div className="n">3) Evidence</div>
              <div className="l">Sensors + logbook to operate and measure impact</div>
            </div>
          </div>
        </div>
      </main>

      <Section
        id="problema"
        title="Problem"
        subtitle="In coastal fishing communities, organic waste is dumped in the sea: it pollutes, smells, and generates environmental impacts."
      >
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>
                What happens today?
              </h3>
              <ul className="bw-muted mt-3 mb-0">
                <li>
                  Fish byproducts (viscera, blood, skin) are treated as waste
                  instead of valuable resources.
                </li>
                <li>
                  Local markets also generate significant vegetable waste (peels,
                  leaves, expired produce).
                </li>
                <li>
                  Without proper logistics and containment systems, organic waste
                  ends up in waterways.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>
                Real technical risk
              </h3>
              <div className="bw-muted mt-2">
                Fish waste alone can destabilize a digester due to ammonia (from
                proteins) and long-chain fatty acids (from fats). That’s why our
                baseline is controlled co-digestion (fish + vegetable waste) with
                stable, consistent feeding.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="solucion"
        title="Solution (complete system)"
        subtitle="We are not selling “a tank”. We are proposing a fixed, operable infrastructure installed on-site for docks/markets."
      >
        <div className="row g-4">
          <div className="col-12 col-md-7">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>
                Fixed infrastructure modules
              </h3>

              <div className="row g-3 mt-2">
                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Sealed collection</div>
                    <div className="l">Closed containers + short routes (odor control)</div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Pre-treatment</div>
                    <div className="l">Grinding + mixing (start with 10–20% fish)</div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Fixed biodigester</div>
                    <div className="l">Stable operation (avoid “dumping everything at once”)</div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Energy generation</div>
                    <div className="l">Biogas → generator for on-site electricity</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="bw-stat">
                    <div className="n">Slurry ice (cold chain)</div>
                    <div className="l">Use recovered energy to produce slurry ice and reduce spoilage</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="bw-stat">
                    <div className="n">App + sensors</div>
                    <div className="l">Alerts (pH/temperature/pressure) + evidence of “kg diverted”</div>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 flex-wrap mt-3">
                <a className="bw-btn bw-btn-primary" href="#app">
                  See the app
                </a>
                <a className="bw-btn" href="#tecnico">
                  Specifications
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5">
            <img
              className="bw-img"
              alt="Imagen ilustrativa (provisional)"
              src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </Section>

      <Section
        id="proceso"
        title="How it works"
        subtitle="A simple, defensible flow so the jury sees a system (not just a biodigester)."
      >
        <div className="row g-3">
          <FlowStep
            title="1) Collection & containment"
            desc="Collect fish + vegetable residues in sealed containers to prevent leaks, odor, and pests."
          />
          <FlowStep
            title="2) Mixing & controlled feeding"
            desc="Co-digestion starts with low fish ratio (10–20%) and higher vegetable content for stability."
          />
          <FlowStep
            title="3) Anaerobic digestion"
            desc="In a sealed, oxygen-free reactor, microbes convert organic matter into biogas + digestate."
          />
          <FlowStep
            title="4) Basic gas conditioning"
            desc="Condensate trap + simple H2S filtration to reduce odor/corrosion and improve usability."
          />
          <FlowStep
            title="5) On-site energy use"
            desc="Biogas powers a small generator for local electricity to support site operations."
          />
          <FlowStep
            title="6) Slurry ice production"
            desc="Recovered energy powers slurry ice to strengthen the cold chain and reduce food spoilage."
          />
          <FlowStep
            title="7) Digestate management"
            desc="Separate liquid/solid fractions for controlled use as biofertilizer (with clear usage guidance)."
          />
        </div>
      </Section>

      <Section
        id="tecnico"
        title="Technical specifications (demo pilot)"
        subtitle="Initial design values for the 200L prototype (to be updated as interviews and the final model are validated)."
      >
        <div className="row g-3">
          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Daily input</div>
              <div className="bw-muted mt-2">
                {fishKg} kg fish + {vegKg} kg vegetable (co-digestion baseline).
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Reactor</div>
              <div className="bw-muted mt-2">
                Sealed {digesterL} L biodigester (demo pilot), designed as a fixed
                on-site installation.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Sensors</div>
              <div className="bw-muted mt-2">
                pH, temperature, pressure/flow (simple app alerts).
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Outputs</div>
              <div className="bw-muted mt-2">
                Biogas → generator for on-site electricity + digestate (guided use) + slurry ice support (phase 3).
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-12 col-md-8">
            <div className="bw-card p-4">
              <div style={{ fontWeight: 900 }}>Safety & operation</div>
              <ul className="bw-muted mt-2 mb-0">
                <li>Small, consistent feeding (avoid “dumping everything at once”).</li>
                <li>Basic H2S filtration + condensate trap.</li>
                <li>Logbook + traceability for evidence and operational stability.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Note</div>
              <div className="bw-muted mt-2">
                Images and some parameters are provisional. The goal is to validate
                technical and regulatory feasibility through expert interviews.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="beneficios"
        title="Benefits (why this is viable)"
        subtitle="What matters: impact + operability + evidence (not just a nice idea)."
      >
        <div className="row g-3">
          {[
            ["Environmental", "Diverts organic waste so it does not reach the ocean and reduces local impacts."],
            ["Energy", "Converts biogas into on-site electricity to reduce conventional consumption."],
            ["Economic", "Lower informal disposal costs and potential savings through recovered energy and reduced spoilage."],
            ["Operational", "Sensors + app: alerts, logbook, and metrics to prove impact to the jury."],
          ].map(([t, d]) => (
            <div key={t} className="col-12 col-md-6">
              <div className="bw-card p-4 h-100">
                <div style={{ fontWeight: 900 }}>{t}</div>
                <div className="bw-muted mt-2">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="app"
        title="App + sensors (what makes us different)"
        subtitle="The app is not decoration: it makes the system operable and produces measurable evidence."
      >
        <div className="row g-3">
          {[
            ["Dashboard", "pH, temperature, pressure, flow. Simple indicators and alerts."],
            ["Logbook", "Every feeding event is recorded (kg fish / kg vegetable / date / responsible person)."],
            ["Impact", "Calculator: kg diverted from the ocean, estimated energy, estimated CO2 avoided."],
            ["Support", "Quick guides: what to do with foam, acidic smell, or pH drop."],
          ].map(([t, d]) => (
            <div key={t} className="col-12 col-md-6">
              <div className="bw-card p-4 h-100">
                <div style={{ fontWeight: 900 }}>{t}</div>
                <div className="bw-muted mt-2">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="benchmark"
        title="Benchmark: SIMEPRODE (Monterrey)"
        subtitle="Local reference that converting waste into electricity via biogas is viable in Mexico."
      >
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>
                Why we mention it
              </h3>
              <div className="bw-muted mt-2">
                There are real precedents of biogas-to-electricity projects.
                Our difference: a coastal, prevention-first model that intercepts organic waste
                before it becomes marine pollution, supported by sensors/app from day one.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <img
              className="bw-img"
              alt="Imagen ilustrativa (provisional)"
              src="public/sime.jpg"
            />
          </div>
        </div>
      </Section>

      <Section
        id="contacto"
        title="Contact"
        subtitle="Demo form.."
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="bw-card p-4">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="bw-muted" style={{ fontSize: 14 }}>Name</label>
                  <input className="bw-input mt-2" placeholder="Your name" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="bw-muted" style={{ fontSize: 14 }}>WhatsApp</label>
                  <input className="bw-input mt-2" placeholder="+52 ..." />
                </div>
                <div className="col-12">
                  <label className="bw-muted" style={{ fontSize: 14 }}>Message</label>
                  <textarea
                    className="bw-textarea mt-2"
                    rows={4}
                    placeholder="Which community / dock / market?"
                  />
                </div>

                <div className="col-12 d-flex gap-2 flex-wrap">
                  <button className="bw-btn bw-btn-primary" type="button">
                    Send (demo)
                  </button>
                  <a className="bw-btn" href="#inicio">Back to top</a>
                </div>
              </div>
            </div>

            <div className="bw-muted mt-3" style={{ fontSize: 12 }}>
              Note: Links/images are provisional. The model will be consolidated through technical and regulatory interviews
              (interconnection, safety, operation, and deployment feasibility).
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}