// import request from 'superagent'
// import { PeopleModel } from '../Models/people'
// import { HomeworldModel } from '../Models/homeworld'
// import { StarshipModel } from '../Models/starship'

// export async function getPeople(peopleID: number): Promise<PeopleModel> {
//   const response = await request.get('https://swapi.dev/api/people/' + peopleID)
//   console.log(response)
//   return response.body
// }
// export async function getHomeworld(homeworldURL: string): Promise<HomeworldModel> {
//   const response = await request.get(homeworldURL)
//   console.log(response)
//   return response.body
// }
// export async function getStarship(starshipURL: string): Promise<StarshipModel> {
//   const response = await request.get(starshipURL)
//   console.log(response)
//   return response.body
// }