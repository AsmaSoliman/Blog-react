db.zip.update({$and:[{"loc.0":{$lt:-71}},{state:{$ne:"MA"}}]})
db.zip.update({$and:[{"loc.0":{$lt:-71}},{state:{$ne:"MA"}}]},{"pop":{$lt:200}},{$set:{"pop":0}})
db.zip.aggregate([
    {$match:{$or:[{state:"PA"},{state:"MA"}]}},
    {$group:{_id:"$state",total:{$sum:"$pop"}}}])
    db.zip.aggregate([
        {$match:{$and:[{state:"AK"},{"loc.1":{$gt:55,$lt:56}}]}},
        {$group: {_id:"$state",total:{$sum:"$pop"}}}])
        db.zip.aggregate(
            [{$match:{}},
            {$group: {_id:"$state",max:{$max:"$pop"},min:{$min:"$pop"}}}])


            db.zip.aggregate(
                [
                {$match:{$and:[{$or:[{state:"CA"},{state:"NY"}]},{"pop":{$gt:2500}}]}},
                {$group: {_id:"$state",avg:{$avg:"$pop"}}}])

                
            db.zip.aggregate(
                [
                {$match:{}},
                {$group: {_id:"$state",avg:{$avg:"$pop"}}},{$sort:{"avg":1}}])