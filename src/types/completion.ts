import {
  ChatCompletion,
  ChatCompletionCreateParamsBase,
} from 'groq-sdk/resources/chat/completions';

import {CodeContextualFilterManager} from '../helpers/contextual-filter';
import {ExternalContextType, FrameworkType} from './editor-props';

export type CompletionModelType = 'llama';
export type GroqCompletionCreateParams = ChatCompletionCreateParamsBase;
export type GroqCompletion = ChatCompletion & {error?: string};

export interface CompletionConstructorParams {
  model: CompletionModelType | undefined;
}

export type LocalPredictionSnippets = {[prefix: string]: string};

export interface LocalPrediction {
  language: string;
  snippets: LocalPredictionSnippets;
}

export interface CompletionRequestParams {
  completionMetadata: CompletionMetadata;
}

export interface CompletionMetadata {
  language: string;
  framework: FrameworkType | undefined;
  cursorPosition: {
    lineNumber: number;
    columnNumber: number;
  };
  externalContext: ExternalContextType | undefined;
  codeAfterCursor: string;
  codeBeforeCursor: string;
  editorState: {
    completionMode: 'fill-in' | 'line-continuation' | 'continuation';
  };
}

export interface CodeContextualFilterProperties {
  afterCursorWhitespace?: string;
  languageId?: string;
}

export interface CodeContextualFilterMeasurements {
  documentLength?: number;
  promptEndPos?: number;
}

export interface CodeContextualFilterContext {
  properties: CodeContextualFilterProperties;
  measurements: CodeContextualFilterMeasurements;
  get: (
    manager: typeof CodeContextualFilterManager,
  ) => CodeContextualFilterManager;
  prefix?: string;
}
