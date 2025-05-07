export interface Category {
  id: string;
  name: string;
  description: string;
  disabled?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  setupInstructions?: string;
  learningOutcomes: string[];
  component?: React.ComponentType;
  link?: string;
}
