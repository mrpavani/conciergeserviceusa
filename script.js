document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     TRANSLATIONS
     ========================================== */
  const translations = {
    pt: {
      about_title: 'Quem somos?',
      about_p1: 'O Concierge Service U.S.A é formado por três mulheres brasileiras do mundo corporativo, que mudaram com suas famílias para os Estados Unidos. Baseadas em suas próprias experiências, perceberam a necessidade de prestar apoio e suporte para outras famílias nesse processo de mudança de país.',
      about_p2: 'Com personalização e acolhimento, assessora todo o processo desde o planejamento pré-imigratório à adaptação aos Estados Unidos.',
      hero_eyebrow: 'Concierge para mudança aos EUA',
      hero_title: 'Concierge Service USA:<br>Um novo começo merece todo o suporte e apoio.',
      hero_subtitle: 'Estaremos ao seu lado em cada passo do seu processo de decisão, mudança e adaptação aos EUA!',
      btn_contact: 'Fale Conosco',
      hero_link_team: 'Conheça a equipe',
      hero_highlight_1: 'Suporte personalizado em cada etapa da mudança',
      hero_highlight_2: 'Equipe multidisciplinar: imigração, educação e moradia',
      hero_highlight_3: 'Acompanhamento do planejamento à adaptação',
      hero_badge_title: 'Uma equipe, três especialidades',
      hero_badge_subtitle: 'Uma Equipe, One Stop Shop: Imigração, mudança, Interior design, mercado imobiliário, finanças, educação e internacionalização de negócios em um só lugar!',
      services_title: 'O que você está buscando?',
      service_visas: 'Precisa de suporte com vistos e documentação?',
      service_education: 'Busca assessoria para o sistema educacional americano "K-12"?',
      service_international: 'Quer saber como internacionalizar seu negócio ou delinear seu patrimônio?',
      service_concierge: 'Precisa de um concierge para facilitar sua mudança, organizar e personalizar o seu lar?',
      service_protection: 'Quer saber como proteger sua família e sua casa nos EUA?',
      service_more_link: 'Saiba mais',
      other_services_title: 'Outros Serviços',
      other_services_subtitle: 'Cartório digital, seguros, planejamento sucessório, tributário, contábil e muito mais — tudo em um só lugar.',
      other_services_cta: 'Ver todos os serviços',
      other_notary_title: 'Cartório Digital',
      other_notary_desc: 'Procurações, certidões, traduções certificadas, notarização de documentos e visto brasileiro.',
      other_estate_title: 'Planejamento Sucessório',
      other_estate_desc: 'Will, Guardianship e planejamento sucessório para proteger sua família e seu patrimônio.',
      other_health_title: 'Plano de Saúde',
      other_health_desc: 'Planos de saúde nacionais e internacionais sob medida para você e sua família.',
      other_insurance_title: 'Seguros',
      other_insurance_desc: 'Seguro auto, vida e casa para proteger o que você construiu nos EUA.',
      other_tax_title: 'Planejamento Tributário',
      other_tax_desc: 'Estratégias tributárias para otimizar sua situação fiscal nos Estados Unidos.',
      other_accounting_title: 'Planejamento Contábil',
      other_accounting_desc: 'Suporte contábil completo para pessoas físicas e jurídicas.',
      other_talk_link: 'Falar sobre este serviço',
      cta_title: 'Não importa em qual fase do processo você está, nós podemos ajudar.',
      btn_talk: 'Fale com um Especialista',
      team_title: 'Saiba com quem e o que você pode contar!',
      team_read_more: 'Leia mais',
      role_andrea: 'Interior Designer',
      role_monica: 'Consultora Educacional e Financeira',
      role_simone: 'Mobilidade Internacional',
      story_title: 'Conheça nossa história',
      story_andrea_p1: 'Andrea Porto é formada em Administração de Empresas e possui mais de 25 anos de experiência na área financeira, com sólida atuação em planejamento de previdência.',
      story_andrea_p2: 'Desde 2015, Andrea expandiu sua expertise para o Design de Interiores, com especialização em organização residencial e funcionalidade dos espaços. É fundadora da Home Identity, empresa dedicada a transformar residências em ambientes harmoniosos, eficientes e personalizados, que refletem o estilo de vida e as necessidades de cada família.',
      story_andrea_p3: 'Ao combinar sua visão estratégica com sensibilidade estética, Andrea oferece uma perspectiva única que integra planejamento, funcionalidade e design. Ela vem apoiando famílias nos Estados Unidos com soluções que simplificam o dia a dia e promovem bem-estar por meio de ambientes cuidadosamente planejados.',
      story_monica_p1: 'Monica Rafful Gasparetto é advogada formada no Brasil, com mais de 30 anos de experiência profissional, trazendo uma base sólida em estratégia, orientação e atendimento ao cliente. Atuou como voluntária e funcionária do Condado de Broward e trabalha há aproximadamente oito anos na área educacional, auxiliando famílias na navegação do sistema acadêmico americano.',
      story_monica_p2: 'Nos últimos cinco anos, Monica também expandiu sua atuação como consultora financeira licenciada, apoiando famílias nos Estados Unidos no planejamento acadêmico e financeiro. Sua formação multidisciplinar permite oferecer uma abordagem abrangente e personalizada, ajudando famílias a tomarem decisões seguras alinhadas às prioridades educacionais e aos objetivos financeiros de longo prazo.',
      story_monica_p3: 'Ao integrar conhecimento jurídico, orientação educacional e planejamento financeiro, Monica proporciona uma perspectiva única que capacita famílias a construírem futuros estruturados e seguros nos Estados Unidos.',
      story_simone_p1: 'Simone Muraro é empresária com mais de 30 anos de experiência no Brasil e trajetória internacional em três países. Estabeleceu-se nos Estados Unidos em 2019, passando a atuar de forma estratégica nas áreas de Imigração, Negócios e Mobilidade Internacional.',
      story_simone_p2: 'Dedica-se a assessorar empresas e famílias no planejamento e na transição para os Estados Unidos, oferecendo soluções estruturadas, seguras e altamente personalizadas. Simone coordena uma rede qualificada de parceiros em diversas áreas, garantindo suporte completo em todas as etapas do processo de mudança.',
      story_simone_p3: 'Licenciada na área financeira e no mercado imobiliário da Flórida, integra seus conhecimentos técnicos ao conceito de <em>one stop shop</em> por meio do <em>Concierge Service USA</em>, centralizando e simplificando a jornada de seus clientes com eficiência, profissionalismo e excelência.',
      testimonials_title: 'O que dizem sobre nós',
      testimonial_1: '"A Concierge Service USA transformou nossa mudança para os EUA em uma experiência tranquila e segura. Do visto à matrícula escolar, cada passo foi acompanhado de perto."',
      testimonial_2: '"Um novo começo em outro país parecia impossível, mas com o suporte da equipe, a adaptação foi mais leve e acolhedora do que imaginávamos."',
      testimonial_3: '"Profissionalismo e dedicação definem essa equipe. Nos ajudaram em cada detalhe da nossa adaptação, como verdadeiros amigos de confiança."',
      testimonial_4: '"Encontrar a escola ideal para meus filhos nos EUA era o maior desafio. Graças à assessoria da Monica, encontramos a combinação perfeita."',
      testimonial_5: '"A organização da nossa nova casa ficou impecável. Andrea transformou nosso espaço em um verdadeiro lar, com tudo no lugar certo."',
      testimonial_6: '"Nossa família encontrou nos EUA um novo propósito. Todo o processo de mudança foi conduzido com carinho, atenção e profissionalismo."',
      footer_desc: 'Transformando a sua mudança e adaptação aos Estados Unidos em uma experiência tranquila, organizada e segura.',
      footer_services: 'Nossos serviços',
      footer_links: 'Navegação',
      footer_contact: 'Contatos',
      footer_copyright: 'Copyright &copy; Concierge Service USA',
      pub_title: 'Publicações',
      pub_subtitle: 'Conhecimento especializado para cada etapa da sua jornada aos EUA',
      pub_cta: 'Ver todos os artigos'
    },
    en: {
      about_title: 'Who we are',
      about_p1: 'Concierge Service U.S.A is formed by three Brazilian women from the corporate world who moved with their families to the United States. Drawing on their own experiences, they recognized the need to provide support to other families going through this process of moving to a new country.',
      about_p2: 'With personalization and warmth, we guide the entire process, from pre-immigration planning through adaptation to the United States.',
      hero_eyebrow: 'Concierge for your move to the US',
      hero_title: 'Concierge Service USA:<br>A new beginning deserves full support.',
      hero_subtitle: 'We will be by your side every step of your decision, relocation, and adaptation to the US!',
      btn_contact: 'Contact Us',
      hero_link_team: 'Meet the team',
      hero_highlight_1: 'Personalized support at every step of the move',
      hero_highlight_2: 'Multidisciplinary team: immigration, education, and housing',
      hero_highlight_3: 'Guidance from planning through adaptation',
      hero_badge_title: 'One team, three specialties',
      hero_badge_subtitle: 'One Team, One Stop Shop: Immigration, relocation, Interior design, real estate, finances, education, and business internationalization all in one place!',
      services_title: 'What are you looking for?',
      service_visas: 'Need support with visas and documentation?',
      service_education: 'Looking for guidance with the American "K-12" education system?',
      service_international: 'Want to know how to internationalize your business or structure your assets?',
      service_concierge: 'Need a concierge to ease your move, organize, and personalize your home?',
      service_protection: 'Want to know how to protect your family and your home in the US?',
      service_more_link: 'Learn more',
      other_services_title: 'Other Services',
      other_services_subtitle: 'Digital notary, insurance, estate planning, tax and accounting support, and much more — all in one place.',
      other_services_cta: 'See all services',
      other_notary_title: 'Digital Notary',
      other_notary_desc: 'Powers of attorney, certificates, certified translations, document notarization, and Brazilian visa.',
      other_estate_title: 'Estate Planning',
      other_estate_desc: 'Will, guardianship, and estate planning to protect your family and assets.',
      other_health_title: 'Health Insurance',
      other_health_desc: 'National and international health plans tailored to you and your family.',
      other_insurance_title: 'Insurance',
      other_insurance_desc: 'Auto, life, and home insurance to protect what you\'ve built in the US.',
      other_tax_title: 'Tax Planning',
      other_tax_desc: 'Tax strategies to optimize your fiscal situation in the United States.',
      other_accounting_title: 'Accounting',
      other_accounting_desc: 'Complete accounting support for individuals and businesses.',
      other_talk_link: 'Talk about this service',
      cta_title: 'No matter what stage of the process you are in, we can help.',
      btn_talk: 'Talk to an Expert',
      team_title: 'Know who and what you can count on!',
      team_read_more: 'Read more',
      role_andrea: 'Interior Designer',
      role_monica: 'Educational & Financial Consultant',
      role_simone: 'International Mobility',
      story_title: 'Meet our story',
      story_andrea_p1: 'Andrea Porto holds a degree in Business Administration and has more than 25 years of experience in the financial field, with a solid track record in retirement planning.',
      story_andrea_p2: 'Since 2015, Andrea has expanded her expertise into Interior Design, specializing in residential organization and space functionality. She is the founder of Home Identity, a company dedicated to transforming homes into harmonious, efficient, and personalized environments that reflect each family\'s lifestyle and needs.',
      story_andrea_p3: 'By combining strategic vision with aesthetic sensitivity, Andrea offers a unique perspective that integrates planning, functionality, and design. She has been supporting families in the United States with solutions that simplify everyday life and promote well-being through carefully planned environments.',
      story_monica_p1: 'Monica Rafful Gasparetto is an attorney trained in Brazil, with more than 30 years of professional experience, bringing a solid foundation in strategy, guidance, and client service. She has volunteered and worked for Broward County and has spent approximately eight years in the education field, helping families navigate the American academic system.',
      story_monica_p2: 'Over the past five years, Monica has also expanded her practice as a licensed financial consultant, supporting families in the United States with academic and financial planning. Her multidisciplinary background allows her to offer a comprehensive, personalized approach, helping families make sound decisions aligned with their educational priorities and long-term financial goals.',
      story_monica_p3: 'By integrating legal knowledge, educational guidance, and financial planning, Monica offers a unique perspective that empowers families to build structured, secure futures in the United States.',
      story_simone_p1: 'Simone Muraro is a businesswoman with more than 30 years of experience in Brazil and an international track record spanning three countries. She settled in the United States in 2019, taking on a strategic role in Immigration, Business, and International Mobility.',
      story_simone_p2: 'She is dedicated to advising companies and families in planning and their transition to the United States, offering structured, secure, and highly personalized solutions. Simone coordinates a qualified network of partners across multiple areas, ensuring complete support at every stage of the move.',
      story_simone_p3: 'Licensed in the financial field and in the Florida real estate market, she integrates her technical knowledge into the <em>one stop shop</em> concept through <em>Concierge Service USA</em>, centralizing and simplifying her clients\' journey with efficiency, professionalism, and excellence.',
      testimonials_title: 'What they say about us',
      testimonial_1: '"Concierge Service USA transformed our move to the US into a smooth and safe experience. From the visa to school enrollment, every step was closely monitored."',
      testimonial_2: '"A new beginning in another country seemed impossible, but with the team\'s support, the adaptation was lighter and more welcoming than we imagined."',
      testimonial_3: '"Professionalism and dedication define this team. They helped us in every detail of our adaptation, like true trusted friends."',
      testimonial_4: '"Finding the ideal school for my children in the US was the biggest challenge. Thanks to Monica\'s advice, we found the perfect match."',
      testimonial_5: '"The organization of our new house was impeccable. Andrea transformed our space into a real home, with everything in the right place."',
      testimonial_6: '"Our family found a new purpose in the US. The entire moving process was handled with care, attention, and professionalism."',
      footer_desc: 'Transforming your move and adaptation to the United States into a peaceful, organized, and safe experience.',
      footer_services: 'Our services',
      footer_links: 'Navigation',
      footer_contact: 'Contact Info',
      footer_copyright: 'Copyright &copy; Concierge Service USA',
      pub_title: 'Publications',
      pub_subtitle: 'Expert knowledge for every step of your journey to the USA',
      pub_cta: 'View all articles'
    }
  };

  /* ==========================================
     LANGUAGE SWITCHER LOGIC
     ========================================== */
  const langBtns = document.querySelectorAll('.lang-btn');
  let currentLang = 'pt';

  function updateLanguage(lang) {
    currentLang = lang;
    const dictionary = translations[lang];

    // Update buttons
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    
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

});

    // Update texts in DOM
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        el.innerHTML = dictionary[key];
      }
    });

    // Update active team member detail card text based on current language
    const activeMember = document.querySelector('.team-member.active');
    if (activeMember) {
      // Re-trigger click to refresh details in the new language
      activeMember.click(); 
    }
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  /* ==========================================
     SCROLL REVEAL ANIMATIONS
     ========================================== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
    revealObserver.observe(el);
  });

  /* ==========================================
     TEAM MEMBER SELECTION
     ========================================== */
  const teamData = {
    monica: {
      name: 'Monica Gasparetto',
      photo: 'image/Monica.jpg',
      isPlaceholder: false,
      initials: 'MG',
      specialties: {
        pt: [
          {
            header: 'Educa\u00e7\u00e3o:',
            items: [
              'Mapeamento da Regi\u00e3o Escolar',
              'Consultoria para Escolha da Escola',
              'Vis\u00e3o Geral do K-12 com Foco nos Ciclos Escolares',
              'Prepara\u00e7\u00e3o para Aplica\u00e7\u00e3o \u00e0s Universidades Americanas'
            ]
          },
          {
            header: 'Financeiro:',
            items: [
              'Prote\u00e7\u00e3o Familiar',
              'Aposentadoria Suplementar'
            ]
          }
        ],
        en: [
          {
            header: 'Education:',
            items: [
              'School District Mapping',
              'School Choice Consulting',
              'K-12 Overview Focused on School Cycles',
              'Preparation for US College Applications',
              'Consulting Throughout the 4 Years of High School',
            ]
          }
        ]
      },
      quote: {
        pt: '“Toda família merece um bom planejamento educacional e financeiro para ter sucesso em um novo país.”',
        en: '"Helping families with academic and financial planning is essential for a successful and secure adaptation in a new country..."'
      }
    },
    simone: {
      name: 'Simone Muraro',
      photo: 'image/Simone.jpg',
      isPlaceholder: false,
      initials: 'SM',
      specialties: {
        pt: [
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
        ],
        en: [
          'Pre-Immigration Planning',
          {
            header: 'Immigration Visas:',
            items: [
              'Permanent Visas (Green Card)',
              'Work Visas',
              'Family Visas',
              'US Citizenship',
            ]
          }
        ]
      },
      quote: {
        pt: '“O planejamento pré imigratório é o alicerce fundamental para a mudança em um novo país…”',
        en: '"Centralizing and simplifying our clients\' journey with efficiency, professionalism, and excellence for a secure move to the US."'
      }
    },
    andrea: {
      name: 'Andrea Porto',
      photo: 'image/Andrea.jpg',
      isPlaceholder: false,
      initials: 'AP',
      specialties: {
        pt: [
          {
            header: 'Moradia:',
            items: [
              'Mapeamento da Região',
              'Locação, Compra e Venda (residencial e comercial)',
              'Organização e Monitoramento da Mudança',
              'Personal Organizer',
              'Interior Designer | Home Identity',
              'Home Embellishment',
            ]
          }
        ],
        en: [
          {
            header: 'Housing:',
            items: [
              'Area Mapping',
              'Renting, Buying and Selling (residential and commercial)',
              'Move Organization and Monitoring',
              'Personal Organizer',
              'Interior Designer | Home Identity',
              'Home Embellishment',
            ]
          }
        ]
      },
      quote: {
        pt: '"Crio ambientes funcionais, confortáveis e inspiradores..."',
        en: '"I create functional, comfortable, and inspiring environments..."'
      }
    }
  };

  const members = document.querySelectorAll('.team-member');
  const detailCard = document.getElementById('team-detail');

  function updateDetailCard(data) {
    const photoHTML = data.isPlaceholder
      ? `<div class="placeholder-avatar">${data.initials}</div>`
      : `<img src="${data.photo}" alt="${data.name}">`;

    const specialtiesList = Array.isArray(data.specialties) ? data.specialties : data.specialties[currentLang];
    const specialtiesHTML = specialtiesList
      .map((s) => {
        if (typeof s === 'string') return `<li>${s}</li>`;
        const itemsHTML = s.items.map((i) => `<li class="sub-item">${i}</li>`).join('');
        return `<li class="group-header">${s.header}</li>${itemsHTML}`;
      })
      .join('');

    const quoteText = typeof data.quote === 'string' ? data.quote : data.quote[currentLang];

    detailCard.innerHTML = `
      <div class="team-detail-header">
        <div class="detail-photo">
          ${photoHTML}
        </div>
        <div class="detail-info">
          <h3>${data.name}</h3>
          <ul>${specialtiesHTML}</ul>
        </div>
      </div>
      <div class="team-detail-quote">
        <blockquote>${quoteText}</blockquote>
      </div>
    `;
  }

  if (detailCard) updateDetailCard(teamData.andrea);

  members.forEach((member) => {
    member.addEventListener('click', () => {
      const key = member.dataset.member;
      const data = teamData[key];
      if (!data) return;

      // Update active state
      members.forEach((m) => m.classList.remove('active'));
      member.classList.add('active');

      // Animate card transition
      detailCard.classList.add('fade-out');
      setTimeout(() => {
        updateDetailCard(data);
        detailCard.classList.remove('fade-out');
      }, 280);
    });
  });

  /* ==========================================
     HEADER SCROLL EFFECT — removed (header is not sticky)
     ========================================== */
  // Header scrolls away naturally — no sticky behavior needed

  /* ==========================================
     SERVICE CARD HOVER RIPPLE EFFECT
     ========================================== */
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'var(--transition-base)';
    });
  });

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
});
