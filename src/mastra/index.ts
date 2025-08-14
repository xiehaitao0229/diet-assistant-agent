import { Mastra } from "@mastra/core";
import { dietAgent } from "./agents/diet-agent";
import { dietLoggingWorkflow } from "./workflows/diet-logging-workflow";
import { CloudflareDeployer } from "@mastra/deployer-cloudflare";

export const mastra = new Mastra({
  agents: {
    dietAgent
  },
  workflows: {
    dietLoggingWorkflow
  },
  deployer: new CloudflareDeployer({
    projectName: "diet-assistant-agent",
    compatibilityFlags: ["nodejs_compat"],
  }),
});