function maFonction11(monObjet11){ 
  app.post('/client', (req, res) => {
    const client = req.body;

    // Output the book to the console for debugging
    console.log(client);
    clients.push(client);

    res.send('client is added to the database');
 });
 }
