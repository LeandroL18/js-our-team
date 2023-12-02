// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
 

// creazione array di oggetti
const membri = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'immagine': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'immagine': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Menager',
        'immagine': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Menager',
        'immagine': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'immagine': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'immagine': 'barbara-ramos-graphic-designer.jpg'
    }
]

// Stampa su console tutte le informazioni per ogni membro
for(let key in membri){

    console.log(key, membri[key]);
}

