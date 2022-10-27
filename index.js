import fs from 'fs'
import inquirer from 'inquirer'
import generateHTML from './generateHTML.js'

console.log(generateHTML)

inquirer.prompt([
    {
        type:'input',
        message:'What is your Name?',
        name:'name'
    },
    {
        type:'input',
        message:'Whats your location?',
        name:'location'
    },
    {
        type:'input',
        message:'Tell a bit about yourself',
        name:'bio'
    },
    {
        type:'input',
        message:'What is your LinkedIn URL?',
        name:'linkedinURL'
    },
    {
        type:'input',
        message:'What is your Github URL',
        name:'githubURL'
    }
])
    .then(answers => {
        console.log(answers)

        const html = generateHTML(answers)
        console.log(html)

        fs.writeFile('./portfolio.html', html, error => {
            if(error) throw error

            console.log('HTML saved')
        })


        
    })
    .catch(error => console.log(error))

