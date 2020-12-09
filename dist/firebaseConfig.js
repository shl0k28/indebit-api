"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const credentials = require("./serviceAccountKey.json");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(credentials),
    databaseURL: "https://<yourproject>.firebaseio.com",
});
module.exports = firebase_admin_1.default;
//# sourceMappingURL=firebaseConfig.js.map