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
    scope: "23aed57dc62184e8780a6a0b77b9a51f",
    projectName: "diet-assistant-agent",
  })
});