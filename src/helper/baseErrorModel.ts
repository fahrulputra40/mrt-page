export default interface ErrorModel{
    statusCode: string,
    message: string,
}


export function convertToErrorModel (data:any): ErrorModel {
    const error: ErrorModel = {
        message: data.message || "Data Error",
        statusCode: data.statusCode || 500
    }

    return error;

}

export function errorSessionExpired():Promise<any>{
    return Promise.reject(<ErrorModel>{
        message: "Sesi telah berakhir",
        statusCode: "01"
    });
}