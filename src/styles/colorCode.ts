import { Category } from '@/types';

type ColorCode = {
  [key in Category]: {
    bg: string;
    text: string;
    border: string;
    cardBorder: string;
  };
};

export const TopicColors: ColorCode = {
  Onboarding: {
    bg: 'var(--onboardingBg)',
    text: 'var(--onboardingText)',
    border: 'var(--onboardingBorder)',
    cardBorder: 'var(--onboardingCardBorder)',
  },
  Goals: {
    bg: 'var(--goalsBg)',
    text: 'var(--goalsText)',
    border: 'var(--goalsBorder)',
    cardBorder: 'var(--goalsCardBorder)',
  },
  Weekly: {
    bg: 'var(--weeklyBg)',
    text: 'var(--weeklyText)',
    border: 'var(--weeklyBorder)',
    cardBorder: 'var(--weeklyCardBorder)',
  },
  Teamwork: {
    bg: 'var(--teamworkBg)',
    text: 'var(--teamworkText)',
    border: 'var(--teamworkBorder)',
    cardBorder: 'var(--teamworkCardBorder)',
  },
  Feedback: {
    bg: 'var(--feedbackBg)',
    text: 'var(--feedbackText)',
    border: 'var(--feedbackBorder)',
    cardBorder: 'var(--feedbackCardBorder)',
  },
  'Well-being': {
    bg: 'var(--wellbeingBg)',
    text: 'var(--wellbeingText)',
    border: 'var(--wellbeingBorder)',
    cardBorder: 'var(--wellbeingCardBorder)',
  },
  'Career Growth': {
    bg: 'var(--growthBg)',
    text: 'var(--growthText)',
    border: 'var(--growthBorder)',
    cardBorder: 'var(--growthCardBorder)',
  },
};
