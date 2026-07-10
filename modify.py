import re

with open('/Volumes/SSDTrabalho/Trabalho/projetos/dev/concierge/index.html', 'r') as f:
    content = f.read()

# 1. Update Navigation
nav_target = """      <nav class="main-nav" aria-label="Navegação principal">
        <a href="quem-somos.html" class="nav-link">Quem Somos</a>
        <a href="#servicos" class="nav-link">Nossos Serviços</a>
        <a href="outros-servicos.html" class="nav-link">Outros Serviços</a>
        <a href="guide.html" class="nav-link">Guia do Concierge</a>
        <!--<a href="#equipe" class="nav-link">Saiba com quem contar</a>-->
      </nav>"""

nav_replacement = """      <nav class="main-nav" aria-label="Navegação principal">
        <a href="#inicio" class="nav-link">Início</a>
        <a href="#equipe" class="nav-link">Nossos serviços</a>
        <a href="outros-servicos.html" class="nav-link">Outros serviços</a>
        <a href="guide.html" class="nav-link">Guia do concierge</a>
      </nav>"""
content = content.replace(nav_target, nav_replacement)

# 2. Extract and remove 'other-services-teaser'
other_services_pattern = re.compile(r'    <section class="other-services-teaser" id="outros-servicos">.*?</section>\n\n', re.DOTALL)
match = other_services_pattern.search(content)
if match:
    other_services_html = match.group(0)
    content = content.replace(other_services_html, '')
    
    # 3. Insert it after the 'team' section
    team_end_target = "    </section>\n\n    <section class=\"testimonials\" id=\"depoimentos\">"
    content = content.replace(team_end_target, "    </section>\n\n" + other_services_html + "    <section class=\"testimonials\" id=\"depoimentos\">")

# 4. Update the section title
title_target = """        <div class="team-header reveal">
          <h2 data-i18n="team_title">Saiba com quem você pode contar</h2>
        </div>"""
title_replacement = """        <div class="team-header reveal">
          <h2 data-i18n="team_title">Saiba com quem e o que você pode contar!</h2>
        </div>"""
content = content.replace(title_target, title_replacement)

with open('/Volumes/SSDTrabalho/Trabalho/projetos/dev/concierge/index.html', 'w') as f:
    f.write(content)

