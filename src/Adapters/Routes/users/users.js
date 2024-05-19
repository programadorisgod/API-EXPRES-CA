import { Router } from "express"


export const createRouterUser = ({ controller }) => {
    const BASE_URL = '/api/v1/users'

    const router = Router()

    router.get(BASE_URL, controller.getUsers)

    router.get(`${BASE_URL}/:id`, controller.getUser)

    router.post(BASE_URL, controller.saveUser)


    return router

}