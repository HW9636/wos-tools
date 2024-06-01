import { BuildingLevels } from "@/components/BuildingInput";
import { OutputValue } from "@/components/BuildingOutput";
import { convertTimeToString } from './troop'

type BuildingLevel = number;

enum BuildingType {
    Furnace = "Furnace",
    TrainingCamp = "Training Camp",
    Embassy = "Embassy",
    Infirmary = "Infirmary",
    CommandCenter = "Command Center",
    ResearchCenter = "Research Center",
}

interface BuildingCost {
    meat: number;
    wood: number;
    coal: number;
    iron: number;
    time: number;
    fire_crystal: number;
    refined_fire_crystal: number;
}

interface Building {
    type: BuildingType;
    level: BuildingLevel;
    cost: BuildingCost;
}

interface BuildingData {
    furnace: BuildingCost[];
    trainingCamp: BuildingCost[];
    embassy: BuildingCost[];
    infirmary: BuildingCost[];
    commandCenter: BuildingCost[];
    researchCenter: BuildingCost[];
}

const buildingData: BuildingData = {
    furnace: [
        { meat: 0, wood: 0, coal: 0, iron: 0, time: 0, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 180, coal: 0, iron: 0, time: 6, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 805, coal: 0, iron: 0, time: 60, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 1800, coal: 360, iron: 0, time: 180, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 7600, coal: 1500, iron: 0, time: 600, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 19000, coal: 3800, iron: 960, time: 1800, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 69000, coal: 13000, iron: 3400, time: 3600, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 120000, coal: 25000, iron: 6300, time: 9000, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 260000, coal: 52000, iron: 13000, time: 16200, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 460000, coal: 92000, iron: 23000, time: 21600, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1300000, wood: 1300000, coal: 260000, iron: 65000, time: 27000, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1600000, wood: 1600000, coal: 330000, iron: 84000, time: 32400, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 2300000, wood: 2300000, coal: 470000, iron: 110000, time: 39600, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3100000, wood: 3100000, coal: 630000, iron: 150000, time: 50400, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 4600000, wood: 4600000, coal: 930000, iron: 230000, time: 64800, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 5900000, wood: 5900000, coal: 1100000, iron: 290000, time: 109680, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 9300000, wood: 9300000, coal: 1800000, iron: 460000, time: 131640, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 12000000, wood: 12000000, coal: 2500000, iron: 620000, time: 157980, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 15000000, wood: 15000000, coal: 3100000, iron: 780000, time: 237000, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 21000000, wood: 21000000, coal: 4300000, iron: 1000000, time: 296280, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 27000000, wood: 27000000, coal: 5400000, iron: 1300000, time: 385140, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 36000000, wood: 36000000, coal: 7200000, iron: 1800000, time: 577740, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 44000000, wood: 44000000, coal: 8900000, iron: 2200000, time: 808800, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 60000000, wood: 60000000, coal: 12000000, iron: 3000000, time: 1132380, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 81000000, wood: 81000000, coal: 16000000, iron: 4000000, time: 1585320, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 100000000, wood: 100000000, coal: 21000000, iron: 5200000, time: 1823160, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 140000000, wood: 140000000, coal: 24000000, iron: 7400000, time: 2187780, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 190000000, wood: 190000000, coal: 39000000, iron: 9900000, time: 2515920, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 240000000, wood: 240000000, coal: 49000000, iron: 12000000, time: 2893320, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 300000000, wood: 300000000, coal: 60000000, iron: 15000000, time: 3472020, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 67_000_000, wood: 67_000_000, coal: 13_000_000, iron: 3_300_000, time: 604800, fire_crystal: 132, refined_fire_crystal: 0 },
        { meat: 67_000_000, wood: 67_000_000, coal: 13_000_000, iron: 3_300_000, time: 604800, fire_crystal: 132, refined_fire_crystal: 0 },
        { meat: 67_000_000, wood: 67_000_000, coal: 13_000_000, iron: 3_300_000, time: 604800, fire_crystal: 132, refined_fire_crystal: 0 },
        { meat: 67_000_000, wood: 67_000_000, coal: 13_000_000, iron: 3_300_000, time: 604800, fire_crystal: 132, refined_fire_crystal: 0 },
        { meat: 67_000_000, wood: 67_000_000, coal: 13_000_000, iron: 3_300_000, time: 604800, fire_crystal: 132, refined_fire_crystal: 0 },
        { meat: 72_000_000, wood: 72_000_000, coal: 14_000_000, iron: 3_600_000, time: 777600, fire_crystal: 158, refined_fire_crystal: 0 },
        { meat: 72_000_000, wood: 72_000_000, coal: 14_000_000, iron: 3_600_000, time: 777600, fire_crystal: 158, refined_fire_crystal: 0 },
        { meat: 72_000_000, wood: 72_000_000, coal: 14_000_000, iron: 3_600_000, time: 777600, fire_crystal: 158, refined_fire_crystal: 0 },
        { meat: 72_000_000, wood: 72_000_000, coal: 14_000_000, iron: 3_600_000, time: 777600, fire_crystal: 158, refined_fire_crystal: 0 },
        { meat: 72_000_000, wood: 72_000_000, coal: 14_000_000, iron: 3_600_000, time: 777600, fire_crystal: 158, refined_fire_crystal: 0 },
        { meat: 79_000_000, wood: 79_000_000, coal: 15_000_000, iron: 3_900_000, time: 950400, fire_crystal: 238, refined_fire_crystal: 0 },
        { meat: 79_000_000, wood: 79_000_000, coal: 15_000_000, iron: 3_900_000, time: 950400, fire_crystal: 238, refined_fire_crystal: 0 },
        { meat: 79_000_000, wood: 79_000_000, coal: 15_000_000, iron: 3_900_000, time: 950400, fire_crystal: 238, refined_fire_crystal: 0 },
        { meat: 79_000_000, wood: 79_000_000, coal: 15_000_000, iron: 3_900_000, time: 950400, fire_crystal: 238, refined_fire_crystal: 0 },
        { meat: 79_000_000, wood: 79_000_000, coal: 15_000_000, iron: 3_900_000, time: 950400, fire_crystal: 238, refined_fire_crystal: 0 },
        { meat: 82_000_000, wood: 82_000_000, coal: 16_000_000, iron: 4_100_000, time: 1036800, fire_crystal: 280, refined_fire_crystal: 0 },
        { meat: 82_000_000, wood: 82_000_000, coal: 16_000_000, iron: 4_100_000, time: 1036800, fire_crystal: 280, refined_fire_crystal: 0 },
        { meat: 82_000_000, wood: 82_000_000, coal: 16_000_000, iron: 4_100_000, time: 1036800, fire_crystal: 280, refined_fire_crystal: 0 },
        { meat: 82_000_000, wood: 82_000_000, coal: 16_000_000, iron: 4_100_000, time: 1036800, fire_crystal: 280, refined_fire_crystal: 0 },
        { meat: 82_000_000, wood: 82_000_000, coal: 16_000_000, iron: 4_100_000, time: 1036800, fire_crystal: 280, refined_fire_crystal: 0 },
        { meat: 84_000_000, wood: 84_000_000, coal: 16_000_000, iron: 4_200_000, time: 1209600, fire_crystal: 335, refined_fire_crystal: 0 },
        { meat: 84_000_000, wood: 84_000_000, coal: 16_000_000, iron: 4_200_000, time: 1209600, fire_crystal: 335, refined_fire_crystal: 0 },
        { meat: 84_000_000, wood: 84_000_000, coal: 16_000_000, iron: 4_200_000, time: 1209600, fire_crystal: 335, refined_fire_crystal: 0 },
        { meat: 84_000_000, wood: 84_000_000, coal: 16_000_000, iron: 4_200_000, time: 1209600, fire_crystal: 335, refined_fire_crystal: 0 },
        { meat: 84_000_000, wood: 84_000_000, coal: 16_000_000, iron: 4_200_000, time: 1209600, fire_crystal: 335, refined_fire_crystal: 0 },
        { meat: 96_000_000, wood: 96_000_000, coal: 19_000_000, iron: 4_800_000, time: 1296000, fire_crystal: 200, refined_fire_crystal: 10 },
        { meat: 96_000_000, wood: 96_000_000, coal: 19_000_000, iron: 4_800_000, time: 1296000, fire_crystal: 200, refined_fire_crystal: 10 },
        { meat: 96_000_000, wood: 96_000_000, coal: 19_000_000, iron: 4_800_000, time: 1296000, fire_crystal: 200, refined_fire_crystal: 10 },
        { meat: 96_000_000, wood: 96_000_000, coal: 19_000_000, iron: 4_800_000, time: 1296000, fire_crystal: 200, refined_fire_crystal: 10 },
        { meat: 96_000_000, wood: 96_000_000, coal: 19_000_000, iron: 4_800_000, time: 1296000, fire_crystal: 100, refined_fire_crystal: 20 },
        { meat: 100_000_000, wood: 100_000_000, coal: 21_000_000, iron: 5_400_000, time: 1555200, fire_crystal: 240, refined_fire_crystal: 15 },
        { meat: 100_000_000, wood: 100_000_000, coal: 21_000_000, iron: 5_400_000, time: 1555200, fire_crystal: 240, refined_fire_crystal: 15 },
        { meat: 100_000_000, wood: 100_000_000, coal: 21_000_000, iron: 5_400_000, time: 1555200, fire_crystal: 240, refined_fire_crystal: 15 },
        { meat: 100_000_000, wood: 100_000_000, coal: 21_000_000, iron: 5_400_000, time: 1555200, fire_crystal: 240, refined_fire_crystal: 15 },
        { meat: 100_000_000, wood: 100_000_000, coal: 21_000_000, iron: 5_400_000, time: 1555200, fire_crystal: 120, refined_fire_crystal: 30 },
        { meat: 130_000_000, wood: 130_000_000, coal: 26_000_000, iron: 6_600_000, time: 1728000, fire_crystal: 240, refined_fire_crystal: 20 },
        { meat: 130_000_000, wood: 130_000_000, coal: 26_000_000, iron: 6_600_000, time: 1728000, fire_crystal: 240, refined_fire_crystal: 20 },
        { meat: 130_000_000, wood: 130_000_000, coal: 26_000_000, iron: 6_600_000, time: 1728000, fire_crystal: 240, refined_fire_crystal: 20 },
        { meat: 130_000_000, wood: 130_000_000, coal: 26_000_000, iron: 6_600_000, time: 1728000, fire_crystal: 240, refined_fire_crystal: 20 },
        { meat: 130_000_000, wood: 130_000_000, coal: 26_000_000, iron: 6_600_000, time: 1728000, fire_crystal: 120, refined_fire_crystal: 40 },
    ],

    researchCenter: [
        { meat: 0, wood: 105, coal: 0, iron: 0, time: 2, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 160, coal: 0, iron: 0, time: 9, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 725, coal: 0, iron: 0, time: 45, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 1600, coal: 320, iron: 0, time: 135, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 6800, coal: 1300, iron: 0, time: 270, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 17000, coal: 3400, iron: 860, time: 540, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 62000, coal: 12000, iron: 3100, time: 1080, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 110000, coal: 22000, iron: 5600, time: 1620, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 230000, coal: 47000, iron: 11000, time: 2430, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 410000, coal: 82000, iron: 20000, time: 3240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 520000, wood: 520000, coal: 100000, iron: 26000, time: 4050, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 670000, wood: 670000, coal: 130000, iron: 33000, time: 4860, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 950000, wood: 950000, coal: 190000, iron: 47000, time: 5940, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1200000, wood: 1200000, coal: 250000, iron: 63000, time: 7560, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1800000, wood: 1800000, coal: 370000, iron: 93000, time: 9720, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 2300000, wood: 2300000, coal: 470000, iron: 110000, time: 16440, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3700000, wood: 3700000, coal: 740000, iron: 180000, time: 19740, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 5000000, wood: 5000000, coal: 1000000, iron: 250000, time: 23700, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 6200000, wood: 6200000, coal: 1200000, iron: 310000, time: 35550, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 8600000, wood: 8600000, coal: 1700000, iron: 430000, time: 44430, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 10000000, wood: 10000000, coal: 2100000, iron: 540000, time: 57750, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 14000000, wood: 14000000, coal: 2800000, iron: 720000, time: 86640, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 17000000, wood: 17000000, coal: 3500000, iron: 890000, time: 121320, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 24000000, wood: 24000000, coal: 4800000, iron: 1200000, time: 169860, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 32000000, wood: 32000000, coal: 6500000, iron: 1600000, time: 237780, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 42000000, wood: 42000000, coal: 8400000, iron: 2100000, time: 273420, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 59000000, wood: 59000000, coal: 11000000, iron: 2900000, time: 328140, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 79000000, wood: 79000000, coal: 15000000, iron: 3900000, time: 377340, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 98000000, wood: 98000000, coal: 19000000, iron: 4900000, time: 433980, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 120000000, wood: 120000000, coal: 24000000, iron: 6000000, time: 520800, fire_crystal: 0, refined_fire_crystal: 0 },
    ],

    trainingCamp: [
        { meat: 0, wood: 95, coal: 0, iron: 0, time: 2, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 140, coal: 0, iron: 0, time: 9, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 645, coal: 0, iron: 0, time: 45, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 1400, coal: 285, iron: 0, time: 135, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 6000, coal: 1200, iron: 0, time: 270, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 15000, coal: 3000, iron: 765, time: 540, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 55000, coal: 11000, iron: 2700, time: 1080, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 100000, coal: 20000, iron: 5000, time: 1620, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 200000, coal: 41000, iron: 10000, time: 2430, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 360000, coal: 73000, iron: 18000, time: 3240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 460000, wood: 460000, coal: 92000, iron: 23000, time: 4050, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 580000, wood: 580000, coal: 110000, iron: 29000, time: 4860, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 830000, wood: 830000, coal: 160000, iron: 41000, time: 5940, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1100000, wood: 1100000, coal: 220000, iron: 55000, time: 7560, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1600000, wood: 1600000, coal: 320000, iron: 81000, time: 9720, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 2000000, wood: 2000000, coal: 410000, iron: 100000, time: 16440, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3200000, wood: 3200000, coal: 650000, iron: 160000, time: 19740, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 4300000, wood: 4300000, coal: 870000, iron: 210000, time: 23700, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 5400000, wood: 5400000, coal: 1000000, iron: 270000, time: 35550, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 7500000, wood: 7500000, coal: 1500000, iron: 370000, time: 44430, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 9500000, wood: 9500000, coal: 1900000, iron: 470000, time: 57750, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 12000000, wood: 12000000, coal: 2500000, iron: 630000, time: 86640, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 15000000, wood: 15000000, coal: 3100000, iron: 780000, time: 121320, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 21000000, wood: 21000000, coal: 4200000, iron: 1000000, time: 169860, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 28000000, wood: 28000000, coal: 5700000, iron: 1400000, time: 237780, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 36000000, wood: 36000000, coal: 7300000, iron: 1800000, time: 273420, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 52000000, wood: 52000000, coal: 1000000, iron: 2600000, time: 328140, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 69000000, wood: 69000000, coal: 1300000, iron: 3400000, time: 377340, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 86000000, wood: 86000000, coal: 1700000, iron: 4300000, time: 433980, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 100000000, wood: 100000000, coal: 2100000, iron: 5200000, time: 520800, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 90720, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 90720, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 90720, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 90720, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 90720, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 116640, fire_crystal: 71, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 21_000_000, coal: 5_000_000, iron: 1_200_000, time: 116640, fire_crystal: 71, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 116640, fire_crystal: 71, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 116640, fire_crystal: 71, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 116640, fire_crystal: 71, refined_fire_crystal: 0 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_500_000, iron: 1_300_000, time: 142560, fire_crystal: 107, refined_fire_crystal: 0 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_500_000, iron: 1_300_000, time: 142560, fire_crystal: 107, refined_fire_crystal: 0 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_500_000, iron: 1_300_000, time: 142560, fire_crystal: 107, refined_fire_crystal: 0 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_500_000, iron: 1_300_000, time: 142560, fire_crystal: 107, refined_fire_crystal: 0 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_500_000, iron: 1_300_000, time: 142560, fire_crystal: 107, refined_fire_crystal: 0 },
        { meat: 28_000_000, wood: 28_000_000, coal: 5_700_000, iron: 1_400_000, time: 155520, fire_crystal: 126, refined_fire_crystal: 0 },
        { meat: 28_000_000, wood: 28_000_000, coal: 5_700_000, iron: 1_400_000, time: 155520, fire_crystal: 126, refined_fire_crystal: 0 },
        { meat: 28_000_000, wood: 28_000_000, coal: 5_700_000, iron: 1_400_000, time: 155520, fire_crystal: 126, refined_fire_crystal: 0 },
        { meat: 28_000_000, wood: 28_000_000, coal: 5_700_000, iron: 1_400_000, time: 155520, fire_crystal: 126, refined_fire_crystal: 0 },
        { meat: 28_000_000, wood: 28_000_000, coal: 5_700_000, iron: 1_400_000, time: 155520, fire_crystal: 126, refined_fire_crystal: 0 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_900_000, iron: 1_400_000, time: 181440, fire_crystal: 150, refined_fire_crystal: 0 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_900_000, iron: 1_400_000, time: 181440, fire_crystal: 150, refined_fire_crystal: 0 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_900_000, iron: 1_400_000, time: 181440, fire_crystal: 150, refined_fire_crystal: 0 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_900_000, iron: 1_400_000, time: 181440, fire_crystal: 150, refined_fire_crystal: 0 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_900_000, iron: 1_400_000, time: 181440, fire_crystal: 150, refined_fire_crystal: 0 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_700_000, iron: 1_600_000, time: 194400, fire_crystal: 90, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_700_000, iron: 1_600_000, time: 194400, fire_crystal: 90, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_700_000, iron: 1_600_000, time: 194400, fire_crystal: 90, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_700_000, iron: 1_600_000, time: 194400, fire_crystal: 90, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_700_000, iron: 1_600_000, time: 194400, fire_crystal: 45, refined_fire_crystal: 9 },
        { meat: 38_000_000, wood: 38_000_000, coal: 7_600_000, iron: 1_900_000, time: 233280, fire_crystal: 108, refined_fire_crystal: 6 },
        { meat: 38_000_000, wood: 38_000_000, coal: 7_600_000, iron: 1_900_000, time: 233280, fire_crystal: 108, refined_fire_crystal: 6 },
        { meat: 38_000_000, wood: 38_000_000, coal: 7_600_000, iron: 1_900_000, time: 233280, fire_crystal: 108, refined_fire_crystal: 6 },
        { meat: 38_000_000, wood: 38_000_000, coal: 7_600_000, iron: 1_900_000, time: 233280, fire_crystal: 108, refined_fire_crystal: 6 },
        { meat: 38_000_000, wood: 38_000_000, coal: 7_600_000, iron: 1_900_000, time: 233280, fire_crystal: 54, refined_fire_crystal: 13 },
        { meat: 46_000_000, wood: 46_000_000, coal: 9_300_000, iron: 2_300_000, time: 259200, fire_crystal: 108, refined_fire_crystal: 9 },
        { meat: 46_000_000, wood: 46_000_000, coal: 9_300_000, iron: 2_300_000, time: 259200, fire_crystal: 108, refined_fire_crystal: 9 },
        { meat: 46_000_000, wood: 46_000_000, coal: 9_300_000, iron: 2_300_000, time: 259200, fire_crystal: 108, refined_fire_crystal: 9 },
        { meat: 46_000_000, wood: 46_000_000, coal: 9_300_000, iron: 2_300_000, time: 259200, fire_crystal: 108, refined_fire_crystal: 9 },
        { meat: 46_000_000, wood: 46_000_000, coal: 9_300_000, iron: 2_300_000, time: 259200, fire_crystal: 54, refined_fire_crystal: 19 },
    ],

    embassy: [
        { meat: 0, wood: 60, coal: 0, iron: 0, time: 2, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 90, coal: 0, iron: 0, time: 10, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 400, coal: 0, iron: 0, time: 60, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 900, coal: 180, iron: 0, time: 120, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 3800, coal: 760, iron: 0, time: 400, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 9600, coal: 1900, iron: 480, time: 800, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 34000, coal: 6900, iron: 1700, time: 1500, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 63000, coal: 12000, iron: 3100, time: 2700, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 130000, coal: 26000, iron: 65000, time: 7200, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 230000, coal: 46000, iron: 11000, time: 14250, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 260000, wood: 260000, coal: 52000, iron: 13000, time: 17820, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 330000, wood: 330000, coal: 67000, iron: 16000, time: 21360, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 470000, wood: 470000, coal: 95000, iron: 23000, time: 26130, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 630000, wood: 630000, coal: 120000, iron: 31000, time: 33240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 930000, wood: 930000, coal: 180000, iron: 46000, time: 42750, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1100000, wood: 1100000, coal: 230000, iron: 59000, time: 72420, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1800000, wood: 1800000, coal: 370000, iron: 93000, time: 86880, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 2500000, wood: 2500000, coal: 500000, iron: 120000, time: 104280, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3100000, wood: 3100000, coal: 620000, iron: 150000, time: 156420, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 4300000, wood: 4300000, coal: 860000, iron: 210000, time: 195540, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 5400000, wood: 5400000, coal: 1000000, iron: 270000, time: 254160, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 7200000, wood: 7200000, coal: 1400000, iron: 360000, time: 381300, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 8900000, wood: 8900000, coal: 1700000, iron: 440000, time: 533820, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 12000000, wood: 12000000, coal: 2400000, iron: 600000, time: 747360, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 16000000, wood: 16000000, coal: 3200000, iron: 810000, time: 1046280, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 21000000, wood: 21000000, coal: 4200000, iron: 1000000, time: 1203240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 29000000, wood: 29000000, coal: 5900000, iron: 1400000, time: 1443900, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 39000000, wood: 39000000, coal: 7900000, iron: 1900000, time: 1660500, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 49000000, wood: 49000000, coal: 9800000, iron: 2400000, time: 1909560, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 60000000, wood: 60000000, coal: 12000000, iron: 3000000, time: 2291520, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 13_000_000, wood: 13_000_000, coal: 2_700_000, iron: 679_000, time: 399120, fire_crystal: 33, refined_fire_crystal: 0 },
        { meat: 13_000_000, wood: 13_000_000, coal: 2_700_000, iron: 670_000, time: 399120, fire_crystal: 33, refined_fire_crystal: 0 },
        { meat: 13_000_000, wood: 13_000_000, coal: 2_700_000, iron: 670_000, time: 399120, fire_crystal: 33, refined_fire_crystal: 0 },
        { meat: 13_000_000, wood: 13_000_000, coal: 2_700_000, iron: 670_000, time: 399120, fire_crystal: 33, refined_fire_crystal: 0 },
        { meat: 13_000_000, wood: 13_000_000, coal: 2_700_000, iron: 670_000, time: 399120, fire_crystal: 33, refined_fire_crystal: 0 },
        { meat: 14_000_000, wood: 14_000_000, coal: 2_900_000, iron: 720_000, time: 513180, fire_crystal: 39, refined_fire_crystal: 0 },
        { meat: 14_000_000, wood: 14_000_000, coal: 2_900_000, iron: 720_000, time: 513180, fire_crystal: 39, refined_fire_crystal: 0 },
        { meat: 14_000_000, wood: 14_000_000, coal: 2_900_000, iron: 720_000, time: 513180, fire_crystal: 39, refined_fire_crystal: 0 },
        { meat: 14_000_000, wood: 14_000_000, coal: 2_900_000, iron: 720_000, time: 513180, fire_crystal: 39, refined_fire_crystal: 0 },
        { meat: 14_000_000, wood: 14_000_000, coal: 2_900_000, iron: 1_000_000, time: 513180, fire_crystal: 39, refined_fire_crystal: 0 },
        { meat: 15_000_000, wood: 15_000_000, coal: 3_100_000, iron: 790_000, time: 627240, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 15_000_000, wood: 15_000_000, coal: 3_100_000, iron: 790_000, time: 627240, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 15_000_000, wood: 15_000_000, coal: 3_100_000, iron: 790_000, time: 627240, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 15_000_000, wood: 15_000_000, coal: 3_100_000, iron: 790_000, time: 627240, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 15_000_000, wood: 15_000_000, coal: 3_100_000, iron: 790_000, time: 627240, fire_crystal: 59, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_200_000, iron: 820_000, time: 684240, fire_crystal: 70, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_200_000, iron: 820_000, time: 684240, fire_crystal: 70, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_200_000, iron: 820_000, time: 684240, fire_crystal: 70, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_200_000, iron: 820_000, time: 684240, fire_crystal: 70, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_200_000, iron: 820_000, time: 684240, fire_crystal: 70, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 798300, fire_crystal: 83, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 798300, fire_crystal: 83, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 798300, fire_crystal: 83, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 798300, fire_crystal: 83, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 798300, fire_crystal: 83, refined_fire_crystal: 0 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_800_000, iron: 960_000, time: 855360, fire_crystal: 50, refined_fire_crystal: 2 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_800_000, iron: 960_000, time: 855360, fire_crystal: 50, refined_fire_crystal: 2 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_800_000, iron: 960_000, time: 855360, fire_crystal: 50, refined_fire_crystal: 2 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_800_000, iron: 960_000, time: 855360, fire_crystal: 50, refined_fire_crystal: 2 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_800_000, iron: 960_000, time: 855360, fire_crystal: 25, refined_fire_crystal: 5 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 1026420, fire_crystal: 60, refined_fire_crystal: 3 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 1026420, fire_crystal: 60, refined_fire_crystal: 3 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 1026420, fire_crystal: 60, refined_fire_crystal: 3 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 1026420, fire_crystal: 60, refined_fire_crystal: 3 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 1026420, fire_crystal: 30, refined_fire_crystal: 7 },
        { meat: 26_000_000, wood: 26_000_000, coal: 5_300_000, iron: 1_300_000, time: 1140480, fire_crystal: 60, refined_fire_crystal: 5 },
        { meat: 26_000_000, wood: 26_000_000, coal: 5_300_000, iron: 1_300_000, time: 1140480, fire_crystal: 60, refined_fire_crystal: 5 },
        { meat: 26_000_000, wood: 26_000_000, coal: 5_300_000, iron: 1_300_000, time: 1140480, fire_crystal: 60, refined_fire_crystal: 5 },
        { meat: 26_000_000, wood: 26_000_000, coal: 5_300_000, iron: 1_300_000, time: 1140480, fire_crystal: 60, refined_fire_crystal: 5 },
        { meat: 26_000_000, wood: 26_000_000, coal: 5_300_000, iron: 1_300_000, time: 1140480, fire_crystal: 30, refined_fire_crystal: 11 },

    ],

    commandCenter: [
        { meat: 0, wood: 80, coal: 0, iron: 0, time: 2, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 125, coal: 0, iron: 0, time: 8, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 565, coal: 0, iron: 0, time: 35, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 1200, coal: 250, iron: 0, time: 105, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 5300, coal: 1000, iron: 0, time: 215, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 13000, coal: 2600, iron: 670, time: 430, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 48000, coal: 9600, iron: 2400, time: 840, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 88000, coal: 17000, iron: 4400, time: 1260, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 180000, coal: 36000, iron: 9100, time: 1920, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 320000, coal: 64000, iron: 16000, time: 2580, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 390000, wood: 390000, coal: 79000, iron: 19000, time: 3240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 500000, wood: 500000, coal: 100000, iron: 25000, time: 3870, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 710000, wood: 710000, coal: 140000, iron: 35000, time: 4740, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 940000, wood: 940000, coal: 180000, iron: 47000, time: 6030, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1300000, wood: 1300000, coal: 270000, iron: 69000, time: 7770, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1700000, wood: 1700000, coal: 350000, iron: 89000, time: 13140, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 2700000, wood: 2700000, coal: 550000, iron: 130000, time: 15780, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3700000, wood: 3700000, coal: 750000, iron: 180000, time: 18960, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 4700000, wood: 4700000, coal: 940000, iron: 230000, time: 28440, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 6400000, wood: 6400000, coal: 1200000, iron: 320000, time: 35550, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 8100000, wood: 8100000, coal: 1600000, iron: 400000, time: 46200, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 10000000, wood: 10000000, coal: 2100000, iron: 540000, time: 69330, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 13000000, wood: 13000000, coal: 2600000, iron: 670000, time: 97020, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 18000000, wood: 18000000, coal: 3600000, iron: 900000, time: 135840, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 24000000, wood: 24000000, coal: 4900000, iron: 1200000, time: 190200, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 31000000, wood: 31000000, coal: 6300000, iron: 1500000, time: 218160, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 44000000, wood: 44000000, coal: 8900000, iron: 2200000, time: 262500, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 59000000, wood: 59000000, coal: 11000000, iron: 2900000, time: 301860, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 73000000, wood: 73000000, coal: 18000000, iron: 4500000, time: 347160, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 90000000, wood: 90000000, coal: 18000000, iron: 4500000, time: 416640, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_000_000, iron: 1_000_000, time: 29370, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_000_000, iron: 1_000_000, time: 29370, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_000_000, iron: 1_000_000, time: 29370, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_000_000, iron: 1_000_000, time: 29370, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_000_000, iron: 1_000_000, time: 29370, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 93300, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 93300, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 93300, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 93300, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_300_000, iron: 1_000_000, time: 93300, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 114000, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 114000, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 114000, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 114000, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 23_000_000, wood: 23_000_000, coal: 4_700_000, iron: 1_100_000, time: 114000, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_900_000, iron: 1_200_000, time: 124380, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_900_000, iron: 1_200_000, time: 124380, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_900_000, iron: 1_200_000, time: 124380, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_900_000, iron: 1_200_000, time: 124380, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_900_000, iron: 1_200_000, time: 124380, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 145860, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 145860, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 145860, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 145860, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 25_000_000, wood: 25_000_000, coal: 5_000_000, iron: 1_200_000, time: 145860, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_800_000, iron: 1_400_000, time: 155520, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_800_000, iron: 1_400_000, time: 155520, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_800_000, iron: 1_400_000, time: 155520, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_800_000, iron: 1_400_000, time: 155520, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 29_000_000, wood: 29_000_000, coal: 5_800_000, iron: 1_400_000, time: 155520, fire_crystal: 20, refined_fire_crystal: 5 },
        { meat: 32_000_000, wood: 32_000_000, coal: 6_500_000, iron: 1_500_000, time: 178200, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 32_000_000, wood: 32_000_000, coal: 6_500_000, iron: 1_500_000, time: 178200, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 32_000_000, wood: 32_000_000, coal: 6_500_000, iron: 1_500_000, time: 178200, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 32_000_000, wood: 32_000_000, coal: 6_500_000, iron: 1_500_000, time: 178200, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 32_000_000, wood: 32_000_000, coal: 6_500_000, iron: 1_500_000, time: 178200, fire_crystal: 24, refined_fire_crystal: 7 },
        { meat: 39_000_000, wood: 39_000_000, coal: 7_900_000, iron: 1_900_000, time: 207360, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 39_000_000, wood: 39_000_000, coal: 7_900_000, iron: 1_900_000, time: 207360, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 39_000_000, wood: 39_000_000, coal: 7_900_000, iron: 1_900_000, time: 207360, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 39_000_000, wood: 39_000_000, coal: 7_900_000, iron: 1_900_000, time: 207360, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 39_000_000, wood: 39_000_000, coal: 7_900_000, iron: 1_900_000, time: 207360, fire_crystal: 24, refined_fire_crystal: 9 },
    ],

    infirmary: [
        { meat: 0, wood: 0, coal: 0, iron: 0, time: 2, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 100, coal: 0, iron: 0, time: 9, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 460, coal: 0, iron: 0, time: 40, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 1000, coal: 205, iron: 0, time: 125, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 4300, coal: 865, iron: 0, time: 250, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 10000, coal: 2100, iron: 545, time: 500, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 39000, coal: 7800, iron: 1900, time: 990, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 72000, coal: 14000, iron: 3600, time: 1500, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 140000, coal: 29000, iron: 7400, time: 1650, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 0, wood: 260000, coal: 52000, iron: 13000, time: 3000, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 320000, wood: 320000, coal: 65000, iron: 16000, time: 3780, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 420000, wood: 420000, coal: 54000, iron: 21000, time: 4500, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 590000, wood: 590000, coal: 110000, iron: 29000, time: 5520, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 780000, wood: 780000, coal: 150000, iron: 39000, time: 7050, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1100000, wood: 1100000, coal: 230000, iron: 58000, time: 9060, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 1400000, wood: 1400000, coal: 290000, iron: 74000, time: 15360, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 2300000, wood: 2300000, coal: 460000, iron: 110000, time: 18420, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3100000, wood: 3100000, coal: 620000, iron: 150000, time: 22110, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 3900000, wood: 3900000, coal: 780000, iron: 190000, time: 33180, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 5300000, wood: 5300000, coal: 1000000, iron: 260000, time: 41460, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 6800000, wood: 6800000, coal: 1300000, iron: 340000, time: 53910, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 9000000, wood: 9000000, coal: 1800000, iron: 450000, time: 80880, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 11000000, wood: 11000000, coal: 2200000, iron: 560000, time: 113220, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 15000000, wood: 15000000, coal: 3000000, iron: 750000, time: 158520, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 20000000, wood: 20000000, coal: 4000000, iron: 1000000, time: 221940, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 26000000, wood: 26000000, coal: 5200000, iron: 1300000, time: 255240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 37000000, wood: 37000000, coal: 7400000, iron: 1800000, time: 306240, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 49000000, wood: 49000000, coal: 9900000, iron: 2400000, time: 352200, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 61000000, wood: 61000000, coal: 12000000, iron: 3000000, time: 405000, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 75000000, wood: 75000000, coal: 15000000, iron: 3700000, time: 486060, fire_crystal: 0, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 41460, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 41461, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 41462, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 41463, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 16_000_000, wood: 16_000_000, coal: 3_300_000, iron: 840_000, time: 41464, fire_crystal: 26, refined_fire_crystal: 0 },
        { meat: 18_000_000, wood: 18_000_000, coal: 3_600_000, iron: 900_000, time: 108840, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 18_000_000, wood: 18_000_000, coal: 3_600_000, iron: 900_000, time: 108840, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 18_000_000, wood: 18_000_000, coal: 3_600_000, iron: 900_000, time: 108840, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 18_000_000, wood: 18_000_000, coal: 3_600_000, iron: 900_000, time: 108840, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 18_000_000, wood: 18_000_000, coal: 3_600_000, iron: 900_000, time: 108840, fire_crystal: 31, refined_fire_crystal: 0 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_900_000, iron: 990_000, time: 133020, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_900_000, iron: 990_000, time: 133020, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_900_000, iron: 990_000, time: 133020, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_900_000, iron: 990_000, time: 133020, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 19_000_000, wood: 19_000_000, coal: 3_900_000, iron: 990_000, time: 133020, fire_crystal: 47, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_100_000, iron: 1_000_000, time: 145140, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_100_000, iron: 1_000_000, time: 145140, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_100_000, iron: 1_000_000, time: 145140, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_100_000, iron: 1_000_000, time: 145140, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 20_000_000, wood: 20_000_000, coal: 4_100_000, iron: 1_000_000, time: 145140, fire_crystal: 56, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_200_000, iron: 1_000_000, time: 169320, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_200_000, iron: 1_000_000, time: 169320, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_200_000, iron: 1_000_000, time: 169320, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_200_000, iron: 1_000_000, time: 169320, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 21_000_000, wood: 21_000_000, coal: 4_200_000, iron: 1_000_000, time: 169320, fire_crystal: 67, refined_fire_crystal: 0 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_800_000, iron: 1_200_000, time: 181440, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_800_000, iron: 1_200_000, time: 181440, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_800_000, iron: 1_200_000, time: 181440, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_800_000, iron: 1_200_000, time: 181440, fire_crystal: 40, refined_fire_crystal: 2 },
        { meat: 24_000_000, wood: 24_000_000, coal: 4_800_000, iron: 1_200_000, time: 181440, fire_crystal: 20, refined_fire_crystal: 4 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_400_000, iron: 1_300_000, time: 217680, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_400_000, iron: 1_300_000, time: 217680, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_400_000, iron: 1_300_000, time: 217680, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_400_000, iron: 1_300_000, time: 217680, fire_crystal: 48, refined_fire_crystal: 3 },
        { meat: 27_000_000, wood: 27_000_000, coal: 5_400_000, iron: 1_300_000, time: 217680, fire_crystal: 24, refined_fire_crystal: 6 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_600_000, iron: 1_600_000, time: 241920, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_600_000, iron: 1_600_000, time: 241920, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_600_000, iron: 1_600_000, time: 241920, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_600_000, iron: 1_600_000, time: 241920, fire_crystal: 48, refined_fire_crystal: 4 },
        { meat: 33_000_000, wood: 33_000_000, coal: 6_600_000, iron: 1_600_000, time: 241920, fire_crystal: 24, refined_fire_crystal: 8 },
    ]
}

