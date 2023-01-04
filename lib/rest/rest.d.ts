import { APIGatewayProxyResult } from "aws-lambda";
import { RestError } from "../types";
export declare abstract class Response implements APIGatewayProxyResult {
    statusCode: number;
    body: string;
    constructor(status: number, body: string);
}
export declare class ResponseOk<ObjectResponse> extends Response {
    constructor(objectRes: ObjectResponse);
}
export declare class ResponseNotContent extends Response {
    constructor();
}
export declare class ResponseBadRequest extends Response {
    constructor(errors: RestError[]);
}
export declare class ResponseInternalResponse extends Response {
    constructor();
}
