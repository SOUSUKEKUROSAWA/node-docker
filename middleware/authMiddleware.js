const protect = (req, res, next) => {

    const {user} = req.session // 分割代入

    if (!user) {
        return res.status(401).json({
            status: "fail",
            message: "unauthorized"
        })
    }

    req.user = user // for accessing directly to user data

    next()

}

module.exports = protect