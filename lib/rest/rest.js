"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInternalResponse = exports.ResponseBadRequest = exports.ResponseNotContent = exports.ResponseOk = exports.Response = void 0;
class Response {
    constructor(status, body) {
        this.statusCode = status;
        this.body = body;
    }
}
exports.Response = Response;
class ResponseOk extends Response {
    constructor(objectRes) {
        super(200, JSON.stringify(objectRes));
    }
}
exports.ResponseOk = ResponseOk;
class ResponseNotContent extends Response {
    constructor() {
        super(204, "");
    }
}
exports.ResponseNotContent = ResponseNotContent;
class ResponseBadRequest extends Response {
    constructor(errors) {
        const errorBody = { errors };
        super(400, JSON.stringify(errorBody));
    }
}
exports.ResponseBadRequest = ResponseBadRequest;
class ResponseInternalResponse extends Response {
    constructor() {
        super(500, "Internal Server Response");
    }
}
exports.ResponseInternalResponse = ResponseInternalResponse;
//# sourceMappingURL=rest.js.map