import Skeleton from "react-loading-skeleton";
import { IDataCard } from "../../types";
import "react-loading-skeleton/dist/skeleton.css";
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
	loading?: boolean;
}

export const Card = ({ props, loading }: IPropsCard) => {
	return loading ? (
		<ContainerCard data-testid="skeleton">
			<Skeleton width={120} height={167} />
			<SummaryCard>
				<p>
					<Skeleton height={15} width={100} count={1} className={"center"} />
				</p>
				<Description>
					<Skeleton height={38} count={1} />
				</Description>
			</SummaryCard>
			<ContainerPoint>
				<Skeleton height={10} width={60} count={1} className="skeleton" />
				<Skeleton height={25} width={25} count={1} circle />
			</ContainerPoint>
		</ContainerCard>
	) : (
		<ContainerCard>
			<img src={props.image} alt={props.suit || ""} data-testid="img-card" />
			<SummaryCard>
				<p>
					{valeuCard(props.value as string)} de {nameCard(props.suit || "")}
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
