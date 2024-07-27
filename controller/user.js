import userModel from '../models/user.js';


// create user api code
const createUser = async (req, res) => {
    try {
        const { name, email, address, phone } = req.body;
        const newUser = new userModel({ name, email, phone, address });
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "User added successfully",
            newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User addition failed",
            error
        });
    }
};

// read All user api code
const getUser = async (req,res)=>{
    try {
        const user = await userModel.find();
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found",
                user
            });
        }else{
            res.status(200).json({
                success:true,
                user
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error
        })
    }
};

//read user by id api code
const getUserById = async (req,res)=>{
    try {
        const userId = req.params.id;
        const getdataId = await userModel.findById(userId);
        if(!getdataId){
            return res.status(404).json({
                success:false,
                message:"user not found"
            });
        }else{
            res.status(200).json({
                success: true,
                getdataId
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }
};

// update user api code
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }

};

// delete user api code
const deleteUser = async (req,res)=>{
    try {
        const userID = req.params.id;
        const deleteuser = await userModel.findByIdAndDelete(userID);
        if (!deleteuser) {
            return res.status(404).json({
                success:false,
                message:"user not found",
            })
        }else{
            res.status(200).json({
                success:true,
                message:"User delete successfully",
                deleteuser
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error
        });
    }
};
export {createUser,getUser,updateUser,deleteUser,getUserById};
