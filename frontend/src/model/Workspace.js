/**
 * Flex Work
 * This is the REST API Documentation for ICBC Flex Work, by Team Flex
 *
 * The version of the OpenAPI document: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Floor from './Floor';
import User from './User';

/**
 * The Workspace model module.
 * @module model/Workspace
 * @version 0.0.3
 */
class Workspace {
    /**
     * Constructs a new <code>Workspace</code>.
     * @alias module:model/Workspace
     */
    constructor() { 
        
        Workspace.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace} obj Optional instance to populate.
     * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Workspace();
                 console.log(data);
            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            }else if (data.hasOwnProperty('WorkspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['WorkspaceId'], 'String');
            }
            if (data.hasOwnProperty('staff')) {
                obj['staff'] = User.constructFromObject(data['staff']);
            }
            if (data.hasOwnProperty('floor')) {
                obj['floor'] = Floor.constructFromObject(data['floor']);
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} workspaceId
 */
Workspace.prototype['workspaceId'] = undefined;

/**
 * @member {module:model/User} staff
 */
Workspace.prototype['staff'] = undefined;

/**
 * @member {module:model/Floor} floor
 */
Workspace.prototype['floor'] = undefined;

/**
 * @member {Array.<String>} features
 */
Workspace.prototype['features'] = undefined;






export default Workspace;

