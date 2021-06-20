import express, { Request, Response, NextFunction } from 'express';

//clothing model reference -db clothing
import Clothing from '../Models/clothing';

//import util functions
import { UserDisplayName} from '../Util';

//display functions

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    Clothing.find(function (err, clothingCollection)
    {
        if (err)
        {
            return console.error(err);
        }

        //render clothing list content partial page
        res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection, displayName: UserDisplayName(req) })
        
    });
}


export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    //pass the id to the database
    //db.clothing.find({ "_id": id });
    Clothing.findById(id, {}, {}, (err, clothingItemToEdit) => {

        if (err) {
            console.error(err)
            res.end(err)
        }
        //show the edit view
        res.render('index', { title: 'Edit', page: 'update', item: clothingItemToEdit, displayName: UserDisplayName(req)  });

    });

}


export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', clothing: '', displayName: UserDisplayName(req)  });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Clothing Item
    let updatedClothingItem = new Clothing
    ({
      "_id": id,
      "name": req.body.name,
      "brand": req.body.brand,
      "category": req.body.category,
      "colour": req.body.colour,
      "size": req.body.size,
      "price": req.body.price
    });
  
    // find the clothing item via db.clothing.update({"_id":id}) and then update
    Clothing.updateOne({_id: id}, updatedClothingItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/clothing-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Clothing
  let newContact = new Clothing
  ({
    "name": req.body.name,
    "brand": req.body.brand,
    "category": req.body.category,
    "colour": req.body.colour,
    "size": req.body.size,
    "price": req.body.price
  });

  // db.clothing.insert({clothing data is here...})
  Clothing.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/clothing-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.clothing.remove({"_id: id"})
  Clothing.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/clothing-list');
  });
}