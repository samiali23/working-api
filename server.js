const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage':{
    'age': 28,
    'birthName': 'Sheyaa Bin Abraham-Jospeh',
    'birthLocation': 'London, England'
    },
    'chance the rapper':{
    'age': 29,
    'birthName': 'Abraham-Jospeh Sheyaa Bin',
    'birthLocation': 'England,London'
    },
    'unknown':{
        'age': 28,
        'birthName': 'nono',
        'birthLocation': 'nono'
        }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request,response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    }
    response.json(rappers[rapName])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 