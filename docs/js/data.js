const tripData = [
    {
        id: 'rome',
        name: 'Rome',
        dates: 'June 11 - June 15',
        imageName: 'images/rome_hero.png',
        description: 'The Eternal City.',
        itinerary: [
            {
                dayNumber: 1,
                title: 'Arrival & Relaxed Exploring',
                date: 'June 11',
                activities: [
                    {
                        image: 'images/rome_hero.png',
                        details: [
                            {
                                time: 'Afternoon',
                                title: 'Check-in: Hotel Villa Pamphili Roma',
                                description: 'Arrive, check in, and enjoy the pool.',
                                link: 'https://www.hotelvillapamphiliroma.com/'
                            },
                            {
                                time: 'Evening',
                                title: 'Evening Walk',
                                description: 'Walk around Piazza Navona & Campo de’ Fiori.',
                                link: 'https://www.italia.it/en/lazio/rome/piazza-navona'
                            },
                            {
                                time: 'Evening',
                                title: '1000 Miglia Car Race',
                                description: 'Watch the historic car race.',
                                link: 'https://1000miglia.it/en/events/1000-miglia/1000-miglia-2026/'
                            },
                            {
                                time: 'Dinner',
                                title: 'Casual Dinner',
                                description: 'Casual dinner nearby the piazza.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                title: 'Vatican & Ancient Rome',
                date: 'June 12',
                activities: [
                    {
                        image: 'images/rome_vatican.png',
                        details: [
                            {
                                time: '10:00 AM',
                                title: 'Rome Golf Cart Tour',
                                description: 'VIP Ride to Trevi, Pantheon, Navona and More.',
                                link: 'https://www.viator.com/tours/Rome/Rome-by-Golf-Cart-VIP-Ride-to-Trevi-Pantheon-Navona-and-More/d511-15932P132'
                            },
                            {
                                time: 'Lunch',
                                title: 'Lunch near Vatican',
                                description: 'Recommended: Pinsa ’M Po.',
                                link: 'https://www.facebook.com/pinsampo/'
                            },
                            {
                                time: '3:00 PM',
                                title: 'Vatican Museums & Sistine Chapel',
                                description: 'Entry to see the Raphael Rooms, Sistine Chapel, and St. Peter’s (approx. 3.5 hours).',
                                link: 'https://www.italia.it/en/lazio/rome/cappella-sistina'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner in Trastevere',
                                description: 'Dinner at The Food Factory.',
                                link: 'https://www.facebook.com/foodfactorytrastevere/'
                            },
                            {
                                time: 'Dessert',
                                title: 'Gelato',
                                description: 'Gelateria La Romana Dal 1947.',
                                link: 'https://www.gelateriaromana.com/'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                title: 'Pompeii and Amalfi Coast',
                date: 'June 13',
                activities: [
                    {
                        image: 'images/rome_pompeii.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Piazza de Popolo for Pompeii Departure',
                                description: 'Travel to the archaeological site.',
                                link: 'https://www.italia.it/en/campania/pompeii-archaeological-site'
                            },
                            {
                                time: 'All Day',
                                title: 'Tour Pompeii and Amalfi Coast',
                                description: '12-hour roundtrip tour from Rome to explore Pompeii and the Amalfi Coast.',
                                link: 'https://www.viator.com/tours/Rome/Pompeii-Amalfi-Coast-and-Positano-Guided-Small-Group-Day-Trip-from-Rome/d511-3731P159'
                            },
                            {
                                time: 'Evening',
                                title: 'Relax',
                                description: 'Relaxing evening back at the hotel.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                title: 'Colosseum Tour & Dinner',
                date: 'June 14',
                activities: [
                    {
                        image: 'images/rome_trevi.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Walking Tour',
                                description: 'Prepare for the Colosseum tour.',
                                link: 'https://theromanguy.com/tours/italy/rome/complete-colosseum-tour?itemlistname=the%20best%20colosseum%20tours%20in%20rome&itemlistid=22&index=6'
                            },
                            {
                                time: '11:00 AM',
                                title: 'Colosseum',
                                description: 'Explore the iconic amphitheater.',
                                link: 'https://www.italia.it/en/lazio/rome/colosseum'
                            },
                            {
                                time: '12:00 PM',
                                title: 'Roman Forum',
                                description: 'Walk through the ruins of the ancient city center.',
                                link: 'https://www.italia.it/en/lazio/rome/roman-forum'
                            }, {
                                time: 'Evening',
                                title: 'Dinner at Virginiae',
                                description: 'Dinner reservation at Ristorante Virginiae.',
                                link: 'https://www.ristorantevirginiae.it/'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 5,
                title: 'Transfer to Florence',
                date: 'June 15',
                activities: [
                    {
                        image: 'images/florence_hero.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Train to Florence',
                                description: 'High-speed train to Florence (approx. 1h 30m).',
                                link: 'https://www.trenitalia.com/en.html'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Check-in: Hotel Villa Neroli',
                                description: 'Check in to your hotel in Florence.',
                                link: 'https://www.villaneroli.com/'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner',
                                description: 'Easy dinner in Florence.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'florence',
        name: 'Florence',
        dates: 'June 15 - June 19',
        imageName: 'images/florence_hero.png',
        description: 'The Cradle of the Renaissance.',
        itinerary: [
            {
                dayNumber: 1,
                title: 'Florence Highlights',
                date: 'June 15',
                activities: [
                    {
                        image: 'images/florence_duomo.png',
                        details: [
                            {
                                time: 'Late Morning',
                                title: 'Arrive from Rome',
                                description: 'Arrive via high speed train from Rome.',
                                link: 'https://www.trenitalia.com/en.html'
                            },
                            {
                                time: 'Late Morning',
                                title: 'Check-in: Hotel Villa Neroli',
                                description: 'Check into your hotel.',
                                link: 'https://www.villaneroli.com/en/'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Duomo Complex',
                                description: 'Explore the Duomo area (optional dome or bell tower climb).',
                                link: 'https://www.italia.it/en/tuscany/florence/duomo-florence'
                            },
                            {
                                time: 'Snack',
                                title: 'Gelato in Oltrarno',
                                description: 'Enjoy artisanal gelato in the Oltrarno district.'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner',
                                description: 'Dinner nearby.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                title: 'Tuscany Tour and Pisa',
                date: 'June 16',
                activities: [
                    {
                        image: 'images/florence_tuscany.jpg',
                        details: [
                            {
                                time: 'All Day',
                                title: 'Tuscany Tour and Pisa',
                                description: 'San Gimignano, Pisa, and Lunch at a Winery.',
                                link: 'https://www.viator.com/tours/Florence/Tuscany-Day-Trip-from-Florence-Siena-San-Gimignano-Pisa-and-Lunch-at-a-Winery/d519-5070TUSCANY'
                            },
                            {
                                time: 'Lunch',
                                title: 'Lunch at Fattoria Poggio Alloro',
                                description: 'Lunch at a winery with a view of San Gimignano.',
                                link: 'https://fattoriapoggioalloro.com/'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner in Florence',
                                description: 'Dinner back in Florence after the tour.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                title: 'Explore Florence',
                date: 'June 17',
                activities: [
                    {
                        image: 'images/florence_hero.png',
                        details: [
                            {
                                time: 'Lunch',
                                title: 'Mercato Centrale',
                                description: 'Lunch at the historic central market.',
                                link: 'https://www.italia.it/en/tuscany/florence'
                            },
                            {
                                time: 'Afternoon',
                                title: 'City Walk',
                                description: 'Signoria Square and Ponte Vecchio.',
                                link: 'https://www.italia.it/en/tuscany/florence'
                            },
                            {
                                time: '7:00 PM',
                                title: 'Dinner at Ristorante la Spada',
                                description: 'Traditional Tuscan cuisine.',
                                link: 'https://www.ristorantelaspada.it/en-gb'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                title: 'Modena Ferrari Trip',
                date: 'June 18',
                activities: [
                    {
                        image: 'images/florence_ferrari.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Train to Modena',
                                description: 'Train from Florence to Modena (40-60 mins).'
                            },
                            {
                                time: 'Late Morning',
                                title: 'Enzo Ferrari Museum',
                                description: 'Visit the interactive Enzo Ferrari Museum in Modena.',
                                link: 'https://www.italia.it/en/emilia-romagna/modena/enzo-ferrari-museum-modena'
                            },
                            {
                                time: 'Lunch',
                                title: 'Mercato Albinelli',
                                description: 'Lunch at the historic covered market.',
                                link: 'https://www.visitmodena.it/en/discover-modena/land-of-flavors/places-of-taste/albinelli-covered-market'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Maranello Ferrari Museum',
                                description: 'Visit the Maranello Ferrari Museum and track area.',
                                link: 'https://www.ferrari.com/en-EN/museums/ferrari-maranello'
                            },
                            {
                                time: 'Evening',
                                title: 'Return',
                                description: 'Train return to Florence.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 5,
                title: 'Travel to Cinque Terre',
                date: 'June 19',
                activities: [
                    {
                        image: 'images/cinque_terre_hero.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Train to Levanto',
                                description: 'Train from Florence to Levanto.'
                            },
                            {
                                time: 'Check-in',
                                title: 'Angiolina’s Farm',
                                description: 'Check in to Angiolina’s Farm (agriturismo).',
                                link: 'https://www.angiolinasfarm.com/'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'cinque-terre',
        name: 'Cinque Terre',
        dates: 'June 19 - June 22',
        imageName: 'images/cinque_terre_hero.png',
        description: 'Rugged coastline and colorful villages.',
        itinerary: [
            {
                dayNumber: 1,
                title: 'Explore Levanto',
                date: 'June 19',
                activities: [
                    {
                        image: 'images/cinque_boat.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Arrive from Florence to Levanto',
                                description: 'Gateway to Cinque Terre.',
                                link: 'https://www.italia.it/en/liguria/levanto'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Levanto Seaside Path',
                                description: 'Walk or bike along the Levanto–Bonassola seaside path.',
                                link: 'https://www.italia.it/en/liguria/the-cinque-terre'
                            },
                            {
                                time: 'Dinner',
                                title: 'Seafood Dinner',
                                description: 'Dinner in Levanto at a local seafood spot.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                title: 'Cinque Terre Hiking',
                date: 'June 20',
                activities: [
                    {
                        image: 'images/cinque_hiking.png',
                        details: [
                            {
                                time: 'Day',
                                title: 'Cinque Terre Hike',
                                description: 'Hike a classic route: Monterosso → Vernazza → Corniglia.',
                                link: 'https://www.italia.it/en/liguria/cinque-terre'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Return to Levanto',
                                description: 'Take the train back to Levanto.'
                            },
                            {
                                time: 'Evening',
                                title: 'Relax',
                                description: 'Relaxing evening in Levanto.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                title: 'Explore Cinque Terre by Train',
                date: 'June 21',
                activities: [
                    {
                        image: 'images/cinque_terre_hero.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Village Exploration',
                                description: 'Explore Manarola or Riomaggiore.'
                            },
                            {
                                time: 'Sunset',
                                title: 'Marina Sunset',
                                description: 'Sunset at Manarola’s marina.',
                                link: 'https://www.italia.it/en/liguria/la-spezia/manarola'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                title: 'Travel to Venice',
                date: 'June 22',
                activities: [
                    {
                        image: 'images/venice_hero.png',
                        details: [
                            {
                                time: 'Morning/Afternoon',
                                title: 'Train to Venice',
                                description: 'Train Levanto → Venice (approx. 4–4.5 hours).'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'venice',
        name: 'Venice',
        dates: 'June 22 - June 25',
        imageName: 'images/venice_hero.png',
        description: 'The City of Canals.',
        itinerary: [
            {
                dayNumber: 1,
                title: 'Arrival in Venice',
                date: 'June 22',
                activities: [
                    {
                        image: 'images/venice_hero.png',
                        details: [
                            {
                                time: 'Afternoon',
                                title: 'Casin dei Spiriti',
                                description: 'Check in to Casin dei Spiriti.',
                                link: 'https://www.casindeispiriti.com/'
                            },
                            {
                                time: 'Evening',
                                title: 'Canal Stroll',
                                description: 'Evening stroll through the canals.',
                                link: 'https://www.italia.it/en/veneto/venice'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                title: 'Venice Highlights',
                date: 'June 23',
                activities: [
                    {
                        image: 'images/venice_stmarks.png',
                        details: [
                            {
                                time: 'Day',
                                title: 'Explore the City',
                                description: 'St. Mark’s Square, Rialto Bridge, and wandering hidden canals.',
                                link: 'https://www.italia.it/en/veneto/venice'
                            },
                            {
                                time: 'Evening',
                                title: 'Gondola Ride',
                                description: 'Evening gondola ride for best light and fewer crowds.'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner near San Marco',
                                description: 'Dinner near your hotel.',
                                link: 'https://www.italia.it/en/veneto/venice/sestiere-san-marco'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                title: 'Lido Beach & Murano',
                date: 'June 24',
                activities: [
                    {
                        image: 'images/venice_murano.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Murano Glass',
                                description: 'Vaporetto to Murano to visit glass-blowing studios.',
                                link: 'https://www.italia.it/en/veneto/venice/murano-glassworks'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Lido Beach',
                                description: 'Rent loungers, swim, and relax at Lido Beach.'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner',
                                description: 'Dinner along a quiet canal in Cannaregio or Dorsoduro.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                title: 'Departure',
                date: 'June 25',
                activities: [
                    {
                        image: 'images/venice_hero.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Final Walk',
                                description: 'Final walk and breakfast.'
                            },
                            {
                                time: 'Transfer',
                                title: 'Airport/Rail Transfer',
                                description: 'Transfer to airport or train station for departure.'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Language Data
const languageData = [
    // ... existing language data ...
    { italian: 'Ciao', english: 'Hello / Goodbye' },
    { italian: 'Grazie', english: 'Thank you' },
    { italian: 'Per favore', english: 'Please' },
    { italian: 'Buongiorno', english: 'Good morning' },
    { italian: 'Buonasera', english: 'Good evening' },
    { italian: 'Arrivederci', english: 'Goodbye' },
    { italian: 'Quanto costa?', english: 'How much does it cost?' },
    { italian: 'Dov\'è il bagno?', english: 'Where is the bathroom?' },
    { italian: 'Un tavolo per due', english: 'A table for two' },
    { italian: 'L\'acqua', english: 'Water' },
    { italian: 'Il vino', english: 'Wine' }
];

const phrasesData = [
    { category: 'Greetings', phrases: [{ i: 'Ciao', e: 'Hello' }, { i: 'Salve', e: 'Hello (Formal)' }] },
    { category: 'Dining', phrases: [{ i: 'Il conto, per favore', e: 'The check, please' }, { i: 'Buon appetito', e: 'Enjoy your meal' }] },
    { category: 'Directions', phrases: [{ i: 'Dritto', e: 'Straight ahead' }, { i: 'A destra', e: 'To the right' }] }
];
