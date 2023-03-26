import { Category } from '@/types';

type ColorCode = {
  [key in Category]: { bg: string; text: string };
};

export const TopicColors: ColorCode = {
  Onboarding: {
    bg: 'var(--onboardingBg)',
    text: 'var(--onboardingText)',
  },
  Goals: {
    bg: 'var(--goalsBg)',
    text: 'var(--goalsText)',
  },
  Weekly: {
    bg: 'var(--weeklyBg)',
    text: 'var(--weeklyText)',
  },
  Teamwork: {
    bg: 'var(--teamworkBg)',
    text: 'var(--teamworkText)',
  },
  Feedback: {
    bg: 'var(--feedbackBg)',
    text: 'var(--feedbackText)',
  },
  'Well-being': {
    bg: 'var(--wellbeingBg)',
    text: 'var(--wellbeingText)',
  },
  'Career Growth': {
    bg: 'var(--growthBg)',
    text: 'var(--growthText)',
  },
};
