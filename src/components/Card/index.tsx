import { IDataCard } from "../../types";
enum nameCard {
	"DIAMONDS" = "OURO",
	"SPADES" = "ESPADAS",
	"HEARTS" = "COPAS",
	"CLUBS" = "PAUS",
}
enum preName {
	DEUCE = "DUQUE",
	JACK = "VALETE",
	QUEEN = "RAINHA",
	KING = "REI",
	ACE = "ACE",
}

export const Card = (props: IDataCard) => {
	return <img src={props.image} alt={props.suit} />;
};
