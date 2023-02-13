export interface ITuition{
  id: number,
  type: string,
  price: number,
  payment: number,
  status: string,
  subjects_id: number,
  student_id: number,
  created_at: Date ,
  updated_at: Date,
}