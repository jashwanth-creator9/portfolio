// Edit this file to change the photographer's details, descriptions, dates, locations,
// and photos. Each series accepts up to 10 images. Add or remove series by editing the array.

export const photographer = {
  name: 'Julian Vale',
  shortName: 'Julian Vale',
  roles: 'Photographer | Visual Storyteller | Creative Artist',
  tagline: 'I capture moments, emotions and stories.',
  email: 'hello@julianvale.com',
  instagram: {
    handle: 'julianvale.photo',
    url: 'https://www.instagram.com/julianvale.photo',
  },
  whatsapp: {
    number: '15551234567',
    url: 'https://wa.me/15551234567',
  },
  heroImage: {
    src: 'https://images.pexels.com/photos/26050836/pexels-photo-26050836.jpeg?auto=compress&cs=tinysrgb&w=2400',
    alt: 'Dramatic cliffside with silhouetted seabirds at twilight',
  },
  portrait: {
    src: 'https://images.pexels.com/photos/19648598/pexels-photo-19648598.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Black and white portrait of the photographer holding a camera',
  },
  about: {
    biography:
      'Julian is a self-taught photographer who has spent the last twelve years wandering between cities, mountains and quiet rooms in search of the moments most people walk past. His work sits between documentary and portrait, always looking for the emotion underneath the scene.',
    journey:
      'It started with a secondhand film camera and a notebook full of questions. After years of assignments that never quite felt like his own, he began making personal series, slowly, one place at a time. Today his work is shown in small exhibitions and private commissions for people who value honesty over polish.',
    philosophy:
      'I believe a photograph is a decision about what to leave out. I try to wait for light to do the talking, to keep my frame open enough for the viewer to step inside, and to trust the small gestures that tell the real story.',
    interests: ['Night & City Light', 'Landscape & Silence', 'Portraiture', 'Botanical Detail', 'Street & Motion'],
    style: 'Natural light, restrained colour, and long pauses between frames.',
  },
};

