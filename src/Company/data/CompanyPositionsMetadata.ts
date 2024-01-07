// Metadata used for constructing Company Positions
import { JobName, JobField } from "@enums";
import { CompanyPositionCtorParams } from "../CompanyPosition";

export function getCompanyPositionMetadata(): Record<JobName, CompanyPositionCtorParams> {
  return {
    [JobName.software0]: {
      nextPosition: JobName.software1, // Junior Software Engineer
      field: JobField.software,
      baseSalary: 33,
      charismaEffectiveness: 15,
      charismaExpGain: 0.02,
      hackingEffectiveness: 85,
      hackingExpGain: 0.05,
      reqdHacking: 1,
      repMultiplier: 0.9,
    },
    [JobName.software1]: {
      nextPosition: JobName.software2, // Senior Software Engineer
      field: JobField.software,
      baseSalary: 80,
      charismaEffectiveness: 15,
      charismaExpGain: 0.05,
      hackingEffectiveness: 85,
      hackingExpGain: 0.1,
      reqdHacking: 51,
      reqdReputation: 8e3,
      repMultiplier: 1.1,
    },
    [JobName.software2]: {
      nextPosition: JobName.software3, // Lead Software Developer
      field: JobField.software,
      baseSalary: 165,
      charismaEffectiveness: 20,
      charismaExpGain: 0.08,
      hackingEffectiveness: 80,
      hackingExpGain: 0.4,
      reqdCharisma: 51,
      reqdHacking: 251,
      reqdReputation: 40e3,
      repMultiplier: 1.3,
    },
    [JobName.software3]: {
      nextPosition: JobName.software4, // Head of Software
      field: JobField.software,
      baseSalary: 500,
      charismaEffectiveness: 25,
      charismaExpGain: 0.1,
      hackingEffectiveness: 75,
      hackingExpGain: 0.8,
      reqdCharisma: 151,
      reqdHacking: 401,
      reqdReputation: 200e3,
      repMultiplier: 1.5,
    },
    [JobName.software4]: {
      nextPosition: JobName.software5, // Head of Engineering
      field: JobField.software,
      baseSalary: 800,
      charismaEffectiveness: 25,
      charismaExpGain: 0.5,
      hackingEffectiveness: 75,
      hackingExpGain: 1,
      reqdCharisma: 251,
      reqdHacking: 501,
      reqdReputation: 400e3,
      repMultiplier: 1.6,
      applyText: `Apply to be the ${JobName.software4}`,
      hiredText: `Congratulations, you are now the ${JobName.software4}`,
    },
    [JobName.software5]: {
      nextPosition: JobName.software6, // Vice President of Technology
      field: JobField.software,
      baseSalary: 1650,
      charismaEffectiveness: 25,
      charismaExpGain: 0.5,
      hackingEffectiveness: 75,
      hackingExpGain: 1.1,
      reqdCharisma: 251,
      reqdHacking: 501,
      reqdReputation: 800e3,
      repMultiplier: 1.6,
      applyText: `Apply to be the ${JobName.software5}`,
      hiredText: `Congratulations, you are now the ${JobName.software5}`,
    },
    [JobName.software6]: {
      nextPosition: JobName.software7, // Chief Technology Officer
      field: JobField.software,
      baseSalary: 2310,
      charismaEffectiveness: 30,
      charismaExpGain: 0.6,
      hackingEffectiveness: 70,
      hackingExpGain: 1.2,
      reqdCharisma: 401,
      reqdHacking: 601,
      reqdReputation: 1.6e6,
      repMultiplier: 1.75,
      applyText: `Apply to be the ${JobName.software6}`,
      hiredText: `Congratulations, you are now ${JobName.software6}`,
    },
    [JobName.software7]: {
      nextPosition: null,
      field: JobField.software,
      baseSalary: 2640,
      charismaEffectiveness: 35,
      charismaExpGain: 1,
      hackingEffectiveness: 65,
      hackingExpGain: 1.5,
      reqdCharisma: 501,
      reqdHacking: 751,
      reqdReputation: 3.2e6,
      repMultiplier: 2,
      applyText: `Apply to be the the ${JobName.software7}`,
      hiredText: `Congratulations, you are now the ${JobName.software7}`,
    },
    [JobName.IT0]: {
      nextPosition: JobName.IT1, // IT Analyst
      field: JobField.it,
      baseSalary: 26,
      charismaEffectiveness: 10,
      charismaExpGain: 0.01,
      hackingEffectiveness: 90,
      hackingExpGain: 0.04,
      reqdHacking: 1,
      repMultiplier: 0.9,
    },
    [JobName.IT1]: {
      nextPosition: JobName.IT2, // IT Manager
      field: JobField.it,
      baseSalary: 66,
      charismaEffectiveness: 15,
      charismaExpGain: 0.02,
      hackingEffectiveness: 85,
      hackingExpGain: 0.08,
      reqdHacking: 26,
      reqdReputation: 7e3,
      repMultiplier: 1.1,
    },
    [JobName.IT2]: {
      nextPosition: JobName.IT3, // Systems Administrator
      field: JobField.it,
      baseSalary: 132,
      charismaEffectiveness: 20,
      charismaExpGain: 0.1,
      hackingEffectiveness: 80,
      hackingExpGain: 0.3,
      reqdCharisma: 51,
      reqdHacking: 151,
      reqdReputation: 35e3,
      repMultiplier: 1.3,
    },
    [JobName.IT3]: {
      nextPosition: JobName.software5, // Head of Engineering
      field: JobField.it,
      baseSalary: 410,
      charismaEffectiveness: 20,
      charismaExpGain: 0.2,
      hackingEffectiveness: 80,
      hackingExpGain: 0.5,
      reqdCharisma: 76,
      reqdHacking: 251,
      reqdReputation: 175e3,
      repMultiplier: 1.4,
    },
    [JobName.securityEng]: {
      nextPosition: JobName.software5, // Head of Engineering
      field: JobField.securityEngineer,
      baseSalary: 121,
      charismaEffectiveness: 15,
      charismaExpGain: 0.05,
      hackingEffectiveness: 85,
      hackingExpGain: 0.4,
      reqdCharisma: 26,
      reqdHacking: 151,
      reqdReputation: 35e3,
      repMultiplier: 1.2,
    },
    [JobName.networkEng0]: {
      nextPosition: JobName.networkEng1, // Network Administrator
      field: JobField.networkEngineer,
      baseSalary: 121,
      charismaEffectiveness: 15,
      charismaExpGain: 0.05,
      hackingEffectiveness: 85,
      hackingExpGain: 0.4,
      reqdCharisma: 26,
      reqdHacking: 151,
      reqdReputation: 35e3,
      repMultiplier: 1.2,
    },
    [JobName.networkEng1]: {
      nextPosition: JobName.software5, // Head of Engineering
      field: JobField.networkEngineer,
      baseSalary: 410,
      charismaEffectiveness: 20,
      charismaExpGain: 0.1,
      hackingEffectiveness: 80,
      hackingExpGain: 0.5,
      reqdCharisma: 76,
      reqdHacking: 251,
      reqdReputation: 175e3,
      repMultiplier: 1.3,
    },
    [JobName.business0]: {
      nextPosition: JobName.business1, // Business Analyst
      field: JobField.business,
      baseSalary: 46,
      charismaEffectiveness: 90,
      charismaExpGain: 0.08,
      hackingEffectiveness: 10,
      hackingExpGain: 0.01,
      reqdCharisma: 1,
      reqdHacking: 1,
      repMultiplier: 0.9,
    },
    [JobName.business1]: {
      nextPosition: JobName.business2, // Business Manager
      field: JobField.business,
      baseSalary: 100,
      charismaEffectiveness: 85,
      charismaExpGain: 0.15,
      hackingEffectiveness: 15,
      hackingExpGain: 0.02,
      reqdCharisma: 51,
      reqdHacking: 6,
      reqdReputation: 8e3,
      repMultiplier: 1.1,
    },
    [JobName.business2]: {
      nextPosition: JobName.business3, // Operations Manager
      field: JobField.business,
      baseSalary: 200,
      charismaEffectiveness: 85,
      charismaExpGain: 0.3,
      hackingEffectiveness: 15,
      hackingExpGain: 0.02,
      reqdCharisma: 101,
      reqdHacking: 51,
      reqdReputation: 40e3,
      repMultiplier: 1.3,
    },
    [JobName.business3]: {
      nextPosition: JobName.business4, // Chief Financial Officer
      field: JobField.business,
      baseSalary: 660,
      charismaEffectiveness: 85,
      charismaExpGain: 0.4,
      hackingEffectiveness: 15,
      hackingExpGain: 0.02,
      reqdCharisma: 226,
      reqdHacking: 51,
      reqdReputation: 200e3,
      repMultiplier: 1.5,
    },
    [JobName.business4]: {
      nextPosition: JobName.business5, // Chief Executive Officer
      field: JobField.business,
      baseSalary: 1950,
      charismaEffectiveness: 90,
      charismaExpGain: 1,
      hackingEffectiveness: 10,
      hackingExpGain: 0.05,
      reqdCharisma: 501,
      reqdHacking: 76,
      reqdReputation: 800e3,
      repMultiplier: 1.6,
      applyText: `Apply to be the ${JobName.business4}`,
      hiredText: `Congratulations, you are now the ${JobName.business4}`,
    },
    [JobName.business5]: {
      nextPosition: null,
      field: JobField.business,
      baseSalary: 3900,
      charismaEffectiveness: 90,
      charismaExpGain: 1.5,
      hackingEffectiveness: 10,
      hackingExpGain: 0.05,
      reqdCharisma: 751,
      reqdHacking: 101,
      reqdReputation: 3.2e6,
      repMultiplier: 1.75,
      applyText: `Apply to be the ${JobName.business5}`,
      hiredText: `Congratulations, you are now the ${JobName.business5}`,
    },
    [JobName.security0]: {
      nextPosition: JobName.security1, // Security Officer
      field: JobField.security,
      baseSalary: 50,
      hackingEffectiveness: 5,
      strengthEffectiveness: 20,
      defenseEffectiveness: 20,
      dexterityEffectiveness: 20,
      agilityEffectiveness: 20,
      charismaEffectiveness: 15,
      hackingExpGain: 0.01,
      strengthExpGain: 0.04,
      defenseExpGain: 0.04,
      dexterityExpGain: 0.04,
      agilityExpGain: 0.04,
      charismaExpGain: 0.02,
      reqdStrength: 51,
      reqdDefense: 51,
      reqdDexterity: 51,
      reqdAgility: 51,
      reqdCharisma: 1,
      repMultiplier: 1,
    },
    [JobName.security1]: {
      nextPosition: JobName.security2, // Security Supervisor
      field: JobField.security,
      baseSalary: 195,
      hackingEffectiveness: 10,
      strengthEffectiveness: 20,
      defenseEffectiveness: 20,
      dexterityEffectiveness: 20,
      agilityEffectiveness: 20,
      charismaEffectiveness: 10,
      hackingExpGain: 0.02,
      strengthExpGain: 0.1,
      defenseExpGain: 0.1,
      dexterityExpGain: 0.1,
      agilityExpGain: 0.1,
      charismaExpGain: 0.05,
      reqdHacking: 26,
      reqdStrength: 151,
      reqdDefense: 151,
      reqdDexterity: 151,
      reqdAgility: 151,
      reqdCharisma: 51,
      reqdReputation: 8e3,
      repMultiplier: 1.1,
    },
    [JobName.security2]: {
      nextPosition: JobName.security3, // Head of Security
      field: JobField.security,
      baseSalary: 660,
      hackingEffectiveness: 10,
      strengthEffectiveness: 15,
      defenseEffectiveness: 15,
      dexterityEffectiveness: 15,
      agilityEffectiveness: 15,
      charismaEffectiveness: 30,
      hackingExpGain: 0.02,
      strengthExpGain: 0.12,
      defenseExpGain: 0.12,
      dexterityExpGain: 0.12,
      agilityExpGain: 0.12,
      charismaExpGain: 0.1,
      reqdHacking: 26,
      reqdStrength: 251,
      reqdDefense: 251,
      reqdDexterity: 251,
      reqdAgility: 251,
      reqdCharisma: 101,
      reqdReputation: 36e3,
      repMultiplier: 1.25,
    },
    [JobName.security3]: {
      nextPosition: null,
      field: JobField.security,
      baseSalary: 1320,
      hackingEffectiveness: 10,
      strengthEffectiveness: 15,
      defenseEffectiveness: 15,
      dexterityEffectiveness: 15,
      agilityEffectiveness: 15,
      charismaEffectiveness: 30,
      hackingExpGain: 0.05,
      strengthExpGain: 0.15,
      defenseExpGain: 0.15,
      dexterityExpGain: 0.15,
      agilityExpGain: 0.15,
      charismaExpGain: 0.15,
      reqdHacking: 51,
      reqdStrength: 501,
      reqdDefense: 501,
      reqdDexterity: 501,
      reqdAgility: 501,
      reqdCharisma: 151,
      reqdReputation: 144e3,
      repMultiplier: 1.4,
    },
    [JobName.agent0]: {
      nextPosition: JobName.agent1, // Secret Agent
      field: JobField.agent,
      baseSalary: 330,
      hackingEffectiveness: 10,
      strengthEffectiveness: 15,
      defenseEffectiveness: 15,
      dexterityEffectiveness: 20,
      agilityEffectiveness: 20,
      charismaEffectiveness: 20,
      hackingExpGain: 0.04,
      strengthExpGain: 0.08,
      defenseExpGain: 0.08,
      dexterityExpGain: 0.08,
      agilityExpGain: 0.08,
      charismaExpGain: 0.05,
      reqdHacking: 101,
      reqdStrength: 101,
      reqdDefense: 101,
      reqdDexterity: 101,
      reqdAgility: 101,
      reqdCharisma: 101,
      reqdReputation: 8e3,
      repMultiplier: 1,
    },
    [JobName.agent1]: {
      nextPosition: JobName.agent2, // Special Operative
      field: JobField.agent,
      baseSalary: 990,
      hackingEffectiveness: 15,
      strengthEffectiveness: 15,
      defenseEffectiveness: 15,
      dexterityEffectiveness: 20,
      agilityEffectiveness: 20,
      charismaEffectiveness: 15,
      hackingExpGain: 0.1,
      strengthExpGain: 0.15,
      defenseExpGain: 0.15,
      dexterityExpGain: 0.15,
      agilityExpGain: 0.15,
      charismaExpGain: 0.1,
      reqdHacking: 201,
      reqdStrength: 251,
      reqdDefense: 251,
      reqdDexterity: 251,
      reqdAgility: 251,
      reqdCharisma: 201,
      reqdReputation: 32e3,
      repMultiplier: 1.25,
    },
    [JobName.agent2]: {
      nextPosition: null,
      field: JobField.agent,
      baseSalary: 2000,
      hackingEffectiveness: 15,
      strengthEffectiveness: 15,
      defenseEffectiveness: 15,
      dexterityEffectiveness: 20,
      agilityEffectiveness: 20,
      charismaEffectiveness: 15,
      hackingExpGain: 0.15,
      strengthExpGain: 0.2,
      defenseExpGain: 0.2,
      dexterityExpGain: 0.2,
      agilityExpGain: 0.2,
      charismaExpGain: 0.15,
      reqdHacking: 251,
      reqdStrength: 501,
      reqdDefense: 501,
      reqdDexterity: 501,
      reqdAgility: 501,
      reqdCharisma: 251,
      reqdReputation: 162e3,
      repMultiplier: 1.5,
    },
    [JobName.waiter]: {
      nextPosition: null,
      field: JobField.waiter,
      baseSalary: 22,
      strengthEffectiveness: 10,
      dexterityEffectiveness: 10,
      agilityEffectiveness: 10,
      charismaEffectiveness: 70,
      strengthExpGain: 0.02,
      defenseExpGain: 0.02,
      dexterityExpGain: 0.02,
      agilityExpGain: 0.02,
      charismaExpGain: 0.05,
      repMultiplier: 1,
      applyText: `Apply to be a ${JobName.waiter}`,
      hiredText: `Congratulations, you are now employed as a ${JobName.waiter}`,
    },
    [JobName.employee]: {
      nextPosition: null,
      field: JobField.employee,
      baseSalary: 22,
      strengthEffectiveness: 10,
      dexterityEffectiveness: 10,
      agilityEffectiveness: 10,
      charismaEffectiveness: 70,
      strengthExpGain: 0.02,
      defenseExpGain: 0.02,
      dexterityExpGain: 0.02,
      agilityExpGain: 0.02,
      charismaExpGain: 0.04,
      repMultiplier: 1,
      applyText: `Apply to be an ${JobName.employee}`,
      hiredText: "Congratulations, you are now employed",
    },
    [JobName.softwareConsult0]: {
      nextPosition: JobName.softwareConsult1, // Senior Software Consultant
      field: JobField.softwareConsultant,
      baseSalary: 66,
      hackingEffectiveness: 80,
      charismaEffectiveness: 20,
      hackingExpGain: 0.08,
      charismaExpGain: 0.03,
      reqdHacking: 51,
      repMultiplier: 1,
      applyText: `Pitch a Software Consulting contract`,
      hiredText: `Congratulations, you got a contract as a ${JobName.softwareConsult0}`,
    },
    [JobName.softwareConsult1]: {
      nextPosition: null,
      field: JobField.softwareConsultant,
      baseSalary: 132,
      hackingEffectiveness: 75,
      charismaEffectiveness: 25,
      hackingExpGain: 0.25,
      charismaExpGain: 0.06,
      reqdHacking: 251,
      reqdCharisma: 51,
      repMultiplier: 1.2,
      applyText: `Pitch a Software Consulting contract`,
      hiredText: `Congratulations, you got a contract as a ${JobName.softwareConsult1}`,
    },
    [JobName.businessConsult0]: {
      nextPosition: JobName.businessConsult1, // Senior Business Consultant
      field: JobField.businessConsultant,
      baseSalary: 66,
      hackingEffectiveness: 20,
      charismaEffectiveness: 80,
      hackingExpGain: 0.015,
      charismaExpGain: 0.15,
      reqdHacking: 6,
      reqdCharisma: 51,
      repMultiplier: 1,
      applyText: `Pitch a Business Consulting contract`,
      hiredText: `Congratulations, you got a contract as a ${JobName.businessConsult0}`,
    },
    [JobName.businessConsult1]: {
      nextPosition: null,
      field: JobField.businessConsultant,
      baseSalary: 525,
      hackingEffectiveness: 15,
      charismaEffectiveness: 85,
      hackingExpGain: 0.015,
      charismaExpGain: 0.3,
      reqdHacking: 51,
      reqdCharisma: 226,
      repMultiplier: 1.2,
      applyText: `Pitch a Business Consulting contract`,
      hiredText: `Congratulations, you got a contract as a ${JobName.businessConsult1}`,
    },
    [JobName.waiterPT]: {
      nextPosition: null,
      field: JobField.waiter,
      baseSalary: 20,
      strengthEffectiveness: 10,
      dexterityEffectiveness: 10,
      agilityEffectiveness: 10,
      charismaEffectiveness: 70,
      strengthExpGain: 0.0075,
      defenseExpGain: 0.0075,
      dexterityExpGain: 0.0075,
      agilityExpGain: 0.0075,
      charismaExpGain: 0.04,
      repMultiplier: 1,
      isPartTime: true,
      applyText: `Apply to be a ${JobName.waiterPT}`,
      hiredText: `Congratulations, you are now employed as a ${JobName.waiterPT}`,
    },
    [JobName.employeePT]: {
      nextPosition: null,
      field: JobField.employee,
      baseSalary: 20,
      strengthEffectiveness: 10,
      dexterityEffectiveness: 10,
      agilityEffectiveness: 10,
      charismaEffectiveness: 70,
      strengthExpGain: 0.0075,
      defenseExpGain: 0.0075,
      dexterityExpGain: 0.0075,
      agilityExpGain: 0.0075,
      charismaExpGain: 0.03,
      repMultiplier: 1,
      isPartTime: true,
      applyText: `Apply to be a ${JobName.employeePT}`,
      hiredText: "Congratulations, you are now employed part-time",
    },
  };
}
