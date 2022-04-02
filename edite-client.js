function maFonction(monObjet){ 
    
   app.post('/client/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.isbn;
    const newBook = req.body;

     // Remove item from the books array
      for (let i = 0; i < books.length; i++) {
        let client = clients[i]
        if (client.id === id) {
            clients[i] = newBook;
        }
     }

    res.send('client is edited');
   });
   }