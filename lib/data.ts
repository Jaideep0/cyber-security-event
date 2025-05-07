import Sherlock from '@/components/tools/sherlock';
import type { Category, Tool } from './types';
import ExIf from '@/components/tools/exif';
import PasswordCracker from '@/components/tools/password-cracker';

export const categories: Category[] = [
  {
    id: 'authentication',
    name: 'Authentication & Password Security',
    description:
      'Tools and games focused on password strength, authentication methods, and securing access to systems.',
  },
  {
    id: 'osint',
    name: 'Open Source Intelligence (OSINT)',
    description:
      'Discover how publicly available information can be collected and analyzed for security purposes.',
  },
  {
    id: 'cyber-awareness',
    name: 'Cyber Awareness / Red vs. Blue Team',
    description:
      'Learn about attack and defense strategies through simulated scenarios and team-based challenges.',
  },
  {
    id: 'web-exploitation',
    name: 'Web Exploitation / Network Security',
    description:
      'Explore vulnerabilities in web applications and network infrastructure in a controlled environment.',
  },
  {
    id: 'digital-forensics',
    name: 'Digital Forensics',
    description:
      'Discover techniques used to collect, analyze, and preserve digital evidence.',
  },
  {
    id: 'network-reconnaissance',
    name: 'Network Reconnaissance',
    description:
      'Learn about tools and techniques used to gather information about network infrastructure.',
  },
  {
    id: 'network-scanning',
    name: 'Network Scanning / Visibility',
    description:
      'Explore methods to identify devices and services on a network.',
  },
  {
    id: 'data-hiding',
    name: 'Data Hiding / CTF Challenge',
    description:
      'Discover steganography and other techniques used to hide information within files.',
  },
  {
    id: 'email-security',
    name: 'Email Security / Metadata Forensics',
    description:
      'Learn about email security, header analysis, and metadata extraction.',
  },
];

