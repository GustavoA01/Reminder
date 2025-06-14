import { Trash } from "phosphor-react";
import { CardContainer } from "./styles";

type CardProps = {
  description: string;
  onRemove: () => void;
}

export function Card({ description, onRemove }: CardProps) {
  return (
    <CardContainer>
      <span>{description}</span>
      <Trash onClick={onRemove} width={24} height={24} />
    </CardContainer>
  );
}
