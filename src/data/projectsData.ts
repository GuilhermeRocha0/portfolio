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

// Petshop Da Carla
import petshopHome from '../assets/screenshots/petshop-da-carla/pet-home.jpg'
import petshopSignup from '../assets/screenshots/petshop-da-carla/pet-customer-signup.jpeg'
import petshopLogin from '../assets/screenshots/petshop-da-carla/pet-customer-login.jpeg'
import petshopPetsView from '../assets/screenshots/petshop-da-carla/pet-pets-view.jpg'
import petshopPetsCreate from '../assets/screenshots/petshop-da-carla/pet-pets-create.jpg'
import petshopScheduleView from '../assets/screenshots/petshop-da-carla/pet-schedule-view.jpg'
import petshopScheduleCreate from '../assets/screenshots/petshop-da-carla/pet-schedule-create.jpg'
import petshopProducts from '../assets/screenshots/petshop-da-carla/pet-products.jpg'
import petshopProduct from '../assets/screenshots/petshop-da-carla/pet-product.jpg'
import petshopReports from '../assets/screenshots/petshop-da-carla/pet-reports.jpeg'

// Life+ Web
import lifePlusWebHome from '../assets/screenshots/life-plus-web/life-plus-home.png'
import lifePlusWebSignup from '../assets/screenshots/life-plus-web/life-plus-signup.png'
import lifePlusWebLogin from '../assets/screenshots/life-plus-web/life-plus-login.png'
import lifePlusWebResetPassword from '../assets/screenshots/life-plus-web/life-plus-reset-password.png'
import lifePlusWebProfile from '../assets/screenshots/life-plus-web/life-plus-profile.png'
import lifePlusWebExamCreate from '../assets/screenshots/life-plus-web/life-plus-exam-create.png'
import lifePlusWebExamList from '../assets/screenshots/life-plus-web/life-plus-exam-list.png'
import lifePlusWebExamDetails from '../assets/screenshots/life-plus-web/life-plus-exam-details.png'
import lifePlusWebExamUpdate from '../assets/screenshots/life-plus-web/life-plus-exam-update.png'
import lifePlusWebMedicineCreate from '../assets/screenshots/life-plus-web/life-plus-medicine-create.png'
import lifePlusWebMedicineList from '../assets/screenshots/life-plus-web/life-plus-medicine-list.png'
import lifePlusWebMedicineDetails from '../assets/screenshots/life-plus-web/life-plus-medicine-details.png'
import lifePlusWebMedicineUpdate from '../assets/screenshots/life-plus-web/life-plus-medicine-update.png'
import lifePlusWebSettings from '../assets/screenshots/life-plus-mobile/life-plus-settings.png'

