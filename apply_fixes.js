const fs = require('fs');
const path = require('path');

const baseDir = "g:\\Drives compartilhados\\Trabalho\\concierge";
const indexHtml = path.join(baseDir, "index.html");
const qsHtml = path.join(baseDir, "quem-somos.html");
const guideHtml = path.join(baseDir, "guide.html");
const outrosHtml = path.join(baseDir, "outros-servicos.html");
const stylesCss = path.join(baseDir, "styles.css");
const scriptJs = path.join(baseDir, "script.js");

const htmlFiles = [indexHtml, qsHtml, guideHtml, outrosHtml];

function readFile(p) {
    return fs.readFileSync(p, 'utf8');
}

function writeFile(p, content) {
    fs.writeFileSync(p, content, 'utf8');
}

// 1. Update text in index.html
let indexContent = readFile(indexHtml);
indexContent = indexContent.replace(
    "Uma Equipe, One Stop Shop: Imigração, mudança, organizer, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!",
    "Uma Equipe, One Stop Shop: Imigração, mudança, Interior design, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!"
);
writeFile(indexHtml, indexContent);

// 2. Update guide.html Title (Guia DA Concierge -> Guia DO Concierge)
for (const file of htmlFiles) {
    let content = readFile(file);
    content = content.replace(/Guia DA Concierge/gi, "Guia DO Concierge");
    writeFile(file, content);
}

// 3. Update script.js
let jsContent = readFile(scriptJs);

// Update Simone's quote
jsContent = jsContent.replace(
    '“Centralizar e simplificar a jornada de nossos clientes com eficiência, profissionalismo e excelência para uma mudança segura aos EUA.”',
    '“O planejamento pré imigratório é o alicerce fundamental para a mudança em um novo país…”'
);

// Update Monica's quote
jsContent = jsContent.replace(
    '“Ajudar as famílias no planejamento acadêmico e financeiro é fundamental para um adaptação bem-sucedida e segura em um novo país…”',
    '“Toda família merece um bom planejamento educacional e financeiro para ter sucesso em um novo país.”'
);

// Update translations badge
jsContent = jsContent.replace(
    "'Uma Equipe, One Stop Shop: Imigração, mudança, organizer, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!'",
    "'Uma Equipe, One Stop Shop: Imigração, mudança, Interior design, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!'"
);

jsContent = jsContent.replace(
    "'One Team, One Stop Shop: Immigration, relocation, organizer, real estate, finances, education, and business internationalization all in one place!'",
    "'One Team, One Stop Shop: Immigration, relocation, Interior design, real estate, finances, education, and business internationalization all in one place!'"
);

// Update Monica's Specialties
const oldMonica = `        pt: [
          {
            header: 'Educa\\u00e7\\u00e3o:',
            items: [
              'Mapeamento da Regi\\u00e3o Escolar',
              'Consultoria para Escolha da Escola',
              'Vis\\u00e3o Geral do K-12 com Foco nos Ciclos Escolares',
              'Prepara\\u00e7\\u00e3o para Aplica\\u00e7\\u00e3o \\u00e0s Universidades Americanas',
              'Consultoria Durante os 4 Anos do High School',
            ]
          }
        ],`;

const newMonica = `        pt: [
          {
            header: 'Educa\\u00e7\\u00e3o:',
            items: [
              'Mapeamento da Regi\\u00e3o Escolar',
              'Consultoria para Escolha da Escola',
              'Vis\\u00e3o Geral do K-12 com Foco nos Ciclos Escolares',
              'Prepara\\u00e7\\u00e3o para Aplica\\u00e7\\u00e3o \\u00e0s Universidades Americanas'
            ]
          },
          {
            header: 'Financeiro:',
            items: [
              'Prote\\u00e7\\u00e3o Familiar',
              'Aposentadoria Suplementar'
            ]
          }
        ],`;
jsContent = jsContent.replace(oldMonica, newMonica);

// Update Simone's Specialties
const oldSimone = `        pt: [
          'Planejamento Pr\\u00e9-Imigrat\\u00f3rio',
          {
            header: 'Vistos de Imigra\\u00e7\\u00e3o:',
            items: [
              'Vistos Permanentes (Green Card)',
              'Vistos de Trabalho',
              'Vistos de Fam\\u00edlia',
              'Cidadania Americana',
            ]
          }
        ],`;
        
const newSimone = `        pt: [
          'Gestão de Escritório de Advocacia para Vistos Imigratórios: Vistos de família, Green Card e Vistos de Trabalho.',
          'Gerenciamento de negócios nos Estados Unidos.',
          {
            header: 'Documentação:',
            items: [
              'Cartório: Procurações, Certidões, Traduções certificadas, notarização de documentos',
              'Proteção familiar: Guardianship, Will, Planejamento Sucessório.'
            ]
          },
          'Planejamento Familiar Pré-Imigratório - Mudança da família'
        ],`;
