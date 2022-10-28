import styled from "styled-components";

export const ContainerLogin = styled("div")`
	margin: auto;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const ContainerForm = styled("div")`
	width: 280px;
	height: 200px;
	border-radius: 0.8rem 0.8rem 3rem 3rem;
	padding: 1.1rem;
	background: var(--bs-green);
	box-shadow: 2px 3px 20px #000;
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
		background-color: var(--bs-white);
		box-sizing: border-box;
		height: 50px;
		padding-left: 2.5rem;
	}
	span {
		height: 1.5rem;
		width: 1.5rem;
		padding: 4px;
		color: #b4b4b4;
		position: absolute;
		box-sizing: border-box;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
	}
`;

export const Title = styled("div")`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;
	color: var(--white);
`;
export const ContainerButton = styled("div")`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;

	button {
		position: relative;
		top: 40px;
		background: #f2cb05;
		margin: 1.5rem 0 1rem;
		border: 0px;
		width: 140px;
		height: 3.2rem;
		font-weight: 400;
		border-radius: 5rem;
		font-size: 1rem;
		color: var(--bs-white);
		transition: filter 0.3s;
		box-shadow: 2px 3px 1px #a95809;
		text-shadow: 1px 1px 2px #a95809;

		&:hover {
			filter: brightness(0.9);
		}

		&:disabled {
			opacity: 0.4;
		}
	}
`;
