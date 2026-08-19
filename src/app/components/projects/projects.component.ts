import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  status: 'shipped' | 'building';
  name: string;
  problem: string;
  points: string[];
  stack: string[];
  repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      status: 'shipped',
      name: 'Tasky',
      problem: 'Planning a day shouldn\u2019t mean staring at a blank task list.',
      points: [
        'Layered Flutter app (Riverpod + repository pattern) over Hive for offline-first, local persistence',
        'AI planning pipeline turns high-level goals into structured, date-bound subtasks',
        'Node.js/Express backend integrates OpenAI with schema validation, retries, and fallback generation',
        'Soft-delete lifecycle with undo support and retention cleanup'
      ],
      stack: ['flutter', 'riverpod', 'hive', 'node.js', 'openai'],
      repo: 'https://github.com/NizaRam0'
    },
    {
      status: 'shipped',
      name: 'Prompty',
      problem: 'Turning a reference image into a usable, reusable prompt.',
      points: [
        'Versioned REST API in Laravel with Sanctum token auth and request validation',
        'Image ingestion pipeline handling validation, storage, and metadata persistence',
        'Dedicated AI service layer for encoding, prompt generation, and failure handling',
        'Vue 3 SPA with protected routing, upload/preview flow, and searchable history'
      ],
      stack: ['laravel', 'vue 3', 'openai vision', 'vercel'],
      repo: 'https://github.com/NizaRam0'
    },
    {
      status: 'shipped',
      name: 'MediCare Hub',
      problem: 'Coordinating patients, doctors, and admins without dropped bookings.',
      points: [
        'Role-based authentication and session management for three user types',
        'Appointment booking with dynamic slot generation and DB-level conflict prevention',
        'Doctor workflows for notes, prescriptions, and test reports',
        'Relational schema with foreign keys and integrity constraints for clinical data'
      ],
      stack: ['php', 'mysql'],
      repo: 'https://github.com/NizaRam0'
    }
  ];
}
