// All copy is drawn from the public pages of arwhc.com (audited October 2026)
// and from independently checkable public records, which are labelled as such.
// House style: no em or en dashes in copy. Ranges are written with "to".

export const SOURCE = 'https://www.arwhc.com';

export const company = {
  name: 'Anton Williams Holding Company',
  short: 'AWHC',
  owner: 'Anton R. Williams',
  phone: '269-361-4540',
  phoneHref: 'tel:+12693614540',
  email: 'hr@gmnf-inc.org',
  emailNote: 'Published on the company contact page as the address of its affiliate organization.',
  hq: { line1: '136 E. Michigan Ave', line2: 'Kalamazoo, MI 49007', map: 'https://www.google.com/maps/search/?api=1&query=136+E+Michigan+Ave+Kalamazoo+MI+49007' },
  office: { line1: '100 S. Ashley Dr', line2: 'Tampa, FL 33602', map: 'https://www.google.com/maps/search/?api=1&query=100+S+Ashley+Dr+Tampa+FL+33602' },
  hours: 'Monday to Friday, 9:00 AM to 5:00 PM',
};

export const nav = [
  { id: 'top', label: 'Home' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'holdings', label: 'Our Holdings' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
] as const;

/* ------------------------------------------------------------------ */
/* 01 Opening                                                          */

export const opening = {
  eyebrow: 'Kalamazoo, Michigan',
  lede:
    'Anton Williams Holding Company oversees the assets held in the Anton R. Williams Trust: real estate, agricultural acreage, timberland, oil and gas fields, renewable energy and financial accounts. The family enterprise behind it traces its origins to the 1760s.',
  facts: [
    { value: '9', label: 'Generations in the family account' },
    { value: '1792', label: 'Trust documented by the company' },
    { value: '6', label: 'Areas of present activity' },
  ],
  photo: { key: 'longleaf', alt: 'Tall longleaf pines rising from a savanna of rust and green grasses under a pale blue sky.', caption: 'Longleaf pine savanna, Mississippi. Illustrative photograph.' },
};

/* ------------------------------------------------------------------ */
/* 02 The Passage of Time                                              */

export type Basis = 'company' | 'archive' | 'record';

export type Chapter = {
  id: string;
  era: string;
  year: string;
  name: string;
  title: string;
  body: string[];
  notes: { basis: Basis; text: string; href?: string }[];
  image: { key: string; alt: string; caption: string; kind: 'photo' | 'portrait' | 'document' };
};

export const passageIntro = {
  title: 'The Passage of Time',
  lede:
    'Seven named owners carry the family account from colonial Natchez to Kalamazoo. Each chapter below separates what the company states from what can be checked in public records.',
  candor:
    'This is an American family history, and it includes slavery. The early land and timber holdings described here were worked by enslaved people whose labor built much of that wealth. The company’s own resources page says so. We present it plainly.',
};

export const chapters: Chapter[] = [
  {
    id: 'david-williams',
    era: '1760s to 1792',
    year: '1760s',
    name: 'David Williams',
    title: 'The forebear',
    body: [
      'According to the company, David Williams arrived from Wales in the 1760s and settled in the Natchez District. He built timber operations from Baton Rouge in the 1770s and raised tobacco and corn across more than 11,000 acres in several states.',
      'The company’s resources page also states that he held hundreds of enslaved people across those plantations. In April 1792 he established the trust from which, the company says, the present holdings descend.',
    ],
    notes: [
      { basis: 'archive', text: 'Trust and estate document dated April 1792, as published by the company.' },
      { basis: 'record', text: 'Census records of 1782, 1786 and 1792 list a David Williams of Natchez among the wealthiest residents.', href: 'https://en.wikipedia.org/wiki/Gloucester_(Natchez,_Mississippi)' },
    ],
    image: { key: 'pine-nara', alt: 'An archival index card with a mounted photograph of a stand of tall southern pines.', caption: 'Lumbering in Alabama, Florida, Louisiana and Mississippi. U.S. National Archives. Illustrative.', kind: 'document' },
  },
  {
    id: 'james-williams',
    era: '1792 to 1830',
    year: '1827',
    name: 'James C. Williams',
    title: 'Gloucester and Longwood',
    body: [
      'His son James C. Williams held the Gloucester and Longwood tracts at Natchez. His mother, Maria McIntosh Williams, married Winthrop Sargent, the first governor of the Mississippi Territory, in 1798, joining the family to the territory’s political elite.',
      'The company records a transfer of family real estate to James C. Williams in January 1827.',
    ],
    notes: [
      { basis: 'record', text: 'Gloucester, Natchez, listed on the National Register of Historic Places in 1976.', href: 'https://en.wikipedia.org/wiki/Gloucester_(Natchez,_Mississippi)' },
      { basis: 'company', text: 'Conveyance of January 1827, as published by the company.' },
    ],
    image: { key: 'gloucester-1938', alt: 'Black and white photograph of a two storey house with a columned portico, framed by trees hung with moss.', caption: 'Gloucester, Natchez, photographed by Frances Benjamin Johnston, 1938. Library of Congress.', kind: 'photo' },
  },
  {
    id: 'ellen-and-ap',
    era: '1843 to 1859',
    year: '1843',
    name: 'Ellen Jones and Archie P. Williams',
    title: 'Born free in the era of slavery',
    body: [
      'David P. Williams, grandson of the forebear, inherited a large slaveholding in 1830. Among the people he enslaved was Ellen Jones. He emancipated her, and in 1843 their son Archie P. Williams was born a free person of color.',
      'The relationship was formed under slavery, between an enslaver and a woman he had held as property. The company records that David P. Williams later recognized Archie as his son and heir, through an 1858 deed and an 1859 petition to the Mississippi Legislature.',
    ],
    notes: [
      { basis: 'record', text: 'David P. Williams appears as a petitioner on an 1859 Mississippi legislative petition.', href: 'https://dlas.uncg.edu/petitions/person/1578' },
      { basis: 'company', text: 'An 1855 letter and an 1858 deed concerning Archie’s status and inheritance.' },
    ],
    image: { key: 'ap-williams', alt: 'Sepia studio portrait of Archie P. Williams as a young man in a dark coat and bow tie.', caption: 'Archie P. Williams of Natchez. Photograph published by the company.', kind: 'portrait' },
  },
  {
    id: 'ap-williams',
    era: '1865 to 1928',
    year: '1873',
    name: 'Archie P. Williams',
    title: 'Public office and the Duck Pond tract',
    body: [
      'After the Civil War, Archie P. Williams held land the company describes as more than 10,000 acres across several states, and served on the Adams County Board of Supervisors. Natchez papers of the 1880s record “the Hon. A. P. Williams” as a member of the board.',
      'The company credits him with beginning oil and gas production on the Duck Pond tract in the 1920s. Family real estate passed to him in November 1873, by the company’s record.',
    ],
    notes: [
      { basis: 'archive', text: 'Natchez newspaper reports of the 1880s naming A. P. Williams on the county board.' },
      { basis: 'company', text: 'Conveyance of November 1873 and the Duck Pond oil and gas account.' },
    ],
    image: { key: 'clip-board', alt: 'A clipping of nineteenth century newsprint mentioning Mr. A. P. Williams, member of the Honorable Board.', caption: 'Natchez newspaper clipping, 1889. Published by the company.', kind: 'document' },
  },
  {
    id: 'archie-j',
    era: '1930s to 1950s',
    year: '1945',
    name: 'Archie J. Williams',
    title: 'Buying back the land',
    body: [
      'Archie J. Williams, grandson of Archie P., ran the family’s oil and gas, timber and real estate interests in Mississippi and Louisiana. The company states that he repurchased properties once held by Winthrop Sargent and earlier Williams owners.',
      'Duck Pond remained the centerpiece of holdings the company places above 50,000 acres. A transfer is recorded in February 1945.',
    ],
    notes: [{ basis: 'company', text: 'Conveyance of February 1945 and the repurchase account.' }],
    image: { key: 'clip-duckpond', alt: 'A clipping of old newsprint headed Seekers After Hidden Treasure, mentioning Archie P. Williams and the Duck Pond.', caption: 'Natchez newspaper clipping on the Duck Pond tract. Published by the company.', kind: 'document' },
  },
  {
    id: 'odell',
    era: '1960s to 2003',
    year: '1976',
    name: 'Odell Williams',
    title: 'Leases and civic service',
    body: [
      'Odell Williams (1935 to 2003) continued real estate, timber and oil and gas operations from Ferriday, Louisiana, and served as an alderman. A typed oil, gas and mineral lease covering lots of the Duck Pond subdivision carries his name.',
      'The company records a transfer to Odell Williams in May 1976.',
    ],
    notes: [
      { basis: 'company', text: 'Alderman and council service in Ferriday, citing the Concordia Sentinel.' },
      { basis: 'archive', text: 'Oil, gas and mineral lease on the Duck Pond lots, as published.' },
    ],
    image: { key: 'lease-duckpond', alt: 'A typed oil, gas and mineral lease naming Odell Williams of Ferriday, Louisiana, with redacted amounts.', caption: 'Oil, gas and mineral lease, Duck Pond lots. Published by the company with redactions.', kind: 'document' },
  },
  {
    id: 'anton',
    era: '2021 to present',
    year: '2021',
    name: 'Anton R. Williams',
    title: 'The ninth generation',
    body: [
      'Anton R. Williams, grandson of Odell, became majority owner of the family holdings in the 2020s and directs them through the holding company in Kalamazoo. He is the first of the nine generations born outside the Natchez area.',
      'He is also the first owner in the line to take the family into renewable energy. The company records a real estate transaction on heirloom property in May 2021.',
    ],
    notes: [
      { basis: 'company', text: 'Conveyance of May 2021 on property traced to Archie P. Williams.' },
      { basis: 'company', text: 'First of the nine generations to own and oversee renewable energy operations.' },
    ],
    image: { key: 'river-natchez', alt: 'The wide Mississippi River at dusk, seen from a white bandstand on the bluff at Natchez.', caption: 'The Mississippi from the Natchez bluff today. Photograph by Mike Tilley, CC BY 3.0.', kind: 'photo' },
  },
];

/* ------------------------------------------------------------------ */
/* 03 Land. Energy. Enterprise.                                        */

export type Holding = { id: string; name: string; index: string; summary: string; detail: string[]; photo: { key: string; alt: string; caption: string } };

export const holdings: Holding[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    index: 'I',
    summary: 'A portfolio of land held in the Anton R. Williams Trust, with heirloom parcels still centered on Natchez.',
    detail: ['Holdings across Mississippi, Louisiana, Ohio, Pennsylvania, Michigan and Texas, in the company’s account.', 'Heirloom tracts include the Duck Pond property near Natchez.'],
    photo: { key: 'hay-mayersville', alt: 'Round hay bales scattered across a broad green field under a clear sky in the Mississippi Delta.', caption: 'Farmland near Mayersville, Mississippi. Quintin Soloviev, CC BY 4.0. Illustrative.' },
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    index: 'II',
    summary: 'Acquisitions, divestitures, leasing and other transactions in agricultural land, a line of business for all nine generations.',
    detail: ['Agricultural acreage overseen by the holding company.', 'Leasing and transactions in farm land lots.'],
    photo: { key: 'concordia-field', alt: 'Long parallel furrows of a ploughed field stretching to a flat horizon under an overcast sky.', caption: 'Field on Maxwell Road, Concordia Parish, Louisiana. CC0. Illustrative.' },
  },
  {
    id: 'timberland',
    name: 'Timberland',
    index: 'III',
    summary: 'The oldest line of the family business. The company traces its timber operations to Baton Rouge in the 1770s.',
    detail: ['Timberland in several states.', 'Planned use of AI tools for timber cruises, felling, transport and mill conversion.'],
    photo: { key: 'forest-homochitto', alt: 'A dirt track curving through dense green hardwood and pine forest.', caption: 'Homochitto National Forest, Mississippi. USDA Forest Service, public domain. Illustrative.' },
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    index: 'IV',
    summary: 'Royalty and working interests and corporate ownership through Anton R. Williams companies, begun on the Duck Pond tract in the 1920s.',
    detail: ['Royalty ownership and working interests in oil and gas fields.', 'Corporate ownership of oil and gas companies.'],
    photo: { key: 'pumpjack-permian', alt: 'A dark oil pumpjack standing on sandy ground under a deep blue sky.', caption: 'Pumpjack, Permian Basin. Quintin Soloviev, CC BY 4.0. Illustrative.' },
  },
  {
    id: 'renewable',
    name: 'Renewable Energy',
    index: 'V',
    summary: 'Solar and wind. Anton R. Williams is the first of nine generations to own and oversee renewable energy operations.',
    detail: ['Solar and wind energy exploration and production.', 'A 2026 event series on energy disruption, from carbon capture to geothermal.'],
    photo: { key: 'solar-farm', alt: 'A row of solar panels set into green farmland beside a country road, seen from above.', caption: 'Solar array on farmland. USDA, public domain. Illustrative.' },
  },
  {
    id: 'financial',
    name: 'Financial Investments',
    index: 'VI',
    summary: 'Derivatives accounts in futures, options and options on futures, also used to hedge production, land and timber.',
    detail: ['Contracts in oil and gas, gold, equity indices and the euro.', 'Hedging as a form of insurance for the operating portfolio.'],
    photo: { key: 'cbot-1885', alt: 'A nineteenth century engraving of the ornate Chicago Board of Trade building with a tall clock tower.', caption: 'Chicago Board of Trade, engraving, 1885. Public domain. Illustrative.' },
  },
];

