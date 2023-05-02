/* Inhämtar alla "paket" */

//import av dotenv för att gömma känsliga nycklar
import * as dotenv from 'dotenv'
//implementerar dotenv
dotenv.config()
//Hämtar express
import express  from 'express'
//Hämtar CORS, hanterar olika request http paket
import cors from 'cors'
//Hämtar postgress sql
import pg from 'pg'
//hämtar client paketet så kommunikation mellan server och databas fungerar
import Client from 'pg'
//Hämta body-parser (Ett middleware som kan hantera olika request metoder stödjer flera format)
import bodyParser from 'body-parser'
//Importerar path som gör att vi kan använda statiska filer på valfri plats i vårt projekt
import path from 'path'
/* Implementerar express tillsammans med "app" */
const app = express()

/* Lägger in middlewares */
//Bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//Cors
app.use(cors())
//Express ska användas med json formatet
app.use(express.json())
//Förbättrar cors kommunikation
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
//Använder path för att komma åt våra statiska filer, i detta fallet i vår kommande public mapp i vår frontend
app.use(express.static(path.join(path.resolve(), 'public')))


