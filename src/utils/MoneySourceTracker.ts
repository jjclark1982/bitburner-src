import { MoneySource as NSMoneySource } from "@nsdefs";
import type { TypedKeys } from "../types";

import { Generic_fromJSON, Generic_toJSON, constructorsForReviver, IReviverValue } from "./JSONReviver";

export type MoneySource = TypedKeys<MoneySourceTrackerRecord, number>;

class MoneySourceTrackerRecord {
  starting = 0;
  bladeburner = 0;
  casino = 0;
  class = 0;
  codingcontract = 0;
  corporation = 0;
  crime = 0;
  gang = 0;
  hacking = 0;
  hacknet = 0;
  hospitalization = 0;
  infiltration = 0;
  sleeves = 0;
  stock = 0;
  total = 0;
  work = 0;
  servers = 0;
  other = 0;
  augmentations = 0;
}

export class MoneySourceTracker {
  income: MoneySourceTrackerRecord = new MoneySourceTrackerRecord();
  expenses: MoneySourceTrackerRecord = new MoneySourceTrackerRecord();

  // Record money earned
  record(amt: number, source: MoneySource): void {
    if (amt > 0) {
      this.income[source] += amt;
      this.income.total += amt;
    } else {
      this.expenses[source] -= amt;
      this.expenses.total -= amt;
    }
  }

  // Returns true if there's any income or expenses for this source
  hasAnythingFrom(source: MoneySource): boolean {
    return this.income[source] > 0 || this.expenses[source] > 0;
  }

  getIncome(source: MoneySource = "total"): number {
    return this.income[source];
  }

  getExpenses(source: MoneySource = "total"): number {
    return this.expenses[source];
  }

  getTotal(source: MoneySource = "total"): number {
    return this.income[source] - this.expenses[source];
  }

  // Reset the money tracker by setting all stats to 0
  reset(): void {
    this.income = new MoneySourceTrackerRecord();
    this.expenses = new MoneySourceTrackerRecord();
  }

  toGetMoneySource(): NSMoneySource {
    const ret: NSMoneySource = {
      bladeburner: this.getTotal("bladeburner"),
      casino: this.getTotal("casino"),
      class: this.getTotal("class"),
      codingcontract: this.getTotal("codingcontract"),
      corporation: this.getTotal("corporation"),
      crime: this.getTotal("crime"),
      gang: this.getIncome("gang"),
      gang_expenses: this.getExpenses("gang"),
      hacking: this.getTotal("hacking"),
      hacknet: this.getIncome("hacknet"),
      hacknet_expenses: this.getExpenses("hacknet"),
      hospitalization: this.getTotal("hospitalization"),
      infiltration: this.getTotal("infiltration"),
      sleeves: this.getTotal("sleeves"),
      stock: this.getTotal("stock"),
      total: this.getTotal("total"),
      work: this.getTotal("work"),
      servers: this.getTotal("servers"),
      other: this.getTotal("other"),
      augmentations: this.getTotal("augmentations"),
    };
    return ret;
  }

  isValidMoneySource(value: string): value is MoneySource {
    return this.income.hasOwnProperty(value);
  }

  // Serialize the current object to a JSON save state.
  toJSON(): IReviverValue {
    return Generic_toJSON("MoneySourceTracker", this);
  }

  // Initializes a MoneySourceTracker object from a JSON save state.
  static fromJSON(value: IReviverValue): MoneySourceTracker {
    return Generic_fromJSON(MoneySourceTracker, value.data);
  }
}

constructorsForReviver.MoneySourceTracker = MoneySourceTracker;
