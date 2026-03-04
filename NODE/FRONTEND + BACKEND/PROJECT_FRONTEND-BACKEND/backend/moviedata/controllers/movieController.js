import movieDataModel from "../models/movieDataModel.js";

export const createData = async(req,res)=>{

    //console.log(req);

    try {
        
        const add = await movieDataModel.create(req.body)

        if(add){

            res.status(201).json({msg:"Successfully Added"})

        }else{

            res.status(404).json({msg:"Something error "})
        }

    } catch (error) {

        console.log('error',error);
        

         res.status(404).json({msg:"Something error",error})
        
    }
    
}


export const getData = async(req,res)=>{

    try {

        const getData = await movieDataModel.find()
        if(getData){
            return res.status(200).json({myDatas:getData})
        }
        
      } catch (error) {

        console.log('error',error);
        

         res.status(404).json({msg:"Something error",error})
        
    }

}


export const getByID = async (req,res) =>{


    try {


        // console.log(req.params);
        
        const {userid} = req.params

        const getDataByID = await movieDataModel.findById(userid)

        if(getDataByID){
            return res.status(200).json({getDataByID})
        }
        
       } catch (error) {

        console.log('error',error);
        

         res.status(404).json({msg:"Something error",error})
        
    }
}