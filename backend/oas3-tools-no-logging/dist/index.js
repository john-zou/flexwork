'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_app_config_1 = require("./middleware/express.app.config");
function expressAppConfig(definitionPath, routingOptions) {
    return new express_app_config_1.ExpressAppConfig(definitionPath, routingOptions);
}
exports.expressAppConfig = expressAppConfig;
//# sourceMappingURL=index.js.map