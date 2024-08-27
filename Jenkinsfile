pipeline {
    agent any
    
    stages {

        stage('Checkout') {
            steps {
                // Cloning the repository from GitHub
                git branch: 'user', url: 'https://github.com/SakhareSohan/fundooNotes.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'  // Use 'bat' instead of 'sh' for Windows
            }
        }

        stage('Development') {
            steps {
                echo 'Running Development...'
                bat 'npm run dev'  // Use 'bat' instead of 'sh' for Windows
            }
        }
    }
}
