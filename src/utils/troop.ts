enum TroopLevel {
    T1 = 'T1',
    T2 = 'T2',
    T3 = 'T3',
    T4 = 'T4',
    T5 = 'T5',
    T6 = 'T6',
    T7 = 'T7',
    T8 = 'T8',
    T9 = 'T9',
    T10 = 'T10',
}

enum TroopType {
    Infantry = 'Infantry',
    Lancer = 'Lancer',
    Marksman = 'Marksman',
}

interface TroopCost {
    meat: number;
    wood: number;
    coal: number;
    iron: number;
}

interface Troop {
    level: TroopLevel;
    type: TroopType;
    cost: TroopCost;
    time: number;
    points: number;
}

const troopData: Troop[] = [
    { level: TroopLevel.T1, type: TroopType.Infantry, cost: { meat: 36, wood: 27, coal: 7, iron: 2 }, time: 12, points: 90 },
    { level: TroopLevel.T2, type: TroopType.Infantry, cost: { meat: 58, wood: 44, coal: 10, iron: 3 }, time: 17, points: 120 },
    { level: TroopLevel.T3, type: TroopType.Infantry, cost: { meat: 92, wood: 69, coal: 17, iron: 4 }, time: 24, points: 180 },
    { level: TroopLevel.T4, type: TroopType.Infantry, cost: { meat: 120, wood: 90, coal: 21, iron: 5 }, time: 32, points: 265 },
    { level: TroopLevel.T5, type: TroopType.Infantry, cost: { meat: 156, wood: 117, coal: 27, iron: 6 }, time: 44, points: 385 },
    { level: TroopLevel.T6, type: TroopType.Infantry, cost: { meat: 186, wood: 140, coal: 33, iron: 7 }, time: 60, points: 595 },
    { level: TroopLevel.T7, type: TroopType.Infantry, cost: { meat: 279, wood: 210, coal: 49, iron: 11 }, time: 83, points: 830 },
    { level: TroopLevel.T8, type: TroopType.Infantry, cost: { meat: 558, wood: 419, coal: 98, iron: 21 }, time: 113, points: 1130 },
    { level: TroopLevel.T9, type: TroopType.Infantry, cost: { meat: 1394, wood: 1046, coal: 244, iron: 51 }, time: 131, points: 1485 },
    { level: TroopLevel.T10, type: TroopType.Infantry, cost: { meat: 2788, wood: 2091, coal: 488, iron: 102 }, time: 152, points: 1960 },
    { level: TroopLevel.T1, type: TroopType.Marksman, cost: { meat: 23, wood: 34, coal: 6, iron: 2 }, time: 12, points: 90 },
    { level: TroopLevel.T2, type: TroopType.Marksman, cost: { meat: 36, wood: 54, coal: 9, iron: 4 }, time: 17, points: 120 },
    { level: TroopLevel.T3, type: TroopType.Marksman, cost: { meat: 58, wood: 86, coal: 15, iron: 5 }, time: 24, points: 180 },
    { level: TroopLevel.T4, type: TroopType.Marksman, cost: { meat: 75, wood: 111, coal: 19, iron: 6 }, time: 32, points: 265 },
    { level: TroopLevel.T5, type: TroopType.Marksman, cost: { meat: 97, wood: 144, coal: 24, iron: 8 }, time: 44, points: 385 },
    { level: TroopLevel.T6, type: TroopType.Marksman, cost: { meat: 117, wood: 173, coal: 29, iron: 10 }, time: 60, points: 595 },
    { level: TroopLevel.T7, type: TroopType.Marksman, cost: { meat: 175, wood: 258, coal: 44, iron: 14 }, time: 83, points: 830 },
    { level: TroopLevel.T8, type: TroopType.Marksman, cost: { meat: 349, wood: 516, coal: 87, iron: 28 }, time: 113, points: 1130 },
    { level: TroopLevel.T9, type: TroopType.Marksman, cost: { meat: 872, wood: 1290, coal: 217, iron: 70 }, time: 131, points: 1485 },
    { level: TroopLevel.T10, type: TroopType.Marksman, cost: { meat: 1743, wood: 2579, coal: 433, iron: 140 }, time: 152, points: 1960 },
    { level: TroopLevel.T1, type: TroopType.Lancer, cost: { meat: 32, wood: 30, coal: 7, iron: 2 }, time: 12, points: 90 },
    { level: TroopLevel.T2, type: TroopType.Lancer, cost: { meat: 51, wood: 48, coal: 10, iron: 3 }, time: 17, points: 120 },
    { level: TroopLevel.T3, type: TroopType.Lancer, cost: { meat: 81, wood: 76, coal: 16, iron: 4 }, time: 24, points: 180 },
    { level: TroopLevel.T4, type: TroopType.Lancer, cost: { meat: 105, wood: 99, coal: 21, iron: 5 }, time: 32, points: 265 },
    { level: TroopLevel.T5, type: TroopType.Lancer, cost: { meat: 136, wood: 129, coal: 27, iron: 7 }, time: 44, points: 385 },
    { level: TroopLevel.T6, type: TroopType.Lancer, cost: { meat: 163, wood: 154, coal: 32, iron: 8 }, time: 60, points: 595 },
    { level: TroopLevel.T7, type: TroopType.Lancer, cost: { meat: 244, wood: 231, coal: 48, iron: 11 }, time: 83, points: 830 },
    { level: TroopLevel.T8, type: TroopType.Lancer, cost: { meat: 488, wood: 461, coal: 95, iron: 22 }, time: 113, points: 1130 },
    { level: TroopLevel.T9, type: TroopType.Lancer, cost: { meat: 1220, wood: 1151, coal: 237, iron: 55 }, time: 131, points: 1485 },
    { level: TroopLevel.T10, type: TroopType.Lancer, cost: { meat: 2440, wood: 2301, coal: 474, iron: 109 }, time: 152, points: 1960 },
];

export { TroopLevel, TroopType, troopData };
export type { Troop, TroopCost };
