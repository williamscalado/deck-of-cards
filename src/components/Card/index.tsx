import { IDataCard } from "../../types";
import {
	ContainerCard,
	ContainerPoint,
	Description,
	PointDisplay,
	SummaryCard,
} from "./style";

const valeuCard = (value: string) => {
	let nameDisplay: any = [];
	nameDisplay["DEUCE"] = "Duque";
	nameDisplay["JACK"] = "Valete";
	nameDisplay["QUEEN"] = "Rainha";
	nameDisplay["KING"] = "Rei";
	nameDisplay["ACE"] = "ACE";
	return nameDisplay[value] ? nameDisplay[value] : value;
};

const nameCard = (name: string) => {
	let nameDisplay: any = [];
	nameDisplay["DIAMONDS"] = "OURO";
	nameDisplay["SPADES"] = "ESPADAS";
	nameDisplay["HEARTS"] = "COPAS";
	nameDisplay["CLUBS"] = "PAUS";
	return nameDisplay[name];
};
interface IPropsCard {
	props: IDataCard;
}

export const Card = ({ props }: IPropsCard) => {
	if (!props.suit) props.suit = "";
	return (
		<ContainerCard key={props?.suit}>
			<img src={props.image} alt={props.suit} />
			<SummaryCard>
				<p>
					{valeuCard(props.value as string)} de {nameCard(props.suit)}
				</p>
				<Description>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been
				</Description>
			</SummaryCard>
			<ContainerPoint>
				Ponto(s)
				<PointDisplay>{props.point}</PointDisplay>
			</ContainerPoint>
		</ContainerCard>
	);
};
