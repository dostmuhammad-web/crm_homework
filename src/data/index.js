// FOOTBALL PLATFORM DATA - 100 Teams, 500 Players, Matches, News, Transfers, Standings

const leagues = [
  { name: 'Premier League', country: 'England' },
  { name: 'La Liga', country: 'Spain' },
  { name: 'Serie A', country: 'Italy' },
  { name: 'Bundesliga', country: 'Germany' },
  { name: 'Ligue 1', country: 'France' },
]

const teamsRaw = [
  // Premier League 20
  { name: 'Manchester City', league: 'Premier League', country: 'England', stadium: 'Etihad Stadium', founded: 1880, color: '#6CABDD' },
  { name: 'Arsenal', league: 'Premier League', country: 'England', stadium: 'Emirates Stadium', founded: 1886, color: '#EF0107' },
  { name: 'Liverpool', league: 'Premier League', country: 'England', stadium: 'Anfield', founded: 1892, color: '#C8102E' },
  { name: 'Chelsea', league: 'Premier League', country: 'England', stadium: 'Stamford Bridge', founded: 1905, color: '#034694' },
  { name: 'Manchester United', league: 'Premier League', country: 'England', stadium: 'Old Trafford', founded: 1878, color: '#DA291C' },
  { name: 'Tottenham Hotspur', league: 'Premier League', country: 'England', stadium: 'Tottenham Hotspur Stadium', founded: 1882, color: '#132257' },
  { name: 'Newcastle United', league: 'Premier League', country: 'England', stadium: "St James' Park", founded: 1892, color: '#241F20' },
  { name: 'Brighton', league: 'Premier League', country: 'England', stadium: 'Amex Stadium', founded: 1901, color: '#0057B8' },
  { name: 'Aston Villa', league: 'Premier League', country: 'England', stadium: 'Villa Park', founded: 1874, color: '#95BFE5' },
  { name: 'West Ham United', league: 'Premier League', country: 'England', stadium: 'London Stadium', founded: 1895, color: '#7A263A' },
  { name: 'Crystal Palace', league: 'Premier League', country: 'England', stadium: 'Selhurst Park', founded: 1905, color: '#1B458F' },
  { name: 'Everton', league: 'Premier League', country: 'England', stadium: 'Goodison Park', founded: 1878, color: '#003399' },
  { name: 'Fulham', league: 'Premier League', country: 'England', stadium: 'Craven Cottage', founded: 1879, color: '#000000' },
  { name: 'Wolverhampton', league: 'Premier League', country: 'England', stadium: 'Molineux', founded: 1877, color: '#FDB913' },
  { name: 'Brentford', league: 'Premier League', country: 'England', stadium: 'Gtech Community Stadium', founded: 1889, color: '#E30613' },
  { name: 'Nottingham Forest', league: 'Premier League', country: 'England', stadium: 'City Ground', founded: 1865, color: '#DD0000' },
  { name: 'Bournemouth', league: 'Premier League', country: 'England', stadium: 'Vitality Stadium', founded: 1899, color: '#DA020E' },
  { name: 'Burnley', league: 'Premier League', country: 'England', stadium: 'Turf Moor', founded: 1882, color: '#6C1D45' },
  { name: 'Sheffield United', league: 'Premier League', country: 'England', stadium: 'Bramall Lane', founded: 1889, color: '#EE2737' },
  { name: 'Luton Town', league: 'Premier League', country: 'England', stadium: 'Kenilworth Road', founded: 1885, color: '#F78F1E' },
  // La Liga 20
  { name: 'Real Madrid', league: 'La Liga', country: 'Spain', stadium: 'Santiago Bernabeu', founded: 1902, color: '#FEBE10' },
  { name: 'FC Barcelona', league: 'La Liga', country: 'Spain', stadium: 'Camp Nou', founded: 1899, color: '#A50044' },
  { name: 'Atletico Madrid', league: 'La Liga', country: 'Spain', stadium: 'Metropolitano', founded: 1903, color: '#CB3524' },
  { name: 'Sevilla FC', league: 'La Liga', country: 'Spain', stadium: 'Ramon Sanchez-Pizjuan', founded: 1890, color: '#F43333' },
  { name: 'Real Sociedad', league: 'La Liga', country: 'Spain', stadium: 'Reale Arena', founded: 1909, color: '#0067B1' },
  { name: 'Villarreal CF', league: 'La Liga', country: 'Spain', stadium: 'Estadio de la Ceramica', founded: 1923, color: '#FFE667' },
  { name: 'Real Betis', league: 'La Liga', country: 'Spain', stadium: 'Benito Villamarin', founded: 1907, color: '#00954C' },
  { name: 'Athletic Bilbao', league: 'La Liga', country: 'Spain', stadium: 'San Mames', founded: 1898, color: '#EE2523' },
  { name: 'Valencia CF', league: 'La Liga', country: 'Spain', stadium: 'Mestalla', founded: 1919, color: '#FF5A00' },
  { name: 'Girona FC', league: 'La Liga', country: 'Spain', stadium: 'Montilivi', founded: 1930, color: '#E30613' },
  { name: 'Getafe CF', league: 'La Liga', country: 'Spain', stadium: 'Coliseum', founded: 1983, color: '#005CA9' },
  { name: 'Osasuna', league: 'La Liga', country: 'Spain', stadium: 'El Sadar', founded: 1920, color: '#D0103A' },
  { name: 'Celta Vigo', league: 'La Liga', country: 'Spain', stadium: 'Balaidos', founded: 1923, color: '#8AC3EE' },
  { name: 'Rayo Vallecano', league: 'La Liga', country: 'Spain', stadium: 'Vallecas', founded: 1924, color: '#E30613' },
  { name: 'Mallorca', league: 'La Liga', country: 'Spain', stadium: 'Son Moix', founded: 1916, color: '#E30613' },
  { name: 'Alaves', league: 'La Liga', country: 'Spain', stadium: 'Mendizorroza', founded: 1921, color: '#0092D3' },
  { name: 'Las Palmas', league: 'La Liga', country: 'Spain', stadium: 'Gran Canaria', founded: 1949, color: '#FFE600' },
  { name: 'Cadiz CF', league: 'La Liga', country: 'Spain', stadium: 'Nuevo Mirandilla', founded: 1910, color: '#FFED02' },
  { name: 'Almeria', league: 'La Liga', country: 'Spain', stadium: 'Power Horse Stadium', founded: 1989, color: '#EE1C25' },
  { name: 'Granada CF', league: 'La Liga', country: 'Spain', stadium: 'Nuevo Los Carmenes', founded: 1931, color: '#C8102E' },
  // Serie A 20
  { name: 'Inter Milan', league: 'Serie A', country: 'Italy', stadium: 'San Siro', founded: 1908, color: '#0068A8' },
  { name: 'AC Milan', league: 'Serie A', country: 'Italy', stadium: 'San Siro', founded: 1899, color: '#FB090B' },
  { name: 'Juventus', league: 'Serie A', country: 'Italy', stadium: 'Allianz Stadium', founded: 1897, color: '#000000' },
  { name: 'Napoli', league: 'Serie A', country: 'Italy', stadium: 'Diego Maradona Stadium', founded: 1926, color: '#12A0D7' },
  { name: 'AS Roma', league: 'Serie A', country: 'Italy', stadium: 'Olimpico', founded: 1927, color: '#F0BC42' },
  { name: 'Lazio', league: 'Serie A', country: 'Italy', stadium: 'Olimpico', founded: 1900, color: '#87D8F7' },
  { name: 'Atalanta', league: 'Serie A', country: 'Italy', stadium: 'Gewiss Stadium', founded: 1907, color: '#1E71B8' },
  { name: 'Fiorentina', league: 'Serie A', country: 'Italy', stadium: 'Artemio Franchi', founded: 1926, color: '#482E92' },
  { name: 'Bologna', league: 'Serie A', country: 'Italy', stadium: 'Renato Dall\'Ara', founded: 1909, color: '#1A2F48' },
  { name: 'Torino', league: 'Serie A', country: 'Italy', stadium: 'Olimpico Grande Torino', founded: 1906, color: '#8B0000' },
  { name: 'Monza', league: 'Serie A', country: 'Italy', stadium: 'U-Power Stadium', founded: 1912, color: '#E30613' },
  { name: 'Genoa', league: 'Serie A', country: 'Italy', stadium: 'Luigi Ferraris', founded: 1893, color: '#A6192E' },
  { name: 'Lecce', league: 'Serie A', country: 'Italy', stadium: 'Via del Mare', founded: 1908, color: '#FDE100' },
  { name: 'Udinese', league: 'Serie A', country: 'Italy', stadium: 'Dacia Arena', founded: 1896, color: '#000000' },
  { name: 'Empoli', league: 'Serie A', country: 'Italy', stadium: 'Carlo Castellani', founded: 1920, color: '#005CA9' },
  { name: 'Sassuolo', league: 'Serie A', country: 'Italy', stadium: 'Mapei Stadium', founded: 1920, color: '#00A650' },
  { name: 'Cagliari', league: 'Serie A', country: 'Italy', stadium: 'Unipol Domus', founded: 1920, color: '#AD0024' },
  { name: 'Hellas Verona', league: 'Serie A', country: 'Italy', stadium: 'Marcantonio Bentegodi', founded: 1903, color: '#005CA9' },
  { name: 'Frosinone', league: 'Serie A', country: 'Italy', stadium: 'Benito Stirpe', founded: 1906, color: '#FFE600' },
  { name: 'Salernitana', league: 'Serie A', country: 'Italy', stadium: 'Arechi', founded: 1919, color: '#7D191A' },
  // Bundesliga 18
  { name: 'Bayern Munich', league: 'Bundesliga', country: 'Germany', stadium: 'Allianz Arena', founded: 1900, color: '#DC052D' },
  { name: 'Bayer Leverkusen', league: 'Bundesliga', country: 'Germany', stadium: 'BayArena', founded: 1904, color: '#E30613' },
  { name: 'Borussia Dortmund', league: 'Bundesliga', country: 'Germany', stadium: 'Signal Iduna Park', founded: 1909, color: '#FDE100' },
  { name: 'RB Leipzig', league: 'Bundesliga', country: 'Germany', stadium: 'Red Bull Arena', founded: 2009, color: '#DD0741' },
  { name: 'VfB Stuttgart', league: 'Bundesliga', country: 'Germany', stadium: 'MHPArena', founded: 1893, color: '#FFFFFF' },
  { name: 'Eintracht Frankfurt', league: 'Bundesliga', country: 'Germany', stadium: 'Deutsche Bank Park', founded: 1899, color: '#E30613' },
  { name: 'Werder Bremen', league: 'Bundesliga', country: 'Germany', stadium: 'Weserstadion', founded: 1899, color: '#1D9053' },
  { name: 'Hoffenheim', league: 'Bundesliga', country: 'Germany', stadium: 'PreZero Arena', founded: 1899, color: '#1C63B7' },
  { name: 'Freiburg', league: 'Bundesliga', country: 'Germany', stadium: 'Europa-Park Stadion', founded: 1904, color: '#E30613' },
  { name: 'Wolfsburg', league: 'Bundesliga', country: 'Germany', stadium: 'Volkswagen Arena', founded: 1945, color: '#65B32E' },
  { name: 'Mainz 05', league: 'Bundesliga', country: 'Germany', stadium: 'MEWA Arena', founded: 1905, color: '#E30613' },
  { name: 'Borussia Monchengladbach', league: 'Bundesliga', country: 'Germany', stadium: 'Borussia-Park', founded: 1900, color: '#000000' },
  { name: 'Union Berlin', league: 'Bundesliga', country: 'Germany', stadium: 'Alte Forsterei', founded: 1966, color: '#E30613' },
  { name: 'Augsburg', league: 'Bundesliga', country: 'Germany', stadium: 'WWK Arena', founded: 1907, color: '#BA3733' },
  { name: 'Heidenheim', league: 'Bundesliga', country: 'Germany', stadium: 'Voith-Arena', founded: 1846, color: '#005CA9' },
  { name: 'FC Cologne', league: 'Bundesliga', country: 'Germany', stadium: 'RheinEnergieStadion', founded: 1948, color: '#ED1C24' },
  { name: 'Darmstadt 98', league: 'Bundesliga', country: 'Germany', stadium: 'Merck-Stadion', founded: 1898, color: '#005CA9' },
  { name: 'Bochum', league: 'Bundesliga', country: 'Germany', stadium: 'Vonovia Ruhrstadion', founded: 1848, color: '#005CA9' },
  // Ligue 1 18
  { name: 'Paris Saint-Germain', league: 'Ligue 1', country: 'France', stadium: 'Parc des Princes', founded: 1970, color: '#004170' },
  { name: 'AS Monaco', league: 'Ligue 1', country: 'France', stadium: 'Stade Louis II', founded: 1924, color: '#E30613' },
  { name: 'Olympique Marseille', league: 'Ligue 1', country: 'France', stadium: 'Velodrome', founded: 1899, color: '#009DDC' },
  { name: 'Olympique Lyon', league: 'Ligue 1', country: 'France', stadium: 'Groupama Stadium', founded: 1950, color: '#002395' },
  { name: 'LOSC Lille', league: 'Ligue 1', country: 'France', stadium: 'Pierre-Mauroy', founded: 1944, color: '#E30613' },
  { name: 'Stade Rennes', league: 'Ligue 1', country: 'France', stadium: 'Roazhon Park', founded: 1901, color: '#E30613' },
  { name: 'OGC Nice', league: 'Ligue 1', country: 'France', stadium: 'Allianz Riviera', founded: 1904, color: '#E30613' },
  { name: 'RC Lens', league: 'Ligue 1', country: 'France', stadium: 'Stade Bollaert', founded: 1906, color: '#FFE600' },
  { name: 'Reims', league: 'Ligue 1', country: 'France', stadium: 'Stade Auguste-Delaune', founded: 1910, color: '#E30613' },
  { name: 'Strasbourg', league: 'Ligue 1', country: 'France', stadium: 'Stade de la Meinau', founded: 1906, color: '#009EE0' },
  { name: 'Toulouse FC', league: 'Ligue 1', country: 'France', stadium: 'Stadium de Toulouse', founded: 1970, color: '#4B2A7B' },
  { name: 'Montpellier', league: 'Ligue 1', country: 'France', stadium: 'Stade de la Mosson', founded: 1974, color: '#FF6600' },
  { name: 'Nantes', league: 'Ligue 1', country: 'France', stadium: 'Stade de la Beaujoire', founded: 1943, color: '#FFE600' },
  { name: 'Brest', league: 'Ligue 1', country: 'France', stadium: 'Stade Francis-Le Ble', founded: 1950, color: '#E30613' },
  { name: 'Le Havre', league: 'Ligue 1', country: 'France', stadium: 'Stade Oceane', founded: 1872, color: '#009DDC' },
  { name: 'Metz', league: 'Ligue 1', country: 'France', stadium: 'Stade Saint-Symphorien', founded: 1932, color: '#8B0000' },
  { name: 'Lorient', league: 'Ligue 1', country: 'France', stadium: 'Stade du Moustoir', founded: 1926, color: '#FF6600' },
  { name: 'Clermont Foot', league: 'Ligue 1', country: 'France', stadium: 'Stade Gabriel Montpied', founded: 1911, color: '#E30613' },
  // Extra 4 to reach 100
  { name: 'Ajax', league: 'Eredivisie', country: 'Netherlands', stadium: 'Johan Cruyff Arena', founded: 1900, color: '#E30613' },
  { name: 'PSV Eindhoven', league: 'Eredivisie', country: 'Netherlands', stadium: 'Philips Stadion', founded: 1913, color: '#E30613' },
  { name: 'Benfica', league: 'Liga Portugal', country: 'Portugal', stadium: 'Estadio da Luz', founded: 1904, color: '#E30613' },
  { name: 'FC Porto', league: 'Liga Portugal', country: 'Portugal', stadium: 'Estadio do Dragao', founded: 1893, color: '#00428C' },
]

