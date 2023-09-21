import { MdOutlineLanguage } from 'react-icons/md'

export const Languages = [
  {
    slug: 'english',
    Component: MdOutlineLanguage,
    title: 'English',
    Description: () => <>Intermediate</>,
  },
  {
    slug: 'portuguese',
    Component: MdOutlineLanguage,
    title: 'Portuguese',
    Description: () => <>Native language</>,
  },
]
