import styled from "styled-components";

export const ContainerCard = styled("div")`
	border-radius: 0.625rem;
	padding: 0.3125rem;
	background-color: #fff;
	margin: 1rem;
	transition: box-shadow 0.5s;
	width: 10rem;
	display: grid;
	align-items: center;
	justify-content: center;

	img {
		margin: auto;
		width: 7.5rem;
		height: 168px;
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;
	}
	@media (max-width: 700px) {
		display: grid;
		width: 80vw;
		align-items: center;
		justify-content: center;
	}
`;

export const SummaryCard = styled("div")`
	font-size: 0.7rem;
	margin-top: 0.625rem;
	width: 100%;
	height: 3.125rem;
	font-weight: 400;
	p {
		display: flex;
		width: 100%;
		font-size: 0.7rem;
		justify-content: center;
		align-items: center;
	}
`;

export const Description = styled("div")`
	margin: auto;
	word-break: inherit;
	word-wrap: break-word;
	height: 1.25rem;
	width: 95%;
	align-content: center;
	font-family: sans-serif;
	margin-top: 5px;
	font-size: 0.5rem;
	font-weight: 400;
	color: #aaa;

	@media (max-width: 700px) {
		width: 80%;
	}
`;

export const ContainerPoint = styled("div")`
	word-break: inherit;
	display: flex;
	margin: auto;
	word-wrap: break-word;
	height: 2.5rem;
	width: 6.25rem;
	font-size: 0.5rem;
	margin-top: 5px;
	justify-content: space-between;
	align-items: center;
`;

export const PointDisplay = styled("div")`
	background-color: rgba(0, 0, 0, 0.8);
	width: 1.5em;
	height: 1.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 0%;
	border-radius: 100%;
	color: var(--white);
	font-weight: 400;
	font-size: 1rem;
`;
