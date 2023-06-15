export interface Applications {
    id: number
    vacancyId: number
    name: string
    email: string
    companyName: string
    coverLetter: Buffer
    cv: Buffer
  }

  export interface NewApplication {
    vacancyId: number
    name: string
    email: string
    companyName: string
    coverLetter: Buffer
    cv: Buffer
  }