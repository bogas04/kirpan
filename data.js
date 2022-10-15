const data = [
  ['india', {
    formalName: 'India',
    allowed: true,
    laws: [
      [
        `
        Article 25 of Constitution of India
        
        Freedom of conscience and free profession, practice and propagation of religion.
        (1) Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.

        (2) Nothing in this article shall affect the operation of any existing law or prevent the State from making any law—
          (a) regulating or restricting any economic, financial, political or other secular activity which may be associated with religious practice;
          (b) providing for social welfare and reform or the throwing open of Hindu religious institutions of a public character to all classes and sections of Hindus.

        Explanation I. — The wearing and carrying of kirpans shall be deemed to be included in the profession of the Sikh religion.

        Explanation II. — In sub-clause (b) of clause (2), the reference to Hindus shall be construed as including a reference to persons professing the Sikh, Jaina or Buddhist religion, and the reference to Hindu religious institutions shall be construed accordingly.
      `,
        `https://www.constitutionofindia.net/constitution_of_india/fundamental_rights/articles/Article%2025`,
      ], [
        `Kirpan under limit of 6 inches blade and 3 inches handle is allowed on Domestic Flights in India.`,
        './img/india_domestic_flight.jpg',
      ]
    ],
  }],

  ['usa', {
    formalName: 'United States of America',
    allowed: true,
    laws: [],
  }],

  ['italy', {
    formalName: 'Italy',
    allowed: false,
    laws: [],
  }],

  ['scotland', {
    formalName: 'Scotland',
    allowed: true,
    laws: [
      [
        `Offensive weapons (section 47 to 50). Section 47 makes it an offence for a person to have any offensive weapon with him in a public place without lawful authority or reasonable excuse. Section 49 makes it an offence to have a bladed or sharply pointed article in a public place without good reason or lawful authority. There is a defence where the person had the article with him for use at work, for religious reasons or as part of any national costume (e.g. a sgian dubh or kirpan). The maximum penalty for these offences is 4 years imprisonment. Sections 48 and 50 provide for powers of search. These provisions were formerly in the Prevention of Crime Act 1953, the Criminal Justice (Scotland) Act 1980, and the Carrying of Knives etc. (Scotland) Act 1993.`,
        'https://en.wikipedia.org/wiki/Criminal_Law_(Consolidation)_(Scotland)_Act_1995#Part_VI_-_Miscellaneous_and_General',
      ],
    ],
  }],

  ['belgium', {
    formalName: 'Belgium',
    allowed: true,
    laws: [
      [
        `On 12 October 2009, the Antwerp Court declared carrying a kirpan a religious symbol`,
        `http://www.gva.be/cnt/aid870081/sikhs-mogen-dolk-dragen-3`,
      ],
    ],
  }],

  ['sweden', {
    formalName: 'Sweden',
    maybe: true,
    laws: [
      [
        `Swedish law has a ban on "street weapons" in public places that includes knives unless used for recreation (for instance fishing) or profession (for instance a carpenter).`,
        `https://lagen.nu/1988:254`,
      ],
      [
        `Carrying some smaller knives, typically folding pocket knives, is allowed, so that smaller kirpans may be within the law.`
      ],
    ],
  }],

  ['canada', {
    formalName: 'Canada',
    allowed: true,
    laws: [
      [
        `In most public places in Canada a kirpan is allowed, although there have been some court cases regarding carrying on school premises.`,
        `https://en.wikipedia.org/wiki/Kirpan#Canada`,
      ],
      [
        `Consistent with international practice, Transport Canada will also amend the list so that very small knife blades (6 cm or less—about the size of a large paper clip) will not be prohibited on domestic or international flights. To respect our security screening agreement with the United States, knife blades of any length will remain prohibited on flights to the United States through preclearance facilities. Razor blades and box cutters of any size will remain prohibited at all screening checkpoints.`,
        `https://www.canada.ca/en/transport-canada/news/2017/11/transport_canadatoamendprohibiteditemslistforairpassengers.html`,
      ],
    ],
  }],

  ['denmark', {
    formalName: 'Denmark',
    allowed: false,
    laws: [
      [
        `On 24 October 2006, the Eastern High Court of Denmark upheld the earlier ruling of the Copenhagen City Court that the wearing of a kirpan by a Sikh was illegal, becoming the first country in the world to pass such a ruling.
        Danish law allows carrying of knives (longer than 6 centimeters and non-foldable) in public places if it is for any purpose recognized as valid, including work-related, recreation, etc. The High Court did not find religion to be a valid reason for carrying a knife.`
        ,
        `https://en.wikipedia.org/wiki/Kirpan#Denmark`,
      ],
    ],
  }],

  ['australia', {
    formalName: 'Australia',
    allowed: true,
    laws: [
      [
        `
        EXEMPTION UNDER SECTION 8B CONTROL OF WEAPONS ACT 1990

        In brief, this exemption means that it is not an offence under the Control of Weapons Act
        1990 for a Sikh person to carry a kirpan in public on the basis that they carry it out of
        religious observance. However, if there are any circumstances where Security Officers might
        have public safety concerns, please refer the issue to Victoria Police.
        `,
        `http://www.police.vic.gov.au/retrievemedia.asp?media_id=90509`,
      ],
    ],
  }],

  ['uk', {
    formalName: 'United Kingdom, England and Wales',
    allowed: true,
    laws: [
      [
        `
        Offence of having article with blade or point in public place.
        
          (1)Subject to subsections (4) and (5) below, any person who has an article to which this section applies with him in a public place shall be guilty of an offence.
          (2)Subject to subsection (3) below, this section applies to any article which has a blade or is sharply pointed except a folding pocketknife.
          (3)This section applies to a folding pocketknife if the cutting edge of its blade exceeds 3 inches.
          (4)It shall be a defence for a person charged with an offence under this section to prove that he had good reason or lawful authority for having the article with him in a public place.
          (5)Without prejudice to the generality of subsection (4) above, it shall be a defence for a person charged with an offence under this section to prove that he had the article with him—
            (a)for use at work;
            (b)for religious reasons; or
            (c)as part of any national costume.
        `,
        `http://www.legislation.gov.uk/ukpga/1988/33/section/139/2007-04-06?timeline=true`,
      ],
    ],
  }],

];

function getData(_query = '') {
  const query = _query.trim().toLowerCase();

  return data
    .filter(([country, { formalName }]) => (
      country.includes(query) || query.includes(country)
      || formalName.toLowerCase().includes(query) || query.includes(formalName.toLowerCase()))
    )
    ;
}