export const teams = teamsRaw.map((t, i) => ({
  id: i + 1,
  ...t,
  logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=${t.color.replace('#','')}&color=fff&size=128&bold=true&format=svg`,
  // clean fallback if needed
}))

const firstNames = ["Lionel","Kylian","Erling","Cristiano","Kevin","Robert","Mohamed","Virgil","Bukayo","Jude","Pedri","Vinicius","Bernardo","Rodri","Harry","Son","Martin","Declan","Gianluigi","Thibaut","Antoine","Lautaro","Victor","Khvicha","Rafael","Jamal","Florian","Xavi","Marc","Frenkie","Gavi","Alejandro","Ronald","Jules","Ilkay","Phil","Jack","Trent","Andrew","Alisson","Ederson","Jan","Manuel","Ter","David","Bruno","Casemiro","Marcus","Rasmus","Alejandro","Federico","Luka","Toni","Dani","Jude","Eduardo","Aurelien","Ferland","Eder","Antonio","Nacho","Lucas","Brahim","Joselu","Rodrygo","Endrick","Arda","Dani","Nico","Lamine","Ferran","Joao","Raphinha","Inigo","Andreas","Sergi","Ousmane","Ansu","Pau","Fermin","Oriol","Ilkay","Marc","Jules","Ronald","Andreas","Victor","Nico","Yuki","Kenji","Hiroshi","Takefusa","Kaoru","Daichi","Ritsu","Wataru","Jamal","Serge","Leroy","Thomas","Joshua","Leon","Kingsley","Alphonso","Dayot","Matthijs","Kim","Noussair","Konrad","Raphael","Mathys","Eric","Hasan","Ayman","Youssef","Achraf","Hakim","Sofyan","Noussair","Eliesse","Bilal","Amine","Ismael","Adam","Rayan","Anas","Zakaria","Soufiane","Ilias","Mehdi","Nayef","Romain","Selim","Munir","Abde","Brahim","Yassine","Bono","Oussama","Ayoub","Hamza","Omar","Karim","Nordin","Ali","Mohammed","Said","Hassan","Hussein","Ahmed","Khalid","Abdullah","Salem","Fahad","Majed","Salman","Nasser","Akram","Almoez","Hassan","Boualem","Riyad","Ismail","Youcef","Baghdad","Said","Islam","Rami","Aissa","Hicham","Sofiane","Andy","James","John","Michael","David","Robert","William","Thomas","Charles","George","Henry","Edward","Arthur","Albert","Walter","Harold","Ernest","Frederick","Samuel","Joseph","Peter","Paul","Mark","Anthony","Christopher","Daniel","Matthew","Andrew","Ryan","Kyle","Jordan","Mason","Logan","Ethan","Lucas","Oliver","Noah","Liam","Mateo","Santiago","Matias","Thiago","Julian","Nicolas","Emiliano","Lautaro","Paulo","Angel","Gonzalo","Sergio","Javier","Diego","Carlos","Hugo","Theo","Lucas","Antoine","Olivier","Kingsley","Ousmane","Aurelien","Eduardo","Ferland","William","Dayot","Ibrahima","Mike","Lucas","Theo"]
const lastNames = ["Messi","Mbappe","Haaland","Ronaldo","De Bruyne","Lewandowski","Salah","van Dijk","Saka","Bellingham","Gonzalez","Junior","Silva","Hernandez","Kane","Heung-min","Odegaard","Rice","Donnarumma","Courtois","Griezmann","Martinez","Osimhen","Kvaratskhelia","Leao","Musiala","Wirtz","Simons","ter Stegen","De Jong","Lopez","Araujo","Kounde","Gundogan","Foden","Grealish","Alexander-Arnold","Robertson","Alisson","Ederson","Oblak","Neuer","Navas","Raya","Fernandes","Casemiro","Rashford","Hojlund","Garnacho","Valverde","Modric","Kroos","Carvajal","Camavinga","Tchouameni","Mendy","Militao","Rudiger","Nacho","Vazquez","Diaz","Joselu","Rodrygo","Endrick","Guler","Olmo","Williams","Yamal","Torres","Felix","Raphinha","Martinez","Christensen","Roberto","Dembele","Fati","Cubarsi","Lopez","Romeu","Gundogan","Garcia","Kounde","Araujo","Christensen","Osimhen","Williams","Tanaka","Sato","Watanabe","Kubo","Mitoma","Kamada","Doan","Endo","Musiala","Gnabry","Sane","Muller","Kimmich","Goretzka","Coman","Davies","Upamecano","de Ligt","Kim","Mazraoui","Laimer","Guerreiro","Tel","Choupo-Moting","El Hilali","En-Nesyri","Hakimi","Ziyech","Amrabat","Mazraoui","Ben Seghir","El Khannouss","Saibari","Bennacer","Mahrez","Boulaya","Bounedjah","Benrahma","Bensebaini","Mandi","Belaid","Feghouli","El Hilali","Brahimi","Bounou","Tannane","El Kaabi","En-Nesyri","Mazraoui","Ziyech","Hakimi","Saiss","Aguerd","Amallah","El Yamiq","Brahim","Bono","Mazraoui","Ziyech","Hakimi","En-Nesyri","Bounou","El Kaabi","Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Thompson","White","Harris","Clark","Lewis","Robinson","Walker","Hall","Allen","Young","Hernandez","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts","Gomez","Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes","Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper","Peterson","Bailey","Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzalez","Bryant","Alexander","Russell","Griffin","Diaz","Hayes"]
const positions = ["GK","CB","LB","RB","CDM","CM","CAM","LM","RM","LW","RW","CF","ST"]
const nationalities = ["England","Spain","France","Germany","Italy","Brazil","Argentina","Portugal","Netherlands","Belgium","Croatia","Uruguay","Morocco","Japan","USA","Norway","Egypt","Senegal","Nigeria","Colombia","Poland","Ukraine","Sweden","Denmark"]

function seededRand(seed){
  let s = seed
  return ()=>{ s = (s*9301+49297)%233280; return s/233280 }
}

export const players = []
let pId=1
for(let team of teams){
  const rand = seededRand(team.id * 999)
  for(let j=0;j<5;j++){
    const fn = firstNames[Math.floor(rand()*firstNames.length)]
    const ln = lastNames[Math.floor(rand()*lastNames.length)]
    const pos = positions[Math.floor(rand()*positions.length)]
    const nat = nationalities[Math.floor(rand()*nationalities.length)]
    const age = 18 + Math.floor(rand()*17)
    const goals = pos==="GK"?0: Math.floor(rand()*25)
    const assists = Math.floor(rand()*18)
    const rating = (6.5 + rand()*2.5).toFixed(1)
    const value = (5 + rand()*115).toFixed(1)
    players.push({
      id: pId++,
      name: `${fn} ${ln}`,
      photo: `https://i.pravatar.cc/300?img=${((pId%70)+1)}`,
      nationality: nat,
      age,
      position: pos,
      club: team.name,
      teamId: team.id,
      number: 1+ Math.floor(rand()*99),
      stats: {
        goals,
        assists,
        appearances: 5+ Math.floor(rand()*30),
        rating: parseFloat(rating),
        minutes: 300+ Math.floor(rand()*2500),
        cleanSheets: pos==="GK"? Math.floor(rand()*12):0,
        yellow: Math.floor(rand()*6),
        red: rand()>0.85?1:0,
      },
      marketValue: `${value}M €`,
      foot: rand()>0.5?"Right":"Left",
    })
  }
}

