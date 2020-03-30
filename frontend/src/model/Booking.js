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
import User from './User';
import Workspace from './Workspace';
import BookingSummary from "./BookingSummary";

/**
 * The Booking model module.
 * @module model/Booking
 * @version 0.0.3
 */
class Booking {
    /**
     * Constructs a new <code>Booking</code>.
     * @alias module:model/Booking
     */
    constructor() { 
        
        Booking.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Booking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Booking} obj Optional instance to populate.
     * @return {module:model/Booking} The populated <code>Booking</code> instance.
     */
    static constructFromObject(data, obj) {
        console.log(data);
        if (data) {
            obj = obj || new Booking();

            if (data.hasOwnProperty('bookingId')) {
                obj['bookingId'] = ApiClient.convertToType(data['bookingId'], 'Number');
            } else if (data.hasOwnProperty('BookingId')) {
                obj['bookingId'] = ApiClient.convertToType(data['BookingId'], 'Number')};
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }else if(data.hasOwnProperty('StartDate')) {
                obj['startDate'] = ApiClient.convertToType(data['StartDate'], 'Date')}
             else if(data.hasOwnProperty('BookingStartDate')) {
                    obj['startDate'] = ApiClient.convertToType(data['BookingStartDate'], 'Date')};

            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }else  if (data.hasOwnProperty('EndDate')) {
                obj['endDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
            } else  if (data.hasOwnProperty('BookingEndDate')) {
                obj['endDate'] = ApiClient.convertToType(data['BookingEndDate'], 'Date');
            }
            if(data.hasOwnProperty('Confirmed')){
                obj['confirmed'] = ApiClient.convertToType(data['Confirmed'],'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }else  if (data.hasOwnProperty('User')) {
                obj['user'] = User.constructFromObject(data['User']);
            }
            if (data.hasOwnProperty('availabilityId')) {
                obj['availabilityId'] = ApiClient.convertToType(data['availabilityId'], 'Number');
            }else if (data.hasOwnProperty('AvailabilityId')) {
                obj['AvailabilityId'] = ApiClient.convertToType(data['AvailabilityId'], 'Number');
            }
            if (data.hasOwnProperty('OwnerWorksapceId')) {
                console.log(data['OwnerWorksapceId']);
                obj['workspaceId'] = Workspace.constructFromObject(data['OwnerWorksapceId']);
            }else  if (data.hasOwnProperty('ownerWorksapceId')) {
                obj['workspaceId'] = Workspace.constructFromObject(data['ownerWorksapceId']);
            }


        }
        console.log("OUTPUT");
        console.log(obj);
        return obj;
    }


}

/**
 * @member {Number} bookingId
 */
Booking.prototype['bookingId'] = undefined;

/**
 * @member {Date} startDate
 */
Booking.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
Booking.prototype['endDate'] = undefined;

/**
 * @member {module:model/User} user
 */
Booking.prototype['user'] = undefined;

/**
 * @member {Number} availabilityId
 */
Booking.prototype['availabilityId'] = undefined;

/**
 * @member {module:model/Workspace} workspace
 */
Booking.prototype['workspace'] = undefined;






export default Booking;

