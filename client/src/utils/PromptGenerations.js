// ./src/utils/PromptGenerations.js

export const generatePrompt = ({
  format,
  questionCount,
  content,
  language,
  difficulty,
}) => {
  let prompt = `Give me ${questionCount} questions in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
    
        """${content}"""
        `;

  switch (format) {
    case "true-false":
      prompt += `The response will be like this
    
        1. {Question will be here}, True/False
        2. {Question will be here}, True/False
        3. {Question will be here}, True/False
        ... So on   
    
        Answer : 
        1. True
        2. False
        ... So on`;
      break;
    case "multiple-questions":
      prompt += `Handle multiple-questions format here`;
      break;
    case "short-answers":
      prompt += `The response will be like this
    
      1. {Question will be here},
      Answer: Give me the question answer here.
      2. {Question will be here},
      Answer: Give me the question answer here.
      3. {Question will be here},
      Answer: Give me the question answer here.
      ... So on`;
      break;
    case "blanks":
      prompt += `Handle blanks format here`;
      break;
    case "calculations":
      prompt += `Handle calculations format here`;
      break;
    case "teacher-tool":
      prompt += `Handle teacher-tool format here`;
      break;
    default:
      prompt += `Handle unknown format here`;
      break;
  }

  return prompt;
};