/* ------------------------------------------------------------------ */
/* 04 Continuity                                                       */

export const continuity = {
  lines: ['Stewardship', 'across time.'],
  words: ['Continuity.', 'Responsibility.', 'Enterprise.'],
  note: 'A creative statement for this concept. Not an official company motto.',
};

/* ------------------------------------------------------------------ */
/* 05 Enterprise network                                               */

export type Company = { id: string; name: string; state: string; region: string; category: string; body: string; photo: { key: string; alt: string; caption: string } };

export const enterpriseIntro =
  'The holding company is headquartered in Kalamazoo and owns and oversees several companies. The three named on its website are listed here. The company notes there are more.';

export const companies: Company[] = [
  {
    id: 'mississippi',
    name: 'Anton R Williams Co of Mississippi',
    state: 'Mississippi',
    region: 'Mississippi',
    category: 'Subsidiary company',
    body: 'The company carrying the owner’s name in Mississippi, the state where the family line began at Natchez. It also appears on the website as Anton R. Williams Corp of Mississippi. Further detail on its operations is not published.',
    photo: { key: 'homochitto-river', alt: 'A wide sandy bend of the Homochitto River with low wooded banks under a blue sky.', caption: 'Homochitto River, Mississippi. Mac H. Alford, CC BY-SA 4.0. Illustrative.' },
  },
  {
    id: 'louisiana',
    name: 'Anrow Energy Corp of Louisiana',
    state: 'Louisiana',
    region: 'Louisiana',
    category: 'Energy',
    body: 'An energy company within the group. The holding company states that it owns its oil and gas corporations outright, and with them their manufacturing, logistics and sales facilities.',
    photo: { key: 'atchafalaya', alt: 'Moss hung cypress trees in still swamp water, with white egrets perched among the trunks.', caption: 'Atchafalaya Basin, Louisiana. U.S. Army Corps of Engineers, CC BY 2.0. Illustrative.' },
  },
  {
    id: 'ohio',
    name: 'Anrow Energy Industries of Ohio',
    state: 'Ohio',
    region: 'Ohio',
    category: 'Energy',
    body: 'An energy business in Ohio, one of the states where the company reports holdings. Further detail on its operations is not published on the company website.',
    photo: { key: 'ohio-river', alt: 'The Ohio River winding between steep green wooded hills under a sky of scattered clouds.', caption: 'Ohio River near Powhatan Point, Ohio. James St. John, CC BY 2.0. Illustrative.' },
  },
];

