import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { createRouterUser } from '../Adapters/Routes/users/users.js'
import { useCaseUser } from '../useCase/users/users.js'
import ControllerUser from '../Adapters/Controllers/users/users.js'
import RepositoryUser from '../Adapters/Repository/users/users.js'

const app = express()
const PORT = process.env.PORT || process.argv[3] || 3000


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('<h1>Hola amigos!!</h1>')
})


const respositoryUser = new RepositoryUser()
const useCase = new useCaseUser({ repository: respositoryUser })
const controllerUser = new ControllerUser({ useCase })
app.use(createRouterUser({ controller: controllerUser }))


app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})

