import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ViewChild,
  Renderer2,
  signal
} from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  groups: SkillGroup[] = [
    { label: 'frontend', items: ['Angular', 'Vue', 'Next.js', 'HTML', 'CSS'] },
    { label: 'mobile', items: ['Flutter', 'Riverpod', 'Hive', 'Clean Architecture'] },
    { label: 'backend', items: ['Laravel', 'Node.js', 'Express', 'REST APIs'] },
    { label: 'data', items: ['MySQL', 'SQL Server', 'SQLite'] },
    { label: 'languages', items: ['JavaScript', 'PHP', 'C#', 'Java', 'C++', 'Dart', 'SQL'] },
    { label: 'tools & practice', items: ['Git', 'GitHub', 'Postman', 'OOP', 'MVC', 'API Design'] }
  ];

  @ViewChild('manifestEl') manifestEl?: ElementRef<HTMLElement>;

  cyclingText = signal('building next');

  private observer?: IntersectionObserver;
  private typeTimeout?: ReturnType<typeof setTimeout>;
  private readonly words = ['building next', 'shipping', 'learning', 'iterating on'];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.runTypewriter();
  }

  ngAfterViewInit(): void {
    const node = this.manifestEl?.nativeElement;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.replay(node);
          }
        }
      },
      { threshold: 0.35 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
  }

  private replay(node: HTMLElement): void {
    this.renderer.removeClass(node, 'manifest--play');
    // force reflow so the CSS animation restarts from the beginning
    void node.offsetWidth;
    this.renderer.addClass(node, 'manifest--play');
  }

  private runTypewriter(): void {
    let wordIndex = 0;

    const typeWord = (word: string, charIndex: number) => {
      this.cyclingText.set(word.slice(0, charIndex));
      if (charIndex < word.length) {
        this.typeTimeout = setTimeout(() => typeWord(word, charIndex + 1), 55);
      } else {
        this.typeTimeout = setTimeout(() => eraseWord(word, word.length), 1400);
      }
    };

    const eraseWord = (word: string, charIndex: number) => {
      this.cyclingText.set(word.slice(0, charIndex));
      if (charIndex > 0) {
        this.typeTimeout = setTimeout(() => eraseWord(word, charIndex - 1), 30);
      } else {
        wordIndex = (wordIndex + 1) % this.words.length;
        this.typeTimeout = setTimeout(() => typeWord(this.words[wordIndex], 0), 300);
      }
    };

    typeWord(this.words[0], 0);
  }
}
