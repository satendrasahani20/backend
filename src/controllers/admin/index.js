import course from "../../models/course.js"
import Module from "../../models/module.js"
export const getCourse = async (req, res) => {
    try {
        result = await course.aggregate([
            {
                $lookup: {
                    from: "modules",
                    localField: "_id",
                    foreignField: "courseId",
                    as: "modules"
                },

            }, {
                $lookup: {
                    from: "modules",
                    localField: "_id",
                    foreignField: "courseId",
                    as: "questions",
                    // pipeline: [
                    //     { '$project': { 'questions': 1,"couseId":1 } }
                    // ]
                }
            },
            {
                $addFields: { module: { $size: "$modules" } }
            },
            //  {
            //     $project: { modules: 0, }
            // },

        ])

        const courseCountData = []
        for await (const item of result) {
            if (item?.modules?.length) {
                for await (const innerItem of item?.modules) {
                    courseCountData?.push({ courseId: innerItem?.courseId, count: innerItem?.questions?.length })
                }
            } else {
                courseCountData?.push({ courseId: item?._id, count: 0 })
            }

        }
        let x = {};
        let origin = [];
        for await (const item of courseCountData) {
            if (JSON.stringify(item?.courseId) == JSON.stringify(x?.courseId)) {
                let indx = origin?.findIndex((itm) => JSON.stringify(itm?.courseId) == JSON.stringify(x?.courseId))
                origin[indx] = { courseId: item?.courseId, count: item?.count + x?.count }
            } else {
                origin?.push({ courseId: item?.courseId, count: item?.count })
                x = { courseId: item?.courseId, count: item?.count }
            }
        }

        const tempResult = []

        for await (const item of result) {
            for await (const innerItem of origin) {
                if (JSON.stringify(item?._id) === JSON.stringify(innerItem?.courseId)) {
                    tempResult.push({
                        _id: item?._id,
                        cuttOffScore: item?.cuttOffScore,
                        maxMark: item?.maxMark,
                        module: item?.module,
                        name: item?.name,
                        testTiming: item?.testTiming,
                        noOfQuestion: innerItem?.count,
                        duration: item?.duration,
                    })
                }
            }
        }
        res.status(200).send({ "msg": "Ftech Successfully", data: tempResult })

    } catch (err) {
        res.status(400).send({ "error is": err.message })
    }
}


export const saveCourse = async (req, res) => {
    try {
        const checkExists = await course.findOne({ name: req.body.name })
        if (checkExists) {
            return res.status(403).json({ message: "Course Already Exists" });
        }
        result = await course.create(req.body)
        res.status(200).json({ data: result })
    } catch (err) {
        res.status(400).send({ "error is": err.message })
    }
}


export const updateCourse = async (req, res) => {
    try {
        console.log(req.body)
        result = await course.findByIdAndUpdate(req.body._id, req.body)
         return res.status(200).json({ message: "Update Course Successfully" });
      
    } catch (err) {
        res.status(400).send({ "error is": err.message })
    }
}

export const deleteCourse=async (req,res)=>{
    try{
        result = await course.findByIdAndDelete(req.query.id)
        return res.status(200).json({ message: "Update Course Successfully" });
    }catch(err){
        res.status(400).send({ "error is": err.message })
    }
}
export const getModule=async(req,res)=>{
    try {
        result = await Module.find({ courseId: req.query.id })
        return res.status(200).json({ message: "Get Module Successfully" ,data:result});
    } catch (error) {
        
    }
}