// Matches: generate 60 matches mixed statuses
export const matches = []
let mId=1
const statuses = ["live","scheduled","finished"]
const now = new Date()
for(let i=0;i<60;i++){
  const home = teams[Math.floor(Math.random()*teams.length)]
  let away = teams[Math.floor(Math.random()*teams.length)]
  while(away.id===home.id) away = teams[Math.floor(Math.random()*teams.length)]
  const status = i<6? "live" : i<18? "scheduled" : "finished"
  const offsetDays = status==="scheduled"? (1+ i%14) : status==="live"? 0 : -(1+ i%30)
  const d = new Date(now)
  d.setDate(now.getDate()+ offsetDays)
  d.setHours(14+ i%8, [0,15,30,45][i%4])
  const scoreHome = status==="scheduled"? null : Math.floor(Math.random()*5)
  const scoreAway = status==="scheduled"? null : Math.floor(Math.random()*5)
  const minute = status==="live"? (15+ Math.floor(Math.random()*75))+ "'" : null
  matches.push({
    id: mId++,
    homeTeam: home,
    awayTeam: away,
    homeId: home.id,
    awayId: away.id,
    date: d.toISOString().split('T')[0],
    time: d.toTimeString().slice(0,5),
    datetime: d.toISOString(),
    scoreHome,
    scoreAway,
    status,
    minute,
    league: home.league,
    stadium: home.stadium,
  })
}
matches.sort((a,b)=> new Date(a.datetime)- new Date(b.datetime))

