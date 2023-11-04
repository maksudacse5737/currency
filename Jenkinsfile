// Declarative //
pipeline {
    agent any

    stages {
        stage('Cloning code') {
            steps {
                echo 'cloning..'
                git url:"https://github.com/maksudacse5737/currency.git", branch: "main"
            }
        }
        stage('Build') {
            steps {
                echo 'building..'
               // sh "npm build -t test-code.js"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'node test-code.js'
            }
        }
    }
}
// Script //
// node {
//     stage('Build') {
//         echo 'Building....'
//     }
//     stage('Test') {
//            echo 'Testing....'
//         }
//     stage('Deploy') {
//         echo 'Deploying....'
//     }
// }
