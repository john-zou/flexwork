/**
 * ICBC Flex Work
 * ICBC Flex Work REST Back End, Employee End Points
 *
 * The version of the OpenAPI document: 0.0.14
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Availability from '../model/Availability';
import Booking from '../model/Booking';
import BookingSummary from '../model/BookingSummary';

/**
* OfficeBooking service.
* @module api/OfficeBookingApi
* @version 0.0.14
*/
class OfficeBookingApi {

  /**
  * Constructs a new OfficeBookingApi.
  * @alias module:api/OfficeBookingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }


  /**
   * Callback function to receive the result of the cancelBooking operation.
   * @callback module:api/OfficeBookingApi~cancelBookingCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel an upcoming Booking
   * @param {Number} id ID of the Booking to delete
   * @param {module:api/OfficeBookingApi~cancelBookingCallback} callback The callback function, accepting three arguments: error, data, response
   */
  cancelBooking(id, callback) {
    console.log('called cancel');
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling cancelBooking");
    }

    let pathParams = {
      'id': id
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi(
      '/bookings/{id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the createBooking operation.
   * @callback module:api/OfficeBookingApi~createBookingCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BookingSummary} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Confirm a temporarily locked Booking
   * @param {Number} bookingId
   * @param {module:api/OfficeBookingApi~createBookingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BookingSummary}
   */
  createBooking(bookingId, callback) {
    let postBody = null;
    // verify the required parameter 'bookingId' is set
    if (bookingId === undefined || bookingId === null) {
      throw new Error("Missing the required parameter 'bookingId' when calling createBooking");
    }

    let pathParams = {
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
      'bookingId': bookingId
    };

    let authNames = [];
    let contentTypes = ['application/x-www-form-urlencoded'];
    let accepts = ['application/json'];
    let returnType = BookingSummary;
    return this.apiClient.callApi(
      '/bookings', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getAvailabilities operation.
   * @callback module:api/OfficeBookingApi~getAvailabilitiesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Availability>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Finds Availabilities, filtered by various properties, of which startDate and endDate are required
   * @param {Date} startDate The first date of the search range
   * @param {Date} endDate The last date of the search range
   * @param {Object} opts Optional parameters
   * @param {String} opts.location Office building location
   * @param {String} opts.floor Floor of building
   * @param {Array.<String>} opts.features Features to filter by
   * @param {module:api/OfficeBookingApi~getAvailabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Availability>}
   */
  getAvailabilities(startDate, endDate, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'startDate' is set
    if (startDate === undefined || startDate === null) {
      throw new Error("Missing the required parameter 'startDate' when calling getAvailabilities");
    }
    // verify the required parameter 'endDate' is set
    if (endDate === undefined || endDate === null) {
      throw new Error("Missing the required parameter 'endDate' when calling getAvailabilities");
    }

    let pathParams = {
    };
    let queryParams = {
      'startDate': startDate,
      'endDate': endDate,
      'location': opts['location'],
      'floor': opts['floor'],
      'features': this.apiClient.buildCollectionParam(opts['features'], 'multi')
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [Availability];
    return this.apiClient.callApi(
      '/availabilities', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getBookingsByUserID operation.
   * @callback module:api/OfficeBookingApi~getBookingsByUserIDCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Booking>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Finds Bookings by User ID
   * @param {Number} staffId The ID of the User
   * @param {module:api/OfficeBookingApi~getBookingsByUserIDCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Booking>}
   */
  getBookingsByUserID(staffId, callback) {
    let postBody = null;
    console.log(staffId);
    // verify the required parameter 'staffId' is set
    if (staffId === undefined || staffId === null) {
      throw new Error("Missing the required parameter 'staffId' when calling getBookingsByUserID");
    }

    let pathParams = {
    };
    let queryParams = {
      'staffId': staffId
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [Booking];
    return this.apiClient.callApi(
      '/bookings', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getFeatures operation.
   * @callback module:api/OfficeBookingApi~getFeaturesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<String>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get features by availabilityId, workspaceId, or all features if no params
   * @param {Object} opts Optional parameters
   * @param {Number} opts.availabilityId
   * @param {String} opts.workspaceId
   * @param {module:api/OfficeBookingApi~getFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<String>}
   */
  getFeatures(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {
    };
    let queryParams = {
      'availabilityId': opts['availabilityId'],
      'workspaceId': opts['workspaceId']
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ['String'];
    return this.apiClient.callApi(
      '/features', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getFloors operation.
   * @callback module:api/OfficeBookingApi~getFloorsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get either floor information of all floors, floorId, or by location
   * @param {Object} opts Optional parameters
   * @param {Number} opts.floorId
   * @param {String} opts.location
   * @param {module:api/OfficeBookingApi~getFloorsCallback} callback The callback function, accepting three arguments: error, data, response
   */
  getFloors(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {
    };
    let queryParams = {
      'floorId': opts['floorId'],
      'location': opts['location']
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = [Object];
    return this.apiClient.callApi(
      '/floors', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getLocations operation.
   * @callback module:api/OfficeBookingApi~getLocationsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<String>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * A list of all the location names
   * @param {module:api/OfficeBookingApi~getLocationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<String>}
   */
  getLocations(callback) {
    let postBody = null;

    let pathParams = {
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = ['String'];
    return this.apiClient.callApi(
      '/locations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getPackages operation.
   * @callback module:api/OfficeBookingApi~getPackagesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  async getPackagesTimed(time, startDate, endDate, opts) {
    const packages = await this.getPackages(startDate, endDate, opts);
    return { packages, time };
  }

  /**
   * Finds Availabilities or Booking Suggestion Packages
   * Finds Availabilities, filtered by start and end dates, optional location (desired floor IDs), and optional required features. will use multiple eligible offices to suggest a booking package if a single desk is not available for the duration.
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {Object} opts Optional parameters
   * @param {Array.<Number>} opts.floorIds
   * @param {Array.<Number>} opts.features
   * @param {module:api/OfficeBookingApi~getPackagesCallback} callback The callback function, accepting three arguments: error, data, response
   */
  getPackages(startDate, endDate, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'startDate' is set
    if (startDate === undefined || startDate === null) {
      throw new Error("Missing the required parameter 'startDate' when calling getPackages");
    }
    // verify the required parameter 'endDate' is set
    if (endDate === undefined || endDate === null) {
      throw new Error("Missing the required parameter 'endDate' when calling getPackages");
    }

    let pathParams = {
    };
    let queryParams = {
      'startDate': startDate,
      'endDate': endDate,
      'floorIds': this.apiClient.buildCollectionParam(opts['floorIds'], 'multi'),
      'features': this.apiClient.buildCollectionParam(opts['features'], 'multi')
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = Object; // manually changed
    return this.apiClient.callApi(
      '/packages', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getTopAvailabilities operation.
   * @callback module:api/OfficeBookingApi~getTopAvailabilitiesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Availability>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Finds top availabilities, not filtered
   * @param {Number} amount
   * @param {module:api/OfficeBookingApi~getTopAvailabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Availability>}
   */
  getTopAvailabilities(amount, callback) {
    let postBody = null;
    // verify the required parameter 'amount' is set
    if (amount === undefined || amount === null) {
      throw new Error("Missing the required parameter 'amount' when calling getTopAvailabilities");
    }

    let pathParams = {
      'amount': amount
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = [Availability];
    return this.apiClient.callApi(
      '/availabilities/top/{amount}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the lockBooking operation.
   * @callback module:api/OfficeBookingApi~lockBookingCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BookingSummary} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Temporarily lock a Booking as the User enters confirmation page
   * @param {Number} availabilityId
   * @param {Number} staffId
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {module:api/OfficeBookingApi~lockBookingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BookingSummary}
   */
  lockBooking(availabilityId, staffId, startDate, endDate, callback) {
    let postBody = null;
    // verify the required parameter 'availabilityId' is set
    if (availabilityId === undefined || availabilityId === null) {
      throw new Error("Missing the required parameter 'availabilityId' when calling lockBooking");
    }
    // verify the required parameter 'staffId' is set
    if (staffId === undefined || staffId === null) {
      throw new Error("Missing the required parameter 'staffId' when calling lockBooking");
    }
    // verify the required parameter 'startDate' is set
    if (startDate === undefined || startDate === null) {
      throw new Error("Missing the required parameter 'startDate' when calling lockBooking");
    }
    // verify the required parameter 'endDate' is set
    if (endDate === undefined || endDate === null) {
      throw new Error("Missing the required parameter 'endDate' when calling lockBooking");
    }

    let pathParams = {
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
      'availabilityId': availabilityId,
      'staffId': staffId,
      'startDate': startDate,
      'endDate': endDate
    };

    let authNames = [];
    let contentTypes = ['application/x-www-form-urlencoded'];
    let accepts = ['application/json'];
    let returnType = BookingSummary;
    return this.apiClient.callApi(
      '/lockWorkspace', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the unlockBooking operation.
   * @callback module:api/OfficeBookingApi~unlockBookingCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Unlocks a Booking before the 20 minute automatic unlock
   * For when the User navigates away from the confirmation page or closes the browser tab.
   * @param {Number} id ID of the Booking to delete
   * @param {module:api/OfficeBookingApi~unlockBookingCallback} callback The callback function, accepting three arguments: error, data, response
   */
  unlockBooking(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling unlockBooking");
    }

    let pathParams = {
      'id': id
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
    };

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;
    return this.apiClient.callApi(
      '/lockWorkspace/{id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }


}

export default new OfficeBookingApi();
