import {
	atom,
	AtomEffect,
	GetRecoilValue,
	RecoilRootProps,
	SetRecoilState,
} from "recoil";
import { IDataCardUser, IUserData } from "../types";
interface IPropsRecoil {
	setSelf: any;
	onSet: any;
}

const localStorageEffect =
	(key: string) =>
	({ setSelf, onSet }: IPropsRecoil) => {
		const savedValue = localStorage.getItem(key);
		if (savedValue != null) {
			setSelf(JSON.parse(savedValue));
		}

		onSet((newValue: IUserData, _: any, isReset: boolean) => {
			isReset
				? localStorage.removeItem(key)
				: localStorage.setItem(key, JSON.stringify(newValue));
		});
	};

export const userStateData = atom<IUserData>({
	key: "userData",
	default: {},
	effects: [localStorageEffect("data")],
});
