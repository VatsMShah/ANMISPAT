import hrCoilImage from '../assets/images/second-sec-right.png';
import plateImage from '../assets/images/industrial-supply.png';
import highTensileImage from '../assets/images/steel-trading.png';
import chequeredImage from '../assets/images/second-sec-left.png';
import coldRolledImage from '../assets/images/steel-processing.png';
import galvanisedImage from '../assets/images/steel-coil-second-sec.png';
import roofingImage from '../assets/images/logistics.png';
import colourCoatedImage from '../assets/images/why-choose-us-card1.png';
import tmtImage from '../assets/products-images/products-page-bg.png';

export const products = [
  {
    id: 'hr-coils',
    name: 'HR Rolled Steel Coils',
    shortName: 'HR Coil',
    brand: 'Tata Astrum',
    eyebrow: 'Hot rolled coils and sheets',
    image: hrCoilImage,
    description:
      "Tata Astrum hot rolled coils and sheets serve automotive, railways, lifting and excavation, agriculture and fabrication customers. Grades range from formable auto-grade to high-strength structural steel.",
    specs: [
      ['Thickness range', '1.60–16.00 mm'],
      ['Width range', '1250 mm, 1500 mm, 1830 mm & 2000 mm'],
      ['Grades', 'E250A/BR, E350A/C, IS10748 (GR1, GR2), CHQ, BSK46, 550MC, 600MC, 700MC'],
      ['Forms', 'HR coil, cut-to-length sheets, slit coils, HRPO and HRSPO'],
    ],
    features: [
      ['Strength across applications', 'Tensile grade options for structural and forming requirements.'],
      ['Enhanced flatness', 'Helps improve yield and reduce material waste.'],
      ['Consistent properties', 'Predictable behaviour for drawing and bending applications.'],
      ['Controlled dimensions', 'Thickness and width control for dependable processing.'],
    ],
    grades: [
      ['IS 2062 E250 Gr A', '1.6–25', 'YS 250 · UTS 410', 'Infrastructure and fabrication'],
      ['IS 2062 E350 Gr A', '2–25', 'YS 350 · UTS 490', 'PEB and transmission projects'],
      ['IS 2062 E450 Gr BR Cu', '3–20', 'YS 450 · UTS 570', 'Railways'],
      ['IS 1079 HR3', '1.6–12', 'UTS 270–410', 'Auto components and panels'],
      ['E-34 / SAPH 440', '1.6–12', 'YS 305 · UTS 440', 'Automotive structurals'],
      ['BSK 46 / E-46', '2.5–12', 'YS 460 · UTS 500–640', 'Automotive structurals and panels'],
      ['IS 5986 (235)', '1.6–4.99', '—', 'Auto, panels and general engineering'],
      ['IS 10748 Gr 4', '1.6–16', '—', 'Tubes and infrastructure'],
      ['IS 10748 Gr 2', '1.6–25', '—', 'Tubes, bicycle and general engineering'],
    ],
    applications:
      'Automotive components · Railway wagons and coaches · Lifting and excavation equipment · Agricultural implements · Tubes and pipes · PEB and structural fabrication · Solar structures · Transmission towers',
  },
  {
    id: 'hr-plates',
    name: 'HR Rolled Plates',
    shortName: 'HR Sheet / Plate',
    brand: 'Tata Astrum',
    eyebrow: 'Cut-to-length sheets and plates',
    image: plateImage,
    description:
      'Tata Astrum plates and sheets are cut to length from hot rolled coil and supplied flat, with a test certificate for traceability. They serve structural, fabrication and machinery needs.',
    specs: [
      ['Thickness range', '1.60–25.00 mm'],
      ['Width range', '1250 mm & 1500 mm'],
      ['Grades', 'E250A, IS10748 (GR2)'],
      ['Length', 'Cut to order; 1250 × 2500 mm commonly stocked for 1.6–6 mm'],
      ['Supply', 'Test certificate with chemistry, properties and coil ID'],
    ],
    features: [
      ['Mill traceable', 'Consignments include a test certificate with chemistry, properties and coil ID.'],
      ['Flat and levelled', 'Processed on a shearing line or certified service centres.'],
      ['Controlled dimensions', 'Thickness, width and length tolerances for reliable fabrication.'],
      ['Grade choice', 'IS 2062 E250 up to E450 options for fabrication requirements.'],
    ],
    grades: [
      ['E250', '1.6–25', '250 / 410 MPa', 'Structurals, fabrication and machinery'],
      ['E350', '2–25', '350 / 490 MPa', 'PEB and heavy fabrication'],
      ['E410', 'On request', '410 / 540 MPa', 'Heavy structures and bridges'],
      ['E450 BR Cu', '3–20', '450 / 570 MPa', 'Railways'],
    ],
    applications:
      'Structural steel · PEB · Bridges and heavy fabrication · Earthmoving equipment · Railway wagons · Machinery frames · Base plates · Tanks',
  },
  {
    id: 'hr-high-tensile',
    name: 'HR High Tensile Coil / Plates',
    shortName: 'HR High Tensile',
    brand: 'Tata Astrum',
    eyebrow: 'High-strength grades',
    image: highTensileImage,
    description:
      'Higher-yield hot rolled grades for load-bearing parts where designers want strength without extra weight. Available as coil and as cut-to-length plates.',
    specs: [
      ['Thickness range', '2–25 mm, depending on grade'],
      ['Yield strength', '350–460 MPa and above'],
      ['Forms', 'Coil, cut-to-length sheets and plates'],
      ['Standards', 'IS 2062, IRS M41, BSK 46, SAPH 440'],
      ['Subgrades', 'A, BR, B0 and C impact-tested options on IS 2062 grades'],
    ],
    features: [
      ['Higher yield strength', '350–460+ MPa grades support lighter load-bearing sections.'],
      ['Impact-tested options', 'BR, B0 and C subgrades for cold or dynamic service.'],
      ['Application-specific grades', 'Options include E450 for railways and BSK 46 for automotive use.'],
      ['Traceable supply', 'A test certificate with mechanical properties accompanies each lot.'],
    ],
    grades: [
      ['IS 2062 E350 (A/BR/B0/C)', '2–25', '350 / 490 MPa', 'PEB, infrastructure and T&D'],
      ['IS 2062 E410', 'On request', '410 / 540 MPa', 'Heavy structures and bridges'],
      ['IS 2062 E450 BR Cu', '3–20', '450 / 570 MPa', 'Railways'],
      ['BSK 46 / E-46', '2.5–12', '460 / 500–640 MPa', 'Automotive structurals'],
      ['SAPH 440 / E-34', '1.6–12', '305 / 440 MPa', 'Automotive structurals'],
      ['IRS M41', '5–12', '340 / 480 MPa', 'Railway engine components'],
      ['DIN St 52.3 equivalent', '2–12', '355 / 490 MPa', 'Lifting, excavation and prefab'],
    ],
    applications:
      'Excavator buckets and tipper bodies · Crane booms · Wagon and coach parts · PEB frames · Transmission towers · Chassis and automotive structurals',
  },
  {
    id: 'chequered-coils-sheets',
    name: 'Chequered Coils / Sheets',
    shortName: 'Chequered',
    brand: 'Tata Astrum',
    eyebrow: 'Hot rolled chequered plate',
    image: chequeredImage,
    description:
      'Hot rolled plate with a raised diamond or line pattern on one face and a plain reverse, for applications where a slip-resistant surface is needed. Supplied as coil or cut-to-length sheets.',
    specs: [
      ['Standard', 'IS 3502'],
      ['Base steel', 'IS 2062 E250 A (other grades by agreement)'],
      ['Thickness range', '2.6–12 mm'],
      ['Width', '1250 mm and 1500 mm'],
      ['Forms', 'Coil or cut-to-length sheets'],
      ['Pattern', 'Raised diamond or lines on one face; plain reverse'],
    ],
    features: [
      ['Slip-resistant surface', 'Raised pattern for walkways, ramps and platforms.'],
      ['Structural base steel', 'IS 2062 E250 A base steel for fabrication.'],
      ['Coil or sheet', 'Cut-to-length supply can help reduce offcuts.'],
      ['Designed for traffic', 'Hot rolled thickness for foot and vehicle traffic areas.'],
    ],
    grades: [
      ['Yield strength (min)', '—', '250 MPa', 'IS 2062 E250 A'],
      ['Tensile strength (min)', '—', '410 MPa', 'IS 2062 E250 A'],
      ['Elongation (min)', '—', '23%', 'IS 2062 E250 A'],
      ['Carbon equivalent (max)', '—', '0.42', 'IS 2062 E250 A'],
    ],
    applications:
      'Industrial walkways and platforms · Stair treads · Truck and trailer flooring · Loading ramps · Mezzanine floors · Factory and warehouse flooring',
  },
  {
    id: 'cold-rolled-coil',
    name: 'Cold Rolled Coil',
    shortName: 'CR Coil',
    brand: 'Tata Steelium',
    eyebrow: 'Cold rolled coils and sheets',
    image: coldRolledImage,
    description:
      'Tata Steelium is Tata Steel’s cold rolled brand for auto ancillaries, electrical and telecom panels, furniture, packaging and general engineering. Steelium Neo is the higher-performance variant for stricter needs.',
    specs: [
      ['Thickness range', '0.50–3.15 mm'],
      ['Width range', '1250 mm, 1500 mm & 1540 mm'],
      ['Grade', 'IS513D (DQ)'],
      ['Forms', 'Full coil, slit coil and cut-to-length sheets'],
      ['Standard', 'IS 513'],
    ],
    features: [
      ['Consistent properties', 'Predictable forming performance from batch to batch.'],
      ['Flatness', 'Smooth feeding and yield on press lines.'],
      ['Thickness control', 'Gauge control for demanding applications.'],
      ['Surface finish', 'A clean surface ready for painting and coating.'],
    ],
    grades: [
      ['CQ', '0.4–3.5', 'Furniture and general engineering'],
      ['DQ', '0.3–4', 'Auto parts, drums, panels and general engineering'],
      ['DDQ', '0.3–3.2', 'Auto components and general engineering'],
      ['EDD', '0.4–3.5', 'Auto components and general engineering'],
      ['IF', '0.25–3.2', 'Auto components'],
      ['Electrical stamping', '0.3–3.5', 'Electrical stamping'],
      ['ISC410LA (HSLA340)', '0.5–2.3', 'Auto components and general engineering'],
      ['ISC470LA (HSLA420)', '0.6–2.3', 'Auto components and general engineering'],
    ],
    applications:
      'Auto ancillaries · Furniture · Electrical and telecom panels · Appliances · Drums and barrels · Agricultural machinery · General engineering',
  },
  {
    id: 'galvanised-coil-sheet',
    name: 'Galvanised Coil / Sheet',
    shortName: 'GP',
    brand: 'Tata Galvano · GalvaRoS',
    eyebrow: 'Zero and regular spangle',
    image: galvanisedImage,
    description:
      'Galvano is Tata Steel’s zero-spangle galvanised plain coil and sheet for appliance, panel, bus body and general engineering segments. GalvaRoS is the regular-spangle version.',
    specs: [
      ['Galvano thickness', '0.45–2 mm'],
      ['Galvano width', '1000–1520 mm'],
      ['Coating', '60–550 GSM total (both sides)'],
      ['GalvaRoS thickness', '0.25–2 mm'],
      ['GalvaRoS width', '900–1250 mm'],
      ['Standards', 'IS 277:2018, IS 513:2016, ASTM A653M'],
    ],
    features: [
      ['Corrosion resistance', 'Zinc coating helps extend product service life.'],
      ['Surface finish', 'Options include zero-spangle and regular-spangle finishes.'],
      ['Processing options', 'Full coil, slit coil, cut-to-length sheets and blanks.'],
      ['Multiple grades', 'Galvano range includes CQ, DQ, DDQ, EDD, IF and high strength.'],
    ],
    grades: [
      ['GalvaRoS CQ', '80–275 GSM', '0.25–2.00 mm', '900–1250 mm'],
      ['GalvaRoS DQ', '80–275 GSM', '0.25–2.00 mm', '900–1250 mm'],
      ['GalvaRoS DDQ', '80–275 GSM', '0.25–2.00 mm', '700–1250 mm'],
    ],
    applications:
      'Appliances · Electrical and telecom panels · Bus bodies · HVAC ducting · False ceilings · General engineering',
  },
  {
    id: 'galvanised-corrugated-sheets',
    name: 'Galvanised Corrugated Sheets',
    shortName: 'GC Sheets',
    brand: 'Tata Shaktee',
    eyebrow: 'ISI-marked GC roofing sheets',
    image: roofingImage,
    description:
      'Tata Shaktee is a galvanised corrugated roofing sheet made from virgin steel, with controlled zinc coating and ISI certification under IS 277.',
    specs: [
      ['Thickness', '0.18–0.80 mm overall; standard GC 0.25–0.63 mm'],
      ['Sheet width', '740–1220 mm overall'],
      ['Length', '1830–7320 mm (6–24 ft)'],
      ['Zinc coating', '120 GSM (Class 8 per BIS); tailor-made 60–600 GSM'],
      ['Corrugation', 'Class A: 17.7 mm · Class B: 12.5 mm deep · 75 mm pitch'],
      ['Thickness tolerance', '±0.03 mm (BIS allows ±0.05 mm)'],
    ],
    features: [
      ['Uniform zinc coating', '120 GSM coating; tailor-made coating options are available.'],
      ['Assured thickness', 'Thickness and zinc coating are printed on each sheet.'],
      ['Corrugated profiles', 'Several width and corrugation options for roofing needs.'],
      ['ISI marked', 'Certified under IS 277.'],
    ],
    grades: [
      ['Standard GC', '800 / 840 mm', '11 (840 mm)', 'Everyday roofing'],
      ['Wide GC', '910 mm', '13', 'Wider coverage with fewer sheets'],
      ['Wider GC', '1220 mm', '15', 'Widest listed GC sheet'],
    ],
    applications:
      'Residential and commercial roofing · Wall cladding · Agricultural sheds · Godowns · Small industrial buildings',
  },
  {
    id: 'colour-coated-coils-sheets',
    name: 'Colour Coated Coils / Sheets',
    shortName: 'Colour Coated',
    brand: 'Tata Steel Colornova · COLORBOND®',
    eyebrow: 'Pre-painted steel',
    image: colourCoatedImage,
    description:
      'Colornova is Tata Steel’s pre-painted galvanised (PPGI) coil. COLORBOND® is pre-painted aluminium-zinc coated steel from Tata Steel Colors.',
    specs: [
      ['Colornova base', 'Pre-painted galvanised iron (PPGI)'],
      ['Thickness', '0.20–1.2 mm'],
      ['Width', '900–1250 mm'],
      ['Zinc coating', 'Z80–275 GSM'],
      ['Paint system', 'Top coat 18–22 microns; primer and back coat'],
      ['Coil', 'Up to 9 MT, ID 508 mm'],
    ],
    features: [
      ['Surface protection', 'Paint systems protect the surface during handling and use.'],
      ['Weather resistance', 'Corrosion resistance for exterior applications.'],
      ['Coating choices', 'RMP, SMP, SDP and PVDF paint systems.'],
      ['Colour options', 'Customisable colours are available.'],
    ],
    grades: [
      ['COLORBOND® XRW', 'Al-Zn AZ150', 'Super Durable Polyester', 'Roofing and cladding'],
      ['COLORBOND® XPD', 'Al-Zn AZ150', 'PVDF', 'Colour and gloss retention'],
      ['COLORBOND® Ultra', 'Al-Zn AZ200', 'Durable polyester', 'Marine and industrial environments'],
    ],
    applications:
      'Clean-room panels · False ceilings · HVAC · Refrigerators and washing machines · Deep freezers · Door and window frames · Roofing and cladding',
  },
  {
    id: 'tmt-bars',
    name: 'TMT Bars',
    shortName: 'TMT Bars',
    brand: 'Tata Tiscon',
    eyebrow: 'Reinforcement rebar',
    image: tmtImage,
    description:
      'Tata Tiscon is Tata Steel’s TMT rebar brand, made by the primary route from virgin iron ore.',
    specs: [
      ['Sizes', '6–40 mm overall'],
      ['Retail stock', '6, 8, 10, 12, 16, 20 and 25 mm'],
      ['Project sizes', '32, 36 and 40 mm'],
      ['Length', '12 m standard; customised 7.5–11.5 m available'],
      ['Standards', 'IS 1786, IS 13920:2016 (seismic)'],
    ],
    features: [
      ['Ductility', 'Tiscon 550D typical UTS/YS ratio is 1.15 (max 1.25).'],
      ['Consistent production', 'Made in large batches through a controlled TMT process.'],
      ['CRS options', 'Corrosion-resistant variants for coastal, marine and humid sites.'],
      ['Seismic range', 'Tiscon SD 550D is listed to IS 13920:2016.'],
    ],
    grades: [
      ['Tata Tiscon 500D', 'IS 1786 Fe 500D', 'Standard high-strength, ductile rebar'],
      ['Tata Tiscon SD 550D', 'IS 1786 Fe 550D', 'Super ductile rebar'],
      ['Tata Tiscon CRS', 'Fe 500 CRSD / 550D CRS', 'Corrosion-resistant variant'],
    ],
    applications:
      'Residential and commercial buildings · High-rise · Metro and tunnels · Bridges · Industrial plants · Marine and coastal structures',
  },
];