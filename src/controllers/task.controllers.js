import modelTask from "../models/task.model";


export const taskIndex = async (req, res) => {
    try {
        const tasks = await modelTask.find().lean().sort({createdAt: 'desc'});
        return res.render('task/task-add', {tasks});        
    } catch (error) {
        console.log(error.message);
    }

};

export const createTask =  async(req, res) => {
    
    try {
        const task = modelTask(req.body);
        await task.save();
        return res.redirect('/task/add');   
    } catch (error) {
        console.log(error.message);
    }
};

export const taskUpdateForm = async(req, res)=>{
    try {
        
        const task = await modelTask.findById(req.params.id).lean();
        return res.render('task/task-edit', { task });    

    } catch (error) {
        console.log(error.message);
    };
    
};

export const taskUpdate = async(req, res) =>{
    try {
        const { id } = req.params; 
       
        await modelTask.findByIdAndUpdate(id, req.body);
        return res.redirect('/task/add');
       
    } catch (error) {
        console.log(error.message)
    };
};

export const taskDelete= async(req, res) =>{
    
    try {
        const { id } = req.params;

        await modelTask.findByIdAndDelete(id);
        return res.redirect('/task/add');      

    } catch (error) {
        console.log(error.message);
    };
};

export const taskState = async(req, res) =>{
    
    try {
        const { id } = req.params;

        const task_done = await modelTask.findById(id);
        task_done.done = !task_done.done;
    
        await task_done.save();
        return res.redirect('/task/add');

    } catch (error) {
        console.log(error.message)
    };
};
