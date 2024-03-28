import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  

    UserProfile = {
    name: "Ravi Kumar",
    contactInformation: {
        email: "ravikumar123@gmail.com",
        mobile: "0123456789"
    },
    bio: "Software Engineer | Tech Enthusiast",
    location: "New York, NY",
    website: "https://www.ravikumar.com",
    employment: "ABC Technologies",
    education: "University of ABC",
    interests: ["Programming", "Reading", "Hiking", "Travelling", "Games"],
  
};

atag='atag'

}