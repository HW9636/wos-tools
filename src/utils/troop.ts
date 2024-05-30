import { parseReadableNumber } from "@/components/Number";
import { TroopUpgrade } from "@/components/TroopInput";
import { OutputValue } from "@/components/TroopOutput";

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

interface TroopData {
    cost: TroopCost;
    time: number;
    points: number;
}

interface Troop extends TroopData {
    level: TroopLevel;
    type: TroopType;
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

interface TroopRatios {
    infantry: number;
    lancer: number;
    marksman: number;
}

const troopTypes: TroopType[] = [TroopType.Infantry, TroopType.Lancer, TroopType.Marksman];
type TroopAmount = [number, number, number];

const calculateRatio = (amount: number, ratios: TroopRatios): number[] => {
    const getTroopAmount = (type: TroopType) => {
        switch (type) {
            case TroopType.Infantry:
                return ratios.infantry;
            case TroopType.Lancer:
                return ratios.lancer;
            case TroopType.Marksman:
                return ratios.marksman;
        }
    };

    let remaining = amount;
    return [0, 0, 0].map((_, i) => {
        if (i === 2) {
            return remaining;
        }

        const troopAmount = Math.min(Math.ceil(amount * getTroopAmount(troopTypes[i]) / 100), remaining);
        remaining -= troopAmount;
        return troopAmount;
    });
}

const calculateTroopDifference = (from: TroopData, to: TroopData): TroopData => {
    return {
        cost: {
            meat: to.cost.meat - from.cost.meat,
            wood: to.cost.wood - from.cost.wood,
            coal: to.cost.coal - from.cost.coal,
            iron: to.cost.iron - from.cost.iron,
        },
        time: to.time - from.time,
        points: to.points - from.points,
    };
};

const getTroopsForLevel = (level: TroopLevel): Troop[] => {
    return troopData.filter(t => t.level === level);
};

type CalculatorOutputStore = {
    meat: number;
    wood: number;
    coal: number;
    iron: number;
    time: number;
    infantry: number;
    lancer: number;
    marksman: number;
};

class Calculator {
    private targetTroops: Troop[];
    private upgrades: TroopUpgrade[];
    private output: CalculatorOutputStore = { meat: 0, wood: 0, coal: 0, iron: 0, time: 0, infantry: 0, lancer: 0, marksman: 0 };

    public constructor(targetLevel: TroopLevel, upgrades: TroopUpgrade[]) {
        this.targetTroops = getTroopsForLevel(targetLevel);
        this.upgrades = upgrades;
    }

    public UpgradeAll(): boolean {
        if (this.upgrades.some(t => !t) || this.upgrades.length === 0)
            return false;


        for (const upgrade of this.upgrades) {
            const from = getTroopsForLevel(upgrade.from);
            const differences = from.map((t, i) => calculateTroopDifference(t!, this.targetTroops[i]));

            const troopAmounts = [
                parseReadableNumber(upgrade.maxInfantry),
                parseReadableNumber(upgrade.maxLancer),
                parseReadableNumber(upgrade.maxMarksman),
            ];
            if (troopAmounts.some(isNaN))
                return false;

            this.output.meat += troopAmounts.reduce((acc, amount, i) => acc + differences[i].cost.meat * amount, 0);
            this.output.wood += troopAmounts.reduce((acc, amount, i) => acc + differences[i].cost.wood * amount, 0);
            this.output.coal += troopAmounts.reduce((acc, amount, i) => acc + differences[i].cost.coal * amount, 0);
            this.output.iron += troopAmounts.reduce((acc, amount, i) => acc + differences[i].cost.iron * amount, 0);
            this.output.time += troopAmounts.reduce((acc, amount, i) => acc + differences[i].time * amount, 0);
            this.output.infantry += troopAmounts[0];
            this.output.lancer += troopAmounts[1];
            this.output.marksman += troopAmounts[2];
        }

        return true;
    }

    public ConsumeNeededUpgrades(start: number, target: number, conversion: (acc: number, troop: Troop, amount: number) => { acc: number, remaining: number }): { remaining: TroopAmount[], gapToTarget: number } {
        let returnValue: TroopAmount[] = [];
        for (const upgrade of this.upgrades) {
            const from = getTroopsForLevel(upgrade.from);

            const troopAmounts = [
                parseReadableNumber(upgrade.maxInfantry),
                parseReadableNumber(upgrade.maxLancer),
                parseReadableNumber(upgrade.maxMarksman),
            ];
            for (let i = 0; i < 3; i++) {
                if (isNaN(troopAmounts[i]) || troopAmounts[i] < 0)
                    troopAmounts[i] = 0;
            }

            const troopTypes = [TroopType.Infantry, TroopType.Lancer, TroopType.Marksman];
            let troopAmountRemaining: TroopAmount = [0, 0, 0];
            for (let i = 0; i < 3; i++) {
                const troop: Troop = { ...from[i], type: troopTypes[i] };
                const { acc, remaining } = conversion(start, troop, troopAmounts[i]);
                start = acc;
                troopAmountRemaining[i] = remaining;
            }
            returnValue.push(troopAmountRemaining);
            if (start >= target)
                return { remaining: returnValue, gapToTarget: 0 };
        }

        return { remaining: returnValue, gapToTarget: target - start };
    }

