import styled from "styled-components";

export const ContainerLogin = styled("div")`
	margin: auto;
	width: 98vw;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		margin-bottom: 5rem;
		width: 18.75rem;
	}
`;

export const ContainerForm = styled("form")`
	width: 17.5rem;
	height: 12.5rem;
	border-radius: 0.8rem 0.8rem 3rem 3rem;
	padding: 1.1rem;
	background: var(--white);
	box-shadow: 0.125rem 0.1875rem 1.25rem var(--black);
`;

export const ContainerInput = styled("div")`
	width: 100%;
	top: 1.2rem;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;
	position: relative;
	input {
		width: 100%;
		padding: 1rem 1rem;
		margin-top: 0.75rem;
		margin-bottom: 0.75rem;
		border-radius: 1rem;
		border: 0;
		color: var(--bs-gray-dark);
		background-color: var(--bs-gray);
		box-sizing: border-box;
		height: 3.125rem;
		padding-left: 2.5rem;
	}
	span {
		height: 1.5rem;
		width: 1.5rem;
		padding: 0.25rem;
		color: #b4b4b4;
		position: absolute;
		box-sizing: border-box;
		top: 50%;
		left: 0.625rem;
		transform: translateY(-50%);
	}
`;

export const Title = styled("div")`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;
	color: var(--red-800);
`;

export const ErrorMessage = styled("div")`
	position: absolute;
	margin-left: 1rem;
	margin-top: 0.8rem;
	font-weight: 400;
	font-size: 0.6rem;
	color: var(--red-600);
`;

export const ContainerButton = styled("div")`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;

	button {
		position: relative;
		top: 2.5rem;
		background: var(--red-600);
		margin: 1.5rem 0 1rem;
		border: 0rem;
		width: 10rem;
		height: 3.2rem;
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
`;
