import { Configuration, OpenAIApi } from 'openai'
import config from '../../../config'
import ApiError from '../../../errors/ApiError'

const generateText = async (prompt: string) => {
  const configuration = new Configuration({
    apiKey: config.openai_api_key,
  })

  const openai = new OpenAIApi(configuration)

  const generatedTextResponse = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 300,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  })

  const generatedText = generatedTextResponse.data.choices?.[0].text || ''

  if (!generatedText) {
    throw new ApiError(400, 'Failed to generate response')
  }

  //   // Create a new text generation document
  //   const textGeneration = new TextGeneration({
  //     prompt: prompt,
  //     generatedText,
  //   })

  // //   Save the generated text
  //   await textGeneration.save()

  return generatedText
}

export const TextGenerationService = { generateText }
