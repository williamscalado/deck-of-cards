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

	@media (max-width: 700px) {
		display: flex;
		width: 90vw;
		height: 3.125rem;
		border-radius: 0.5rem;
		font-size: 1rem;
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
		font-size: 0.9rem;
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
