/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/
import fs from 'fs';
import logger from './core/logger.js';

// initialize config
let config = {};

(async () => {
  // initializing all service
  let log = logger('index.js');
  log.info('initialize configuration ...')
  let configPath = (process.argv[2] || './config.jsonx');
  await fs.access(configPath, (err) => {
    if (err) {
      log.error(`failed to find file : ${configPath} please validate your config path`);
      process.exit(0);
    }
  });
})();