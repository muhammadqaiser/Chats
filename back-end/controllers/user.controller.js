import User from "../chatmodels/usermodel.js";

export const getUserForSideBar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }catch(error){
        console.error("Error in getUserForSideBar:", error.message);
        res.status(500).send('Server Error');
    }

};