'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

const questions = [
  {
    question: 'What is the common hash algorithm?',

    options: ['A) RSA', 'B) AES', 'C) MD5', 'D) SHA-256'],

    answer: 'D) SHA-256',
  },

  {
    question: 'True or false: Hashes are reversible',

    options: ['A) True', 'B) False'],
    answer: 'B) False',
  },

  {
    question: 'Which hash is the longest? ',

    options: ['A) MD5', 'B) SHA-1', 'C) SHA-256', 'D) SHA-512'],
    answer: 'D) SHA-512',
  },

  {
    question: 'Which hash is considered weak?',

    options: ['A) AES', 'B) SHA-256', 'C) SHA-512', 'D) MD5'],
    answer: 'D) MD5',
  },

  {
    question: 'What is a salt in hashing? ',

    options: [
      'A) Random data added',
      'B) Data encryption',
      'C) Data compression',
      'D) Data duplication',
    ],
    answer: 'A) Random data added',
  },

  {
    question: 'Identify this hash type: 5d41402abc4b2a76b9719d911017c592',

    options: ['A) ShA-1', 'B) MD5', 'C) SHA-256', 'D) SHA-512'],
    answer: 'B) MD5',
  },

  {
    question:
      'Identify this hash type: 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12',

    options: ['A) SHA-1', 'B) MD5', 'C) SHA-256', 'D) SHA-512'],
    answer: 'A) SHA-1',
  },

  {
    question:
      'Identify this hash type: 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',

    options: ['A) SHA-512', 'B) bcrypt', 'C) SHA-256', 'D) MD5'],

    answer: 'C) SHA-256',
  },

  {
    question:
      'Identify this hash type: $2a$12$EXRkfkdmXn2gzds2SSituuEVzWy5zWz6iFz5SKg1/7kZJL8IcWc4a',

    options: ['A) SHA-1', 'B) bcrypt', 'C) SHA-512', 'D) MD5'],

    answer: 'B) bcrypt',
  },

  {
    question: 'Identify this hash type: aGVsbG8gbmljZSB0cnkgbWF5YmUgbmV4dCA=',

    options: ['A) SHA-512', 'B) bcrypt', 'C) Base64', , 'D) NTLM'],

    answer: 'C) Base64',
  },

  {
    question:
      'Identify this hash type: 6bb4837eb74329105ee4568dda7dc67ed2ca2ad9',

    options: ['A) SHA-1', 'B) SHA-512', 'C) NTLM', 'D) Base64'],

    answer: 'A) SHA-1',
  },

  {
    question: 'Identify this hash type: 5f4dcc3b5aa765d61d8327deb882cf99',

    options: ['A) SHA-1', 'B) SHA-512', 'C) NTLM', 'D) MD5'],
    answer: 'D) MD5',
  },
];

export default function HashQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];

  const handleOptionClick = (option: string) => {
    if (showAnswer) return;

    setSelected(option);
    setShowAnswer(true);

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrent(prev => prev + 1);
        setSelected(null);
        setShowAnswer(false);
      }
    }, 2000); // wait 1s before showing next
  };

  return (
    <div className="p-3 h-full w-full rounded">
      <ScrollArea className="h-full overflow-y-auto">
        <div className="flex flex-col items-center px-2 py-6 gap-6">
          <h1 className="text-2xl font-bold">Cyber Awareness Quiz Game</h1>

          {finished ? (
            <div className="text-center text-green-600 text-xl font-semibold">
              🎉 You've completed the quiz!
            </div>
          ) : (
            <Card className="w-full max-w-xl p-6 shadow-md space-y-4">
              <h2 className="font-semibold text-lg">
                Question {current + 1}: {currentQuestion.question}
              </h2>
              <div className="grid gap-3">
                {currentQuestion.options
                  .filter((opt): opt is string => !!opt)
                  .map(opt => {
                    const isCorrect = opt === currentQuestion.answer;
                    const isSelected = selected === opt;

                    return (
                      <Button
                        key={opt}
                        variant="outline"
                        onClick={() => handleOptionClick(opt)}
                        className={cn(
                          'justify-start',
                          showAnswer &&
                            (isCorrect
                              ? 'border-green-600 text-green-600'
                              : isSelected
                              ? 'border-red-600 text-red-600'
                              : 'opacity-50')
                        )}
                      >
                        {opt}
                      </Button>
                    );
                  })}
              </div>
              {showAnswer && (
                <p className="text-sm text-muted-foreground">
                  Correct Answer:{' '}
                  <span
                    className={cn(
                      'font-medium text-green-600',
                      currentQuestion.answer !== selected && 'text-red-600'
                    )}
                  >
                    {currentQuestion.answer}
                  </span>
                </p>
              )}
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
