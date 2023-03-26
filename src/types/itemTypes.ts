export type Category =
  | 'Onboarding'
  | 'Weekly'
  | 'Career Growth'
  | 'Goals'
  | 'Teamwork'
  | 'Feedback'
  | 'Well-being';

export type Item = {
  content: string;
  category: Category;
  tags: Array<Category>;
};
