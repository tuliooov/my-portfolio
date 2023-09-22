import { TbBrandNextjs } from 'react-icons/tb'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { BsDatabaseCheck } from 'react-icons/bs'
import { DiReact, DiMysql, DiNodejs } from 'react-icons/di'
import {
  SiFirebase,
  SiGit,
  SiPostgresql,
  SiPostman,
  SiDocker,
  SiAmazonaws,
  SiMongodb,
  SiGitlab,
  SiGithub,
  SiPrisma,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export const Skills = [
  {
    slug: 'reactjs',
    Component: DiReact,
    title: 'ReactJS',
    Description: () => <>I work creating microfrontends with Nextjs and Vite</>,
  },
  {
    slug: 'node',
    Component: DiNodejs,
    title: 'NodeJS',
    Description: () => (
      <>I've written dozens of Rest APIs in NodeJS for various purposes.</>
    ),
  },
  {
    slug: 'java',
    Component: FaJava,
    title: 'Java',
    Description: () => <>I can code in Java. But I mostly use it for CRUDs</>,
  },
  {
    slug: 'database',
    Component: BsDatabaseCheck,
    title: 'DataBase',
    Description: () => (
      <>
        I have already developed database tables and hundreds of commands for
        querys.
      </>
    ),
  },
  {
    slug: 'clound',
    Component: AiOutlineCloudServer,
    title: 'Clound',
    Description: () => (
      <>
        I used cloud services for authentication, hosting, database and
        analytics in my applications on Azure, Aws and Firebase.
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
    slug: 'nextjs',
    Component: TbBrandNextjs,
    title: 'NextJS',
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
    slug: 'firebase',
    Component: SiFirebase,
    title: 'Firebase',
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
    slug: 'mongodb',
    Component: SiMongodb,
    title: 'MongoDB',
  },
  {
    slug: 'mysql',
    Component: DiMysql,
    title: 'MySQL',
  },
  {
    slug: 'gitlab',
    Component: SiGitlab,
    title: 'Gitlab',
  },
  {
    slug: 'github',
    Component: SiGithub,
    title: 'Github',
  },
  {
    slug: 'prisma',
    Component: SiPrisma,
    title: 'Prisma',
  },
]
