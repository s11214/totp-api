const { authenticator } = require('otplib');

export default function handler(req, res) {
    const secret = 'YOUR_SECRET_KEY'; // 替换为你的密钥
    const token = authenticator.generate(secret);
    res.status(200).json({ token });
}
