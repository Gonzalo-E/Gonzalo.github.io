import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degreeOrCourse: string;
  period: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Personal Info (Strictly from CV)
  readonly name = 'Gonzalo Jose Esqueche Geldres';
  readonly role = 'CYBERSECURITY COORDINATOR';
  readonly email = 'gesquechegeldres@gmail.com';
  readonly phone = '+51 908 892 841';
  readonly location = 'Lima, Perú';
  readonly country = 'PERU';
  readonly linkedinUrl = 'https://linkedin.com/in/gonzaloesqueche-dev/';
  readonly linkedinDisplay = 'linkedin.com/in/gonzaloesqueche-dev/';

  // Copy state
  readonly copiedEmail = signal<boolean>(false);

  // Skills (Strictly from CV)
  readonly skills = {
    languages: ['Python', 'JavaScript', 'HTML'],
    frameworks: ['Angular'],
    databases: ['Dbeaver'],
    practices: [
      'Access Control',
      'Information Security',
      'Systems Auditing',
      'Network Monitoring',
      'Security Awareness',
      'Vulnerability Analysis',
      'Risk Management',
      'Information Handling',
    ],
  };

  // Experience (Strictly from CV)
  readonly experience: ExperienceItem[] = [
    {
      company: 'Planer.ia',
      role: 'CYBERSECURITY COORDINATOR',
      period: 'Feb 2026 – Present',
      location: 'Lima, Perú',
      bullets: [
        'Developed information security policies to ensure compliance and protect critical organizational assets.',
        'Coordinated cyber incident response processes, minimizing operational impact and ensuring business continuity.',
        'Conducted audits and risk assessments to identify vulnerabilities and strengthen internal security controls.',
        'Collaborated with technical and management teams to align cybersecurity strategies with corporate objectives.',
      ],
    },
  ];

  // Project (Strictly from CV)
  readonly project = {
    name: 'Re-run-Overlay-pokemmo',
    url: 'https://github.com/Gonzalo-E/Re-run-Overlay-pokemmo',
    displayUrl: 'github.com/Gonzalo-E/Re-run-Overlay-pokemmo',
    stack: ['JavaScript', 'HTML', 'CSS', 'Desktop Overlay'],
    description:
      'Develop of an interactive overlay for desktop utilizing JavaScript, HTML and CSS to optimize the progress in the game and improve the user experience with a non-intrusive overlay',
  };

  // Education (Strictly from CV)
  readonly education: EducationItem[] = [
    {
      institution: 'Universidad César Vallejo',
      degreeOrCourse: 'CYBERSECURITY ENGINEERING',
      period: 'Apr 2024 – Present',
    },
    {
      institution: 'ISIL',
      degreeOrCourse: 'BASIC PYTHON COURSE',
      period: 'Nov 2023 – Nov 2023',
    },
    {
      institution: 'Cisco',
      degreeOrCourse: 'COMPUTER HARDWARE BASICS',
      period: 'Jul 2024 – Jul 2024',
    },
    {
      institution: 'Cisco',
      degreeOrCourse: 'INTRODUCTION TO CYBERSECURITY',
      period: 'May 2025 – May 2026',
    },
    {
      institution: 'Cisco',
      degreeOrCourse: 'PYTHON ESSENTIALS 1',
      period: 'May 2025 – May 2025',
    },
    {
      institution: 'National University of Engineering',
      degreeOrCourse: 'BASIC PYTHON PROGRAMMING',
      period: 'Jan 2025 – Jan 2025',
    },
    {
      institution: 'National University of Engineering',
      degreeOrCourse: 'INTERMEDIATE PYTHON PROGRAMMING',
      period: 'May 2025 – May 2025',
    },
  ];

  // Languages (Strictly from CV)
  readonly languages: LanguageItem[] = [
    { language: 'English', level: 'B2 - Upper-Intermediate' },
    { language: 'Spanish', level: 'Native' },
  ];

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2400);
    } catch {
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2400);
    }
  }
}
