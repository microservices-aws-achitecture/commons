import { APIGatewayEvent } from "aws-lambda";
import {data as dataBase} from "./dataBase"

const data:APIGatewayEvent = dataBase;

data.body = JSON.stringify({content:"Hola"});

export { data };
