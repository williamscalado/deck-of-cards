import { atom } from "recoil";
import { IUserData } from "../types";

export const userStateData = atom<IUserData>({
	key: "userData",
	default: {},
});
