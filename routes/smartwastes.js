var express = require('express');
const Validator = require('fastest-validator');
// const { production } = require('../config/config');
var router = express.Router();

const { Smartwaste } = require('../models');

const v = new Validator();

router.get('/', async (req, res) => {
    const smartwastes = await Smartwaste.findAll();
    return res.json(smartwastes);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const smartwaste = await Smartwaste.findByPk(id    );
    return res.json(smartwaste);
})

router.post('/', async (req, res) => {
   const schema = {
       sensor_id: 'string',
       dist: 'string',
       capacity: 'string',
       vol: 'string',
   }
   const validate = v.validate(req.body, schema);

   if(validate.length){
       return res
       .status(400)
       .json(validate);
   }
  
   const smartwaste = await Smartwaste.create(req.body);
   res.json({
       message: 'Success add data',
       smartwaste
   });    
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id;

    let smartwaste = await Smartwaste.findByPk(id);

    if(!smartwaste){
        return res.json({ message: 'Id not found' });
    }

    const schema = {
        sensor_id: 'string|optional',
        dist: 'string|optional',
        capacity: 'string|optional',
        vol: 'string|optional'
    }
    const validate = v.validate(req.body, schema);
 
    if(validate.length){
        return res
        .status(400)
        .json(validate);
    }
    
    smartwaste = await smartwaste.update(req.body);
    res.json({
        message: 'Success update data',
        smartwaste
    });    
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const smartwaste = await Smartwaste.findByPk(id);

    if(!smartwaste){
        return res.json({ message: 'Data not found' });
    }

    await smartwaste.destroy();

    res.json({
        message: 'Data is deleted'
    });
});

module.exports = router;