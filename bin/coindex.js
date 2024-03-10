#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

import pkg from '../package.json' with { type: "json" };

program
.version(pkg.version)
.command('key', 'Manage API Key -- https://nomics.com')
.parse(process.argv);

console.log("Hello");