const getCostsForType = (type: BuildingType): BuildingCost[] => {
    switch (type) {
        case BuildingType.Furnace:
            return buildingData.furnace;
        case BuildingType.TrainingCamp:
            return buildingData.trainingCamp;
        case BuildingType.Embassy:
            return buildingData.embassy;
        case BuildingType.CommandCenter:
            return buildingData.commandCenter;
        case BuildingType.Infirmary:
            return buildingData.infirmary;
        default:
            return [];
    }
}
type CalculatorOutputStore = BuildingCost;

const sumCostsForLevel = (type: BuildingType, startLevel: number, endLevel: number): BuildingCost => {
    if (startLevel >= endLevel)
        return { meat: 0, wood: 0, coal: 0, iron: 0, time: 0, fire_crystal: 0, refined_fire_crystal: 0 };

    return getCostsForType(type).slice(startLevel, endLevel).reduce((acc, cost) => {
        return {
            meat: acc.meat + cost.meat,
            wood: acc.wood + cost.wood,
            coal: acc.coal + cost.coal,
            iron: acc.iron + cost.iron,
            time: acc.time + cost.time,
            fire_crystal: acc.fire_crystal + cost.fire_crystal,
            refined_fire_crystal: acc.refined_fire_crystal + cost.refined_fire_crystal,
        }
    }, { meat: 0, wood: 0, coal: 0, iron: 0, time: 0, fire_crystal: 0, refined_fire_crystal: 0 });
}

