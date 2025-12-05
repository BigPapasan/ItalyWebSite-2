const tripData = [
    {
        id: 'rome',
        name: 'Rome',
        imageName: 'images/rome_hero.png',
        description: 'The Eternal City, where ancient history meets modern life. <a href="https://www.italia.it/en/lazio/rome/guide-history-facts" target="_blank">Rome</a>',
        dates: 'June 11–15',
        itinerary: [
            {
                dayNumber: 1,
                date: 'June 11',
                title: 'Arrival & Welcome',
                activities: [
                    {
                        title: 'Arrive in Rome',
                        description: 'Private transfer to hotel. Check into <a href="https://www.hotelvillapamphiliroma.com/en-GB" target="_blank">Hotel Villa Pamphili</a> for your memorable 4 nights in <a href="https://www.italia.it/en/lazio/rome/guide-history-facts" target="_blank">Rome</a>.',
                        image: 'images/rome_hero.png',
                        detailId: 'rome-arrival',
                        details: [
                            { title: 'Check-in', description: 'Settle into <a href="https://www.hotelvillapamphiliroma.com/en-GB" target="_blank">Hotel Villa Pamphili</a> for your memorable 4 nights in <a href="https://www.italia.it/en/lazio/rome/guide-history-facts" target="_blank">Rome</a>.' },
                            { title: 'Evening Walk', description: '<a href="https://www.italia.it/en/lazio/rome/piazza-navona" target="_blank">Piazza Navona</a> & <a href="https://www.italia.it/en/lazio/rome/trevi-fountain" target="_blank">Trevi Fountain</a>.', time: 'Evening' },
                            { title: 'Welcome Dinner', description: 'Authentic Roman pizza.' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 12',
                title: 'Ancient Rome & City Highlights',
                activities: [
                    {
                        title: 'Ancient Rome & City Highlights',
                        description: 'Golf Cart Tour covering Colosseum, Forum, and Spanish Steps, followed by lunch in Trastevere and afternoon exploration.',
                        image: 'images/rome_trevi.png',
                        detailId: 'rome-ancient-city',
                        details: [
                            { title: 'Golf Cart Tour of Rome', description: 'See <a href="https://www.italia.it/en/lazio/rome/colosseum" target="_blank">Colosseum</a> exterior, <a href="https://www.italia.it/en/lazio/rome/roman-forum" target="_blank">Roman Forum</a>, <a href="https://www.italia.it/en/lazio/rome/pantheon" target="_blank">Pantheon</a>, <a href="https://www.italia.it/en/lazio/rome/piazza-di-spagna" target="_blank">Spanish Steps</a>, Piazza Venezia. Family-friendly, minimal walking.', time: '3 hours' },
                            { title: 'Lunch', description: '<a href="https://www.italia.it/en/lazio/rome/trastevere" target="_blank">Trastevere</a>' },
                            { title: 'Afternoon Exploration', description: '<a href="https://www.italia.it/en/lazio/rome/pantheon" target="_blank">Pantheon</a> & <a href="https://www.italia.it/en/lazio/rome/piazza-navona" target="_blank">Piazza Navona</a>', time: 'Afternoon' },
                            { title: 'Optional Rooftop Drink', description: 'Sunset at Terrazza Borromini', time: 'Sunset' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 13',
                title: 'Pompeii Day Trip',
                activities: [
                    {
                        title: 'Transfer to Pompeii',
                        description: 'Private driver (~2.5 hrs) to <a href="https://www.italia.it/en/campania/pompeii-archaeological-site" target="_blank">Pompeii</a> for a guided family tour and authentic pizza lunch.',
                        image: 'images/rome_pompeii.png',
                        detailId: 'rome-pompeii',
                        details: [
                            { title: 'Transfer to Pompeii', description: 'Private driver (~2.5 hrs) to <a href="https://www.italia.it/en/campania/pompeii-archaeological-site" target="_blank">Pompeii</a>.' },
                            { title: 'Guided Family Tour', description: '2-hour kid-friendly tour of <a href="https://www.italia.it/en/campania/pompeii-archaeological-site" target="_blank">Pompeii</a> highlights.', time: '11:00 AM' },
                            { title: 'Lunch', description: 'Authentic Neapolitan Pizza nearby.' },
                            { title: 'Return to Rome', description: 'Relaxing drive back.' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                date: 'June 14',
                title: 'Vatican & Villa Borghese',
                activities: [
                    {
                        title: 'Vatican Museum and Villa Borghese',
                        description: 'Visit the Sistine Chapel and St. Peter\'s Basilica, followed by a relaxing afternoon in Villa Borghese Gardens.',
                        image: 'images/rome_vatican.png',
                        detailId: 'rome-vatican-borghese',
                        details: [
                            { title: 'Vatican Museums', description: '<a href="https://www.italia.it/en/lazio/rome/cappella-sistina" target="_blank">Sistine Chapel</a> & <a href="https://www.italia.it/en/lazio/rome/st-peter-basilica" target="_blank">St. Peter’s Basilica</a>.', time: 'Morning' },
                            { title: 'Lunch', description: 'Ginger Sapori e Salute (near Vatican)' },
                            { title: 'Villa Borghese Gardens', description: '<a href="https://www.italia.it/en/lazio/rome/villa-borghese" target="_blank">Villa Borghese</a> - Playground & row boats.', time: 'Afternoon' },
                            { title: 'Optional Gallery', description: '<a href="https://www.italia.it/en/lazio/rome/borghese-gallery" target="_blank">Borghese Gallery</a> timed tickets' },
                            { title: 'Evening in Trastevere', description: 'Explore <a href="https://www.italia.it/en/lazio/rome/trastevere" target="_blank">Trastevere</a> & casual dinner', time: 'Evening' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'florence',
        name: 'Florence',
        imageName: 'images/florence_hero.png',
        description: 'The Cradle of the Renaissance, famous for its art, architecture, and Tuscan cuisine. <a href="https://www.italia.it/en/tuscany/florence" target="_blank">Florence Guide</a>',
        dates: 'June 15–19',
        itinerary: [
            {
                dayNumber: 1,
                date: 'June 15',
                title: 'Arrival & Ponte Vecchio',
                activities: [
                    {
                        title: 'Arrival & Ponte Vecchio',
                        description: 'Fast train to Florence, check-in at Hotel Villa Neroli, and an evening walk to Ponte Vecchio followed by dinner.',
                        image: 'images/florence_hero.png',
                        detailId: 'florence-arrival',
                        details: [
                            { title: 'Travel to Florence', description: 'Fast train Rome → <a href="https://www.italia.it/en/tuscany/florence" target="_blank">Florence</a> (1 hr 30 min)', time: 'Morning' },
                            { title: 'Check-in', description: '<a href="https://www.villaneroli.com/en/" target="_blank">Hotel Villa Neroli Florence</a> - Home base for 4 nights.' },
                            { title: 'Evening Walk', description: '<a href="https://www.italia.it/en/tuscany/florence/ponte-vecchio" target="_blank">Ponte Vecchio</a>', time: 'Evening' },
                            { title: 'Dinner', description: '<a href="https://ristorantelagiostra.com/en/ristorante-la-giostra/" target="_blank">La Giostra</a>' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 16',
                title: 'Gelato & City Views',
                activities: [
                    {
                        title: 'Gelato & City Views',
                        description: 'Family Gelato Making Class followed by exploring the Duomo and sunset at Piazzale Michelangelo.',
                        image: 'images/florence_duomo.png',
                        detailId: 'florence-gelato',
                        details: [
                            { title: 'Family Gelato Making Class', description: 'Includes making sorbet + Italian gelato tasting.' },
                            { title: 'Explore Florence', description: '<a href="https://www.italia.it/en/tuscany/florence/duomo-florence" target="_blank">Duomo</a> (book climb if desired), <a href="https://www.italia.it/en/tuscany/florence/piazza-della-signoria" target="_blank">Piazza della Signoria</a>.', time: 'Afternoon' },
                            { title: 'Sunset', description: '<a href="https://www.italia.it/en/tuscany/florence/piazzale-michelangelo" target="_blank">Piazzale Michelangelo</a>', time: 'Sunset' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 17',
                title: 'Tuscany Balloon Ride',
                activities: [
                    {
                        title: 'Tuscany Balloon Ride',
                        description: 'Early morning Hot Air Balloon ride over Tuscany followed by relaxation at Boboli Gardens.',
                        image: 'images/florence_tuscany.jpg',
                        detailId: 'florence-balloon',
                        details: [
                            { title: 'Hot Air Balloon Ride', description: 'Over <a href="https://www.italia.it/en/tuscany" target="_blank">Tuscany</a> (near <a href="https://www.italia.it/en/tuscany/florence/san-casciano-val-di-pesa" target="_blank">San Casciano</a> or <a href="https://www.italia.it/en/tuscany/chianti" target="_blank">Chianti</a>). Champagne breakfast included.', time: 'Early Morning' },
                            { title: 'Relaxation', description: 'Pool time or <a href="https://www.italia.it/en/tuscany/florence/boboli-gardens" target="_blank">Boboli Gardens</a>.', time: 'Afternoon' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                date: 'June 18',
                title: 'Day Trip to Modena',
                activities: [
                    {
                        title: 'Day Trip to Modena',
                        description: 'Train to Modena to visit the Ferrari Museum and enjoy a traditional lunch.',
                        image: 'images/florence_ferrari.png',
                        detailId: 'florence-modena',
                        details: [
                            { title: 'Train to Modena', description: 'Visit <a href="https://www.italia.it/en/emilia-romagna/modena/museo-ferrari-maranello" target="_blank">Ferrari Museum Maranello</a> or <a href="https://www.italia.it/en/emilia-romagna/modena/ferrari-museum" target="_blank">Enzo Ferrari Museum</a>.' },
                            { title: 'Experience', description: 'Optional driving simulator.' },
                            { title: 'Lunch', description: 'Try Tigelle & Lambrusco in <a href="https://www.italia.it/en/emilia-romagna/modena" target="_blank">Modena</a>.' },
                            { title: 'Return', description: 'Train back to Florence.' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'cinque-terre',
        name: 'Cinque Terre',
        imageName: 'images/cinque_terre_hero.png',
        description: 'Five colorful fishing villages perched on the rugged Italian Riviera coastline. <a href="https://www.italia.it/en/liguria/cinque-terre" target="_blank">Cinque Terre Guide</a>',
        dates: 'June 19–22',
        itinerary: [
            {
                dayNumber: 1,
                date: 'June 19',
                title: 'Arrival & Seaside Views',
                activities: [
                    {
                        title: 'Arrival & Seaside Views',
                        description: 'Train to La Spezia and transfer to Monterosso. Check-in at Hotel Porto Roca and enjoy beach time and seafood dinner.',
                        image: 'images/cinque_terre_hero.png',
                        detailId: 'cinque-arrival',
                        details: [
                            { title: 'Train to La Spezia', description: 'Train Florence → <a href="https://www.italia.it/en/liguria/la-spezia" target="_blank">La Spezia</a> (2.5 hrs).' },
                            { title: 'Transfer', description: 'Local train to <a href="https://www.italia.it/en/liguria/monterosso-al-mare" target="_blank">Monterosso</a>.' },
                            { title: 'Check-in', description: '<a href="https://www.hotelportoroca.it/en/" target="_blank">Hotel Porto Roca</a> - Stunning cliffside views.' },
                            { title: 'Beach Time', description: 'Relax at <a href="https://www.italia.it/en/liguria/monterosso-al-mare" target="_blank">Monterosso</a> beach.', time: 'Afternoon' },
                            { title: 'Dinner', description: 'Seafood with a view.' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 20',
                title: 'Boat Tour & Villages',
                activities: [
                    {
                        title: 'Boat Tour & Villages',
                        description: 'Private boat tour to see the 5 villages from the sea, followed by lunch in Vernazza and exploration.',
                        image: 'images/cinque_boat.png',
                        detailId: 'cinque-boat',
                        details: [
                            { title: 'Private Boat Tour', description: 'See the 5 villages from the sea. Stop for swimming.', time: 'Morning' },
                            { title: 'Lunch', description: '<a href="https://www.italia.it/en/liguria/vernazza" target="_blank">Vernazza</a> harbor.' },
                            { title: 'Explore', description: 'Walk around <a href="https://www.italia.it/en/liguria/vernazza" target="_blank">Vernazza</a> and <a href="https://www.italia.it/en/liguria/corniglia" target="_blank">Corniglia</a>.' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 21',
                title: 'Hiking & Pesto',
                activities: [
                    {
                        title: 'Hiking & Pesto',
                        description: 'Morning hike on the Blue Trail followed by an authentic Pesto making class and sunset aperitivo.',
                        image: 'images/cinque_hiking.png',
                        detailId: 'cinque-hiking',
                        details: [
                            { title: 'Hiking', description: 'Walk part of the Blue Trail (Sentiero Azzurro) if open/suitable.', time: 'Morning' },
                            { title: 'Pesto Class', description: 'Learn to make authentic Ligurian pesto.', time: 'Afternoon' },
                            { title: 'Sunset Aperitivo', description: '<a href="https://www.italia.it/en/liguria/manarola" target="_blank">Manarola</a> scenic point.', time: 'Sunset' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'venice',
        name: 'Venice',
        imageName: 'images/venice_hero.png',
        description: 'The Floating City of canals, bridges, and masks. <a href="https://www.italia.it/en/veneto/venice" target="_blank">Venice Guide</a>',
        dates: 'June 22–25',
        itinerary: [
            {
                dayNumber: 1,
                date: 'June 22',
                title: 'Arrival & Grand Canal',
                activities: [
                    {
                        title: 'Arrival & Grand Canal',
                        description: 'Train to Venice, private water taxi to Hilton Molino Stucky, and an evening gondola ride.',
                        image: 'images/venice_hero.png',
                        detailId: 'venice-arrival',
                        details: [
                            { title: 'Train to Venice', description: 'Train La Spezia → <a href="https://www.italia.it/en/veneto/venice" target="_blank">Venice Santa Lucia</a> (~4 hrs).' },
                            { title: 'Water Taxi', description: 'Private boat transfer to hotel.' },
                            { title: 'Check-in', description: '<a href="https://www.hilton.com/en/hotels/vcehihi-hilton-molino-stucky-venice/" target="_blank">Hilton Molino Stucky</a> - Rooftop pool.' },
                            { title: 'Evening Gondola', description: 'Classic <a href="https://www.italia.it/en/veneto/venice" target="_blank">gondola ride</a> before dinner.', time: 'Evening' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 23',
                title: 'Islands & Glass',
                activities: [
                    {
                        title: 'Islands & Glass',
                        description: 'Half-day boat tour to Murano and Burano islands, followed by a seafood lunch.',
                        image: 'images/venice_murano.png',
                        detailId: 'venice-islands',
                        details: [
                            { title: 'Murano & Burano', description: 'Boat tour to <a href="https://www.italia.it/en/veneto/venice/murano" target="_blank">Murano</a> (glass blowing) and <a href="https://www.italia.it/en/veneto/venice/burano" target="_blank">Burano</a> (colorful houses).', time: 'Half Day' },
                            { title: 'Lunch', description: 'Seafood risotto on <a href="https://www.italia.it/en/veneto/venice/burano" target="_blank">Burano</a>.' },
                            { title: 'Relax', description: 'Hotel rooftop pool.', time: 'Afternoon' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 24',
                title: 'St. Mark\'s & Farewell',
                activities: [
                    {
                        title: 'St. Mark\'s & Farewell',
                        description: 'Skip-the-line tour of St. Mark\'s Basilica and Doge\'s Palace, mask workshop, and farewell dinner.',
                        image: 'images/venice_stmarks.png',
                        detailId: 'venice-marks',
                        details: [
                            { title: 'St. Mark\'s Basilica', description: 'Skip-the-line tour of <a href="https://www.italia.it/en/veneto/venice/st-marks-basilica" target="_blank">Basilica</a> & <a href="https://www.italia.it/en/veneto/venice/doges-palace" target="_blank">Doge\'s Palace</a>.', time: 'Morning' },
                            { title: 'Mask Workshop', description: 'Family Venetian mask decorating.', time: 'Afternoon' },
                            { title: 'Farewell Dinner', description: 'Grand Canal view restaurant.' }
                        ]
                    }
                ]
            },
            {
                dayNumber: 4,
                date: 'June 25',
                title: 'Departure',
                activities: [
                    {
                        title: 'Departure',
                        description: 'Final Italian breakfast and water taxi transfer to Marco Polo Airport.',
                        image: 'images/activity_transport.png',
                        detailId: 'venice-departure',
                        details: [
                            { title: 'Breakfast', description: 'Final Italian breakfast.' },
                            { title: 'Transfer', description: 'Water taxi to <a href="https://www.veneziaairport.it/en/" target="_blank">Marco Polo Airport</a>.' },
                            { title: 'Flight Home', description: 'Arrivederci Italia!' }
                        ]
                    }
                ]
            }
        ]
    }
];

const phrasesData = {
    title: 'Italian Travel Phrases Guide',
    sections: [
        {
            name: 'General Survival',
            phrases: [
                { italian: 'Ciao / Buongiorno / Buonasera', english: 'Hello / Good morning / Good evening' },
                { italian: 'Come stai? / Come sta?', english: 'How are you? (informal / formal)' },
                { italian: 'Sto bene, grazie.', english: 'I’m good, thank you.' },
                { italian: 'Mi chiamo…', english: 'My name is…' },
                { italian: 'Piacere!', english: 'Nice to meet you.' },
                { italian: 'Dov’è…?', english: 'Where is…?' },
                { italian: 'Dov’è il bagno?', english: 'Where is the bathroom?' },
                { italian: 'Quanto tempo ci vuole?', english: 'How long does it take?' },
                { italian: 'È lontano?', english: 'Is it far?' },
                { italian: 'Capisco / Non capisco', english: 'I understand / I don’t understand' },
                { italian: 'Parla inglese?', english: 'Do you speak English?' },
                { italian: 'Va bene.', english: 'Okay' },
                { italian: 'Non importa.', english: 'Never mind' },
                { italian: 'Perfetto!', english: 'Perfect' },
                { italian: 'Mi dispiace.', english: 'I’m sorry' },
                { italian: 'Ho bisogno di aiuto.', english: 'I need help' }
            ]
        },
        {
            name: 'Airport & Train Station',
            phrases: [
                { italian: 'Biglietteria', english: 'Ticket office' },
                { italian: 'Binario', english: 'Platform' },
                { italian: 'Orario', english: 'Schedule' },
                { italian: 'Uscita', english: 'Exit' },
                { italian: 'Dov’è il binario numero…?', english: 'Where is platform number…?' },
                { italian: 'A che ora parte il treno per…?', english: 'What time does the train leave?' },
                { italian: 'È in ritardo?', english: 'Is it delayed?' },
                { italian: 'Ho bisogno di un taxi.', english: 'I need a taxi.' }
            ]
        },
        {
            name: 'Hotel Check-In & Check-Out',
            phrases: [
                { italian: 'Ho una prenotazione.', english: 'I have a reservation.' },
                { italian: 'Vorrei fare il check-in.', english: 'I would like to check in.' },
                { italian: 'A che ora è il check-out?', english: 'What time is check-out?' },
                { italian: 'C’è la colazione inclusa?', english: 'Is breakfast included?' },
                { italian: 'Potrei avere un’altra chiave?', english: 'Can I have another key?' },
                { italian: 'Il Wi-Fi funziona?', english: 'Does the Wi-Fi work?' }
            ]
        },
        {
            name: 'Restaurant & Café',
            phrases: [
                { italian: 'Un tavolo per due, per favore.', english: 'A table for two, please.' },
                { italian: 'Possiamo vedere il menù?', english: 'Can we see the menu?' },
                { italian: 'Senza… (glutine / latte / noci)', english: 'Without… (gluten/milk/nuts)' },
                { italian: 'Che cosa consiglia?', english: 'What do you recommend?' },
                { italian: 'Il conto, per favore.', english: 'The check, please.' }
            ]
        },
        {
            name: 'Shopping & Everyday',
            phrases: [
                { italian: 'Quanto costa?', english: 'How much does it cost?' },
                { italian: 'Posso pagare con carta?', english: 'Can I pay with card?' },
                { italian: 'Dove posso trovare…?', english: 'Where can I find…?' },
                { italian: 'Mi scusi. / Permesso.', english: 'Excuse me / Coming through.' }
            ]
        },
        {
            name: 'Pronunciation of Famous Places',
            phrases: [
                { italian: 'Roma', english: 'ROH-mah (Rome)' },
                { italian: 'Firenze', english: 'fee-REN-tseh (Florence)' },
                { italian: 'Venezia', english: 'veh-NEH-tsya (Venice)' },
                { italian: 'Milano', english: 'mee-LAH-no (Milan)' },
                { italian: 'Cinque Terre', english: 'CHEEN-kweh TEH-reh (Five Lands)' },
                { italian: 'Positano', english: 'po-zee-TAH-no (Amalfi Coast)' },
                { italian: 'Capri', english: 'KAH-pree' }
            ]
        }
    ]
};
