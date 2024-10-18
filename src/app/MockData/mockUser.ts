import { User } from "../Models/user.model";


export const mockUsers:User[] = [
    {
        name:"user1",
        password: 'user1',
        phone:"0100000000",
        role: 'user',
        paymentMethod:"Credit Card",
        balance: 3000,
        permitRequests:[]
      },
      {
        name:"user2",
        password: 'user2',
        phone:"0100000000",
        role: 'user',
        paymentMethod:"Credit Card",
        balance: 3000,
        permitRequests:[]

      },
      {
        name:"user3",
        password: 'user3',
        phone:"0100000000",
        role: 'user',
        paymentMethod:"Debit Card",
        balance: 3000,
        permitRequests:[]
      },
      
      {
        name:"admin",
        password: 'admin',
        phone:"0100000000",
        role: 'admin',


      }
]