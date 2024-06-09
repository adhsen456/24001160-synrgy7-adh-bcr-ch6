import * as service from '../services/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const SALT = 10;
const SECRET_KEY = 'SUPERADMINNN';

export const checkUser = (req: Request, res: Response) => {
    const userData = req.user;
    res.json({ user: userData });
};

const checkPassword = (hashedPassword: string, password: string | Buffer) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, (err, isPasswordCorrect) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(isPasswordCorrect);
        });
    });
};

const createToken = (payload: any): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

export const loginAsSuperAdmin = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await service.getUserByEmail(email);
    if (!user) {
        res.status(404).json({ 
            message: 'Account is not registered yet' 
        });
        return;
    }
    const isPasswordCorrect = await checkPassword(user.password, password);
    if (!isPasswordCorrect) {
        res.status(401).json({ 
            message: 'Wrong email or password!' 
        });
        return;
    }
    const token = createToken({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
    res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
};

export const loginAsAdmin = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await service.getUserByEmail(email);
    if (!user) {
        res.status(404).json({ 
            message: 'Account is not registered yet' 
        });
        return;
    }
    const isPasswordCorrect = await checkPassword(user.password, password);
    if (!isPasswordCorrect) {
        res.status(401).json({ 
            message: 'Wrong email or password!' 
        });
        return;
    }
    const token = createToken({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
    res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
};

export const loginAsMember = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await service.getUserByEmail(email);
    if (!user) {
        res.status(404).json({ 
            message: 'Account is not registered yet' 
        });
        return;
    }
    const isPasswordCorrect = await checkPassword(user.password, password);
    if (!isPasswordCorrect) {
        res.status(401).json({ 
            message: 'Wrong email and password' 
        });
        return;
    }
    const token = createToken({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
    res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
};

const hashPassword = (password: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, SALT, (err, hashedPassword) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(hashedPassword);
        });
    });
};

export const createAdmin = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const role = 'admin';

    try {
        const hashedPassword = await bcrypt.hash(password, SALT);
        const newAdmin = await service.createUserAdmin({ name, email, password: hashedPassword, role, createdAt: new Date(), updatedAt: new Date() });
        return res.status(201).json({ 
            message: 'Admin account has been created', user: newAdmin 
        });
    } catch (error) {
        return res.status(500).json({ 
            error: true,
            message: error,
        });
    }
};

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const role = 'member';

    try {
        const hashedPassword = await bcrypt.hash(password, SALT);
        const newUser = await service.createUser({ name, email, password: hashedPassword, role, createdAt: new Date(), updatedAt: new Date() });
        return res.status(201).json({ 
            message: 'User account has been created',
            user: newUser,
        });
    } catch (error) {
        console.error('Error creating admin user:', error);
        return res.status(500).json({
            error: true,
            message: error,
        });
    }
};