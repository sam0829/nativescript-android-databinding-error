"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var app = require("tns-core-modules/application");
var Common = (function (_super) {
    __extends(Common, _super);
    function Common() {
        return _super.call(this) || this;
    }
    Common.prototype.greet = function () {
        return "Hello, NS";
    };
    return Common;
}(observable_1.Observable));
exports.Common = Common;
var Utils = (function () {
    function Utils() {
    }
    Utils.SUCCESS_MSG = function () {
        var msg = "Your plugin is working on " + (app.android ? 'Android' : 'iOS') + ".";
        return msg;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJwbHVnaW4uY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJwbHVnaW4uY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELGtEQUFvRDtBQUdwRDtJQUE0QiwwQkFBVTtJQUdwQztlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVNLHNCQUFLLEdBQVo7UUFDRSxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQVZELENBQTRCLHVCQUFVLEdBVXJDO0FBVlksd0JBQU07QUFZbkI7SUFBQTtJQUtBLENBQUM7SUFKZSxpQkFBVyxHQUF6QjtRQUNFLElBQUksR0FBRyxHQUFHLGdDQUE2QixHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxLQUFLLE9BQUcsQ0FBQztRQUMxRSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcblxuZXhwb3J0IGNsYXNzIENvbW1vbiBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ3JlZXQoKSB7XG4gICAgcmV0dXJuIFwiSGVsbG8sIE5TXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBTVUNDRVNTX01TRygpOiBzdHJpbmcge1xuICAgIGxldCBtc2cgPSBgWW91ciBwbHVnaW4gaXMgd29ya2luZyBvbiAke2FwcC5hbmRyb2lkID8gJ0FuZHJvaWQnIDogJ2lPUyd9LmA7XG4gICAgcmV0dXJuIG1zZztcbiAgfVxufVxuIl19