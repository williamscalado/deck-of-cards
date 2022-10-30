export interface IForm {
	name?: string;
}

export interface IDataCard {
	code: string;
	image: string;
	value: string;
	suit: string;
}

export interface IDataCardResult {
	success: boolean;
	deck_id: string;
	cards: [IDataCard];
	remaining: number;
}

interface IDataCardUser extends IDataCard {
	points: number;
}

export interface IUserData {
	name?: string;
	deck_id?: string;
	cards?: [IDataCardUser];
}
