import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-panel',
    templateUrl: './nav-panel.component.html',
    styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

}
