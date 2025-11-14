export type BreadcrumbItem = { name: string; url?: string };

const SITE_URL = 'https://www.vislivis.com';
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationNode = {
  '@type': 'Corporation',
  '@id': ORG_ID,
  name: 'Vislivis',
  url: SITE_URL + '/',
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/vislivis_logo_beyaz.png`
  },
  telephone: '+90-216-451-9112',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Saldan Collective Office, Yenişehir Mustafa Akyol Sokağı No:7a-a İç Kapı No:27',
    postalCode: '34912',
    addressLocality: 'Pendik',
    addressRegion: 'İstanbul',
    addressCountry: 'TR'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+90-216-451-9112',
      contactType: 'customer support',
      availableLanguage: ['tr', 'en']
    }
  ],
  sameAs: ['https://www.linkedin.com/company/vislivis']
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL + '/',
  name: 'Vislivis',
  inLanguage: 'tr',
  publisher: { '@id': ORG_ID },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export function webPageNode(path: string, title: string, description: string) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: title,
    description
  };
}

export function breadcrumbNode(path: string, items: BreadcrumbItem[]) {
  const itemList = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url || (index === items.length - 1 ? `${SITE_URL}${path}` : SITE_URL + '/')
  }));

  return {
    '@type': 'BreadcrumbList',
    itemListElement: itemList
  };
}

export function buildGraph(params: {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  extraNodes?: any[];
}) {
  const { path, title, description, breadcrumbs, extraNodes = [] } = params;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode,
      websiteNode,
      webPageNode(path, title, description),
      breadcrumbNode(path, breadcrumbs),
      ...extraNodes
    ]
  };
}


