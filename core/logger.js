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
import 'winston-daily-rotate-file';
import winston from "winston";
import moment from "moment";

export default function logger(module) {
  return winston.createLogger({
    format: winston.format.printf((opt) => {
      return JSON.stringify(
        {
          level: opt.level,
          message: opt.message,
          timestamp: moment().format('YYYY-MM-DD hh:mm:ss'),
        }
      )
    }),
    defaultMeta: {
      moduleName: module,
    },
    transports: [
      new winston.transports.Console({}),
      new winston.transports.DailyRotateFile({
        filename: 'logs/info/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '20m',
        maxFiles: '14d',
        level: 'info'
      }),
      new winston.transports.DailyRotateFile({
        filename: 'logs/errors/%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '20m',
        maxFiles: '14d',
        level: 'error'
      })
    ],
    exitOnError: false
  });
}