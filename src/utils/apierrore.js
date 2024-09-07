class APIError extends console.error{
    constructor(
        statuscode,
        message,
        errores=[],
        stack

    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message=message
        this.success=false
        this.errores = this.errores
    }
}

export{APIError}
