export default authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader.replace('Bearer ', '')
    if (token == null) {
        return res.sendStatus(401)
    }
    const jwtToken = jwt.verify(token, ck.ACCESS_TOKEN_SECRET)
    res.send(jwtToken.id)
}

module.exports = authenticateToken