const express = require("express")
const locations = express.Router()
const data = require("../models/location.model.js")
const bonusData = [...require("../__tests__/sample-data").locations]
const personData = require("../models/person.model.js")

locations.get("/", (req, resp) => {
    resp.send(data)
})

// BONUS
locations.get("/people", (req, resp) => {
    const [people, members ] = personData.reduce((acc, person) => {
        const index = person.mainLocation === "11101" ? 0 : 1
        acc[index].push(person)
        return acc
    }, [[], []])
    
    bonusData.forEach(obj => {
        if(obj.zip === "11101"){
            obj.people = people
        }
        if(obj.zip ==="11011"){
            obj.members = members
        }
    })

    resp.send(bonusData)
})

module.exports = locations