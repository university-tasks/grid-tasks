import crypto, { BinaryLike } from 'crypto';
const { gostEngine } = require('node-gost-crypto');

const sha256 = (str: string) => {
    console.log("hash secret", process.env.HASH_SECRET);
    const hasher = crypto.createHmac('sha256', process.env.HASH_SECRET as BinaryLike);
    return hasher.update(str).digest('hex');
};

const streebog = (str: string) => {
    const buffer = Buffer.from(str);

    const digest = gostEngine.getGostDigest({
        name: 'GOST R 34.11',
        length: 256,
        version: 1994,
    });

    return Buffer.from(digest.digest(buffer)).toString('hex');
};

export default {
    sha256,
    streebog,
};
