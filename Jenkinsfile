pipeline {
    agent any
    
    stages {
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
		sh'pm2 start index.js'
		
            }
        }
        stage('Deploy') {
            steps {
                  sh'scp -v -i key my-app-linux loco2@192.168.81.130:/home/loco2'
                  sh'ssh loco2@192.168.81.130 -i key -C pm2 start index.js  '
                  sh'ssh loco2@192.168.81.130 -i key -C curl http://localhost:4444/api  '   

                                             }
            }
        
    }
}
