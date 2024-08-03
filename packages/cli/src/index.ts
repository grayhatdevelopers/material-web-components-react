#!/usr/bin/env node
import { add } from "./commands/add.js"
import { diff } from "./commands/diff.js"
import { init } from "./commands/init.js"
import { Command } from "commander"

import { getPackageInfo } from "./utils/get-package-info.js"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
  const packageInfo = await getPackageInfo()

  const program = new Command()
    .name("md-cli")
    .description("Add Material components to your React apps.")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number"
    )

  program.addCommand(init).addCommand(add).addCommand(diff)

  program.parse()
}

main()
