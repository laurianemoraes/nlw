module.exports = async function(db, {proffyValue, classValue,classScheduleValues}){
   //inserção de dados na tabela proffy
    const insertedProffy =  await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(       
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"

        );
   `)
    //gerar id
   const proffys_id = insertedProffy.lastID

   const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffys_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffys_id}"
            );
   `)
   const class_id = insertedClass.lastID

    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })
    await Promise.all(insertedAllClassScheduleValues)
}