export const tools: Tool[] = [
  {
    id: 'password-strength',
    name: 'Password Strength Challenge',
    categoryId: 'authentication',
    shortDescription:
      'Test your password creation skills and learn what makes a password strong or weak.',
    description:
      'Let participants create a password and receive immediate feedback on its strength. Learn about password scoring criteria and see optional live cracking attempts using tools like John the Ripper or hashcat.',
    setupInstructions:
      'Laptop/tablet with a password strength meter (JavaScript or Python-based frontend)\nClear explanation of password scoring criteria (length, complexity, common patterns)\nOptional live cracking attempt using John the Ripper or hashcat (for educational use only)',
    learningOutcomes: [
      'Understand what makes a password strong or weak',
      'Learn best practices for password creation',
    ],
    component: PasswordCracker,
  },
  {
    id: 'sherlock-osint',
    name: '"Who Am I?" – Sherlock Style OSINT Game',
    categoryId: 'osint',
    shortDescription:
      'Discover how usernames can be tracked across multiple platforms using OSINT techniques.',
    description:
      "Demonstrate the power (and risk) of OSINT by letting participants guess a target's social media usernames. Use the Sherlock tool to see where usernames are used across the internet.",
    setupInstructions:
      "Use the Sherlock tool (run on a controlled offline environment)\nPre-defined usernames and fake personas\nLet users enter a username and see where it's used",
    learningOutcomes: [
      'Learn how usernames and digital footprints can be tracked',
      'Understand the importance of digital privacy',
    ],
    component: Sherlock,
  },
  {
    id: 'guess-exploit',
    name: 'Guess the Exploit (Trivia Style)',
    categoryId: 'cyber-awareness',
    shortDescription:
      'Test your knowledge of common cyber attacks in this trivia-style game.',
    description:
      'Gamify cyber incident awareness by presenting attack scenarios. Players must identify the type of exploit from multiple choice options, with optional Red Team vs Blue Team competition.',
    setupInstructions:
      'Create a set of scenario cards (e.g., phishing, SQLi, XSS, spoofing)\nAsk participants to guess the exploit type from multiple choice options\nOptionally split into Red Team (attackers) vs Blue Team (defenders)',
    learningOutcomes: [
      'Increase awareness of common cyber attack vectors',
      'Encourage teamwork and threat classification',
    ],
  },
  {
    id: 'hack-the-box',
    name: 'Hack the Box (Offline Edition)',
    categoryId: 'web-exploitation',
    shortDescription:
      'Experience ethical hacking in a safe, controlled environment with guided challenges.',
    description:
      'Give participants a safe environment to explore vulnerabilities in web apps. Practice on deliberately vulnerable applications with step-by-step walkthroughs of basic attacks.',
    setupInstructions:
      'Local VM or network setup with pre-installed vulnerable apps:\nDVWA (Damn Vulnerable Web App)\nOWASP Juice Shop\nStep-by-step walkthroughs of basic attacks (SQLi, XSS, etc.)\nInstructions and safety rules for ethical testing',
    learningOutcomes: [
      'Hands-on experience with common web vulnerabilities',
      'Learn ethical hacking principles',
    ],
  },
  {
    id: 'exiftool',
    name: 'ExifTool – Metadata Discovery',
    categoryId: 'digital-forensics',
    shortDescription:
      'Uncover hidden information in image files that could compromise privacy.',
    description:
      'Show how photos can leak hidden metadata such as GPS, device model, and timestamps. Participants can bring their own photos to test (with privacy safeguards).',
    setupInstructions:
      'Run `exiftool image.jpg` on a sample photo\nLet participants bring a photo to test (ensure privacy/safety first)',
    learningOutcomes: [
      'Understand how metadata can expose sensitive information',
      'Learn to scrub or review metadata before sharing media',
    ],
    component: ExIf,
  },
  {
    id: 'nmap',
    name: 'Nmap – Port Scanning',
    categoryId: 'network-reconnaissance',
    shortDescription:
      'Learn how attackers probe for vulnerabilities and how to secure open ports.',
    description:
      'Teach attendees how port scanning works and what services might be exposed. Demonstrate scanning in a controlled environment and explain the results.',
    setupInstructions:
      'Run `nmap -sV localhost` or scan a local device in a closed test environment\nDisplay results to users and explain open ports/services',
    learningOutcomes: [
      'Understand how attackers probe for vulnerabilities',
      'Learn how to secure and monitor open ports',
    ],
  },
  {
    id: 'netdiscover',
    name: "Netdiscover – Who's on Your Network?",
    categoryId: 'network-scanning',
    shortDescription:
      'See how easily devices can be detected on local networks and why this matters for security.',
    description:
      'Demonstrate how devices can be detected on local networks. Visualize detected devices and explain the security implications.',
    setupInstructions:
      'Run `netdiscover -r 192.168.1.0/24` in an isolated lab network\nVisualize detected devices in a table format',
    learningOutcomes: [
      'Understand network enumeration basics',
      'Learn why open WiFi can be a security risk',
    ],
  },
  {
    id: 'steghide',
    name: 'Steghide – Steganography Game',
    categoryId: 'data-hiding',
    shortDescription:
      'Discover how messages can be hidden inside ordinary-looking images.',
    description:
      'Show how messages can be hidden inside images using steganography. Challenge visitors to extract hidden messages from prepared images.',
    setupInstructions:
      'Run `steghide embed -cf image.jpg -ef message.txt`\nChallenge visitors to use `steghide extract -sf image.jpg` to uncover the message',
    learningOutcomes: [
      'Understand the concept of steganography',
      'Learn how data hiding can be used in both good and bad contexts',
    ],
  },
  {
    id: 'creepy',
    name: 'Creepy – Geolocation via Social Media',
    categoryId: 'osint',
    shortDescription:
      'See how public posts can reveal your location history over time.',
    description:
      'Show how public posts can be used to track user locations over time. Visualize geolocations extracted from social media data on a map interface.',
    setupInstructions:
      'Use demo JSON data or photos with embedded EXIF geolocation\nVisualize geolocations on a map interface',
    learningOutcomes: [
      'Recognize the risks of location sharing in posts',
      'Encourage privacy-conscious social media behavior',
    ],
  },
  {
    id: 'email-header',
    name: 'Email Header Analyzer',
    categoryId: 'email-security',
    shortDescription:
      'Learn to identify suspicious emails by analyzing their headers and metadata.',
    description:
      'Demonstrate how email headers can reveal sender information and origin IP. Use sample headers to identify red flags and understand email tracing.',
    setupInstructions:
      'Use a sample Gmail or Outlook header in tools like:\nhttps://mxtoolbox.com/EmailHeaders.aspx',
    learningOutcomes: [
      'Learn to identify red flags in suspicious emails',
      'Understand how email tracing works',
    ],
  },
];
