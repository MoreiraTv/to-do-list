export const validateTask = (req,res,next) => {
    const {body} = req;
    if(body.title === undefined){
        return res.status(400).json({ message: "Informe um title!" });
    }
    if(body.title === ""){
        return res.status(400).json({ message: "Campo title não pode estar vazio!" });
    }
    next();
}
export const validateStatus = (req,res,next) =>{
    const {status} = req.body;
    if(status === undefined){
        return res.status(400).json({ message: "Informe o status!" });
    }
    if(status === ""){
        return res.status(400).json({ message: "O campo status não pode estar vazio!!" });
    }
    next();
}
export const validateId = (req,res,next) => {
    const {id} = req.params;
    if(id === undefined){
        return res.status(400).json({ message: "Informe um id" });
    }
    if(id === ""){
        return res.status(400).json({ message: "Campo id está vazio" });
    }
    next();
}