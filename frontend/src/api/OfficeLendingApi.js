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

/**
* OfficeLending service.
* @module api/OfficeLendingApi
* @version 0.0.14
*/
class OfficeLendingApi {

  /**
  * Constructs a new OfficeLendingApi.
  * @alias module:api/OfficeLendingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }


  /**
   * Callback function to receive the result of the cancelAvailability operation.
   * @callback module:api/OfficeLendingApi~cancelAvailabilityCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel an Availability
   * @param {Number} id ID of the Availability to delete
   * @param {module:api/OfficeLendingApi~cancelAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
   */
  cancelAvailability(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling cancelAvailability");
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
      '/availabilities/{id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the createAvailability operation.
   * @callback module:api/OfficeLendingApi~createAvailabilityCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Availability} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an Availability (mark a workspace as available)
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {String} workspaceId
   * @param {Object} opts Optional parameters
   * @param {String} opts.comment
   * @param {module:api/OfficeLendingApi~createAvailabilityCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Availability}
   */
  createAvailability(startDate, endDate, workspaceId, opts, callback) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'startDate' is set
    if (startDate === undefined || startDate === null) {
      throw new Error("Missing the required parameter 'startDate' when calling createAvailability");
    }
    // verify the required parameter 'endDate' is set
    if (endDate === undefined || endDate === null) {
      throw new Error("Missing the required parameter 'endDate' when calling createAvailability");
    }
    // verify the required parameter 'workspaceId' is set
    if (workspaceId === undefined || workspaceId === null) {
      throw new Error("Missing the required parameter 'workspaceId' when calling createAvailability");
    }

    let pathParams = {
    };
    let queryParams = {
    };
    let headerParams = {
    };
    let formParams = {
      'startDate': startDate,
      'endDate': endDate,
      'workspaceId': workspaceId,
      'comment': opts['comment']
    };

    let authNames = [];
    let contentTypes = ['application/x-www-form-urlencoded'];
    let accepts = ['application/json'];
    let returnType = Availability;
    return this.apiClient.callApi(
      '/availabilities', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getAvailabilitiesByOwnerID operation.
   * @callback module:api/OfficeLendingApi~getAvailabilitiesByOwnerIDCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Availability>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Finds Availabilities by the Staff ID of the owner
   * The Availabilities of the Workspace(s) associated with the Staff ID will be found.
   * @param {Number} id the Staff ID of the office owner
   * @param {module:api/OfficeLendingApi~getAvailabilitiesByOwnerIDCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Availability>}
   */
  getAvailabilitiesByOwnerID(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getAvailabilitiesByOwnerID");
    }

    let pathParams = {
    };
    let queryParams = {
      'id': id
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
      '/availabilities/owner', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null, callback
    );
  }

  /**
   * Callback function to receive the result of the getFeatures operation.
   * @callback module:api/OfficeLendingApi~getFeaturesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<String>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get features by availabilityId, workspaceId, or all features if no params
   * @param {Object} opts Optional parameters
   * @param {Number} opts.availabilityId
   * @param {String} opts.workspaceId
   * @param {module:api/OfficeLendingApi~getFeaturesCallback} callback The callback function, accepting three arguments: error, data, response
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
   * Callback function to receive the result of the getLocations operation.
   * @callback module:api/OfficeLendingApi~getLocationsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<String>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * A list of all the location names
   * @param {module:api/OfficeLendingApi~getLocationsCallback} callback The callback function, accepting three arguments: error, data, response
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


}


export default new OfficeLendingApi();
