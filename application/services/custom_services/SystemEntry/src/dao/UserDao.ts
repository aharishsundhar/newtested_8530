import * as mongoose from 'mongoose';
import UserModel from '../models/User';
import { CustomLogger } from '../config/Logger'


export class UserDao {
    private User = UserModel;
    constructor() { }
    
    public async GpSEF(UserData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpSEF');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(UserData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.User.find({$and: [
                            {
                                $or: [
                                    or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpSEF');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}