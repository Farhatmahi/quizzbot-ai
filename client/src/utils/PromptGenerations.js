// ./src/utils/PromptGenerations.js

export const generatePrompt = ({
  format,
  questionCount,
  content,
  language,
  level,
  difficulty,
}) => {
  let prompt = ``;

  switch (format) {
    case "true-false":
      prompt = `Give me ${questionCount} questions in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
    
      """${content}""" The response will be like this ${format} and answer
    
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
      prompt = `Give me ${questionCount} questions in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
    
      """${content}""" The response will be like this ${format} and answer
      
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
      prompt = `Give me ${questionCount} questions in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
    
      """${content}""" The response will be like this ${format} and answer
    
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
      prompt = `Give me ${questionCount} ${difficulty} fill in the blank sentence in ${language} language from in this text """${content}""" and give me the sentences, in every sentences must have a fill in the blanks and Answer: {give me the answer after every question}`;

      break;

    case "matching":
      prompt = `Give me ${questionCount} matching in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
      """${content}""" The response will be like this ${format}

      1. {Key Word 1}
      2. {Key Word 2}
      3. {Key Word 3}
      ... So on

      a. {Option}
      b. {Option}
      ... So on

      Answer And Explanation responses in this format at the last not after the question:

      
      1. Answer: {Correct Match for Key Word 1} - {Explanation}
      2. Answer: {Correct Match for Key Word 2} - {Explanation}
      3. Answer: {Correct Match for Key Word 3} - {Explanation}
;
      `;
      break;

    case "calculations":
      prompt = `Give me ${questionCount} calculation in ${difficulty} difficulty and ${language} language in ${format} format from the below text wrapped with """ : 
    
      """${content}""" The response will be like this ${format}

      1. {Question will be here}.
      2. {Question will be here}.
      ...So on

      Answer And Explanation responses in this format at the last not after the question

      Answer:
      1. {Answer 1} - {Make a mathematical calculation of the entire text of this question and work out some other calculations from this text.}
      2. {Answer 2} - {Make a mathematical calculation of the entire text of this question and work out some other calculations from this text.}
      ... So on

    `;
      break;

    case "lesson-planer":
      prompt = `Give me a lesson plan with the ${level} level with ${difficulty} from the below text wrapped with in this """${content}""" in ${language} language`;
      break;

    case "project-ideas":
      prompt = `Give me a project plan with the ${level} level with ${difficulty} from the below text wrapped with in this """${content}""" in ${language} language`;
      break;

    case "study-points":
      prompt = `"""${content}""" from the above text wrapped with """ Give me a study point and pointing line by line with the level of ${level} in ${language} on ${difficulty}`;
      break;

    case "group-creator":
      break;

    case "seating-chart":
      break;

    default:
      break;
  }

  return prompt;
};
