import { APIGatewayProxyResult} from "aws-lambda"
import { RestError, RestErrorHandler } from "../types";

export abstract class Response implements APIGatewayProxyResult{
	statusCode: number;
	body: string;
	constructor(status:number,body:string){
		this.statusCode = status;
		this.body = body;
	}
}

export class ResponseOk<ObjectResponse> extends Response{
        constructor(objectRes:ObjectResponse){
		super(200,JSON.stringify(objectRes));
	}	
}

export class ResponseNotContent extends Response{
        constructor(){
		super(204,"");
	}	
}

export class ResponseBadRequest extends Response{
        constructor(errors:RestError[]){
		const errorBody:RestErrorHandler = {errors};
		super(400,JSON.stringify(errorBody));
	}	
}

export class ResponseInternalResponse extends Response{
	constructor(){
		super(500,"Internal Server Response")
	}
}
