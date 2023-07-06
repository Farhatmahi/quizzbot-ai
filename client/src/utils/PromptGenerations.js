// ./src/utils/PromptGenerations.js

export const generatePrompt = ({
  format,
  questionCount,
  content,
  language,
  level,
  difficulty,
}) => {
  let prompt = `Give me ${questionCount} questions in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
    
        """${content}"""
        `;

  let lessonPlaner = `${content}`;

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

      Answer:
      1. a) Give me the correct True or False answer will be here - Give me the correct answer will be here.
      2. b) Give me the correct True or False answer will be here - Give me the correct answer will be here.
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

      Answers:
      1. a) Give me the correct option answer will be here - Give me the correct answer will be here.
      2. b) Give me the correct option answer will be here - Give me the correct answer will be here.
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

      Answer:
      1. {Question Number 1 Correct Answer will be here} - {Give me the explaination answer wiil be here},
      2. {Question Number 2 Correct Answer will be here} - {Give me the explaination answer wiil be here},
      3. {Question Number 3 Correct Answer will be here} - {Give me the explaination answer wiil be here},
      ... So on
      `;
      break;

    case "blanks":
      prompt += `The fill-in-the-blank sentence is: "${content} ______."

      Answer response like this format
      
      The fill-in-the-blank sentence is: {Sentence will be here} {Correct answer here}.`;
      break;

    case "matching":
      break;

    case "calculations":
      break;

    case "lesson-planer":
      lessonPlaner += `In this text create lesson plan`;
      break;

    case "project-ideas":
      break;

    case "study-points":
      break;

    case "group-creator":
      break;

    case "seating-chart":
      break;

    default:
      console.log(`Handle unknown format here`);
      break;
  }

  return lessonPlaner;
};
