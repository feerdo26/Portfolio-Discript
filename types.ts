
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
