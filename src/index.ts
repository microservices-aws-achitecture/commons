
import { ResponseInternalResponse,Response,ResponseBadRequest } from "./rest/rest";

export * from "./rest/rest"

export * from "./types"


export function ExceptionFilter(e:any):Response{
	if(e instanceof ResponseBadRequest)
		return e;
	else
		console.log(e);
		return new ResponseInternalResponse();
}
