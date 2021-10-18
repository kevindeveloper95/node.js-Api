const express = require('express');
const routes = express.Router()

routes.get('/api', (req,res) =>{
    req.getConnection((err, conect)=>{
       if(err) return res.send(err)
       
       conect.query('SELECT * FROM productos',(err,rows)=>{
        if(err) return res.send(err)
       res.json(rows)
       })
    })
})

routes.post('/api', (req,res) =>{
    req.getConnection((err, conect)=>{
       if(err) return res.send(err)
       
       conect.query('INSERT INTO productos set ?',[req.body],(err,rows)=>{
        if(err) return res.send(err)
       res.send('COMPONENTE AÑADIDO')
       })
    })
})

routes.delete('/api/:id', (req,res) =>{
    req.getConnection((err, conect)=>{
       if(err) return res.send(err)
       
       conect.query('DELETE FROM productos WHERE id = ?',[req.params.id],(err,rows)=>{
        if(err) return res.send(err)
       res.send('COMPONENTE ELIMINADO')
       })
    })
})

routes.put('/api/:id', (req,res) =>{
    req.getConnection((err, conect)=>{
       if(err) return res.send(err)
       
       conect.query('UPDATE productos set ? WHERE id = ?',[req.body,req.params.id],(err,rows)=>{
        if(err) return res.send(err)
       res.send('COMPONENTE ACTUALIZADO')
       })
    })
})

 

module.exports = routes