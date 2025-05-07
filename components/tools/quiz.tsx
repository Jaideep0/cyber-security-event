'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

const questions = [
  {
    question: 'What is the primary role of a Red Team in cybersecurity?',
    options: [
      'A) Defend systems from attacks',
      'B) Simulate attacks to identify vulnerabilities',
      'C) Monitor network traffic',
      'D) Develop security policies',
    ],
    answer: 'B) Simulate attacks to identify vulnerabilities',
  },
  {
    question: 'Which of the following is a common type of phishing attack?',
    options: [
      'A) Denial of Service',
      'B) Spear phishing',
      'C) SQL Injection',
      'D) Man-in-the-middle attack',
    ],
    answer: 'B) Spear phishing',
  },
  {
    question: 'What does a Blue Team focus on in cybersecurity?',
    options: [
      'A) Penetrating systems',
      'B) Protecting systems and detecting attacks',
      'C) Exploiting vulnerabilities',
      'D) Creating malicious software',
    ],
    answer: 'B) Protecting systems and detecting attacks',
  },
  {
    question:
      'Which of the following is an example of a social engineering attack?',
    options: [
      'A) SQL Injection',
      'B) Brute Force Attack',
      'C) Phishing Email',
      'D) Cross-Site Scripting (XSS)',
    ],
    answer: 'C) Phishing Email',
  },
  {
    question: 'What is the main purpose of a vulnerability assessment?',
    options: [
      "A) To exploit a system's weaknesses",
      'B) To identify and evaluate potential vulnerabilities in a system',
      'C) To protect against unauthorized access',
      'D) To test system uptime',
    ],
    answer: 'B) To identify and evaluate potential vulnerabilities in a system',
  },
  {
    question:
      'Which cyber attack involves flooding a network or website with excessive traffic, making it unavailable?',
    options: [
      'A) Phishing',
      'B) Distributed Denial of Service (DDoS)',
      'C) Man-in-the-middle',
      'D) Ransomware',
    ],
    answer: 'B) Distributed Denial of Service (DDoS)',
  },
  {
    question: 'What is an exploit in cybersecurity terms?',
    options: [
      'A) A security patch for software vulnerabilities',
      'B) A tool used to defend against cyber attacks',
      'C) A method of taking advantage of a vulnerability to breach a system',
      'D) A type of encryption used to protect sensitive data',
    ],
    answer:
      'C) A method of taking advantage of a vulnerability to breach a system',
  },
  {
    question:
      'What is the term for an attack where the attacker secretly intercepts and potentially alters communication between two parties?',
    options: [
      'A) Phishing',
      'B) Man-in-the-middle',
      'C) Malware',
      'D) Ransomware',
    ],
    answer: 'B) Man-in-the-middle',
  },
  {
    question:
      'What is an example of a common cyber defense technique used by Blue Teams to monitor traffic?',
    options: [
      'A) Firewalls',
      'B) Malware injection',
      'C) Data exfiltration',
      'D) Exploit kits',
    ],
    answer: 'A) Firewalls',
  },
  {
    question: 'What is a Zero-Day vulnerability?',
    options: [
      'A) A vulnerability that has been patched but still causes issues',
      'B) A vulnerability that is unknown to the software vendor and has no patch',
      'C) A type of malware attack',
      'D) A type of firewall used for defense',
    ],
    answer:
      'B) A vulnerability that is unknown to the software vendor and has no patch',
  },
];

export default function CyberQuizGame() {
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
                {currentQuestion.options.map(opt => {
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
