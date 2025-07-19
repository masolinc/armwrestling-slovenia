export interface ArmContact {
  phone?: string
  instagram?: string
  facebook?: string
  email?: string
}

export interface Armwrestler {
  id: number
  fullName: string
  birthYear?: number
  city?: string
  club?: string
  weightKg?: number
  weightKgRange?: string
  weightClass?: string
  birthYearApproximate?: boolean
  contact?: ArmContact
  image?: string
}
