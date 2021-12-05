import { CardContainer } from "./styles"
interface CardProps { 
    text: string
    index: number
} 
const Card = ({ text }: CardProps) => { 
    return <CardContainer>{text}</CardContainer> 
}

export default Card;