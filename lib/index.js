"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_deburr_1 = __importDefault(require("lodash.deburr"));
exports.default = (function (str) { return lodash_deburr_1.default(str).replace(/\W+/g, "").toLowerCase().trim(); });
