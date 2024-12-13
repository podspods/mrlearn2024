export enum Project {
  IRISATIONS = 1,
  IRISATIONS_ADM,
  BLOG
 }

export enum PageId {

  HOME = 1, 
  DESIGN,
  RESTORATION,
  WORKSHOP,
  SERVICES,
  NEWS,
  CONTACT,
  ABOUT,
  CONDITION_USE,
  GENERAL_TERMS,
  FOOTER

}



export function  projectId(project: Project) {
  return (project *100)   + 1000 ; 
}


export function  getPageId(project: Project,pageId : PageId) {
return projectId(project) + pageId ; 
}