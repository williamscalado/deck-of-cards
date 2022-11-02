import styled from "styled-components";

export const ContainerHeader = styled("div")`
	margin: auto;
	width: 80vw;
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		width: 12.5rem;
		padding: 1rem;
	}

	@media (max-width: 700px) {
		width: 95vw;
		display: grid;
		justify-content: grid;

		img {
			margin: auto;
			width: 9.375rem;
			padding: 1rem;
		}
	}
`;

export const ContainerUser = styled("div")`
	display: flex;
	align-items: center;
	justify-content: right;
	color: var(--white);
	border-radius: 1rem;
	padding: 0.2rem;

	font-weight: 400;

	button {
		background: var(--red-600);
		padding: 0.2rem 1rem;
		margin-left: 1rem;
		border: 0rem;
		font-weight: 700;
		border-radius: 99rem;
		font-size: 1rem;
		color: var(--bs-white);
		transition: filter 0.3s;
		box-shadow: 0.125rem 0.1875rem 0.0625rem var(--red-800);
		text-shadow: 0.0625rem 0.0625rem 0.125rem var(--red-800);

		&:hover {
			filter: brightness(0.9);
		}

		&:disabled {
			opacity: 0.4;
		}
	}

	@media (max-width: 700px) {
		display: flex;
		width: 90vw;
		height: 3.125rem;
		justify-content: space-between;
		border-radius: 0.5rem;
		font-size: 0.7rem;

		img {
			width: 150px;
			padding: 1rem;
		}
	}
`;

export const ContainerMenu = styled("div")`
	display: flex;
	align-items: center;
	justify-content: right;
	color: var(--white);
	border-radius: 1rem;
	padding: 0.2rem;
	font-weight: 400;

	@media (max-width: 700px) {
		justify-content: center;
	}

	button {
		background: var(--red-600);
		box-shadow: 0.125rem 0.1875rem 0.0625rem var(--bs-dark);
		padding: 0.2rem 1rem;
		margin-left: 1rem;
		border: 0rem;
		font-weight: 400;
		height: 35px;
		border-radius: 1rem;
		font-size: 1rem;
		color: var(--bs-white);
		transition: background 0.3s;

		&:hover {
			background: var(--red-800);
		}

		&:disabled {
			opacity: 0.4;
		}
	}
`;
