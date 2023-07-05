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
      prompt += `The response will be like this ${format} and answer
    
      1. {Question will be here}
      a) Option 1
      b) Option 2
  
      2. {Question will be here}
      a) Option 1
      b) Option 2
      ... So on 

      Answer responses in this format at the last not after the question
      1. Answer: a) Give me the correct ${format} answer will be here - Give me the correct answer will be here.
      2. Answer: b) Give me the correct ${format} answer will be here - Give me the correct answer will be here.
      ... So on
        `;
      break;

    case "multiple-questions":
      prompt += `The response will be like this ${format} and answer
      
      1. {Question will be here}
        a) Option 1
        b) Option 2
        c) Option 3
        d) Option 4,
    
      2. {Question will be here}
        a) Option 1
        b) Option 2
        c) Option 3
        d) Option 4,
        
      ... So on
    
      Answer responses in this format at the last not after the question
      1. Answer: a) Give me the correct option answer will be here - Give me the correct answer will be here.
      2. Answer: b) Give me the correct option answer will be here - Give me the correct answer will be here.
      ... So on
        `;
      break;

    case "short-answers":
      prompt += `The response will be like this ${format} and answer
    
      1. {Question will be here},
      2. {Question will be here},
      3. {Question will be here},
      ... So on
      
      Answer And Explanation responses in this format at the last not after the question
      1. Answer: {Question Number 1 Correct Answer will be here} - {Give me the explaination answer wiil be here},
      2. Answer: {Question Number 2 Correct Answer will be here} - {Give me the explaination answer wiil be here},
      3. Answer: {Question Number 3 Correct Answer will be here} - {Give me the explaination answer wiil be here},
      ... So on
      `;
      break;

    case "blanks":
      prompt += `The fill-in-the-blank sentence is: "${content} ______."

      Answer response like this format
      
      The fill-in-the-blank sentence is: {Sentence will be here} {Correct answer here}.`;
      break;

    case "matching":
      prompt += `Handle matching questions format here`;
      break;

    case "calculations":
      prompt += `Handle calculations format here`;
      break;

    case "lesson-planer":
      prompt += `Handle ${format} format here`;
      break;

    case "project-ideas":
      prompt += `Handle ${format} format here`;
      break;

    case "study-points":
      prompt += `Handle ${format} format here`;
      break;

    case "group-creator":
      prompt += `Handle ${format} format here`;
      break;

    case "seating-chart":
      prompt += `Handle ${format} format here`;
      break;

    default:
      console.log(`Handle unknown format here`);
      break;
  }

  return prompt;
};
