import { Request, Response } from "express";

// import * as dotenv from 'dotenv';
// dotenv.config();

const homePage = async (req: Request, res: Response) => {
    res.send('Hello Welcome on Home Page');
};

/**
 * This method is used to get response from About us page
 * @param req 
 * @param res 
 */
const aboutUs = async (req: Request, res: Response) => {
    res.send(`We provide a team that blends in people, process, and technology to deliver excellence in projects. 
    Focused, customized and flexible – that’s what defines our solutions for you.`);
};

/**
 * This method is used to get response from contact us page
 * @param req 
 * @param res 
 */
const contactus = async (req: Request, res: Response) => {
    res.send(`Let’s Get in Touch
    Drop us a line and let’s make something happen.
    We will give you reasons why we're the right choice.`);
};

/**
 * 
 * @param req Dynamic route method
 * @param res 
 */
const getID = async (req: Request, res: Response) => {
    res.send('Received ID from request is ' + req.params.ID);

};
export default { homePage, aboutUs, contactus, getID };