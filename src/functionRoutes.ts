import { Request, Response } from "express";

export const getIndex = (req:Request, res:Response) => {
    getTest()
    
    res.send('¡Hola Mundo!!');
  }

  const getTest = ()=>{
    console.log('myConsole test');
  }