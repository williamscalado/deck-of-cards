import { METHODS } from "http";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import { useRecoilCallback, useRecoilState } from "recoil";
import { fetchApi } from "../../../adapters/http/axios";
import { Card } from "../../../components/Card";
import { Header } from "../../../components/Header";
import { userStateData } from "../../../state";
import { cardUseCase } from "../useCase";
import { ContainerCards } from "./style";

export const Cards = () => {
	const [userData, setUserData] = useRecoilState(userStateData);
	const [loading, setLoading] = useState(false);

	const startDeck = useCallback(async () => {
		try {
			setLoading(true);
			const deckId = await cardUseCase.getDeckId();
			if (!deckId) throw "Error ao processar o baralho";
			if (!userData.deck_id)
				setUserData({
					...userData,
					deck_id: deckId,
				});

			const firstFiveCards = await cardUseCase.getCards(
				userData.deck_id as string,
				5
			);

			if (!firstFiveCards) return;

			if (!userData.cards)
				setUserData({
					...userData,
					cards: firstFiveCards.cards,
				});
		} catch (err: Error | any) {
			toast.error("Não conseguimos solicitar suas cartas, tente novamente");
		} finally {
			setLoading(false);
		}
	}, [setUserData, userData]);

	useEffect(() => {
		startDeck();
	}, [startDeck]);

	return (
		<React.StrictMode>
			<Header />

			<ContainerCards>
				{userData.cards ? (
					userData.cards?.map((item, index) => {
						return <Card key={index} props={item} loading={loading} />;
					})
				) : (
					<span>
						<img
							src="image/loading.svg"
							width={"100"}
							alt="Carregando cartas"
							data-testid="img-loading"
						/>
					</span>
				)}
			</ContainerCards>
		</React.StrictMode>
	);
};