export const news = [
  { id:1, title:"Haaland hits hat-trick as City crush rivals 4-0", category:"Premier League", image:"https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600", time:"2h ago", excerpt:"Erling Haaland continues his stunning form with three goals...", featured:true },
  { id:2, title:"Real Madrid unveil new Bernabeu after €1B renovation", category:"La Liga", image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600", time:"5h ago", excerpt:"The iconic stadium now holds 85,000 with retractable roof...", featured:true },
  { id:3, title:"Inter top Serie A after late Lautaro winner", category:"Serie A", image:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600", time:"8h ago", excerpt:"Lautaro Martinez scores 89th minute winner against AC Milan...", featured:false },
  { id:4, title:"Bayern Munich set Bundesliga record with 11 straight wins", category:"Bundesliga", image:"https://images.unsplash.com/photo-1577224284711-8ac48ff79381?w=600", time:"12h ago", excerpt:"Bavarians unstoppable under new manager...", featured:false },
  { id:5, title:"PSG prepare €200M bid for Osimhen", category:"Transfers", image:"https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=600", time:"1d ago", excerpt:"Paris giants want Napoli striker to replace Mbappe...", featured:false },
  { id:6, title:"Arsenal's Saka voted Player of the Month", category:"Premier League", image:"https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=600", time:"1d ago", excerpt:"Young winger beats Haaland and Salah to award...", featured:false },
  { id:7, title:"Barcelona's Lamine Yamal youngest scorer in El Clasico history", category:"La Liga", image:"https://images.unsplash.com/photo-1524012435847-659cf8c3d158?w=600", time:"2d ago", excerpt:"16-year-old wonderkid makes history...", featured:true },
  { id:8, title:"Messi announces return to Europe?", category:"Transfers", image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600", time:"2d ago", excerpt:"Inter Miami star hints at loan move...", featured:false },
]

export const transfers = [
  { id:1, player:"Kylian Mbappe", from:"Paris Saint-Germain", to:"Real Madrid", fee:"Free", status:"Completed", image:"https://i.pravatar.cc/300?img=11", position:"LW" },
  { id:2, player:"Declan Rice", from:"West Ham United", to:"Arsenal", fee:"€116M", status:"Completed", image:"https://i.pravatar.cc/300?img=12", position:"CDM" },
  { id:3, player:"Jude Bellingham", from:"Borussia Dortmund", to:"Real Madrid", fee:"€103M", status:"Completed", image:"https://i.pravatar.cc/300?img=13", position:"CM" },
  { id:4, player:"Harry Kane", from:"Tottenham Hotspur", to:"Bayern Munich", fee:"€100M", status:"Completed", image:"https://i.pravatar.cc/300?img=14", position:"ST" },
  { id:5, player:"Victor Osimhen", from:"Napoli", to:"Paris Saint-Germain", fee:"€130M", status:"Rumour", image:"https://i.pravatar.cc/300?img=15", position:"ST" },
  { id:6, player:"Bernardo Silva", from:"Manchester City", to:"FC Barcelona", fee:"€65M", status:"Rumour", image:"https://i.pravatar.cc/300?img=16", position:"CM" },
  { id:7, player:"Florian Wirtz", from:"Bayer Leverkusen", to:"Manchester City", fee:"€110M", status:"Rumour", image:"https://i.pravatar.cc/300?img=17", position:"CAM" },
  { id:8, player:"Lamine Yamal", from:"FC Barcelona", to:"Paris Saint-Germain", fee:"€200M", status:"Rumour", image:"https://i.pravatar.cc/300?img=18", position:"RW" },
]

// Generate standings per league
export function getStandings(leagueName){
  const leagueTeams = teams.filter(t=> t.league===leagueName)
  const rand = seededRand(leagueName.length*100)
  const table = leagueTeams.map(t=>{
    const pld = 12+ Math.floor(rand()*10)
    const won = Math.floor(rand()*(pld*0.7))
    const draw = Math.floor(rand()*(pld-won)*0.5)
    const lost = pld - won - draw
    const gf = won*2 + draw + Math.floor(rand()*10)
    const ga = lost*1 + Math.floor(rand()*15)
    return { team:t, P:pld, W:won, D:draw, L:lost, GF:gf, GA:ga, GD:gf-ga, Pts: won*3+draw }
  }).sort((a,b)=> b.Pts - a.Pts || b.GD - a.GD).map((r,i)=>({...r, pos:i+1}))
  return table
}
export const allLeagues = [...new Set(teams.map(t=>t.league))]
