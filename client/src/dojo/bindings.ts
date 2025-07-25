import type { SchemaType as ISchemaType } from "@dojoengine/sdk";

import { CairoCustomEnum } from 'starknet';

// Type definition for `golem_runner::models::golem::Golem` struct
export interface Golem {
	id: number;
	player_id: string;
	name: string;
	description: string;
	price: number;
	rarity: RarityEnum;
	is_starter: boolean;
	is_unlocked: boolean;
}

// Type definition for `golem_runner::models::golem::GolemValue` struct
export interface GolemValue {
	name: string;
	description: string;
	price: number;
	rarity: RarityEnum;
	is_starter: boolean;
	is_unlocked: boolean;
}

// Type definition for `golem_runner::models::mission::Mission` struct
export interface Mission {
	id: number;
	player_id: string;
	target_coins: number;
	required_world: WorldTypeEnum;
	required_golem: GolemTypeEnum;
	description: string;
	status: MissionStatusEnum;
	created_at: number;
}

// Type definition for `golem_runner::models::mission::MissionValue` struct
export interface MissionValue {
	target_coins: number;
	required_world: WorldTypeEnum;
	required_golem: GolemTypeEnum;
	description: string;
	status: MissionStatusEnum;
	created_at: number;
}

// Type definition for `golem_runner::models::player::Player` struct
export interface Player {
	address: string;
	coins: number;
	total_points: number;
	daily_streak: number;
	last_active_day: number;
	level: number;
	experience: number;
	creation_day: number;
}

// Type definition for `golem_runner::models::player::PlayerValue` struct
export interface PlayerValue {
	coins: number;
	total_points: number;
	daily_streak: number;
	last_active_day: number;
	level: number;
	experience: number;
	creation_day: number;
}

// Type definition for `golem_runner::models::ranking::Ranking` struct
export interface Ranking {
	world_id: number;
	player: string;
	points: number;
}

// Type definition for `golem_runner::models::ranking::RankingValue` struct
export interface RankingValue {
	points: number;
}

// Type definition for `golem_runner::models::world::World` struct
export interface World {
	id: number;
	player_id: string;
	name: string;
	description: string;
	price: number;
	is_starter: boolean;
	is_unlocked: boolean;
}

// Type definition for `golem_runner::models::world::WorldValue` struct
export interface WorldValue {
	name: string;
	description: string;
	price: number;
	is_starter: boolean;
	is_unlocked: boolean;
}

// Type definition for `achievement::events::index::TrophyCreation` struct
export interface TrophyCreation {
	id: number;
	hidden: boolean;
	index: number;
	points: number;
	start: number;
	end: number;
	group: number;
	icon: number;
	title: number;
	description: string;
	tasks: Array<Task>;
	data: string;
}

// Type definition for `achievement::events::index::TrophyCreationValue` struct
export interface TrophyCreationValue {
	hidden: boolean;
	index: number;
	points: number;
	start: number;
	end: number;
	group: number;
	icon: number;
	title: number;
	description: string;
	tasks: Array<Task>;
	data: string;
}

// Type definition for `achievement::events::index::TrophyProgression` struct
export interface TrophyProgression {
	player_id: number;
	task_id: number;
	count: number;
	time: number;
}

// Type definition for `achievement::events::index::TrophyProgressionValue` struct
export interface TrophyProgressionValue {
	count: number;
	time: number;
}

// Type definition for `achievement::types::index::Task` struct
export interface Task {
	id: number;
	total: number;
	description: string;
}

// Type definition for `golem_runner::types::golem::GolemType` enum
export type GolemType = {
	Fire: string;
	Ice: string;
	Stone: string;
}
export type GolemTypeEnum = CairoCustomEnum;

// Type definition for `golem_runner::types::mission_status::MissionStatus` enum
export type MissionStatus = {
	Pending: string;
	Completed: string;
	Claimed: string;
}
export type MissionStatusEnum = CairoCustomEnum;

// Type definition for `golem_runner::types::rarity::Rarity` enum
export type Rarity = {
	Basic: string;
	Common: string;
	Uncommon: string;
	Rare: string;
	VeryRare: string;
	Epic: string;
	Unique: string;
}
export type RarityEnum = CairoCustomEnum;

// Type definition for `golem_runner::types::world::WorldType` enum
export type WorldType = {
	Forest: string;
	Volcano: string;
	Glacier: string;
}
export type WorldTypeEnum = CairoCustomEnum;

