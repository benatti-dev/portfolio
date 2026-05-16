import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Oleh Sunytsia | Java Angular Full-Stack Developer | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Java, Spring Boot, Angular, Full-Stack Developer, Software Engineer, MedTech, Microservices, Docker, TypeScript, PostgreSQL, Oracle' },
      { name: 'description', content: 'Full-Stack Software Engineer with 4+ years of experience in Java, Spring Boot, and Angular. Specialized in MedTech domain, microservices architecture, Oracle databases, and building high-reliability enterprise web applications.' },
    ]);
    
    AOS.init();
  }
}
