import express from 'express'

const routes = express.Router()

routes.get("/", (req, res)=>{
    return res.json('Its Work')
})

export default routes
