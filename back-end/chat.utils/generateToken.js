import jwt from 'jsonwebtoken';

const generateTokenSetCookie = (userId,res) => {
    const token= jwt.sign({userId}, process.env.JWT_SECRET,
    {expiresIn: '15d',
});

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.Node_env !== "development",
    });
};

export default generateTokenSetCookie;