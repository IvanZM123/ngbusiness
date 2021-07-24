import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";

import { NotificationComponent } from "../components/notification/notification.component";

export interface Notification {
    text: string;
    icon: string;
    status: string;
}

@Injectable({
    providedIn: "root"
})
export class Notifier {
    constructor(private snackbar: MatSnackBar) {}

    notification(
        notification: Notification
    ): MatSnackBarRef<NotificationComponent> {
        return this.snackbar.openFromComponent(NotificationComponent, {
            duration: 5000,
            data: notification,
            panelClass: [`bg-${ notification.status }`]
        });
    }
}
