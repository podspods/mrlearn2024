
export const api = {

    section: {
      create: '/api/irisations/pageSection/create/',
      readByPage: (sectionId: number) => `/api/irisations/pageSection/readByPage/${sectionId}`,
      readById: (sectionId: string) => `/api/irisations/pageSection/readById/${sectionId}`,
      readAll: '/api/irisations/pageSection/read/',
      update: (sectionId: string) => `/api/irisations/pageSection/update/${sectionId}`,
      delete: (sectionId: string) => `/api/irisations/pageSection/delete/${sectionId}`,
      reorg: '/api/irisations/pageSection/reorg/'
    },
    carousel :{
      create: '/api/irisations/carousel/create/',
      readByPage: (slideId: number) => `/api/irisations/carousel/readByPage/${slideId}`,
      readById: (slideId: string) => `/api/irisations/carousel/readById/${slideId}`,
      update: (slideId: string) => `/api/irisations/carousel/update/${slideId}`,
      delete: (slideId: string) => `/api/irisations/carousel/delete/${slideId}`,
      reorg: '/api/irisations/carousel/reorg/'

    },
};



// front end route

export const route = {
  account: {
    login: '/account/login',
    logout: '/account/logout',
    signup: '/account/signup',
    profile: '/account/profile',
    verifyEmail: '/account/verifyEmail',
    activate: '/account/activate'
  },
  private: {
    home: '/home-private'
  },
  irisations: {
    home: '/',
    design: '/design',
    restoration: '/restoration',
    workshop: '/workshop',
    services: '/services',
    news: '/news',
    contact: '/contact',
    conditionOfUse: '/condition-of-use',
    generalTerms: '/general-terms',
    admin: '/irisations-admin/'
  },
  irisationsAdmin: {
    pageSetup: '/irisations-admin/page-card/',
    pageSectionUpdate: (id: string) => `/irisations-admin/page-card/update/${id}`,
    pageSectionDelete: (id: string) => `/irisations-admin/page-card/delete/${id}`,
    pageSectionCreate:  `/irisations-admin/page-card/create/`,
    newsCreate :  '/irisations-admin/news/create/',
    newsUpdate: (id: string) => `/irisations-admin/new/update/${id}`,
    newsDelete: (id: string) => `/irisations-admin/new/delete/${id}`,
  },

};

export const external = {
  facebook: 'https://www.facebook.com/Irisations/timeline/',
  instagram: 'https://www.instagram.com/irisations/',
  pinterest: 'https://www.pinterest.com/irisationsparis/'
};
