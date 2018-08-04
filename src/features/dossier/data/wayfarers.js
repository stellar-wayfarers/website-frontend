import BeliverAvatar from './avatars/believer.jpg';
import BeliverStory from './stories/believer';

import MadMenFoxStory from './stories/madmenfox';
import DrFikusStory from './stories/doctor-fikus';
import PrizrakStory from './stories/prizrak';

export default [
  {
    id: 'believer',
    name: 'Believer',
    age: 28,
    specs: [
      'headhunting',
      'intelligence',
      'planets',
      'gas-resources-search',
      'civilizations',
      'reparing',
      'trade-and-cargo',
    ],
    avatar: BeliverAvatar,
    system: 'Bremen',
    planet: 'Rytif',
    ships: [ 'AvengerTitan' ],
    character: 'Спокойный, терпеливый, мягкий.',
    story: BeliverStory,
  },
  {
    id: 'madmenfox',
    name: 'MadMenFox',
    age: 22,
    specs: [ 'headhunting' ],
    system: 'Bremen',
    planet: 'Rytif',
    ships: [ 'AegisRedeemer' ],
    character:
      'Вспыльчивый, неуравновешенный, периодические вспышки ярости (но признан годным для охоты).',
    story: MadMenFoxStory,
  },
  {
    id: 'doctor-ficus',
    name: 'Doctor Ficus',
    age: 24,
    specs: [ 'escort', 'headhunting' ],
    system: 'Kellog',
    planet: 'QuarterDeck',
    ships: [ 'Mustang Alpha' ],
    character: 'Спокойный, рассудительный.',
    story: DrFikusStory,
  },
  {
    id: 'prizrak',
    name: 'Prizrak',
    age: 24,
    specs: [
      'intelligence',
      'headhunting',
      'capturing-ships',
      'shipping-sectors',
      'capturing-stations',
      'subversion',
    ],
    system: 'Sol',
    planet: 'Earth',
    ships: [ 'Mustang Alpha' ],
    character: 'Уравновешенный. Расчётливый. Проявляет признаки паранойи. Крайне злопамятный.',
    story: PrizrakStory,
  },
];