    public TrainTroops(amounts: TroopAmount): void {
        const troop = this.targetTroops.reduce((acc, troop, i) => {
            acc.cost.meat += troop.cost.meat * amounts[i];
            acc.cost.wood += troop.cost.wood * amounts[i];
            acc.cost.coal += troop.cost.coal * amounts[i];
            acc.cost.iron += troop.cost.iron * amounts[i];
            acc.time += troop.time * amounts[i];
            return acc;
        }, { cost: { meat: 0, wood: 0, coal: 0, iron: 0 }, time: 0 });

        this.output.meat += troop.cost.meat;
        this.output.wood += troop.cost.wood;
        this.output.coal += troop.cost.coal;
        this.output.iron += troop.cost.iron;
        this.output.time += troop.time;
        this.output.infantry += amounts[0];
        this.output.lancer += amounts[1];
        this.output.marksman += amounts[2];

    }

    public TargetAmount(amount: number, ratios: TroopRatios): boolean {
        if (isNaN(amount) || amount <= 0)
            amount = 0;

        // Here, acc is the number of troops
        const { remaining, gapToTarget } = this.ConsumeNeededUpgrades(0, amount, (acc, troop, troopAmount) => {
            const index = troop.type === TroopType.Infantry ? 0 : troop.type === TroopType.Lancer ? 1 : 2;
            const diff = calculateTroopDifference(troop, this.targetTroops[index]);
            const amt = Math.min(troopAmount, amount - acc);
            acc += amt;

            this.output.meat += diff.cost.meat * amt;
            this.output.wood += diff.cost.wood * amt;
            this.output.coal += diff.cost.coal * amt;
            this.output.iron += diff.cost.iron * amt;
            this.output.time += diff.time * amt;
            this.output.infantry += index === 0 ? amt : 0;
            this.output.lancer += index === 1 ? amt : 0;
            this.output.marksman += index === 2 ? amt : 0;

            return { acc, remaining: troopAmount - amt };
        });

        if (this.upgrades.length < remaining.length)
            return false;
        for (let i = 0; i < remaining.length;i++) {
            this.upgrades[i].maxInfantry = remaining[i][0].toString();
            this.upgrades[i].maxLancer = remaining[i][1].toString();
            this.upgrades[i].maxMarksman = remaining[i][2].toString();
        }

        if (gapToTarget <= 0)
            return true;
        amount = gapToTarget;

        const troopAmounts = calculateRatio(amount, ratios);
        this.TrainTroops(troopAmounts as TroopAmount);
        return true;
    }

    public TargetHoCPoints(points: number, ratios: TroopRatios): boolean {
        if (isNaN(points) || points <= 0)
            points = 0;

        // Here, acc is the number of points
        const { remaining, gapToTarget } = this.ConsumeNeededUpgrades(0, points, (acc, troop, troopAmount) => {
            const index = troop.type === TroopType.Infantry ? 0 : troop.type === TroopType.Lancer ? 1 : 2;
            const diff = calculateTroopDifference(troop, this.targetTroops[index]);
            const pts = Math.min(troop.points * troopAmount, points - acc);
            const amt = Math.ceil(pts / troop.points);

            acc += pts;
            this.output.meat += diff.cost.meat * amt;
            this.output.wood += diff.cost.wood * amt;
            this.output.coal += diff.cost.coal * amt;
            this.output.iron += diff.cost.iron * amt;
            this.output.time += diff.time * amt;
            this.output.infantry += index === 0 ? amt : 0;
            this.output.lancer += index === 1 ? amt : 0;
            this.output.marksman += index === 2 ? amt : 0;

            return { acc, remaining: troopAmount - amt };
        });

        if (this.upgrades.length < remaining.length)
            return false;
        for (let i = 0; i < remaining.length;i++) {
            this.upgrades[i].maxInfantry = remaining[i][0].toString();
            this.upgrades[i].maxLancer = remaining[i][1].toString();
            this.upgrades[i].maxMarksman = remaining[i][2].toString();
        }

        if (gapToTarget <= 0)
            return true;
        points = gapToTarget;

        const troopAmounts = calculateRatio(Math.ceil(points / this.targetTroops[0].points), ratios);
        this.TrainTroops(troopAmounts as TroopAmount);
        return true;
    };

    public toOutput(): OutputValue {
        const time = this.output.time;
        const minutes = Math.ceil(time / 60) % 60;
        const hours = Math.floor(time / 3600) % 24;
        const days = Math.floor(time / 86400);
        const timeStr = `${days}d ${hours}h ${minutes}m`;

        return {
            meat: this.output.meat,
            wood: this.output.wood,
            coal: this.output.coal,
            iron: this.output.iron,
            time: timeStr,
            infantry: this.output.infantry,
            lancer: this.output.lancer,
            marksman: this.output.marksman,
        };
    }
}

export { TroopLevel, TroopType, troopData, calculateTroopDifference, getTroopsForLevel, Calculator as TroopCalculatorHelper };
export type { Troop, TroopCost, TroopData, TroopRatios };
