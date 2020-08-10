const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    proffyValue= {
        name:"maria",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"69849849879",
        bio:"Entusiasta das melhores tecnologias de química avançada"
    }
    classValue= {
        subject:1,
        cost:"20"

    }
    classScheduleValues = [
    {
        weekday:1,
        time_from:720,
        time_to:1220
    },
    {
        weekday:0,
        time_from:620,
        time_to:1220
    }

]
 //    await createProffy(db, {proffyValue,classValue,classScheduleValues})
    //consultar todos os professores
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)
    
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON(classes.proffys_id = proffys.id)
        WHERE classes.proffys_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        ANS class_schedule.time_to > "1300"
    `)
    //console.log(selectClassesAndProffys)
})