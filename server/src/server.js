import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'

import mongoose from 'mongoose'

import connectToDB from './db/db'

const app = express()



