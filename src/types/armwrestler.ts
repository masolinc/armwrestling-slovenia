export interface ArmContact {
  phone?: string
  instagram?: string
  facebook?: string
  email?: string
}

export interface Armwrestler {
  id: string
  fullName: string
  age?: number
  city?: string
  club?: string
  weightClass?: string
  contact?: ArmContact
  image?: string
}