import type { Company } from "../Company";
import type { CompanyPosition } from "../CompanyPosition";

import { Typography } from "@mui/material";
import { Player } from "@player";
import * as React from "react";
import { CONSTANTS } from "../../Constants";
import { calculateCompanyWorkStats } from "../../Work/Formulas";
import { MoneyRate } from "../../ui/React/MoneyRate";
import { ReputationRate } from "../../ui/React/ReputationRate";
import { StatsTable } from "../../ui/React/StatsTable";
import { AugmentationName, JobName } from "@enums";

const CYCLES_PER_SEC = 1000 / CONSTANTS.MilliPerCycle;
interface JobSummaryProps {
  company: Company;
  position: CompanyPosition;
}

export function JobSummary({ company, position }: JobSummaryProps): React.ReactElement {
  const workStats = calculateCompanyWorkStats(Player, company, position, company.favor);
  // Preview the effect of Empathy Suppressor when applying for a CEO position
  if (
    position.name == JobName.business5 &&
    !(Player.jobs[company.name] == position.name) &&
    Player.augmentations.some((aug) => aug.name == AugmentationName.EmpathySuppressor)
  ) {
    workStats.money *= 10;
  }
  return (
    <>
      <Typography>
        <u>{position.name}</u>
      </Typography>
      <StatsTable
        wide
        rows={[
          ["Wages:", <MoneyRate key="money" money={workStats.money * CYCLES_PER_SEC} />],
          ["Reputation:", <ReputationRate key="rep" reputation={workStats.reputation * CYCLES_PER_SEC} />],
        ]}
      />
    </>
  );
}
