export interface RestError {
    type: string;
    message: string;
}
export type RestErrorHandler = {
    errors: RestError[];
};
