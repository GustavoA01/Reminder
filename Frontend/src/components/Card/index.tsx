import { Trash } from "phosphor-react";
import { CardContainer } from "./styles";

type CardProps = {
  name: string;
  onRemove: () => void;
}

export function Card({ name, onRemove }: CardProps) {
  return (
    <CardContainer>
      <span>{name}</span>
      <Trash onClick={onRemove} width={24} height={24} />
    </CardContainer>
  );
}
