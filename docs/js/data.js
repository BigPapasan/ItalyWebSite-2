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
                    { title: 'Arrive in Rome', description: 'Private transfer to hotel.' },
                    { title: 'Check-in', description: 'Settle into your Roman Hotel for your memorable 4 nights in <a href="https://www.italia.it/en/lazio/rome/guide-history-facts" target="_blank">Rome</a>.' },
                    { title: 'Evening Walk', description: '<a href="https://www.italia.it/en/lazio/rome/piazza-navona" target="_blank">Piazza Navona</a> & <a href="https://www.italia.it/en/lazio/rome/trevi-fountain" target="_blank">Trevi Fountain</a>.', time: 'Evening' },
                    { title: 'Welcome Dinner', description: 'Authentic Roman pizza.' }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 12',
                title: 'Ancient Rome & City Highlights',
                activities: [
                    { title: 'Golf Cart Tour of Rome', description: 'See <a href="https://www.italia.it/en/lazio/rome/colosseum" target="_blank">Colosseum</a> exterior, <a href="https://www.italia.it/en/lazio/rome/roman-forum" target="_blank">Roman Forum</a>, <a href="https://www.italia.it/en/lazio/rome/pantheon" target="_blank">Pantheon</a>, <a href="https://www.italia.it/en/lazio/rome/piazza-di-spagna" target="_blank">Spanish Steps</a>, Piazza Venezia. Family-friendly, minimal walking.', time: '3 hours' },
                    { title: 'Lunch', description: '<a href="https://www.italia.it/en/lazio/rome/trastevere" target="_blank">Trastevere</a>' },
                    { title: 'Afternoon Exploration', description: '<a href="https://www.italia.it/en/lazio/rome/pantheon" target="_blank">Pantheon</a> & <a href="https://www.italia.it/en/lazio/rome/piazza-navona" target="_blank">Piazza Navona</a>', time: 'Afternoon' },
                    { title: 'Optional Rooftop Drink', description: 'Sunset at Terrazza Borromini', time: 'Sunset' }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 13',
                title: 'Pompeii Day Trip',
                activities: [
                    { title: 'Transfer to Pompeii', description: 'Private driver (~2.5 hrs) to <a href="https://www.italia.it/en/campania/pompeii-archaeological-site" target="_blank">Pompeii</a>.' },
                    { title: 'Guided Family Tour', description: '2-hour kid-friendly tour of <a href="https://www.italia.it/en/campania/pompeii-archaeological-site" target="_blank">Pompeii</a> highlights.', time: '11:00 AM' },
                    { title: 'Lunch', description: 'Authentic Neapolitan Pizza nearby.' },
                    { title: 'Return to Rome', description: 'Relaxing drive back.' }
                ]
            },
            {
                dayNumber: 4,
                date: 'June 14',
                title: 'Vatican & Villa Borghese',
                activities: [
                    { title: 'Vatican Museums', description: '<a href="https://www.italia.it/en/lazio/rome/cappella-sistina" target="_blank">Sistine Chapel</a> & <a href="https://www.italia.it/en/lazio/rome/st-peter-basilica" target="_blank">St. Peter’s Basilica</a>.', time: 'Morning' },
                    { title: 'Lunch', description: 'Ginger Sapori e Salute (near Vatican)' },
                    { title: 'Villa Borghese Gardens', description: '<a href="https://www.italia.it/en/lazio/rome/villa-borghese" target="_blank">Villa Borghese</a> - Playground & row boats.', time: 'Afternoon' },
                    { title: 'Optional Gallery', description: '<a href="https://www.italia.it/en/lazio/rome/borghese-gallery" target="_blank">Borghese Gallery</a> timed tickets' },
                    { title: 'Evening in Trastevere', description: 'Explore <a href="https://www.italia.it/en/lazio/rome/trastevere" target="_blank">Trastevere</a> & casual dinner', time: 'Evening' }
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
                    { title: 'Travel to Florence', description: 'Fast train Rome → <a href="https://www.italia.it/en/tuscany/florence" target="_blank">Florence</a> (1 hr 30 min)', time: 'Morning' },
                    { title: 'Check-in', description: 'Home base for 4 nights.' },
                    { title: 'Evening Walk', description: '<a href="https://www.italia.it/en/tuscany/florence/ponte-vecchio" target="_blank">Ponte Vecchio</a>', time: 'Evening' },
                    { title: 'Dinner', description: '<a href="https://ristorantelagiostra.com/en/ristorante-la-giostra/" target="_blank">La Giostra</a>' }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 16',
                title: 'Gelato & City Views',
                activities: [
                    { title: 'Family Gelato Making Class', description: 'Includes making sorbet + Italian gelato tasting.' },
                    { title: 'Explore Florence', description: '<a href="https://www.italia.it/en/tuscany/florence/duomo-florence" target="_blank">Duomo</a> (book climb if desired), <a href="https://www.italia.it/en/tuscany/florence/piazza-della-signoria" target="_blank">Piazza della Signoria</a>.', time: 'Afternoon' },
                    { title: 'Sunset', description: '<a href="https://www.italia.it/en/tuscany/florence/piazzale-michelangelo" target="_blank">Piazzale Michelangelo</a>', time: 'Sunset' }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 17',
                title: 'Tuscany Balloon Ride',
                activities: [
                    { title: 'Hot Air Balloon Ride', description: 'Over <a href="https://www.italia.it/en/tuscany" target="_blank">Tuscany</a> (near <a href="https://www.italia.it/en/tuscany/florence/san-casciano-val-di-pesa" target="_blank">San Casciano</a> or <a href="https://www.italia.it/en/tuscany/chianti" target="_blank">Chianti</a>). Champagne breakfast included.', time: 'Early Morning' },
                    { title: 'Relaxation', description: 'Pool time or <a href="https://www.italia.it/en/tuscany/florence/boboli-gardens" target="_blank">Boboli Gardens</a>.', time: 'Afternoon' }
                ]
            },
            {
                dayNumber: 4,
                date: 'June 18',
                title: 'Day Trip to Modena',
                activities: [
                    { title: 'Train to Modena', description: 'Visit <a href="https://www.italia.it/en/emilia-romagna/modena/museo-ferrari-maranello" target="_blank">Ferrari Museum Maranello</a> or <a href="https://www.italia.it/en/emilia-romagna/modena/ferrari-museum" target="_blank">Enzo Ferrari Museum</a>.' },
                    { title: 'Experience', description: 'Optional driving simulator.' },
                    { title: 'Lunch', description: 'Try Tigelle & Lambrusco in <a href="https://www.italia.it/en/emilia-romagna/modena" target="_blank">Modena</a>.' },
                    { title: 'Return to Florence', description: 'Train back.' }
                ]
            }
        ]
    },
    {
        id: 'cinque-terre',
        name: 'Cinque Terre',
        imageName: 'images/cinque_terre_hero.png',
        description: 'A string of centuries-old seaside villages on the rugged Italian Riviera coastline.',
        dates: 'June 19–22',
        itinerary: [
            {
                dayNumber: 1,
                date: 'June 19',
                title: 'Arrival & Seaside Dinner',
                activities: [
                    { title: 'Travel to Cinque Terre', description: 'Train Florence → La Spezia (~2 hr), then local train.' },
                    { title: 'Check-in', description: 'Monterosso recommended for families.' },
                    { title: 'Dinner', description: 'Seafood with sea view.', time: 'Evening' }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 20',
                title: 'Boat Tour & Swimming',
                activities: [
                    { title: 'Private Boat Tour', description: 'View the 5 villages from the sea.', time: 'Morning' },
                    { title: 'Lunch', description: 'Focaccia & Pesto in Vernazza.' },
                    { title: 'Beach Time', description: 'Relax at Monterosso beach.', time: 'Afternoon' }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 21',
                title: 'Hiking & Pesto Class',
                activities: [
                    { title: 'Morning Hike', description: 'Short scenic trail (e.g., Vernazza to Corniglia) or walk Via dell’Amore (if open).', time: 'Morning' },
                    { title: 'Pesto Making Class', description: 'Learn to make authentic Ligurian pesto.' },
                    { title: 'Farewell Dinner', description: 'Sunset aperitivo.' }
                ]
            }
        ]
    },
    {
        id: 'venice',
        name: 'Venice',
        imageName: 'images/venice_hero.png',
        description: 'The City of Canals, offering a magical, floating atmosphere unlike anywhere else.',
        dates: 'June 22–25',
        itinerary: [
            {
                dayNumber: 1,
                date: 'June 22',
                title: 'Arrival & Gondola Ride',
                activities: [
                    { title: 'Travel to Venice', description: 'Train La Spezia → Venice (~4-5 hrs).' },
                    { title: 'Water Taxi', description: 'Private boat to hotel (grand entrance!).' },
                    { title: 'Gondola Ride', description: 'Classic canal experience.', time: 'Sunset' },
                    { title: 'Dinner', description: 'Cicchetti (Venetian tapas).' }
                ]
            },
            {
                dayNumber: 2,
                date: 'June 23',
                title: 'St. Mark’s & Murano',
                activities: [
                    { title: 'St. Mark’s Basilica', description: 'Skip-the-line tour.', time: 'Morning' },
                    { title: 'Doge’s Palace', description: 'Secret Itineraries tour (great for kids).' },
                    { title: 'Boat to Murano', description: 'See glass blowing demonstration.', time: 'Afternoon' }
                ]
            },
            {
                dayNumber: 3,
                date: 'June 24',
                title: 'Mask Making & Farewell',
                activities: [
                    { title: 'Carnival Mask Workshop', description: 'Paint your own Venetian mask.', time: 'Morning' },
                    { title: 'Free Time', description: 'Get lost in the calli (streets), shop for souvenirs.' },
                    { title: 'Farewell Dinner', description: 'Grand Canal view restaurant.', time: 'Evening' }
                ]
            },
            {
                dayNumber: 4,
                date: 'June 25',
                title: 'Departure',
                activities: [
                    { title: 'Airport Transfer', description: 'Water taxi to Marco Polo Airport.' },
                    { title: 'Flight Home', description: 'Arrivederci Italia!' }
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
