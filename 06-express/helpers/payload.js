const response = (statusCode, data, message, res)=>{
    return res.status(statusCode).json({
        payload: {
            status_code: statusCode,
            datas: data,
            message: message
        },
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
    });
};

export default response;