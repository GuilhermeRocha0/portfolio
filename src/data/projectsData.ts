// Buku Media
import bukuHome from '../assets/screenshots/buku/buku-home.png'
import bukuSignUp from '../assets/screenshots/buku/buku-signup.png'
import bukuLogIn from '../assets/screenshots/buku/buku-login.png'

// Horizon Media
import horizonHome1 from '../assets/screenshots/horizon/horizon-home-01.png'
import horizonHome2 from '../assets/screenshots/horizon/horizon-home-02.png'
import horizonHome3 from '../assets/screenshots/horizon/horizon-home-03.png'
import horizonMyths1 from '../assets/screenshots/horizon/horizon-myths-01.png'
import horizonMyths2 from '../assets/screenshots/horizon/horizon-myths-02.png'
import horizonMyths3 from '../assets/screenshots/horizon/horizon-myths-03.png'
import horizonBenefits from '../assets/screenshots/horizon/horizon-benefits.png'
import horizonContact from '../assets/screenshots/horizon/horizon-contact.png'
import horizonDonorLogin from '../assets/screenshots/horizon/horizon-donor-login.png'
import horizonDonorSignup from '../assets/screenshots/horizon/horizon-donor-signup.png'
import horizonHospitalLogin from '../assets/screenshots/horizon/horizon-hospital-login.png'
import horizonHospitalSignup from '../assets/screenshots/horizon/horizon-hospital-signup.png'

export interface Project {
  id: string
  category: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubLinks: { label: string; url: string }[]
  deployUrl?: string
  preview?: string
  images: string[]
  videos?: string[]
}

export const projectsData: Project[] = [
  {
    id: 'buku',
    category: '1º Semestre',
    title: 'Buku',
    description:
      'Projeto interdisciplinar desenvolvido no 1º semestre da FATEC Zona Leste.',
    longDescription:
      'Aplicação desenvolvida como projeto integrador do primeiro semestre, aplicando os fundamentos iniciais de lógica de programação, estruturação e desenvolvimento web. ',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubLinks: [
      {
        label: 'Repositório GitHub',
        url: 'https://github.com/GuilhermeRocha0/1Buku.com'
      }
    ],
    preview: bukuHome,
    images: [bukuHome, bukuSignUp, bukuLogIn],
    videos: []
  },
  {
    id: 'horizon',
    category: '2º Semestre',
    title: 'Horizon',
    description:
      'Projeto interdisciplinar desenvolvido no 2º semestre da FATEC Zona Leste.',
    longDescription:
      'Sistema desenvolvido durante o segundo semestre, aprofundando conceitos de desenvolvimento web, design responsivo e estruturação de interfaces.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubLinks: [
      {
        label: 'Repositório GitHub',
        url: 'https://github.com/GuilhermeRocha0/Horizon'
      }
    ],
    preview: horizonHome1,
    images: [
      horizonHome1,
      horizonHome2,
      horizonHome3,
      horizonMyths1,
      horizonMyths2,
      horizonMyths3,
      horizonBenefits,
      horizonContact,
      horizonDonorLogin,
      horizonDonorSignup,
      horizonHospitalLogin,
      horizonHospitalSignup
    ],
    videos: []
  },
  {
    id: 'petshop-da-carla',
    category: '3º Semestre',
    title: 'Petshop da Carla',
    description:
      'Sistema completo para gestão de petshop com API Backend e Interface Web.',
    longDescription:
      'Projeto do 3º semestre focado na criação de uma solução fullstack, contando com uma API robusta para gerenciamento de dados e uma aplicação web integrada.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    githubLinks: [
      {
        label: 'Repositório API',
        url: 'https://github.com/GuilhermeRocha0/petshop_api'
      },
      {
        label: 'Repositório Web',
        url: 'https://github.com/GuilhermeRocha0/petshop_web'
      }
    ],
    preview: '',
    images: [],
    videos: []
  },
  {
    id: 'life-plus-web',
    category: '4º Semestre',
    title: 'Life + (Versão Web)',
    description:
      'Plataforma web voltada à área da saúde desenvolvida no 4º semestre.',
    longDescription:
      'Sistema web focado em melhorias de processos e acompanhamento, estruturado com arquitetura cliente-servidor dividida entre API e Front-end.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL'],
    githubLinks: [
      {
        label: 'Repositório API',
        url: 'https://github.com/GuilhermeRocha0/life-plus-api'
      },
      {
        label: 'Repositório Web',
        url: 'https://github.com/GuilhermeRocha0/life-plus-web'
      }
    ],
    preview: '',
    images: [],
    videos: []
  },
  {
    id: 'life-plus-mobile',
    category: '5º Semestre',
    title: 'Life + (Mobile)',
    description:
      'Continuação do Life + com refatoração da API e introdução do aplicativo Mobile.',
    longDescription:
      'Evolução do projeto do semestre anterior, trazendo melhorias estruturais na API e expandindo o ecossistema com o desenvolvimento de uma versão mobile multiplataforma.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    githubLinks: [
      {
        label: 'Repositório API',
        url: 'https://github.com/GuilhermeRocha0/life-plus-api'
      },
      {
        label: 'Repositório Mobile',
        url: 'https://github.com/GuilhermeRocha0/life-plus-web'
      }
    ],
    preview: '',
    images: [],
    videos: []
  }
]
