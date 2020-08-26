//Estamos exportando a função que recebe a database db e os dados proffyValue... . Async sempre necessário quando se for usar o await
module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    //inserir dados na tabela de teachers. Await faz com que o processo aguarde na linha ate que o comando seja completado
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

 
    //inserir dados na tabela classes      
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule. map vai mapeado os dados, funciona semelhante ao forEach, que vai passando linha por linha.
            const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
                return db.run(`
                    INSERT INTO class_schedule (
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

            //aqui vou executar todos os db.runs() das class_schedules
            await Promise.all(insertedAllClassScheduleValues)

}