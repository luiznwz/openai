const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")

module.exports = {

    async sendText(req, res){

        const openaAI = openai.configuration()
        const inputModel = new inputModel(req.body)

        try {
            const reponse = await openaiAI.createCompletion(inputModel)

            return res.status(200).json(
                {
                    sucess: true,
                    data: res.data.choices[0].text
                }
            )
        } catch (error) {
            return res.status(400).json({
                sucess:false,
                error: error.response
            })
        }

        return response.status(200).json({
            message: "luiz chegou"
        })
    }
}