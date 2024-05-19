export default class ControllerUser {

    constructor({ useCase }) {
        this.useCase = useCase
    }

    getUsers = async (req, res) => {
        try {
            const users = await this.useCase.getUsers()
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
        }
    }


    getUser = async (req, res) => {
        try {
            const { id } = req.params
            const user = await this.useCase.getUser({ id })
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
        }
    }


    saveUser = async (req, res) => {
        try {

            const result = await this.useCase.saveUser({ input: req.body })

            res.status(201).send(result)

        } catch (error) {
            console.log(error)
        }
    }

}