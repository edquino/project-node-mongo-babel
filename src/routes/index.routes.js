import { Router } from "express";
const router = Router();

import { taskIndex, 
        createTask, 
        taskUpdateForm, 
        taskUpdate, 
        taskDelete, 
        taskState } from "../controllers/task.controllers";


router.get('/', (req, res)=>{
    return res.render('index');
});

router.get('/task/add', taskIndex);

router.post('/task/add', createTask);

router.get('/task/edit/:id', taskUpdateForm);

router.post('/task/edit/:id', taskUpdate);

router.get('/task/delete/:id', taskDelete);

router.get('/task/state/:id', taskState);

//module.exports = router;
export default router;