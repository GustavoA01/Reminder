import { useForm } from "react-hook-form"
import { TFormData } from "../../types"
import { useCard } from "../../hooks/useCard"
import { Button, InputText } from "./styles"

export const CardForm = () => {
  const { register, handleSubmit } = useForm<TFormData>()
  const { createCard } = useCard()  

  return (
    <form onSubmit={handleSubmit(createCard)}>
      <InputText
        type="text"
        {...register("description")}
        required
        placeholder="Nome do lembrete"
      />
      <InputText
        type="date"
        {...register("date")}
        required
        placeholder="Data do lembrete"
      />

      <Button type="submit">Criar</Button>
    </form>
  )
}