jsContent = jsContent.replace(oldSimone, newSimone);
writeFile(scriptJs, jsContent);

// 4. Quem Somos
let qsContent = readFile(qsHtml);
const oldP2 = "Dedica-se a assessorar empresas e fam\u00edlias no planejamento e na transi\u00e7\u00e3o para os Estados Unidos, oferecendo solu\u00e7\u00f5es estruturadas, seguras e altamente personalizadas. Simone coordena uma rede qualificada de parceiros em diversas \u00e1reas, garantindo suporte completo em todas as etapas do processo de mudan\u00e7a.";
const newP2 = "Dedica-se a assessorar empresas e famílias no planejamento e na transição para os Estados Unidos, oferecendo soluções estruturadas, seguras e altamente personalizadas. Simone coordena uma rede qualificada de parceiros em diversas áreas, garantindo suporte completo em todas as etapas do processo de mudança.";

// Actually it seems the text is rendered via JS, but if it is in HTML too:
qsContent = qsContent.replace(
    /Dedica-se a assessorar empresas e fam.lias no planejamento e na transi..o para os Estados Unidos, oferecendo solu..es estruturadas, seguras e altamente personalizadas\. Simone coordena uma rede qualificada de parceiros em diversas .reas, garantindo suporte completo em todas as etapas do processo de mudan.a\./gi, 
    newP2
);
writeFile(qsHtml, qsContent);

// 5. Add mobile menu to HTML files and fix footer social icons
for (const file of htmlFiles) {
    let html = readFile(file);
    
    // Add mobile menu button if not exists
    const langSwitch = '<div class="lang-switch">';
    const hamburgerHtml = `<button class="mobile-menu-btn" aria-label="Abrir menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      `;
      
    if (!html.includes('mobile-menu-btn')) {
        html = html.replace(langSwitch, hamburgerHtml + langSwitch);
    }
    
    // Fix social icons in footer (ensure they have absolute urls)
    // The issue says "Os ícones das redes sociais do rodapé não funciona em algumas páginas"
    // Usually it's because href="https://..." is missing or incorrect. I'll make sure they match index.html
    html = html.replace(
        /<a href="([^"]*facebook[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, 
        '<a href="https://www.facebook.com/profile.php?id=61566010590338" class="social-link" aria-label="Facebook" target="_blank" title="Facebook">$2</a>'
    );
    html = html.replace(
        /<a href="([^"]*instagram[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, 
        '<a href="https://www.instagram.com/conciergeserviceusa?igsh=ZzFvaXZ5OGR4c2s4" class="social-link" aria-label="Instagram" target="_blank" title="Instagram">$2</a>'
    );
    html = html.replace(
        /<a href="([^"]*linkedin[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, 
        '<a href="https://www.linkedin.com/company/conciergeserviceusaa/" class="social-link" aria-label="LinkedIn" target="_blank" title="LinkedIn">$2</a>'
    );
    html = html.replace(
        /<a href="([^"]*youtube[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, 
        '<a href="https://www.youtube.com/@conciergeserviceusa" class="social-link" aria-label="YouTube" target="_blank" title="YouTube">$2</a>'
    );
    
    writeFile(file, html);
}

// 6. Modify styles.css
let cssContent = readFile(stylesCss);
const mobileCss = `
.mobile-menu-btn {
  display: none;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
    z-index: 100;
  }
  
  .main-nav {
    display: flex !important;
    position: fixed;
    top: 0;
    right: -280px;
    width: 280px;
    height: 100vh;
    background: #490038;
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 2rem 2rem;
    transition: right 0.35s ease;
    z-index: 90;
    box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    gap: 1.5rem;
  }

  .main-nav.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.15rem;
    padding: 0.5rem 0;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    border-radius: 0;
  }
}
`;
if (!cssContent.includes('.mobile-menu-btn')) {
    cssContent += mobileCss;
}

cssContent = cssContent.replace(
    'object-position: center 15%;',
    'object-position: center 2%;'
);

const andreaCss = `
.hero-badge-avatars img[src*="Andrea"] {
  transform: scale(1.15);
  object-position: center top;
}
`;
if (!cssContent.includes('img[src*="Andrea"]')) {
    cssContent += andreaCss;
}
writeFile(stylesCss, cssContent);

// 7. Add JS for mobile menu
let scriptContent = readFile(scriptJs);
const mobileJs = `
  /* ==========================================
     MOBILE MENU TOGGLE
     ========================================== */
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }
`;
if (!scriptContent.includes('MOBILE MENU TOGGLE')) {
    scriptContent = scriptContent.replace('});', mobileJs + '\n});');
}
writeFile(scriptJs, scriptContent);

console.log("All updates applied successfully using Node.js.");