const addStore = (a: CalculatorOutputStore, b: CalculatorOutputStore): CalculatorOutputStore => {
    return {
        meat: a.meat + b.meat,
        wood: a.wood + b.wood,
        coal: a.coal + b.coal,
        iron: a.iron + b.iron,
        fire_crystal: a.fire_crystal + b.fire_crystal,
        refined_fire_crystal: a.refined_fire_crystal + b.refined_fire_crystal,
        time: a.time + b.time,
    };
}

class Calculator {
    initial: BuildingLevels;
    target: BuildingLevels;
    rss_reduction: number;
    time_reduction: number;
    output: CalculatorOutputStore;

    public constructor(initial: BuildingLevels, target: BuildingLevels, rss_reduction: number, time_reduction: number) {
        this.initial = initial;
        this.target = target;
        this.rss_reduction = rss_reduction;
        this.time_reduction = time_reduction;
        this.output = {
            meat: 0,
            wood: 0,
            coal: 0,
            iron: 0,
            fire_crystal: 0,
            refined_fire_crystal: 0,
            time: 0,
        }

    }

    private calculateBuilding = (initial: number, target: number, type: BuildingType): void => {
        this.output = addStore(this.output, sumCostsForLevel(type, initial, target));
    }

    public calculate(): void {
        this.calculateBuilding(this.initial.furnace, this.target.furnace, BuildingType.Furnace);
        this.calculateBuilding(this.initial.infantryCamp, this.target.infantryCamp, BuildingType.TrainingCamp);
        this.calculateBuilding(this.initial.lancerCamp, this.target.lancerCamp, BuildingType.TrainingCamp);
        this.calculateBuilding(this.initial.marksmanCamp, this.target.marksmanCamp, BuildingType.TrainingCamp);
        this.calculateBuilding(this.initial.embassy, this.target.embassy, BuildingType.Embassy);
        this.calculateBuilding(this.initial.infirmary, this.target.infirmary, BuildingType.Infirmary);
        this.calculateBuilding(this.initial.commandCenter, this.target.commandCenter, BuildingType.CommandCenter);
    }

    public toOutput(): OutputValue {
        return {
            meat: this.output.meat / (1 + this.rss_reduction),
            wood: this.output.wood / (1 + this.rss_reduction),
            coal: this.output.coal / (1 + this.rss_reduction),
            iron: this.output.iron / (1 + this.rss_reduction),
            fire_crystal: this.output.fire_crystal / (1 + this.rss_reduction),
            refined_fire_crystal: this.output.refined_fire_crystal / (1 + this.rss_reduction),
            rawTime: convertTimeToString(this.output.time),
            time: convertTimeToString(this.output.time / (1 + this.time_reduction)),
        };
    }
}

export type { BuildingLevel, BuildingCost, Building }
export { BuildingType, buildingData, Calculator as BuildingCalculatorHelper }
