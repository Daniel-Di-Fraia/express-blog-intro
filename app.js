const express = require("express");
const app = express();
const port = 3000;

// usiamo il middleware static di express per file statici
app.use(express.static('public'));

// impostiamo la rotta di index
app.get("/", (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

// impostiamo la rotta della bacheca
app.get("/bacheca", (req, res) => {
    // array di oggetti per blog
    const bachecaBlog = [
        {
        titolo: "Cracker alla Barbabietola",
        contenuto: "Cracker croccanti e colorati preparati con barbabietola rossa, perfetti come snack salutare o accompagnamento per formaggi freschi e creme spalmabili.",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["snack", "barbabietola", "vegetariano", "healthy", "aperitivo"]
    },
    {
        titolo: "Pane Fritto Dolce",
        contenuto: "Morbidi bocconcini di pane fritto ricoperti di zucchero e cannella, un dolce tradizionale perfetto per la colazione o la merenda.",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolce", "fritto", "colazione", "tradizionale", "merenda"]
    },
    {
        titolo: "Torta Paesana",
        contenuto: "Torta rustica lombarda con cacao, pane raffermo, uvetta e amaretti. Un dolce della tradizione contadina dal sapore intenso e ricco.",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["dolce", "tradizionale", "lombarda", "cioccolato", "rustico"]
    },
    {
        titolo: "Ciambellone Classico",
        contenuto: "Soffice ciambellone fatto in casa, perfetto per la colazione o per accompagnare il tè. Un grande classico della pasticceria casalinga italiana.",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolce", "colazione", "classico", "soffice", "fatto-in-casa"]
    },
    {
        titolo: "Pasta alla Barbabietola",
        contenuto: "Rigatoni colorati con barbabietola rossa, conditi con burro, salvia e pistacchi. Un primo piatto vegetariano dal colore vivace e sapore delicato.",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["primo", "pasta", "barbabietola", "vegetariano", "colorato"]
    }
    ];

    // inviamo la risposta con json
    res.json(bachecaBlog)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});