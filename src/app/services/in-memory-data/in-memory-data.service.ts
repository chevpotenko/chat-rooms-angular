import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const rooms = [
            { 
                id: 1,
                name: 'Books',
                todo:[
                    'JavaScript: The Good Parts',
                    'Learning JavaScript Data Structures and Algorithms',
                    'Interactive Front-End Web Development'
                ]
            },
            { 
                id: 2,
                name: 'Code',
                todo:[
                    'Js',
                    'Node.js',
                    'Angular',
                    'React.js'
                ]
            }        
        ];

        const users = [
            {
                id: 1,
                email: 'test1@test.test',
                password: '123'
            },
            {
                id: 2,
                email: 'test2@test.test',
                password: '123'
            }
           
        ];

        const user = [{
            id: 'islogin',
            value: false
        }];

        return {rooms, user, users};
    }
}
