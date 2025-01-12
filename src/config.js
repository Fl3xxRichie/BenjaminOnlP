export const config = {
  postingIntervals: {
    min: 2 * 60 * 60 * 1000, // 2 hours
    max: 5 * 60 * 60 * 1000  // 5 hours
  },
  maxDailyPosts: 25,
  tags: {
    required: ['@BenjaminonIP'],
    optional: ['#IPTech', '#AI', '#STORY']
  },
  characterLimit: 180
};

export const topics = [
  'IP technology trends',
  'AI advancement in IP',
  'STORY platform features',
  'IP innovation',
  'Digital IP management',
  'IP tech solutions',
  'Blockchain in IP',
  'IP automation',
  'IP data analytics',
  'Smart IP contracts'
];

export const geminiPrompt = `
Create a very concise tweet about {topic}. CRITICAL REQUIREMENTS:
- MUST be under 140 characters (strict limit, excluding tags)
- Be informative yet brief
- Focus on IP technology
- Mention STORY platform when relevant
- DO NOT include any hashtags or @mentions
- Use simple, clear language
- Include one key insight or fact

Example format and length:
"STORY platform's new AI-powered patent search reduces analysis time by 60%, making IP management more efficient for enterprises."

Remember: Keep it under 140 characters! This is crucial.
`;
