export const siteConfig = {
  name: "Rushil Kumar",
  title: "Senior IBM DataPower Developer",
  signal: "Enterprise integration, API governance, and production-grade middleware",
  email: "rushilcse38@gmail.com",
  phone: "+91 7981379059",
  whatsapp: "8977175969",
  location: "Hyderabad, Telangana, India",
  resumePath: "/Rushil_Resume.pdf",
  heroImage: "/integration-hero.png",
  social: {
    linkedin: "#portfolio",
    github: "#portfolio",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const snapshot = [
  { value: "10+", label: "years in integration" },
  { value: "IBM", label: "DataPower and API Connect" },
  { value: "24/7", label: "production support mindset" },
  { value: "4", label: "major enterprise domains" },
];

export const aboutContent = {
  eyebrow: "About",
  headline:
    "I design the middleware layer where legacy systems, secure APIs, and business-critical traffic meet.",
  paragraphs: [
    "Rushil Kumar is a Senior IBM DataPower Developer with a decade of hands-on enterprise integration experience across banking, healthcare, education, public sector, and airport operations.",
    "His work sits in the high-stakes middle: DataPower appliances, API Connect catalogs, SOAP and REST services, WSDL/XSD contracts, XSLT transformations, SSL/TLS profiles, gateway policies, and change-controlled production releases.",
    "The throughline is operational discipline. Rushil turns complex integration requirements into secure, documented, testable services that teams can maintain under pressure.",
  ],
};

export type CareerRole = {
  id: string;
  company: string;
  position: string;
  period: string;
  client: string;
  focus: string;
  impact: string[];
};

export const careerJourney: CareerRole[] = [
  {
    id: "duquode",
    company: "DuQuode System",
    position: "Senior DataPower Developer",
    period: "Mar 2020 - Present",
    client: "Nedbank",
    focus: "IBM API Connect and IBM DataPower",
    impact: [
      "Owns requirement analysis, design documentation, impact analysis, and technical mapping for new integration work.",
      "Builds API Connect definitions, products, plans, rate limits, and catalog publishing flows.",
      "Implements WSDL/SOAP services, WTX DPA SOAP-to-COBOL transformations, MPGW services, and Web Service Proxies.",
      "Administers DataPower through WebGUI, CLI, SOMA, AMP, and XML Management Interface with one-way and two-way SSL profiles.",
      "Supports UAT, defect triage, Service Manager change requests, TCAB, ECAB, and production release governance.",
    ],
  },
  {
    id: "evoltive",
    company: "Evoltive Software Solutions",
    position: "DataPower Developer",
    period: "Aug 2018 - Feb 2020",
    client: "Nedbank",
    focus: "Legacy Middleware Decommissioning Project",
    impact: [
      "Helped modernize legacy middleware through API Connect productization and DataPower gateway services.",
      "Created APIs, plans, rate limits, catalog releases, WSDL/SOAP implementations, and MPGW/WSP configurations.",
      "Partnered across testing and UAT teams to analyze issues, route defects, and close fixes cleanly.",
    ],
  },
  {
    id: "cognizant",
    company: "Cognizant",
    position: "Associate Developer",
    period: "Nov 2017 - Aug 2018",
    client: "Humana",
    focus: "IBM DataPower healthcare integration",
    impact: [
      "Developed MPGWs for REST services and reusable patterns for multiple backend calls.",
      "Built SWA attachment processing through Web Service Proxy flows.",
      "Researched and documented service improvements for existing production integrations.",
    ],
  },
  {
    id: "deeplogic",
    company: "Deeplogictech Pvt Ltd",
    position: "DataPower Developer",
    period: "May 2015 - Nov 2017",
    client: "McGill, Industry Canada, University of Toronto, GTAA",
    focus: "API Connect deployments and DataPower platform engineering",
    impact: [
      "Installed, configured, clustered, upgraded, and secured API Connect Manager and Developer Portal environments.",
      "Configured DataPower gateways, OAuth providers, SSO, Swagger deployment, user groups, domains, log targets, and probes.",
      "Delivered SAML-to-WebSphere token conversion, SAML validation XSLT, SLM rate limiting, Queue Manager integration, TDS authentication, SQL DataSources, domain backup, and firmware upgrade support.",
    ],
  },
];

export const expertise = [
  {
    category: "Gateway Platforms",
    items: ["IBM DataPower XI52, XG45, IDG, 2018", "IBM API Connect 5.x", "MPGW", "Web Service Proxy"],
  },
  {
    category: "Service Contracts",
    items: ["SOAP", "REST", "WSDL", "XSD", "Swagger / OpenAPI"],
  },
  {
    category: "Security and Identity",
    items: ["One-way SSL", "Two-way SSL", "SAML", "OAuth API Provider", "SSO"],
  },
  {
    category: "Transformation and Ops",
    items: ["XSLT", "XPath", "WTX DPA", "Probe troubleshooting", "SOMA / AMP / CLI"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "JNTUH",
    school: "Aware Madhavanji College of Engineering",
    period: "2008 - 2012",
    score: "68%",
  },
  {
    degree: "Intermediate",
    institution: "Board of Intermediate Education",
    school: "Nalanda Junior College, Hyderabad",
    period: "2006 - 2008",
    score: "74%",
  },
  {
    degree: "S.S.C",
    institution: "Board of Secondary Education",
    school: "Geetanjali High School, Hyderabad",
    period: "2006",
    score: "72%",
  },
];

export const portfolioItems = [
  {
    title: "API Governance Playbook",
    description:
      "A future collection of patterns for API products, plans, rate limits, catalogs, and controlled enterprise publishing.",
    tags: ["API Connect", "Catalogs", "Governance"],
    href: "#contact",
  },
  {
    title: "DataPower Field Notes",
    description:
      "Operational notes for MPGW, WSP, SSL profiles, log targets, probes, firmware upgrades, and service hardening.",
    tags: ["DataPower", "Operations", "Security"],
    href: "#contact",
  },
  {
    title: "Transformation Lab",
    description:
      "Examples and explainers for SOAP-to-COBOL, WTX DPA, XSLT, XPath, SAML validation, and backend orchestration.",
    tags: ["XSLT", "WTX", "SAML"],
    href: "#contact",
  },
  {
    title: "Enterprise Case Studies",
    description:
      "Anonymized case studies spanning banking, healthcare, education, government, and airport integration programs.",
    tags: ["Banking", "Healthcare", "Migration"],
    href: "#contact",
  },
];
