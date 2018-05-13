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

    const users = {
      isLogin: true,
      list: ['User 1', 'User 2']
    }
    return {rooms, users};
  }
}
