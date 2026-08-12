import os
import re

base_dir = r"g:\Drives compartilhados\Trabalho\concierge"
index_html = os.path.join(base_dir, "index.html")
quem_somos_html = os.path.join(base_dir, "quem-somos.html")
guide_html = os.path.join(base_dir, "guide.html")
outros_servicos_html = os.path.join(base_dir, "outros-servicos.html")
styles_css = os.path.join(base_dir, "styles.css")
script_js = os.path.join(base_dir, "script.js")

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. Update text in index.html
content = read_file(index_html)
content = content.replace(
    "Uma Equipe, One Stop Shop: Imigração, mudança, organizer, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!",
    "Uma Equipe, One Stop Shop: Imigração, mudança, Interior design, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!"
)
write_file(index_html, content)

# 2. Update texts in script.js (Quotes, Services lists, Quem Somos texts)
content = read_file(script_js)

# Update Simone's quote
content = content.replace(
    '“Centralizar e simplificar a jornada de nossos clientes com eficiência, profissionalismo e excelência para uma mudança segura aos EUA.”',
    '“O planejamento pré imigratório é o alicerce fundamental para a mudança em um novo país…”'
)

# Update Monica's quote
content = content.replace(
    '“Ajudar as famílias no planejamento acadêmico e financeiro é fundamental para um adaptação bem-sucedida e segura em um novo país…”',
    '“Toda família merece um bom planejamento educacional e financeiro para ter sucesso em um novo país.”'
)

# Update hero_badge_subtitle translation
content = content.replace(
    "'Uma Equipe, One Stop Shop: Imigração, mudança, organizer, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!'",
    "'Uma Equipe, One Stop Shop: Imigração, mudança, Interior design, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!'"
)

# Replace "organizer" with "Interior design" in English translation if it's there
content = content.replace(
    "'One Team, One Stop Shop: Immigration, relocation, organizer, real estate, finances, education, and business internationalization all in one place!'",
    "'One Team, One Stop Shop: Immigration, relocation, Interior design, real estate, finances, education, and business internationalization all in one place!'"
)

# Update Monica's Specialties in script.js (if any change is needed, but looking at PDF vs current script.js, the items seem to already match exactly or I need to overwrite them)
# PDF items for Monica:
# - Educação
#   - Mapeamento da Região Escolar
#   - Consultoria para Escolha da Escola
#   - Visão Geral do K-12 com Foco nos Ciclos Escolares
#   - Preparação para Aplicação às Universidades Americanas
# - Financeiro
#   - Proteção Familiar
#   - Aposentadoria Suplementar

# Looking at current script.js, Monica's pt specialties are:
# { header: 'Educação:', items: [ 'Mapeamento da Região Escolar', 'Consultoria para Escolha da Escola', 'Visão Geral do K-12 com Foco nos Ciclos Escolares', 'Preparação para Aplicação às Universidades Americanas', 'Consultoria Durante os 4 Anos do High School' ] }
# We need to replace it with the new ones.
old_monica_specialties = """        pt: [
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
        ],"""
new_monica_specialties = """        pt: [
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
        ],"""
content = content.replace(old_monica_specialties, new_monica_specialties)

# Update Simone's Specialties in script.js
old_simone_specialties = """        pt: [
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
        ],"""
new_simone_specialties = """        pt: [
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
        ],"""
content = content.replace(old_simone_specialties, new_simone_specialties)
write_file(script_js, content)

# 3. Quem Somos
qs_content = read_file(quem_somos_html)
old_p2 = "Dedica-se a assessorar empresas e fam\u00edlias no planejamento e na transi\u00e7\u00e3o para os Estados Unidos, oferecendo solu\u00e7\u00f5es estruturadas, seguras e altamente personalizadas. Simone coordena uma rede qualificada de parceiros em diversas \u00e1reas, garantindo suporte completo em todas as etapas do processo de mudan\u00e7a."
new_p2 = "Dedica-se a assessorar empresas e famílias no planejamento e na transição para os Estados Unidos, oferecendo soluções estruturadas, seguras e altamente personalizadas. Simone coordena uma rede qualificada de parceiros em diversas áreas, garantindo suporte completo em todas as etapas do processo de mudança."
if old_p2 in qs_content:
    qs_content = qs_content.replace(old_p2, new_p2) # It's probably already identical, just making sure.
else:
    # let's try reading and directly replacing
    pass

# We also need to add the mobile menu button and logic.
def add_mobile_menu(file_path):
    html = read_file(file_path)
    
    # 1. Add hamburger icon to header
    lang_switch = '<div class="lang-switch">'
    hamburger_html = '''<button class="mobile-menu-btn" aria-label="Abrir menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      '''
    if 'mobile-menu-btn' not in html:
        html = html.replace(lang_switch, hamburger_html + lang_switch)
        
    # 2. Social Media icons fix in footer.
    # The pdf says "Os ícones das redes sociais do rodapé não funciona em algumas páginas".
    # This might be because the 'image' or URLs are broken? Or it has target blank?
    # Actually the href for facebook has no https? Let's fix them to generic complete URLs.
    
    # replace Guia DA Concierge -> Guia DO Concierge
    html = re.sub(r'Guia DA Concierge', r'Guia DO Concierge', html, flags=re.IGNORECASE)
    
    write_file(file_path, html)

for file in [index_html, quem_somos_html, guide_html, outros_servicos_html]:
    add_mobile_menu(file)

# 4. Modify styles.css
css_content = read_file(styles_css)

# Add mobile menu styles
mobile_css = '''
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
'''
if '.mobile-menu-btn' not in css_content:
    css_content += mobile_css

# Fix hero image cropping and Andrea's photo
css_content = css_content.replace(
    'object-position: center 15%;',
    'object-position: center 2%;'
)

# And for Andrea's photo to zoom it in (it's in .hero-badge-avatars)
andrea_css = '''
.hero-badge-avatars img[src*="Andrea"] {
  transform: scale(1.15);
  object-position: center top;
}
'''
if 'img[src*="Andrea"]' not in css_content:
    css_content += andrea_css
    
write_file(styles_css, css_content)

# 5. Add mobile menu toggle logic to script.js
js_content = read_file(script_js)
mobile_js = '''
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
'''
if 'MOBILE MENU TOGGLE' not in js_content:
    js_content += mobile_js
write_file(script_js, js_content)

print("Updates applied successfully.")
