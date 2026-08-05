import express from 'express';
import Menu from '../models/menu.js';
import userPayloads from '../payloads/users.js';
import {body, validationResult} from 'express-validator';
import { getMenu, postMenu, putMenu, deleteMenu } from '../controller/menuController.js';


const routeMenu = express.Router();


routeMenu.get('/', getMenu)

routeMenu.post('/', postMenu);

routeMenu.put('/:id', putMenu);

routeMenu.delete('/:id', deleteMenu);

export default routeMenu;