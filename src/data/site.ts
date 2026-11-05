// Single source of truth for the site's internal structure.
// Hierarchy: Home > Driving Lessons (services) | York Areas (zones > areas) | Learner Help (test centre, articles)
// All internal URLs end with a trailing slash (astro.config.mjs: trailingSlash: 'always').

export const SITE_URL = 'https://yorkdrivinglesson.co.uk';
export const BRAND = 'York Driving Lesson';
export const PHONE = '07763 999317';
export const PHONE_HREF = 'tel:+447763999317';
export const EMAIL = 'support@yorkdrivinglesson.co.uk';
// One address, used in the visible footer/contact page AND the JSON-LD so they always match (matches the Google Business Profile).
export const ADDRESS = { street: 'Tower Court, Oakdale Road', locality: 'York', region: 'North Yorkshire', postcode: 'YO30 4XL', country: 'GB' };
// Postcode-centroid coordinates for YO30 4XL (postcodes.io), so approximate to the postcode, not the doorstep.
export const GEO = { latitude: 53.985591, longitude: -1.101254 };
export const MAP_QUERY = encodeURIComponent('Tower Court, Oakdale Road, York YO30 4XL');
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
export const ADDRESS_TEXT = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.postcode}`;

export interface NavLink { name: string; path: string; blurb?: string }
export interface Area { name: string; slug: string; path: string; postcode: string; zone: ZoneId }
export type ZoneId = 'north' | 'east' | 'south' | 'west' | 'central';

export const services: NavLink[] = [
  { name: 'Automatic Driving Lessons', path: '/automatic-driving-lessons/', blurb: 'No clutch, less stress' },
  { name: 'Manual Driving Lessons', path: '/manual-driving-lessons/', blurb: 'Full licence, any car' },
  { name: 'Intensive Driving Courses', path: '/intensive-driving-courses/', blurb: 'Learn fast, test soon' },
  { name: 'Refresher Lessons', path: '/refresher-lessons/', blurb: 'Rebuild your confidence' },
  { name: 'Mock Driving Tests', path: '/mock-driving-tests/', blurb: 'Test-day practice' },
  { name: 'Motorway Lessons', path: '/motorway-lessons/', blurb: 'Drive on fast roads' },
  { name: 'Pass Plus Course', path: '/pass-plus-course/', blurb: 'Post-test skills' },
];

export const learnerHelp: NavLink[] = [
  { name: 'Monks Cross Test Centre', path: '/monks-cross-driving-test-centre/' },
  { name: 'Driving Test Swap', path: '/driving-test-swap/' },
  { name: 'Learner Insurance', path: '/learner-insurance/' },
];

export const articles: NavLink[] = [
  { name: 'How To Pass Your Driving Test First Time', path: '/articles/pass-driving-test-first-time-york/' },
  { name: 'Automatic vs Manual Driving Lessons', path: '/articles/automatic-vs-manual-driving-lessons-york/' },
  { name: 'Driving Test Nerves', path: '/articles/driving-test-nerves-how-to-stay-calm/' },
  { name: 'What Happens On The Driving Test?', path: '/articles/what-happens-on-the-york-driving-test/' },
  { name: 'York Driving Test Routes', path: '/articles/york-driving-test-routes-common-mistakes/' },
];

export const zones: { id: ZoneId; name: string; path: string; blurb: string }[] = [
  { id: 'north', name: 'North York', path: '/york/north/', blurb: 'Clifton, Rawcliffe, Bootham, Haxby, Wigginton, Huntington and Poppleton' },
  { id: 'east', name: 'East York', path: '/york/east/', blurb: 'Heworth, Tang Hall, Osbaldwick, Murton and Layerthorpe' },
  { id: 'south', name: 'South York', path: '/york/south/', blurb: 'Fulford, Bishopthorpe, Copmanthorpe, Heslington and Badger Hill' },
  { id: 'west', name: 'West York', path: '/york/west/', blurb: 'Acomb, Holgate, Foxwood, Dringhouses and Woodthorpe' },
  { id: 'central', name: 'Central York', path: '/york/central/', blurb: 'York City Centre' },
];

const a = (name: string, postcode: string, zone: ZoneId, slug?: string): Area => {
  const s = slug ?? name.toLowerCase().replace(/\s+/g, '-');
  return { name, slug: s, path: `/driving-lessons-${s}-york/`, postcode, zone };
};

export const areas: Area[] = [
  a('Clifton', 'YO30', 'north'), a('Rawcliffe', 'YO30', 'north'), a('Bootham', 'YO30', 'north'),
  a('Haxby', 'YO32', 'north'), a('Wigginton', 'YO32', 'north'), a('Huntington', 'YO32', 'north'), a('Poppleton', 'YO26', 'north'),
  a('Heworth', 'YO31', 'east'), a('Tang Hall', 'YO31', 'east'), a('Osbaldwick', 'YO10', 'east'), a('Murton', 'YO19', 'east'), a('Layerthorpe', 'YO31', 'east'),
  a('Fulford', 'YO10', 'south'), a('Bishopthorpe', 'YO23', 'south'), a('Copmanthorpe', 'YO23', 'south'), a('Heslington', 'YO10', 'south'), a('Badger Hill', 'YO10', 'south'),
  a('Acomb', 'YO24', 'west'), a('Holgate', 'YO24', 'west'), a('Foxwood', 'YO24', 'west'), a('Dringhouses', 'YO24', 'west'), a('Woodthorpe', 'YO24', 'west'),
  { name: 'York City Centre', slug: 'york-city-centre', path: '/driving-lessons-york-city-centre/', postcode: 'YO1', zone: 'central' },
];

export const areaByPath = (path: string) => areas.find((x) => x.path === path);
export const areasInZone = (zone: ZoneId) => areas.filter((x) => x.zone === zone);

/** Same-zone neighbours first, then the nearest other zones, so every area page links to 6 relevant pages. */
const zoneAdjacency: Record<ZoneId, ZoneId[]> = {
  north: ['central', 'east', 'west'], east: ['central', 'north', 'south'], south: ['central', 'east', 'west'],
  west: ['central', 'south', 'north'], central: ['north', 'east', 'south', 'west'],
};
export function neighbours(area: Area, limit = 6): Area[] {
  const same = areasInZone(area.zone).filter((x) => x.path !== area.path);
  const adj = zoneAdjacency[area.zone].flatMap((z) => areasInZone(z));
  return [...same, ...adj].slice(0, limit);
}

export interface Crumb { name: string; path: string }

const home: Crumb = { name: 'Home', path: '/' };

/** Breadcrumb trail for a pathname (trailing slash normalised). Hierarchy mirrors the navigation. */
export function breadcrumbsFor(pathname: string): Crumb[] {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  if (p === '/') return [home];

  const svc = services.find((s) => s.path === p);
  if (svc) return [home, { name: 'Driving Lessons', path: '/driving-lessons/' }, { name: svc.name, path: p }];
  if (p === '/driving-lessons/') return [home, { name: 'Driving Lessons', path: p }];

  if (p === '/york/') return [home, { name: 'York Areas', path: p }];
  const zone = zones.find((z) => z.path === p);
  if (zone) return [home, { name: 'York Areas', path: '/york/' }, { name: zone.name, path: p }];
  const area = areaByPath(p);
  if (area) {
    const z = zones.find((x) => x.id === area.zone)!;
    return [home, { name: 'York Areas', path: '/york/' }, { name: z.name, path: z.path }, { name: area.name, path: p }];
  }

  if (p === '/articles/') return [home, { name: 'Learner Help', path: '/articles/' }];
  const art = articles.find((x) => x.path === p);
  if (art) return [home, { name: 'Learner Help', path: '/articles/' }, { name: art.name, path: p }];
  const help = learnerHelp.find((x) => x.path === p);
  if (help) return [home, { name: 'Learner Help', path: '/articles/' }, { name: help.name, path: p }];

  const misc: Record<string, string> = { '/about-us/': 'About Us', '/contact-us/': 'Contact Us' };
  if (misc[p]) return [home, { name: misc[p], path: p }];
  return [home];
}

/** Service schema for service and area pages. Returns null for other pages. */
export function serviceSchemaFor(pathname: string) {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  const svc = services.find((s) => s.path === p);
  const area = areaByPath(p);
  if (!svc && !area) return null;
  const name = svc ? `${svc.name} in York` : `Driving Lessons in ${area!.name}, York`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${p}#service`,
    name,
    serviceType: svc ? svc.name : 'Driving lessons',
    url: `${SITE_URL}${p}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: area
      ? { '@type': 'Place', name: `${area.name}, York ${area.postcode}` }
      : { '@type': 'City', name: 'York' },
  };
}
