const userPayloads = (status, msg, data, res)=>{
    return res.status(status).json({
        payload: {
                statusCode: status,
                message: msg,
                data
        }
    })
}

export default userPayloads;