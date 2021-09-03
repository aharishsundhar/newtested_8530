import { Request, Response } from 'express';
import {UserDao} from '../dao/UserDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let User = new UserDao();

export class UserService {
    
    constructor() { }
    
    public  GpSEF(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpSEF')
     let  UserData = req.body;
     User.GpSEF(UserData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpSEF')
         callback(response);
         });
    }
    
    
    
    
}