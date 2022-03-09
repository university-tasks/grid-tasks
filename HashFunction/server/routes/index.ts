import { Router } from 'express';
import hash from '../hash';

const router = Router();

/**
 * @swagger
 * /api/sha256/{str}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: str
 *         required: true
 *         schema:
 *           type: string
 *         description: Text you want to encrypt
 *     summary: Returns hash encrypted with sha256 for a given string
 *     responses:
 *       200:
 *         description: encrypted string
 *         content: text/plain; charset=utf-8
 */
router.get('/sha256/:text', (req, res) => {
    console.log('SHA256', req.params.text);
    return res.status(200).json(hash.sha256(req.params.text));
});

/**
 * @swagger
 * /api/streebog/{str}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: str
 *         required: true
 *         schema:
 *           type: string
 *         description: Text you want to encrypt
 *     summary: Returns hash encrypted with streebog for a given string
 *     responses:
 *       200:
 *         description: encrypted string
 *         content: text/plain; charset=utf-8
 */
router.get('/streebog/:text', (req, res) => {
    console.log('STREEBOG', req.params.text);
    return res.status(200).json(hash.streebog(req.params.text));
});

export default router;
