#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

import pkg from '../package.json' with { type: "json" };

program
.version(pkg.version)
.command('key', 'Manage API Key -- https://www.coinapi.io')
.command('check', 'Check Coin Price Info')
.parse(process.argv);