export const series = [
  {
    id: 'after-dark',
    number: '01',
    title: 'After Dark',
    shortDescription: 'Neon reflections, wet pavement and the city after the last train.',
    description:
      'Every city has a second life after midnight. These frames follow the glow of shop signs, the hush of empty alleys and the reflections that appear on wet streets once the crowds disappear. I shot most of these handheld, letting long exposures blur the traffic into quiet ribbons of light.',
    date: 'October 2024',
    location: 'Tokyo, Japan & Valencia, Spain',
    cover: {
      src: 'https://images.pexels.com/photos/18462155/pexels-photo-18462155.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'City street at night with reflective water and illuminated buildings',
    },
    images: [
      { src: 'https://images.pexels.com/photos/18462155/pexels-photo-18462155.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'City street at night with reflective water and illuminated buildings' },
      { src: 'https://images.pexels.com/photos/26732100/pexels-photo-26732100.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Dark city alley lit by neon and a street lamp' },
      { src: 'https://images.pexels.com/photos/30641513/pexels-photo-30641513.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Night street view with silhouettes and urban lights' },
      { src: 'https://images.pexels.com/photos/533787/pexels-photo-533787.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Lively illuminated city alley at night' },
      { src: 'https://images.pexels.com/photos/16061367/pexels-photo-16061367.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Moody urban street with prominent neon signs' },
      { src: 'https://images.pexels.com/photos/11213185/pexels-photo-11213185.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Blurred urban street with city lights on wet pavement' },
      { src: 'https://images.pexels.com/photos/20278552/pexels-photo-20278552.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Narrow illuminated street at night with neon lights' },
      { src: 'https://images.pexels.com/photos/13710064/pexels-photo-13710064.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'People enjoying city nightlife under coloured lights' },
      { src: 'https://images.pexels.com/photos/29183516/pexels-photo-29183516.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Long exposure of traffic lights and lit buildings at night' },
      { src: 'https://images.pexels.com/photos/26732102/pexels-photo-26732102.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Dark atmospheric urban street captured at night' },
    ],
  },
  {
    id: 'still-horizons',
    number: '02',
    title: 'Still Horizons',
    shortDescription: 'Mist-soaked ridgelines waiting for the sun to arrive.',
    description:
      'Early mornings in the mountains are almost always quiet. I spent several autumns walking up before sunrise, waiting for fog to settle in the valleys and for the first light to touch the ridgelines. This series is about patience, and about how small a person looks when the land is this large.',
    date: 'September 2024',
    location: 'Bieszczady Mountains, Poland',
    cover: {
      src: 'https://images.pexels.com/photos/10050598/pexels-photo-10050598.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Misty mountain ranges at sunrise',
    },
    images: [
      { src: 'https://images.pexels.com/photos/10050598/pexels-photo-10050598.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Misty mountain ranges at sunrise' },
      { src: 'https://images.pexels.com/photos/10747729/pexels-photo-10747729.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Misty mountains at dawn' },
      { src: 'https://images.pexels.com/photos/13534013/pexels-photo-13534013.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Misty mountains and pine forests at sunrise' },
      { src: 'https://images.pexels.com/photos/9348873/pexels-photo-9348873.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Fog rolling over a forest at sunrise' },
      { src: 'https://images.pexels.com/photos/10615055/pexels-photo-10615055.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Layered misty mountain ranges in soft sunrise glow' },
      { src: 'https://images.pexels.com/photos/10387111/pexels-photo-10387111.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Layered hills and forest silhouettes in mist' },
      { src: 'https://images.pexels.com/photos/37156676/pexels-photo-37156676.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Autumn forest landscape with mist and morning light' },
      { src: 'https://images.pexels.com/photos/12779580/pexels-photo-12779580.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Tranquil mountain scene with lush greenery and mist' },
      { src: 'https://images.pexels.com/photos/18536593/pexels-photo-18536593.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Mountain village at sunrise surrounded by green hills and mist' },
    ],
  },
  {
    id: 'window-light',
    number: '03',
    title: 'Window Light',
    shortDescription: 'Portraits shaped by a single window and a long silence.',
    description:
      'I rarely bring more than one light into a room. These portraits were made beside windows, with blinds and passing shadows doing most of the work. The sitters were given time to settle, and the best frames came after the posing stopped.',
    date: 'January 2025',
    location: 'Lisbon, Portugal & Jakarta, Indonesia',
    cover: {
      src: 'https://images.pexels.com/photos/16086066/pexels-photo-16086066.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Dramatic portrait of a woman in black with soft lighting',
    },
    images: [
      { src: 'https://images.pexels.com/photos/16086066/pexels-photo-16086066.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Dramatic portrait of a woman in black with soft lighting' },
      { src: 'https://images.pexels.com/photos/16086065/pexels-photo-16086065.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Fashion portrait of a woman softly lit by a window' },
      { src: 'https://images.pexels.com/photos/34622355/pexels-photo-34622355.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Moody portrait of a woman in a dimly lit urban setting' },
      { src: 'https://images.pexels.com/photos/30844411/pexels-photo-30844411.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Woman in profile in soft window light' },
      { src: 'https://images.pexels.com/photos/35478383/pexels-photo-35478383.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Contemplative woman in dramatic lighting' },
      { src: 'https://images.pexels.com/photos/29894792/pexels-photo-29894792.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Woman standing in dramatic indoor light with shadows' },
      { src: 'https://images.pexels.com/photos/39204616/pexels-photo-39204616.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Woman enjoying tranquility in dramatic window light' },
      { src: 'https://images.pexels.com/photos/2221292/pexels-photo-2221292.png?auto=compress&cs=tinysrgb&w=2000', alt: 'Side profile of a woman with shadow patterns on her face' },
      { src: 'https://images.pexels.com/photos/39206657/pexels-photo-39206657.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Young woman lit by window blind shadows' },
      { src: 'https://images.pexels.com/photos/29400881/pexels-photo-29400881.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Black and white portrait of a woman with dramatic shadows' },
    ],
  },
  {
    id: 'dew-and-petals',
    number: '04',
    title: 'Dew & Petals',
    shortDescription: 'Close studies of blooms, caught just after the rain.',
    description:
      'Macro work asks for the same patience as landscape. I followed these flowers through their mornings, waiting for dew to gather on each petal before the light turned harsh. The aim was not botanical accuracy but the texture of a moment that lasts only a few hours.',
    date: 'May 2025',
    location: 'Botanical gardens, Istanbul, Turkey',
    cover: {
      src: 'https://images.pexels.com/photos/7692445/pexels-photo-7692445.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Vivid yellow flowers with dewdrops',
    },
    images: [
      { src: 'https://images.pexels.com/photos/7692445/pexels-photo-7692445.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Vivid yellow flowers with dewdrops' },
      { src: 'https://images.pexels.com/photos/865866/pexels-photo-865866.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Delicate flower petal with a single dew drop' },
      { src: 'https://images.pexels.com/photos/37804611/pexels-photo-37804611.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Pink chrysanthemums adorned with raindrops' },
      { src: 'https://images.pexels.com/photos/18248999/pexels-photo-18248999.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Pink dahlia petals with fresh dew drops' },
      { src: 'https://images.pexels.com/photos/37160466/pexels-photo-37160466.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Macro shot of dew drops on a purple petal' },
      { src: 'https://images.pexels.com/photos/32038551/pexels-photo-32038551.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Orange tulip with dewdrops' },
      { src: 'https://images.pexels.com/photos/774238/pexels-photo-774238.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Dew-covered flower petals close-up' },
      { src: 'https://images.pexels.com/photos/9702967/pexels-photo-9702967.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Tiger lily with dew droplets' },
      { src: 'https://images.pexels.com/photos/34486080/pexels-photo-34486080.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Red flower petal with dew drops' },
      { src: 'https://images.pexels.com/photos/27168247/pexels-photo-27168247.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Purple hibiscus flower with dew drops on petals' },
    ],
  },
  {
    id: 'passing-through',
    number: '05',
    title: 'Passing Through',
    shortDescription: 'Strangers in motion, blurred into the rhythm of the street.',
    description:
      'Slow shutter speeds turn a busy street into something closer to music. In this series I stood still on corners and let people pass through the frame, keeping the buildings sharp while the crowd dissolved into motion. Some of the most honest moments happen when no one is looking.',
    date: 'March 2025',
    location: 'Vienna, Austria & Mexico City, Mexico',
    cover: {
      src: 'https://images.pexels.com/photos/2668722/pexels-photo-2668722.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Dynamic street view with motion blur of people walking',
    },
    images: [
      { src: 'https://images.pexels.com/photos/2668722/pexels-photo-2668722.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Dynamic street view with motion blur of people walking' },
      { src: 'https://images.pexels.com/photos/34232350/pexels-photo-34232350.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Busy street with blurred pedestrians' },
      { src: 'https://images.pexels.com/photos/13456353/pexels-photo-13456353.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Black and white street scene with motion blur and mural' },
      { src: 'https://images.pexels.com/photos/34232347/pexels-photo-34232347.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Street scene with people in motion blur' },
      { src: 'https://images.pexels.com/photos/16212108/pexels-photo-16212108.png?auto=compress&cs=tinysrgb&w=2000', alt: 'Blurred motion of people past ornate architecture' },
      { src: 'https://images.pexels.com/photos/17306003/pexels-photo-17306003.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Woman walking with a motion blur effect' },
      { src: 'https://images.pexels.com/photos/266046/pexels-photo-266046.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Night street scene with people and cars in motion blur' },
      { src: 'https://images.pexels.com/photos/29716667/pexels-photo-29716667.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Black and white image of people walking on a city street' },
      { src: 'https://images.pexels.com/photos/34141720/pexels-photo-34141720.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Pedestrian street with blurred motion of people walking' },
      { src: 'https://images.pexels.com/photos/23506513/pexels-photo-23506513.jpeg?auto=compress&cs=tinysrgb&w=2000', alt: 'Blurred people walking past a door in a busy street' },
    ],
  },
];
