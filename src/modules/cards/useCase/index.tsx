import { fetchApi } from "../../../adapters/http/axios";

const getDeckId = async () => {
	try {
		const result = await fetchApi({
			url: "new/shuffle/?deck_count=1",
			method: "GET",
		});
		return result?.deck_id;
	} catch (error) {
		throw new Error("Encontramos um problema aos obter o baralho");
	}
};

const getCards = async (deckId: string, numberCard: number) => {
	try {
		if (!deckId) return;
		const result = await fetchApi({
			url: `/new/draw/?count=${numberCard}`,
			method: "GET",
		});
		const newData = [...result.cards];
		newData.map(
			(item) => (item.point = Math.round(Math.random() * (10 - 0) + 0))
		);
		result.cards = newData;
		return result;
	} catch (error) {
		throw new Error("Encontramos um problema aos obter o baralho");
	}
};

export const cardUseCase = {
	getDeckId,
	getCards,
};
