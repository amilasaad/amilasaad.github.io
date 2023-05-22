import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  introMessage: String = "I'm a passionate programmer with a knack for problem-solving. From the moment I wrote my first line of code, I knew I had found my true calling. Let me share my journey and expertise with you."
  coreSkills: String = "With a strong foundation in Java, MuleSoft, and Angular, I've honed my skills to build robust and scalable applications. Additionally, I'm currently exploring the vast possibilities of Python, where I've already made significant strides."
  profBackground: String = "Throughout my career, I've had the opportunity to work on diverse projects, collaborating with talented teams to deliver high-quality solutions. From developing enterprise-level applications to integrating complex systems, I've gained valuable experience in applying my skills effectively."
  passionMotivation: String = "What fuels my passion for programming is the endless potential to create innovative solutions that can impact people's lives. I find joy in unraveling intricate problems and turning them into elegant, user-friendly applications. Technology is ever-evolving, and I embrace the challenge of staying ahead in this dynamic field."
  learnGrowth: String = "As a lifelong learner, I actively seek out opportunities to enhance my skills. I've completed various online courses and attended workshops to stay up-to-date with emerging technologies and industry trends. I believe continuous learning is crucial to adapt and thrive in the fast-paced world of programming."
  collaborativeAbilities: String = "Collaboration is at the heart of my work ethic. I thrive in team environments and value open communication and shared goals. I've had the privilege of working alongside talented professionals, contributing to successful projects and fostering a positive and productive work environment."
  projectPortfolio: String = "Throughout my career, I've worked on a range of exciting projects. One notable accomplishment includes developing a scalable e-commerce platform using Java and Angular, which significantly improved the user experience and increased sales. Feel free to explore my portfolio for more examples of my work."
  contactInfo: String = "If you'd like to get in touch to discuss potential collaborations or opportunities, please don't hesitate to reach out. You can contact me at [email protected] or by using the contact form on this website. I'm excited to connect and explore how we can work together!"

  data: any = [ { header2: 'Introduction', message: this.introMessage, headerPlace: 'left' }, 
  { header1: 'Core', header2: 'Skills', message: this.coreSkills, headerPlace: 'right' }, 
  { header1: 'Professional', header2: 'Background', message: this.profBackground, headerPlace: 'left' }, 
  { header1: 'Passion', header2: 'Motivation', message: this.passionMotivation, headerPlace: 'right' },
  { header1: 'Learning', header2: 'Growth', message: this.learnGrowth, headerPlace: 'left' },
  { header1: 'Collaborative', header2: 'Abilities', message: this.collaborativeAbilities, headerPlace: 'right' },
  { header1: 'Projects', header2: 'Portfolio', message: this.projectPortfolio, headerPlace: 'left' },
  { header1: 'Contact', header2: 'Information', message: this.contactInfo, headerPlace: 'right' } ]

}
