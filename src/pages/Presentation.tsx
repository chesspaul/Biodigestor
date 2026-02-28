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
  // Valores iniciales (piloto demo) — cámbialos cuando el modelo final quede.
  const fishKg = 20;
  const vegKg = 60;
  const digesterL = 200;

  return (
    <div className="bw-wrap">
      <TopNav />

      <main id="inicio" className="container bw-hero">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6">
            <div className="bw-kicker">Presentación del proyecto</div>
            <h1 className="bw-title">
              BlueCycle BioWatch: convertir desechos pesqueros y vegetales en energía, sin que terminen en el mar.
            </h1>
            <p className="bw-subtitle mt-3">
              Un micro-sistema para muelles/mercados: acopio cerrado + co-digestión estable + sensores + app.
              Salida del piloto: biogás → electricidad para uso local y evidencia de impacto.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3">
              <a className="bw-btn bw-btn-primary" href="#solucion">Ver solución</a>
              <a className="bw-btn" href="#proceso">Ver proceso</a>
              <a className="bw-btn" href="#tecnico">Ver specs</a>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <span className="bw-pill">Economía azul</span>
              <span className="bw-pill">Circularidad</span>
              <span className="bw-pill">IoT + Evidencia</span>
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
              <div className="n">1) Contención</div>
              <div className="l">Evitar que lo orgánico termine en el mar</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bw-stat">
              <div className="n">2) Energía local</div>
              <div className="l">Biogás → electricidad para uso local</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bw-stat">
              <div className="n">3) Evidencia</div>
              <div className="l">Sensores + bitácora para operar y medir impacto</div>
            </div>
          </div>
        </div>
      </main>

      <Section
        id="problema"
        title="Problema"
        subtitle="En zonas pesqueras se tira orgánico al mar: contamina, huele y genera impactos ambientales."
      >
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>Lo que pasa hoy</h3>
              <ul className="bw-muted mt-3 mb-0">
                <li>Restos de pescado (vísceras, sangre, piel) terminan como “desecho sin valor”.</li>
                <li>En mercados también hay residuo vegetal (cáscaras, hojas, producto pasado).</li>
                <li>Cuando no hay sistema, el residuo termina en agua o en disposición informal.</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>Riesgo técnico real</h3>
              <div className="bw-muted mt-2">
                Pescado solo puede tumbar un digestor por amoníaco y grasas.
                Por eso la base es co-digestión (pescado + vegetal) y carga controlada.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="solucion"
        title="Solución (sistema completo)"
        subtitle="No vendemos “un tanque”. Vendemos un sistema operable para muelles/mercados."
      >
        <div className="row g-4">
          <div className="col-12 col-md-7">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>Módulos</h3>

              <div className="row g-3 mt-2">
                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Acopio cerrado</div>
                    <div className="l">Contenedores sellados + rutas cortas</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Pretratamiento</div>
                    <div className="l">Triturado + mezcla (pescado 10–20% al inicio)</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Biodigestor</div>
                    <div className="l">Producción estable (sin “cargas” bruscas)</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="bw-stat">
                    <div className="n">Energía local</div>
                    <div className="l">Biogás → generador para uso local</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="bw-stat">
                    <div className="n">App + sensores</div>
                    <div className="l">Alertas (pH/temperatura/presión) + evidencia de “kg evitados”</div>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 flex-wrap mt-3">
                <a className="bw-btn bw-btn-primary" href="#app">Ver la app</a>
                <a className="bw-btn" href="#tecnico">Especificaciones</a>
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
        title="Cómo funciona"
        subtitle="Flujo simple (y defendible) para que el jurado lo vea como sistema, no solo como biodigestor."
      >
        <div className="row g-3">
          <FlowStep
            title="1) Recolección"
            desc="Acopio de residuos pesqueros + vegetales en contenedores sellados (evita fuga/olor)."
          />
          <FlowStep
            title="2) Mezcla y carga"
            desc="Co-digestión: arrancar con poco pescado (10–20%) y más vegetal para estabilidad."
          />
          <FlowStep
            title="3) Digestión anaerobia"
            desc="Tanque cerrado sin oxígeno: bacterias transforman materia orgánica en biogás + digestato."
          />
          <FlowStep
            title="4) Limpieza básica del gas"
            desc="Trampa de condensados + filtro simple (H2S) para reducir olor/corrosión."
          />
          <FlowStep
            title="5) Electricidad local"
            desc="Biogás alimenta un generador. Se usa localmente para reducir consumo convencional."
          />
          <FlowStep
            title="6) Digestato"
            desc="Separación sólido/líquido para uso como biofertilizante en viveros/huertos (con guía de uso)."
          />
        </div>
      </Section>

      {/* NUEVO: Specs técnicas */}
      <Section
        id="tecnico"
        title="Especificaciones técnicas (piloto demo)"
        subtitle="Valores iniciales de diseño para el prototipo de 200L (ajustables conforme el modelo final quede)."
      >
        <div className="row g-3">
          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Entrada diaria</div>
              <div className="bw-muted mt-2">
                {fishKg} kg pescado + {vegKg} kg vegetal (base de co-digestión).
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Reactor</div>
              <div className="bw-muted mt-2">
                Biodigestor sellado de {digesterL} L (demo), modular para escalar.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Sensores</div>
              <div className="bw-muted mt-2">
                pH, temperatura, presión/flujo (alertas simples en app).
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Salida</div>
              <div className="bw-muted mt-2">
                Biogás → generador para electricidad local + digestato (guía de uso).
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-12 col-md-8">
            <div className="bw-card p-4">
              <div style={{ fontWeight: 900 }}>Seguridad y operación</div>
              <ul className="bw-muted mt-2 mb-0">
                <li>Carga pequeña y constante (evitar “meter todo de golpe”).</li>
                <li>Filtro simple H2S + trampa de condensados.</li>
                <li>Bitácora de cargas para trazabilidad y evidencia.</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bw-card p-4 h-100">
              <div style={{ fontWeight: 900 }}>Nota</div>
              <div className="bw-muted mt-2">
                Imágenes ilustrativas por ahora. La meta es validar el modelo con entrevistas técnicas/regulatorias.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* NUEVO: Beneficios */}
      <Section
        id="beneficios"
        title="Beneficios (por qué esto sí es viable)"
        subtitle="Lo importante: impacto + operabilidad + evidencia (no solo una idea bonita)."
      >
        <div className="row g-3">
          {[
            ["Ambiental", "Desvía residuos orgánicos para que no terminen en el mar y reduce impactos locales."],
            ["Energético", "Convierte biogás en electricidad local para reducir consumo convencional."],
            ["Económico", "Menos costos por manejo informal y potencial ahorro energético en el sitio piloto."],
            ["Operativo", "Sensores + app: alertas, bitácora y métricas para demostrar impacto al jurado."],
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
        title="App + sensores (lo que nos hace diferentes)"
        subtitle="La app no es adorno: hace operable el sistema y genera evidencia de impacto."
      >
        <div className="row g-3">
          {[
            ["Dashboard", "pH, temperatura, presión, flujo. Semáforos y alertas simples."],
            ["Bitácora", "Cada carga queda registrada (kg pescado / kg vegetal / fecha / responsable)."],
            ["Impacto", "Calculadora: kg evitados al mar, energía estimada, CO2 evitado (estimado)."],
            ["Soporte", "Guías rápidas: qué hacer si hay espuma, olor ácido, o cae el pH."],
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
        subtitle="Referencia local de que convertir residuos en electricidad vía biogás es viable en México."
      >
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="bw-card p-4">
              <h3 style={{ margin: 0, fontWeight: 900, fontSize: 18 }}>Por qué lo mencionamos</h3>
              <div className="bw-muted mt-2">
                Hay antecedentes reales de aprovechamiento de biogás para generación eléctrica.
                Nuestra diferencia: enfoque costero y prevención directa de vertido al mar con sensores/app desde el día 1.
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <img
              className="bw-img"
              alt="Imagen ilustrativa (provisional)"
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        </div>
      </Section>

      <Section
        id="contacto"
        title="Contacto / Pitch"
        subtitle="Formulario demo. En la entrega funciona como ‘cierre’ de presentación."
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="bw-card p-4">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="bw-muted" style={{ fontSize: 14 }}>Nombre</label>
                  <input className="bw-input mt-2" placeholder="Tu nombre" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="bw-muted" style={{ fontSize: 14 }}>WhatsApp</label>
                  <input className="bw-input mt-2" placeholder="+52 ..." />
                </div>
                <div className="col-12">
                  <label className="bw-muted" style={{ fontSize: 14 }}>Mensaje</label>
                  <textarea className="bw-textarea mt-2" rows={4} placeholder="Qué comunidad / muelle / mercado" />
                </div>

                <div className="col-12 d-flex gap-2 flex-wrap">
                  <button className="bw-btn bw-btn-primary" type="button">Enviar (demo)</button>
                  <a className="bw-btn" href="#inicio">Volver arriba</a>
                </div>
              </div>
            </div>

            <div className="bw-muted mt-3" style={{ fontSize: 12 }}>
              Nota: Links/imágenes provisionales. Se consolidan con entrevistas técnicas y regulaciones (interconexión, seguridad y operación).
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}  