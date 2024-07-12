export const constants = {
    response: {
        status: {
            OK: 200,
            created: 201,
            unauthorized: 401,
            not_found: 404,
            bad_request: 400,
        },
        message: {
            OK: "Server on",
            unauthorized: "Unauthorized",
            jwt_token_required: "Token is required",
            jwt_token_invalid: "Token is invalid",
            created: "Created",
            not_found: "Not found",
            bad_request: "Bad request"
        }
    }
}
