import { DiReact, DiNodejs, DiMysql } from 'react-icons/di'
import {
  SiJava,
  SiFirebase,
  SiGit,
  SiFlutter,
  SiPostgresql,
  SiPostman,
  SiDocker,
  SiAmazonaws,
  SiAdobe,
  SiMicrosoft,
  SiMongodb,
  SiPython,
  SiGo,
  SiC,
  SiGitlab,
} from 'react-icons/si'

export const Skills = [
  {
    slug: 'reactjs',
    Component: DiReact,
    title: 'ReactJS',
    Description: () => <>I work creating microfrontends with Nextjs and Vite</>,
  },
  {
    slug: 'java',
    Component: SiJava,
    title: 'Java',
    Description: () => <>I can code in Java. But I mostly use it for CRUDs</>,
  },
  {
    slug: 'node',
    Component: DiNodejs,
    title: 'NodeJS',
    Description: () => (
      <>I`ve written dozens of Rest APIs in NodeJS for various purposes.</>
    ),
  },
  {
    slug: 'mysql',
    Component: DiMysql,
    title: 'Mysql',
    Description: () => (
      <>
        I have already developed database tables and hundreds of commands for
        querys.
      </>
    ),
  },
  {
    slug: 'firebase',
    Component: SiFirebase,
    title: 'Firebase',
    Description: () => (
      <>
        I have used Firebase for auth, hosting, database & analytics in my apps.
      </>
    ),
  },
  {
    slug: 'git',
    Component: SiGit,
    title: 'Git',
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
]

export const OtherSkills = [
  {
    slug: 'flutter',
    Component: SiFlutter,
    title: 'Flutter',
  },
  {
    slug: 'docker',
    Component: SiDocker,
    title: 'Docker',
  },
  {
    slug: 'aws',
    Component: SiAmazonaws,
    title: 'AWS',
  },
  {
    slug: 'postgresql',
    Component: SiPostgresql,
    title: 'PostgreSQL',
  },
  {
    slug: 'postman',
    Component: SiPostman,
    title: 'Postman',
  },
  {
    slug: 'adobe',
    Component: SiAdobe,
    title: 'Adobe',
  },
  {
    slug: 'microsoft',
    Component: SiMicrosoft,
    title: 'Microsoft',
  },
  {
    slug: 'mongodb',
    Component: SiMongodb,
    title: 'MongoDB',
  },
  {
    slug: 'c',
    Component: SiC,
    title: 'C & C++',
  },
  {
    slug: 'python',
    Component: SiPython,
    title: 'Python',
  },
  {
    slug: 'go',
    Component: SiGo,
    title: 'GO',
  },
  {
    slug: 'gitlab',
    Component: SiGitlab,
    title: 'Gitlab',
  },
]