// Life+ Mobile
import lifePlusMobileHome01 from '../assets/screenshots/life-plus-mobile/life-plus-home-01.png'
import lifePlusMobileHome02 from '../assets/screenshots/life-plus-mobile/life-plus-home-02.png'
import lifePlusMobileHome03 from '../assets/screenshots/life-plus-mobile/life-plus-home-03.png'
import lifePlusMobileHome04 from '../assets/screenshots/life-plus-mobile/life-plus-home-04.png'
import lifePlusMobileSignup from '../assets/screenshots/life-plus-mobile/life-plus-signup.png'
import lifePlusMobileLogin from '../assets/screenshots/life-plus-mobile/life-plus-login.png'
import lifePlusMobileDashboard from '../assets/screenshots/life-plus-mobile/life-plus-dashboard.png'
import lifePlusMobileProfile from '../assets/screenshots/life-plus-mobile/life-plus-profile.png'
import lifePlusMobileExamCreate from '../assets/screenshots/life-plus-mobile/life-plus-exam-create.png'
import lifePlusMobileExamList from '../assets/screenshots/life-plus-mobile/life-plus-exam-list.png'
import lifePlusMobileExamDetails from '../assets/screenshots/life-plus-mobile/life-plus-exam-details.png'
import lifePlusMobileExamUpdate from '../assets/screenshots/life-plus-mobile/life-plus-exam-update.png'
import lifePlusMobileMedicineCreate from '../assets/screenshots/life-plus-mobile/life-plus-medicine-create.png'
import lifePlusMobileMedicineList from '../assets/screenshots/life-plus-mobile/life-plus-medicine-list.png'
import lifePlusMobileMedicineDetails from '../assets/screenshots/life-plus-mobile/life-plus-medicine-details.png'
import lifePlusMobileMedicineUpdate from '../assets/screenshots/life-plus-mobile/life-plus-medicine-update.png'
import lifePlusMobileMedicineNextDose from '../assets/screenshots/life-plus-mobile/life-plus-medicine-next-dose.png'
import lifePlusMobileSettings from '../assets/screenshots/life-plus-mobile/life-plus-settings.png'

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
      'Plataforma web de incentivo à leitura através da troca e empréstimo colaborativo de livros entre usuários.',
    longDescription:
      'O Buku é uma plataforma colaborativa desenvolvida com o propósito de incentivar o hábito da leitura e democratizar o acesso a livros. O sistema permite que leitores se conectem para realizar empréstimos e trocas de obras literárias de forma simples e intuitiva, promovendo a circulação de conhecimento e a comunidade leitora.',
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
      'Plataforma para conscientização e facilitação da doação de sangue, conectando doadores e hospitais.',
    longDescription:
      'O Horizon é uma solução web criada para incentivar e simplificar o processo de doação de sangue. A aplicação atua como uma ponte entre doadores voluntários e pontos de coleta/hospitais, fornecendo informações sobre o processo de doação, esclarecendo mitos, apresentando benefícios e facilitando o cadastro de doadores e instituições parceiras.',
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
    videos: ['https://www.youtube.com/embed/BY7YsHAX4zE?si=jbYg6nZAchHDnM88']
  },
  {
    id: 'petshop-da-carla',
    category: '3º Semestre',
    title: 'Petshop da Carla',
    description:
      'Sistema para petshop com cadastro de pets, agendamento de serviços e catálogo de e-commerce.',
    longDescription:
      'Aplicação fullstack desenvolvida para a gestão completa de um petshop. O sistema permite que clientes realizem o cadastro de seus pets, agendem serviços essenciais (como banho, tosa e corte de unhas) e explorem um e-commerce integrado para a compra de produtos e acessórios. Conta com uma API RESTful dedicada no backend e relatórios gerenciais.',
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
    preview: petshopHome,
    images: [
      petshopHome,
      petshopSignup,
      petshopLogin,
      petshopPetsView,
      petshopPetsCreate,
      petshopScheduleView,
      petshopScheduleCreate,
      petshopProducts,
      petshopProduct,
      petshopReports
    ],
    videos: ['https://www.youtube.com/embed/Q9N18BhBG3E?si=mPIpBXXh4a2ngOxR']
  },
  {
    id: 'life-plus-web',
    category: '4º Semestre',
    title: 'Life + (Versão Web)',
    description:
      'Plataforma web para gestão da saúde, centralizando receitas, exames e lembretes de medicamentos.',
    longDescription:
      'O Life+ é uma plataforma voltada à organização pessoal na área da saúde. A versão web permite que os usuários cadastrem e organizem seus medicamentos com horários de lembrete, além de centralizar em um só lugar histórico de exames e receitas médicas, facilitando o acompanhamento de tratamentos contínuos.',
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
    preview: lifePlusWebHome,
    images: [
      lifePlusWebHome,
      lifePlusWebSignup,
      lifePlusWebLogin,
      lifePlusWebResetPassword,
      lifePlusWebProfile,
      lifePlusWebExamCreate,
      lifePlusWebExamList,
      lifePlusWebExamDetails,
      lifePlusWebExamUpdate,
      lifePlusWebMedicineCreate,
      lifePlusWebMedicineList,
      lifePlusWebMedicineDetails,
      lifePlusWebMedicineUpdate,
      lifePlusWebSettings
    ],
    videos: []
  },
  {
    id: 'life-plus-mobile',
    category: '5º Semestre',
    title: 'Life + (Mobile)',
    description:
      'Aplicativo mobile para controle de rotina de medicamentos, notificações e organização de exames.',
    longDescription:
      'Evolução do ecossistema Life+, trazendo uma experiência mobile nativa para acesso rápido em dispositivos móveis. O aplicativo auxilia o usuário no dia a dia com lembretes visuais de rotina de medicamentos, consulta rápida a receitas cadastradas e armazenamento prático de exames médicos diretamente no smartphone.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    githubLinks: [
      {
        label: 'Repositório API',
        url: 'https://github.com/GuilhermeRocha0/life-plus-api'
      },
      {
        label: 'Repositório Mobile',
        url: 'https://github.com/GuilhermeRocha0/life-plus-mobile'
      }
    ],
    preview: lifePlusMobileHome01,
    images: [
      lifePlusMobileHome01,
      lifePlusMobileHome02,
      lifePlusMobileHome03,
      lifePlusMobileHome04,
      lifePlusMobileSignup,
      lifePlusMobileLogin,
      lifePlusMobileDashboard,
      lifePlusMobileProfile,
      lifePlusMobileExamCreate,
      lifePlusMobileExamList,
      lifePlusMobileExamDetails,
      lifePlusMobileExamUpdate,
      lifePlusMobileMedicineCreate,
      lifePlusMobileMedicineList,
      lifePlusMobileMedicineDetails,
      lifePlusMobileMedicineUpdate,
      lifePlusMobileMedicineNextDose,
      lifePlusMobileSettings
    ],
    videos: ['https://www.youtube.com/embed/Fiw-3dZI_UY?si=MoW9b1cUb1xLwkDm']
  }
]
