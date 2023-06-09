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
		
		
            }
        }
        stage('Deploy') {
            steps {
                  sh'scp -v -i key my-app-linux loco2@192.168.81.130:/home/loco2'
                  sh'ssh loco2@192.168.81.130 -i key -C ./my-app-linux  '
                  sh'ssh loco2@192.168.81.130 -i key -C curl http://localhost:4444/api  '   

                                             }
            }
        
    }
}
