export interface ISingleSavedQuestion {
  how_many_questions: string
  paste_text: string
  language: ILanguage
  difficulty: IDifficulty
  title: string
  generatedText: string
}

export type IDifficulty = 'Easy' | 'Average' | 'Above Average' | 'Difficult'

export type IHowManyQuestions =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
export type ILanguage =
  | 'Arabic'
  | 'Chinese'
  | 'Danish'
  | 'English'
  | 'French'
  | 'German'
  | 'Hebrew'
  | 'Hindi'
  | 'Indonesian'
  | 'Italian'
  | 'Japanese'
  | 'Polish'
  | 'Romanian'
  | 'Russian'
  | 'Spanish'
  | 'Swedish'
  | 'Turkish'
  | 'Vietnamese'
