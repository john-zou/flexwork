const knex = require('./mysqlDB');

module.exports = {

  assignUserToWorkspace: function (workspaceId, userId) {
    return knex.raw("update `workspace` set StaffId = ? where WorkspaceId = ?;", [userId, workspaceId]);
  },

  getWorkspaceByFloorId: function (floorId) {
    return knex.raw("select * " +
      "from workspace inner join floor on workspace.FloorId = floor.FloorId "
      + "inner join `user` on user.StaffId = workspace.StaffId "
      + "where workspace.FloorId= " + floorId + ";");
  },

  getWorkspaceByStaffId: function (id) {
    return knex.raw("select * " +
      "from workspace inner join floor on workspace.FloorId = floor.FloorId "
      + "inner join `user` on user.StaffId = workspace.StaffId "
      + "where workspace.StaffId= " + id + ";");
  },

  getFeaturesByWorkspaceId: function (id) {
    return knex.raw("select feature.FeatureName from workspace natural join workspaceFeature"
      + " natural join feature where workspace.workspaceId = ?;", [id])
  },

  getByWorkspaceId: function (id) {
    return knex.raw('select * from workspace w where w.WorkspaceId = ?;', [id]);
  },

  deleteWorkspace: function (id) {
    return knex.raw('delete from workspace where WorkspaceId = ?', [id]);
  },

  updateWorkspace: function (id, workspaceName, staffId, floorId) {
    let queryRun = knex.raw("update `workspace` set WorkspaceName = ?, StaffId = ?, FloorId = ? " +
      "where WorkspaceId = ?;", [workspaceName, staffId, floorId, id]);
    return queryRun;
  },

}