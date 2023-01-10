export interface Character {
  id:string,
  name:string,
  status: string,
  species:string,
  type:string,
  gender:string,
  origin: {
    name:string,
    url:string
  },
  location: {
    name:string,
    url:string
  },
  image:string,
  episode:string[],
  url:string,
  bestsentences:string[],
  created: string
}
