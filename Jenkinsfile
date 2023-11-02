// Declarative //
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean --force'
                sh 'npm rm -rf node_modules && rm package-lock.json'
                sh 'npm install'
                echo 'building....'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
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