/* ------------------------------------------------------------------ */
/* 06 Present-day perspective                                          */

export const leadership = {
  kicker: 'Meet the owner',
  name: 'Anton R. Williams',
  role: 'Owner, Anton Williams Holding Company',
  paragraphs: [
    'Anton R. Williams was born in Michigan, the first of nine generations since the family’s forebear not to be born in the Natchez area. He is the majority owner of the family holdings and the owner of the holding company in Kalamazoo, which oversees companies, properties and other assets in several states.',
    'Under his direction the company is moving into renewable energy, an industry new to the family, and is testing the use of artificial intelligence across its operations: from monitoring oil and gas tank levels and detecting leaks to timber cruising and mill work.',
    'He is also the founder of the GMNF Global Mission Society of Grand Rapids, an affiliate organization. Research produced through a joint forum of the two organizations is published openly.',
  ],
  focus: [
    { label: 'Headquarters', value: 'Kalamazoo, Michigan' },
    { label: 'New direction', value: 'Solar and wind energy' },
    { label: 'In testing', value: 'AI in field operations' },
    { label: 'Affiliate', value: 'GMNF Global Mission Society' },
  ],
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=OBDLWHkAAAAJ' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Anton-Williams-5' },
    { label: 'Academia', href: 'https://independent.academia.edu/AntonWilliams22' },
    { label: 'Substack', href: 'https://substack.com/@antonwilliamsholdingco' },
    { label: 'Medium', href: 'https://medium.com/@anton.williams/about' },
  ],
  event: {
    label: 'From the newsroom',
    title: 'Examining Energy Disruption',
    body: 'A rolling event series on carbon capture and storage, geothermal energy, subsurface mapping and critical minerals. It opened on August 14, 2026 at the Kalamazoo headquarters.',
  },
  portrait: { key: 'anton-portrait', alt: 'Portrait of Anton R. Williams smiling, wearing a dark suit, white shirt and patterned tie.' },
};

/* ------------------------------------------------------------------ */
/* 07 The next chapter                                                 */

export const nextChapter = {
  title: ['The Story', 'Continues.'],
  body: 'For business inquiries about land, timber, energy or the holding company’s operations, reach the Kalamazoo office during business hours.',
  photo: { key: 'wind-pumpjack', alt: 'A pumpjack in the foreground with a line of wind turbines on the horizon under a wide sky.', caption: 'Wind turbines and pumpjacks, West Texas. USDA NRCS, public domain. Illustrative.' },
};

/* ------------------------------------------------------------------ */
/* Footer resources                                                    */

export const resources = [
  { label: 'Official website', href: 'https://www.arwhc.com/' },
  { label: 'Nine generations', href: 'https://www.arwhc.com/legacy-each-of-9-generations' },
  { label: 'Historical precedence', href: 'https://www.arwhc.com/historical-precedence' },
  { label: 'A.P. Williams and the AWHC', href: 'https://www.arwhc.com/a-p-williams-and-the-awhc' },
  { label: 'Operations', href: 'https://www.arwhc.com/operations' },
  { label: 'Resources', href: 'https://www.arwhc.com/resources' },
];
