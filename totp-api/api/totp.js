const { authenticator } = require('otplib');

export default function handler(req, res) {
    const { secret } = req.query; // 从查询参数中获取密钥

    if (!secret) {
        return res.status(400).json({ error: "Missing secret key" });
    }

    const token = authenticator.generate(secret);
    res.status(200).json({ token });
}
