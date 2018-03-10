"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbplugin_common_1 = require("./dbplugin.common");
var app = require("tns-core-modules/application");
var YourPlugin = (function (_super) {
    __extends(YourPlugin, _super);
    function YourPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YourPlugin.prototype.startActivityFromPlugin = function () {
        app.android.foregroundActivity.startActivity(new android.content.Intent(app.android.context, com.abc.databindingsample.MainActivity.class));
    };
    return YourPlugin;
}(dbplugin_common_1.Common));
exports.YourPlugin = YourPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJwbHVnaW4uYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRicGx1Z2luLmFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBMkM7QUFDM0Msa0RBQW9EO0FBS3BEO0lBQWdDLDhCQUFNO0lBQXRDOztJQU1BLENBQUM7SUFKVSw0Q0FBdUIsR0FBOUI7UUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxJQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFORCxDQUFnQyx3QkFBTSxHQU1yQztBQU5ZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSAnLi9kYnBsdWdpbi5jb21tb24nO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZCwgY29tOiBhbnlcbmRlY2xhcmUgY29uc3QgSW50ZW50XG5cbmV4cG9ydCBjbGFzcyBZb3VyUGx1Z2luIGV4dGVuZHMgQ29tbW9uIHtcblxuICAgIHB1YmxpYyBzdGFydEFjdGl2aXR5RnJvbVBsdWdpbigpIDogdm9pZCB7XG4gICAgICAgIGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5zdGFydEFjdGl2aXR5KG5ld1xuICAgICAgICBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KGFwcC5hbmRyb2lkLmNvbnRleHQsIGNvbS5hYmMuZGF0YWJpbmRpbmdzYW1wbGUuTWFpbkFjdGl2aXR5LmNsYXNzKSk7XG4gICAgfVxufVxuIl19