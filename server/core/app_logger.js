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
import winston from "winston";

export default class AppLogger {
  logger = null

  constructor(option = {}) {
    if (option == null || option === {} || typeof (option) === 'undefined') {
      this.logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: {
          service: 'user-service'
        },
        transports: [
          new winston.transports.Console(),
          new winston.transports.File({
            filename: './logs/error.log',
            level: 'error'
          }),
          new winston.transports.File({
            filename: './logs/combined.log'
          })
        ],
      })
    }

    // todo: if player has define some option
  }

  info(message) {
    this.logger.log({level: 'info', message: message})
  }

  warn() {
    // todo: warning
  }
}