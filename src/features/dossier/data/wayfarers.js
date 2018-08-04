import BeliverAvatar from './avatars/believer.jpg';
import BeliverStory from './stories/believer';

import MadMenFoxStory from './stories/madmenfox';
import DrFikusStory from './stories/doctor-fikus';

export default [
  {
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
    name: 'Doctor Ficus',
    age: 24,
    specs: [ 'escort', 'headhunting' ],
    system: 'Kellog',
    planet: 'QuarterDeck',
    ships: [ 'Mustang Alpha' ],
    character: 'Спокойный, рассудительный.',
    story: DrFikusStory,
  },
];
