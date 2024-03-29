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
import BookingSummary from './BookingSummary';

/**
 * The Availability model module.
 * @module model/Availability
 * @version 0.0.3
 */
class Availability {
    /**
     * Constructs a new <code>Availability</code>.
     * @alias module:model/Availability
     */
    constructor() { 
        
        Availability.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Availability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Availability} obj Optional instance to populate.
     * @return {module:model/Availability} The populated <code>Availability</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Availability();
            console.log("Availability");
            console.log(data);

            if (data.hasOwnProperty('availabilityId')) {
                obj['availabilityId'] = ApiClient.convertToType(data['availabilityId'], 'Number');
            } else if (data.hasOwnProperty('AvailabilityId')) {
                obj['availabilityId'] = ApiClient.convertToType(data['AvailabilityId'], 'Number');
            }

            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            } else if (data.hasOwnProperty('StartDate')) {
                obj['startDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
            }

            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            } else if (data.hasOwnProperty('EndDate')) {
                obj['endDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
            } 

            if (data.hasOwnProperty('workspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['workspaceId'], 'String');
            } else if (data.hasOwnProperty('WorkspaceId')) {
                obj['workspaceId'] = ApiClient.convertToType(data['WorkspaceId'], 'String');
            }

            if (data.hasOwnProperty('workspaceName')) {
                obj['workspaceName'] = ApiClient.convertToType(data['workspaceName'], 'String');
            } else if (data.hasOwnProperty('WorkspaceName')) {
                obj['workspaceName'] = ApiClient.convertToType(data['WorkspaceName'], 'String');
            }
            if (data.hasOwnProperty('floorId')) {
                obj['floorId'] = ApiClient.convertToType(data['floorId'], 'Number');
            } else if (data.hasOwnProperty('FloorId')) {
                obj['floorId'] = ApiClient.convertToType(data['FloorId'], 'Number');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }else if (data.hasOwnProperty('Location')) {
                obj['location'] = ApiClient.convertToType(data['Location'], 'String');
            }
            if (data.hasOwnProperty('bookings')) {
                obj['bookings'] = ApiClient.convertToType(data['bookings'], [BookingSummary]);
            }

        }
        return obj;
    }


}

/**
 * @member {Number} availabilityId
 */
Availability.prototype['availabilityId'] = undefined;

/**
 * @member {Date} startDate
 */
Availability.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
Availability.prototype['endDate'] = undefined;

/**
 * @member {String} workspaceId
 */
Availability.prototype['workspaceId'] = undefined;

/**
 * @member {String} workspaceName
 */
Availability.prototype['workspaceName'] = undefined;

/**
 * @member {Number} floorId
 */
Availability.prototype['floorId'] = undefined;

/**
 * @member {String} location
 */
Availability.prototype['location'] = undefined;

/**
 * @member {Array.<module:model/BookingSummary>} bookings
 */
Availability.prototype['bookings'] = undefined;






export default Availability;

