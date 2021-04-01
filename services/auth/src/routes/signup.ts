import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();
router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 8, max:20 })
        .withMessage('Password must be between 8 to 20 chatacters')
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send(errors.array())
    }

    const { email, passowrd } = req.body;

    if(!email || typeof email !== 'string'){
        res.status(400).send('Provide a valid email');
    }
});
export { router as signupRouter }