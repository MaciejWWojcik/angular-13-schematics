import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/index';

@Component({
    selector: 'app-test-component',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {

    private readonly subscription: Subscription = new Subscription();

    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
