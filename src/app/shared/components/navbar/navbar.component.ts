import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isClicked: boolean = false;
  theme: string = 'light';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (sessionStorage.getItem('theme') == 'dark') {
      document.body.classList.add('dark-theme');
      this.isClicked = true;
    } else {
      document.body.classList.remove('dark-theme');
      this.isClicked = false;
    }
  }
  toggleTheme() {
    document.body.classList.toggle('dark-theme');
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      sessionStorage.setItem('theme', 'dark');
    } else {
      sessionStorage.setItem('theme', 'light');
    }
  }
}
