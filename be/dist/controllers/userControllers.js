"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const getUsers = async (req, res) => {
    try {
        const users = await prismaClient_1.default.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prismaClient_1.default.user.create({
            data: { name, email },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};
exports.createUser = createUser;
