import { PositiveInteger } from "../../src/types";
import { Corporation } from "../../src/Corporation/Corporation";
import { CorpUpgrades } from "../../src/Corporation/data/CorporationUpgrades";
import { calculateMaxAffordableUpgrade, calculateUpgradeCost } from "../../src/Corporation/helpers";
import { Player } from "../../src/Player";
import {
  AcceptInvestmentOffer,
  BuyBackShares,
  GoPublic,
  IssueNewShares,
  SellShares,
} from "../../src/Corporation/Actions";

describe("Corporation", () => {
  let corporation: Corporation;

  beforeEach(() => {
    corporation = new Corporation({ name: "Test" });
  });

  describe("helpers.calculateUpgradeCost", () => {
    it("should have fixed formula", () => {
      for (let currentUpgradeLevel = 0; currentUpgradeLevel < 5; currentUpgradeLevel++) {
        Object.values(CorpUpgrades).forEach((upgrade) => {
          corporation.upgrades[upgrade.name].level = currentUpgradeLevel;

          for (let targetUpgradeLevel = currentUpgradeLevel + 1; targetUpgradeLevel < 6; targetUpgradeLevel++) {
            expect(calculateUpgradeCost(corporation, upgrade, targetUpgradeLevel as PositiveInteger)).toMatchSnapshot(
              `${upgrade.name}: from ${currentUpgradeLevel} to ${targetUpgradeLevel}`,
            );
          }
        });
      }
    });
  });

  describe("helpers.calculateMaxAffordableUpgrade", () => {
    it("should return zero for negative funds", () => {
      corporation.funds = -1;

      Object.values(CorpUpgrades).forEach((upgrade) => {
        expect(calculateMaxAffordableUpgrade(corporation, upgrade)).toBe(0);
      });
    });

    it("should return zero for zero funds", () => {
      corporation.funds = 0;

      Object.values(CorpUpgrades).forEach((upgrade) => {
        expect(calculateMaxAffordableUpgrade(corporation, upgrade)).toBe(0);
      });
    });

    it("should be in sync with 'calculateUpgradeCost'", () => {
      for (let currentUpgradeLevel = 0; currentUpgradeLevel < 100; currentUpgradeLevel++) {
        Object.values(CorpUpgrades).forEach((upgrade) => {
          corporation.upgrades[upgrade.name].level = currentUpgradeLevel;

          for (let targetUpgradeLevel = currentUpgradeLevel + 1; targetUpgradeLevel < 100; targetUpgradeLevel++) {
            const calculatedCost = calculateUpgradeCost(corporation, upgrade, targetUpgradeLevel as PositiveInteger);
            corporation.funds = calculatedCost + 1; // +1 for floating point accuracy issues
            expect(calculateMaxAffordableUpgrade(corporation, upgrade)).toEqual(targetUpgradeLevel);
          }
        });
      }
    });
  });

  describe("Corporation totalShares", () => {
    it("should equal the sum of each kind of shares", () => {
      expect(corporation.totalShares).toEqual(
        corporation.numShares + corporation.investorShares + corporation.issuedShares,
      );
    });
    it("should be preserved by seed funding", () => {
      const seedFunded = true;
      Player.startCorporation("TestCorp", seedFunded);
      const corp = Player.corporation as Corporation;
      expect(corp.totalShares).toEqual(corp.numShares + corp.investorShares + corp.issuedShares);
    });
    it("should be preserved by acceptInvestmentOffer", () => {
      AcceptInvestmentOffer(corporation);
      expect(corporation.totalShares).toEqual(
        corporation.numShares + corporation.investorShares + corporation.issuedShares,
      );
    });
    it("should be preserved by goPublic", () => {
      const numShares = 1e8;
      GoPublic(corporation, numShares);
      expect(corporation.totalShares).toEqual(
        corporation.numShares + corporation.investorShares + corporation.issuedShares,
      );
    });
    it("should be preserved by IssueNewShares", () => {
      const numShares = 1e8;
      corporation.issueNewSharesCooldown = 0;
      IssueNewShares(corporation, numShares);
      expect(corporation.totalShares).toEqual(
        corporation.numShares + corporation.investorShares + corporation.issuedShares,
      );
    });
    it("should be preserved by BuyBackShares", () => {
      const numShares = 1e8;
      BuyBackShares(corporation, numShares);
      expect(corporation.totalShares).toEqual(
        corporation.numShares + corporation.investorShares + corporation.issuedShares,
      );
    });
    it("should be preserved by SellShares", () => {
      const numShares = 1e8;
      corporation.shareSaleCooldown = 0;
      SellShares(corporation, numShares);
      expect(corporation.totalShares).toEqual(
        corporation.numShares + corporation.investorShares + corporation.issuedShares,
      );
    });
  });
});
