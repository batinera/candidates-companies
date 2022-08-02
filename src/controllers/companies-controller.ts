import { Request, Response } from 'express'
import { InstanceError } from 'sequelize/types'
import { Company } from '../models/company'

export const companiesController = {

    //GET /companies
    index: async(req: Request, res: Response) => {
        try {
            const companies = await Company.findAll()
            return res.json(companies)
        } catch (error) {
            if (error instanceof Error){
                return res.status(400).json({ message: error.message})
            }
        }
    },

    //POST /companies
    save: async(req: Request, res: Response) => {
        try {
            const { name, bio, website, email } = req.body
            const companies = await Company.create({
                name,
                bio,
                website,
                email
            })

            return res.status(201).json(companies)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

    //GET /companies/:id
    show: async (req: Request, res: Response) => {

        try {
            const { id } = req.params
            const company = await Company.findByPk(id)
            return res.json(company)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

    //PUT /companies/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, website, email } = req.body

        try {
            const [affectedRows, companies] = await Company.update({
                name,
                bio,
                website,
                email
            }, {
                where: { id },
                returning: true
            })

            return res.json(companies[0])
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

    //DELETE /companies/:id

    delete: async (req: Request, res: Response) => {

        try {
            const { id } = req.params
            await Company.destroy({ where: { id }})

            return res.status(204).send()
        } catch (error) {
            if (error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    }
}