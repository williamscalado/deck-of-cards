import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { cardUseCase } from "../../modules/cards/useCase";
import { userStateData } from "../../state";
import { IDataCardUser } from "../../types";
import { ContainerHeader, ContainerMenu, ContainerUser } from "./style";

const shuffle = (array: any) => {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
};

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
				<button onClick={handleShuffle} data-testid="shuffles-card">
					Embaralha
				</button>
				<button onClick={handleNewCard} data-testid="new-card">
					Puxar carta
				</button>
				<button onClick={handleExit} data-testid="btn-test-exit">
					Sair
				</button>
			</ContainerMenu>
			<ContainerUser>Olá, {dataUser.name}</ContainerUser>
		</ContainerHeader>
	);
};