export interface SchemaType extends ISchemaType {
	golem_runner: {
		Golem: Golem,
		GolemValue: GolemValue,
		Mission: Mission,
		MissionValue: MissionValue,
		Player: Player,
		PlayerValue: PlayerValue,
		Ranking: Ranking,
		RankingValue: RankingValue,
		World: World,
		WorldValue: WorldValue,
	},
	achievement: {
		TrophyCreation: TrophyCreation,
		TrophyCreationValue: TrophyCreationValue,
		TrophyProgression: TrophyProgression,
		TrophyProgressionValue: TrophyProgressionValue,
		Task: Task,
	},
}
export const schema: SchemaType = {
	golem_runner: {
		Golem: {
		id: 0,
			player_id: "",
			name: "",
			description: "",
			price: 0,
		rarity: new CairoCustomEnum({ 
			Basic: "Basic",
			Common: "Common",
			Uncommon: "Uncommon",
			Rare: "Rare",
			VeryRare: "VeryRare",
			Epic: "Epic",
			Unique: "Unique", }),
			is_starter: false,
			is_unlocked: false,
		},
		GolemValue: {
			name: "",
			description: "",
			price: 0,
		rarity: new CairoCustomEnum({ 
			Basic: "Basic",
			Common: "Common",
			Uncommon: "Uncommon",
			Rare: "Rare",
			VeryRare: "VeryRare",
			Epic: "Epic",
			Unique: "Unique", }),
			is_starter: false,
			is_unlocked: false,
		},
		Mission: {
		id: 0,
			player_id: "",
			target_coins: 0,
		required_world: new CairoCustomEnum({ 
				Forest: "Forest",
				Volcano: "Volcano",
				Glacier: "Glacier", }),
		required_golem: new CairoCustomEnum({ 
				Fire: "Fire",
				Ice: "Ice",
				Stone: "Stone", }),
		description: "",
		status: new CairoCustomEnum({ 
				Pending: "Pending",
				Completed: "Completed", 
				Claimed: "Claimed",}),
			created_at: 0,
		},
		MissionValue: {
			target_coins: 0,
		required_world: new CairoCustomEnum({ 
				Forest: "Forest",
				Volcano: "Volcano",
				Glacier: "Glacier", }),
		required_golem: new CairoCustomEnum({ 
				Fire: "Fire",
				Ice: "Ice",
				Stone: "Stone", }),
		description: "",
		status: new CairoCustomEnum({ 
				Pending: "Pending",
				Completed: "Completed", 
				Claimed: "Claimed",}),
			created_at: 0,
		},
		Player: {
			address: "",
			coins: 0,
			total_points: 0,
			daily_streak: 0,
			last_active_day: 0,
			level: 0,
			experience: 0,
			creation_day: 0,
		},
		PlayerValue: {
			coins: 0,
			total_points: 0,
			daily_streak: 0,
			last_active_day: 0,
			level: 0,
			experience: 0,
			creation_day: 0,
		},
		Ranking: {
		world_id: 0,
			player: "",
			points: 0,
		},
		RankingValue: {
			points: 0,
		},
		World: {
		id: 0,
			player_id: "",
			name: "",
			description: "",
			price: 0,
			is_starter: false,
			is_unlocked: false,
		},
		WorldValue: {
			name: "",
			description: "",
			price: 0,
			is_starter: false,
			is_unlocked: false,
		},
	},
		achievement: {
			TrophyCreation: {
				id: 0,
				hidden: false,
				index: 0,
				points: 0,
				start: 0,
				end: 0,
				group: 0,
				icon: 0,
				title: 0,
				description: "",
				tasks: [{ id: 0, total: 0, description: "", }],
				data: "",
			},
			TrophyCreationValue: {
				hidden: false,
				index: 0,
				points: 0,
				start: 0,
				end: 0,
				group: 0,
				icon: 0,
				title: 0,
				description: "",
				tasks: [{ id: 0, total: 0, description: "", }],
				data: "",
			},
			TrophyProgression: {
				player_id: 0,
				task_id: 0,
				count: 0,
				time: 0,
			},
			TrophyProgressionValue: {
				count: 0,
				time: 0,
			},
			Task: {
				id: 0,
				total: 0,
				description: "",
			},
		}
};
export enum ModelsMapping {
	Golem = 'golem_runner-Golem',
	GolemValue = 'golem_runner-GolemValue',
	Mission = 'golem_runner-Mission',
	MissionValue = 'golem_runner-MissionValue',
	Player = 'golem_runner-Player',
	PlayerValue = 'golem_runner-PlayerValue',
	Ranking = 'golem_runner-Ranking',
	RankingValue = 'golem_runner-RankingValue',
	World = 'golem_runner-World',
	WorldValue = 'golem_runner-WorldValue',
	GolemType = 'golem_runner-GolemType',
	MissionStatus = 'golem_runner-MissionStatus',
	Rarity = 'golem_runner-Rarity',
	WorldType = 'golem_runner-WorldType',
	TrophyCreation = 'achievement-TrophyCreation',
	TrophyCreationValue = 'achievement-TrophyCreationValue',
	TrophyProgression = 'achievement-TrophyProgression',
	TrophyProgressionValue = 'achievement-TrophyProgressionValue',
	Task = 'achievement-Task',
}