import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const rooms = [
            { 
                id: 0,
                name: 'Books',
                todo:[
                    'JavaScript: The Good Parts',
                    'Learning JavaScript Data Structures and Algorithms',
                    'Interactive Front-End Web Development'
                ]
            },
            { 
                id: 1,
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
                id: 0,
                email: 'test1@test.test',
                password: '123'
            },
            {
                id: 1,
                email: 'test2@test.test',
                password: '123'
            }
           
        ];

        const user = [{
            id: 'signin',
            value: false
        }];

        return {rooms, user, users};
    }
}
