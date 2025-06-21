import { format } from "date-fns"
import { useDateValidation } from "../hooks/useDateValidation"

describe('date should be after today date',()=>{
  const {validateDate} = useDateValidation()

  it('should return true if date is in the future',()=>{
    const valid = validateDate('2222-02-12')
    expect(valid).toBe(true)
  })

  it('should return true when date is in the actual date',()=>{
    const todayDate = format(new Date(), "dd/MM/yyyy")
    const isValid = validateDate(todayDate)
    expect(isValid).toBe(true)
  })

  it('should return false when date is in the past',()=>{
    const isValid = validateDate('2025-06-20')
    expect(isValid).toBe(false)
  })
})