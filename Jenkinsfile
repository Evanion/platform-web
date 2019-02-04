pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    APP_NAME = "<customer>-<project>-fe"
  }
  stages {
    stage('Setup') {
      steps {
        script {
          sh 'yarn'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'yarn test'
        }
      }
    }
  }
}