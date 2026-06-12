export function SeoSchema() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Анна Суязова',
    jobTitle: 'Консультант по управлению детскими садами',
    description:
      'Основатель сети частных детских садов «Дети в приоритете», предприниматель, консультант по управлению детскими садами и центрами.',
    url: 'https://suyazova.ru/',
    image: 'https://suyazova.ru/anna-fireplace.jpg',
    sameAs: [
      'https://t.me/anna_suyazova',
      'https://www.instagram.com/annasuyazova',
      'https://wa.me/79614691333',
    ],
    award: [
      'Лучший молодой предприниматель России (2016)',
      'Золотой Меркурий (3×)',
      'Лучший социальный проект года (2021)',
      'Лучший предприниматель года (2025)',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Дети в приоритете',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Анна Суязова — Консультант по управлению детскими садами',
    description:
      'Консультации по управлению детскими садами и центрами, внедрение CRM, финансовое моделирование, маркетинговая поддержка, скрипты продаж для администраторов.',
    url: 'https://suyazova.ru/',
    image: 'https://suyazova.ru/anna-fireplace.jpg',
    telephone: '+7-961-469-13-33',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    sameAs: [
      'https://t.me/anna_suyazova',
      'https://www.instagram.com/annasuyazova',
      'https://wa.me/79614691333',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-961-469-13-33',
      contactType: 'консультации',
      availableLanguage: 'Russian',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Анна Суязова',
    url: 'https://suyazova.ru/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://suyazova.ru/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
