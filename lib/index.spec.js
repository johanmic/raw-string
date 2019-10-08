"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe('raw-string', function () {
    it('parses the a string without any special chars', function () {
        var str = 'M.A.N.D.Y';
        expect(index_1.default(str)).toEqual('mandy');
    });
});
