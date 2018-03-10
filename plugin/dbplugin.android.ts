import { Common } from './dbplugin.common';
import * as app from "tns-core-modules/application";

declare const android, com: any
declare const Intent

export class YourPlugin extends Common {

    public startActivityFromPlugin() : void {
        app.android.foregroundActivity.startActivity(new
        android.content.Intent(app.android.context, com.abc.databindingsample.MainActivity.class));
    }
}
