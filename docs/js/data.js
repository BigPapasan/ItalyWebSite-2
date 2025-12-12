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
                                time: '8:00 AM',
                                title: 'Vatican Museums & Sistine Chapel',
                                description: 'Early morning entry to see the Raphael Rooms, Sistine Chapel, and St. Peter’s (approx. 3.5 hours).',
                                link: 'https://www.italia.it/en/lazio/rome/cappella-sistina'
                            },
                            {
                                time: 'Lunch',
                                title: 'Lunch near Vatican',
                                description: 'Recommended: Pinsa ’M Po.',
                                link: 'https://www.facebook.com/pinsampo/'
                            },
                            {
                                time: '2:00 PM',
                                title: 'Colosseum',
                                description: 'Explore the iconic amphitheater.',
                                link: 'https://www.italia.it/en/lazio/rome/colosseum'
                            },
                            {
                                time: '3:30 PM',
                                title: 'Roman Forum',
                                description: 'Walk through the ruins of the ancient city center.',
                                link: 'https://www.italia.it/en/lazio/rome/roman-forum'
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
                title: 'Pompeii Day Trip',
                date: 'June 13',
                activities: [
                    {
                        image: 'images/rome_pompeii.png',
                        details: [
                            {
                                time: 'All Day',
                                title: 'Pompeii & Sorrento Tour',
                                description: '12-hour roundtrip tour from Rome to explore Pompeii and Sorrento with a guide.',
                                link: 'https://www.italia.it/en/campania/pompeii-archaeological-site'
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
                title: 'Golf Cart Tour & Dinner',
                date: 'June 14',
                activities: [
                    {
                        image: 'images/rome_trevi.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Free Time',
                                description: 'Morning free for leisure.'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Rome Golf Cart Tour',
                                description: '3-hour guided golf cart tour of the city.'
                            },
                            {
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
                date: 'June 16',
                activities: [
                    {
                        image: 'images/florence_duomo.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Duomo Complex',
                                description: 'Explore the Duomo area (optional dome or bell tower climb).',
                                link: 'https://www.italia.it/en/tuscany/florence/duomo-florence'
                            },
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
                title: 'Tuscany Day Trip',
                date: 'June 17',
                activities: [
                    {
                        image: 'images/florence_tuscany.jpg',
                        details: [
                            {
                                time: 'Day',
                                title: 'Tuscany Tour',
                                description: 'Full-day tour of Chianti and San Gimignano.'
                            },
                            {
                                time: '7:00 PM',
                                title: 'Dinner at Ristorante La Spada',
                                description: 'Dinner reservation (listed as Le Spede in notes, likely La Spada).',
                                link: 'https://www.ristorantelaspada.it/'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
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
                                title: 'Lunch in Modena',
                                description: 'Hosteria Giusti or Trattoria Aldina.',
                                link: 'https://hosteriagiusti.it/'
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
                dayNumber: 4,
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
                                title: 'Village Hike',
                                description: 'Hike a classic route: Monterosso → Vernazza → Corniglia.'
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
                title: 'Cooking Class & Villages',
                date: 'June 21',
                activities: [
                    {
                        image: 'images/cinque_terre_hero.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Liguria Cooking Class',
                                description: 'Pesto, focaccia, and seafood cooking class in Levanto or Monterosso.'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Village Exploration',
                                description: 'Explore Manarola or Riomaggiore.'
                            },
                            {
                                time: 'Sunset',
                                title: 'Marina Sunset',
                                description: 'Sunset at Manarola’s marina.'
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
                            },
                            {
                                time: 'Afternoon',
                                title: 'Check-in',
                                description: 'Check in to your Venice hotel (e.g., Hilton Molino Stucky or similar).',
                                link: 'https://www.hilton.com/en/hotels/vcehihi-hilton-molino-stucky-venice/'
                            },
                            {
                                time: 'Evening',
                                title: 'Canal Stroll',
                                description: 'Evening stroll through the canals.'
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
                title: 'Venice Highlights',
                date: 'June 23',
                activities: [
                    {
                        image: 'images/venice_stmarks.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Gondola Ride',
                                description: 'Morning gondola ride for best light and fewer crowds.'
                            },
                            {
                                time: 'Day',
                                title: 'Explore the City',
                                description: 'St. Mark’s Square, Rialto Bridge, and wandering hidden canals.',
                                link: 'https://www.italia.it/en/veneto/venice'
                            },
                            {
                                time: 'Evening',
                                title: 'Dinner',
                                description: 'Dinner near your hotel.'
                            }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                title: 'Lido Beach & Murano',
                date: 'June 24',
                activities: [
                    {
                        image: 'images/venice_murano.png',
                        details: [
                            {
                                time: 'Morning',
                                title: 'Lido Beach',
                                description: 'Rent loungers, swim, and relax at Lido Beach.'
                            },
                            {
                                time: 'Afternoon',
                                title: 'Murano Glass',
                                description: 'Vaporetto to Murano to visit glass-blowing studios.',
                                link: 'https://www.italia.it/en/veneto/venice/murano-glassworks'
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
                dayNumber: 3,
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
