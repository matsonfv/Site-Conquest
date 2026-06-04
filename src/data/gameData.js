// ============================================================
// data/gameData.js — DADOS CENTRALIZADOS DOS JOGOS
//
// Substitui os arrays missionsData e achievementsData que
// estavam embutidos nas funções renderMissionsPage() e
// renderAchievementsPage() do app.js original.
//
// Centralizar os dados aqui facilita a manutenção: para
// adicionar um jogo novo basta incluir um novo objeto.
// ============================================================

// ── Dados dos cards de jogos (seção "Jogos Disponíveis") ──
export const GAMES = [
  {
    id: 'resident-evil',
    title: 'Resident Evil',
    genre: 'Survival Horror',
    // Rota React — deve bater com o path definido no App.jsx
    path: '/resident-evil',
    // Imagem local: coloque em /public/img/ ou importe de src/assets/
    bgImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsckaUDr0nE7dcLLlD-Ouz6KcoyozZankqNLYGytSQn-anTyV6nNj0G-y1gaAC0_gethRvjBJK0ipqJL-pjqMP8_HeaP6q_Fhi9rbbfFyymoN_jiaYG3n0Rd8t64FBu9DEXZT5FGAh04RFPSiyuwg2LVyI9Ls763wPdzECnxylQSl1jjgaR4a508ls_w/s1920/Resident_Evil_4_leon_ashley.webp',
    overlayClass: 'red',
    color: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
  },
  {
    id: 'god-of-war',
    title: 'God of War',
    genre: 'Action Adventure',
    path: '/god-of-war',
    bgImage: 'https://sm.ign.com/ign_br/game/g/god-of-war/god-of-war-ragnarok_z48t.jpg',
    overlayClass: 'blue',
    color: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'RPG Open World',
    path: '/cyberpunk-2077',
    bgImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg',
    overlayClass: 'cyber',
    color: 'linear-gradient(135deg, #eab308 0%, #ec4899 100%)',
  },
]

// ── Dados das missões por jogo ──
export const MISSIONS_DATA = [
  {
    game: 'Resident Evil',
    color: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    missions: [
      { title: 'Sobrevivente Iniciante',     desc: 'Complete o jogo no modo Easy',             progress: 75  },
      { title: 'Caçador de Zumbis',          desc: 'Elimine 100 zumbis',                       progress: 45  },
      { title: 'Mestre da Sobrevivência',    desc: 'Complete o jogo sem usar kits médicos',     progress: 0   },
    ],
  },
  {
    game: 'God of War',
    color: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    missions: [
      { title: 'Guerreiro Nórdico',          desc: 'Derrote 50 inimigos',                      progress: 100 },
      { title: 'Coletor de Runas',           desc: 'Colete todas as runas em Midgard',          progress: 60  },
      { title: 'Deus da Guerra',             desc: 'Complete o jogo no modo God of War',        progress: 20  },
    ],
  },
  {
    game: 'Cyberpunk 2077',
    color: 'linear-gradient(135deg, #eab308 0%, #ec4899 100%)',
    missions: [
      { title: 'Explorador de Night City',   desc: 'Visite todos os distritos',                progress: 85  },
      { title: 'Netrunner',                  desc: 'Hackeie 50 sistemas',                       progress: 30  },
      { title: 'Lenda de Night City',        desc: 'Alcance Street Cred máximo',               progress: 10  },
    ],
  },
]

// ── Dados das conquistas por jogo ──
export const ACHIEVEMENTS_DATA = [
  {
    game: 'Resident Evil',
    color: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    achievements: [
      { title: 'Primeira Morte',    desc: 'Elimine seu primeiro zumbi',                   unlocked: true,  rarity: 'Comum'    },
      { title: 'Sobrevivente',      desc: 'Complete o jogo pela primeira vez',             unlocked: true,  rarity: 'Raro'     },
      { title: 'Exterminador',      desc: 'Elimine todos os chefes sem tomar dano',        unlocked: false, rarity: 'Épico'    },
    ],
  },
  {
    game: 'God of War',
    color: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    achievements: [
      { title: 'Pai e Filho',          desc: 'Complete a primeira missão',                 unlocked: true,  rarity: 'Comum'    },
      { title: 'Caçador de Valquírias',desc: 'Derrote todas as Valquírias',               unlocked: true,  rarity: 'Épico'    },
      { title: 'Verdadeiro Deus',      desc: 'Derrote Sigrun no modo mais difícil',       unlocked: false, rarity: 'Lendário' },
    ],
  },
  {
    game: 'Cyberpunk 2077',
    color: 'linear-gradient(135deg, #eab308 0%, #ec4899 100%)',
    achievements: [
      { title: 'Bem-vindo a Night City', desc: 'Complete o prólogo',                      unlocked: true,  rarity: 'Comum'    },
      { title: 'Street Cred 50',         desc: 'Alcance Street Cred nível 50',            unlocked: true,  rarity: 'Raro'     },
      { title: 'Lenda Viva',             desc: 'Obtenha todos os finais possíveis',       unlocked: false, rarity: 'Lendário' },
    ],
  },
]

// ── Dados dos cards de ofertas (seção Nuuvem) ──
export const DEALS = [
  {
    badge: '-15%',
    badgeColor: '#eab308',
    image: 'https://evilhazard.com.br/wp-content/uploads/2025/12/Resident_Evil_Requiem_-_Key_Art_Horizontaljpeg.jpg',
    name: 'Resident Evil 9 Requiem',
    priceOld: 'R$ 230,00',
    priceCurrent: 'R$ 195,50',
    link: 'https://www.nuuvem.com/br-pt/item/resident-evil-4-gold-edition',
    btnColor: '#10b981',
  },
  {
    badge: '-5%',
    badgeColor: '#3b82f6',
    image: 'https://cdn.dlcompare.com/game_tetiere/upload/gamecardimage/file/playstation-network-card-50-euros-file-1489dbec.jpg.webp',
    name: 'PlayStation Store R$ 100',
    priceOld: 'R$ 100,00',
    priceCurrent: 'R$ 95,00',
    link: 'https://www.nuuvem.com/br-pt/item/playstation-store-card-100',
    btnColor: '#3b82f6',
  },
  {
    badge: 'OFF',
    badgeColor: '#107c10',
    image: 'https://criticalhits.com.br/wp-content/uploads/2022/08/cfd88aaf-0093-49db-8a6f-a110fe92b768.jpg',
    name: 'Xbox R$ 50 Gift Card',
    priceOld: 'R$ 50,00',
    priceCurrent: 'R$ 47,50',
    link: 'https://www.nuuvem.com/br-pt/item/xbox-gift-card-50',
    btnColor: '#107c10',
  },
]
