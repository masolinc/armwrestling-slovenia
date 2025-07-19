export interface ArmContact {
  phone?: string
  instagram?: string
  facebook?: string
  email?: string
  address?: string
}

export interface Armwrestler {
  id: number
  fullName: string
  birthYear?: number
  city?: string
  club?: string
  weightKg?: number
  weightKgRange?: string
  heightCm?: string
  weightClass?: string
  contact?: ArmContact
  image?: string
}
