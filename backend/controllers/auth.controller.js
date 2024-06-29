import { constants } from '../services/utils/constants.js'
import { register as register_service, login as login_service } from '../services/user.service.js'

const { status } = constants.response

const register = async (req, res) => {
    const result = await register_service(req.body);

    res.status(result.process ? status.created : status.bad_request).json(result)

}

const login = async (req, res) => {
    const result = await login_service(req.body);

    res.status(result.process ? status.created : status.bad_request).json(result)
}

export { register, login }