interface Duration {
  years: number
  months: number
  days: number
}

export interface Employee {
  id: number
  firstName: string
  lastName: string
  hireDate: string
  phone: string
  photo: string
  address: string
  department: string
  isActive: boolean
  formattedHireDate: string
  hireDuration: Duration
}
