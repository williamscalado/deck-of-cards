import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { cardUseCase } from "../../modules/cards/useCase";
import { userStateData } from "../../state";
import { IDataCardUser } from "../../types";
import { ContainerHeader, ContainerMenu, ContainerUser } from "./style";

function shuffle(array: any) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
export const Header = () => {
	const navigate = useNavigate();
	const [dataUser, setDataUser] = useRecoilState(userStateData);
	const handleNewCard = async () => {
		const result = await cardUseCase.getCards(dataUser.deck_id as string, 1);
		if (!result.cards[0]) return;
		if (!dataUser.cards) return;
		if (dataUser.cards?.length >= 8) {
			toast.error("Não é possível solicitar mais cartas");
			return;
		}
		const newData = [...(dataUser.cards as [IDataCardUser]), result.cards[0]];

		setDataUser({
			...dataUser,
			cards: newData as [IDataCardUser],
		});
	};
	const handleShuffle = () => {
		if (!dataUser.cards) return;
		const newData = shuffle([...dataUser.cards]);
		setDataUser({
			...dataUser,
			cards: newData,
		});
	};

	const handleExit = () => {
		setDataUser({});
		navigate("/");
	};
	return (
		<ContainerHeader>
			<img src="/image/logo.png" alt="Cecilia's Cards" />
			<ContainerMenu>
				<button onClick={handleShuffle}>Embaralha</button>
				<button onClick={handleNewCard}>Nova carta</button>
			</ContainerMenu>
			<ContainerUser>
				Olá, {dataUser.name}
				<button onClick={handleExit}>Sair</button>
			</ContainerUser>
		</ContainerHeader>
	);
};
