import styled from "styled-components";

export const ContainerCard = styled("div")`
	border-radius: 10px;
	padding: 5px;
	background-color: #fff;
	margin: 1rem;
	transition: box-shadow 0.5s;

	img {
		width: 7.5rem;
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;
	}
`;

export const SummaryCard = styled("div")`
	font-size: 0.7rem;
	margin-top: 10px;
	width: 100%;
	height: 50px;
	font-weight: 400;
	p {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const Description = styled("div")`
	word-break: inherit;
	word-wrap: break-word;
	height: 20px;

	width: 120px;
	margin-top: 5px;
	font-size: 0.4rem;
	color: #aaa;
`;

export const ContainerPoint = styled("div")`
	word-break: inherit;
	display: flex;
	margin: auto;
	word-wrap: break-word;
	height: 40px;
	width: 100px;
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
