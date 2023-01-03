const BAMA = [
  { label: 'Master', value: 'master' },
  { label: 'Bachelor', value: 'bachelor' },
]

const MMT = { label: 'MMT', value: 'mmt' }
const MMA = { label: 'MMA', value: 'mma' }
const HCI = { label: 'HCI', value: 'hci' }

const COURSE_OF_STUDIES = [MMT, MMA, HCI]

const MAIN_DEPARMENT_MMT = [
  { label: 'Web', value: 'web' },
  { label: 'Game', value: 'game' },
]

const MAIN_DEPARMENT_MMA = [
  { label: 'Audio', value: 'audio' },
  { label: 'Film', value: 'film' },
  { label: 'Animation', value: 'animation' },
  { label: 'Media Design', value: 'media+design' },
  { label: 'Management and Producing', value: 'management+and+producing' },
]
const MAIN_DEPARMENT_HCI = [
  { label: 'Industry Projects', value: 'industry+projects' },
  { label: 'Research Projects', value: 'research+projects' },
  { label: 'Design Projects', value: 'design+projects' },
]

const MAIN_DEPARMENT = [
  ...MAIN_DEPARMENT_MMA,
  ...MAIN_DEPARMENT_MMT,
  ...MAIN_DEPARMENT_HCI,
]

export {
  BAMA,
  MMT,
  MMA,
  HCI,
  COURSE_OF_STUDIES,
  MAIN_DEPARMENT,
  MAIN_DEPARMENT_MMT,
  MAIN_DEPARMENT_MMA,
  MAIN_DEPARMENT_HCI,
}
