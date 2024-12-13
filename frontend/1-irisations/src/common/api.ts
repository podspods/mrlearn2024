export const api = {
  section: {
    create: (host: string) => `${host}/section/`,
    readByPage: (host: string, pageId: number) =>
      `${host}/section/page/${pageId}`,
    readById: (host: string, sectionId: string) =>
      `${host}/section/${sectionId}`,
    update: (host: string, sectionId: string) =>
      `${host}/section/${sectionId}`,
    delete: (host: string, sectionId: string) =>
      `${host}/section/${sectionId}`,
    reorg: (host: string, pageId: number) => `${host}/section/reorg/${pageId}`
  },
  carousel: {
    create: (host: string) => `${host}/slide/`,
    readByPage: (host: string, pageId: number) =>
      `${host}/slide/page/${pageId}`,
    readById: (host: string, slideId: string) =>
      `${host}/slide/${slideId}`,
    update: (host: string, slideId: string) =>
      `${host}/slide/${slideId}`,
    delete: (host: string, slideId: string) =>
      `${host}/slide/${slideId}`,
    reorg: (host: string, pageId: number) => `${host}/slide/reorg/${pageId}`
  }
};

// front end route

export const route = {
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
};

export const external = {
  facebook: 'https://www.facebook.com/Irisations/timeline/',
  instagram: 'https://www.instagram.com/irisations/',
  pinterest: 'https://www.pinterest.com/irisationsparis/'
};
