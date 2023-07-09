export interface gptResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
    choices: ChatApiChoice[];
  }
  
  interface ChatApiChoice {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
    index: number;
  }