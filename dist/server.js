"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = 8080;
    const app = express_1.default();
    app.listen(port, () => {
        console.log(`Api is listening on port : ${port}`);
    });
    app.use(body_parser_1.default.json());
    app.use('/', authMiddleware);
    const uri = "mongodb+srv://shlokm289:quiver1985@cluster0.ccgx8.mongodb.net/indebit-main?retryWrites=true&w=majority";
    const client = new mongodb_1.MongoClient(uri, {
        useUnifiedTopology: true
    });
    yield client.connect();
    console.log("Connection established: ", client.isConnected());
});
main();
//# sourceMappingURL=server.js.map