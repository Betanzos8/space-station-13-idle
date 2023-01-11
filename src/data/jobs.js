import { JOB as ENGINEERING_JOB } from "./engineering";
import { JOB as CHEMISTRY_JOB } from "./chemistry";
import { JOB as MINING_JOB } from "./mining";
import { JOB as XENOBIO_JOB } from "./xenobiology";
import { JOB as BOTANY_JOB } from "./botany";
import { JOB as COOKING_JOB } from "./cooking";
import { JOB as FABRICATION_JOB } from "./fabrication";
import { JOB as RESEARCH_JOB } from "./research";
import { JOB as GRAYTIDING_JOB } from "./graytiding";
import { JOB as TINKERING_JOB } from "./tinkering";
import { JOB as VALIDHUNTING_JOB } from "./validhunting";
import { JOB as SHITPOSTING_JOB } from "./shitposting";
import { JOB as BARTENDING_JOB } from "./bartending";
import { JOB as CARGONIA_JOB } from "./cargonia";
import { JOB as TRAITOR_JOB } from "./traitor";
import { JOB as CULT_JOB } from "./cult";
import { JOB as LING_JOB } from "./ling";

import { JOB as PRECISION_JOB } from "./precision";
import { JOB as MELEE_POWER_JOB } from "./meleePower";
import { JOB as RANGED_POWER_JOB } from "./rangedPower";
import { JOB as EVASION_JOB } from "./evasion";
import { JOB as COMMAND_JOB } from "./command";

export const ALL_JOBS = [
	MINING_JOB
]

export const COMBAT_JOBS = ALL_JOBS.filter(job => job.isCombat);