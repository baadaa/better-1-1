import { Category } from '@/types';

type ColorCode = {
  [key in Category]: { bg: string; text: string; border: string };
};

export const TopicColors: ColorCode = {
  Onboarding: {
    bg: 'var(--onboardingBg)',
    text: 'var(--onboardingText)',
    border: 'var(--onboardingBorder)',
  },
  Goals: {
    bg: 'var(--goalsBg)',
    text: 'var(--goalsText)',
    border: 'var(--goalsBorder)',
  },
  Weekly: {
    bg: 'var(--weeklyBg)',
    text: 'var(--weeklyText)',
    border: 'var(--weeklyBorder)',
  },
  Teamwork: {
    bg: 'var(--teamworkBg)',
    text: 'var(--teamworkText)',
    border: 'var(--teamworkBorder)',
  },
  Feedback: {
    bg: 'var(--feedbackBg)',
    text: 'var(--feedbackText)',
    border: 'var(--feedbackBorder)',
  },
  'Well-being': {
    bg: 'var(--wellbeingBg)',
    text: 'var(--wellbeingText)',
    border: 'var(--wellbeingBorder)',
  },
  'Career Growth': {
    bg: 'var(--growthBg)',
    text: 'var(--growthText)',
    border: 'var(--growthBorder)',
  },
};
